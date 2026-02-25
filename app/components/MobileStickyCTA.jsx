"use client";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY } from "../lib/constants";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex md:hidden z-50 shadow-lg">
      <a
        href={`tel:${PHONE_USA}`}
        className="w-1/2 bg-red-600 text-white text-center py-4 font-semibold text-sm flex flex-col items-center leading-tight"
      >
        <span className="text-lg">📞</span>
        <span>Call {PHONE_DISPLAY}</span>
      </a>
      <Link
        href="/contact"
        className="w-1/2 bg-blue-600 text-white text-center py-4 font-semibold text-sm flex flex-col items-center leading-tight"
      >
        <span className="text-lg">🔐</span>
        <span>Secure Session</span>
      </Link>
    </div>
  );
}
