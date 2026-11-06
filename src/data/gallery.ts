export interface GalleryItem {
  id: string;
  title: string;
  category: 'cctv' | 'desktops' | 'service' | 'networking' | 'displays';
  categoryLabel: string;
  description: string;
  locationTag: string;
  image: string;
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'cctv', label: 'CCTV Installations' },
  { id: 'desktops', label: 'Custom PCs & Workstations' },
  { id: 'service', label: 'Service Lab & Chip-Level Repairs' },
  { id: 'networking', label: 'Networking & Structured Cabling' },
  { id: 'displays', label: 'Commercial & TV Displays' },
] as const;

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-cctv-1',
    title: 'Outdoor Perimeter AcuSense Bullet Camera Deployment',
    category: 'cctv',
    categoryLabel: 'CCTV Installations',
    description: 'Weatherproof Hikvision bullet cameras mounted on commercial warehouse perimeter with high-elevation coverage and IR night vision.',
    locationTag: 'Tenkasi Industrial Belt',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-desktop-1',
    title: 'High-Performance Custom Assembled Tower Rig',
    category: 'desktops',
    categoryLabel: 'Custom PCs & Workstations',
    description: 'Precision cable-managed performance PC built for heavy 3D architectural rendering and commercial video editing.',
    locationTag: 'JAZ Tech Studio, Tenkasi',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-service-1',
    title: 'Chip-Level Laptop Motherboard Soldering Station',
    category: 'service',
    categoryLabel: 'Service Lab & Chip-Level Repairs',
    description: 'BGA rework station and digital microscope setup for micro-soldering, short-circuit diagnostics and power IC replacement.',
    locationTag: 'JAZ Computer Service Lab',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-networking-1',
    title: 'Structured Server Rack & Gigabit Patch Panel',
    category: 'networking',
    categoryLabel: 'Networking & Structured Cabling',
    description: 'Clean CAT6 rack dressed with 24-port Gigabit managed switch, PoE injectors, and central Uninterruptible Power Supply (UPS).',
    locationTag: 'Academic Institution Campus',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-displays-1',
    title: '65-inch Smart 4K Conference Room Display Setup',
    category: 'displays',
    categoryLabel: 'Commercial & TV Displays',
    description: 'Flush-mounted large format commercial UHD display with wireless screen mirroring and video conference audio bar.',
    locationTag: 'Corporate Boardroom, Tenkasi',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-cctv-2',
    title: 'Sleek Indoor Dome Surveillance at Retail Showroom',
    category: 'cctv',
    categoryLabel: 'CCTV Installations',
    description: 'Discreet indoor dome cameras covering billing registers, customer aisles, and entry doors with synchronized audio capture.',
    locationTag: 'Jewellery Showroom, Tenkasi',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-cctv-3',
    title: 'Standalone Solar-Powered 4G Agro Farm Surveillance',
    category: 'cctv',
    categoryLabel: 'CCTV Installations',
    description: 'Independent monocrystalline solar panel and lithium battery camera providing continuous live streaming across remote farmland.',
    locationTag: 'Courtrallam Border Estate',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-desktop-2',
    title: 'Corporate Multi-Monitor Accounting Workstation',
    category: 'desktops',
    categoryLabel: 'Custom PCs & Workstations',
    description: 'Dual-display setup paired with silent mechanical keyboard and ergonomic mouse for financial audits and spreadsheet work.',
    locationTag: 'Chartered Accountant Office',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-service-2',
    title: 'High-Volume Ink-Tank Printer Ultrasonic Head Service',
    category: 'service',
    categoryLabel: 'Service Lab & Chip-Level Repairs',
    description: 'Micro-purging and sonic cleaning to clear stubborn dried ink clogs on color photo printers without damaging delicate nozzles.',
    locationTag: 'JAZ Printer Diagnostic Bench',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'
  }
];
