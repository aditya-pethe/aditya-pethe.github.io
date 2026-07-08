# adityapethe.com

Personal site — [www.adityapethe.com](https://www.adityapethe.com). Built with
[Astro](https://astro.build) (static output) and the Aditya Pethe design system.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built dist/
```

## Structure

- `src/styles/tokens/` — design tokens vendored from the Claude design system (colors, type, spacing, fonts). Re-sync with `/design-sync`.
- `src/components/` — static ports of the design-system components (Button, Card, Tag, IconButton, Icon, ThemeToggle).
- `src/data/` — content: `site.ts`, `projects.ts`, `experience.ts`. Edit these to update the site.
- `src/pages/` — `index.astro` (home) and `resume.astro`.
- `public/` — static assets copied verbatim to the build: `images/`, `CNAME`, `resume.pdf`.

## Content TODOs

Search the `src/data/` files for `TODO`. Notably: current Meta role title/dates,
graduation year, and a current résumé PDF (`public/resume.pdf` is ~March 2023).

## Deploy

Pushing to the default branch runs `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. **One-time setup:** in the repo settings, set
Pages → Build and deployment → Source to **GitHub Actions**. The `CNAME` file in
`public/` preserves the custom domain across deploys; ensure DNS has a `www` CNAME
record pointing to `aditya-pethe.github.io`.
