# EMFLS Energy

Site No. 18 · Household energy use and efficiency

- Repository: `emfls/emfls-energy`
- Production domain: <https://energy.emfls.com/>
- Framework: Astro + TypeScript
- Output: static files in `dist/`
- Build branch: `main`
- Current priority: Foundation/Search Launch under Owner Priority Override 11

The homepage explains how appliance power and runtime relate to kWh, and why a simple
estimate is not the same as a meter reading or utility bill. Current utility prices,
guaranteed savings, fake live data, and unsafe electrical advice are out of scope.

## Local checks

```sh
npm ci
npm test
npm run check
npm run build
```

The test script builds the static output and checks route, metadata, robots, sitemap, and
internal-link contracts.

## Indexing

Content routes intentionally remain `noindex,follow` until the minimum Production
Indexability Gate is evidenced. Property ownership or sitemap submission alone does not
authorize removing that protection.
