# AUDIT-SPEC.md — guifarro.dev Implementation Spec
# ================================================
# This file contains all implementation tasks from the UX/UI audit.
# Use this as reference when working in Claude Code sessions.
# Place this file at: ./docs/AUDIT-SPEC.md (or reference with @docs/AUDIT-SPEC.md)
# ================================================

---

## SESSION 1: Light/Dark Mode System (Priority 1.1)

### Goal
Implement light mode as DEFAULT + dark mode toggle + prefers-color-scheme support.

### Requirements

**Theme toggle component:**
- Location: Header navigation (sun/moon icon)
- Three states: Light / Dark / System
- Store preference in localStorage
- Respect prefers-color-scheme as initial default
- Smooth transition: `transition: background-color 0.3s ease, color 0.3s ease`
- No flash on page load (use a blocking script or CSS-only approach)

**Light mode tokens (DEFAULT):**
- Background: #F5F5F7
- Cards: #FFFFFF, border #E0E0E0
- Section alternates: #F0F0F2
- Body text: #2D2D2D
- Muted text: #666666
- Headings/trust: #0F3460
- Nav: #FFFFFF with shadow 0 1px 3px rgba(0,0,0,0.08)
- CTA buttons: #E94560 (exclusive — no other element uses this)

**Dark mode tokens:**
- Background: #1A1A2E
- Cards: #24243B
- Elevated/modals: #2E2E45
- Body text: #E0E0E0 (NOT pure white)
- Muted text: #9CA3AF
- Headings: #FFFFFF
- CTA: #E94560

**Accessibility checks after implementation:**
- #2D2D2D on #F5F5F7 → must be ≥ 4.5:1
- #E94560 on #F5F5F7 → must be ≥ 4.5:1 for normal text, ≥ 3:1 for large
- #E0E0E0 on #1A1A2E → must be ≥ 4.5:1
- #E94560 on #1A1A2E → check ratio
- NEVER: #E94560 on #0F3460 (2.4:1 — fails)

### Implementation approach
Use CSS custom properties (variables) on :root and [data-theme="dark"]. Apply Tailwind dark: variant where needed. Create a ThemeToggle component that manages state and localStorage.

### Verify
- New visitor sees light mode
- Toggle switches correctly
- System preference respected when no manual choice
- No flash of wrong theme on reload
- All sections look correct in both modes

---

## SESSION 2: Social Proof Restructure (Priority 1.3 + 2.3)

### Goal
Rename section, add real Upwork testimonial, strengthen stats.

### Section rename
- OLD heading: "WHAT PEOPLE SAY"
- NEW heading: "RESULTS SO FAR"
- OLD subheading: "Numbers that speak for themselves."
- NEW subheading: "Built with precision. Backed by results."

### Add Upwork testimonial card
Position: Centered, full-width or 2/3 width, ABOVE the stats row.

```
HEADLINE (bold):
"The website feels professional, warm, and trustworthy — which is essential in my field."

BODY:
"Kevin took the time to understand not just what I wanted visually, but the essence of my work. He delivered faster than expected while maintaining exceptional quality. He didn't just execute instructions — he contributed ideas and elevated the overall outcome."

ATTRIBUTION:
— Valentina, Psychologist & Practice Owner | 5★ on Upwork
```

**Card styling:**
- Light mode: bg #FFFFFF, border #E0E0E0, text #2D2D2D, headline #0F3460
- Dark mode: bg #24243B, text #E0E0E0, headline #FFFFFF
- Large decorative quote marks ("") in #E94560 at opacity 0.15-0.2
- 5 stars in #F59E0B (gold) next to attribution
- Small "Verified on Upwork" badge next to name

### Update stats
| OLD | NEW |
|-----|-----|
| 6+ Projects Delivered | 100+ Hours Saved for Clients |
| 3 AI Chatbots Live | 3 AI Chatbots Running 24/7 |
| 2 Countries | 5★ Client Rating |
| 24/7 AI Assistants Running | Seconds to Respond (not hours) |

### Verify
- Testimonial renders correctly in both themes
- Stats reflect client impact, not vanity metrics
- No fake testimonials — only the verified Upwork review

---

## SESSION 3: Project Cards Update (Priority 1.4 + 1.5 + 2.2 + 2.5)

### Goal
Add result metrics to project cards, add CTAs to booking, rewrite landing page tags, minimize GitHub buttons.

### Result lines per project

**Iron & Ink — AI Chatbot for a Tattoo Studio:**
- Result line: "Customers get instant answers about pricing, artists, and booking — 24/7. No more lost leads from unanswered DMs."
- Metrics badges: "24/7 availability" | "Handles booking inquiries automatically" | "Trained on real business data"

**La Mesa Dorada — AI-Powered Restaurant Website:**
- Result line: "Bilingual AI assistant answers menu questions, takes reservation info, and handles hours/pricing in English and Spanish — around the clock."
- Metrics badges: "Bilingual (EN/ES)" | "24/7 virtual host" | "Zero missed customer questions"

**CopyForge — AI Content Generator:**
- Result line: "Business owners create professional emails, social posts, and product descriptions in seconds — no copywriter needed."
- Metrics badges: "Content in seconds" | "Multiple formats" | "Built for non-writers"

### Rewrite landing page tags (tech → business)

**Nova Digital:**
- OLD: `Next.js 14` `App Router` `Tailwind CSS`
- NEW: `Conversion-Focused` `Mobile-Ready` `Modern Design`

**Apex Fitness:**
- OLD: `React` `Vite` `Tailwind CSS`
- NEW: `High-Energy Design` `Fast Loading` `Mobile-First`

**Ember & Oak:**
- OLD: `HTML` `CSS` `JavaScript`
- NEW: `Custom Design` `Menu Showcase` `Reservation-Ready`

### CTAs
**Per card:** Add link "Want this for your business? →" in #E94560, links to Contact/Calendly
**After section:** Full-width CTA block:
```
"Like what you see?"
"Every project starts with a free strategy call — no pressure, no jargon."
[Book a Free Strategy Call →] (button #E94560)
```

### GitHub buttons
- Remove or minimize GitHub button from main project cards
- Keep "Live Demo" as primary button
- GitHub links can live in individual case study pages or footer

### Updated card structure
```
[Screenshot/Mockup placeholder — to be added later]
[AI badge or category]
[Project title]
[Description — what was built]
[RESULT LINE — bold or highlight, the impact]
[Business-value tags]
[Live Demo] [Want this for your business? →]
```

### Verify
- All 6 project cards updated
- No tech jargon tags on landing page projects
- CTA links scroll to contact or open Calendly
- GitHub buttons removed/minimized from main view

---

## SESSION 4: Spacing + About Photo Placeholder (Priority 1.2 + 2.1)

### Goal
Fix excessive section spacing, prepare About photo area.

### Spacing fixes
- Section gaps: reduce to 80-120px (currently 200px+)
- Internal gaps (heading to content): 40-60px
- Hero can keep generous spacing
- CHECK ON MOBILE — spacing hits harder on small screens

### About section photo
- Replace "Photo placeholder" div with an <img> element
- Use a styled placeholder (gradient + initials "KG" or silhouette) until Kevin provides the real photo
- Specs: min 400x400px container, border-radius 8-12px, NOT a full circle
- Must look good in both light and dark mode (subtle border or shadow)
- Alt text: "Kevin Guifarro — AI Developer based in Costa Rica"
- Lazy loading: yes (below the fold)

### Verify
- Scroll through full page — content should flow naturally without dead zones
- About section has visual element (placeholder or real photo)
- Mobile spacing feels right

---

## SESSION 5: Calendly Embed + Contact Page (Priority 2.4)

### Goal
Embed Calendly widget in the contact page.

### Calendly embed
- Position: Below "Book a Call" section, inline widget
- Width: full container width
- Min height: 600px
- Mobile: Calendly responsive embed
- Keep Email, WhatsApp, GitHub options below as alternatives

### Calendly styling per theme
- Light mode: default Calendly styling (white background)
- Dark mode: `background_color=1A1A2E&text_color=E0E0E0&primary_color=E94560`

### Also consider
- Embed in footer CTA section ("Ready to stop losing customers...")
- Ensure the embed doesn't slow down page load (lazy load the iframe)

### Verify
- Calendar loads and is functional
- Styling matches both themes
- Alternative contact methods still visible below
- Mobile: calendar is scrollable and usable

---

## FUTURE SESSIONS (Priority 3 — This month)

### Screenshots/mockups for project cards
- Capture real screenshots of each live project
- Present in device mockup frames (laptop or phone)
- WebP format, lazy loaded, consistent aspect ratio

### Individual case study pages (PSR format)
- Route: /work/[project-slug]
- Structure: Hero → Challenge → Approach → Results → Testimonial → CTA
- Each page is a mini landing page

### Analytics
- Install Plausible or Fathom
- Track: CTA clicks, form submissions, scroll depth, section views

### Pricing hints
- Add "Starting at $X" in Services section
- Or pricing FAQ entry

### Mobile optimizations
- Touch targets: min 44x44px
- Sticky bottom CTA bar on mobile
- Test on real devices

### Performance
- Lighthouse 90+ target
- WebP/AVIF images
- Minimize JS bundle
