# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **HBM Building Maintenance**, a Toronto-based building maintenance company. Built with vanilla HTML, CSS, and JavaScript — no frameworks, bundlers, or package managers.

- **Domain:** www.himbm.com
- **Hosting:** GitHub Pages with Jekyll (jekyll-redirect-from plugin, pretty permalinks)
- **Dev server:** VS Code Live Server on port 5501 — just open any HTML file

There are no build, lint, or test commands. The site is plain static files served directly.

## Architecture

### Page Structure

All pages share a common layout: transparent/solid header with contact bar, responsive navbar with service mega-dropdown, mobile slide-out nav, and a multi-column footer. This layout is duplicated in each HTML file (no templating engine).

**Pages:**
- `index.html` — Home (hero video, service previews, projects grid, testimonials carousel, logos carousel)
- `about.html` — About Us
- `services.html` — Services listing by category
- `service.html` — **Dynamic** service detail page (reads `?service=` query param)
- `projects.html` — Project gallery with category filters
- `contact.html` — Contact form (FormSubmit.co → isha@himbm.com)
- `thank-you.html` — Form submission confirmation

### Service Routing

Individual service URLs like `/service/window-cleaning` are handled by redirect files in `service/[name]/index.html`. Each contains a meta refresh + JS redirect to `service.html?service=[name]`. The main `service.html` reads the query parameter and dynamically renders content from `service_data.js`.

### Key Assets

| File | Purpose |
|------|---------|
| `styles.css` (2600+ lines) | Single stylesheet, all pages. No preprocessor. |
| `styles.min.css` | Minified version (manually maintained) |
| `script.js` (~776 lines) | All JS — modular init functions called on DOMContentLoaded |
| `script.min.js` | Minified version (manually maintained) |
| `service_data.js` (~839 lines) | Centralized service content database |
| `description.md` | Content blueprint with schema.org data and site structure |

### service_data.js Structure

```javascript
const serviceData = {
  'service-id': {
    id, title, category, shortTitle, description,
    heroVideo, heroImage, imageTop, imageBottom,
    fullDescription,
    services: [{ title, description }],    // sub-services
    benefits: [{ title, description }],
    ctaTitle, ctaDescription,
    relatedServices: ['other-service-id']
  }
};

const serviceCategories = {
  'Cleaning Services': [...ids],
  'Installation Services': [...ids],
  'Repair & Maintenance Services': [...ids],
  'Safety & Testing Services': [...ids]
};
```

21 services across 4 categories. Adding a new service requires: adding to `serviceData` and `serviceCategories` in `service_data.js`, creating a redirect directory in `service/[name]/index.html`, and updating the nav dropdowns in every HTML file.

### JavaScript Initialization Pattern

`script.js` uses a modular pattern where each feature is an `init*()` function called from a single DOMContentLoaded listener:

```
initMobileMenu, initSmoothScrolling, initContactForm, initAnimations,
initServiceCards, initLazyLoading, initPhoneFormatting, initScrollToTop,
initProjectFilters, initTypingEffect, initAreasCycling, initLogoScrolling,
initTestimonialsSlider
```

### CSS Conventions

- **Colors:** Primary `#092c6a` (dark blue), Accent `#eb0509` (red for CTAs/highlights), Text `#333`
- **Breakpoints:** 992px (large tablet), 768px (tablet), 480px (mobile)
- **Layout:** Max-width 1200px `.container` wrapper; flexbox and grid throughout
- **Transitions:** Consistently `0.3s ease` for hover effects
- No CSS variables or preprocessor features

### Deployment

Push to `main` branch → GitHub Pages auto-builds with Jekyll. The `_config.yml` enables pretty permalinks and includes the `service/` directory. The `CNAME` file points to `www.himbm.com`.

### Important Caveats

- Header/footer/nav are **duplicated across all HTML files** — changes must be applied to every page manually.
- The `.min.css` and `.min.js` files are manually maintained — after editing the source files, the minified versions need manual regeneration.
- Form submissions go to FormSubmit.co (third-party service, no backend).
- `sitemap.xml` must be updated manually when adding/removing pages.
