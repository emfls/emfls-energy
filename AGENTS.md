# AGENTS.md

## Repository isolation

This repository is only for Site No. 18:

- Repo: `emfls-energy`
- Domain: `https://energy.emfls.com/`

Do not modify another EMFLS repository while working here. In particular, never edit
`emfls.github.io`, `emfls-site`, or the root `emfls.com` games project.

If instructions clearly belong to another project, stop and report:

`다른 프로젝트 내용이 잘못 붙여넣어진 것으로 보인다`

## Source of truth

1. EMFLS Network 관제탑 and active Owner Priority Override
2. This site's Notion Site Control Page and current Site Registry row
3. Current Handoff Index child task page
4. Repository documentation
5. Actual code, GitHub, Cloudflare Pages, and Production evidence

The old Stage 2-only deferral is superseded by Owner Priority Override 11. Prioritize
minimum Foundation/Search Launch across Sites 1–100 before deep guides, advanced tools,
design polish, or AdSense optimization.

## Site-specific requirements

- Explain household electricity, gas, heating/cooling use and energy units.
- Keep calculations transparent; do not claim current tariffs without current official evidence.
- Do not promise savings or imply estimates are meter readings.
- Do not use fabricated live charts, tariff data, or unsupported facts.
- Do not recommend unsafe wiring changes or high-power DIY.
- Keep `noindex,follow` until the minimum Production Indexability Gate is evidenced.

## Operational boundaries

- One Site / one Repo per implementation cycle.
- Never edit shared/network architecture or another site from this checkout.
- Do not make risky DNS changes.
- Stop only the affected external step for login, 2FA, CAPTCHA, consent, applicant identity,
  or account approval; accurately record it and continue independent sites later.
- Record meaningful milestones in the active Notion work page as work happens.
- Update `PROJECT_HISTORY.md` with every code milestone and final QA/commit state.
