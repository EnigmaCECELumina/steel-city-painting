# Steel City — Next.js + Tailwind (App Router)

This repository contains a Next.js app (app router) scaffolded with Tailwind CSS and a componentized homepage matching the premium dark/gold design.

What I pushed
- Next.js app router with core routes: /, /about, /services, /projects, /contact
- Tailwind CSS configured with the premium palette and glow utilities
- Components: Header, Hero, TrustStrip, ServicesRow, AboutCard, FeaturedProjects, CTA, Footer
- Placeholder image paths under /public/images — please add your real images there:
  - public/images/logo.png (your provided logo)
  - public/images/hero.jpg (Brent hero photo)
  - public/images/portrait.jpg (owner portrait)
  - public/images/services/* (service thumbnails)
  - public/images/projects/* (project thumbnails)

Commands
- Install: npm install
- Dev: npm run dev
- Build: npm run build

Deploy
- Connect this repo to Vercel or Render. For Next.js, Vercel is recommended and will handle image optimization out of the box.

Notes
- I added soft gold "glow" utility classes in styles/globals.css (.gold-glow and .soft-neon). Use them in headings as desired.
- If you want all SEO pages created (/interior-painting-hamilton, /exterior-painting-hamilton, etc.), I can add them next — tell me which content you want per page.
