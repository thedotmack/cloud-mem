# Cloud Mem site — handoff

Public waitlist for **Cloud Mem** at [cloud-mem.ai](https://cloud-mem.ai). Consumer name is **Cloud Mem** only. Do not put CMEM Pro / Helix / CBrain on the landing.

## Canonical design

Section layout is locked by `design-source/gemini-mocks/01-hero.jpg` … `05-faq.jpg`. See `design-source/README.md`. Claude Design + Origin/Mobbin refs informed the first draft; they do not override Gemini section order.

Live page order:

1. Hero — two-column, Oswald “AI MEMORY / IN THE CLOUD”, waitlist, pebble photo
2. How it works — Capture / Focus / Recall paper cards
3. Features — Remembers across agents/chats/projects + Memory Timeline phone
4. Closing CTA — *A quiet, permanent place for everything you’ve said.* + waitlist (never “closing / shutting down”)
5. FAQ — six accordions

## What this session shipped

- Multi-section landing matching Gemini mocks 1–5 (not waitlist-only polish)
- `hero-pebble.jpg` cropped from Gemini hero mock
- Both waitlist forms still `POST /api/waitlist`. `api/waitlist.js` unchanged

## Keep working

| Piece | Notes |
| --- | --- |
| `index.html` | Landing. Two `.waitlist-form`s share one fetch helper |
| `hero-pebble.jpg` | Hero right-column photo |
| `api/waitlist.js` | Resend contacts + segment `6688e250-d2a9-402f-9497-a30dadf67898`. Needs `RESEND_API_KEY` in Vercel — **do not commit it** |
| `design-source/gemini-mocks/` | Section-layout truth |

`main` is not branch-protected. Merge → production updates automatically.
