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

## Phase 2: Content & Automation
- [ ] **Content Pipeline**: Automate the flow from agent-generated "Truth Reports" to Hugo Markdown files.
- [ ] **Deployment**: Set up CI/CD (GitHub Actions) for automated site builds and hosting (e.g., GitHub Pages/Netlify).
- [ ] **Initial Review Set**: Publish the first 10 "Anti-Hype" reviews for popular professional laptops (ThinkPad Z13, MacBook Pro M3, etc.).

## Phase 3: Enhancement & Intelligence
- [ ] **Interactive Comparison**: Implement a client-side or agent-driven tool for comparing laptop SKUs side-by-side.
- [ ] **Community Validation**: Add a mechanism to cross-reference agent findings with real-world user reports from Reddit/Forums.
- [ ] **Visual Data**: Integrate automated chart generation for thermal and performance benchmarks.

## Phase 4: Expansion
- [ ] **New Agent Verticals**: Expand into related categories (e.g., Monitor Reviewer, Workstation Peripheral Analyst).
- [ ] **API Access**: Provide a structured API for other tools to consume "The Truth Reports".

---
*Last Updated: 2026-02-05*
