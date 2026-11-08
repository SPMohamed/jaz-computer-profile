import React from 'react';
import { COMPANY_INFO } from '../../data/company';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] via-emerald-500 to-neon-cyan text-slate-950 font-bold shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(217,0,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Chat with JAZ COMPUTER on WhatsApp"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.676-2.086-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.237-.245-.588-.493-.509-.678-.518-.176-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.97.57 3.81 1.56 5.37L2 22l4.8-1.54A9.97 9.97 0 0 0 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2z"/>
        </svg>
        <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline font-black">
          WhatsApp Direct
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
