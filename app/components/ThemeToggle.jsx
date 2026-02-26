"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useRef, useEffect } from "react";

const OPTIONS = [
  { value: "light", label: "Light", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
  { value: "dark",  label: "Dark",  icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" },
  { value: "auto",  label: "Auto",  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = OPTIONS.find((o) => o.value === mode) || OPTIONS[2];

  return (
    <div ref={ref} className="relative" title="Switch theme">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle theme"
        className="cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
          bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200
          hover:bg-slate-200 dark:hover:bg-slate-600 transition border border-slate-200 dark:border-slate-600"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={current.icon} /></svg>
        <span className="hidden sm:inline">{current.label}</span>
        <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-xl z-50 overflow-hidden animate-fadeIn">
          {OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setMode(opt.value); setOpen(false); }}
              className={`cursor-pointer w-full flex items-center gap-2 px-4 py-2.5 text-sm transition
                ${mode === opt.value
                  ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={opt.icon} /></svg>
              <span>{opt.label}</span>
              {mode === opt.value && <svg className="w-4 h-4 ml-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
