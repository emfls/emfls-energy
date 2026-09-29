# Tasks

## Current — Foundation/Search Launch

- [x] Unique Korean household-energy homepage
- [x] About, Privacy, Contact, Editorial Policy, and custom 404 pages
- [x] Production canonical origin and shared basic/social metadata
- [x] Single sitemap and robots.txt
- [x] Automated generated-output contract tests
- [x] Astro check and local static build
- [x] Foundation commit `66b0939` deployed and core Production routes inspected in Chrome
- [ ] Reconcile Site Control Page and Site Registry from production evidence
- [x] Google URL-prefix ownership is SET and sitemap submission is acknowledged; latest GSC fetch is ISSUE (`가져올 수 없음`, 0 URLs)
- [x] Naver Search Advisor preflight completed; site registration and sitemap submission are BLOCKED_LOGIN
- [ ] IndexNow key deployment and actual submission
- [ ] Daum public registration/status lookup and evidence-backed result

## Current production limitations

- Home and Trust routes render on the custom domain. Visual inspection was at the available large desktop viewport only; fixed 1440/390/320 measurements are not recorded.
- Unknown paths show the custom 404 view, but exact HTTP 404 status is unverified.
- The production sitemap XML rendered with five same-host canonical URLs; GSC has not fetched it successfully. Direct `/robots.txt` inspection was blocked by the browser client, so do not claim live robots verification.
- Keep page-level `noindex,follow` until the minimum Production Indexability Gate has actual evidence.

## Deferred until Sites 1–100 Foundation/Search Launch

- Deep Guide and device-page collections
- Advanced calculators and the energy-audit checklist
- Detailed visual polish
- AdSense optimization

Keep page-level `noindex,follow` until the minimum Indexability Gate is evidenced in
Production. Provider registration and sitemap submission do not by themselves pass that gate.
