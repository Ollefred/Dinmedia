-- Din Media Lead Radar — databasschema
-- Kör detta i Supabase SQL Editor (Project > SQL Editor > New query) på ett nytt projekt.

create extension if not exists pgcrypto;

create table if not exists leads (
  id text primary key,
  name text not null,
  image_url text,
  current_role text not null,
  company text,
  location text,
  categories text[] not null default '{}',
  trigger_text text not null,
  trigger_type text not null,
  trigger_date date not null,
  why_call_now text not null,
  opening_angle text not null default '',
  ai_analysis jsonb not null,
  scores jsonb not null,
  contact jsonb not null default '{}'::jsonb,
  sources jsonb not null default '[]'::jsonb,
  status text not null default 'Ny',
  added_date date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint leads_status_check check (
    status in ('Ny', 'Researchad', 'Ska ringas', 'Ringd', 'Uppföljning', 'Möte bokat', 'Inte relevant')
  )
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_trigger_date_idx on leads (trigger_date desc);

-- Loggar varje research-körning så det syns i frontend att systemet faktiskt arbetar,
-- även de veckor inga (eller få) leads höll måttet.
create table if not exists research_runs (
  id uuid primary key default gen_random_uuid(),
  run_date date not null default current_date,
  candidates_evaluated int not null default 0,
  leads_added int not null default 0,
  leads_updated int not null default 0,
  notes text,
  created_at timestamptz not null default now()
);

-- Håller updated_at färsk vid varje skrivning från researchpipelinen (service role).
create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on leads;
create trigger leads_set_updated_at
  before update on leads
  for each row
  execute function set_updated_at();

-- Rad-nivå-säkerhet: alla får läsa, men bara service_role (researchpipelinen,
-- som kör med service role-nyckeln och därmed kringgår RLS helt) får skriva
-- nya leads eller ändra AI-analys/scores. Frontend (anon key) får bara ändra
-- status, och det görs genom funktionen nedan — aldrig med en direkt UPDATE.
alter table leads enable row level security;
alter table research_runs enable row level security;

drop policy if exists "Alla kan läsa leads" on leads;
create policy "Alla kan läsa leads"
  on leads for select
  using (true);

drop policy if exists "Alla kan läsa research-körningar" on research_runs;
create policy "Alla kan läsa research-körningar"
  on research_runs for select
  using (true);

-- security definer: körs med tabellägarens rättigheter, kringgår därmed RLS
-- internt, men anon-anroparen kan bara nå precis det denna funktion tillåter
-- (statusbyte) — aldrig fritt UPDATE/INSERT/DELETE på tabellen.
create or replace function set_lead_status(p_id text, p_status text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_status not in ('Ny', 'Researchad', 'Ska ringas', 'Ringd', 'Uppföljning', 'Möte bokat', 'Inte relevant') then
    raise exception 'Ogiltig status: %', p_status;
  end if;

  update leads set status = p_status where id = p_id;
end;
$$;

grant execute on function set_lead_status(text, text) to anon, authenticated;
