# JAZ COMPUTER - Professional Business Profile Website (Phase 1)

A premium, modern corporate business website engineered for **JAZ COMPUTER**, based in **Tenkasi, Tamil Nadu, India**.

> **Tagline:** *Technology, Built Around You.*  
> **Official Distinction:** *Hikvision Authorised Sub-Regional Distributor*

---

## 🚀 Overview & Architecture

This is **Phase 1** of a long-term website project. It is strictly non-ecommerce (no checkout or cart), focusing on **business branding, customer trust, high-impact product & service showcases, and direct customer enquiries**.

### Brand Color Palette
- **Deep Navy:** `#08172E`
- **Electric Blue:** `#1685FF`
- **Silver:** `#C5CED9`
- **White:** `#FFFFFF`

### Core Capabilities
- **8 Dedicated Website Pages:**
  1. **Home** (`src/pages/HomePage.tsx`) - Hero, Hikvision Distributorship Spotlight, Core Offerings, Stats Ticker, Featured Products, Client Highlights, Map Teaser.
  2. **About Us** (`src/pages/AboutPage.tsx`) - Company origin on West Car Street, Tenkasi, philosophy, technical lab credentials, and 4-Phase roadmap.
  3. **Products** (`src/pages/ProductsPage.tsx`) - Full categorized showcase with interactive search, category filters, and "Enquire Now" triggers.
  4. **Services** (`src/pages/ServicesPage.tsx`) - 8 comprehensive IT repair & support solutions, diagnostic turnaround times, and 5-step service protocol.
  5. **CCTV Solutions** (`src/pages/CctvSolutionsPage.tsx`) - Sub-Regional Distributor portal featuring Hikvision, CP Plus, TrueView, Unicam & TVT cameras (Bullet, Dome, Wi-Fi, Solar 4G, DVR, NVR).
  6. **Our Valuable Clients** (`src/pages/ClientsPage.tsx`) - Dedicated directory of all 43 client records with sector categorization and privacy compliance.
  7. **Gallery** (`src/pages/GalleryPage.tsx`) - High-resolution showcase of installations, custom PC builds, chip-level service lab, and full lightbox modal.
  8. **Contact Us** (`src/pages/ContactPage.tsx`) - Verified store address, interactive Google Maps, direct Phone & WhatsApp actions, enquiry ticket form, and FAQs.

- **Theme Mode:** Full Dark and Light mode toggle with persistent `localStorage` preference.
- **Floating WhatsApp Button:** Fixed floating button with subtle pulse badge and pre-formatted greeting message.
- **Call Now Buttons:** Direct phone action triggers configured with verified business number (`+91 98946 68866`).
- **Interactive Quick Enquiry Modal:** Global modal triggered from any product or service card.

---

## 🛠️ Project Structure

```
d:\MyWebJ\
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   └── common/
│   │       ├── Logo.tsx               <-- Central replaceable Logo component
│   │       ├── Header.tsx             <-- Navigation, top ribbon, mobile drawer
│   │       ├── Footer.tsx             <-- Corporate footer & contact summary
│   │       ├── PageHeader.tsx         <-- Inner page hero banners
│   │       ├── ThemeToggle.tsx        <-- Dark/Light mode toggle
│   │       ├── FloatingWhatsApp.tsx   <-- Floating WhatsApp contact badge
│   │       └── QuickEnquiryModal.tsx  <-- Reusable enquiry popup modal
│   ├── data/
│   │   ├── company.ts                 <-- Central verified business details
│   │   ├── products.ts                <-- Hardware, software & TV catalog
│   │   ├── services.ts                <-- IT repair & maintenance services
│   │   ├── cctv.ts                    <-- CCTV brands, specs & camera types
│   │   ├── clients.ts                 <-- All 43 client records repository
│   │   └── gallery.ts                 <-- Installation & project photos
│   └── pages/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── ProductsPage.tsx
│       ├── ServicesPage.tsx
│       ├── CctvSolutionsPage.tsx
│       ├── ClientsPage.tsx
│       ├── GalleryPage.tsx
│       └── ContactPage.tsx
```

---

## ⚙️ How to Run & Build

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
The compiled, production-ready static assets are output to `dist/`.

---

## 🧩 Modular Customization Guide

### 1. Replacing the Temporary Logo
The logo is encapsulated inside `src/components/common/Logo.tsx`. To replace it with a final SVG or PNG image file, update only `src/components/common/Logo.tsx` without touching headers, footers, or layout files.

### 2. Adding / Modifying Clients
All client records reside in `src/data/clients.ts`. To add more clients, simply append a new item to `CLIENTS_DATA`:
```typescript
{
  id: 44,
  clientNumber: "44",
  name: "New Enterprise Name",
  category: "Retail & Commercial",
  location: "Tenkasi",
  serviceProvided: "CCTV Installation & Maintenance",
  clientType: "Commercial"
}
```

### 3. Updating Verified Contact Details
All store contact information is centralized in `src/data/company.ts`:
- **Phone:** `+91 98946 68866`
- **WhatsApp:** `+91 73976 22044`
- **Email:** `jazcomputershop@gmail.com`
- **Address:** `11/9, West Car Street, Tenkasi - 627811, Tamil Nadu`
- **Google Maps Link:** `https://maps.app.goo.gl/372rR3EZLviS37kA8`

---

## 🗺️ Long-Term Expansion Roadmap

- **Phase 1 (Completed):** Professional Business Profile, Distributorship Authority, 43 Clients Registry, 8-Page Showcase & Enquiries.
- **Phase 2 (Future):** Admin Dashboard & Content Management System (CMS).
- **Phase 3 (Future):** Customer Enquiry Tracking & Service Ticket CRM.
- **Phase 4 (Future):** Online Product Catalogue & E-Commerce Transactions.
