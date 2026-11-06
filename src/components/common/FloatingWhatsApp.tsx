import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/company';
import { MessageSquare, X, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Pop-up Prompt Balloon */}
      {showTooltip && (
        <div className="bg-white dark:bg-brand-navy-card text-slate-800 dark:text-white p-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/80 max-w-xs text-xs space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between font-semibold border-b border-slate-100 dark:border-slate-800 pb-1.5">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              JAZ Tech Support Online
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 dark:text-brand-silver leading-relaxed">
            Need urgent PC repair, CCTV quotation, or product availability in Tenkasi? Chat directly on WhatsApp!
          </p>
          <div className="flex items-center justify-between pt-1">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue hover:underline"
            >
              <PhoneCall className="w-3 h-3" />
              Call Instead
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1 rounded-lg"
            >
              Chat Now
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          aria-label="Chat with JAZ COMPUTER on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
          
          <svg
            className="w-7 h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.676-2.086-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.237-.245-.588-.493-.509-.678-.518-.176-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.97.57 3.81 1.56 5.37L2 22l4.8-1.54A9.97 9.97 0 0 0 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2z"/>
          </svg>
        </a>

        {/* Small badge count */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-brand-navy shadow-sm">
          1
        </span>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
