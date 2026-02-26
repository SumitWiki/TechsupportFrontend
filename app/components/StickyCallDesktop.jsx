"use client";
import { PHONE_USA, PHONE_DISPLAY } from "../lib/constants";

/**
 * Desktop: Fixed phone number button on top-right that stays visible on scroll.
 * Only shows on desktop (md+). Mobile uses MobileStickyCTA instead.
 */
export default function StickyCallDesktop() {
  return (
    <a
      href={`tel:${PHONE_USA}`}
      className="
        hidden md:flex fixed top-28 right-6 z-40
        items-center gap-2
        bg-red-600 text-white px-5 py-3 rounded-full
        font-bold text-sm shadow-lg
        hover:bg-red-700 hover:shadow-xl
        transition-all duration-200
      "
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      {PHONE_DISPLAY}
    </a>
  );
}
