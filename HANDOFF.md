# Cloud Mem site — handoff

Public waitlist for **Cloud Mem** at [cloud-mem.ai](https://cloud-mem.ai). Consumer name is **Cloud Mem** (not CMEM Pro). Do not put Helix / CBrain / architecture claims on the landing.

## What this session shipped

Richer waitlist face on the static Vercel site:

- Claude Design–style motion/layout (ambient wash, drift, grain, sticky header, staggered rise, scroll reveal) ported as far as practical into one `index.html`
- One Origin-inspired mock section (`#how`) — three glass UI cards over atmospheric stages, after [Origin “How it works”](https://mobbin.com/sites/sections/c6938725-4ede-4e39-a774-c7194aaa055d)
- Both waitlist forms still `POST /api/waitlist` (Resend). `api/waitlist.js` is unchanged
- Brand lockup from PR #1 (`mark.svg` + Cloud Mem wordmark) kept

## What was *not* on this box

Local Claude Design exports were **not** in this cloud checkout:

- `cloud-mem-design/export/Cloud-mem Landing.html`
- `cloud-mem-design/export/extracted-template.html`
- screenshots under `cloud-mem-design/`

If those files appear, pixel-match motion/type against `extracted-template.html` and replace this recreation. Do not import CMEM token/coral marks from `thedotmack/cmem-ai`.

## Keep working

| Piece | Notes |
| --- | --- |
| `index.html` | Landing. Two `.waitlist-form`s share one fetch helper |
| `api/waitlist.js` | Resend contacts + segment `6688e250-d2a9-402f-9497-a30dadf67898`. Needs `RESEND_API_KEY` in Vercel — **do not commit it** |
| `mark.svg` / `favicon.svg` / `mood.png` | Existing assets |
| Preview | Vercel Git integration on this repo auto-deploys the branch |

`main` is not branch-protected. Merge → production updates automatically.
