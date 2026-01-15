# Ayushi Arya – Sketch Portfolio

## 1. Project Overview
This project is a **personal portfolio website** for sketch artist **Ayushi Arya**. The goal is to showcase artwork in a calm, gallery‑like environment while allowing visitors to request custom sketches and track their requests — all **without a traditional backend** in the initial phase.

The project is designed as an **MVP (Minimum Viable Product)** with a clear path to future enhancement (backend, admin panel, payments).

---

## 2. Core Goals
- Highlight artwork with minimal UI distractions
- Keep the artist workflow simple and non‑technical
- Allow visitors to submit commission requests with image uploads
- Provide transparency via a request queue/token system
- Remain **free, low‑maintenance, and scalable**

---

## 3. Technology Stack (Phase 1)

### Frontend
- **Angular** (Client‑Side Rendering)
- **SCSS** for styling
- Static hosting (GitHub Pages / Netlify)

### Storage & Data (No Backend)
- **Google Drive** – image & PDF storage
- **Google Sheets** – metadata & queue tracking
- **Google Forms** – visitor commission requests
- **Google Apps Script** – automation glue

---

## 4. Architectural Philosophy

### Key Principles
- Read‑only frontend
- External tools handle uploads & storage
- No authentication or admin UI initially
- Replaceable data sources in future

### High‑Level Architecture
- Angular renders UI
- Google Drive stores files
- Google Sheets acts as database
- Apps Script automates linking

---

## 5. Information Architecture (Pages & Routes)

### Public Routes
- `/` – Home
- `/portfolio` – Sketch gallery
- `/sketch/:id` – Individual sketch detail
- `/commission` – Request a custom sketch
- `/status-check` – Check request status
- `/about` – Artist bio

---

## 6. UI / UX Design System

### Visual Style
- Minimal
- Paper‑like background
- Black & white dominant palette
- Emphasis on white space

### Color Palette
- Background: Paper white (#FAFAF7)
- Primary text: Charcoal (#1E1E1E)
- Secondary text: Muted gray (#6B6B6B)
- Borders: Soft gray (#E5E5E0)

### Typography
- Headings: Serif or handwritten‑style font
- Body: Clean sans‑serif
- Limited font pairing (2 fonts max)

---

## 7. Navigation & Navbar

### Structure
- Left: Artist name / logo
- Right: Home | Portfolio | Commission | About

### Behavior
- Sticky on scroll
- Transparent over hero
- Solid background after scroll
- Minimal hover & active states

---

## 8. Page‑Level UI Breakdown

### Home Page
- Hero with featured sketch
- Artist name & short philosophy
- Featured sketches grid

### Portfolio Page
- Grid or masonry layout
- Category filters
- Hover reveal (title, medium, year)

### Sketch Detail Page
- Large artwork display
- Sketch metadata
- Download buttons (Image / PDF)
- CTA to request similar sketch

---

## 9. Commission Feature (Visitor)

### Purpose
Enable visitors to request custom sketches easily while setting expectations.

### Form Implementation
- Google Form embedded in Angular
- Fields:
  - Name, Email
  - Sketch type & style
  - Medium & size
  - Notes
  - Reference image upload

### File Handling
- Images uploaded directly to Google Drive
- Linked automatically to Google Sheets

---

## 10. Queue & Token System

### How It Works
- Each form submission generates:
  - Unique Request ID (e.g. SK‑012)
  - Initial queue position

### Communication
- Request ID sent via email
- Visitor can check status using ID

### Status Values
- New
- Accepted
- In Progress
- Completed

---

## 11. Sketch Posting (Artist Workflow)

### Current Workflow (No UI)
1. Artist uploads image to Google Drive folder
2. Apps Script detects upload
3. Script generates public URL
4. Entry added to Google Sheet
5. Angular gallery updates automatically

### Advantages
- No technical knowledge required
- No login or admin panel
- Fully automated

---

## 12. Download Feature

### Supported Downloads
- Sketch image (JPG/PNG)
- Sketch PDF (if available)

### Implementation
- Direct Google Drive download links
- Optional watermarking on public files

---

## 13. Styling Strategy

### Why SCSS
- Clean Angular templates
- Centralized design tokens
- Scalable for future growth

### Structure
- Global styles: colors, typography, layout
- Component‑level SCSS for isolation

---

## 14. SEO & Performance

### Initial Approach
- Client‑Side Rendering (CSR)
- Meaningful page titles
- Meta descriptions

### Future Options
- Static Site Generation (SSG)
- SSR only if backend is introduced

---

## 15. Security & Privacy Considerations
- Drive files set to view‑only
- No public editing access
- Visitor data stored securely in Google tools
- No sensitive data exposed in frontend

---

## 16. Limitations (Accepted for MVP)
- No admin dashboard
- Manual category edits via Sheet
- Public file access (view‑only)
- No payments or authentication

---

## 17. Future Enhancements (Phase 2)
- Backend (Firebase / Supabase)
- Admin login & upload UI
- Payment integration
- Order tracking dashboard
- Role‑based access

---

## 18. Conclusion
This portfolio architecture prioritizes **simplicity, artistic focus, and zero maintenance**, making it ideal for an early‑stage artist portfolio. The system is intentionally designed to evolve without requiring a rewrite, ensuring long‑term sustainability.

---

**Document Version:** 1.0
**Project:** Ayushi Arya – Sketch Portfolio

