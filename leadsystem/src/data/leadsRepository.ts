import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { mockLeads } from './mockLeads'
import type { AiAnalysis, Contact, Lead, LeadCategory, LeadStatus, Scores, Source } from '../types'

interface LeadRow {
  id: string
  name: string
  image_url: string | null
  current_role: string
  company: string | null
  location: string | null
  categories: string[]
  trigger_text: string
  trigger_type: string
  trigger_date: string
  why_call_now: string
  opening_angle: string
  ai_analysis: AiAnalysis
  scores: Scores
  contact: Contact
  sources: Source[]
  status: LeadStatus
  added_date: string
}

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    imageUrl: row.image_url ?? undefined,
    currentRole: row.current_role,
    company: row.company ?? undefined,
    location: row.location ?? undefined,
    categories: row.categories as LeadCategory[],
    trigger: row.trigger_text,
    triggerType: row.trigger_type,
    triggerDate: row.trigger_date,
    whyCallNow: row.why_call_now,
    openingAngle: row.opening_angle,
    aiAnalysis: row.ai_analysis,
    scores: row.scores,
    contact: row.contact,
    sources: row.sources,
    status: row.status,
    addedDate: row.added_date,
  }
}

export type LeadsSource = 'supabase' | 'mock'

export interface ResearchRunSummary {
  runDate: string
  candidatesEvaluated: number
  leadsAdded: number
}

export async function fetchLeads(): Promise<{ leads: Lead[]; source: LeadsSource; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { leads: mockLeads, source: 'mock' }
  }

  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('added_date', { ascending: false })

  if (error || !data) {
    console.error('Kunde inte hämta leads från Supabase, visar mockdata istället.', error)
    return { leads: mockLeads, source: 'mock', error: error?.message }
  }

  return { leads: (data as LeadRow[]).map(rowToLead), source: 'supabase' }
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase) return false

  const { error } = await supabase.rpc('set_lead_status', { p_id: id, p_status: status })
  if (error) {
    console.error('Kunde inte uppdatera status i Supabase.', error)
    return false
  }
  return true
}

export async function fetchLatestResearchRun(): Promise<ResearchRunSummary | null> {
  if (!isSupabaseConfigured || !supabase) return null

  const { data, error } = await supabase
    .from('research_runs')
    .select('run_date, candidates_evaluated, leads_added')
    .order('run_date', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error || !data) return null

  return {
    runDate: data.run_date,
    candidatesEvaluated: data.candidates_evaluated,
    leadsAdded: data.leads_added,
  }
}
