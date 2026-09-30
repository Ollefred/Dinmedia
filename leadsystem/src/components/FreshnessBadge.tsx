import { Flame, Sun, Cloud, Snowflake } from 'lucide-react'
import { daysSince, freshnessLabel, freshnessTier } from '../utils/scoring'

const TIER_STYLE: Record<string, { className: string; Icon: typeof Flame }> = {
  hot: { className: 'bg-rose-50 text-rose-700 ring-rose-200', Icon: Flame },
  warm: { className: 'bg-amber-50 text-amber-700 ring-amber-200', Icon: Sun },
  cool: { className: 'bg-sky-50 text-sky-700 ring-sky-200', Icon: Cloud },
  cold: { className: 'bg-slate-100 text-slate-500 ring-slate-200', Icon: Snowflake },
}

export function FreshnessBadge({ triggerDate }: { triggerDate: string }) {
  const days = daysSince(triggerDate)
  const tier = freshnessTier(days)
  const { className, Icon } = TIER_STYLE[tier]

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {freshnessLabel(days)}
    </span>
  )
}
