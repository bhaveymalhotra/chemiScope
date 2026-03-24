export type Product = {
  slug: string;
  productName: string;
  category: string;
  shortTagline: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: string[];
  keyHighlights: string[];
  benefits: string[];
  usageInstructions: string;
  dilution: string;
  packaging: string[];
  rtuStatus: 'RTU' | 'Concentrate' | 'Contact for details';
  specifications: Record<string, string>;
  sectors: string[];
  downloadableDocs: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: 'satol-s1',
    productName: 'SATOL S1',
    category: 'Housekeeping',
    shortTagline: 'General-purpose hygiene cleaner for institutional operations',
    shortDescription: 'Developed for daily hard-surface hygiene programs in facilities and commercial premises.',
    fullDescription:
      'SATOL S1 is positioned for routine cleaning programs where repeatable hygiene performance and operational ease are important.',
    idealFor: ['Facility housekeeping teams', 'Institutional premises', 'Commercial operations'],
    keyHighlights: ['Application-led usage guidance', 'Procurement-ready pack options', 'Supports routine hygiene workflows'],
    benefits: ['Consistent day-to-day cleaning support', 'Suitable for operational schedules', 'Easy to integrate in SOP-driven environments'],
    usageInstructions: 'Use as per site SOP and stain/load conditions. Contact technical team for area-specific method statements.',
    dilution: 'Contact for dilution guidance by application.',
    packaging: ['Institutional packs available on request'],
    rtuStatus: 'Contact for details',
    specifications: { form: 'Liquid', details: 'Detailed technical specs available in product data sheet on request.' },
    sectors: ['Healthcare', 'Hospitality', 'Facility Management'],
    downloadableDocs: ['Request PDS'],
    featured: true
  },
  {
    slug: 'satol-sanifoam',
    productName: 'SATOL Sanifoam',
    category: 'Washroom & Hygiene',
    shortTagline: 'Foam-led hygiene support for washroom care programs',
    shortDescription: 'Designed for hygiene-focused cleaning regimes requiring quality user experience and consistent upkeep.',
    fullDescription: 'Supports institutional washroom hygiene programs with service-oriented cleaning teams.',
    idealFor: ['Hotels', 'Hospitals', 'Office facilities'],
    keyHighlights: ['Hygiene-first positioning', 'Institutional fit', 'Usable in routine schedules'],
    benefits: ['Improved upkeep perception', 'Reliable cleaning protocol support', 'Operationally practical'],
    usageInstructions: 'Apply per process and rinse/finish as needed based on area type.',
    dilution: 'Refer product sheet / technical guidance.',
    packaging: ['Bulk and maintenance packs on request'],
    rtuStatus: 'Contact for details',
    specifications: { form: 'Liquid/Foam application', details: 'Contact for technical parameters.' },
    sectors: ['Healthcare', 'Hospitality'],
    downloadableDocs: ['Request PDS']
  },
  {
    slug: 'satol-ss-cleaner',
    productName: 'SATOL SS Cleaner',
    category: 'Kitchen & Surface Care',
    shortTagline: 'Stainless-steel care for commercial kitchens and process surfaces',
    shortDescription: 'Created for stainless-steel cleaning use-cases in institutional kitchen and operational environments.',
    fullDescription: 'Supports stainless-steel cleaning workflows where hygiene and finish consistency matter.',
    idealFor: ['Institutional kitchens', 'Food prep areas', 'Industrial utility zones'],
    keyHighlights: ['Surface-care positioning', 'Operational cleaning support', 'Use-case based deployment'],
    benefits: ['Maintains cleaning consistency', 'Built for frequent cleaning cycles', 'Supports process discipline'],
    usageInstructions: 'Apply according to area contamination and finish requirement.',
    dilution: 'Application-based; contact support.',
    packaging: ['Institutional packs available'],
    rtuStatus: 'Contact for details',
    specifications: { form: 'Liquid', compatibility: 'Stainless steel applications' },
    sectors: ['Kitchens', 'Hospitality', 'Food Processing'],
    downloadableDocs: ['Request PDS']
  },
  {
    slug: 'satol-floor-stripper',
    productName: 'SATOL Floor Stripper',
    category: 'Floor Care',
    shortTagline: 'Floor coating and residue stripping support for restoration cycles',
    shortDescription: 'For periodic deep floor maintenance in high-footfall facilities.',
    fullDescription: 'Used during floor restoration or periodic maintenance cycles as part of structured facility programs.',
    idealFor: ['Facility management companies', 'Hospitals', 'Commercial properties'],
    keyHighlights: ['Maintenance-cycle aligned', 'Suitable for high-use areas', 'Technical support available'],
    benefits: ['Helps maintenance teams standardize deep-clean tasks', 'Supports lifecycle floor-care planning'],
    usageInstructions: 'Use PPE and apply based on floor type and coating condition.',
    dilution: 'Guided by floor condition and maintenance protocol.',
    packaging: ['Bulk packs for institutional use'],
    rtuStatus: 'Contact for details',
    specifications: { form: 'Liquid', details: 'Full handling and technical details available via product sheet.' },
    sectors: ['Facility Management', 'Healthcare', 'Infrastructure'],
    downloadableDocs: ['Request PDS']
  }
];
