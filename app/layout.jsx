import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DesktopServicesMenu from "./components/DesktopServicesMenu";
import MobileMenu from "./components/MobileMenu";
import CookieBanner from "./components/CookieBanner";
import ExitIntentPopup from "./components/ExitIntentPopup";
import MobileStickyCTA from "./components/MobileStickyCTA";
import StickyCallDesktop from "./components/StickyCallDesktop";
import { PHONE_USA, PHONE_DISPLAY, SUPPORT_EMAIL } from "./lib/constants";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "24/7 USA Tech Support — Router, Printer & Internet Help | TechSupport4",
  description:
    "Certified remote technical support for Internet, Printer, Wi-Fi Router & Smart TV issues across USA, UK & Canada. Call now for instant help.",
  metadataBase: new URL("https://techsupport4.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "24/7 USA Tech Support — Instant Help | TechSupport4",
    description: "Secure & certified remote technical support services for Router, Printer, Internet & Smart TV.",
    url: "https://techsupport4.com",
    siteName: "TechSupport4",
    images: [{ url: "/logo.png", width: 800, height: 600 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 USA Tech Support | TechSupport4",
    description: "Certified remote support for Internet, Printer, Router & Smart TV.",
    images: ["/logo.png"],
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
});

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className="scroll-smooth">
    <html
  lang="en"
  className={`${inter.variable} ${poppins.variable} scroll-smooth`}
>
      <body className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>

        {/* ================= TOP BAR ================= */}
        <div className="hidden md:block bg-slate-900 text-slate-300 text-xs py-2">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                Available 24/7
              </span>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition">
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">Serving USA, UK & Canada</span>
              <a href={`tel:${PHONE_USA}`} className="text-white font-semibold hover:text-blue-400 transition">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ================= NAVBAR ================= */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="TechSupport4 — Remote Tech Support"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-200">
              <a href="/" className="relative py-1 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all">Home</a>
              <DesktopServicesMenu />
              <a href="/faq" className="relative py-1 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all">FAQ</a>
              <a href="/blog" className="relative py-1 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all">Blog</a>
              <a href="/#reviews" className="relative py-1 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all">Reviews</a>
              <a href="/contact" className="relative py-1 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all">Contact</a>

              {/* CTA Button */}
              <a
                href={`tel:${PHONE_USA}`}
                className="ml-2 bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-red-700 transition shadow-md flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
              <ThemeToggle />
            </nav>

            {/* MOBILE */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        {children}


        {/* ================= FOOTER ================= */}
        <footer className="bg-slate-950 text-slate-300">

          {/* Newsletter / CTA Strip */}
          <div className="bg-blue-700">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>Need Immediate Tech Support?</h3>
                <p className="text-blue-100 mt-1 text-sm">Our certified technicians are available 24/7. Call now or start a secure session.</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${PHONE_USA}`} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-sm">
                  Start Session
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-10 border-b border-slate-800">

              {/* Brand */}
              <div className="col-span-2 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/logo.png" alt="TechSupport4" className="h-10 w-auto brightness-200" />
                </div>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed max-w-sm">
                  Professional independent remote tech support for homes and businesses across the United States, United Kingdom & Canada. Certified technicians available around the clock.
                </p>
                <div className="space-y-2">
                  <a href={`tel:${PHONE_USA}`} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {SUPPORT_EMAIL}
                  </a>
                  <p className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    251 Little Falls Drive, Wilmington, DE 19808, USA
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Services</p>
                <ul className="space-y-2.5 text-sm text-slate-400">
                  <li><a href="/internet-support-usa" className="hover:text-white transition">Internet Support</a></li>
                  <li><a href="/printer-support-usa" className="hover:text-white transition">Printer Support</a></li>
                  <li><a href="/wifi-router-support-usa" className="hover:text-white transition">Wi-Fi / Router Support</a></li>
                  <li><a href="/smart-tv-support-usa" className="hover:text-white transition">Smart TV Support</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Company</p>
                <ul className="space-y-2.5 text-sm text-slate-400">
                  <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
                  <li><a href="/support-session" className="hover:text-white transition">Start Session</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Legal</p>
                <ul className="space-y-2.5 text-sm text-slate-400">
                  <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
                  <li><a href="/refund-policy" className="hover:text-white transition">Refund Policy</a></li>
                  <li><a href="/disclaimer" className="hover:text-white transition">Disclaimer</a></li>
                  <li><a href="/cookie-policy" className="hover:text-white transition">Cookie Policy</a></li>
                  <li><a href="/accessibility" className="hover:text-white transition">Accessibility</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 max-w-3xl leading-relaxed text-center md:text-left">
                TechSupport4 is an independent third-party technical support service provider.
                We are not affiliated with, endorsed by, or connected to any brand or manufacturer unless explicitly stated.
                All trademarks, service marks, and company names are the property of their respective owners.
              </p>
              <p className="text-xs text-slate-600 whitespace-nowrap">
                &copy; {new Date().getFullYear()} TechSupport4. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        <CookieBanner />
        <MobileStickyCTA />
        <StickyCallDesktop />
        <ExitIntentPopup />

        </ThemeProvider>
      </body>
    </html>
  );
}
