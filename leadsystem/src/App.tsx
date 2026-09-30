import { useEffect, useMemo, useState } from 'react'
import { Radar, DatabaseZap } from 'lucide-react'
import type { Lead, LeadCategory, LeadStatus } from './types'
import { LEAD_STATUSES } from './types'
import { LeadCard } from './components/LeadCard'
import { LeadDetail } from './components/LeadDetail'
import { FilterBar, type SortKey } from './components/FilterBar'
import { StatsHeader } from './components/StatsHeader'
import { daysSince, totalScore } from './utils/scoring'
import { fetchLatestResearchRun, fetchLeads, updateLeadStatus, type LeadsSource, type ResearchRunSummary } from './data/leadsRepository'

// Demo-läge (ingen Supabase konfigurerad): statusändringar sparas bara
// lokalt i webbläsaren så man kan testa flödet utan en riktig databas.
const DEMO_STORAGE_KEY = 'dinmedia-lead-status-overrides'

function loadDemoOverrides(): Record<string, LeadStatus> {
  try {
    const raw = localStorage.getItem(DEMO_STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function applyDemoOverrides(leads: Lead[], overrides: Record<string, LeadStatus>): Lead[] {
  return leads.map((l) => (overrides[l.id] ? { ...l, status: overrides[l.id] } : l))
}

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [source, setSource] = useState<LeadsSource>('mock')
  const [lastRun, setLastRun] = useState<ResearchRunSummary | null>(null)
  const [selected, setSelected] = useState<Lead | null>(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<LeadCategory | 'Alla'>('Alla')
  const [activeStatuses, setActiveStatuses] = useState<LeadStatus[]>(LEAD_STATUSES)
  const [sortKey, setSortKey] = useState<SortKey>('total')
  const [hideStale, setHideStale] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const result = await fetchLeads()
      if (cancelled) return

      const finalLeads = result.source === 'mock' ? applyDemoOverrides(result.leads, loadDemoOverrides()) : result.leads
      setLeads(finalLeads)
      setSource(result.source)
      setLoading(false)

      if (result.source === 'supabase') {
        const run = await fetchLatestResearchRun()
        if (!cancelled) setLastRun(run)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleStatusChange(id: string, status: LeadStatus) {
    const previous = leads
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)))
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev))

    if (source === 'mock') {
      const overrides = loadDemoOverrides()
      overrides[id] = status
      localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(overrides))
      return
    }

    const ok = await updateLeadStatus(id, status)
    if (!ok) {
      // Kunde inte spara i Supabase — rulla tillbaka den optimistiska uppdateringen.
      setLeads(previous)
      setSelected((prev) => (prev && prev.id === id ? { ...prev, status: previous.find((l) => l.id === id)?.status ?? prev.status } : prev))
    }
  }

  function toggleStatus(s: LeadStatus) {
    setActiveStatuses((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const allCategories = useMemo(
    () => Array.from(new Set(leads.flatMap((l) => l.categories))).sort() as LeadCategory[],
    [leads],
  )

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
            <p className="text-sm text-slate-500">Personer med perfekt timing för personligt varumärke och content</p>
          </div>
        </div>
      </header>

      {source === 'mock' && !loading && (
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm text-amber-800 sm:px-6">
          <span className="font-semibold">Demo-läge:</span> ingen Supabase-databas konfigurerad, visar mockdata. Se{' '}
          <code className="rounded bg-amber-100 px-1 py-0.5">README.md</code> för hur du kopplar på skarp research.
        </div>
      )}

      <main className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6">
        <StatsHeader {...stats} />

        {source === 'supabase' && lastRun && (
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <DatabaseZap className="h-3.5 w-3.5" />
            Senaste research-körning: {lastRun.runDate} · {lastRun.candidatesEvaluated} kandidater granskade,{' '}
            {lastRun.leadsAdded} nya leads tillagda
          </div>
        )}

        <FilterBar
          search={search}
          onSearch={setSearch}
          categories={allCategories}
          activeCategory={category}
          onCategory={setCategory}
          activeStatuses={activeStatuses}
          onToggleStatus={toggleStatus}
          sortKey={sortKey}
          onSort={setSortKey}
          hideStale={hideStale}
          onHideStale={setHideStale}
        />

        {loading ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            Laddar leads…
          </div>
        ) : filtered.length === 0 ? (
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
