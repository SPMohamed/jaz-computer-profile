export type ClientCategory =
  | 'All'
  | 'Local Vendor Support'
  | 'Retail & Commercial'
  | 'Textiles'
  | 'Healthcare'
  | 'Education'
  | 'Professional Services'
  | 'Banking'
  | 'Hospitality'
  | 'Automotive';

export interface ClientRecord {
  id: number;
  name: string;
  category: ClientCategory;
  location?: string;
}

/**
 * OFFICIAL VALUABLE CLIENTS
 * Verified customer list supplied by the owner of JAZ COMPUTER.
 * Exact spellings, locations, and categories preserved.
 * Total Named Records: 100 (Verified Directory).
 * Overall Business Trust: Trusted by 2,000+ Valued Clients.
 * No invented testimonials, endorsements, logos or services.
 */
export const CLIENTS_DATA: ClientRecord[] = [
  { id: 1, name: "VTSR SILKS – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 2, name: "Pothigai Silks – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 3, name: "Mydeen Timbers", category: "Retail & Commercial", location: "Shenkottai" },
  { id: 4, name: "Shameer Studios – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 5, name: "Welcome Colour Lab – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 6, name: "Art Chitra Creation – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 7, name: "Singapore Silks – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 8, name: "MM Gold – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 9, name: "Banu Arts – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 10, name: "Sai Ram Book Center – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 11, name: "Phonix Mobiles – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 12, name: "Nila Beauty Parlour", category: "Retail & Commercial" },
  { id: 13, name: "Sree Travels – Tenkasi", category: "Hospitality", location: "Tenkasi" },
  { id: 14, name: "My Little One – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 15, name: "GK Tours And Travels – Tenkasi", category: "Hospitality", location: "Tenkasi" },
  { id: 16, name: "Chennai Digital – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 17, name: "Vincy Fish Form", category: "Retail & Commercial" },
  { id: 18, name: "Tenkasi Govt. Hospital", category: "Local Vendor Support", location: "Tenkasi" },
  { id: 19, name: "Sasi Clinic – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 20, name: "Swasam ENT Clinic – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 21, name: "Prema Dental Clinic – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 22, name: "KP Hospital – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 23, name: "King Clinic – Vadakarai", category: "Healthcare", location: "Vadakarai" },
  { id: 24, name: "Tenkasi Sarvodhya Sangam", category: "Education", location: "Tenkasi" },
  { id: 25, name: "St. Micheale Hr. Sec. School – Tenkasi", category: "Education", location: "Tenkasi" },
  { id: 26, name: "RC Hr. Sec. School", category: "Education", location: "Vallam" },
  { id: 27, name: "Ibnu Umar (Rali) Islamic School – Tenkasi", category: "Education", location: "Tenkasi" },
  { id: 28, name: "Homeway Properties – Shenkottai", category: "Professional Services", location: "Shenkottai" },
  { id: 29, name: "Vincy DTP – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 30, name: "Saitharan Associates – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 31, name: "SPR Law Chambers – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 32, name: "Haroon ADV Law Chamber – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 33, name: "Dinesh ADV Law Chamber – Kadayam, Tenkasi", category: "Professional Services", location: "Kadayam, Tenkasi" },
  { id: 34, name: "IDBI Bank – Tenkasi Branch", category: "Local Vendor Support", location: "Tenkasi Branch" },
  { id: 35, name: "Vanavil E Sevai – KK Valasai, Tenkasi", category: "Professional Services", location: "KK Valasai, Tenkasi" },
  { id: 36, name: "K.info Soft – Ilanji", category: "Professional Services", location: "Ilanji" },
  { id: 37, name: "Five Falls Resort – Five Falls", category: "Hospitality", location: "Five Falls" },
  { id: 38, name: "Pothigai Palace – Courtallam", category: "Hospitality", location: "Courtallam" },
  { id: 39, name: "Mount Zion Holidays – Courtallam", category: "Hospitality", location: "Courtallam" },
  { id: 40, name: "Mahadev Iyer Petrol Pump – Yanaipaalam, Tenkasi", category: "Automotive", location: "Yanaipaalam, Tenkasi" },
  { id: 41, name: "Jaibhakya Jewelry – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 42, name: "Run Bug – Idaikal.", category: "Retail & Commercial", location: "Idaikal" },
  { id: 43, name: "Loyal Builders – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 44, name: "Shiva Digital Studio – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 45, name: "JRS Digital Studio – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 46, name: "Shameer LED – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 47, name: "Design Mantic – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 48, name: "SM Cable – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 49, name: "Shentamil RealEstate – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 50, name: "Haaris Builders – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 51, name: "Krish Dairy Farm – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 52, name: "Velasi Cottons – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 53, name: "Makx Outfit – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 54, name: "Fashion Flex – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 55, name: "AA Diagnostics & Lab – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 56, name: "Nima Foundation – Tenkasi", category: "Education", location: "Tenkasi" },
  { id: 57, name: "GMT Jewellery – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 58, name: "Zoora Tech – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 59, name: "Nutrifys – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 60, name: "SRS & SBM Transport – Tenkasi", category: "Automotive", location: "Tenkasi" },
  { id: 61, name: "Royal Bombay Tailor – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 62, name: "Some Govt Hr. Sec. Schools", category: "Local Vendor Support", location: "Tenkasi" },
  { id: 63, name: "Achenpudur Govt PHC", category: "Local Vendor Support", location: "Achenpudur, Tenkasi" },
  { id: 64, name: "Ilanji Govt PHC", category: "Local Vendor Support", location: "Ilanji, Tenkasi" },
  { id: 65, name: "Melagaram Govt PHC", category: "Local Vendor Support", location: "Melagaram, Tenkasi" },
  { id: 66, name: "ABFL – Tenkasi Branch", category: "Local Vendor Support", location: "Tenkasi Branch" },
  { id: 67, name: "Mathaji Fashion – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 68, name: "RajaMouli Clinic – Tenkasi", category: "Healthcare", location: "Tenkasi" },
  { id: 69, name: "Aroma Kitchen – Tenkasi", category: "Hospitality", location: "Tenkasi" },
  { id: 70, name: "Cinimatic Studio – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 71, name: "Yobz Digital Advertiser – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 72, name: "Body Soul Mind Care Siddha Clinic", category: "Healthcare" },
  { id: 73, name: "EPP ADV Law Chambers – Alangulam", category: "Professional Services", location: "Alangulam" },
  { id: 74, name: "Orange Mobiles – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 75, name: "Focus Studio – Shenkottai", category: "Retail & Commercial", location: "Shenkottai" },
  { id: 76, name: "AR Call Taxi – Tenkasi", category: "Automotive", location: "Tenkasi" },
  { id: 77, name: "Apple Mobiles – PottalPudur", category: "Retail & Commercial", location: "PottalPudur" },
  { id: 78, name: "Nellai Construction – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 79, name: "Sushma Studio – Achenpudur", category: "Retail & Commercial", location: "Achenpudur" },
  { id: 80, name: "Dzine Boutique – Shenkottai", category: "Textiles", location: "Shenkottai" },
  { id: 81, name: "Ariya Studio – Vallam", category: "Retail & Commercial", location: "Vallam" },
  { id: 82, name: "Thangam Tailoring – Shenkottai", category: "Textiles", location: "Shenkottai" },
  { id: 83, name: "Malika Papers – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 84, name: "JK Academy – Tenkasi", category: "Education", location: "Tenkasi" },
  { id: 85, name: "CSC E-sevai – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 86, name: "VJSR Chicken Farm – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 87, name: "MS Gold – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 88, name: "Legend Mens Wear – Tenkasi", category: "Textiles", location: "Tenkasi" },
  { id: 89, name: "Mugi Shutter View – Tenkasi", category: "Retail & Commercial", location: "Tenkasi" },
  { id: 90, name: "Tevel Technologies – Chennai", category: "Professional Services", location: "Chennai" },
  { id: 91, name: "A2Z E-Sevai – Melagaram, Tenkasi", category: "Professional Services", location: "Melagaram, Tenkasi" },
  { id: 92, name: "Kumar Lodge – Courtallam", category: "Hospitality", location: "Courtallam" },
  { id: 93, name: "Taamsi Technologies – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 94, name: "LuLu Online Services – Kadayanallur", category: "Professional Services", location: "Kadayanallur" },
  { id: 95, name: "MMM Construction – Tenkasi", category: "Professional Services", location: "Tenkasi" },
  { id: 96, name: "Athiba Jewellery", category: "Retail & Commercial" },
  { id: 97, name: "Hamna Jewellery", category: "Retail & Commercial" },
  { id: 98, name: "Salma Pharmacy", category: "Healthcare" },
  { id: 99, name: "Govt ITI – Tenkasi", category: "Local Vendor Support", location: "Tenkasi" },
  { id: 100, name: "Govt ITI – Kadayanallur", category: "Local Vendor Support", location: "Kadayanallur" }
];

export const CLIENT_CATEGORIES: ClientCategory[] = [
  'All',
  'Local Vendor Support',
  'Retail & Commercial',
  'Textiles',
  'Healthcare',
  'Education',
  'Professional Services',
  'Banking',
  'Hospitality',
  'Automotive'
];

/**
 * OFFICIAL SCROLLING / MARQUEE CLIENTS
 * Strictly displays the 15 approved client names in exact prescribed order.
 */
export const SCROLLING_CLIENTS: string[] = [
  "VTSR Silks",
  "SPR Law Chambers",
  "My Little One",
  "Prema Dental Clinic",
  "Swasam ENT Clinic",
  "Pothigai Silks",
  "KP Hospital",
  "Loyal Builders",
  "SM Cable",
  "Five Falls Resort",
  "Haaris Builders",
  "Tevel Technologies",
  "Body Soul Mind Care Siddha Clinic",
  "Mydeen Timbers",
  "Art Chitra Creation"
];
