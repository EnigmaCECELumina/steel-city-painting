'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ImageIcon, X, ZoomIn } from 'lucide-react';

const categories = [
  'All Projects',
  'Historic Home Restoration',
  'Corporate Office Refurbishment',
  'Luxury Interior Finishes',
  'Custom Millwork & Carpentry',
];

const portfolioItems = [
  {
    id: 1,
    title: 'Victorian Heritage Restoration',
    category: 'Historic Home Restoration',
    location: 'Hamilton, ON',
    beforeDescription: 'Decades of weather damage and neglect threatening structural integrity',
    afterDescription: 'Meticulous restoration preserving original architectural character while modernizing functionality',
    scope: 'Complete exterior restoration, custom millwork replication, period-appropriate finishes',
    completionDate: '2024',
  },
  {
    id: 2,
    title: 'Executive Office Suite',
    category: 'Corporate Office Refurbishment',
    location: 'Ancaster, ON',
    beforeDescription: 'Outdated 1990s office space with inefficient layout and worn finishes',
    afterDescription: 'Modern executive suite with premium finishes and optimized workflow design',
    scope: 'Complete interior renovation, custom cabinetry, premium wall finishes',
    completionDate: '2024',
  },
  {
    id: 3,
    title: 'Luxury Condo Interior',
    category: 'Luxury Interior Finishes',
    location: 'Dundas, ON',
    beforeDescription: 'Standard builder-grade finishes lacking sophistication and personalization',
    afterDescription: 'High-end interior with custom finishes and architectural details',
    scope: 'Custom painting, specialty wall treatments, crown molding installation',
    completionDate: '2023',
  },
  {
    id: 4,
    title: 'Heritage Library Millwork',
    category: 'Custom Millwork & Carpentry',
    location: 'Stoney Creek, ON',
    beforeDescription: 'Damaged original millwork requiring expert restoration and replication',
    afterDescription: 'Seamless restoration of historic millwork with expert craftsmanship',
    scope: 'Custom millwork fabrication, wood restoration, period-accurate replication',
    completionDate: '2024',
  },
  {
    id: 5,
    title: 'Commercial Retail Space',
    category: 'Corporate Office Refurbishment',
    location: 'Hamilton, ON',
    beforeDescription: 'Vacant retail space requiring complete transformation',
    afterDescription: 'Premium retail environment with sophisticated branding integration',
    scope: 'Complete interior renovation, custom fixtures, architectural painting',
    completionDate: '2023',
  },
  {
    id: 6,
    title: 'Historic Facade Preservation',
    category: 'Historic Home Restoration',
    location: 'Ancaster, ON',
    beforeDescription: 'Weathered facade with deteriorating architectural elements',
    afterDescription: 'Expert preservation restoring facade to original grandeur',
    scope: 'Exterior restoration, masonry work, historical preservation compliance',
    completionDate: '2024',
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const filteredItems = selectedCategory === 'All Projects' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 architectural-pattern -z-10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Portfolio of <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of premium restoration and craftsmanship across Hamilton's finest properties
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-accent text-white"
                  : "bg-card border border-border text-foreground hover:border-accent"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedProject(item);
                setShowBefore(true);
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>

                {/* Zoom Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="bg-card border border-border gold-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1 font-serif">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedProject.location} • Completed {selectedProject.completionDate}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Comparison Toggle */}
              <div className="p-6 border-b border-border flex justify-center gap-4">
                <button
                  onClick={() => setShowBefore(true)}
                  className={cn(
                    "px-6 py-3 rounded-lg text-sm font-medium transition-colors uppercase tracking-wider",
                    showBefore
                      ? "bg-accent text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={cn(
                    "px-6 py-3 rounded-lg text-sm font-medium transition-colors uppercase tracking-wider",
                    !showBefore
                      ? "bg-accent text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  After
                </button>
              </div>

              {/* Project Image */}
              <div className="aspect-[16/9] bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground mb-4 font-serif">
                      {showBefore ? 'BEFORE' : 'AFTER'}
                    </p>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                      {showBefore ? selectedProject.beforeDescription : selectedProject.afterDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 border-t border-border">
                <h4 className="text-lg font-bold text-foreground mb-3 font-serif">Project Scope</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.scope}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}