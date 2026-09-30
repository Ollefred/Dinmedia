import { Mail, Phone, Link2, PhoneCall } from 'lucide-react'
import { LinkedinIcon } from './icons/LinkedinIcon'
import type { Lead, LeadStatus } from '../types'
import { Avatar } from './Avatar'
import { CategoryTag } from './CategoryTag'
import { FreshnessBadge } from './FreshnessBadge'
import { ScorePill } from './ScoreBadge'
import { StatusSelect } from './StatusSelect'
import { totalScore } from '../utils/scoring'

interface Props {
  lead: Lead
  onOpen: (lead: Lead) => void
  onStatusChange: (id: string, status: LeadStatus) => void
}

export function LeadCard({ lead, onOpen, onStatusChange }: Props) {
  const total = totalScore(lead)

  return (
    <div
      onClick={() => onOpen(lead)}
      className="group flex cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <Avatar name={lead.name} imageUrl={lead.imageUrl} />
          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-900 group-hover:text-indigo-600">{lead.name}</h3>
            <p className="truncate text-sm text-slate-500">{lead.currentRole}</p>
            {lead.company && <p className="truncate text-xs text-slate-400">{lead.company}</p>}
          </div>
        </div>
        <FreshnessBadge triggerDate={lead.triggerDate} />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {lead.categories.map((c) => (
          <CategoryTag key={c} label={c} />
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-amber-50 p-3 ring-1 ring-amber-100">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-700">
          <PhoneCall className="h-3.5 w-3.5" />
          Varför ringa nu?
        </p>
        <p className="mt-1 text-sm font-medium leading-snug text-amber-900">{lead.whyCallNow}</p>
      </div>

      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{lead.triggerType}</p>
        <p className="mt-0.5 line-clamp-2 text-sm text-slate-600">{lead.trigger}</p>
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <ScorePill label="Timing" value={lead.scores.timing} />
        <ScorePill label="Comm." value={lead.scores.commercial} />
        <ScorePill label="Content" value={lead.scores.contentFit} />
        <div className="ml-auto flex flex-col items-center rounded-lg bg-slate-900 px-3 py-1.5 text-white">
          <span className="text-sm font-bold leading-none">{total}</span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide opacity-80">Total</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-2.5 text-slate-400">
          <Phone className={`h-4 w-4 ${lead.contact.phone ? 'text-slate-500' : 'opacity-30'}`} />
          <Mail className={`h-4 w-4 ${lead.contact.email ? 'text-slate-500' : 'opacity-30'}`} />
          <LinkedinIcon className={`h-4 w-4 ${lead.contact.linkedin ? 'text-slate-500' : 'opacity-30'}`} />
          <span className="flex items-center gap-1 text-xs">
            <Link2 className="h-3.5 w-3.5" />
            {lead.sources.length}
          </span>
        </div>
        <StatusSelect status={lead.status} onChange={(s) => onStatusChange(lead.id, s)} />
      </div>
    </div>
  )
}
