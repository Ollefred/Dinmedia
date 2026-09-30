import { LEAD_STATUSES, type LeadStatus } from '../types'

export const STATUS_STYLE: Record<LeadStatus, string> = {
  Ny: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  Researchad: 'bg-sky-50 text-sky-700 ring-sky-200',
  'Ska ringas': 'bg-amber-50 text-amber-800 ring-amber-200',
  Ringd: 'bg-violet-50 text-violet-700 ring-violet-200',
  Uppföljning: 'bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200',
  'Möte bokat': 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'Inte relevant': 'bg-slate-100 text-slate-500 ring-slate-200',
}

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${STATUS_STYLE[status]}`}>
      {status}
    </span>
  )
}

export function StatusSelect({
  status,
  onChange,
}: {
  status: LeadStatus
  onChange: (s: LeadStatus) => void
}) {
  return (
    <select
      value={status}
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => onChange(e.target.value as LeadStatus)}
      className={`cursor-pointer rounded-full border-0 px-2.5 py-1 text-xs font-semibold ring-1 focus:outline-none focus:ring-2 ${STATUS_STYLE[status]}`}
    >
      {LEAD_STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  )
}
