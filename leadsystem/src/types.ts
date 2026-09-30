export type LeadStatus =
  | 'Ny'
  | 'Researchad'
  | 'Ska ringas'
  | 'Ringd'
  | 'Uppföljning'
  | 'Möte bokat'
  | 'Inte relevant'

export const LEAD_STATUSES: LeadStatus[] = [
  'Ny',
  'Researchad',
  'Ska ringas',
  'Ringd',
  'Uppföljning',
  'Möte bokat',
  'Inte relevant',
]

export type LeadCategory =
  | 'Föreläsare'
  | 'Programledare'
  | 'Skådespelare'
  | 'Författare'
  | 'Coach'
  | 'Expert'
  | 'Konsult'
  | 'Entreprenör'
  | 'Profil'
  | 'Före detta företagsledare'
  | 'Grundare'

export interface Source {
  label: string
  url: string
  date?: string
}

export interface AiAnalysis {
  whoIsThis: string
  whatDoingNow: string
  freshTrigger: string
  whyInterestingNow: string
  whatBuilding: string
  commercialPotential: string
  budgetSignals: string[]
  contentFitReasoning: string
  naturalReasonToCall: string
}

export interface Scores {
  timing: number
  commercial: number
  contentFit: number
}

export interface Contact {
  phone?: string
  email?: string
  linkedin?: string
}

export interface Lead {
  id: string
  name: string
  imageUrl?: string
  currentRole: string
  company?: string
  location?: string
  categories: LeadCategory[]
  trigger: string
  triggerType: string
  triggerDate: string // ISO date
  whyCallNow: string
  openingAngle: string
  aiAnalysis: AiAnalysis
  scores: Scores
  contact: Contact
  sources: Source[]
  status: LeadStatus
  addedDate: string // ISO date
}
