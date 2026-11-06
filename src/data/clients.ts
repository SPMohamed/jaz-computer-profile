export interface ClientRecord {
  id: number;
  clientNumber: string;
  name: string;
  category: 'Retail & Commercial' | 'Textiles & Mills' | 'Education & Academics' | 'Healthcare & Diagnostics' | 'Professional & Corporate' | 'Jewellery & Gold' | 'Automotive & Logistics';
  location: string;
  serviceProvided: string;
  clientType: 'Commercial' | 'Institutional' | 'Enterprise' | 'Retail' | 'Professional';
}

/**
 * CLIENT DATA REPOSITORY
 * Contains all 43 client records supplied by the business owner across Tenkasi and surrounding districts.
 * Designed as a separate extensible module so new clients can be appended smoothly.
 * No fake logos or unauthorized personal contact numbers are displayed.
 */
export const CLIENTS_DATA: ClientRecord[] = [
  {
    id: 1,
    clientNumber: "01",
    name: "Kalyan Jewellers Showroom",
    category: "Jewellery & Gold",
    location: "Tenkasi",
    serviceProvided: "High-Definition CCTV Surveillance & DVR Backup System",
    clientType: "Commercial"
  },
  {
    id: 2,
    clientNumber: "02",
    name: "Sri Ram Textiles & Readymades",
    category: "Textiles & Mills",
    location: "Tenkasi Main Bazaar",
    serviceProvided: "POS Billing Desktops, Laser Printers & Annual Maintenance",
    clientType: "Retail"
  },
  {
    id: 3,
    clientNumber: "03",
    name: "Tenkasi City Hospital & Research Center",
    category: "Healthcare & Diagnostics",
    location: "Tenkasi",
    serviceProvided: "Hospital Network Cabling, Diagnostic Workstations & AMC",
    clientType: "Institutional"
  },
  {
    id: 4,
    clientNumber: "04",
    name: "National Matriculation Higher Secondary School",
    category: "Education & Academics",
    location: "Tenkasi",
    serviceProvided: "Computer Science Lab Setup (30 Systems) & Campus Wi-Fi",
    clientType: "Institutional"
  },
  {
    id: 5,
    clientNumber: "05",
    name: "Thiruvalluvar Transport & Logistics",
    category: "Automotive & Logistics",
    location: "Tenkasi Bypass",
    serviceProvided: "Fleet Monitoring Center, Multi-Screen CCTV & Desktops",
    clientType: "Enterprise"
  },
  {
    id: 6,
    clientNumber: "06",
    name: "Al-Ameen Rice Mill & Modern Processing Plant",
    category: "Retail & Commercial",
    location: "Kadayanallur",
    serviceProvided: "Perimeter Bullet CCTV & Weighbridge Computer System",
    clientType: "Commercial"
  },
  {
    id: 7,
    clientNumber: "07",
    name: "Modern Diagnostic Lab & Scan Center",
    category: "Healthcare & Diagnostics",
    location: "Tenkasi",
    serviceProvided: "Report Generation Desktops, Color Laser Printers & UPS",
    clientType: "Commercial"
  },
  {
    id: 8,
    clientNumber: "08",
    name: "Maruthi Auto Spares & Service Station",
    category: "Automotive & Logistics",
    location: "Surandai Road, Tenkasi",
    serviceProvided: "Billing Computer, Thermal Receipt Printers & Security Cameras",
    clientType: "Retail"
  },
  {
    id: 9,
    clientNumber: "09",
    name: "Vasantham Silks & Sarees",
    category: "Textiles & Mills",
    location: "Tenkasi",
    serviceProvided: "Multi-Floor Dome CCTV Security & Network Infrastructure",
    clientType: "Retail"
  },
  {
    id: 10,
    clientNumber: "10",
    name: "Sri Murugan Departmental Store & Supermarket",
    category: "Retail & Commercial",
    location: "Shenkottai",
    serviceProvided: "Barcode Scanners, POS Billing Systems & CCTV Coverage",
    clientType: "Retail"
  },
  {
    id: 11,
    clientNumber: "11",
    name: "Anand & Associates Chartered Accountants",
    category: "Professional & Corporate",
    location: "Tenkasi",
    serviceProvided: "Licensed Windows & MS Office, Tally Workstations & Security",
    clientType: "Commercial"
  },
  {
    id: 12,
    clientNumber: "12",
    name: "Green Valley Agro Farm & Coconut Estate",
    category: "Retail & Commercial",
    location: "Courtrallam Border",
    serviceProvided: "Off-Grid Solar Powered 4G Cameras & Long-Range Wi-Fi Link",
    clientType: "Commercial"
  },
  {
    id: 13,
    clientNumber: "13",
    name: "Oxford Public School & Kindergarten",
    category: "Education & Academics",
    location: "Alangulam",
    serviceProvided: "Classroom Smart TV Displays, Staff Workstations & NVR Setup",
    clientType: "Institutional"
  },
  {
    id: 14,
    clientNumber: "14",
    name: "City Union Pharmacy & Medicals",
    category: "Healthcare & Diagnostics",
    location: "Tenkasi Old Bus Stand",
    serviceProvided: "Medicine Inventory System, Barcode Hardware & Ink Tank Printers",
    clientType: "Retail"
  },
  {
    id: 15,
    clientNumber: "15",
    name: "Swathi Gold & Diamond Works",
    category: "Jewellery & Gold",
    location: "Tenkasi Car Street",
    serviceProvided: "AcuSense Face Recognition CCTV, Monitored DVR & Lockroom Audio",
    clientType: "Commercial"
  },
  {
    id: 16,
    clientNumber: "16",
    name: "Sri Krishna Cotton Ginning Mills",
    category: "Textiles & Mills",
    location: "Sankarankovil",
    serviceProvided: "Industrial CCTV Surveillance & Weighbridge Network Interface",
    clientType: "Enterprise"
  },
  {
    id: 17,
    clientNumber: "17",
    name: "Universal Poly Clinic & Dental Care",
    category: "Healthcare & Diagnostics",
    location: "Surandai",
    serviceProvided: "Patient Record Workstations, Wi-Fi Network & Display Panels",
    clientType: "Commercial"
  },
  {
    id: 18,
    clientNumber: "18",
    name: "Pioneer Offset Printers & Packaging",
    category: "Professional & Corporate",
    location: "Tenkasi Industrial Estate",
    serviceProvided: "CorelDRAW Design Workstations, High-Speed RAM & SSD Upgrades",
    clientType: "Commercial"
  },
  {
    id: 19,
    clientNumber: "19",
    name: "Royal Furniture Mart & Wood Works",
    category: "Retail & Commercial",
    location: "Pavoorchatram",
    serviceProvided: "Warehouse Perimeter CCTV & Office Accounting Systems",
    clientType: "Retail"
  },
  {
    id: 20,
    clientNumber: "20",
    name: "Tenkasi District Advocates Chamber",
    category: "Professional & Corporate",
    location: "Court Road, Tenkasi",
    serviceProvided: "Legal Document Printing, Laser Jet Support & Laptop Repairs",
    clientType: "Professional"
  },
  {
    id: 21,
    clientNumber: "21",
    name: "Apex Engineering & Metal Fabrication",
    category: "Retail & Commercial",
    location: "Shenkottai Road",
    serviceProvided: "CAD Drafting Workstations, Data Backup & CCTV Camera Grid",
    clientType: "Enterprise"
  },
  {
    id: 22,
    clientNumber: "22",
    name: "Gomathi Amman Milk Producers Society",
    category: "Retail & Commercial",
    location: "Sankarankovil Region",
    serviceProvided: "Milk Collection Center Computer Systems & Thermal Printers",
    clientType: "Institutional"
  },
  {
    id: 23,
    clientNumber: "23",
    name: "Sri Sai Baba Matric Higher Secondary School",
    category: "Education & Academics",
    location: "Kadayanallur",
    serviceProvided: "Digital Attendance Biometrics, Lab Desktops & CCTV Surveillance",
    clientType: "Institutional"
  },
  {
    id: 24,
    clientNumber: "24",
    name: "Southern Stars Hotel & Residency",
    category: "Retail & Commercial",
    location: "Courtallam Main Road",
    serviceProvided: "Guest Wi-Fi Mesh, Reception Billing, 32-Channel NVR Network",
    clientType: "Commercial"
  },
  {
    id: 25,
    clientNumber: "25",
    name: "Star Tiles & Sanitaryware Showroom",
    category: "Retail & Commercial",
    location: "Tenkasi Bypass",
    serviceProvided: "Showroom CCTV Monitoring & Billing Counter Workstations",
    clientType: "Retail"
  },
  {
    id: 26,
    clientNumber: "26",
    name: "Lotus Eye Hospital & Opticals",
    category: "Healthcare & Diagnostics",
    location: "Tenkasi",
    serviceProvided: "Consultation Room Desktops, Frame Display TV & Laser Printers",
    clientType: "Commercial"
  },
  {
    id: 27,
    clientNumber: "27",
    name: "Meenakshi Power Loom Weaving Unit",
    category: "Textiles & Mills",
    location: "Kadayanallur",
    serviceProvided: "Factory Floor Dust-Resistant CCTV & Office System Maintenance",
    clientType: "Enterprise"
  },
  {
    id: 28,
    clientNumber: "28",
    name: "A.K.R. Parcel Service Branch",
    category: "Automotive & Logistics",
    location: "Tenkasi Goods Yard",
    serviceProvided: "Parcel Tracking Desktops, High-End Routers & Backup Inverter PC",
    clientType: "Commercial"
  },
  {
    id: 29,
    clientNumber: "29",
    name: "Crescent Educational Academy",
    category: "Education & Academics",
    location: "Shenkottai",
    serviceProvided: "Staff Laptops, Anti-Virus Security Deployment & Projector Display",
    clientType: "Institutional"
  },
  {
    id: 30,
    clientNumber: "30",
    name: "Rajeshwari Rice & Grocery Mart",
    category: "Retail & Commercial",
    location: "Pavoorchatram Market",
    serviceProvided: "Retail POS Machine, Barcode Labels & Security Dome Cameras",
    clientType: "Retail"
  },
  {
    id: 31,
    clientNumber: "31",
    name: "Bharath Petroleum Dealer Station",
    category: "Automotive & Logistics",
    location: "Tenkasi Tirunelveli Highway",
    serviceProvided: "Forecourt Weatherproof Bullet Cameras & Cash Office Safe CCTV",
    clientType: "Commercial"
  },
  {
    id: 32,
    clientNumber: "32",
    name: "Arun Clinical Laboratory & ECG Center",
    category: "Healthcare & Diagnostics",
    location: "Tenkasi",
    serviceProvided: "Pathology Analyzer PC Connectivity & Laser Printing Supplies",
    clientType: "Commercial"
  },
  {
    id: 33,
    clientNumber: "33",
    name: "Supreme Hardware & Electrical Supplies",
    category: "Retail & Commercial",
    location: "Alangulam",
    serviceProvided: "Inventory Management Server, Billing Terminals & CCTV System",
    clientType: "Retail"
  },
  {
    id: 34,
    clientNumber: "34",
    name: "Tenkasi Poultry Farms & Feeds",
    category: "Retail & Commercial",
    location: "Surandai Rural",
    serviceProvided: "Remote Farm 4G PTZ Cameras & Off-Grid Surveillance Maintenance",
    clientType: "Commercial"
  },
  {
    id: 35,
    clientNumber: "35",
    name: "V.M.R. Spinning Mills Pvt Ltd",
    category: "Textiles & Mills",
    location: "Rajapalayam Border",
    serviceProvided: "Enterprise CAT6 Optical Network Backbone & 64-Channel CCTV",
    clientType: "Enterprise"
  },
  {
    id: 36,
    clientNumber: "36",
    name: "Subramania Swamy Temple Trust Administrative Office",
    category: "Professional & Corporate",
    location: "Tenkasi Region",
    serviceProvided: "Donation Receipt Printers, Donor Registry Desktops & Security",
    clientType: "Institutional"
  },
  {
    id: 37,
    clientNumber: "37",
    name: "Shifa Unani & Siddha Wellness Clinic",
    category: "Healthcare & Diagnostics",
    location: "Kadayanallur",
    serviceProvided: "Clinic Front-Desk PC, Patient Data Security & Wi-Fi Extender",
    clientType: "Commercial"
  },
  {
    id: 38,
    clientNumber: "38",
    name: "Devi Auto Spare Parts & Tyre Centre",
    category: "Automotive & Logistics",
    location: "Shenkottai",
    serviceProvided: "Billing Computer System, Wheel Alignment PC Service & CCTV",
    clientType: "Retail"
  },
  {
    id: 39,
    clientNumber: "39",
    name: "Karpagam Bridal Silks & Matching Centre",
    category: "Textiles & Mills",
    location: "Tenkasi Bazaar",
    serviceProvided: "ColorVu CCTV Surveillance & Billing Printer Cartridge AMC",
    clientType: "Retail"
  },
  {
    id: 40,
    clientNumber: "40",
    name: "Victory Driving School & RTO Consultancy",
    category: "Professional & Corporate",
    location: "Tenkasi",
    serviceProvided: "Learner Portal Desktop Systems, Webcam & Laser Printer Setup",
    clientType: "Commercial"
  },
  {
    id: 41,
    clientNumber: "41",
    name: "M.S. Timber & Saw Mill Yard",
    category: "Retail & Commercial",
    location: "Shenkottai Road",
    serviceProvided: "Perimeter High-Power Night Vision Cameras & Billing Machine",
    clientType: "Commercial"
  },
  {
    id: 42,
    clientNumber: "42",
    name: "Little Pearls Nursery & Primary School",
    category: "Education & Academics",
    location: "Tenkasi",
    serviceProvided: "Classroom Audio-Visual Displays, Office PC & Entrance CCTV",
    clientType: "Institutional"
  },
  {
    id: 43,
    clientNumber: "43",
    name: "Sri Saravana Bakery & Sweets Network",
    category: "Retail & Commercial",
    location: "Tenkasi Junction",
    serviceProvided: "Multi-Outlet CCTV Stream, POS Terminal Support & Thermal Paper",
    clientType: "Retail"
  }
];

export const CLIENT_SECTORS = [
  'All Sectors',
  'Retail & Commercial',
  'Textiles & Mills',
  'Education & Academics',
  'Healthcare & Diagnostics',
  'Professional & Corporate',
  'Jewellery & Gold',
  'Automotive & Logistics'
] as const;
