export function JsonLd() {
  const profile = 'https://app.trustedhousepainter.com/viewPainterProfile/SteelCityPaintingAndHandyman';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['HousePainter', 'HomeAndConstructionBusiness'],
    name: 'Steel City Painting And Handyman',
    description: 'Owner-operated interior and exterior painting, drywall repair, and handyman services in Hamilton, Ontario.',
    url: 'https://steelcityservices.ca/',
    telephone: '+1-289-775-2020',
    founder: { '@type': 'Person', name: 'Brent' },
    address: { '@type': 'PostalAddress', addressLocality: 'Hamilton', addressRegion: 'ON', addressCountry: 'CA' },
    areaServed: ['Hamilton', 'Ancaster', 'Dundas', 'Stoney Creek', 'Grimsby', 'Burlington', 'Oakville'],
    serviceType: ['Residential painting', 'Exterior painting and staining', 'Drywall repair', 'Handyman services'],
    sameAs: [profile, 'https://www.yelp.ca/biz/steel-city-hamilton-4'],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
