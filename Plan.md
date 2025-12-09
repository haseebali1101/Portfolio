# Build Plan: Portfolio Website

This file documents the key steps taken to assemble and deploy the portfolio website.

## 1) Project Setup
- Initialized project with React app scaffold and cleaned default boilerplate.
- Added repository metadata and deployment configs (`app.yaml`, `cloudbuild.yaml`, `Dockerfile`, `nginx.conf`).
- Installed dependencies via `npm install` (Lenis for smooth scrolling, React, etc.).

## 2) Content Architecture
- Centralized all portfolio data in `src/data/portfolioData.js` for easy updates (personal info, education, experience, skills, projects, interests, career objective).
- Defined reusable section components in `src/components` (About, Education, Experience, Skills, Projects, Contact, Header).
- Wired components in `src/App.js` to render the single-page layout

## 3) Layout & Navigation
- Built `Header` with smooth-scroll navigation, active-section tracking, and mobile menu toggle.
- Added anchor sections (`about`, `education`, `experience`, `skills`, `projects`, `contact`) to align with navigation.

## 4) Visual Design & UX
- Applied custom styling in component-scoped CSS files (dark theme, gradients, responsive grids, hover states).
- Implemented parallax-like scroll effects using Lenis; attached data attributes (`data-parallax-speed`) to sections.
- Ensured responsive behavior across desktop, tablet, and mobile via CSS media queries.

## 5) Content Population
- Extracted all portfolio content from the resume PDF file (`Haseeb Ali - Resume.pdf`).
- Filled `portfolioData.js` with personal details, experience bullet points, education history, skills categories, and project cards (title, description, impact, tech tags, links) based on resume information.
- Added visual assets under `public/`:
  - `profile.jpg` - Profile picture used in the About section
  - `campus-bg.jpg` - Backdrop/background image used throughout the website

## 6) Accessibility & Semantics
- Added `aria-label` attributes for interactive elements and meaningful alt text for images.
- Used semantic headings and list structures for screen readers.

## 7) Testing & Iteration
- Ran the dev server with `npm start` to iterate on layout, animations, and responsiveness.
- Adjusted copy, spacing, and scroll offsets to ensure smooth navigation.

## 8) Build & Deployment
- Produced optimized build with `npm run build`.
- Prepared deployment paths:
  - Google App Engine via `app.yaml`.
  - Container-based deploy via `Dockerfile` and `cloudbuild.yaml` (for Cloud Run/GCR).
  - Vercel deployment (current live host) using the production build from `npm run build`.
- Documented quickstart and setup steps in `README.md`, `QUICKSTART.md`, and `SETUP.md`.

## 9) Maintenance Guidelines
- Update site content by editing `src/data/portfolioData.js`.
- Tweak styling in component CSS files; keep section IDs consistent with navigation.
- Rebuild (`npm run build`) and redeploy after content or style changes.

