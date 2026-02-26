"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  // On decline: store preference, disable non-essential cookies
  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 md:bottom-0 mb-[56px] md:mb-0 w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white px-5 py-4 z-50 border-t border-slate-200 dark:border-slate-700 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
          We use cookies to improve your experience and analyze site traffic.
          By clicking <strong className="text-slate-700 dark:text-slate-200">Accept</strong>, you consent to our use of cookies.{" "}
          <Link href="/cookie-policy" className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            Cookie Policy
          </Link>
          {" "}&middot;{" "}
          <Link href="/privacy-policy" className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="cursor-pointer border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-5 py-2 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
