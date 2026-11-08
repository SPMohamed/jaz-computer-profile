import { getAssetPath } from '../utils/assets';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  iconName: string;
  highlights: string[];
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-desktop',
    title: 'Desktop Service',
    subtitle: 'Tower Diagnostics & Component Upgrades',
    shortDesc: 'Component-level motherboard repair, SMPS power unit replacement, CPU thermal repasting, high-speed NVMe SSD speed upgrades, and custom tuning.',
    iconName: 'Cpu',
    highlights: ['Power Supply Diagnostics', 'NVMe SSD Speed Overhauls', 'RAM Expansion & Benchmarking', 'Thermal Architecture Servicing'],
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-laptop',
    title: 'Laptop Repair',
    subtitle: 'Precision Mobility Engineering',
    shortDesc: 'Chip-level circuit diagnostics, Grade-A replacement display panels, battery renewals, broken hinge rebuilds, and liquid-spill recovery.',
    iconName: 'Laptop',
    highlights: ['FHD/IPS Screen Replacement', 'Genuine OEM Battery Fitment', 'Hinge Rebuilding & Fabrication', 'Motherboard BGA Diagnostics'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-printer',
    title: 'Printer Service',
    subtitle: 'Laser & Ink Tank Document Systems',
    shortDesc: 'Ink-tank and laser printer repair, print-head unclogging, paper feed roller renewals, drum replacements, and genuine ink/toner refills.',
    iconName: 'Printer',
    highlights: ['Piezo Print-Head Flushing', 'Laser Drum & Fuser Overhaul', 'Pick-up Roller Replacement', 'Network Wi-Fi Configuration'],
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-monitor',
    title: 'Monitor Service',
    subtitle: 'Display Panel Calibration & Circuit Repair',
    shortDesc: 'Backlight inverter repair, power board capacitor replacement, display port/HDMI port repairs, and screen color calibration for sizes up to 34".',
    iconName: 'Monitor',
    highlights: ['Power Board Diagnostics', 'Panel Backlight Repair', 'HDMI / DP Connector Renewal', 'Color Balance Calibration'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-tv',
    title: 'LED TV Service',
    subtitle: 'Large Format Panel Repair (24" to 100")',
    shortDesc: 'Power board repairs, replacement of damaged LED backlight strips, motherboard servicing, and precision wall mount installation across Tenkasi.',
    iconName: 'Tv',
    highlights: ['LED Backlight Array Renewal', 'Power Board Repair', 'Logic Board Calibration', 'Heavy-Duty Wall Mounting'],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'srv-cctv',
    title: 'CCTV Installation',
    subtitle: 'Surveillance Engineering & Turnkey Setup',
    shortDesc: 'Turnkey security surveillance setups, AcuSense AI human/vehicle filtering, ColorVu full-color night vision, solar 4G units, and smartphone streaming.',
    iconName: 'Camera',
    highlights: ['High-Definition Surveillance', 'Perimeter ColorVu Vision', 'Off-Grid 4G Solar Cameras', 'Zero-Latency Phone Streaming'],
    image: getAssetPath('/assets/cctv/bullet-camera.jpg')
  },
  {
    id: 'srv-networking',
    title: 'Networking Solutions',
    subtitle: 'Structured Infrastructure & Wireless Mesh',
    shortDesc: 'Structured CAT6 gigabit cabling, commercial managed switches, seamless Wi-Fi mesh deployment, router security, and clean server rack dressing.',
    iconName: 'Network',
    highlights: ['Gigabit Structured Cabling', 'Campus Seamless Wi-Fi Mesh', 'Rack Dressing & Patch Panels', 'Firewall & Access Security'],
    image: getAssetPath('/assets/gallery/networking.jpg')
  },
  {
    id: 'srv-it-support',
    title: 'IT Support',
    subtitle: 'Enterprise Care & Software Licensing',
    shortDesc: 'Genuine Microsoft Windows & Office licenses, endpoint antivirus suites (Quick Heal, McAfee, eScan, VibraNium), and rapid on-demand technical support.',
    iconName: 'ShieldCheck',
    highlights: ['Genuine Windows & Office', 'Authorized Antivirus Suites', 'Automated Backup Protocols', 'Rapid On-Demand Support'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
  }
];
