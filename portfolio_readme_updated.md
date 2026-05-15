# portfolio-site — Hiiren Rathod Product Portfolio

A **Next.js 16** personal portfolio site showcasing 10 product case studies across AI, fintech, insurtech, edtech, and SMB operations. Designed as a visual, image-forward PM portfolio inspired by UXfolio-style case studies (reference: https://uxfol.io/p/sugatnayak/0449b5f1).

**Stack:** Next.js 16.2.6 (Turbopack) + TypeScript + Tailwind CSS v4 + Geist Font

---

## ⚠️ COMPLETION ROADMAP — Read This First

This section is the master action plan to go from current state to a fully deployable, UXfolio-quality portfolio. Items are ordered by priority: fix blockers first, then quality improvements, then polish.

### Priority Legend
- 🔴 BLOCKER — portfolio cannot deploy or credibly present without this
- 🟡 IMPORTANT — portfolio works but looks incomplete or unprofessional
- 🟢 POLISH — elevates quality from good to exceptional

---

## 🔴 BLOCKERS — Fix These Before Anything Else

### 1. Hero Images (All 10 Missing)

**Why it matters:** Every case study card and detail page shows only a gradient background with no image. This is the single biggest visual gap. UXfolio-style portfolios are entirely image-forward — the hero image is the first thing a recruiter sees.

**What to create for each case study:**

| Study | What the hero image should show |
|-------|--------------------------------|
| `fuds-digital-platform` | Screenshot of the live Fuds website homepage on a browser mockup, OR a split showing mobile + desktop views of the booking flow |
| `fuds-field-service-dashboard` | Screenshot of the live AWS Amplify admin dashboard — the order list, assignment panel, or the WhatsApp notification flow |
| `highprobtrade-stock-platform` | Screenshot of the stock scanner UI — the sector heatmap or the OI chart with breakout signals |
| `ai-marketing-compliance` | A clean mock of the compliance scanning interface — upload panel + violation overlay bounding boxes |
| `compliance-qa-simulation` | Screenshot of the browser prototype — dashboard view with the checklist builder and audit log |
| `saas-dashboard-ux-redesign` | Before/after split image — old cluttered dashboard vs new clean mobile-first redesign |
| `trading-education-landing` | Screenshot of the live landing page hero section with the AI demo card |
| `laundry-pos-system` | Figma mockup of the 4-step order wizard UI — or the Morning Briefing dashboard screen |
| `ai-astrology-dashboard` | Figma mockup of the kundali chart with Dasha timeline and AI Q&A panel |
| `edtech-communication-platform` | Figma mockup of the AI Doubt Feed or Cohort Chat interface |

**How to create them (no design skills needed):**
- For live products (01, 02, 03, 07): Take a real screenshot → paste into a browser/device frame using [Shots.so](https://shots.so) or [Mockup.photos](https://mockup.photos) (both free) → export as PNG
- For Figma designs (04, 06, 08, 09, 10): Export a key Figma frame → drop into a device frame on Shots.so → export
- For specs without Figma (05): Create a clean flat image in Canva using a card layout showing the product name, category, and a simple icon — no fake UI needed
- **Dimensions:** 1600×900px (16:9), PNG, under 500KB (compress at [Squoosh.app](https://squoosh.app))
- **Place at:** `public/images/case-studies/{slug}/hero.png`

---

### 2. Contact Email is Broken

`src/app/contact/page.tsx` line 19 uses `hiiren.rathod@example.com` — emails sent here will bounce permanently.

**Fix:** Replace with `hiirenrathod126@gmail.com`

**Also add:**
- LinkedIn URL: `https://linkedin.com/in/hiirenrathod`
- GitHub URL: `https://github.com/hiiren/Product-Portfolio`
- Location: Mumbai, India

---

### 3. Figma URLs Return 404

4 studies have placeholder Figma links that will 404 in production.

**Fix options (choose one per study):**

| Study | Option A — Real Figma link | Option B — No Figma |
|-------|---------------------------|---------------------|
| `fuds-digital-platform` | Share your actual Figma file → copy the prototype share link | Remove `figmaUrl` from data — section won't render |
| `fuds-field-service-dashboard` | Same as above | Remove `figmaUrl` |
| `ai-marketing-compliance` | Share Figma file if it exists | Remove `figmaUrl` |
| `saas-dashboard-ux-redesign` | Share Figma file | Remove `figmaUrl` |

**Do not leave placeholder links in production.** A recruiter clicking a broken Figma link is worse than no Figma link.

---

### 4. Live URLs Need Verification

Before deploying, test every live URL below. If a URL doesn't resolve, remove it from the data or replace with the correct URL.

| Study | URL to test | Real URL (update if different) |
|-------|-------------|-------------------------------|
| Fuds Digital | `https://fuds.in` | Confirm this is the live site or use `https://fudsinternational.com` |
| Fuds Dashboard | `https://admin.fuds.in` | Confirm or use `https://main.d12146rxri0v53.amplifyapp.com/admin` |
| HighProbTrade | `https://highprobtrade.vercel.app` | Confirm or update |
| Compliance QA | `https://compliance-qa-sim.netlify.app` | Confirm or remove |
| Trading Edu | `https://trading-education.vercel.app` | Confirm or update |

---

## 🟡 IMPORTANT — Quality Gaps

### 5. Gallery Images Missing for 6 Studies

Gallery images exist for Fuds Digital, Fuds Dashboard, and HighProbTrade. The following 6 studies need gallery screenshots added:

| Study | What to show in gallery |
|-------|------------------------|
| `compliance-qa-simulation` | 2–3 screenshots: dashboard view, checklist builder, audit log |
| `saas-dashboard-ux-redesign` | 2–3 screens from Figma: before state, after redesign, mobile view |
| `trading-education-landing` | 2–3 screenshots: hero section, AI demo card, pricing section |
| `laundry-pos-system` | 2–3 Figma screens: order wizard steps, Morning Briefing, stain detection |
| `ai-astrology-dashboard` | 2–3 Figma screens: kundali chart, Dasha timeline, remedy engine |
| `edtech-communication-platform` | 2–3 Figma screens: Cohort Chat, AI Doubt Feed, Peer Profiles |

**Format:** PNG, 1280×800px minimum, named `gallery-01.png`, `gallery-02.png`, `gallery-03.png`
**Place at:** `public/images/case-studies/{slug}/gallery-01.png`
**Then add to data:** Add `gallery` array in `src/_data/case-studies.ts` for each study

---

### 6. Wireframes Missing for 7 Studies

Wireframes exist for Fuds Digital and Fuds Dashboard only. Add for:

| Study | What wireframes to show |
|-------|------------------------|
| `ai-marketing-compliance` | Compliance scan flow wireframe, violation overlay wireframe |
| `saas-dashboard-ux-redesign` | Before/after flow diagram, redesigned screen wireframes |
| `trading-education-landing` | Page flow wireframe or information architecture |
| `laundry-pos-system` | Order wizard flow, POS layout wireframe |
| `ai-astrology-dashboard` | Chart layout wireframe, Q&A interface wireframe |
| `edtech-communication-platform` | Platform IA wireframe, Doubt Feed wireframe |

**If you don't have wireframes for spec projects:** Create simple flow diagrams in FigJam (free) showing the user journey — this counts as a wireframe in PM portfolios.
**Format:** PNG, named `wireframe-01.png`, `wireframe-02.png`
**Place at:** `public/images/case-studies/{slug}/wireframes/wireframe-01.png`

---

### 7. Testimonials — Highest-Impact Empty Section

The testimonial section exists in every detail page but zero studies have testimonial data — it never renders. Even one real testimonial dramatically increases credibility.

**Who to ask:**
- Fuds International founder/director — for the website and dashboard work
- HighProbTrade client — for the stock platform build
- Anyone who received a PRD or Figma deliverable as a client

**Template to send them (WhatsApp/email):**

> "Hi [Name], I'm updating my product portfolio. Would you be comfortable writing 1–2 sentences about working with me on [project]? Something like what problem we solved together and how it went. I'll add it to the case study page with your name and role."

**Add to data:**
```typescript
testimonial: {
  quote: "Hiiren built our entire digital presence in 2 weeks — from zero to 70 leads a month. The WhatsApp automation system he set up runs on its own and we never have to manually coordinate technician assignments anymore.",
  author: "Director Name",
  role: "Director, Fuds International"
}
```

---

### 8. Code Bugs to Fix

These are quick fixes that affect the user experience:

| Bug | File | Fix |
|-----|------|-----|
| StatCard cuts 5th metric | `[slug]/page.tsx:47` | Change `slice(0,4)` to `slice(0,5)` |
| Role shows only first item | `[slug]/page.tsx:137` | Map over `study.role` array instead of `study.role[0]` |
| Orphan directory mismatch | `public/images/case-studies/` | Rename `astrology-dashboard/` to `ai-astrology-dashboard/` to match slug |
| Orphan PRD file | `public/pdfs/prds/` | Either reference `10-Business-Process-Automation-n8n.pdf` in a case study or delete it |
| Hardcoded "10 case studies" | `page.tsx:87`, `[slug]/page.tsx:331` | Replace with `{caseStudies.length} case studies` |
| No `sandbox` on iframe | `LiveDemoEmbed.tsx` | Add `sandbox="allow-scripts allow-same-origin allow-popups"` |
| No favicon | `src/app/layout.tsx` | Add a simple favicon (generate at [favicon.io](https://favicon.io)) |
| No social metadata | `src/app/layout.tsx` | Add `openGraph` and `twitter` metadata for LinkedIn/Twitter preview cards |
| No `sharp` dependency | `package.json` | Run `npm install sharp` — required for Next.js image optimization in production |

---

## 🟢 POLISH — UXfolio-Style UI/UX Upgrades

This section defines exactly how to make the portfolio look and feel like the Sugat Nayak UXfolio reference. UXfolio portfolios are defined by six visual principles. Here's how to apply each to your Next.js site.

---

### 9. Visual Design System — Apply This Theme

**Current theme:** `--primary: #1e293b`, `--secondary: #6366f1` (indigo), `--accent: #f59e0b` (amber)

**Keep or upgrade to this refined palette:**

```css
/* Core */
--color-ink: #0f172a;          /* Slate 900 — headings, body text */
--color-ink-muted: #475569;    /* Slate 600 — secondary text */
--color-ink-subtle: #94a3b8;   /* Slate 400 — captions, metadata */
--color-surface: #ffffff;      /* Card backgrounds */
--color-bg: #f8fafc;           /* Page background — slightly warm white */
--color-border: #e2e8f0;       /* Slate 200 — subtle borders */

/* Accent — keep your indigo but tune it */
--color-accent: #4f46e5;       /* Indigo 600 — CTAs, links, highlights */
--color-accent-light: #eef2ff; /* Indigo 50 — badge backgrounds */
--color-accent-dark: #3730a3;  /* Indigo 800 — hover states */

/* Status badges */
--color-live: #166534;         /* Green 800 */
--color-live-bg: #dcfce7;      /* Green 100 */
--color-client: #92400e;       /* Amber 800 */
--color-client-bg: #fef3c7;    /* Amber 100 */
--color-spec: #1e40af;         /* Blue 800 */
--color-spec-bg: #dbeafe;      /* Blue 100 */
```

**Typography (keep Geist, tune sizing):**

```css
/* Headings — DM Serif Display for personality, or keep Geist */
--font-display: 'Geist', sans-serif;  /* or import DM Serif Display from Google Fonts */

/* Scale */
h1: 52px / font-weight: 700 / line-height: 1.08   /* Hero only */
h2: 36px / font-weight: 600 / line-height: 1.15   /* Section titles */
h3: 22px / font-weight: 600 / line-height: 1.3    /* Card titles */
h4: 16px / font-weight: 600 / line-height: 1.4    /* Sub-sections */
body: 16px / font-weight: 400 / line-height: 1.7  /* Body copy */
caption: 13px / font-weight: 400 / color: muted   /* Labels, metadata */
eyebrow: 11px / font-weight: 700 / letter-spacing: 0.1em / UPPERCASE  /* Section labels */
```

---

### 10. Homepage Layout — Make It Feel Like UXfolio

UXfolio homepages follow this exact pattern:

```
[Sticky Nav — minimal, name left + links right]
[Hero — large name, 1-line title, 2-line bio, 2 CTAs]
[Impact strip — 4 metrics in a horizontal bar, full width]
[Case study grid — 2 columns, large cards with real hero images]
[About teaser — 2-line bio + photo + CTA to /about]
[Footer — minimal]
```

**Case study card design (UXfolio style):**
- Card is tall (aspect ratio ~3:4 or ~4:5)
- Full-bleed hero image fills the top 65% of the card
- Gradient overlay fades from transparent to dark at the bottom of the image
- Type badge (Live / Client / Spec) positioned top-left on the image
- Title, one-line description, and domain tags sit below the image on white background
- No border — cards float on the page background with subtle shadow only
- Hover: image scales to 1.03, shadow deepens — no border change

**Code pattern for card:**
```tsx
<div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
  <div className="relative h-64 overflow-hidden">
    <img src={heroImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <span className="absolute top-4 left-4 badge">{type}</span>
  </div>
  <div className="p-6">
    <h3>{title}</h3>
    <p>{tldr}</p>
    <div className="tags">{domain.split('·').map(tag => <Tag>{tag}</Tag>)}</div>
  </div>
</div>
```

---

### 11. Case Study Detail Page — Apply UXfolio Section Flow

The single most important page in your portfolio. UXfolio detail pages feel like scrolling through a well-designed magazine article. Apply this exact section order and visual treatment:

```
Section 1: HERO
- Full-width (100vw), 70vh height
- Real hero image as background (object-cover)
- Dark gradient overlay (from-transparent to-black/70) at bottom
- Title, type badge, domain tags, status badge positioned at bottom-left over the image
- Tech stack pills overlaid at bottom-right
- If no hero image: use a strong color gradient (accent-light to accent)
- DO NOT show just a flat color with text — it looks unfinished

Section 2: OVERVIEW STRIP
- 4 quick-fact cards in a horizontal row below the hero
- Cards: Timeline | Team | Role | Status
- Clean white surface, 1px border, no shadow
- This is the "at a glance" bar before the story starts

Section 3: TLDR
- Single pull quote — large text (24px), italic, accent color left border
- "In one sentence: what was the outcome?"
- Example: "Built a 0→1 Shopify website that grew monthly leads from 20 to 70 in 8 weeks."

Section 4: PROBLEM
- 2-column layout: text left, supporting image right
- Text: problem statement (3–5 sentences) + 2–3 bullet pain points
- Image: a real screenshot OR a simple diagram showing the broken state
- If no image: use a clean before/after text comparison in a table

Section 5: RESEARCH (only for studies with real research)
- Full-width section, light background (--color-bg)
- Insight cards in a 3-column grid: each card = one finding with an icon + finding + implication
- For Fuds: "Trust was the #1 barrier" / "38% mobile drop-off at date-picker" / "No competitor showed pricing"
- For Shaadi.com Tier 2/3: the 3-barrier table (English / payment / fake profiles)

Section 6: SOLUTION
- Text + image/diagram (image right for problem was left → alternate sides)
- For built products: show a real screenshot in a browser/device frame mockup
- For spec products: show the Figma wireframe or a clean architecture diagram
- Architecture diagrams: use a simple horizontal flow (A → B → C) not complex org charts

Section 7: LIVE DEMO (only if liveUrl or embedUrl exists)
- Iframe embed in a browser chrome frame (styled div that looks like a browser window)
- Label: "Live product — interact directly below"
- If embed doesn't work: large screenshot with a prominent "Open live product →" CTA button

Section 8: GALLERY
- Masonry or 2-column grid of screenshots
- Each image in a subtle device frame (browser, mobile, or neutral card)
- Caption below each: describe what the screenshot shows, not just label it
- "The booking form after simplification — 4 fields, mobile-first tap targets"
- Click to open lightbox (already built in ImageGallery.tsx — make sure a11y is fixed)

Section 9: RESULTS TABLE
- Already built in ResultsTable.tsx — make this visually stronger
- Add a color accent to the "After" column (green text for improvements)
- Add a delta column: "+250%", "2.5×", "Near zero" in accent color
- Bold the biggest win

Section 10: KEY LEARNINGS
- 3 numbered cards, each with: learning title (bold) + 2–3 sentence explanation
- These should reflect genuine reflection, not generic PM platitudes
- Example: "1. Solve the full journey, not the obvious step. The brief was 'build a website.' Mapping the full customer journey revealed the operations bottleneck was equally broken."

Section 11: PRD DOWNLOAD
- Prominent CTA card: dark background, white text, PDF icon, "Download Full PRD →"
- This is your strongest differentiator — not many PM portfolios include actual PRDs

Section 12: WIREFRAMES / FIGMA (if available)
- Embed Figma prototype if you have a public link
- Or show wireframe screenshots in a 2-column grid with light background

Section 13: GET IN TOUCH CTA
- Simple: "Like what you see? Let's talk." + Email button + LinkedIn button
```

---

### 12. About Page — Personal Story, Not Just a Resume

UXfolio about pages feel human. Add these elements:

```
[Profile photo — 200×200px circle, warm/neutral background]
[Short bio — 3 paragraphs: who I am → what makes me different → what I'm looking for]
[The transition story — QA → PM, written in first person, 150 words]
[Skills matrix — 4 categories, tag cloud style (not a progress bar — progress bars are meaningless)]
[Experience timeline — already built, keep it]
[Education — 2 items, clean table]
[CTA — "View my case studies" + "Download resume"]
```

**Profile photo:** If you don't want a real photo, create a professional avatar at [avataaars.io](https://avataaars.io) or use an illustrated style. A coloured initial circle (HR) is acceptable but less personal.

---

### 13. Navigation — Make It Sticky and Minimal

UXfolio navs are very minimal:

```
[Name/Logo — left] .......................... [Case Studies · About · Contact — right]
```

**Add:** Active state on current page (underline or accent dot below link)
**Add:** Smooth scroll progress indicator — a thin accent-colored bar at the top of the viewport that fills as the user scrolls down a case study page
**Remove:** Any unnecessary nav items

---

### 14. Image Quality — The Make-or-Break Detail

UXfolio portfolios look premium because of image quality. One rule:

> Never show a raw screenshot without putting it in a device frame or giving it context.

**Tool to use:** [Shots.so](https://shots.so) — free, browser-based, drag-and-drop your screenshot and it puts it in a beautiful device frame. Export as PNG.

**Device frame guide:**
- Website screenshots → Browser frame (Chrome/Arc style)
- Mobile app screenshots → iPhone frame
- Dashboard screenshots → MacBook or monitor frame
- Figma wireframes → Tablet frame or neutral white card with subtle shadow

---

### 15. Open Graph / Social Preview Cards

When you share your portfolio link on LinkedIn or WhatsApp, it should show a rich preview — not a blank link.

**Add to `src/app/layout.tsx`:**

```typescript
export const metadata: Metadata = {
  title: 'Hiiren Rathod — Product Manager Portfolio',
  description: 'Associate PM with 2+ years of direct product ownership. Built AI-powered products from zero — 3.5× lead growth, 60% conversion, AWS Amplify deployed dashboard. Open to PM roles.',
  openGraph: {
    title: 'Hiiren Rathod — PM Portfolio',
    description: 'Built AI-powered products from zero. 10 case studies across fintech, e-commerce, AI, and SaaS.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Hiiren Rathod Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiiren Rathod — PM Portfolio',
    description: 'Built AI-powered products from zero. 10 case studies.',
    images: ['/og-image.png'],
  },
}
```

**Create `public/og-image.png`:** 1200×630px. Simple: your name large, title below, 2–3 key metrics, accent background. Create in Canva in 5 minutes.

---

## 📋 COMPLETION CHECKLIST — Do This in Order

Copy this and track progress:

### Week 1 — Unblock

- [ ] Fix contact email → `hiirenrathod126@gmail.com`
- [ ] Fix or remove all 4 broken Figma URLs
- [ ] Verify all 5 live URLs or remove/replace them
- [ ] Fix `slice(0,4)` → `slice(0,5)` in StatCard
- [ ] Fix `study.role[0]` → map over `study.role`
- [ ] Rename `astrology-dashboard/` → `ai-astrology-dashboard/`
- [ ] Add `sandbox` to LiveDemoEmbed iframe
- [ ] Run `npm install sharp`

### Week 2 — Hero Images (Highest Visual Impact)

- [ ] Create hero for Fuds Digital Platform (real screenshot in browser frame)
- [ ] Create hero for Fuds Field Service Dashboard (real screenshot)
- [ ] Create hero for HighProbTrade (real screenshot)
- [ ] Create hero for Trading Education Landing (real screenshot)
- [ ] Create hero for Compliance QA Simulation (real screenshot)
- [ ] Create hero for AI Marketing Compliance (Figma frame or Canva mock)
- [ ] Create hero for SaaS Dashboard UX Redesign (Figma before/after)
- [ ] Create hero for Laundry POS System (Figma mockup)
- [ ] Create hero for AI Astrology Dashboard (Figma mockup)
- [ ] Create hero for EdTech Platform (Figma mockup)

### Week 3 — Content Gaps

- [ ] Add gallery images for Compliance QA Simulation (2–3 screenshots)
- [ ] Add gallery images for SaaS Dashboard Redesign (Figma exports)
- [ ] Add gallery images for Trading Education Landing (real screenshots)
- [ ] Add gallery images for Laundry POS (Figma exports)
- [ ] Add gallery images for Astrology Dashboard (Figma exports)
- [ ] Add gallery images for EdTech Platform (Figma exports)
- [ ] Add wireframes for AI Marketing Compliance
- [ ] Add wireframes for SaaS Dashboard Redesign
- [ ] Add wireframes for Laundry POS
- [ ] Request testimonial from Fuds International founder
- [ ] Request testimonial from HighProbTrade client

### Week 4 — Polish and Launch

- [ ] Add favicon (generate at favicon.io)
- [ ] Add Open Graph metadata and og-image.png
- [ ] Apply refined colour palette from Section 9
- [ ] Update case study cards to UXfolio hover style (Section 10)
- [ ] Add scroll progress bar to detail pages (Section 11)
- [ ] Add profile photo or avatar to About page
- [ ] Test all pages on mobile — ensure nothing breaks below 375px
- [ ] Test all pages in Safari (webkit rendering differs from Chrome)
- [ ] Deploy and share link

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home — hero, impact metrics strip, 4 featured case study cards |
| `/about` | `src/app/about/page.tsx` | Bio, experience timeline, skills matrix, CTA |
| `/case-studies` | `src/app/case-studies/page.tsx` | All 10 case studies in a 2-column grid |
| `/case-studies/[slug]` | `src/app/case-studies/[slug]/page.tsx` | Detail page with full visual case study layout |
| `/contact` | `src/app/contact/page.tsx` | Email, LinkedIn, GitHub contact links |

---

## Components

| Component | File | Description |
|-----------|------|-------------|
| `Header` | `src/_components/Header.tsx` | Sticky nav with Home/About/Case Studies/Contact |
| `Footer` | `src/_components/Footer.tsx` | Copyright + Contact/LinkedIn/GitHub |
| `CaseStudyCard` | `src/_components/CaseStudyCard.tsx` | Card with gradient header, type badge, TLDR, CTA |
| `ImageGallery` | `src/_components/ImageGallery.tsx` | Lightbox-enabled image grid for case study screenshots |
| `LiveDemoEmbed` | `src/_components/LiveDemoEmbed.tsx` | Iframe/embed for live dashboards and prototypes |
| `ResultsTable` | `src/_components/ResultsTable.tsx` | Before/after metrics table |
| `SectionHeading` | `src/_components/SectionHeading.tsx` | Reusable section heading component |

---

## Data

| File | Description |
|------|-------------|
| `src/_data/case-studies.ts` | `CaseStudy[]` — all 10 studies with full content, image paths, embed URLs |

---

## Case Study Data Schema

```typescript
interface CaseStudy {
  slug: string
  number: string
  title: string
  subtitle: string
  type: string
  domain: string
  status: string
  color: string
  bgGradient: string
  accent: string
  lightBg: string
  tldr: string
  problem: string
  role: string[]
  research: string
  solution: string
  results: { metric: string; before: string; after: string; delta?: string }[]
  learnings: string[]
  pdfFile: string
  prdFile?: string
  heroImage?: string
  heroVideo?: string
  logo?: string
  gallery?: GalleryItem[]
  prototypeUrl?: string
  liveUrl?: string
  embedUrl?: string
  figmaUrl?: string
  wireframes?: GalleryItem[]
  techStack?: string[]
  timeline?: string
  team?: string
  testimonial?: { quote: string; author: string; role: string }
}

interface GalleryItem {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}
```

---

## Public Assets

| Path | Contents |
|------|----------|
| `public/pdfs/` | 10 case study PDFs (01–10) |
| `public/pdfs/prds/` | 10 PRD PDFs |
| `public/images/case-studies/` | Real screenshots and images per case study |
| `public/images/logos/` | Client/product logos |
| `public/og-image.png` | Social preview card (1200×630px) — ADD THIS |

---

## 10 Case Studies

| # | Slug | Title | Domain | Status | Hero | Gallery | Wireframes | Live URL | Embed |
|---|------|-------|--------|--------|------|---------|------------|----------|-------|
| 01 | `fuds-digital-platform` | Fuds International — 0→1 Digital Platform | E-Commerce · Home Services | Live | ❌ Missing | 3 images ✅ | 2 images ✅ | Verify | Yes |
| 02 | `fuds-field-service-dashboard` | Fuds Field Service Dashboard — AI Ops | AI Automation · Operations | Live on AWS | ❌ Missing | 3 images ✅ | 2 images ✅ | Verify | Yes |
| 03 | `highprobtrade-stock-platform` | HighProbTrade — AI Stock Analysis | Fintech · AI | Testing | ❌ Missing | 3 images ✅ | 2 images ✅ | Verify | No |
| 04 | `ai-marketing-compliance` | AI Marketing Compliance Platform | InsurTech · AI · Regulatory | PRD Delivered | ❌ Missing | 2 images ✅ | ❌ Missing | No | Yes |
| 05 | `compliance-qa-simulation` | Compliance QA Simulation Tool | RegTech · AI | Built | ❌ Missing | ❌ Missing | ❌ Missing | Verify | No |
| 06 | `saas-dashboard-ux-redesign` | SaaS Dashboard UX Redesign | SaaS · UX | Delivered | ❌ Missing | ❌ Missing | ❌ Missing | No | Yes |
| 07 | `trading-education-landing` | Trading Education Landing Page | Fintech · Growth | Live | ❌ Missing | ❌ Missing | ❌ Missing | Verify | No |
| 08 | `laundry-pos-system` | Laundry POS & Management System | SMB · AI · Retail | Spec | ❌ Missing | ❌ Missing | ❌ Missing | No | No |
| 09 | `ai-astrology-dashboard` | AI-Powered Astrology Dashboard | Consumer AI · B2C | Spec | ❌ Missing | ❌ Missing | ❌ Missing | No | No |
| 10 | `edtech-communication-platform` | EdTech Student Communication Platform | EdTech · Community | Spec | ❌ Missing | ❌ Missing | ❌ Missing | No | No |

---

## Asset Status Summary

| Asset Type | Expected | Ready | Missing |
|------------|----------|-------|---------|
| Hero images | 10 | 0 | **10 — highest priority** |
| Gallery images | ~20 | 11 | ~9 |
| Wireframe images | ~14 | 6 | ~8 |
| Case study PDFs | 10 | 10 | 0 ✅ |
| PRD PDFs | 10 | 10 | 0 ✅ |
| OG image | 1 | 0 | 1 |
| Favicon | 1 | 0 | 1 |
| Real contact email | 1 | 0 | 1 — broken |

---

## Experience (About Page)

| Period | Title | Company | Location |
|--------|-------|---------|----------|
| Feb 2024 — Present | Associate Product Manager | Fuds International | Mumbai |
| Sep 2022 — Jan 2024 | Acting PM, Falcon Platform | Shaadi.com | Mumbai |
| Jan 2019 — Aug 2022 | Senior QA Lead | Shaadi.com | Mumbai |
| May 2016 — Jan 2019 | Quality Analyst | Ridlr App (Birds Eye Systems) | Mumbai |
| Nov 2012 — Jan 2016 | IT Consultant – QA | Cinime Ltd. | UK |
| Jul 2011 — Oct 2012 | Test & Network Engineer | Yummi Media Group | UK |

---

## Theme

```
Colors:
  --primary: #1e293b        (Slate 900)
  --secondary: #4f46e5      (Indigo 600 — refined from #6366f1)
  --accent: #f59e0b         (Amber — keep for highlights)
  --bg: #f8fafc             (Near white — slightly cooler than paper)
  --surface: #ffffff        (Card backgrounds)
  --border: #e2e8f0         (Slate 200)
  --muted: #475569          (Slate 600 — secondary text)

Typography:
  Font: Geist (already in use — good choice, keep it)
  Display: 52px / 700 weight (hero only)
  H2: 36px / 600 weight
  H3: 22px / 600 weight
  Body: 16px / 400 weight / 1.7 line-height
  Eyebrow: 11px / 700 weight / 0.1em letter-spacing / UPPERCASE
  Caption: 13px / 400 weight / muted color

Card radius: 16px (rounded-2xl)
Button radius: 8px (rounded-lg)
Shadow: shadow-sm default, shadow-lg on hover
```

---

## Running Locally

```bash
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deployment

AWS Amplify: https://main.d12146rxri0v53.amplifyapp.com
