# Olive Food Scanner App — Landing Page

## Assignment Overview

This project is a front-end development assignment to recreate the [Olive Food Scanner](https://oliveapp.com) marketing landing page as a static React application. The goal is to produce a pixel-faithful clone of the original website, replicating all sections, animations, layout structure, typography, and color system using modern front-end tooling.

### Assignment Objectives

- Recreate a real-world production landing page from a live reference
- Demonstrate component-based architecture using React
- Apply responsive layout techniques using Tailwind CSS utility classes
- Implement CSS keyframe animations without any third-party animation libraries
- Match the original design system including colors, spacing, and typography
- Structure the codebase in a clean, maintainable, and scalable way

### Reference Site

The original design is taken from [oliveapp.com](https://oliveapp.com). All sections, visual elements, and content are replicated for educational and portfolio purposes only.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Library | React | 19.2.5 |
| Build Tool | Vite | 8.0.10 |
| Styling | Tailwind CSS | 3.4.19 |
| CSS Processing | PostCSS + Autoprefixer | 8.x |
| Linting | ESLint | 10.x |
| Language | JavaScript (JSX) | ES2022+ |

---

## Project Structure

```
hire-my-idea/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── PhoneMockup.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── HealthBenefits.jsx
│   │   ├── ProactiveFiltering.jsx
│   │   ├── RealHealthOutcomes.jsx
│   │   ├── RealMothers.jsx
│   │   └── ComparisonTable.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── package.json
└── index.html
```

---

## Sections

| Component | Description |
|---|---|
| Navbar | Top navigation bar with logo and CTA |
| Hero | Full-width hero section with headline and download button |
| PhoneMockup | App preview with phone frame illustration |
| HowItWorks | Three-step process cards with CSS animations |
| HealthBenefits | Dark green section with nested white card and checklist |
| ProactiveFiltering | Ingredient tag cloud on pink panel with float animations |
| RealHealthOutcomes | Avocado family illustration with health outcome checklist |
| RealMothers | Testimonials section with review cards and star ratings |
| ComparisonTable | Feature comparison grid against competitor apps |

---

## Color System

| Token | Hex | Usage |
|---|---|---|
| olive-green | `#3d5a1e` | Primary brand color, backgrounds, buttons |
| olive-dark | `#2a3d14` | Dark text, checklist icons |
| olive-light | `#f0f4e8` | Card backgrounds, section fills |
| olive-bg | `#eef3e2` | Page background |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
git clone https://github.com/your-username/hire-my-idea.git
cd hire-my-idea
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173` with Hot Module Replacement.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Design Reference

The UI is based on [oliveapp.com](https://oliveapp.com). All sections, typography, spacing, animations, and color tokens are matched to the original design as closely as possible using Tailwind CSS utility classes and custom CSS keyframe animations.

Font used: **Inter** (loaded via Google Fonts)

---

## License

This project is for educational and portfolio purposes only. All design credit belongs to the original Olive app team.
