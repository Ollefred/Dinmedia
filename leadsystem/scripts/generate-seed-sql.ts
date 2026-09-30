// Engångsverktyg: genererar supabase/seed.sql från src/data/mockLeads.ts
// Körs med: npx tsx scripts/generate-seed-sql.ts > supabase/seed.sql
import { mockLeads } from '../src/data/mockLeads'

function sqlString(v: string | undefined | null): string {
  if (v === undefined || v === null) return 'null'
  return `'${v.replace(/'/g, "''")}'`
}

function sqlArray(arr: string[]): string {
  return `array[${arr.map((s) => sqlString(s)).join(', ')}]`
}

function sqlJson(v: unknown): string {
  return `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`
}

const lines: string[] = []
lines.push('-- Genererad av scripts/generate-seed-sql.ts — kör efter schema.sql.')
lines.push('-- Seedar databasen med samma mockdata som frontend-demot körde mot,')
lines.push('-- så det finns realistiska exempel att testa mot direkt.')
lines.push('')

for (const l of mockLeads) {
  const cols = [
    'id',
    'name',
    'image_url',
    'current_role',
    'company',
    'location',
    'categories',
    'trigger_text',
    'trigger_type',
    'trigger_date',
    'why_call_now',
    'opening_angle',
    'ai_analysis',
    'scores',
    'contact',
    'sources',
    'status',
    'added_date',
  ]

  const values = [
    sqlString(l.id),
    sqlString(l.name),
    l.imageUrl ? sqlString(l.imageUrl) : 'null',
    sqlString(l.currentRole),
    l.company ? sqlString(l.company) : 'null',
    l.location ? sqlString(l.location) : 'null',
    sqlArray(l.categories),
    sqlString(l.trigger),
    sqlString(l.triggerType),
    sqlString(l.triggerDate),
    sqlString(l.whyCallNow),
    sqlString(l.openingAngle),
    sqlJson(l.aiAnalysis),
    sqlJson(l.scores),
    sqlJson(l.contact),
    sqlJson(l.sources),
    sqlString(l.status),
    sqlString(l.addedDate),
  ]

  lines.push(
    `insert into leads (${cols.join(', ')})\nvalues (${values.join(', ')})\non conflict (id) do nothing;`,
  )
  lines.push('')
}

process.stdout.write(lines.join('\n'))
