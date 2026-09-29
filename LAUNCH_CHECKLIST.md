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

- [x] Current Foundation/Search code commit `94b40ea` is deployed to the active Cloudflare Pages project at `energy.emfls.com`
- [x] Chrome confirms the homepage, About, Privacy, Contact, and Editorial Policy routes on Production
- [x] Unknown Production path displays the custom 404 and returns HTTP 404 with 0 redirects
- [x] Production homepage canonical, robots, sitemap, and Site18 IndexNow key were checked over HTTPS; key and robots are HTTP 200 and sitemap is HTTP 200 XML with five expected canonical URLs
- [ ] Minimum Production Indexability Gate evidence is complete; retain `noindex,follow` meanwhile
- [x] Google URL-prefix ownership is set and `sitemap.xml` submission is acknowledged; GSC still reports `가져올 수 없음` / 0 discovered pages (ISSUE)
- [x] Naver preflight completed; registration and sitemap submission are BLOCKED_LOGIN because Search Advisor shows `로그인`
- [x] Site18-specific IndexNow key is live; five canonical URLs received HTTP 202 Accepted, with key validation pending (not indexing proof)
- [x] Daum lookup recorded as `미등록 사이트`; new registration needs applicant name/email plus privacy/service consent, and Webmaster Beta setup needs PIN/terms consent
- [x] Site Control Page and Site Registry synced to observed evidence

## Latest provider evidence · 2026-09-30

- GSC has accepted a sitemap submission twice, but has not successfully read it yet. Browser inspection separately confirms the live XML content currently lists five canonical URLs.
- Naver registration requires an authenticated Search Advisor session. Stop before login or credentials and continue independent Search Launch work.
- Fixed 1440/390/320 viewport measurements are not recorded, so Baseline remains IN_PROGRESS even though the required production routes and exact 404 response were checked.
- The IndexNow protocol acknowledgement will mean `received`, not that a page was indexed.

## Indexing policy

Retain page-level `noindex,follow` until the minimum Production Indexability Gate is
complete. Search Console ownership or sitemap submission is not proof of indexing.

## Later work

Guide expansion, device pages, advanced calculators, editorial-depth polish, and AdSense
optimization remain deferred until Foundation/Search Launch work across Sites 1–100.
