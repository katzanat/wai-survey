\# WAI — Women in AI Workshop Survey



\## Project

A bilingual (Hebrew/English) pre-launch survey for an AI workshop targeting women. Built to validate demand, understand pain points, and collect interest before building the actual workshop.



\## Stack

\- Next.js 14+ (App Router)

\- Inline styles (no Tailwind)

\- Google Apps Script webhook for form submissions → Google Sheet

\- Hosted image on GitHub: https://raw.githubusercontent.com/katzanat/wai/main/hero\_survey.png



\## Key files

\- `app/page.js` — single-file React component, all survey logic + UI



\## Submission flow

Form POSTs JSON to Apps Script webhook URL (stored as constant `WEBHOOK\_URL` in page.js).

Uses `mode: "no-cors"` — standard Apps Script pattern, can't read response but write succeeds.



\## Google Sheet columns (in order)

Timestamp | Name | Who | Age | Familiarity | Tools Used | Pain Points | Topics | Format | Timing | Price | Likelihood | Open Feedback | Language



\## Design principles

\- Warm, personal tone ("זמנך" singular, not "זמנכן" plural)

\- Hebrew is default language (RTL)

\- Rose (#E8637A) + purple (#7C5CBF) + cream (#FAFAF8) palette

\- Pain-points-first a

