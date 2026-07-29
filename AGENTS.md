# AGENTS.md — Developer & AI Agent Guidelines

This repository contains a personal portfolio web application built with **React, Vite, Tailwind CSS, and TypeScript** (with planned **Supabase** backend integration).

The project blends a **modern ASCII-retro 8-bit terminal aesthetic** with **high-performance UX optimized for hiring managers**.

---

## 1. Core Technical Stack & Tools

- **Framework:** React + Vite (TypeScript)
- **Styling:** Tailwind CSS (Vanilla CSS variables for theme tokens)
- **Routing:** Tanstack Router
- **Animations:** Scroll-driven CSS animations, Framer Motion / Lenis
- **Data Source:** `src/assets/RESUME.md` (Single source of truth for resume data & credentials)

---

## 2. Design System & Aesthetics

### **Theme Aesthetic: Modern ASCII-Retro 8-Bit Terminal Hybrid**

- **Dual-Font System (Strict Rule):**
  - **Monospace (`Mono Sans`):** Use ONLY for section headers, terminal command prompts (`> sys.whoami()`), code snippets, badges, and retro pills.
  - **Sans-Serif (`Google Sans Flex`):** Use for all long body text, project descriptions, and bio narratives. You may stretch or shrink the width and everything to your heart's content (But they should look nice!).
- **Toggleable CRT / Light Mode Theme:** (Make this one a light switch toggle design)
  - **Dark Mode (Default - CRT Obsidian):** Background `#0a0a0d`, phosphor accents (`#00ff66`, `#ffb000`, `#00f0ff`), dark glassmorphism cards.
  - **Light Mode (E-Ink / Solarized Paper):** Background `#f5f5f0`, dark slate text `#1a1a24`, stark retro drop-shadow borders (`4px 4px 0px #1a1a24`).
- **Interactive Visual Effects:**
  - **ASCII Luminosity Click Ripple:** Full-viewport canvas overlay (`pointer-events: none`) with low opacity (`0.15 - 0.25`) sitting behind text layers (`z-index: -1`).
  - Respect `@media (prefers-reduced-motion)` for motion accessibility.

---

## 3. Information Architecture & Progressive Disclosure

Do NOT place exhaustive 20+ item lists on the landing page. Use **Progressive Disclosure**:

### **A. Homepage (`/`) — Highlights & Teaser Reel**

- **Hero Section:** Hybrid greeting (`> sys.whoami()`, `"Hi, I'm [Name] 👋"`, `"Software Engineer & AI/ML Specialist"`) + 4 high-contrast CTA buttons (`Resume`, `GitHub`, `LinkedIn`, `Contact`).
- **About & Skills:** Bio narrative + interactive skill matrix.
- **Education:** Compact university degree cards.
- **Featured Projects:** Top 3-4 flagship engineering works + `[Explore All Projects →]` button.
- **Accomplishments:** Top 3 honors/hackathon highlights + `[View Complete Achievements Log →]` button.
- **Publications:** Top 1-2 research papers + `[View Research Archive →]` button.
- **Beyond the Code:** Personal hobbies, polaroid grid, Spotify live music widget (via Spotify API / Embed).
- **Contact & Footer:** Email copy button + quick contact form.

### **B. Sub-Routes (Deep-Dive Archives & Interactive Playgrounds)**

- **`/projects`:** Complete searchable/filterable catalog (by stack, category, stars).
- **`/accomplishments`:** Full interactive data table listing every achievement, award, certificate, and contest ranking.
- **`/publications`:** Complete research paper index with DOI links and BibTeX copy triggers.
- **`/arcade`:** Dedicated guest room for heavy WebGL, canvas, and 8-bit game/AI interactive demos.
- **`/resume`:** Full PDF viewer and printable resume document.

---

## 4. Header Navigation Rules

The top fixed header must be **streamlined to 5 core links + 1 Resume CTA**:

- **Links:** `About`, `Projects`, `Accomplishments`, `Arcade 🎮`, `Contact`
- **Resume Action Hub:** High-contrast `[📄 RESUME.PDF]` button on the far right.
- **Styling:** `fixed top-0 left-0 right-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80`.

---

## 5. Data Single Source of Truth: `src/assets/RESUME.md`

- Keep raw resume content, employment history, degrees, and project bullet points inside `src/assets/RESUME.md`.
- When building or modifying portfolio sections (Education, Experience, Projects), read `src/assets/RESUME.md` as the authoritative data reference.
