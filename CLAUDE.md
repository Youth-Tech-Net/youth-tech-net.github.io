# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

YouthTechNet is a React-based website for an Australian not-for-profit organization focused on sociotechnical governance. The site showcases the organization's mission, team, and provides pathways for young Australians to get involved through university hubs, research projects, and policy advocacy.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Technology Stack

- **Framework**: React 19 with Vite 6
- **Routing**: React Router DOM with HashRouter
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons

## Architecture

### Routing Strategy

This site uses **HashRouter** instead of BrowserRouter to ensure compatibility with GitHub Pages static hosting. All routes are prefixed with `#/` (e.g., `#/about`, `#/get-involved`).

**Critical**: Never change HashRouter to BrowserRouter as it will break GitHub Pages deployment.

### Directory Structure

```
src/
├── components/
│   ├── common/          # Reusable UI (Button, Card, AnimatedSection, etc.)
│   ├── home/            # Home page sections (Hero, PillarsSection, etc.)
│   ├── team/            # Team page components (CoFounderCard, PlaceholderCard)
│   ├── engage/          # Get Involved components (PathwayCard)
│   └── layout/          # Header, Footer, Layout
├── pages/               # Route-level pages (Home, About, GetInvolved, Contact)
├── styles/              # Global CSS with design system
├── utils/               # Configuration (externalLinks.js, content.js)
└── assets/              # Images (logo files)
```

## Design System

### Color Palette

Official brand colors:
- **Purple**: #881692 (Hubs pillar)
- **Orange**: #ff8000 (Research pillar)
- **Yellow**: #fff3a8 (Advocacy pillar)
- **Backgrounds**: Warm cream tones (#faf7f2, #f5f0e8, #efe8dd)
- **Text**: Near-black (#1a1a1a) for body

### Typography

- **Font**: Manrope (Google Fonts)
- **Hero**: clamp(2.5rem, 2rem + 4vw, 4.5rem)
- **Display**: clamp(2rem, 1.5rem + 2vw, 3rem)

### Components

- `AnimatedSection`: Scroll-triggered fade-in animations
- `Button`: Primary (purple), Secondary (orange), Outline variants
- `Card`: Base card with pillar-specific color variants
- `PillarCard`: Specialized cards for three pillars
- `SectionDivider`: Wavy SVG section transitions

## Configuration Files

### External Links (`src/utils/externalLinks.js`)

Central configuration for all external URLs (signup forms, social media). Update placeholder `#` URLs with actual Google Forms/Typeform URLs.

### Content (`src/utils/content.js`)

Centralized website copy including mission statement, pillar descriptions, and team information.

### Vite Configuration (`vite.config.js`)

- `base: '/youthTechNet/'` - GitHub Pages subdirectory path
- Must match repository name

## GitHub Pages Deployment

Automated via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Builds with `npm ci` and `npm run build`
- Deploys to GitHub Pages

Site URL: `https://[username].github.io/youthTechNet/`

**Setup**: Go to repo Settings → Pages → Source: GitHub Actions

## Content Management

### Adding Team Members

Edit `src/utils/content.js` in the `team.coFounders` array.

### Updating Engagement Forms

Edit `src/utils/externalLinks.js` to replace placeholder URLs.

### Updating Copy

All content is centralized in `src/utils/content.js`.

## Key Files

**Must understand before changes**:
- `vite.config.js` - Build configuration, base path
- `src/App.jsx` - Route definitions
- `src/styles/global.css` - Design system foundation
- `src/utils/externalLinks.js` - All external URLs

**Safe to modify**:
- `src/pages/*.jsx` - Page content
- `src/components/**/*.jsx` - UI components
- `src/utils/content.js` - Copy/content
