export interface CctvProduct {
  id: string;
  name: string;
  type: 
    | 'Bullet' 
    | 'Dome' 
    | 'Wi-Fi PTZ' 
    | 'Solar Powered' 
    | 'DVR' 
    | 'NVR' 
    | 'CCTV Accessories' 
    | 'Networking Accessories';
  headline: string;
  description: string;
  specs: string[];
  brands: string[];
  image: string;
}

export const CCTV_BRAND_LIST = [
  'Hikvision',
  'CP Plus',
  'TrueView',
  'Unicam',
  'TVT',
  'HiFocus',
  'Maxxion',
  'Cofe',
  'D-Link',
  'TP-Link'
] as const;

export const CCTV_BRANDS = [
  { 
    name: 'Hikvision', 
    badge: 'ColorVu & AI', 
    desc: 'Global surveillance technology featuring ColorVu 24/7 full-color night vision and AcuSense AI perimeter filtration.' 
  },
  { 
    name: 'CP Plus', 
    badge: 'Commercial Security', 
    desc: 'High-definition network cameras, intelligent DVRs, and dependable video recording for shops and commercial complexes.' 
  },
  { 
    name: 'TrueView', 
    badge: 'Wireless & Solar', 
    desc: '4G LTE SIM cameras, dual-lens pan-tilt security, and 100% off-grid solar-powered monitoring.' 
  },
  { 
    name: 'Unicam', 
    badge: 'Value Security', 
    desc: 'Reliable, cost-effective HD video surveillance for retail stores, warehouses, and residences.' 
  },
  { 
    name: 'TVT', 
    badge: 'Enterprise Digital', 
    desc: 'Multi-channel digital video recorders and enterprise IP network surveillance equipment.' 
  },
  { 
    name: 'HiFocus', 
    badge: 'Smart Optics', 
    desc: 'High-clarity IP and HD cameras with smart night vision and durable weatherproof construction.' 
  },
  { 
    name: 'Maxxion', 
    badge: 'Perimeter Defense', 
    desc: 'Industrial and commercial video security systems with continuous recording endurance.' 
  },
  { 
    name: 'Cofe', 
    badge: 'Wireless & 4G', 
    desc: 'Smart 4G routers, wireless security bridges, and compact wireless surveillance solutions.' 
  },
  { 
    name: 'D-Link', 
    badge: 'Networking & PoE', 
    desc: 'Enterprise unmanaged and smart PoE switches, Cat6 copper cabling, and surveillance transmission.' 
  },
  { 
    name: 'TP-Link', 
    badge: 'VIGI & Omada Net', 
    desc: 'VIGI professional security cameras, Omada SDN network management, and high-speed Wi-Fi access points.' 
  }
];

export const CCTV_PRODUCTS: CctvProduct[] = [
  {
    id: 'cctv-bullet',
    name: 'Weatherproof Bullet Cameras',
    type: 'Bullet',
    headline: 'Perimeter Defense with Long-Range Vision',
    description: 'Heavy-duty outdoor cameras engineered for gates, boundary walls, street frontage, and open industrial yards.',
    specs: [
      'IP67 waterproof metal housing',
      'ColorVu & infrared night vision up to 40m',
      'Smart IR facial clarity protection',
      'Wide-angle optical lenses'
    ],
    brands: ['Hikvision', 'CP Plus', 'TrueView', 'TVT', 'HiFocus', 'Maxxion'],
    image: '/assets/hikvision-colorvu-pro-series.webp'
  },
  {
    id: 'cctv-dome',
    name: 'Ceiling Dome Cameras',
    type: 'Dome',
    headline: 'Discreet Indoor Security Architecture',
    description: 'Tamper-resistant low-profile dome cameras designed for showrooms, billing counters, classrooms, and offices.',
    specs: [
      'Vandal-resistant low-profile enclosure',
      'Integrated audio microphone options',
      'FHD / 4MP / 4K UHD resolutions',
      'Seamless ceiling aesthetic integration'
    ],
    brands: ['Hikvision', 'CP Plus', 'Unicam', 'TrueView', 'HiFocus'],
    image: '/assets/cctv/dome-camera.jpg'
  },
  {
    id: 'cctv-wifi',
    name: '360° Pan-Tilt Wi-Fi & 4G Cameras',
    type: 'Wi-Fi PTZ',
    headline: 'Smart Flexibility with Two-Way Audio',
    description: 'Standalone wireless security cameras with motorized rotation, smartphone control, and built-in motion tracking.',
    specs: [
      '355° pan & 90° tilt from smartphone',
      'Two-way crystal voice intercom',
      'Smart human motion tracking',
      'MicroSD slot up to 256GB'
    ],
    brands: ['TrueView', 'CP Plus', 'Hikvision EZVIZ', 'Cofe'],
    image: '/assets/cctv/wifi-360-camera.jpg'
  },
  {
    id: 'cctv-solar',
    name: 'Solar-Powered 4G SIM Cameras',
    type: 'Solar Powered',
    headline: '100% Off-Grid Remote Surveillance',
    description: 'Integrated solar panel and battery camera requiring zero electricity cabling or local Wi-Fi. Ideal for farmlands, groves, and remote yards.',
    specs: [
      'Monocrystalline solar panel + battery',
      'Direct 4G LTE SIM connectivity',
      'PIR low-power wake-up sensor',
      'Continuous operation through overcast days'
    ],
    brands: ['TrueView Solar', 'Hikvision', 'CP Plus'],
    image: '/assets/cctv/solar-camera.jpg'
  },
  {
    id: 'cctv-dvr',
    name: 'Digital Video Recorders (DVR)',
    type: 'DVR',
    headline: 'Central HD Recording Engine (4 to 32 Channels)',
    description: 'H.265+ high-compression recording hubs for coaxial and analog HD cameras with seamless mobile live view.',
    specs: [
      'H.265+ video storage compression',
      'HDMI & VGA 4K / 1080p outputs',
      'Continuous & motion-triggered modes',
      'Free mobile app remote streaming'
    ],
    brands: ['Hikvision', 'CP Plus', 'Unicam', 'TVT', 'HiFocus', 'Maxxion'],
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cctv-nvr',
    name: 'Network Video Recorders (NVR)',
    type: 'NVR',
    headline: 'Enterprise IP Surveillance with PoE',
    description: 'High-throughput IP camera recording stations with Power-over-Ethernet (PoE) ports and AcuSense AI analytics.',
    specs: [
      'Integrated PoE camera power ports',
      'AcuSense human & vehicle classification',
      'Multi-bay surveillance hard drive slots',
      'Multi-channel simultaneous playback'
    ],
    brands: ['Hikvision', 'CP Plus', 'TVT', 'HiFocus', 'TP-Link'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cctv-accessories',
    name: 'CCTV Storage & Power Accessories',
    type: 'CCTV Accessories',
    headline: 'Dedicated Surveillance Power, Enclosures & Storage',
    description: 'Surveillance-grade internal hard drives (1TB to 8TB), centralized SMPS power supplies, BNC/DC connectors, and weatherproof junction boxes.',
    specs: [
      '24/7 continuous write surveillance hard drives',
      'Centralized regulated SMPS multi-channel power',
      'Weatherproof camera mounting junction boxes',
      'High-grade copper core 3+1 CCTV video cables'
    ],
    brands: ['Seagate SkyHawk', 'Western Digital Purple', 'Hikvision', 'CP Plus', 'ERD'],
    image: '/assets/gallery/motherboard-testing.jpg'
  },
  {
    id: 'cctv-networking',
    name: 'Networking & PoE Infrastructure',
    type: 'Networking Accessories',
    headline: 'Fast High-Bandwidth Gigabit & PoE Distribution',
    description: 'PoE switches (4, 8, 16, 24 Port), Cat6 pure copper network cabling, RJ45 patch panels, and long-range outdoor wireless bridges.',
    specs: [
      'High-wattage PoE/PoE+ camera ports',
      'Gigabit uplink for zero-lag surveillance streaming',
      'Cat6 high-speed transmission cable rolls',
      'Heavy-duty wall racks & server enclosures'
    ],
    brands: ['D-Link', 'TP-Link', 'Cofe', 'Hikvision', 'CP Plus'],
    image: '/assets/gallery/networking.jpg'
  }
];
