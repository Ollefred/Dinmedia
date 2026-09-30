import { useMemo, useState } from 'react'
import { Radar } from 'lucide-react'
import { mockLeads } from './data/mockLeads'
import type { Lead, LeadCategory, LeadStatus } from './types'
import { LEAD_STATUSES } from './types'
import { LeadCard } from './components/LeadCard'
import { LeadDetail } from './components/LeadDetail'
import { FilterBar, type SortKey } from './components/FilterBar'
import { StatsHeader } from './components/StatsHeader'
import { daysSince, totalScore } from './utils/scoring'

const STORAGE_KEY = 'dinmedia-lead-status-overrides'

function loadStatusOverrides(): Record<string, LeadStatus> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function applyOverrides(leads: Lead[], overrides: Record<string, LeadStatus>): Lead[] {
  return leads.map((l) => (overrides[l.id] ? { ...l, status: overrides[l.id] } : l))
}

const ALL_CATEGORIES = Array.from(new Set(mockLeads.flatMap((l) => l.categories))).sort() as LeadCategory[]

export default function App() {
  const [leads, setLeads] = useState<Lead[]>(() => applyOverrides(mockLeads, loadStatusOverrides()))
  const [selected, setSelected] = useState<Lead | null>(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<LeadCategory | 'Alla'>('Alla')
  const [activeStatuses, setActiveStatuses] = useState<LeadStatus[]>(LEAD_STATUSES)
  const [sortKey, setSortKey] = useState<SortKey>('total')
  const [hideStale, setHideStale] = useState(true)

  function handleStatusChange(id: string, status: LeadStatus) {
    setLeads((prev) => {
      const next = prev.map((l) => (l.id === id ? { ...l, status } : l))
      const overrides = loadStatusOverrides()
      overrides[id] = status
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
      return next
    })
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev))
  }

  function toggleStatus(s: LeadStatus) {
    setActiveStatuses((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    let list = leads.filter((l) => {
      if (hideStale && l.status === 'Inte relevant') return false
      if (!activeStatuses.includes(l.status)) return false
      if (category !== 'Alla' && !l.categories.includes(category)) return false
      if (q) {
        const haystack = `${l.name} ${l.currentRole} ${l.company ?? ''} ${l.trigger}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })

    list = [...list].sort((a, b) => {
      if (sortKey === 'timing') return b.scores.timing - a.scores.timing
      if (sortKey === 'newest') return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
      return totalScore(b) - totalScore(a)
    })

    return list
  }, [leads, search, category, activeStatuses, sortKey, hideStale])

  const stats = useMemo(
    () => ({
      total: leads.length,
      newCount: leads.filter((l) => l.status === 'Ny').length,
      hotCount: leads.filter((l) => daysSince(l.triggerDate) <= 7 && l.status !== 'Inte relevant').length,
      toCallCount: leads.filter((l) => l.status === 'Ska ringas').length,
      meetingsCount: leads.filter((l) => l.status === 'Möte bokat').length,
    }),
    [leads],
  )

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-5 sm:px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Radar className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Din Media — Lead Radar</h1>
            <p className="text-sm text-slate-500">
              Personer med perfekt timing för personligt varumärke och content · mockdata-prototyp
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6">
        <StatsHeader {...stats} />

        <FilterBar
          search={search}
          onSearch={setSearch}
          categories={ALL_CATEGORIES}
          activeCategory={category}
          onCategory={setCategory}
          activeStatuses={activeStatuses}
          onToggleStatus={toggleStatus}
          sortKey={sortKey}
          onSort={setSortKey}
          hideStale={hideStale}
          onHideStale={setHideStale}
        />

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            <p className="font-medium">Inga leads matchar filtren just nu.</p>
            <p className="mt-1 text-sm">
              Det är avsiktligt — systemet lägger hellre till 10 extremt relevanta personer än 200 mediokra.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((lead) => (
              <LeadCard key={lead.id} lead={lead} onOpen={setSelected} onStatusChange={handleStatusChange} />
            ))}
          </div>
        )}
      </main>

      {selected && <LeadDetail lead={selected} onClose={() => setSelected(null)} onStatusChange={handleStatusChange} />}
    </div>
  )
}
