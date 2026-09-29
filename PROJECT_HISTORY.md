# Project History

## 2026-09-30 — Site18 Foundation/Search checkpoint

- Revalidated the single-Site cycle in Notion, local checkout (`main`, `66b0939`), public GitHub repository, and the active `https://energy.emfls.com/` Production homepage before continuing.
- Naver Search Advisor is unauthenticated in the existing browser session. Per the Owner Directive, stopped before login/credentials; Naver site registration and sitemap submission remain blocked by account access.
- Confirmed from official IndexNow and Naver documentation that Naver supports IndexNow and that a host-root key text file can verify the submitting host. Generated an independent Site18 key file under `public/`; no other site's key is reused.
- Added a generated-output contract assertion for exactly one 32-hex root key file whose contents match its filename. Code commit `94b40eac66d6f15090261d95c5d4c3d8c5cca87f` was pushed to `main`; Cloudflare Production deployment `e7835187-87d4-47de-909e-c7d3e6bfe37e` succeeded for that exact commit, and `energy.emfls.com` remains active.
- Local verification: `npm test` PASS (6/6; static build included), `npm run check` PASS (11 Astro files, 0 errors/warnings/hints), and `git diff --check` PASS. Production HTTP checks: home/key/robots/sitemap 200; homepage canonical verified; unknown path 404 with 0 redirects; sitemap contains exactly five canonical URLs.
- IndexNow POST for the five recent canonical pages returned HTTP 202 Accepted. Record receipt with key validation pending; this is not evidence of indexing.
- Google URL-prefix ownership is SET and sitemap submission acknowledged, but GSC still says `가져올 수 없음` with 0 discovered pages. Naver property and sitemap are BLOCKED_LOGIN. Daum lookup for `http://energy.emfls.com` returns `미등록 사이트`; application requires applicant name/email and privacy/service consent. Daum Webmaster Beta setup requires a PIN and terms consent. No applicant details, PIN, or consent was supplied.
- Baseline remains IN_PROGRESS because measured 1440/390/320 viewport and overflow evidence is absent. Keep `noindex,follow` while the indexability gate is incomplete.
- Site Control Page, Registry, and Handoff Index now record Site18 evidence and local blockers. Next ascending runnable site is Site19 `emfls-safety`; return to Site18's provider blockers when owner information/account access/consent is available.

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
