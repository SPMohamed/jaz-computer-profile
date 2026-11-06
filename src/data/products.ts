export interface ProductItem {
  id: string;
  name: string;
  category: 'desktops' | 'laptops' | 'monitors' | 'printers' | 'accessories' | 'televisions' | 'components' | 'software' | 'antivirus' | 'ai';
  categoryLabel: string;
  description: string;
  features: string[];
  brands?: string[];
  badge?: string;
  image: string;
  inquiryHighlight: string;
}

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'desktops', label: 'Desktops' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'monitors', label: 'Monitors' },
  { id: 'printers', label: 'Printers & Ink' },
  { id: 'accessories', label: 'Keyboards & Mice' },
  { id: 'televisions', label: 'LED TVs (24"-100")' },
  { id: 'components', label: 'Laptop Spares & Displays' },
  { id: 'software', label: 'Licensed Software' },
  { id: 'antivirus', label: 'Antivirus Solutions' },
  { id: 'ai', label: 'AI Applications' },
] as const;

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-desktop-branded',
    name: 'Branded Desktop Computers',
    category: 'desktops',
    categoryLabel: 'Desktops & Workstations',
    description: 'Corporate and home desktop workstations from tier-1 manufacturers. Engineered for heavy office productivity, multi-tasking, high endurance, and silent operation.',
    features: ['Intel Core i3/i5/i7/i9 & AMD Ryzen processors', 'Up to 64GB DDR4/DDR5 RAM and NVMe SSD speeds', 'Preloaded with genuine operating systems', 'Comprehensive manufacturer warranty support'],
    brands: ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus'],
    badge: 'Corporate Standard',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Available for enterprise procurement & retail orders'
  },
  {
    id: 'prod-desktop-assembled',
    name: 'Custom Assembled Performance PCs',
    category: 'desktops',
    categoryLabel: 'Desktops & Workstations',
    description: 'Custom-configured desktop rigs tailored for CAD modeling, 3D rendering, video editing, gaming, and commercial business accounting needs with precision cable management.',
    features: ['Customized CPU, GPU, motherboard & cooling selection', 'Tailored power supply units (80 Plus Bronze/Gold certified)', 'High airflow chassis with custom fan profiles', 'Burn-in tested and stress-benchmarked before delivery'],
    brands: ['Intel', 'AMD', 'Gigabyte', 'MSI', 'Corsair', 'Cooler Master'],
    badge: 'Custom Built',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Custom configuration advice tailored to your budget'
  },
  {
    id: 'prod-laptops',
    name: 'Business & Commercial Laptops',
    category: 'laptops',
    categoryLabel: 'Laptops',
    description: 'Ultraportable and heavy-duty business laptops built for professionals, students, accountants, and mobile workforces requiring endurance, battery life, and high speed.',
    features: ['FHD / 2K IPS Anti-glare displays', 'All-day battery longevity with rapid-charge support', 'Robust hinges and military-grade durability testing', 'Integrated biometric fingerprint & TPM 2.0 security'],
    brands: ['Dell', 'HP', 'Lenovo ThinkPad', 'Acer', 'Asus'],
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Official warranty with prompt local service support'
  },
  {
    id: 'prod-monitors',
    name: 'High-Resolution Monitors (Office, Gaming & Professional)',
    category: 'monitors',
    categoryLabel: 'Monitors',
    description: 'Flicker-free, eye-care certified computer monitors ranging from 18.5-inch compact workstations to 34-inch ultra-wide curved screens for multimonitor trading and creative setups.',
    features: ['IPS panels with accurate 99% sRGB color gamut', 'HDMI, DisplayPort & VGA multi-connectivity', 'Low blue light filter & flicker-free technology', 'VESA wall mount and ergonomic tilt stands'],
    brands: ['LG', 'Samsung', 'Dell', 'BenQ', 'AOC', 'ViewSonic'],
    badge: 'Eye Care Tech',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Available in sizes from 18.5" to 34" ultrawide'
  },
  {
    id: 'prod-printers',
    name: 'Multifunction Laser & Ink Tank Printers',
    category: 'printers',
    categoryLabel: 'Printers & Ink',
    description: 'High-volume color ink-tank printers and heavy-duty monochrome laser multi-function machines (Print, Copy, Scan, Wi-Fi Direct) for schools, offices, and retail bill counters.',
    features: ['Ultra low cost-per-page printing (black & color)', 'Integrated flatbed scanner & auto document feeder (ADF)', 'Wireless Wi-Fi, Ethernet & USB 2.0 direct print', 'Seamless mobile print support (AirPrint & Mopria)'],
    brands: ['Epson', 'Canon', 'HP', 'Brother'],
    badge: 'Low Cost Print',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Original ink tanks & toner cartridges in stock'
  },
  {
    id: 'prod-printer-ink',
    name: 'Genuine Printer Ink Bottles & Toner Cartridges',
    category: 'printers',
    categoryLabel: 'Printers & Ink',
    description: '100% authentic, sealed ink bottles, laser toners, and ribbons designed to protect printer print-heads, prevent smearing, and ensure consistent sharp document text.',
    features: ['Genuine pigment and dye-based formulations', 'LaserJet replacement cartridges with high yield count', 'Sealed anti-leak packaging for clean replenishment', 'Ribbon cassettes for dot matrix passbook printers'],
    brands: ['Epson EcoTank', 'Canon GI-790/GI-71', 'HP GT53/GT52', 'Brother'],
    badge: '100% Genuine',
    image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Bulk supply for educational & business institutions'
  },
  {
    id: 'prod-peripherals',
    name: 'Ergonomic Keyboards, Mice & Desktop Peripherals',
    category: 'accessories',
    categoryLabel: 'Keyboards & Mice',
    description: 'Durable wired and wireless membrane and mechanical keyboards, optical mice, desk pads, and combo sets built for long hours of comfortable data entry and gaming.',
    features: ['Silent-switch keyboards for peaceful office environments', 'Long battery life wireless 2.4GHz + Bluetooth pairing', 'Spill-resistant and UV-coated keys that resist fading', 'Ergonomic contours for wrist fatigue reduction'],
    brands: ['Logitech', 'Dell', 'HP', 'Zebronics', 'Fingers', 'TVS Gold'],
    badge: 'Daily Essential',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Wired and wireless combos ready for deployment'
  },
  {
    id: 'prod-led-tv',
    name: 'Smart LED TVs (24 to 100 Inches)',
    category: 'televisions',
    categoryLabel: 'LED TVs (24"-100")',
    description: 'Commercial display panels, hotel displays, conference room screens, and residential smart 4K UHD LED televisions from 24-inch bedroom sizes to 100-inch auditorium displays.',
    features: ['Crystal-clear 4K Ultra HD & HDR10+ visual clarity', 'Integrated Google TV / Android smart OS with OTT apps', 'Dolby Audio sound with dual high-output speakers', 'Multiple HDMI ARC, USB, Optical & Wi-Fi connectivity'],
    brands: ['Samsung', 'LG', 'Sony', 'Mi / Xiaomi', 'TCL', 'OnePlus'],
    badge: 'Sizes 24" - 100"',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Wall mounting and installation support included'
  },
  {
    id: 'prod-laptop-spares',
    name: 'Laptop Chargers, Adapters & Original Batteries',
    category: 'components',
    categoryLabel: 'Laptop Spares & Displays',
    description: 'Certified replacement power adapters (Type-C, barrel jack, rectangular slim tip) and high-density replacement battery packs for all leading laptop brands.',
    features: ['Built-in short-circuit and over-voltage surge protection', 'Original OEM wattage (45W, 65W, 90W, 135W, 200W+)', 'BIS certified for Indian electrical standards', 'Warranty backed against charging failures'],
    brands: ['Dell Original', 'HP Smart Pin', 'Lenovo', 'Acer', 'Apple MagSafe / Type-C'],
    badge: 'Safe & Certified',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Exact model matching to ensure zero laptop damage'
  },
  {
    id: 'prod-laptop-screens',
    name: 'Laptop Replacement Displays & Hinges',
    category: 'components',
    categoryLabel: 'Laptop Spares & Displays',
    description: 'Precision replacement screens (HD, Full HD IPS, OLED, 144Hz high refresh rate) and reinforced metallic replacement hinges for cracked or flickering laptop displays.',
    features: ['Grade-A panels with zero dead pixels', '30-pin & 40-pin eDP connector compatibility', 'Slim bezel, matte anti-glare and touch screen variants', 'Expert chip-level screen installation by lab technicians'],
    brands: ['BOE', 'Innolux', 'AUO', 'LG Display', 'Samsung Display'],
    badge: 'Lab Installation',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Same-day or next-day turnaround on common panels'
  },
  {
    id: 'prod-antivirus',
    name: 'Antivirus & Endpoint Security Solutions',
    category: 'antivirus',
    categoryLabel: 'Antivirus Solutions',
    description: 'Authorized licenses for premier cybersecurity software suites, safeguarding home PCs and corporate client-server workstations from ransomware, spyware, and phishing.',
    features: ['Real-time zero-day threat detection & behavioral shields', 'Ransomware protection & banking data encryption', 'Lightweight background engine with minimal RAM load', 'Automatic daily cloud signature updates'],
    brands: ['Quick Heal', 'McAfee', 'eScan', 'VibraNium'],
    badge: 'Authorized Seller',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Single-user, multi-user (3/5/10 PCs) & enterprise packs'
  },
  {
    id: 'prod-software-os',
    name: 'Windows 11, Windows Server & Microsoft Office',
    category: 'software',
    categoryLabel: 'Licensed Software',
    description: 'Genuine Microsoft digital licenses for workstations, retail businesses, and corporate domain networks. Compliant with IT audits and legal software standards.',
    features: ['Windows 11 Home & Windows 11 Professional licenses', 'Windows Server 2022/2025 standard edition licenses & CALs', 'Microsoft Office 2021 / 2024 Home & Business perpetual keys', 'Microsoft 365 cloud subscriptions setup & tenant migration'],
    brands: ['Microsoft'],
    badge: 'Official Licenses',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Full license certificates suitable for IT compliance'
  },
  {
    id: 'prod-software-creative-db',
    name: 'CorelDRAW Graphics Suite & Microsoft SQL Server',
    category: 'software',
    categoryLabel: 'Licensed Software',
    description: 'Industrial-grade design software for printing presses, sign makers, and banner studios, alongside robust database licenses for ERP, billing, and accounting systems.',
    features: ['CorelDRAW Graphics Suite vector illustration and typography', 'Microsoft SQL Server Standard & Express deployment', 'High throughput transactional database reliability', 'Authorized activation with lifetime security patches'],
    brands: ['Corel Corporation', 'Microsoft'],
    badge: 'Industry Standard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Setup assistance for local printing presses & billing software'
  },
  {
    id: 'prod-ai-apps',
    name: 'AI Applications & Local Intelligent Workflow Tools',
    category: 'ai',
    categoryLabel: 'AI Applications',
    description: 'Cutting-edge AI-enabled workstations, local neural-network accelerators, AI photo enhancements, automated transcription tools, and intelligent business assistant setup.',
    features: ['Dedicated NVIDIA RTX Tensor Core hardware configuration', 'On-premise localized AI model deployment (private data)', 'Automated document extraction & OCR workflows', 'AI-assisted video generation & high-speed batch processing'],
    brands: ['NVIDIA AI Workstations', 'Local LLM Setup', 'Vision AI'],
    badge: 'Next-Gen Tech',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    inquiryHighlight: 'Custom consultation for AI workstation builds'
  }
];
