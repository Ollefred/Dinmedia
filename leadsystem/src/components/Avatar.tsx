function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
}

const PALETTE = [
  'bg-indigo-100 text-indigo-700',
  'bg-rose-100 text-rose-700',
  'bg-amber-100 text-amber-700',
  'bg-emerald-100 text-emerald-700',
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
]

function colorFor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % PALETTE.length
  return PALETTE[hash]
}

export function Avatar({ name, imageUrl, size = 'md' }: { name: string; imageUrl?: string; size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'lg' ? 'h-16 w-16 text-lg' : size === 'sm' ? 'h-9 w-9 text-xs' : 'h-12 w-12 text-sm'

  if (imageUrl) {
    return <img src={imageUrl} alt={name} className={`${dims} rounded-full object-cover ring-2 ring-white shadow-sm`} />
  }

  return (
    <div
      className={`${dims} ${colorFor(name)} flex shrink-0 items-center justify-center rounded-full font-semibold ring-2 ring-white shadow-sm`}
    >
      {initials(name)}
    </div>
  )
}
