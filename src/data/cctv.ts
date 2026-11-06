export interface CctvProduct {
  id: string;
  name: string;
  type: 'Bullet' | 'Dome' | 'Wi-Fi PTZ' | 'Solar Powered' | 'DVR' | 'NVR';
  tagline: string;
  idealFor: string;
  keySpecs: string[];
  brandsAvailable: string[];
  image: string;
}

export interface CctvPackage {
  id: string;
  title: string;
  camerasCount: string;
  recommendedFor: string;
  includes: string[];
  badge?: string;
}

export const CCTV_BRANDS = [
  { name: 'Hikvision', badge: 'Authorised Sub-Regional Distributor', highlight: 'Industry standard in smart AI surveillance, ColorVu full-color 24/7 vision, AcuSense human/vehicle filtering.' },
  { name: 'CP Plus', badge: 'Popular Commercial Brand', highlight: 'Widespread Indian security brand with high-definition clarity, night vision, and reliable mobile app support.' },
  { name: 'TrueView', badge: 'Smart Wireless & 4G/Solar', highlight: 'Specialists in 4G SIM cameras, dual-lens pan-tilt systems, and standalone solar powered remote units.' },
  { name: 'Unicam', badge: 'Cost-Effective Surveillance', highlight: 'Economical high-definition surveillance options ideal for small retail stores, godowns, and apartments.' },
  { name: 'TVT', badge: 'Enterprise Digital Video', highlight: 'Robust high-channel DVRs, enterprise NVR servers, and specialized industrial surveillance hardware.' }
];

export const CCTV_PRODUCTS: CctvProduct[] = [
  {
    id: 'cctv-bullet',
    name: 'Outdoor Weatherproof Bullet Cameras',
    type: 'Bullet',
    tagline: 'Visible deterrent with long-range night vision for perimeters and gates.',
    idealFor: 'Building perimeters, parking lots, entrance gates, street frontage and open yards.',
    keySpecs: [
      'IP67 waterproof and dustproof heavy-duty metal housing',
      'Infrared & ColorVu full-color night vision up to 40 meters',
      'Smart IR LEDs to prevent overexposure of close facial details',
      'Wide-angle 2.8mm / 3.6mm high-clarity optical lens'
    ],
    brandsAvailable: ['Hikvision', 'CP Plus', 'TrueView', 'TVT'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cctv-dome',
    name: 'Indoor Sleek Ceiling Dome Cameras',
    type: 'Dome',
    tagline: 'Discreet, tamper-resistant indoor monitoring with 360° coverage aesthetics.',
    idealFor: 'Retail shops, billing counters, classrooms, offices, living halls and corridors.',
    keySpecs: [
      'Low-profile dome enclosure blends smoothly with interior ceilings',
      'Vandal-resistant housing protects against deliberate tampering',
      'Built-in high-sensitivity microphone for synchronized audio recording',
      'Smart 1080p / 4MP / 4K UHD video resolution options'
    ],
    brandsAvailable: ['Hikvision', 'CP Plus', 'Unicam', 'TrueView'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cctv-wifi',
    name: 'Smart 360° Pan-Tilt Wi-Fi & 4G Cameras',
    type: 'Wi-Fi PTZ',
    tagline: 'Wire-free flexibility with app-controlled pan, tilt, zoom and two-way audio talk.',
    idealFor: 'Small homes, elderly care, baby monitoring, boutique stores, and fast setup without DVR.',
    keySpecs: [
      '355° horizontal pan & 90° vertical tilt control from smartphone',
      'Two-way audio communication via built-in speaker and mic',
      'Auto-motion tracking: camera automatically follows moving subjects',
      'MicroSD card slot supporting up to 256GB local loop recording'
    ],
    brandsAvailable: ['TrueView', 'CP Plus', 'Hikvision EZVIZ'],
    image: 'https://images.unsplash.com/photo-1549101031-15b597b83d16?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cctv-solar',
    name: 'Standalone Solar-Powered 4G SIM Cameras',
    type: 'Solar Powered',
    tagline: 'Zero power grid required. 100% off-grid security with high-efficiency solar panel & 4G SIM.',
    idealFor: 'Agricultural farms, coconut and mango groves, construction sites, poultry sheds and remote plots.',
    keySpecs: [
      'Integrated monocrystalline solar panel with rechargeable lithium battery',
      'Direct 4G LTE SIM connectivity (works with Jio, Airtel, Vi)',
      'PIR human detection wakes system instantly to preserve battery charge',
      'Operates reliably even during consecutive cloudy or monsoon days'
    ],
    brandsAvailable: ['TrueView Solar', 'Hikvision', 'CP Plus Ezykam'],
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cctv-dvr',
    name: 'Digital Video Recorders (DVR) - 4 / 8 / 16 / 32 Ch',
    type: 'DVR',
    tagline: 'Central recording hub for HD-TVI, AHD, CVI and analog camera setups.',
    idealFor: 'Cost-effective HD surveillance with coaxial or twisted-pair cabling over long distances.',
    keySpecs: [
      'H.265+ high-efficiency video compression saves up to 75% hard drive storage',
      'Simultaneous HDMI and VGA 1080p / 4K monitor output',
      'Continuous, scheduled, and smart motion-triggered recording modes',
      'Remote internet connectivity for smartphone viewing without static IP'
    ],
    brandsAvailable: ['Hikvision', 'CP Plus', 'Unicam', 'TVT'],
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cctv-nvr',
    name: 'Network Video Recorders (NVR) with PoE Ports',
    type: 'NVR',
    tagline: 'Pure digital IP surveillance with Power-over-Ethernet (PoE) and AI deep-learning analytics.',
    idealFor: 'Institutions, multi-building corporate campuses, jewelry showrooms, and high-security sites.',
    keySpecs: [
      'Integrated PoE switches: cameras powered directly through single CAT6 cable',
      'AcuSense human and motor vehicle classification to eliminate false alarms',
      'Multi-HDD bays supporting massive 10TB+ surveillance hard drives (WD Purple / Seagate SkyHawk)',
      'Ultra HD 4K live decoding and synchronized multi-channel playback'
    ],
    brandsAvailable: ['Hikvision', 'CP Plus', 'TVT'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  }
];

export const CCTV_FEATURE_HIGHLIGHTS = [
  { title: 'Sub-Regional Distributor Pricing', desc: 'Direct access to official stocks, original serial numbers, and genuine brand warranties without middleman markups.' },
  { title: 'Clean & Aesthetic Concealed Cabling', desc: 'Our technicians take pride in neat casing/pipe routing, proper termination, and zero messy hanging wires.' },
  { title: '24/7 Mobile Live View on Any Phone', desc: 'Free setup of mobile applications on iOS & Android with push alerts whenever movement is detected.' },
  { title: 'Night Vision & Full-Color Technology', desc: 'Crisp images day and night, including Hikvision ColorVu technology providing daylight-like vivid color even in total darkness.' },
  { title: 'Surveillance-Grade Storage Included', desc: 'We only use authentic 24/7 continuous-duty WD Purple or Seagate SkyHawk hard drives, never desktop drives.' },
  { title: 'Prompt Local Support & AMC in Tenkasi', desc: 'Fast on-site service whenever you need camera relocation, password recovery, hard disk replacement, or angle adjustment.' }
];
