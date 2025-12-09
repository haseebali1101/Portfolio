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

## 10) Navigation & Scroll Fixes (Post-Deployment)

### 10.1) Navigation Scroll Positioning Fix
**Problem**: Navigation links scrolled to incorrect positions, with sections either partially cut off or scrolling too far.

**Solution Implemented**:
- **JavaScript Scroll Calculation** (`src/components/Header.js`):
  - Implemented dynamic header height calculation using `header.offsetHeight`
  - Used `offsetTop` traversal method for reliable absolute positioning (works with parallax transforms)
  - Calculates target position as `elementTop - headerHeight` to place section heading just below fixed header
  - Works with both Lenis smooth scroll and native browser scroll as fallback
  
- **CSS Scroll Margin** (`src/App.css`):
  - Added `scroll-margin-top: 100px` for desktop sections
  - Added `scroll-margin-top: 80px` for mobile sections (in media query)
  - Provides fallback for native anchor link navigation

**Files Modified**:
- `src/components/Header.js` - Updated `scrollToSection()` function with accurate offset calculation
- `src/App.css` - Added `scroll-margin-top` to base section styles
- `src/index.css` - Added CSS custom property `--header-height` for consistency

### 10.2) Gradient Background Bleeding Fix
**Problem**: Dark gradients from sections (especially Education) were bleeding into adjacent sections, creating visual overlap.

**Solution Implemented**:
- **Section Isolation** (`src/App.css` and all section CSS files):
  - Added `isolation: isolate` to all sections to create proper stacking contexts
  - Changed `overflow: visible` to `overflow: hidden` to contain backgrounds
  - Added `background-attachment: scroll` to ensure backgrounds scroll with content
  - Added `background-clip: padding-box` to clip backgrounds to padding area
  
- **Z-Index Hierarchy**:
  - Set all sections to `z-index: 1` for consistent stacking
  - Header remains at `z-index: 1000` to stay above all sections
  - Added `isolation: isolate` to header for proper stacking context

- **Increased Section Spacing**:
  - Increased bottom margin from `200px` to `400px` on desktop (2 inches)
  - Increased bottom margin from `140px` to `280px` on mobile
  - Creates clear visual separation between sections

**Files Modified**:
- `src/App.css` - Base section styles with isolation and overflow containment
- `src/components/About.css` - Added isolation and background containment
- `src/components/Education.css` - Added isolation and overflow hidden
- `src/components/Experience.css` - Added isolation and overflow hidden
- `src/components/Skills.css` - Added isolation and overflow hidden
- `src/components/Projects.css` - Added isolation and overflow hidden
- `src/components/Contact.css` - Added isolation and overflow hidden
- `src/components/Header.css` - Added isolation to header

### 10.3) Scroll Animation Optimization
**Problem**: Scroll animation felt heavy and sluggish when clicking navigation links.

**Solution Implemented**:
- **Faster Scroll Duration** (`src/components/Header.js`):
  - Reduced scroll duration from `1.2s` to `0.7s` (700ms) for snappier feel
  - Changed easing function from exponential to ease-out-cubic: `1 - (1-t)^3`
  - Provides smooth, responsive animation within 500-800ms range

- **Lenis Global Config** (`src/App.js`):
  - Reduced wheel scroll duration from `1.2s` to `1.0s`
  - Updated easing function to match navigation scroll (ease-out-cubic)

- **CSS Performance Optimizations** (`src/App.css`):
  - Added `will-change: scroll-position` for better scroll performance
  - Added `transform: translateZ(0)` to enable hardware acceleration
  - Added `-webkit-font-smoothing: antialiased` for smoother rendering

- **HTML Scroll Behavior** (`src/index.css`):
  - Changed from `scroll-behavior: auto` to `scroll-behavior: smooth`
  - Added `scroll-padding-top: 100px` for native anchor link support

**Files Modified**:
- `src/components/Header.js` - Optimized scroll duration and easing
- `src/App.js` - Updated Lenis global configuration
- `src/App.css` - Added scroll performance optimizations
- `src/index.css` - Enabled smooth scroll behavior with padding

### 10.4) Technical Details

**Scroll Calculation Method**:
```javascript
// Uses offsetTop traversal for reliable positioning
let elementTop = 0;
let currentElement = element;
while (currentElement) {
  elementTop += currentElement.offsetTop;
  currentElement = currentElement.offsetParent;
}
const targetPosition = elementTop - headerHeight;
```

**Key CSS Properties**:
- `isolation: isolate` - Creates new stacking context, prevents gradient bleeding
- `overflow: hidden` - Contains backgrounds within section boundaries
- `scroll-margin-top` - Accounts for fixed header in native scroll
- `will-change: scroll-position` - Optimizes scroll performance
- `transform: translateZ(0)` - Enables hardware acceleration

**Responsive Considerations**:
- Header height calculated dynamically (adapts to screen size)
- Different scroll margins for mobile (80px) vs desktop (100px)
- Increased spacing accounts for different viewport heights

**Result**: Navigation links now scroll accurately to sections with smooth, responsive animations. Sections have clear visual boundaries with no gradient bleeding or overlap.

