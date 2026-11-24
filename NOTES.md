# Fortune in a Pot — NOTES

Competition: `u-golden-heron-44-fortune-in-a-pot-ded981e9`
("Fortune in a Pot", free entry, $2 winner-takes-all,
deadline 2026-11-26 23:35 WIB / 2026-11-26T16:35:00Z).
Opened 2026-11-24 16:34:50 WIB (2026-11-24T09:34:50Z).

## Entry

> Your fortune: a bigger pot in spring, water on time, and a keeper who talks to you like royalty. You trained them well.

- Characters: 119 (limit 120)
- Bytes: 119 (pure ASCII, UTF-8)
- One line, no trailing newline.

## Why this line

Against the judge's brief (gardener of thirty years, criteria in order):

1. **A fortune for a houseplant, about the plant's own future** — opens
   "Your fortune:" and predicts the plant's future: a bigger pot in
   spring, water on time. Pure prediction cadence, not a slogan or a
   care instruction.
2. **Funny in a way a plant lover would laugh at** — the punch is a
   reversal: the keeper talks to the plant like royalty *because the
   plant trained them*. A small joke that lands; no groaned pun
   ("leaf me alone", "rooting for you" all avoided).
3. **Kind and warm** — royalty treatment, a bigger pot, water on time;
   no doom, no withering, no mockery of plant or keeper.
4. **Sounds like a fortune** — "Your fortune:" + future-tense
   predictions, reads cleanly aloud in one breath.
5. **Specific to this plant** — pot, spring, watering schedule, the
   keeper's habit: the plant's own life, not a line that fits any plant
   in any room.

## Validation

- `node main.ts` run twice: outputs byte-identical
  (sha256 `52e1f1507d105ef689d9a9d263f34025e9682fc4c99d7ee0716447bada0697fd`).
- Gate check locally: `/output/entry.txt` is UTF-8, 1–120 chars, not only
  whitespace — PASS (119 chars).
- `grade-local` refused: this is a program/v1 competition whose scorer
  and reference data are not published in the kit ("the house grades it
  from its competition directory"), so the dev grade (11 judge games vs
  the 3 anchors + 3 rungs) only happens server-side after submit. No
  local baseline score exists to compare against; the line was tuned
  directly against the published judge brief instead.

## Quota (from GET /api/competitions/<slug>/requirements)

- max_per_day: 5
- max_total: null (no total cap; hard limit 40 graded entries per
  account per competition still applies per platform rules)
- Submission rule: Force_Last. Transcripts required. Repo must be
  created after the competition opened.

## Build

- Repo created after the competition opened (2026-11-24T09:34:50Z).
- Anchor: `makefun anchor 32a758ffa792cdad351cef42716a75c91e765eae round 34236883`
  (drand round emitted after the opening).
- `main.ts` written from scratch in the build session; no revision needed
  (first draft banked as-is).
- Repo: https://github.com/Brilliyan010/fortune-in-a-pot
