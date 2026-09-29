# Project History

## 2026-09-30 — Foundation/Search Launch horizontal pass

- Scope: Site No. 18 `emfls-energy` only, under Owner Priority Override 11. Starting branch `main`, HEAD `a80d2b851f54474f78b5410aa15207ce2d8edf06`, clean and matching GitHub `main`.
- Replaced the technical placeholder with a Korean household-energy homepage explaining W, kWh, a bounded conversion example, and limits of estimated use/cost.
- Added shared canonical/social metadata with a temporary `noindex,follow` guard, About, Privacy, Contact, Editorial Policy, custom 404, one static sitemap, and robots.txt.
- Added generated-output contract tests. `npm test` PASS (5/5); `npm run check` PASS (11 Astro files, 0 diagnostics).
- Repeated final pre-deploy verification on 2026-09-30: `npm test` PASS (5/5), `npm run check` PASS (11 files, 0 diagnostics), `git diff --check` PASS; GitHub `main` remains at the starting SHA and has no open PR.
- Local Astro development server exited before reporting readiness, so changed-code local-browser Visual QA is not run. Use the existing Production domain after the code deployment and record any remaining browser/HTTP limits accurately.
- Production remains on the original bootstrap deployment at this checkpoint; no DNS or Cloudflare configuration changed. Search registration and IndexNow submission have not started.
- Next: finish repository docs and static-output/diff audit, update Production through the existing GitHub→Cloudflare main flow, then verify deployed browser routes before attempting Search Console registrations.

## 2026-09-16 — Stage 2 Minimal Bootstrap

- Created minimal Astro + TypeScript static scaffold.
- Added thin-site `noindex, nofollow`.
- Added standard EMFLS repository documentation.
- Site-specific identity, content, infrastructure, and search work intentionally deferred.
