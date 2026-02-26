"use client";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY } from "../lib/constants";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex md:hidden z-50 shadow-2xl border-t border-slate-200">
      <a
        href={`tel:${PHONE_USA}`}
        className="w-1/2 bg-red-600 text-white text-center py-3.5 font-bold text-sm flex items-center justify-center gap-2 active:bg-red-700 transition"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="w-1/2 bg-blue-700 text-white text-center py-3.5 font-bold text-sm flex items-center justify-center gap-2 active:bg-blue-800 transition"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        Get Support
      </Link>
    </div>
  );
}
