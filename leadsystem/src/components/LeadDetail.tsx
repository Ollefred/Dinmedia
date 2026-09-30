import { useEffect } from 'react'
import {
  X,
  Phone,
  Mail,
  PhoneCall,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Wallet,
  Target,
  ExternalLink,
} from 'lucide-react'
import { LinkedinIcon } from './icons/LinkedinIcon'
import type { Lead, LeadStatus } from '../types'
import { Avatar } from './Avatar'
import { CategoryTag } from './CategoryTag'
import { FreshnessBadge } from './FreshnessBadge'
import { ScoreBar, TotalScoreDial } from './ScoreBadge'
import { StatusSelect } from './StatusSelect'
import { daysSince, freshnessLabel, totalScore } from '../utils/scoring'

interface Props {
  lead: Lead
  onClose: () => void
  onStatusChange: (id: string, status: LeadStatus) => void
}

function Section({ icon: Icon, title, children }: { icon: typeof Lightbulb; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
        <Icon className="h-4 w-4 text-indigo-500" />
        {title}
      </h4>
      <div className="mt-1.5 text-sm leading-relaxed text-slate-600">{children}</div>
    </div>
  )
}

export function LeadDetail({ lead, onClose, onStatusChange }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const total = totalScore(lead)
  const days = daysSince(lead.triggerDate)

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-[2px]" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-2xl flex-col overflow-y-auto bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-slate-100 bg-white/95 p-5 backdrop-blur">
          <div className="flex items-start gap-3">
            <Avatar name={lead.name} imageUrl={lead.imageUrl} size="lg" />
            <div>
              <h2 className="text-lg font-bold text-slate-900">{lead.name}</h2>
              <p className="text-sm text-slate-500">{lead.currentRole}</p>
              {lead.company && <p className="text-xs text-slate-400">{lead.company}</p>}
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {lead.categories.map((c) => (
                  <CategoryTag key={c} label={c} />
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <TotalScoreDial value={total} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Total score</p>
                <p className="text-xs text-slate-500">Viktat: timing 40% · content fit 35% · commercial 25%</p>
              </div>
            </div>
            <StatusSelect status={lead.status} onChange={(s) => onStatusChange(lead.id, s)} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <ScoreBar label="Timing" value={lead.scores.timing} />
            <ScoreBar label="Commercial" value={lead.scores.commercial} />
            <ScoreBar label="Content Fit" value={lead.scores.contentFit} />
          </div>

          <div className="rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-700">
              <PhoneCall className="h-4 w-4" />
              Varför ringa nu?
            </p>
            <p className="mt-1.5 text-base font-medium leading-snug text-amber-900">{lead.whyCallNow}</p>
          </div>

          {lead.openingAngle && (
            <div className="rounded-xl bg-indigo-50 p-4 ring-1 ring-indigo-100">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-indigo-700">
                <Lightbulb className="h-4 w-4" />
                Öppningsvinkel till samtalet
              </p>
              <p className="mt-1.5 text-sm italic leading-relaxed text-indigo-900">"{lead.openingAngle}"</p>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{lead.triggerType}</p>
              <FreshnessBadge triggerDate={lead.triggerDate} />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{lead.trigger}</p>
            <p className="mt-1 text-xs text-slate-400">
              Trigger inträffade {lead.triggerDate} · {freshnessLabel(days)}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">
            <Section icon={Sparkles} title="Vem är personen?">
              {lead.aiAnalysis.whoIsThis}
            </Section>
            <Section icon={Target} title="Vad gör personen idag?">
              {lead.aiAnalysis.whatDoingNow}
            </Section>
            <Section icon={TrendingUp} title="Varför intressant just nu?">
              {lead.aiAnalysis.whyInterestingNow}
            </Section>
            <Section icon={Sparkles} title="Vad försöker de bygga?">
              {lead.aiAnalysis.whatBuilding}
            </Section>
            <Section icon={Wallet} title="Kommersiell potential">
              {lead.aiAnalysis.commercialPotential}
            </Section>
            <Section icon={Target} title="Naturlig anledning att ringa">
              {lead.aiAnalysis.naturalReasonToCall}
            </Section>
          </div>

          {lead.aiAnalysis.budgetSignals.length > 0 && (
            <div className="border-t border-slate-100 pt-4">
              <h4 className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                <Wallet className="h-4 w-4 text-indigo-500" />
                Signaler på budget ({'12k–20k kr/mån'})
              </h4>
              <ul className="mt-2 space-y-1.5">
                {lead.aiAnalysis.budgetSignals.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-sm font-semibold text-slate-900">Content fit</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{lead.aiAnalysis.contentFitReasoning}</p>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <h4 className="mb-2 text-sm font-semibold text-slate-900">Kontakt</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={lead.contact.phone ? `tel:${lead.contact.phone}` : undefined}
                className={`flex items-center gap-2 rounded-lg p-2 ${lead.contact.phone ? 'text-slate-700 hover:bg-slate-50' : 'text-slate-300'}`}
              >
                <Phone className="h-4 w-4" />
                {lead.contact.phone || 'Ingen telefon hittad'}
              </a>
              <a
                href={lead.contact.email ? `mailto:${lead.contact.email}` : undefined}
                className={`flex items-center gap-2 rounded-lg p-2 ${lead.contact.email ? 'text-slate-700 hover:bg-slate-50' : 'text-slate-300'}`}
              >
                <Mail className="h-4 w-4" />
                {lead.contact.email || 'Ingen e-post hittad'}
              </a>
              <a
                href={lead.contact.linkedin ? `https://${lead.contact.linkedin}` : undefined}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 rounded-lg p-2 ${lead.contact.linkedin ? 'text-slate-700 hover:bg-slate-50' : 'text-slate-300'}`}
              >
                <LinkedinIcon className="h-4 w-4" />
                {lead.contact.linkedin || 'Ingen LinkedIn hittad'}
              </a>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <h4 className="mb-2 text-sm font-semibold text-slate-900">Källor</h4>
            <div className="flex flex-col gap-1.5">
              {lead.sources.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-indigo-600 hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  {s.label}
                  {s.date && <span className="text-xs text-slate-400">· {s.date}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
