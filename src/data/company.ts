export interface CompanyInfo {
  name: string;
  tagline: string;
  location: string;
  address: string;
  postalCode: string;
  state: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappLink: string;
  email: string;
  workingHours: {
    weekdays: string;
    sunday: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  distributorshipBadge: string;
  stats: {
    yearsExperience: string;
    satisfiedClients: string;
    camerasInstalled: string;
    systemsServiced: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: "JAZ COMPUTER",
  tagline: "Technology, Built Around You.",
  location: "Tenkasi, Tamil Nadu, India",
  address: "11/9, West Car Street",
  postalCode: "627811",
  state: "Tamil Nadu",
  country: "India",
  phone: "+919894668866",
  phoneDisplay: "+91 98946 68866",
  whatsapp: "917397622044",
  whatsappDisplay: "+91 73976 22044",
  whatsappLink: "https://wa.me/917397622044?text=Hello%20JAZ%20COMPUTER%2C%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services.",
  email: "jazcomputershop@gmail.com",
  workingHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 9:00 PM",
    sunday: "Sunday: Emergency IT & CCTV Support on Request",
  },
  googleMapsUrl: "https://maps.app.goo.gl/372rR3EZLviS37kA8",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.274020973418!2d77.31057!3d8.95924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429bfb677a83d%3A0xc3ce17112ea50630!2sWest%20Car%20St%2C%20Tenkasi%2C%20Tamil%20Nadu%20627811!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  distributorshipBadge: "Hikvision Authorised Sub-Regional Distributor",
  stats: {
    yearsExperience: "12+",
    satisfiedClients: "4000+",
    camerasInstalled: "2500+",
    systemsServiced: "8500+",
  }
};
