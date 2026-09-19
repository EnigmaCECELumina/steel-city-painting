'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  X,
  ZoomIn,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Paintbrush,
  Layers,
  Wrench
} from 'lucide-react';

const categories = [
  'All Projects',
  'Cabinet Refinishing',
  'Interior Repainting',
  'Drywall & Plaster Repair',
  'Exterior Staining & Trim',
  'Trim & Accent Millwork',
];

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  location: string;
  duration: string;
  turnaroundBadge: string;
  productsUsed: string;
  prepDetails: string;
  scope: string;
  beforeDescription: string;
  afterDescription: string;
  beforeImage: string;
  afterImage: string;
  completionDate: string;
  featuredDetail: string;
}

const portfolioItems: ProjectItem[] = [
  {
    id: 1,
    title: 'Oak Kitchen Cabinet Spray Refinishing',
    category: 'Cabinet Refinishing',
    location: 'Westdale, Hamilton',
    duration: '4 Days (Solo)',
    turnaroundBadge: '4-Day Solo Transformation',
    productsUsed: 'BIN Shellac Primer + Benjamin Moore Command Satin (Chantilly Lace)',
    prepDetails: 'Deep degreasing with TSP, 2 coats AquaCoat grain filler to level oak pores, machine scuff-sand, shellac prime, sprayed in mobile dust booth.',
    scope: '22 raised-panel cabinet doors, 8 drawer fronts removed for spray booth application. Face frames hand-applied with micro-flock rollers on-site.',
    beforeDescription: 'Dated 1990s honey-oak cabinets with prominent grain texture, yellowed poly clearcoat, and heavy grease accumulation around handles.',
    afterDescription: 'Flawless factory-smooth finish in velvety satin white, with grain 95% eliminated and contemporary brushed champagne brass pulls installed.',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    completionDate: '2024',
    featuredDetail: 'Factory-Grade Spray Finish',
  },
  {
    id: 2,
    title: 'Two-Story Stairwell & High Ceiling Repaint',
    category: 'Interior Repainting',
    location: 'Kirkendall, Hamilton',
    duration: '2.5 Days (Solo)',
    turnaroundBadge: '2.5-Day Solo Project',
    productsUsed: 'Sherwin-Williams Emerald Interior Matte (Repose Gray) & Emerald Urethane Trim Enamel (Pure White)',
    prepDetails: 'Full canvas floor drop protection down hardwood stair treads, ladder leveler jack staging on 16ft ceiling, taped baseboards with FrogTape.',
    scope: 'Repaired 14 settle cracks and picture anchor holes. Feathered drywall patches, sealed with primer, and rolled two uniform coats up to 18-foot peak.',
    beforeDescription: 'Faded, scuffed dark tan walls with visible settling hairline cracks along ceiling junctions and prominent nail pops.',
    afterDescription: 'Bright, cohesive modern greige color scheme with razor-sharp cut lines along stringers, risers, and white crown molding.',
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    completionDate: '2024',
    featuredDetail: 'Precision Stairwell Staging',
  },
  {
    id: 3,
    title: 'Living Room Feature Wall & Board-and-Batten Trim',
    category: 'Trim & Accent Millwork',
    location: 'Ancaster, ON',
    duration: '2 Days (Solo)',
    turnaroundBadge: '2-Day Solo Project',
    productsUsed: 'Benjamin Moore Regal Select (Hale Navy Matte) & Scuff-X Satin (White Dove)',
    prepDetails: 'Caulked all board-and-batten joints with Quad Max elastomeric caulk, filled counter-sunk brad nail holes with wood filler, hand sanded to 220 grit.',
    scope: 'Prepared newly installed 1/2-inch MDF board-and-batten grid wall. Primed raw wood edges and applied two rich, streak-free deep navy coats.',
    beforeDescription: 'Raw MDF trim strips with visible pin nail indents, unsealed seam gaps, and plain builder beige drywall background.',
    afterDescription: 'Dramatic architectural feature wall with uniform deep color saturation and seamless, furniture-grade caulk lines.',
    beforeImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    completionDate: '2024',
    featuredDetail: 'Flawless Shadowline Caulking',
  },
  {
    id: 4,
    title: 'Dining Room Ceiling Drywall Water Damage Repair',
    category: 'Drywall & Plaster Repair',
    location: 'Dundas, ON',
    duration: '1 Day (Solo - 2 Visits)',
    turnaroundBadge: '1-Day Quick Turnaround',
    productsUsed: 'USG Sheetrock Plus 3, Zinsser BIN Stain Blocker, Behr Premium Ceiling Flat White',
    prepDetails: 'Removed damaged 2x2ft soft ceiling section, added 2x4 backing support, fastened drywall patch, fiberglass mesh taped, 3 feathered mud coats with HEPA vacuum sanding.',
    scope: 'Water stain containment from upstairs bathroom supply line leak. Isolated repair zone with zip-wall poly containment to prevent dust migration.',
    beforeDescription: 'Sagging, discolored brown water ring on dining room ceiling with flaking paint and loose tape joint.',
    afterDescription: 'Completely flat, seamless repair with zero flashing under critical lateral window sunlight across the entire 14x16 room.',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    completionDate: '2024',
    featuredDetail: 'Invisible Flush Patch Blending',
  },
  {
    id: 5,
    title: 'Weathered Cedar Deck Power Clean & Deep Oil Stain',
    category: 'Exterior Staining & Trim',
    location: 'Stoney Creek, ON',
    duration: '2 Days (Solo)',
    turnaroundBadge: '2-Day Outdoor Refresh',
    productsUsed: 'Sodium Percarbonate Cleaner + Armstrong-Clark Penetrating Oil (Natural Cedar)',
    prepDetails: 'Oxygenated wood wash, low-pressure orbital rotary scrub (preventing wood gouging), 48-hour dry down to under 12% moisture meter reading, hand-brushed boards.',
    scope: '320 square foot elevated cedar deck including perimeter balusters, stair treads, and top rail. Back-brushed each board to ensure deep wood cell penetration.',
    beforeDescription: 'Sun-bleached grey patina with green algae buildup on north-facing stairs and peeling water-based coating from prior years.',
    afterDescription: 'Warm, rich natural cedar glow with non-drying conditioning oils that repel rain and prevent summer UV cracking.',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    completionDate: '2023',
    featuredDetail: 'Moisture-Tested Application',
  },
  {
    id: 6,
    title: 'Victorian Portico Columns & Craftsman Front Door',
    category: 'Exterior Staining & Trim',
    location: 'Hamilton Mountain, ON',
    duration: '1.5 Days (Solo)',
    turnaroundBadge: '1.5-Day Solo Project',
    productsUsed: 'Peel-Bond Primer + Sherwin-Williams Emerald Urethane High Gloss (Tricorn Black) & Satin (Alabaster)',
    prepDetails: 'Hand scraped peeling exterior paint, sanded transition ridges smooth to 150 grit, spot-primed bare wood with high-solids exterior primer, replaced door weatherstripping.',
    scope: 'Restored two fluted porch columns, decorative corbels, and solid wood front entry door exposed to seasonal moisture and southern sun.',
    beforeDescription: 'Chipping, chalky exterior paint with bare wood weathering on the bottom 12 inches of portico columns and dull faded entry door.',
    afterDescription: 'Glossy, glass-smooth black focal entry door and revitalized white decorative columns offering standout curb appeal.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    completionDate: '2024',
    featuredDetail: 'High-Gloss Smooth Door Enamel',
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const filteredItems = selectedCategory === 'All Projects'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-32 relative bg-background">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            <Paintbrush className="w-3.5 h-3.5" />
            Authentic Solo Contractor Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Real Work by a <span className="text-accent">Single Craftsman</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            No generic corporate stock photos or subcontracted crews. These are real residential projects personally prepped, painted, and detailed in Hamilton homes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                selectedCategory === category
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-card border border-border text-foreground hover:border-accent hover:text-accent"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedProject(item);
                setShowBefore(false);
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border gold-border-thin transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <Image
                  src={item.afterImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />

                {/* Dark gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Turnaround Badge & Category */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-accent text-white shadow-sm">
                    {item.turnaroundBadge}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.duration}
                  </span>
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-serif group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.scope}
                  </p>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="px-4 py-2 rounded-full bg-accent/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    View Case Study
                  </div>
                </div>
              </div>

              {/* Card Meta & Solo Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <Layers className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Finish:</strong> {item.featuredDetail}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Paintbrush className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground line-clamp-1">
                      <strong className="text-foreground">Coating:</strong> {item.productsUsed}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-accent font-medium">
                  <span>Owner-Inspected</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Prep &amp; Results &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solo Operator Assurance Banner */}
        <div className="mt-16 bg-card border border-border gold-border rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground">
                  The Solo Craftsman Accountability Advantage
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                  When you hire large painting franchises, an estimator bids the job, but an unsupervised crew shows up. With Steel City Painting, the master tradesman who quotes your home is the one holding the brush, protecting your floors, and completing your final walkthrough.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs font-semibold text-foreground">
                  <span className="flex items-center gap-1.5 text-accent">
                    <CheckCircle2 className="w-4 h-4" /> \$2,000,000 Liability Insured
                  </span>
                  <span className="flex items-center gap-1.5 text-accent">
                    <CheckCircle2 className="w-4 h-4" /> WSIB Ontario Compliant
                  </span>
                  <span className="flex items-center gap-1.5 text-accent">
                    <CheckCircle2 className="w-4 h-4" /> 2-Year Craftsmanship Warranty
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-accent text-white rounded-xl text-center text-sm font-semibold hover:bg-accent-secondary transition-colors uppercase tracking-wider shadow-md shadow-accent/20 whitespace-nowrap"
              >
                Book In-Home Estimate
              </a>
              <a
                href="/terms"
                className="px-6 py-3.5 border border-border hover:border-accent text-foreground rounded-xl text-center text-sm font-medium transition-colors whitespace-nowrap"
              >
                Review Service Agreement
              </a>
            </div>
          </div>
        </div>

        {/* Lightbox / Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-card border border-border gold-border rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-5 sm:p-6 flex items-center justify-between z-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-muted-foreground">&bull;</span>
                    <span className="text-xs text-muted-foreground">{selectedProject.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1 font-serif">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Interactive Before / After View Toggle */}
              <div className="p-4 sm:p-6 border-b border-border bg-muted/40">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setShowBefore(true)}
                    className={cn(
                      "px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 uppercase tracking-wider",
                      showBefore
                        ? "bg-accent text-white shadow-md shadow-accent/20"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent"
                    )}
                  >
                    Before State
                  </button>
                  <button
                    onClick={() => setShowBefore(false)}
                    className={cn(
                      "px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 uppercase tracking-wider",
                      !showBefore
                        ? "bg-accent text-white shadow-md shadow-accent/20"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent"
                    )}
                  >
                    After (Completed)
                  </button>
                </div>
              </div>

              {/* Project Image & Visual Frame */}
              <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                <Image
                  src={showBefore ? selectedProject.beforeImage : selectedProject.afterImage}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    "px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-md",
                    showBefore ? "bg-amber-600 text-white" : "bg-emerald-600 text-white"
                  )}>
                    {showBefore ? 'Before Project Start' : 'After Master Finish'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-slate-300">
                  {selectedProject.duration}
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                    {showBefore ? 'Initial Substrate State & Challenges' : 'Craftsmanship Transformation'}
                  </h4>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    {showBefore ? selectedProject.beforeDescription : selectedProject.afterDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="p-4 rounded-xl bg-muted/60 border border-border">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-foreground mb-2">
                      <Wrench className="w-4 h-4 text-accent" />
                      Detailed Preparation
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.prepDetails}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/60 border border-border">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-foreground mb-2">
                      <Paintbrush className="w-4 h-4 text-accent" />
                      Specified Coatings &amp; Primer
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.productsUsed}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h5 className="text-xs font-bold uppercase text-foreground mb-2">
                    Scope of Work Executed
                  </h5>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground">
                    Project completed in {selectedProject.location} &bull; {selectedProject.completionDate}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-accent text-white rounded-xl text-center text-xs font-semibold hover:bg-accent-secondary transition-colors uppercase tracking-wider"
                  >
                    Request Similar Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}