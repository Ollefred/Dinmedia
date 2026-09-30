import type { Lead } from '../types'

const DAY_MS = 1000 * 60 * 60 * 24

// "Idag" i produktens perspektiv — i mockläget en fast referenspunkt
// så att demo-datan alltid känns aktuell oavsett när man testar.
export const TODAY = new Date('2026-09-30T12:00:00Z')

export function daysSince(dateIso: string): number {
  const then = new Date(dateIso + 'T00:00:00Z')
  return Math.max(0, Math.round((TODAY.getTime() - then.getTime()) / DAY_MS))
}

/**
 * Färskhet är kärnan i systemet: en trigger ska gradvis tappa värde.
 * 0-7 dagar: full styrka. 7-30 dagar: linjär nedtrappning till 60%.
 * 30-90 dagar: fortsatt nedtrappning till 20%. Därefter botten på 10%.
 */
export function freshnessFactor(days: number): number {
  if (days <= 7) return 1
  if (days <= 30) return 1 - (0.4 * (days - 7)) / 23
  if (days <= 90) return 0.6 - (0.4 * (days - 30)) / 60
  return 0.1
}

export type FreshnessTier = 'hot' | 'warm' | 'cool' | 'cold'

export function freshnessTier(days: number): FreshnessTier {
  if (days <= 7) return 'hot'
  if (days <= 21) return 'warm'
  if (days <= 45) return 'cool'
  return 'cold'
}

export function freshnessLabel(days: number): string {
  if (days === 0) return 'Idag'
  if (days === 1) return 'Igår'
  if (days < 7) return `${days} dagar sedan`
  if (days < 14) return '1 vecka sedan'
  if (days < 30) return `${Math.round(days / 7)} veckor sedan`
  if (days < 60) return '1 månad sedan'
  return `${Math.round(days / 30)} månader sedan`
}

/** Effektiv timing-score: rå score justerad för hur färsk triggern är. */
export function effectiveTiming(lead: Lead): number {
  const days = daysSince(lead.triggerDate)
  return lead.scores.timing * freshnessFactor(days)
}

/**
 * Total score viktar timing och content fit högre än commercial,
 * i linje med att tajming och passform för content är viktigast.
 */
export function totalScore(lead: Lead): number {
  const timing = effectiveTiming(lead)
  const { commercial, contentFit } = lead.scores
  const weighted = timing * 0.4 + contentFit * 0.35 + commercial * 0.25
  return Math.round(weighted * 10) / 10
}

export function scoreColor(score: number): string {
  if (score >= 8) return 'text-emerald-600 bg-emerald-50 ring-emerald-200'
  if (score >= 6) return 'text-amber-600 bg-amber-50 ring-amber-200'
  return 'text-rose-600 bg-rose-50 ring-rose-200'
}

export function scoreBarColor(score: number): string {
  if (score >= 8) return 'bg-emerald-500'
  if (score >= 6) return 'bg-amber-500'
  return 'bg-rose-500'
}
