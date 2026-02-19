"use client";

import { useState, useEffect, useRef } from "react";
import { PHONE_USA, PHONE_DISPLAY } from "../lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => setOpen(false);

  return (
    <div ref={menuRef} className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="text-2xl p-2 rounded-lg hover:bg-slate-100 transition"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-2xl w-72 p-5 space-y-1 font-medium text-slate-700 z-50 border border-slate-100">
          {[
            { label: "Home", href: "/" },
            { label: "🌐 Internet Support", href: "/internet-support-usa" },
            { label: "🖨️ Printer Support", href: "/printer-support-usa" },
            { label: "📶 Wi-Fi Support", href: "/wifi-router-support-usa" },
            { label: "📺 Smart TV Support", href: "/smart-tv-support-usa" },
            { label: "FAQ", href: "/faq" },
            { label: "Blog", href: "/blog/how-to-fix-internet-not-working" },
            { label: "Reviews", href: "/#reviews" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-100">
            <a
              href={`tel:${PHONE_USA}`}
              className="block w-full bg-red-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
            <a
              href="/contact"
              className="block w-full mt-2 bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              🔐 Secure Session
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

