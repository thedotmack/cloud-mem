# Canonical Cloud Mem landing source

This folder is the **design source of record** for [cloud-mem.ai](https://cloud-mem.ai). Do not freestyle a new waitlist face. Port structure, layout, type, and motion from here, then adapt **consumer-facing strings** to **Cloud Mem**.

## What is canonical

| Source | Role |
| --- | --- |
| Claude Design project [d4a95a86-786c-4711-b123-2022ce7270fe](https://claude.ai/design/p/d4a95a86-786c-4711-b123-2022ce7270fe) | Full-fidelity canvas (signed-in) |
| Asset-feed screenshots (`first-draft-hero`, `first-draft-visible`, `refinement-state`, `animate-1/2/3`) | Visual / motion truth used on this box |
| `extracted-template.html` | Compact structure + copy reconstruction from those Design export shots |
| Origin homepage (Mobbin + [useorigin.com](https://www.useorigin.com/)) | Section mocks **below** the Design hero — not a replacement for it |

The unpublished box export (`cloud-mem-design/export/Cloud-mem Landing.html`) was not on this checkout. `extracted-template.html` is reconstructed from the attached Design shots. If the real box HTML appears, replace this file and pixel-match against it.

## Visual language (locked)

- Warm paper `#F4F1EA`, ink `#16150F`
- Mega headline: **Oswald 200**, ~116px desktop (`clamp(56px, 10vw, 116px)`)
- Italics / mood captions: **Instrument Serif**
- UI / labels: **Inter** + **Oswald** tracked-out uppercase
- Pill email + pill CTA
- Soft rise entrance (headline → form → remembers-across). Ambient wash / light sweep. Integrations: 4px hover lift, 14s breathe
- `prefers-reduced-motion`: show final state, no motion
- Mood photograph (`/mood.png`) + caption *A quiet, permanent place for everything you’ve said.*

## Naming override (product lock)

Raw Design HTML / some shots still say **CMEM Pro**. Live product name is **Cloud Mem** (`cloud-mem.ai`).

Port the Design **look / structure / motion**. Rewrite waitlist strings:

| Raw Design | Live |
| --- | --- |
| `CMEM PRO — EARLY ACCESS` | `CLOUD MEM — EARLY ACCESS` |
| `Be first in line for CMEM Pro.` | `Be first in line for Cloud Mem.` |
| `Get early access` (header / form) | Keep the pill; prefer **Join the waitlist** on the live form |
| H1 `AI memory in the cloud` | Unchanged (Oswald 200; *memory* in Instrument Serif italic) |

Never ship Helix, CBrain, or CMEM Pro on the consumer face.

## Live page section order

1. **Hero** — Design shot: kicker, H1, waitlist
2. **How it works** — Origin three-card (Capture / Focus / Recall) after [Origin “How it works”](https://mobbin.com/sites/sections/c6938725-4ede-4e39-a774-c7194aaa055d)
3. **Features** — Remembers across agents / chats / projects
4. **Closing CTA** — mood + *quiet, permanent place* + waitlist. Never “closing / shutting down” copy
5. **FAQ**

`api/waitlist.js` stays the Resend POST. Do not commit secrets.
