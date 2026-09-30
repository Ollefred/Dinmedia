import { scoreBarColor, scoreColor } from '../utils/scoring'

export function ScorePill({ label, value }: { label: string; value: number }) {
  return (
    <div className={`flex flex-col items-center rounded-lg px-2 py-1.5 ring-1 ${scoreColor(value)}`}>
      <span className="text-sm font-bold leading-none">{value.toFixed(1).replace(/\.0$/, '')}</span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide opacity-80">{label}</span>
    </div>
  )
}

export function ScoreBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value.toFixed(1).replace(/\.0$/, '')}/10</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${scoreBarColor(value)}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function TotalScoreDial({ value }: { value: number }) {
  const pct = Math.min(100, Math.max(0, (value / 10) * 100))
  const color = value >= 8 ? '#10b981' : value >= 6 ? '#f59e0b' : '#f43f5e'
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
        <circle
          cx="18"
          cy="18"
          r="15.5"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeDasharray={`${(pct / 100) * 97.4} 97.4`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-base font-bold text-slate-900">{value.toFixed(1)}</span>
      </div>
    </div>
  )
}
