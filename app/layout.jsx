import "./globals.css";
import Image from "next/image";
import DesktopServicesMenu from "./components/DesktopServicesMenu";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import CookieBanner from "./components/CookieBanner";
import ExitIntentPopup from "./components/ExitIntentPopup";
import MobileStickyCTA from "./components/MobileStickyCTA";
import { PHONE_USA, PHONE_DISPLAY, SUPPORT_EMAIL } from "./lib/constants";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";







export const metadata = {
  title: "Premium Remote Tech Support USA, UK & Canada | TechSupport4",
  description:
    "Certified remote technical support for Internet, Printer, Wi-Fi Router & Smart TV issues across USA, UK & Canada.",
   metadataBase: new URL("https://techsupport4.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Remote Tech Support USA, UK & Canada",
    description:
      "Secure & certified remote technical support services.",
    url: "https://techsupport4.com",
    siteName: "TechSupport4",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Remote Tech Support USA, UK & Canada",
    description:
      "Certified remote support for Internet, Printer, Router & Smart TV.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>


        {/* ================= NAVBAR ================= */}
    <header className="
  sticky top-0 z-50
  backdrop-blur-xl
  bg-white/70 dark:bg-slate-900/80
  border-b border-slate-200 dark:border-slate-700
  shadow-sm
">

 


          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

    
              {/* {================  LOGO BLOCK ======================} */}
         {/* PREMIUM LOGO */}
      <Link href="/" className="relative group flex items-center">

       <div className="relative">

        <img
         src="/logo.png"
         alt="TechSupport4 — Remote Tech Support USA UK Canada"
          className="
           h-20 md:h-25 w-auto
           cursor-pointer
             transition-all duration-100
             group-hover:scale-110
             group-hover:rotate-1
            drop-shadow-xl
      "
    />

             {/* Glow Effect */}
              <div className="
              absolute inset-0
              rounded-full
              opacity-0
               group-hover:opacity-60
               blur-2xl
               transition duration-500
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
    ">

    </div>

  </div>

</Link>



           <nav className="hidden md:flex gap-8 font-medium text-slate-700 dark:text-slate-200 items-center">


              <a href="/" className="hover:text-blue-600">Home</a>
              <DesktopServicesMenu />
              <a href="/faq" className="hover:text-blue-600">FAQ</a>
              <a href="/blog/how-to-fix-internet-not-working" className="hover:text-blue-600">Blog</a>
              <a href="#reviews" className="hover:text-blue-600">Reviews</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
              {/* Phone CTA — visible desktop only */}
              <a
                href={`tel:${PHONE_USA}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                📞 {PHONE_DISPLAY}
              </a>
              <ThemeToggle />

            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        {/* No <main> wrapper here — each page provides its own <main> tag */}
        {children}
        

        {/* ================= FOOTER ================= */}
        <footer className="bg-slate-900 dark:bg-black text-slate-300 py-14">
          <div className="max-w-7xl mx-auto px-6">

            {/* Top Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-slate-800">

              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <p className="font-bold text-white text-lg mb-2">TechSupport4</p>
                <p className="text-sm text-slate-400 mb-4">
                  Independent remote tech support for USA, UK & Canada.
                </p>
                <a href={`tel:${PHONE_USA}`} className="text-blue-400 hover:underline text-sm block">
                  📞 {PHONE_DISPLAY}
                </a>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-400 hover:underline text-sm block mt-1">
                  ✉️ {SUPPORT_EMAIL}
                </a>
              </div>

              {/* Services */}
              <div>
                <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Services</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/internet-support-usa" className="hover:text-white transition">Internet Support</a></li>
                  <li><a href="/printer-support-usa" className="hover:text-white transition">Printer Support</a></li>
                  <li><a href="/wifi-router-support-usa" className="hover:text-white transition">Wi-Fi Support</a></li>
                  <li><a href="/smart-tv-support-usa" className="hover:text-white transition">Smart TV Support</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Resources</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="/blog/how-to-fix-internet-not-working" className="hover:text-white transition">Blog</a></li>
                  <li><a href="/support-session" className="hover:text-white transition">Start Session</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Legal</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
                  <li><a href="/refund-policy" className="hover:text-white transition">Refund Policy</a></li>
                  <li><a href="/disclaimer" className="hover:text-white transition">Disclaimer</a></li>
                  <li><a href="/cookie-policy" className="hover:text-white transition">Cookie Policy</a></li>
                  <li><a href="/accessibility" className="hover:text-white transition">Accessibility</a></li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-500 mt-8 max-w-4xl mx-auto text-center leading-relaxed">
              TechSupport4 is an independent third-party technical support service provider.
              We are not affiliated with, endorsed by, or connected to any brand or manufacturer unless explicitly stated.
              All trademarks, service marks, and company names are the property of their respective owners.
            </p>

            <p className="mt-4 text-xs text-slate-600 text-center">
              © {new Date().getFullYear()} TechSupport4. All Rights Reserved.
            </p>

          </div>
        </footer>
        <CookieBanner />
        
        {/* Conversion Systems */}
        <MobileStickyCTA />
        <ExitIntentPopup />
        </ThemeProvider>

      </body>
    </html>
  );
}
