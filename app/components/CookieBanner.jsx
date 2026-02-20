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
    <div className="fixed bottom-0 md:bottom-0 mb-[72px] md:mb-0 w-full bg-slate-900 text-white p-5 z-50 border-t border-slate-700 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-slate-300 max-w-2xl">
          We use cookies to improve your experience and analyse site traffic.
          By clicking <strong>Accept</strong>, you consent to our use of
          cookies.{" "}
          <Link href="/cookie-policy" className="underline text-blue-400 hover:text-blue-300">
            Cookie Policy
          </Link>
          {" "}|{" "}
          <Link href="/privacy-policy" className="underline text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="cursor-pointer border border-slate-400 text-slate-300 px-5 py-2 rounded-lg text-sm hover:bg-slate-700 transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="cursor-pointer bg-blue-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
