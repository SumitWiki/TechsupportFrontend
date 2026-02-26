"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function DesktopServicesMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const services = [
    { href: "/internet-support-usa",    label: "Internet Support", desc: "Fix broadband, DNS & outages",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>,
      color: "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400" },
    { href: "/printer-support-usa",     label: "Printer Support", desc: "Offline, driver & Wi-Fi printing",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" /></svg>,
      color: "text-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-400" },
    { href: "/wifi-router-support-usa", label: "Wi-Fi / Router Support", desc: "Signal, dead zones & security",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" /></svg>,
      color: "text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400" },
    { href: "/smart-tv-support-usa",    label: "Smart TV Support", desc: "Streaming, apps & connectivity",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      color: "text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400" },
  ];

  return (
    <div ref={menuRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-1 py-1 hover:text-blue-600 dark:hover:text-blue-400 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all"
      >
        Services
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-80 bg-white dark:bg-slate-800 shadow-2xl rounded-xl py-2 z-50 border border-slate-200 dark:border-slate-700 animate-fadeIn">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition group"
            >
              <span className={`p-2 rounded-lg ${s.color} flex-shrink-0`}>{s.icon}</span>
              <div>
                <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{s.label}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
