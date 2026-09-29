# Project History

## 2026-09-30 — Site18 IndexNow groundwork (in progress)

- Revalidated the single-Site cycle in Notion, local checkout (`main`, `66b0939`), public GitHub repository, and the active `https://energy.emfls.com/` Production homepage before continuing.
- Naver Search Advisor is unauthenticated in the existing browser session. Per the Owner Directive, stopped before login/credentials; Naver site registration and sitemap submission remain blocked by account access.
- Confirmed from official IndexNow and Naver documentation that Naver supports IndexNow and that a host-root key text file can verify the submitting host. Generated an independent Site18 key file under `public/`; no other site's key is reused.
- Added a generated-output contract assertion for exactly one 32-hex root key file whose contents match its filename. Production deployment and actual IndexNow submission are not yet verified.
- Local verification: `npm test` PASS (6/6; static build included), `npm run check` PASS (11 Astro files, 0 errors/warnings/hints), and `git diff --check` PASS. Generated output includes the single key file and robots file; sitemap output remains the five expected canonical routes.
- Google ownership is set and its sitemap submission is acknowledged, but GSC's latest table still says `가져올 수 없음` with 0 discovered pages; keep the issue open and retain `noindex,follow`.
- Next: deploy only this Repo through the existing `main` connection, verify the live key file and production robots/sitemap, and make one IndexNow notification for the current canonical routes. Record Daum lookup as an independent provider step.

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
