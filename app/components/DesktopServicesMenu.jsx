"use client";

import { useState, useRef, useEffect } from "react";

export default function DesktopServicesMenu() {
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

  const services = [
    { href: "/internet-support-usa",    icon: "🌐", label: "Internet Support USA" },
    { href: "/printer-support-usa",     icon: "🖨️", label: "Printer Support USA" },
    { href: "/wifi-router-support-usa", icon: "📶", label: "Wi-Fi / Router Support USA" },
    { href: "/smart-tv-support-usa",    icon: "📺", label: "Smart TV Support USA" },
  ];

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        Services
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-slate-800 shadow-xl rounded-xl py-2 z-50 border border-slate-200 dark:border-slate-700 animate-fadeIn">
          {services.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-slate-800 dark:text-white font-medium hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-300 transition"
            >
              <span className="text-lg">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
