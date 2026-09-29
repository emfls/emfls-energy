# Tasks

## Current — Foundation/Search Launch

- [x] Unique Korean household-energy homepage
- [x] About, Privacy, Contact, Editorial Policy, and custom 404 pages
- [x] Production canonical origin and shared basic/social metadata
- [x] Single sitemap and robots.txt
- [x] Automated generated-output contract tests
- [x] Astro check and local static build
- [x] Foundation commit `94b40ea` deployed; Production homepage, Trust routes, canonical, robots, sitemap, key, and exact HTTP 404 verified
- [x] Site Control Page and Site Registry reconciled to Production/provider evidence
- [x] Google URL-prefix ownership is SET and sitemap submission acknowledged; latest GSC fetch is ISSUE (`가져올 수 없음`, 0 URLs)
- [x] Naver Search Advisor preflight completed; site registration and sitemap submission are BLOCKED_LOGIN
- [x] Site-specific IndexNow key deployed and five canonical URLs submitted; global endpoint returned 202 Accepted (key validation pending)
- [x] Daum public status checked: `http://energy.emfls.com` is `미등록 사이트`; application requires applicant name/email and explicit privacy/service consent; Webmaster Beta setup needs PIN/terms consent
- [ ] Exact responsive visual measurements at 1440/390/320; keep Baseline IN_PROGRESS until recorded
- [ ] Minimum Production Indexability Gate; keep `noindex,follow` while GSC fetch is failing

## Current production limitations

- Home and Trust routes render on the custom domain. Visual inspection was at the available large desktop viewport only; fixed 1440/390/320 measurements are not recorded.
- Unknown path returns HTTP 404 / 0 redirects, and production canonical plus `noindex,follow` match the current launch policy.
- Production `robots.txt` and `sitemap.xml` return HTTP 200; sitemap XML lists five same-host canonical URLs. GSC has not fetched it successfully.
- Keep page-level `noindex,follow` until the minimum Production Indexability Gate has actual evidence.

## Deferred until Sites 1–100 Foundation/Search Launch

- Deep Guide and device-page collections
- Advanced calculators and the energy-audit checklist
- Detailed visual polish
- AdSense optimization

Keep page-level `noindex,follow` until the minimum Indexability Gate is evidenced in
Production. Provider registration and sitemap submission do not by themselves pass that gate.
