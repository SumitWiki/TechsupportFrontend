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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <div className="text-4xl mb-3">🚨</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Wait! Still Having Issues?
        </h3>
        <p className="text-slate-500 mb-6">
          Get priority remote support. Most issues resolved within 30 minutes.
        </p>

        <a
          href={`tel:${PHONE_USA}`}
          className="block bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition text-lg"
        >
          📞 Call {PHONE_DISPLAY}
        </a>

        <Link
          href="/contact"
          className="block mt-3 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          🔐 Start Secure Session
        </Link>

        <button
          onClick={handleDismiss}
          className="mt-4 text-sm text-slate-400 hover:text-slate-600 transition"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
}
