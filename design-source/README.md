# Design source for the Cloud Mem landing

Section layout is locked by **`gemini-adapt/01-hero.png` … `05-faq.png`** at the repo root. Those five PNGs are the brief. Claude Design shots and Origin/Mobbin refs informed earlier drafts; they do not override the Gemini mocks.

Live product name: **Cloud Mem**. Colors: paper `#F4F1EA`, ink `#16150F`.

## Required section order

1. Hero — split layout, Oswald “AI MEMORY / IN THE CLOUD”, work-email waitlist, pebble photo
2. How it works — light cream, serif title, three **white** illustrated cards (Capture / Focus / Recall). Not dark Origin glass.
3. Features — “REMEMBERS ACROSS EVERYTHING YOU USE.” + phone Memory Timeline
4. Closing CTA — italic “A quiet, permanent place for everything you’ve said.” Never “Stay in the room.” / shutting-down copy.
5. FAQ — “Got questions? Find answers.” six icon accordions

## Waitlist

`POST /api/waitlist` via `.waitlist-form` / `.waitlist-email`. Do not change `api/waitlist.js`.
