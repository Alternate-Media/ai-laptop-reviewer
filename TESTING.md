# Automated Testing Strategy: Laptop Verdict

To maintain the "Anti-Hype" standard of technical excellence, this project employs a multi-layered testing strategy.

## 1. Static Analysis & Linting
**Goal**: Ensure code quality and content consistency.
- **Content (Markdown)**: Use `markdownlint` to enforce consistent formatting in review posts.
- **Code (HTML/JS/CSS)**: Use `Prettier` for consistent formatting and `ESLint` for any future JavaScript logic.
- **Tailwind**: Use `prettier-plugin-tailwindcss` to automatically sort utility classes.

## 2. Build Validation (CI)
**Goal**: Prevent broken builds from reaching production.
- **Smoke Test**: Every Pull Request must pass `hugo --gc --minify`.
- **Template Auditing**: Run `hugo --printPathWarnings` to detect duplicate URLs or missing resources.

## 3. Integrity Testing
**Goal**: Ensure no dead ends for users.
- **Link Checking**: Use `htmltest` or `lychee` to verify all internal and external links are active.
- **Image Validation**: Ensure all images have `alt` tags and valid source paths.

## 4. End-to-End (E2E) & UI Testing
**Goal**: Verify the user experience and layout stability.
- **Tool**: [Playwright](https://playwright.dev/) or [Cypress].
- **Tests**:
  - Verify homepage loads with the correct "Anti-Hype" branding.
  - Ensure the "Truth Report" layout (Prose) renders correctly on mobile, tablet, and desktop.
  - Validate that the navigation menu functions as expected.

## 5. Performance & Accessibility (A11y)
**Goal**: Maintain high technical performance and inclusivity.
- **Lighthouse CI**: Automate performance, accessibility, best practices, and SEO audits.
- **Target**: Maintain a minimum score of 90 in all categories.

---

## Proposed CI Pipeline (GitHub Actions)
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: jdx/mise-action@v2
      - name: Install dependencies
        run: cd laptop-reviews-site && npm install
      - name: Lint
        run: npm run lint # To be defined
      - name: Build
        run: cd laptop-reviews-site && hugo --gc --minify
      - name: Sanity Plus Check
        run: mise run test:sanity-plus
```
