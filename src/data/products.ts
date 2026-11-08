export interface SoftwareCategoryGroup {
  category: string;
  items: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 
    | 'desktops' 
    | 'custom-pcs' 
    | 'laptops' 
    | 'monitors' 
    | 'printers' 
    | 'accessories' 
    | 'televisions' 
    | 'spares' 
    | 'software' 
    | 'antivirus' 
    | 'ai';
  categoryLabel: string;
  headline: string;
  description: string;
  specs: string[];
  brands?: string[];
  tag?: string;
  image: string;
  softwareCategories?: SoftwareCategoryGroup[];
}

// Brand Catalogs by Category (Modular, easy to maintain, non-duplicative)
export const BRANDED_DESKTOP_BRANDS = ['Dell', 'HP', 'Lenovo', 'Acer', 'Apple', 'Asus'] as const;
export const LAPTOP_BRANDS = ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'Apple'] as const;
export const PRINTER_BRANDS = ['Epson', 'HP', 'Canon', 'Brother', 'TVS'] as const;
export const KEYBOARD_MOUSE_BRANDS = ['TVS', 'Acer', 'Asus', 'Logitech', 'HP', 'Dell', 'Lenovo'] as const;
export const ANTIVIRUS_BRANDS = [
  'Quick Heal',
  'McAfee',
  'eScan',
  'VibraNium',
  'Seqrite Endpoint Security',
  'Kaspersky',
  'K7'
] as const;

export const GENUINE_SOFTWARE_BRANDS = [
  'Microsoft Windows',
  'Microsoft Windows Server',
  'Microsoft Office',
  'CorelDRAW',
  'Microsoft SQL Server'
] as const;

export const GENUINE_SOFTWARE_CATALOGUE: SoftwareCategoryGroup[] = [
  {
    category: 'Operating Systems',
    items: ['Microsoft Windows 10', 'Microsoft Windows 11', 'Microsoft Windows Server']
  },
  {
    category: 'Office & Productivity',
    items: ['Microsoft Office']
  },
  {
    category: 'Graphics & Design',
    items: ['CorelDRAW']
  },
  {
    category: 'Database Management',
    items: ['Microsoft SQL Server']
  },
  {
    category: 'Additional Solutions',
    items: ['Other genuine licensed business and professional software solutions']
  }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'desktops', label: 'Desktop Computers' },
  { id: 'custom-pcs', label: 'Custom Assembled PCs' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'monitors', label: 'Monitors' },
  { id: 'printers', label: 'Printers' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'televisions', label: 'LED TVs' },
  { id: 'spares', label: 'Laptop Spare Parts' },
  { id: 'software', label: 'Software' },
  { id: 'antivirus', label: 'Antivirus' },
  { id: 'ai', label: 'AI Applications' }
] as const;

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-desktop-branded',
    name: 'Branded Desktop Computers',
    category: 'desktops',
    categoryLabel: 'Desktop Computers',
    headline: 'Tier-1 Commercial Towers & All-in-Ones',
    description: 'Tier-1 enterprise desktop systems and all-in-one workstations configured for heavy office multitasking, accounting, and institutional computing.',
    specs: [
      'Dell, HP, Lenovo, Acer, Apple & Asus systems',
      'Intel Core, AMD Ryzen & Apple Silicon architecture',
      'Up to 64GB DDR4/DDR5 unified memory',
      'Genuine factory pre-activated OS & warranty'
    ],
    brands: [...BRANDED_DESKTOP_BRANDS],
    tag: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-desktop-assembled',
    name: 'Custom Assembled Performance PCs',
    category: 'custom-pcs',
    categoryLabel: 'Custom Assembled PCs',
    headline: 'Bespoke Workstation Architecture',
    description: 'Hand-assembled workstation towers optimized for CAD engineering, 3D rendering, video production, and high-performance gaming.',
    specs: [
      'Custom CPU/GPU cooling architecture',
      'Certified 80+ power supplies',
      'Airflow-optimized chassis',
      'Stress-benchmarked hardware'
    ],
    brands: ['Intel', 'AMD', 'NVIDIA', 'Gigabyte', 'MSI', 'Corsair'],
    tag: 'Custom Built',
    image: '/assets/custom-workstation-tower.webp'
  },
  {
    id: 'prod-laptops',
    name: 'Commercial & Ultrabook Laptops',
    category: 'laptops',
    categoryLabel: 'Laptops',
    headline: 'Portable Computing Precision',
    description: 'Slim business notebooks, rugged enterprise portables, and ultrabooks engineered for mobile professionals, engineers, and students.',
    specs: [
      'Dell, HP, Lenovo, Acer, Asus & Apple platforms',
      'FHD / 2K IPS & Retina anti-glare displays',
      'Fast-charging battery architecture & Type-C',
      'TPM 2.0 biometric security & robust chassis'
    ],
    brands: [...LAPTOP_BRANDS],
    tag: 'Pro Mobility',
    image: '/assets/macbook-pro-complete.webp'
  },
  {
    id: 'prod-monitors',
    name: 'High-Resolution Monitors',
    category: 'monitors',
    categoryLabel: 'Monitors',
    headline: 'Frameless Eye-Care Displays',
    description: 'Curved and frameless ultrawide displays from 24" to 34" for gaming, multi-screen trading, and creative video editing.',
    specs: [
      'Aggressive immersive curvature',
      'HDMI & DisplayPort high-refresh inputs',
      'Flicker-free eye comfort certification',
      'VESA wall & arm mount ready'
    ],
    brands: ['Samsung', 'LG', 'Dell', 'BenQ', 'AOC'],
    tag: 'Curved Ultrawide',
    image: '/assets/curved-gaming-monitor.webp'
  },
  {
    id: 'prod-printers',
    name: 'Printers (Ink Tank, Laser, All-in-One & Dot Matrix)',
    category: 'printers',
    categoryLabel: 'Printers',
    headline: 'High-Yield Office Printing & Passbook Billing',
    description: 'EcoTank color ink tank systems, heavy-duty monochrome laser multi-function printers, all-in-one scanners, and TVS dot matrix billing printers.',
    specs: [
      'Ink Tank, Laser, All-in-One & Dot Matrix categories',
      'Epson, HP, Canon, Brother & TVS printer platforms',
      'High-capacity integrated ink tanks & ADF duplex',
      'TVS Dot Matrix passbook, receipt & billing printers'
    ],
    brands: [...PRINTER_BRANDS],
    tag: 'Office & Billing',
    image: '/assets/printer-lineup.webp'
  },
  {
    id: 'prod-accessories',
    name: 'Keyboards, Mice & Peripherals',
    category: 'accessories',
    categoryLabel: 'Accessories',
    headline: 'Commercial, Mechanical & Tactile Input Hardware',
    description: 'Durable mechanical keyboards, TVS commercial billing keyboards, wireless desktop combos, and precision optical mice from industry-leading brands.',
    specs: [
      'TVS mechanical & commercial billing keyboards',
      'Acer, Asus, Logitech, HP, Dell & Lenovo combos',
      'Ergonomic high-precision optical tracking',
      'Durable braided USB cables & wireless multi-link'
    ],
    brands: [...KEYBOARD_MOUSE_BRANDS],
    tag: 'Input Peripherals',
    image: '/assets/premium-gaming-keyboard-mouse.webp'
  },
  {
    id: 'prod-led-tv',
    name: 'Smart LED TVs (24" to 100")',
    category: 'televisions',
    categoryLabel: 'LED TVs',
    headline: 'Commercial Displays & 4K Panels',
    description: 'Ultra-thin bezel smart panels for conference rooms, digital signage, reception areas, and home entertainment.',
    specs: [
      '4K Ultra HD & HDR10+ support',
      'Smart Google TV / Android OS',
      'Dolby Audio acoustic drivers',
      'HDMI ARC & optical connectivity'
    ],
    brands: ['Samsung', 'LG', 'Sony', 'Mi', 'TCL'],
    tag: 'Sizes 24"–100"',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-spares',
    name: 'Laptop Chargers, Batteries & Displays',
    category: 'spares',
    categoryLabel: 'Laptop Spare Parts',
    headline: 'Certified Replacement Components',
    description: 'Original wattage power adapters (Type-C / barrel tip), high-retention replacement batteries, and replacement screen panels.',
    specs: [
      'Surge & overvoltage safety',
      'OEM wattage compliance',
      'Grade-A display panels',
      'Clean installation fit'
    ],
    brands: ['Dell', 'HP', 'Lenovo', 'Acer', 'Apple Type-C'],
    tag: 'Replacement Spares',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-software',
    name: 'Genuine Licensed Software Solutions',
    category: 'software',
    categoryLabel: 'Software',
    headline: 'Operating Systems, Productivity, Database & Design',
    description: 'Genuine digital software licenses supplied by JAZ COMPUTER. We deliver official digital licenses ensuring audit compliance, stability, and uninterrupted enterprise productivity across platforms. Genuine software solutions available on request.',
    specs: [
      'Operating Systems: Microsoft Windows 10, Windows 11 & Windows Server',
      'Office & Productivity: Microsoft Office & 365 suites',
      'Graphics & Design: CorelDRAW Graphics Suite',
      'Database Management: Microsoft SQL Server',
      'Additional Software: Business & enterprise licensing solutions'
    ],
    brands: [...GENUINE_SOFTWARE_BRANDS],
    softwareCategories: [...GENUINE_SOFTWARE_CATALOGUE],
    tag: 'Audit Compliant',
    image: '/assets/microsoft-windows-sql-software.webp'
  },
  {
    id: 'prod-antivirus',
    name: 'Antivirus & Endpoint Security Solutions',
    category: 'antivirus',
    categoryLabel: 'Antivirus',
    headline: 'Real-Time Endpoint Cybersecurity & Threat Defense',
    description: 'Official multi-device endpoint security licenses protecting systems against ransomware, phishing, malware, zero-day threats, and network intrusion.',
    specs: [
      'Seqrite Endpoint Security centralized management',
      'Zero-day behavioral shields & ransomware defense',
      'Kaspersky, Quick Heal, McAfee & K7 retail licenses',
      'eScan & VibraNium multi-device protection'
    ],
    brands: [...ANTIVIRUS_BRANDS],
    tag: 'Cyber Defense',
    image: '/assets/antivirus-cybersecurity-alert.webp'
  },
  {
    id: 'prod-ai',
    name: 'AI Workstations & Hardware Acceleration',
    category: 'ai',
    categoryLabel: 'AI Applications',
    headline: 'Local Hardware for Machine Intelligence',
    description: 'Tensor-core equipped hardware configurations built to run local language models, video synthesis, and AI automation workflows privately.',
    specs: [
      'NVIDIA RTX Tensor Cores',
      'High-bandwidth VRAM buffers',
      'On-premise localized models',
      'Ultra-fast NVMe read/write'
    ],
    brands: ['NVIDIA RTX', 'Intel Core Ultra', 'AMD Ryzen AI'],
    tag: 'Next-Gen AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'
  }
];
