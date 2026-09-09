# Design source for the Cloud Mem landing

Section layout is locked by the **Gemini-adapted mocks** (`gemini-mocks/01-hero.jpg` through `05-faq.jpg`). Those are Cloud Mem content on Origin/Mobbin structure. Claude Design shots and Origin refs informed the first draft and the card-grid language; they do not override the Gemini section order.

Live product name: **Cloud Mem**. Colors: paper `#F4F1EA`, ink `#16150F`.

## Required section order (do not reorder)

1. **Hero** — `gemini-mocks/01-hero.jpg`  
   Two-column. Left: Cloud Mem mark, Oswald “AI MEMORY / IN THE CLOUD”, rule, subcopy, waitlist (`Enter your work email` / `Join the waitlist →`). Right: pebble-on-linen photo (`/hero-pebble.jpg`).
2. **How it works** — `gemini-mocks/02-how-it-works.jpg`  
   Instrument Serif title. Three paper cards: Capture / Focus / Recall. Origin image 6 is layout reference only — Gemini paper cards win, not the dark glass Origin cards.
3. **Features** — `gemini-mocks/03-features.jpg`  
   “REMEMBERS ACROSS EVERYTHING YOU USE.” Agents / Chats / Projects + phone Memory Timeline.
4. **Closing CTA** — `gemini-mocks/04-cta.jpg` ONLY  
   Italic Instrument Serif: “A quiet, permanent place for everything you’ve said.” Second waitlist. Never “closing / shutting down” copy. No mood-photo overlay.
5. **FAQ** — `gemini-mocks/05-faq.jpg`  
   “Got questions? Find answers.” Six accordions.

## Claude Design / Origin refs (supporting)

- `extracted-template.html` — first Design-shot reconstruction (centered hero). Gemini hero is two-column; keep Gemini.
- Origin / Mobbin “How it works” — three-up card grid, not dark glass on this page.

## Waitlist

`POST /api/waitlist` via `.waitlist-form` / `.waitlist-email`. Do not change `api/waitlist.js`.
