# Foundation/Search Launch Checklist

## Repository and minimum site

- [x] Existing Astro + TypeScript repository retained
- [x] Unique household-energy homepage with useful W/kWh explanation
- [x] About, Privacy, Contact, and Editorial Policy pages
- [x] Custom 404 page
- [x] Responsive shared layout, keyboard focus, and skip link
- [x] Canonical/social metadata for content pages
- [x] One canonical-domain sitemap and robots.txt
- [x] Contract tests, Astro check, and static build

## Production and search

- [x] Foundation commit `66b0939` is deployed to the active Cloudflare Pages project at `energy.emfls.com`
- [x] Chrome confirms the homepage, About, Privacy, Contact, and Editorial Policy routes on Production
- [ ] Unknown Production path displays the custom 404; exact HTTP 404 status remains unverified
- [ ] Verify canonical, robots, sitemap, and the Site18 IndexNow key against the current post-key deployment
- [ ] Minimum Production Indexability Gate evidence is complete; retain `noindex,follow` meanwhile
- [x] Google URL-prefix ownership is set and `sitemap.xml` submission is acknowledged; latest GSC status is `가져올 수 없음` / 0 discovered pages (ISSUE)
- [x] Naver preflight completed; registration and sitemap submission are BLOCKED_LOGIN because Search Advisor shows `로그인`
- [ ] Site18 IndexNow key file is added locally; production verification and actual submission are pending
- [ ] Daum result is recorded as SET, N/A, or ISSUE with evidence
- [ ] Site Control Page and Site Registry match observed evidence

## Latest provider evidence · 2026-09-30

- GSC has accepted a sitemap submission twice, but has not successfully read it yet. Browser inspection separately confirms the live XML content currently lists five canonical URLs.
- Naver registration requires an authenticated Search Advisor session. Stop before login or credentials and continue independent Search Launch work.
- The IndexNow protocol acknowledgement will mean `received`, not that a page was indexed.

## Indexing policy

Retain page-level `noindex,follow` until the minimum Production Indexability Gate is
complete. Search Console ownership or sitemap submission is not proof of indexing.

## Later work

Guide expansion, device pages, advanced calculators, editorial-depth polish, and AdSense
optimization remain deferred until Foundation/Search Launch work across Sites 1–100.
