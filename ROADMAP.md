# Project Roadmap: Laptop Verdict

This document outlines the strategic direction and development phases for the Laptop Verdict project.

## Project Overview

For a high-level summary of the project goals and tech stack, see [README.md](README.md).

---

## Phase 1: Foundation (Current)

- [x] **Agent Definitions**: Establish core personas for "Anti-Hype" reviewing and Hugo operations.
- [x] **Site Scaffolding**: Initial Hugo site structure with Tailwind CSS v4 integration.
- [x] **Documentation**: Baseline `README.md`, `AGENTS.md`, and `TESTING.md` established.
- [x] **Automated Sanity Testing**: Implemented `test:sanity-plus` suite using `httpie-go` and `mise` tasks, including multi-page verification.
- [x] **Technical Archetype**: Create a specialized Hugo archetype (`archetypes/review.md`) with strictly typed frontmatter for TDP, PL1/PL2, Panel PWM, and SKU verification status.
- [x] **Design Tokens & UI Kit**: Formalize the Tailwind v4 `@theme` variables for the "Truth Factory" aesthetic and build reusable partials for "The Verdict" and "Spec Sheet" components.
- [x] **Common Pages**: Implement the "Methodology", "About", "Privacy Policy", and "Terms of Service" pages using the design system.
- [x] **UI Design Decisions**: Formalize a "Style Guide" partial or documentation covering button states, card behaviors, and typography scales.
- [x] **Automated UI Testing**: Integrated Playwright for smoke testing branding and navigation.
- [x] **Asset Strategy**: Define a structured directory for hardware photos (`/static/images/`). **Policy**: Posts may only use verified infographics or authentic hardware photography. AI-generated product images are strictly forbidden.
- [x] **CI/CD Strategy Iteration**: Local build emulation using `mise ci` task. Future path defined: Gitea Actions or Jenkins.
- [x] **GitHub Pages / Gitea Pages Deployment**: Configured `site:deploy` task for local-build-then-push deployment with live verification.
- [ ] **Agent Orchestration Protocol**: Define the execution flow where the `hugo-operations` agent calls the `laptop-reviewer` agent, including error-handling for insufficient research data.
- [ ] **Data Sourcing Protocol**: Formalize how agents ingest and weigh technical data from trusted sources (Notebookcheck, PSREF, etc.) to ensure data provenance.

## Phase 2: Technical Architecture & SEO

- [ ] **Structured Data (JSON-LD)**: Implement Schema.org `Product` and `Review` markup for Google Search snippets.
- [ ] **Static Search**: Integrate [Pagefind](https://pagefind.app/) for site-wide indexed search.
- [ ] **Image Pipeline**: Automate WebP/AVIF conversion using Hugo's built-in processing.
- [ ] **Security & Performance**: Configure CSP headers and implement JetBrains Mono pre-loading.

## Phase 3: Site Design & Visualization

- [ ] **Dark Mode Integration**: Implementation of "OLED Black" mode using Tailwind's `dark:` modifiers.
- [ ] **Thermal/Performance Graphing**: Develop SVG-based Hugo shortcodes to render sustained performance graphs directly from frontmatter.
- [ ] **Comparison Engine**: Create a side-by-side comparison layout for SKU-vs-SKU analysis.
- [ ] **Mobile-First UX**: Refine navigation and interactive elements for one-handed professional use.

## Phase 4: Future Automation & Intelligence

- [ ] **Content Pipeline**: Automate the end-to-end flow from research to published page bundle via CI/CD.
- [ ] **Community Verification Loop**: Integrate live fetching of systemic QC issues from Reddit and manufacturer forums.
- [ ] **Real-time Price Hooks**: Add lightweight price tracking for major retail SKUs.

---

_Last Updated: 2026-02-05_
