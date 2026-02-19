"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useRef, useEffect } from "react";

const OPTIONS = [
  { value: "light", label: "Light", icon: "☀️" },
  { value: "dark",  label: "Dark",  icon: "🌙" },
  { value: "auto",  label: "Auto",  icon: "💻" },
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
        <span>{current.icon}</span>
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
              <span>{opt.icon}</span>
              <span>{opt.label}</span>
              {mode === opt.value && <span className="ml-auto text-blue-500">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
