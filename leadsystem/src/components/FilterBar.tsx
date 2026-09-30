import { Search } from 'lucide-react'
import type { LeadCategory, LeadStatus } from '../types'
import { LEAD_STATUSES } from '../types'

export type SortKey = 'total' | 'timing' | 'newest'

interface Props {
  search: string
  onSearch: (v: string) => void
  categories: LeadCategory[]
  activeCategory: LeadCategory | 'Alla'
  onCategory: (c: LeadCategory | 'Alla') => void
  activeStatuses: LeadStatus[]
  onToggleStatus: (s: LeadStatus) => void
  sortKey: SortKey
  onSort: (k: SortKey) => void
  hideStale: boolean
  onHideStale: (v: boolean) => void
}

export function FilterBar({
  search,
  onSearch,
  categories,
  activeCategory,
  onCategory,
  activeStatuses,
  onToggleStatus,
  sortKey,
  onSort,
  hideStale,
  onHideStale,
}: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Sök namn, roll, företag eller trigger…"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <select
          value={activeCategory}
          onChange={(e) => onCategory(e.target.value as LeadCategory | 'Alla')}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option value="Alla">Alla kategorier</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={sortKey}
          onChange={(e) => onSort(e.target.value as SortKey)}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option value="total">Sortera: Total score</option>
          <option value="timing">Sortera: Timing</option>
          <option value="newest">Sortera: Senast tillagd</option>
        </select>

        <label className="flex shrink-0 items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={hideStale}
            onChange={(e) => onHideStale(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400"
          />
          Dölj "Inte relevant"
        </label>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {LEAD_STATUSES.map((s) => {
          const active = activeStatuses.includes(s)
          return (
            <button
              key={s}
              onClick={() => onToggleStatus(s)}
              className={`rounded-full px-3 py-1 text-xs font-medium ring-1 transition ${
                active
                  ? 'bg-slate-900 text-white ring-slate-900'
                  : 'bg-white text-slate-500 ring-slate-200 hover:bg-slate-50'
              }`}
            >
              {s}
            </button>
          )
        })}
      </div>
    </div>
  )
}
