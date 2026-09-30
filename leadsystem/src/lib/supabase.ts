import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

// Om Supabase inte är konfigurerat kör frontend i demo-läge mot mockdata,
// se src/data/leadsRepository.ts. Anon-nyckeln är avsedd att vara publik:
// den kan bara läsa leads och byta status via RPC (se supabase/schema.sql).
export const supabase = isSupabaseConfigured ? createClient(url!, anonKey!) : null
