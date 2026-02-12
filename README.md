# kevin.dev

Personal portfolio website for a senior software developer. Built with modern web technologies and featuring an interactive 3D hero scene.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-r170-black?style=flat-square&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer)

<!-- Screenshot placeholder -->
<!-- ![Screenshot](./screenshot.png) -->

## Features

- **Interactive 3D Hero** — Mouse-reactive geometric scene built with Three.js / React Three Fiber
- **Smooth Scroll Animations** — Section reveals powered by Framer Motion
- **Dark Theme** — Custom brand colors with a deep black base
- **Fully Responsive** — Mobile, tablet, and desktop layouts
- **SEO Optimized** — Proper meta tags, Open Graph, semantic HTML
- **Performance Focused** — Lazy-loaded 3D scene, optimized fonts

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Fonts | Space Grotesk, IBM Plex Sans, JetBrains Mono |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/KDG0/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with fonts and metadata
    page.tsx            # Main page composing all sections
    globals.css         # Global styles and Tailwind theme
  components/
    Navigation.tsx      # Fixed top nav with mobile menu
    Hero.tsx            # Hero section with text and 3D scene
    HeroScene.tsx       # Three.js 3D interactive scene
    Services.tsx        # Services grid with cards
    Projects.tsx        # Projects section (expandable)
    ProjectCard.tsx     # Reusable project card component
    Blog.tsx            # Blog section
    BlogCard.tsx        # Reusable blog card component
    Contact.tsx         # Contact links section
    Footer.tsx          # Site footer
    SectionWrapper.tsx  # Scroll animation wrapper
    SectionHeader.tsx   # Consistent section headers
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## License

MIT
