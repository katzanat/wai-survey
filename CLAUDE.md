# WAI — Women in AI Workshop Survey



## Project

A bilingual (Hebrew/English) pre-launch survey for an AI workshop targeting women. Built to validate demand, understand pain points, and collect interest before building the actual workshop.



## Stack

- Next.js 14+ (App Router)

- Inline styles (no Tailwind)

- Google Apps Script webhook for form submissions → Google Sheet

- Hosted image on GitHub: https://raw.githubusercontent.com/katzanat/wai/main/hero_survey.png



## Key files

- `app/page.tsx` — single-file React component, all survey logic + UI



## Submission flow

Form POSTs JSON to Apps Script webhook URL (stored as constant `WEBHOOK_URL` in page.tsx).

Uses `mode: "no-cors"` — standard Apps Script pattern, can't read response but write succeeds.



## Google Sheet columns (in order) — 16 columns

A: Timestamp
B: Name
C: Who
D: Age
E: Familiarity
F: Tools Used
G: Pain Points
H: Alternatives (NEW — added 2026-04-29)
I: Desired_Outcome (renamed from Topics — 2026-04-29)
J: Format
K: Timing
L: Duration
M: Willingness
N: Likelihood
O: Open Feedback
P: Language



## Question map (13 questions total as of 2026-04-29)

| # | ID | Type | Notes |
|---|---|---|---|
| 1 | name | text | required |
| 2 | who | radio | |
| 3 | age | radio | |
| 4 | familiarity | radio | triggers tools follow-up if "regular user" |
| 4b | tools | checkbox | conditional, not counted in Q numbering |
| 5 | pain | radio | single-select (was checkbox) |
| 6 | outcome | text (textarea) | was "topics" checkbox |
| 7 | alternatives | radio | new question added 2026-04-29 |
| 8 | format | radio | single-select (was checkbox) |
| 9 | timing | checkbox | multi-select |
| 10 | duration | radio | |
| 11 | price | radio | maps to "Willingness" column |
| 12 | likely | scale | 1–5 |
| 13 | open | text (textarea) | optional |



## Design principles

- Warm, personal tone ("זמנך" singular, not "זמנכן" plural)

- Hebrew is default language (RTL)

- Rose (#E8637A) + purple (#7C5CBF) + cream (#FAFAF8) palette

- Personal intro from Anat (not generic marketing copy)

- Pain-points-first approach

