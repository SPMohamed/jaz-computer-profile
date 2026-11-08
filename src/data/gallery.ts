import { getAssetPath } from '../utils/assets';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'outdoor-cctv' | 'indoor-cctv' | 'hardware' | 'motherboard' | 'networking' | 'solar-cctv';
  categoryLabel: string;
  description: string;
  locationTag: string;
  image: string;
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Showcases' },
  { id: 'outdoor-cctv', label: 'Outdoor CCTV' },
  { id: 'indoor-cctv', label: 'Indoor CCTV' },
  { id: 'hardware', label: 'Computer Hardware' },
  { id: 'motherboard', label: 'Motherboard Testing' },
  { id: 'networking', label: 'Networking' },
  { id: 'solar-cctv', label: 'Solar CCTV' },
] as const;

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-outdoor-cctv',
    title: 'Outdoor CCTV Surveillance Installation',
    category: 'outdoor-cctv',
    categoryLabel: 'Outdoor CCTV Installation',
    description: 'Weatherproof metallic bullet security camera with industrial conduit mounted on an exterior building wall overlooking a perimeter driveway.',
    locationTag: 'Outdoor Surveillance',
    image: getAssetPath('/assets/gallery/outdoor-cctv-installation.jpg')
  },
  {
    id: 'gal-indoor-cctv',
    title: 'Indoor Ceiling Dome Surveillance Setup',
    category: 'indoor-cctv',
    categoryLabel: 'Indoor CCTV Installation',
    description: 'Discreet white dome surveillance camera flush-mounted on acoustic ceiling tiles for retail stores, showrooms, and office counters.',
    locationTag: 'Indoor Commercial',
    image: getAssetPath('/assets/gallery/indoor-cctv-installation.jpg')
  },
  {
    id: 'gal-hardware',
    title: 'Computer Hardware & Workstation Assembly',
    category: 'hardware',
    categoryLabel: 'Computer Hardware',
    description: 'High-performance desktop tower chassis with dual-tower CPU air cooling, dedicated graphics card, high-speed RAM, and clean internal cable routing.',
    locationTag: 'Hardware Assembly',
    image: getAssetPath('/assets/gallery/computer-hardware.jpg')
  },
  {
    id: 'gal-motherboard',
    title: 'Motherboard Testing & Chip-Level Diagnostics',
    category: 'motherboard',
    categoryLabel: 'Motherboard Testing & Service',
    description: 'Electronics service bench with digital multimeter probes testing SMD circuit components, with oscilloscope diagnostics and soldering stations.',
    locationTag: 'Diagnostic Bench',
    image: getAssetPath('/assets/gallery/motherboard-testing.jpg')
  },
  {
    id: 'gal-networking',
    title: 'Structured Networking & Server Rack Infrastructure',
    category: 'networking',
    categoryLabel: 'Networking',
    description: 'Commercial server rack cabinet organized with dressed color-coded CAT6 ethernet patch cables, patch panels, and enterprise switches with active LED status.',
    locationTag: 'Network Infrastructure',
    image: getAssetPath('/assets/gallery/networking.jpg')
  },
  {
    id: 'gal-solar-cctv',
    title: 'Solar-Powered 4G Surveillance Setup',
    category: 'solar-cctv',
    categoryLabel: 'Solar CCTV Installation',
    description: 'Standalone pole-mounted 4G outdoor security camera system with attached photovoltaic solar panel and weatherproof battery box for off-grid perimeter monitoring.',
    locationTag: 'Off-Grid Solar',
    image: getAssetPath('/assets/gallery/solar-cctv-installation.jpg')
  }
];
