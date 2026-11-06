import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { COMPANY_INFO } from '../data/company';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState('CCTV Installation & Site Survey');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*New Contact Enquiry - JAZ COMPUTER Website*\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email || 'Not provided'}\n` +
      `• Category: ${serviceCategory}\n` +
      `• Requirement: ${message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  const FAQS = [
    {
      q: 'Do you provide free on-site CCTV inspection in Tenkasi?',
      a: 'Yes, our certified surveillance technicians conduct on-site inspections for homes, commercial shops, textile mills, schools, and agricultural estates to determine ideal camera angles, lens focal lengths, and cabling paths before quoting.'
    },
    {
      q: 'Are the desktop components and software licenses 100% genuine?',
      a: 'Absolutely. We source genuine branded parts from authorized national distributors. All Microsoft Windows, Office, and Antivirus (Quick Heal, McAfee, eScan, VibraNium) products come with authentic activation licenses and manufacturer warranties.'
    },
    {
      q: 'How fast can you repair a laptop motherboard or screen?',
      a: 'Common screen and keyboard replacements are typically completed within 2 to 4 hours. Delicate chip-level micro-soldering, liquid spill recovery, or BGA rework typically takes 24 to 48 hours for thorough diagnostics and burn-in stress testing.'
    },
    {
      q: 'Do you offer Annual Maintenance Contracts (AMC) for businesses and institutions?',
      a: 'Yes. We manage corporate AMCs covering regular monthly hardware checkups, printer maintenance, automated data backups, network troubleshooting, and priority emergency response for offices, accounting firms, and clinics in Tenkasi.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="Contact JAZ COMPUTER"
        subtitle="Visit our store on West Car Street, Tenkasi or get immediate technical assistance via phone call and WhatsApp."
        tamilSubtitle="எங்களைத் தொடர்பு கொள்ள · நேரடி அழைப்பு, வாட்ஸ்அப் அல்லது கடைக்கு வருகை தாருங்கள்."
        badge="Tenkasi Store & Lab"
        currentPage="contact"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('Direct Contact Page Form')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address Card */}
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Store & Service Lab
            </h3>
            <p className="text-xs text-slate-600 dark:text-brand-silver leading-relaxed">
              <strong>JAZ COMPUTER</strong><br />
              {COMPANY_INFO.address}<br />
              Tenkasi - {COMPANY_INFO.postalCode}<br />
              {COMPANY_INFO.state}, India
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-hover"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone Call Card */}
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-brand-blue flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Phone Consultation
            </h3>
            <p className="text-xs text-slate-600 dark:text-brand-silver leading-relaxed">
              Speak directly with our senior hardware technician for service status, pricing, or emergency support.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm"
              >
                <Phone className="w-3 h-3" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              WhatsApp Support
            </h3>
            <p className="text-xs text-slate-600 dark:text-brand-silver leading-relaxed">
              Send photos of faulty screens, error messages, or camera locations for an instant diagnostic estimate.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm"
              >
                <MessageSquare className="w-3 h-3" />
                <span>Chat: {COMPANY_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Working Hours
            </h3>
            <div className="text-xs text-slate-600 dark:text-brand-silver space-y-1">
              <p><strong>Mon – Sat:</strong> 9:30 AM – 9:00 PM</p>
              <p><strong>Sunday:</strong> On-Call IT & CCTV Emergency Support</p>
            </div>
            <div className="pt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open for Walk-In Inquiries
            </div>
          </div>
        </div>

        {/* Contact Form & Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Enquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-brand-navy-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Quick Enquiry & Service Ticket
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Submit your inquiry and we will respond immediately during standard store hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 dark:bg-brand-navy rounded-2xl border border-emerald-200 dark:border-emerald-900/50">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Enquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-brand-silver">
                  Your message has been formatted and directed to our WhatsApp line. Our technical team in Tenkasi will review your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-brand-blue border border-brand-blue/30"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98946 68866"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. customer@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="CCTV Installation & Site Survey">CCTV Installation & Site Survey</option>
                      <option value="Hikvision Sub-Regional Distributor Supply">Hikvision Distributor Supply</option>
                      <option value="Laptop Chip-Level Repair">Laptop Chip-Level Repair</option>
                      <option value="Desktop Computer Sales / Custom Build">Desktop Computer Sales / Custom Build</option>
                      <option value="Printer Service & Cartridges">Printer Service & Cartridges</option>
                      <option value="Smart LED TV Service">Smart LED TV Service</option>
                      <option value="Licensed Software / Antivirus">Licensed Software / Antivirus</option>
                      <option value="Corporate IT AMC & Networking">Corporate IT AMC & Networking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                    Describe Your Requirement or Issue *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your hardware model, fault symptoms, number of CCTV cameras required, or location in Tenkasi..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-500">
                    Dispatched directly to WhatsApp support
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-all shadow-glow-blue"
                  >
                    <span>Submit & Open WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Google Maps & Landmark Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-brand-navy-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    Verified Google Maps Location
                  </span>
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                    Find Us on West Car Street
                  </h3>
                </div>

                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-800">
                <iframe
                  title="JAZ COMPUTER Tenkasi Interactive Map"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 pt-1">
                <p>
                  <strong>Landmark:</strong> Situated right on West Car Street in Tenkasi, easily accessible from the Tenkasi Old Bus Stand and Railway Junction.
                </p>
                <p>
                  <strong>Parking:</strong> Two-wheeler and customer vehicle parking accessible along West Car Street.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-slate-100 dark:bg-brand-navy rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-brand-navy-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
              >
                <h4 className="text-sm sm:text-base font-bold font-display text-slate-900 dark:text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
