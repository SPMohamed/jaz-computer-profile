import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/company';
import { X, Send, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = 'General Product & Service Enquiry',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState('');
  const [preferredMethod, setPreferredMethod] = useState<'whatsapp' | 'call'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  // Sync if defaultSubject changes while open
  React.useEffect(() => {
    if (defaultSubject) setSubject(defaultSubject);
    setSubmitted(false);
  }, [defaultSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preferredMethod === 'whatsapp') {
      const waText = encodeURIComponent(
        `*New Enquiry - JAZ COMPUTER Website*\n` +
        `• Name: ${name || 'Prospective Customer'}\n` +
        `• Phone: ${phone || 'Not provided'}\n` +
        `• Regarding: ${subject}\n` +
        `• Requirements: ${message || 'Please share pricing, availability, or setup details.'}`
      );
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waText}`, '_blank');
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-brand-navy-card rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light text-white p-5 flex items-center justify-between border-b border-slate-700/60">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-brand-blue font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Business Enquiry</span>
            </div>
            <h3 className="text-lg font-bold font-display mt-0.5">
              Request a Quote or Service Call
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white font-display">
                Enquiry Transmitted!
              </h4>
              <p className="text-sm text-slate-600 dark:text-brand-silver max-w-sm mx-auto">
                Thank you for contacting JAZ COMPUTER. If you launched WhatsApp, our technician will reply promptly. You can also reach our direct phone line.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm"
                >
                  Call Now: {COMPANY_INFO.phoneDisplay}
                </a>
                <button
                  onClick={onClose}
                  type="button"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product / Service Subject */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                  Enquiry Item / Subject
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy-dark text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="e.g. Hikvision CCTV 8-Channel Setup / Custom Assembled PC"
                />
              </div>

              {/* Name & Phone in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy-dark text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="e.g. Ramesh / TechCorp"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy-dark text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="e.g. 98765 43210"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1">
                  Specific Requirements / Location in Tenkasi
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy-dark text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                  placeholder="Tell us about the number of cameras, laptop fault, desktop specs, or site address..."
                />
              </div>

              {/* Preferred Contact Mode */}
              <div className="pt-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-brand-silver mb-1.5">
                  Send via
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredMethod('whatsapp')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      preferredMethod === 'whatsapp'
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-silver border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredMethod('call')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      preferredMethod === 'call'
                        ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-silver border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500">
                  Instant response during working hours (9:30 AM – 9:00 PM)
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-glow-blue transition-all"
                >
                  <span>Transmit Enquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickEnquiryModal;
