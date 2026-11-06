export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tamilDesc?: string;
  detailedDesc: string;
  iconName: string;
  features: string[];
  turnaroundTime: string;
  serviceType: 'On-site & Lab' | 'Lab Service' | 'On-site Field Service' | 'Lab & On-site' | 'On-site & Remote';
  popularFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-desktop',
    title: 'Desktop Repair & Maintenance',
    shortDesc: 'Comprehensive hardware troubleshooting, motherboard repair, SMPS replacement, and OS recovery for home & corporate desktops.',
    tamilDesc: 'டெஸ்க்டாப் கணினி பழுதுநீக்கம், பாகங்கள் பொருத்துதல் மற்றும் பராமரிப்பு சேவைகள்.',
    detailedDesc: 'Our specialized technicians diagnose and resolve power failure issues, continuous reboot loops, blue screen (BSOD) crashes, overheating, slow performance, and hardware component degradation. We also clean internal heatsinks, re-apply high-conductivity thermal paste, and upgrade RAM/SSDs for instant speed gains.',
    iconName: 'Monitor',
    features: [
      'Diagnostic component-level hardware testing',
      'SMPS power supply testing and OEM replacement',
      'High-speed SSD upgrades (NVMe / SATA III)',
      'Dust cleaning, fan lubrications & thermal paste renewal',
      'System BIOS flash and firmware updates'
    ],
    turnaroundTime: 'Same Day to 24 Hours',
    serviceType: 'On-site & Lab',
    popularFor: 'Office workstations, accounting PCs & gaming towers'
  },
  {
    id: 'srv-laptop',
    title: 'Laptop Repair & Chip-Level Service',
    shortDesc: 'Precision chip-level motherboard repairing, screen/hinge reconstruction, liquid damage restoration, and battery/keyboard renewal.',
    tamilDesc: 'லேப்டாப் மதர்போர்டு சிப்-லெவல் சர்வீஸ், டிஸ்பிளே மற்றும் கீபோர்டு மாற்றும் சேவைகள்.',
    detailedDesc: 'Equipped with precision BGA rework stations and diagnostic micro-soldering tools, we repair laptops from all leading global brands (Dell, HP, Lenovo, Asus, Acer, Apple). We handle delicate faults including short circuits, dead motherboards, broken hinges, damaged trackpads, and flickering screens without requiring costly motherboard replacements.',
    iconName: 'Laptop',
    features: [
      'Chip-level IC repair & short-circuit tracing',
      'Original screen display panel replacements',
      'Broken hinge fabrication & chassis body repair',
      'Original battery & internal keyboard replacement',
      'Liquid spill emergency cleaning & ultrasonic corrosion treatment'
    ],
    turnaroundTime: '24 to 48 Hours',
    serviceType: 'Lab Service',
    popularFor: 'Ultrabooks, business laptops & student devices'
  },
  {
    id: 'srv-printer',
    title: 'Printer Service & Cartridge Solutions',
    shortDesc: 'Complete printer head unclogging, paper feed roller fixes, laser toner drum changes, and wireless printer network sharing.',
    tamilDesc: 'பிரிண்டர் சர்வீஸ், இங்க் கார்ட்ரிட்ஜ் ரீஃபில்லிங் மற்றும் நெட்வொர்க் பிரிண்டிங்.',
    detailedDesc: 'Keep your daily office paperwork flowing smoothly. We provide thorough printer maintenance covering paper jam rectification, blotchy print resolution, gear replacements, logic board servicing, waste ink pad reset, and clean laser cartridge remanufacturing with top-tier fine carbon powder.',
    iconName: 'Printer',
    features: [
      'Ink tank print-head ultrasonic cleaning and alignment',
      'Paper pick-up roller and separation pad replacement',
      'Laser printer fuser unit and Teflon sleeve servicing',
      'Waste ink pad replacement and software counter reset',
      'Wi-Fi network printer setup and multi-computer sharing'
    ],
    turnaroundTime: 'Same Day / 24 Hours',
    serviceType: 'On-site & Lab',
    popularFor: 'Shops, billing counters, schools & legal offices'
  },
  {
    id: 'srv-cctv',
    title: 'CCTV Installation & Maintenance',
    shortDesc: 'End-to-end commercial & residential surveillance: site survey, cabling, IP/HD camera mounting, DVR/NVR setup, and mobile viewing.',
    tamilDesc: 'CCTV கேமரா பொருத்துதல், நெட்வொர்க் அமைத்தல் மற்றும் பராமரிப்பு சேவைகள்.',
    detailedDesc: 'As an Authorised Sub-Regional Distributor for Hikvision, we provide enterprise-tier video surveillance architecture for businesses, estates, schools, jewelry showrooms, and residences in Tenkasi and surrounding regions. We specialize in clean concealed cabling, night vision setup, perimeter alert sensors, and remote monitoring on smartphones.',
    iconName: 'Camera',
    features: [
      'Free on-site security survey and camera angle optimization',
      'High-grade RG59 / CAT6 outdoor waterproof cabling',
      'DVR / NVR recording configuration & hard drive health checks',
      'Mobile app remote live streaming (Hik-Connect / CP Plus gCMOB)',
      'Annual maintenance contracts (AMC) and periodic lens cleaning'
    ],
    turnaroundTime: 'Scheduled On-Site',
    serviceType: 'On-site Field Service',
    popularFor: 'Commercial buildings, farms, residences & retail stores'
  },
  {
    id: 'srv-networking',
    title: 'Networking & Structured Cabling',
    shortDesc: 'High-speed LAN wiring, gigabit switches, Wi-Fi mesh routers, server rack organizing, and secure firewall configuration.',
    tamilDesc: 'நெட்வொர்க் கேபிளிங், ரவுட்டர் மற்றும் வைஃபை அமைத்தல்.',
    detailedDesc: 'Ensure seamless internet and local file sharing across multiple rooms or office floors. We design and install structured CAT6 networking, patch panels, server racks, access points, Wi-Fi mesh extenders, and network printers with robust firewall filtering and bandwidth management.',
    iconName: 'Network',
    features: [
      'Structured CAT6 Gigabit LAN cabling & cable termination',
      'Wi-Fi access point deployment for dead-zone free coverage',
      'Multi-port Gigabit switch & server rack dressing',
      'Network Attached Storage (NAS) & file sharing setup',
      'Internet failover dual-WAN router configurations'
    ],
    turnaroundTime: 'Scheduled Project',
    serviceType: 'On-site Field Service',
    popularFor: 'Offices, schools, colleges & large multi-floor homes'
  },
  {
    id: 'srv-tv',
    title: 'LED TV Service & Panel Repair',
    shortDesc: 'Expert motherboard, power supply board, and LED backlight strip repairs for smart televisions from 24 inches to 100 inches.',
    tamilDesc: 'LED டிவி சர்வீஸ், பவர் போர்டு மற்றும் பேக்லைட் பழுதுநீக்கம்.',
    detailedDesc: 'Resolve frustrating television issues including sound without picture, dim screen, flickering display, HDMI port malfunction, and power standby lock. We use certified testing equipment and authentic LED backlight strips to restore pristine brightness and vibrant color fidelity.',
    iconName: 'Tv',
    features: [
      'Full LED backlight array replacement with heat-sink backing',
      'SMPS power supply board circuit repairs',
      'T-Con logic board and ribbon cable troubleshooting',
      'Smart TV motherboard firmware reload and Android OS recovery',
      'Wall mount bracket installation and audio cabling'
    ],
    turnaroundTime: '24 to 48 Hours',
    serviceType: 'Lab & On-site',
    popularFor: 'Residential smart TVs, commercial lobby displays & conference screens'
  },
  {
    id: 'srv-monitor',
    title: 'Monitor Service & Display Solutions',
    shortDesc: 'Specialized desktop monitor repairs for dead power supplies, distorted color bars, screen flickering, and button board faults.',
    tamilDesc: 'கம்ப்யூட்டர் மானிட்டர் சர்வீஸ் மற்றும் டிஸ்பிளே சரிசெய்தல்.',
    detailedDesc: 'Cost-effective repair solutions for office and creative monitors that suddenly stop turning on or experience color banding. We replace faulty electrolytic capacitors, backlight inverters, and input HDMI/VGA ports to save you the expense of buying new monitors.',
    iconName: 'ScreenShare',
    features: [
      'Internal SMPS power board capacitor replacement',
      'Backlight inverter and driver board servicing',
      'Loose VGA / HDMI / DisplayPort solder repairs',
      'Color calibration and resolution flickering fix'
    ],
    turnaroundTime: '24 Hours',
    serviceType: 'Lab Service',
    popularFor: 'School computer labs, office dual-screen setups & retail billing'
  },
  {
    id: 'srv-it-support',
    title: 'Corporate IT Support & AMC Services',
    shortDesc: 'Dedicated Annual Maintenance Contracts (AMC), on-call desktop support, OS licensing, automated backups, and cybersecurity audits.',
    tamilDesc: 'நிறுவனங்களுக்கான தகவல் தொழில்நுட்ப ஆதரவு மற்றும் வருடாந்திர பராமரிப்பு ஒப்பந்தம் (AMC).',
    detailedDesc: 'Let your team focus on business while we maintain your technology infrastructure. Our business IT packages include scheduled monthly preventative servicing, instant remote desktop rescue, automated local and cloud data backups, antivirus license renewals, and IT asset tracking.',
    iconName: 'ShieldCheck',
    features: [
      'Tailored Annual Maintenance Contracts (Comprehensive & Non-Comprehensive)',
      'Fast-response remote desktop support via secure remote tools',
      'Automated scheduled database & document backup systems',
      'Corporate antivirus centralized management and virus outbreak sweeps',
      'Software compliance, Windows licensing & IT audit consultation'
    ],
    turnaroundTime: 'Priority Service Response',
    serviceType: 'On-site & Remote',
    popularFor: 'Small and medium businesses, retail outlets, audit firms & clinics'
  }
];
