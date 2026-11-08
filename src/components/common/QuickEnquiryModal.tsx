import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/company';
import { X, Send, CheckCircle2, Zap } from 'lucide-react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = 'General Product / Service Enquiry',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (defaultSubject) setSubject(defaultSubject);
    setSubmitted(false);
  }, [defaultSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*New Enquiry - JAZ COMPUTER Website*\n` +
      `• Name: ${name || 'Customer'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• Regarding: ${subject}\n` +
      `• Requirements: ${message || 'Please share specifications and consultation.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#140622] rounded-3xl shadow-glow-combo border border-neon-magenta/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-neon-magenta/20 bg-gradient-to-r from-neon-purple to-neon-deep">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neon-cyan block">
              // Direct Terminal
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-0.5">
              Request Hardware / Service Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neon-grey hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-neon-cyan/10 text-neon-cyan flex items-center justify-center mx-auto border border-neon-cyan/40 shadow-glow-cyan">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold font-display text-white">
                Transmission Initiated
              </h4>
              <p className="text-xs text-neon-grey max-w-sm mx-auto">
                Thank you for contacting JAZ COMPUTER. Your inquiry is formatted for instant WhatsApp dispatch to our Tenkasi technical desk.
              </p>
              <button
                onClick={onClose}
                type="button"
                className="px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-magenta to-[#9A00E6] shadow-glow-magenta"
              >
                Close Terminal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-cyan mb-1 font-bold">
                  Target Product / Service
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neon-magenta/30 bg-[#0E031A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-cyan mb-1 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neon-magenta/30 bg-[#0E031A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent font-sans"
                    placeholder="e.g. Ramesh"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-cyan mb-1 font-bold">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neon-magenta/30 bg-[#0E031A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent font-sans"
                    placeholder="e.g. 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neon-cyan mb-1 font-bold">
                  Details / Location in Tenkasi
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neon-magenta/30 bg-[#0E031A] text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent resize-none font-sans"
                  placeholder="Specify system specs, number of cameras, or hardware requirements..."
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neon-grey/70">
                  Transmits directly via WhatsApp
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-magenta to-[#9A00E6] hover:from-[#E619FF] hover:to-neon-cyan transition-all duration-300 shadow-glow-magenta"
                >
                  <span>Submit Inquiry</span>
                  <Zap className="w-3.5 h-3.5 text-neon-cyan" />
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
