"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY } from "../lib/constants";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !dismissed) {
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-slate-200 dark:border-slate-700">
        {/* Close button */}
        <button onClick={handleDismiss} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Still Having Issues?
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
          Get priority remote support from a certified technician. Most issues resolved within 30 minutes.
        </p>

        <a
          href={`tel:${PHONE_USA}`}
          className="flex items-center justify-center gap-2 bg-red-600 text-white py-3.5 rounded-xl font-bold hover:bg-red-700 transition text-lg shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          Call {PHONE_DISPLAY}
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 mt-3 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Start Secure Session
        </Link>

        <button
          onClick={handleDismiss}
          className="mt-5 text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition font-medium"
        >
          No thanks, continue browsing
        </button>
      </div>
    </div>
  );
}
