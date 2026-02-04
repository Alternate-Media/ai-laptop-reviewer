# Project Roadmap: Laptop Verdict

This document outlines the strategic direction and development phases for the Laptop Verdict project.

## Project Overview
For a high-level summary of the project goals and tech stack, see [README.md](README.md).

---

## Phase 1: Foundation (Current)
- [x] **Agent Definitions**: Establish core personas for "Anti-Hype" reviewing and Hugo operations.
- [x] **Site Scaffolding**: Initial Hugo site structure with Tailwind CSS v4 integration.
- [x] **Documentation**: Baseline `README.md`, `AGENTS.md`, and `TESTING.md` established.
- [x] **Automated Sanity Testing**: Implemented `test:sanity-plus` suite using `httpie-go` and `mise` tasks.
- [ ] **Data Sourcing Protocol**: Formalize how agents ingest technical data from trusted sources (Notebookcheck, PSREF, etc.).

## Phase 2: Technical Architecture & Performance
- [ ] **Structured Data (JSON-LD)**: Implement Schema.org `Product` and `Review` markup to ensure "Verdict" ratings appear in Google Search snippets.
- [ ] **Static Search**: Integrate [Pagefind](https://pagefind.app/) for lightning-fast, zero-dependency site-wide search.
- [ ] **Image Pipeline**: Automate WebP/AVIF conversion and responsive srcsets using Hugo's image processing.
- [ ] **Security Headers**: Configure CSP, HSTS, and X-Frame-Options in the deployment configuration.
- [ ] **Asset Optimization**: Implement Critical CSS and pre-loading for key typography (JetBrains Mono).

## Phase 3: Site Design & UX Refinement
- [ ] **Dark Mode Integration**: Implement a "Dim" or "OLED Black" mode toggle using Tailwind's `dark:` modifiers.
- [ ] **Data Visualization**: Integrate a lightweight charting library (e.g., Chart.js or SVG-based templates) to render sustained performance/thermal graphs directly from frontmatter data.
- [ ] **Comparison Tool**: Create a side-by-side comparison layout for SKU-vs-SKU analysis.
- [ ] **Micro-Interactions**: Add subtle hover states and progress indicators for long-form "Truth Reports".
- [ ] **Mobile-First Navigation**: Refine the header for better one-handed usability on mobile devices.

## Phase 4: Content Pipeline & Intelligence
- [ ] **Automated Content Ingestion**: Create a CLI tool to pipe agent outputs directly into Hugo page bundles.
- [ ] **Community Verification Loop**: Integrate a system to fetch and display the latest systemic QC issues from Reddit/Forums.
- [ ] **Price Tracking**: Add a lightweight hook to display real-world pricing from major retailers.

---
*Last Updated: 2026-02-05*