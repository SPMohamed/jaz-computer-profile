import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { COMPANY_INFO } from '../data/company';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  Shield,
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Hardware Sales & Pricing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*New Contact Message - JAZ COMPUTER*\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Topic: ${category}\n` +
      `• Details: ${message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="Contact JAZ COMPUTER"
        subtitle="Visit our store at West Car Street, Tenkasi or get immediate technical consultation via direct phone call or WhatsApp."
        label="Store & Technical Desk"
        currentPage="contact"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Contact Info Cyber Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 space-y-3 group shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white group-hover:text-neon-cyan transition-colors">
              Store & Service Desk
            </h3>
            <p className="text-xs text-neon-grey leading-relaxed font-light">
              {COMPANY_INFO.address}, Tenkasi - {COMPANY_INFO.postalCode}, {COMPANY_INFO.state}
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neon-cyan hover:underline"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Phone Line */}
          <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 space-y-3 group shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white group-hover:text-neon-magenta transition-colors">
              Direct Phone Line
            </h3>
            <p className="text-xs text-neon-grey leading-relaxed font-light">
              Direct technical and sales assistance during store business hours.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold bg-white text-black hover:bg-neon-magenta hover:text-white transition-all shadow-[0_0_15px_rgba(217,0,255,0.2)]"
              >
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 space-y-3 group shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
              WhatsApp Support
            </h3>
            <p className="text-xs text-neon-grey leading-relaxed font-light">
              Send fault photos, hardware specs, or site location pins for rapid response.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <span>Chat: {COMPANY_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Store Hours */}
          <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-amber-400/50 transition-all duration-300 space-y-3 group shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-white group-hover:text-amber-400 transition-colors">
              Store Timings
            </h3>
            <div className="text-xs text-neon-grey space-y-1 font-mono font-light">
              <p><strong>{COMPANY_INFO.workingHours.weekdays}</strong></p>
              <p className="text-amber-400/80">{COMPANY_INFO.workingHours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Contact Form & Google Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Cyber Terminal Form (Left) */}
          <div className="lg:col-span-6 bg-[#160826]/90 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neon-magenta font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Command Terminal</span>
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                Transmit an Inquiry
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-neon-cyan/40 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 border border-neon-cyan text-neon-cyan mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-white">
                  Transmission Dispatched
                </h4>
                <p className="text-xs text-neon-grey font-light">
                  Your inquiry details have been forwarded to our Tenkasi WhatsApp business desk. Our team will review and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-grey mb-1.5 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#10051F] text-white placeholder-neon-grey/40 text-xs focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-grey mb-1.5 font-bold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#10051F] text-white placeholder-neon-grey/40 text-xs focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-grey mb-1.5 font-bold">
                    Inquiry Requirement
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#10051F] text-white text-xs focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all font-mono"
                  >
                    <option value="Hardware Sales & Custom PC">Hardware Sales & Custom PC</option>
                    <option value="Desktop or Laptop Service">Desktop or Laptop Service</option>
                    <option value="CCTV Installation & Site Survey">CCTV Installation & Site Survey</option>
                    <option value="CCTV Equipment & Multi-Camera Setup">CCTV Equipment & Multi-Camera Setup</option>
                    <option value="Printer / LED TV Diagnostics">Printer / LED TV Diagnostics</option>
                    <option value="Structured Networking / IT Support">Structured Networking / IT Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-grey mb-1.5 font-bold">
                    Project Details / Symptoms
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe configuration specs, camera count, printer model or required service..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#10051F] text-white placeholder-neon-grey/40 text-xs focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-glow-combo"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit to WhatsApp Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Google Map Visual (Right) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 h-full min-h-[380px] bg-[#10051F] shadow-2xl group">
              <iframe
                title="JAZ COMPUTER Tenkasi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.874052028886!2d77.3005391!3d8.9592237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c669149021%3A0xeae06cce7d57367c!2sJaz%20Computer!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[380px] border-0 filter grayscale-[0.8] contrast-[1.2] invert-[0.9] opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-4 left-4 bg-[#10051F]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-neon-cyan/40 text-xs font-mono text-neon-cyan flex items-center gap-2 shadow-glow-cyan">
                <MapPin className="w-4 h-4 text-neon-magenta" />
                <span>11/9, West Car Street, Tenkasi</span>
              </div>
            </div>

            {/* Quick Call & Walk-in Highlight Card */}
            <div className="p-6 rounded-3xl bg-[#160826]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold font-display text-white">
                  Direct Store Front & Diagnostic Benches
                </h4>
                <p className="text-xs text-neon-grey font-light">
                  Walk-ins welcome for quick diagnostic checks, display testing, and component pick-up.
                </p>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-white text-black hover:bg-neon-cyan hover:text-black transition-colors flex items-center gap-2 flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-neon-magenta" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
