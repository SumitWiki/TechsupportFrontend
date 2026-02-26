"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY } from "../lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={menuRef} className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 z-40" onClick={close} />
          {/* Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl z-50 animate-slideInRight overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>Menu</span>
                <button onClick={close} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="space-y-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "Internet Support", href: "/internet-support-usa" },
                  { label: "Printer Support", href: "/printer-support-usa" },
                  { label: "Wi-Fi / Router Support", href: "/wifi-router-support-usa" },
                  { label: "Smart TV Support", href: "/smart-tv-support-usa" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                  { label: "Reviews", href: "/#reviews" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 space-y-3">
                <a
                  href={`tel:${PHONE_USA}`}
                  className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact"
                  onClick={close}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition text-sm"
                >
                  Start Secure Session
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

