# Guifarro Dev — Portfolio & Business Website

AI-focused freelance developer website targeting small businesses.

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Stack
- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Framer Motion (animations)
- Three.js (hero 3D scene — DO NOT modify HeroScene.tsx)
- MDX for blog posts
- Deployed on Vercel

## Architecture
- src/components/ — all UI components (one per section)
- src/app/ — Next.js app router (layout, page, blog routes)
- content/blog/ — MDX blog posts
- Components reuse SectionWrapper.tsx and SectionHeader.tsx for consistency
- All content is hardcoded in components (no CMS, no JSON data files)

## Code Style
- Functional components with "use client" when using hooks or Framer Motion
- Tailwind utility classes only (no CSS modules)
- Card pattern: border-white/5 bg-white/[0.02] rounded-xl
- Stagger animations: delay index * 0.1
- Mobile-first: base styles → sm: → md: → lg:

## Design System
IMPORTANT: The site supports TWO themes. Light mode is the DEFAULT for new visitors.

Light Mode (default):
- bg-primary: #F5F5F7, cards: #FFFFFF, section-alt: #F0F0F2
- text-primary: #2D2D2D, text-secondary: #666666, headings: #0F3460
- card borders: #E0E0E0, nav: #FFFFFF with shadow 0 1px 3px rgba(0,0,0,0.08)

Dark Mode (toggle or prefers-color-scheme: dark):
- bg-primary: #1A1A2E, cards: #24243B, elevated: #2E2E45
- text-primary: #E0E0E0 (NOT pure white), text-secondary: #9CA3AF, headings: #FFFFFF

Shared:
- CTA: #E94560 — IMPORTANT: Use EXCLUSIVELY for call-to-action buttons. Never decorative.
- Trust: #0F3460

WCAG AA required: normal text 4.5:1, large text 3:1, UI components 3:1.
YOU MUST NOT use #E94560 on #0F3460 (only 2.4:1, fails accessibility).

## Section Order (homepage)
Hero → Services → How It Works → Work → About → Results → Blog → FAQ → Final CTA → Contact → Footer

## Gotchas
- YOU MUST NOT modify HeroScene.tsx (3D scene)
- YOU MUST NOT modify blog content files (content/blog/*.mdx)
- All nav anchor links use smooth scroll pattern from Navigation.tsx
- The accent color #E94560 must be consistent across all CTAs and highlights

## Target Audience
IMPORTANT: Primary audience is non-technical SMB owners. Every UI decision must pass: "Would a non-technical business owner understand and trust this?"

## Spacing
- Between sections: 80-120px max
- Heading to content: 40-60px

## Do Not Change
- Hero headline and HeroScene.tsx
- Homepage section order
- About copy, Services copy, FAQ section
- Blog content files (content/blog/*.mdx)
