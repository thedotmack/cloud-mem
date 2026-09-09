# Cloud Mem site — handoff

Public waitlist for **Cloud Mem** at [cloud-mem.ai](https://cloud-mem.ai). Consumer name is **Cloud Mem** (not CMEM Pro). Do not put Helix / CBrain / architecture claims on the landing.

## Canonical design

See `design-source/README.md` and `design-source/extracted-template.html`. Those are source of record. The live `index.html` is the port.

## What this session shipped

- Design-faithful hero: Oswald 200 “AI *memory* in the cloud”, paper/ink, soft rise, Remembers across pills
- Origin-style How it works (Capture / Focus / Recall) after [Origin “How it works”](https://mobbin.com/sites/sections/c6938725-4ede-4e39-a774-c7194aaa055d)
- Features strip (agents / chats / projects)
- Closing CTA: mood + *quiet, permanent place* + waitlist (never “shutting down” copy)
- FAQ
- Both waitlist forms still `POST /api/waitlist`. `api/waitlist.js` unchanged

## Keep working

| Piece | Notes |
| --- | --- |
| `index.html` | Landing. Two `.waitlist-form`s share one fetch helper |
| `api/waitlist.js` | Resend contacts + segment `6688e250-d2a9-402f-9497-a30dadf67898`. Needs `RESEND_API_KEY` in Vercel — **do not commit it** |
| `mark.svg` / `favicon.svg` / `mood.png` | Existing assets |
| `design-source/` | Canonical notes + extracted template |

`main` is not branch-protected. Merge → production updates automatically.
