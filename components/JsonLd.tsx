export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Steel City Painting & Handyman Services',
    alternateName: 'Steel City Painting',
    description: 'Premier Artistry in Restoration & Repair for Hamilton Properties. Delivering Uncompromising Quality for Discerning Properties Across Ontario. Master Tradesman & General Contractor Services.',
    url: 'https://steelcityservices.ca/',
    telephone: '+1-289-775-2020',
    email: 'inquiries@steelcityservices.ca',
    founder: {
      '@type': 'Person',
      name: 'Brent',
      jobTitle: 'Founder & Principal',
      description: 'Master Tradesman & General Contractor',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hamilton',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.2557',
      longitude: '-79.8711',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Hamilton',
      },
      {
        '@type': 'City',
        name: 'Ancaster',
      },
      {
        '@type': 'City',
        name: 'Dundas',
      },
      {
        '@type': 'City',
        name: 'Stoney Creek',
      },
      {
        '@type': 'City',
        name: 'Grimsby',
      },
      {
        '@type': 'City',
        name: 'Burlington',
      },
      {
        '@type': 'City',
        name: 'Oakville',
      },
      {
        '@type': 'City',
        name: 'Mississauga',
      },
    ],
    foundingDate: '2023',
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    serviceType: [
      'Interior & Exterior Architectural Painting',
      'Drywall, Plaster & Structural Surface Repair',
      'Custom Carpentry & Architectural Millwork',
      'Commercial Property Maintenance',
      'Residential Property Restoration',
      'Exterior Structure Refinishing',
      'Historic Home Restoration',
      'Corporate Office Refurbishment',
    ],
    additionalType: [
      'https://schema.org/HousePainter',
      'https://schema.org/HomeAndConstructionBusiness',
    ],
    knowsAbout: [
      'Historic Restoration',
      'Architectural Painting',
      'Custom Millwork',
      'Commercial Property Maintenance',
      'General Contracting',
      'Master Tradesman Services',
    ],
    award: [
      'Master Tradesman Certification',
      'Licensed General Contractor',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}