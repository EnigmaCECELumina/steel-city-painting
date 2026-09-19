# Steel City Painting & Handyman Services - Enterprise Website

An enterprise-grade, high-end web application for Steel City Painting & Handyman Services, an elite property restoration, architectural painting, and general contracting firm based in Hamilton, Ontario, Canada.

## 🏆 Enterprise Features

- **Premium Design System**: Sophisticated obsidian/slate backgrounds with champagne brass and metallic gold accents
- **Luxury Theme Controller**: Three enterprise themes (Slate & Brass, Architectural White, Stealth Onyx)
- **Premium Typography**: Playfair Display serif headers with Inter body text for corporate elegance
- **Advanced Interactive Components**:
  - Glassmorphism header with premium navigation
  - Founder spotlight with credential badges
  - Category-filtered portfolio with lightbox functionality
  - Verified client testimonials carousel
  - Professional credentials section
  - Enterprise consultation portal with detailed property types
- **Corporate SEO Architecture**: Complete OpenGraph, Twitter Cards, and multi-schema JSON-LD (GeneralContractor, HousePainter, LocalBusiness)
- **Static Export Ready**: Fully optimized for zero-cost static hosting on Vercel or GitHub Pages

## 🛠️ Enterprise Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 with custom enterprise color tokens
- **Icons**: Lucide React
- **Typography**: Playfair Display (serif headers) and Inter (body text)
- **Form Integration**: Web3Forms (enterprise placeholder)
- **Architecture**: Component-based modular structure

## 📋 Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

## 🏗️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd steel-city-painting
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Enterprise Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Click "Deploy"

The site will be live at `https://your-project.vercel.app`

### Deploy to GitHub Pages

1. **Configure GitHub Pages settings**:
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`) and folder: `/root`

2. **Build the project**:
```bash
npm run build
```

3. **Push to GitHub**:
```bash
git add .
git commit -m "Enterprise deployment"
git push origin main
```

4. **GitHub Actions** (already configured):
The `.github/workflows/deploy.yml` file is included for automatic deployment.

Your site will be available at `https://yourusername.github.io/steel-city-painting/`

## 🎨 Enterprise Customization

### Update Corporate Information

Edit the following files:
- `app/layout.tsx` - Update enterprise metadata, contact details, and SEO
- `components/Footer.tsx` - Update corporate contact info and service regions
- `components/ContactForm.tsx` - Update Web3Forms integration and form fields
- `components/JsonLd.tsx` - Update schema markup for business details

### Replace Portfolio Images

The portfolio uses image placeholders. To add real project images:
1. Add your images to the `public/` directory
2. Update `components/Portfolio.tsx` to use Next.js Image components
3. Replace the `ImageIcon` placeholders with actual project photos

### Configure Web3Forms

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your enterprise access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `components/ContactForm.tsx`

### Customize Enterprise Themes

Edit the theme CSS variables in `app/globals.css`:
```css
[data-theme="slate-brass"] {
  --background: #0B0D10;
  --accent: #D4AF37;
  /* ... other enterprise variables */
}
```

## 📁 Enterprise Project Structure

```
steel-city-painting/
├── app/
│   ├── globals.css          # Enterprise styles and theme variables
│   ├── layout.tsx           # Root layout with enterprise metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── About.tsx            # Company story and values
│   ├── ContactForm.tsx      # Enterprise consultation portal
│   ├── Credentials.tsx     # Professional certifications
│   ├── Footer.tsx           # Corporate footer with credentials bar
│   ├── Header.tsx           # Enterprise navigation
│   ├── Hero.tsx             # Premium hero with founder spotlight
│   ├── JsonLd.tsx           # Multi-schema SEO markup
│   ├── Portfolio.tsx        # Category-filtered project gallery
│   ├── Services.tsx         # Core service divisions
│   ├── Testimonials.tsx     # Verified client feedback carousel
│   └── ThemeSwitcher.tsx    # Enterprise theme controller
├── contexts/
│   └── ThemeContext.tsx     # Theme state management
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment
├── next.config.ts           # Next.js static export config
└── package.json             # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Enterprise SEO Architecture

This project includes comprehensive enterprise SEO optimization:

- **OpenGraph Tags**: Premium social media sharing
- **Twitter Cards**: Enhanced Twitter sharing
- **JSON-LD Multi-Schema**: 
  - GeneralContractor schema
  - HousePainter schema
  - LocalBusiness schema
  - Founder/Person schema
- **Meta Tags**: Complete enterprise metadata
- **Semantic HTML**: Proper heading hierarchy and structure
- **Local SEO**: Hamilton and Golden Horseshoe region optimization

## 🎯 Enterprise Design Tokens

### Color Palette
- **Primary Dark**: Obsidian Slate (#0B0D10), Deep Charcoal (#14171D)
- **Primary Light**: Architectural White (#F8F9FA), Stone Grey
- **Accent Colors**: Champagne Brass (#D4AF37), Warm Metallic Gold (#C5A059), Muted Gold (#B8860B)
- **Text Colors**: Soft off-white (dark mode), Deep graphite (light mode)

### Typography
- **Display Headers**: Playfair Display (elegant serif)
- **Body Text**: Inter (clean sans-serif)
- **Data/Specs**: JetBrains Mono (technical precision)

## 🤝 Corporate Contact

For enterprise inquiries and support:
- **Phone**: (289) 775-2020
- **Email**: inquiries@steelcityservices.ca
- **Location**: Hamilton, ON, Canada
- **Service Region**: Greater Golden Horseshoe

## 📄 License

This project is proprietary and confidential to Steel City Painting & Handyman Services.

---

Built with enterprise excellence using Next.js and Tailwind CSS
