/*
# Create consultation_requests table (single-tenant, no auth)

1. New Tables
- `consultation_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — 聯絡人姓名
  - `phone` (text, not null) — 聯絡電話
  - `service_type` (text) — 意向服務類型 (e.g. 中式禮儀 / 佛教禮儀 / 環保葬 / 喪葬補助諮詢)
  - `message` (text) — 需求說明
  - `status` (text, default 'new') — 處理狀態: new / contacted / closed
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `consultation_requests`.
- Allow anon + authenticated INSERT only (public can submit consultations).
- Allow anon + authenticated SELECT (so a submission success confirmation can read back).
- No public UPDATE/DELETE — consultations are managed internally.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_type text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_consultations" ON consultation_requests;
CREATE POLICY "anon_select_consultations"
ON consultation_requests FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_consultations" ON consultation_requests;
CREATE POLICY "anon_insert_consultations"
ON consultation_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
