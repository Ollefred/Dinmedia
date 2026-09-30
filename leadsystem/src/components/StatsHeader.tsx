import { Flame, Phone, CalendarCheck, Users } from 'lucide-react'

interface Props {
  total: number
  newCount: number
  hotCount: number
  toCallCount: number
  meetingsCount: number
}

function Stat({ icon: Icon, label, value, tone }: { icon: typeof Flame; label: string; value: number; tone: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${tone}`}>
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <p className="text-lg font-bold leading-none text-slate-900">{value}</p>
        <p className="text-xs text-slate-500">{label}</p>
      </div>
    </div>
  )
}

export function StatsHeader({ total, newCount, hotCount, toCallCount, meetingsCount }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      <Stat icon={Users} label="Leads i systemet" value={total} tone="bg-slate-100 text-slate-600" />
      <Stat icon={Flame} label="Färska (≤7 dagar)" value={hotCount} tone="bg-rose-50 text-rose-600" />
      <Stat icon={Users} label="Nya, ej researchade" value={newCount} tone="bg-indigo-50 text-indigo-600" />
      <Stat icon={Phone} label="Ska ringas" value={toCallCount} tone="bg-amber-50 text-amber-600" />
      <Stat icon={CalendarCheck} label="Möten bokade" value={meetingsCount} tone="bg-emerald-50 text-emerald-600" />
    </div>
  )
}
