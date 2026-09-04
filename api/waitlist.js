const SEGMENT_ID = '6688e250-d2a9-402f-9497-a30dadf67898';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return json(res, 204, {});
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });

  const key = process.env.RESEND_API_KEY;
  if (!key) return json(res, 500, { error: 'Waitlist not configured' });

  let body = '';
  for await (const chunk of req) body += chunk;
  let email = '';
  try {
    const parsed = JSON.parse(body || '{}');
    email = String(parsed.email || '').trim().toLowerCase();
  } catch {
    return json(res, 400, { error: 'Invalid JSON' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(res, 400, { error: 'Enter a valid email' });
  }

  const r = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      unsubscribed: false,
      segments: [SEGMENT_ID],
    }),
  });

  const text = await r.text();
  let data = {};
  try { data = JSON.parse(text); } catch { data = { raw: text }; }

  // Resend returns 409 if contact exists — treat as success for waitlist UX
  if (r.ok || r.status === 409) {
    return json(res, 200, { ok: true });
  }

  console.error('resend waitlist error', r.status, data);
  return json(res, 502, { error: 'Could not join waitlist right now' });
};
