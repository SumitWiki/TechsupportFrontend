import Script from "next/script";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY } from "./lib/constants";

export const metadata = {
  title: "24/7 USA Tech Support — Instant Help for Router, Printer & Internet | TechSupport4",
  description:
    "Certified remote technical support for Internet, Printer, Wi-Fi Router & Smart TV issues across USA, UK & Canada. Call now for instant resolution.",
};

export default function Home() {
  return (
    <>
      {/* SCHEMA */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "TechSupport4",
            url: "https://techsupport4.com",
            logo: "https://techsupport4.com/logo.png",
            description: "Certified remote technical support for Internet, Printer, Wi-Fi Router and Smart TV issues.",
            telephone: PHONE_USA,
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
            ],
            serviceOffered: [
              { "@type": "Service", name: "Internet Support" },
              { "@type": "Service", name: "Printer Support" },
              { "@type": "Service", name: "WiFi Router Support" },
              { "@type": "Service", name: "Smart TV Support" },
            ],
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1247" },
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is remote support secure?", acceptedAnswer: { "@type": "Answer", text: "Yes, we use encrypted and secure remote support sessions." } },
              { "@type": "Question", name: "Do you support USA, UK and Canada?", acceptedAnswer: { "@type": "Answer", text: "Yes, we provide certified remote tech support across USA, UK and Canada." } },
              { "@type": "Question", name: "How fast can my issue be resolved?", acceptedAnswer: { "@type": "Answer", text: "Most issues are resolved within 30 to 60 minutes." } },
            ],
          }),
        }}
      />

      <main className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">

        {/* ==================== HERO SECTION ==================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="animate-fadeSlide">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-blue-200 font-medium">Available 24/7 — Technicians Online Now</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  24/7 USA Tech Support —{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Instant Help
                  </span>{" "}
                  for Router, Printer & Internet Issues
                </h1>

                <p className="mt-6 text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-lg">
                  Certified technicians resolve your internet, printer, Wi-Fi & smart TV problems remotely — fast, secure, and hassle-free.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${PHONE_USA}`}
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call Now: {PHONE_DISPLAY}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Start Secure Session
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-200/70">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    256-bit Encrypted
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Certified Experts
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Satisfaction Guaranteed
                  </span>
                </div>
              </div>

              {/* Right — Stats / Visual */}
              <div className="hidden md:block animate-slideInRight">
                <div className="relative">
                  {/* Agent visual placeholder */}
                  <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl shadow-2xl">
                        🎧
                      </div>
                      <h3 className="mt-4 text-xl font-bold">Expert Technician</h3>
                      <p className="text-blue-200/60 text-sm">Ready to help you now</p>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <p className="text-3xl font-extrabold text-white">30</p>
                        <p className="text-xs text-blue-200/60 mt-1">Min Avg. Fix Time</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <p className="text-3xl font-extrabold text-white">4.9</p>
                        <p className="text-xs text-blue-200/60 mt-1">Customer Rating</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <p className="text-3xl font-extrabold text-white">1K+</p>
                        <p className="text-xs text-blue-200/60 mt-1">Happy Customers</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <p className="text-3xl font-extrabold text-white">24/7</p>
                        <p className="text-xs text-blue-200/60 mt-1">Availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TRUST BAR ==================== */}
        <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
              {[
                { icon: "⭐", label: "4.9/5 Rating", sub: "1,247 Reviews" },
                { icon: "🔒", label: "256-bit SSL", sub: "Encrypted Sessions" },
                { icon: "🇺🇸", label: "US Based", sub: "Support Team" },
                { icon: "⚡", label: "30 Min", sub: "Avg. Resolution" },
                { icon: "🕐", label: "24/7/365", sub: "Always Available" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-center md:text-left">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-slate-800 dark:text-white">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SERVICES ==================== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">What We Fix</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Expert Remote Tech Support Services
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
                Professional troubleshooting for all your devices — no engineer visit required.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  ),
                  title: "Internet Support",
                  desc: "Fix slow broadband, DNS errors, outages & connectivity drops across all ISPs.",
                  link: "/internet-support-usa",
                  gradient: "from-blue-600 to-cyan-500",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                  ),
                  title: "Printer Support",
                  desc: "Resolve offline printer, driver errors, Wi-Fi printing issues & paper jams remotely.",
                  link: "/printer-support-usa",
                  gradient: "from-purple-600 to-pink-500",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" /></svg>
                  ),
                  title: "Wi-Fi / Router Support",
                  desc: "Strengthen signal, fix dead zones, configure settings & secure your network.",
                  link: "/wifi-router-support-usa",
                  gradient: "from-green-600 to-emerald-500",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ),
                  title: "Smart TV Support",
                  desc: "Fix streaming issues, app errors & network connectivity on Samsung, LG, Sony & more.",
                  link: "/smart-tv-support-usa",
                  gradient: "from-orange-600 to-red-500",
                },
              ].map((service, i) => (
                <a
                  key={i}
                  href={service.link}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-5`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-5 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Get Help
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                How It Works
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
                Get your issue fixed in three easy steps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Call or Submit", desc: "Reach out via phone or our secure contact form. Describe your issue and we'll match you with the right expert.", icon: "📞" },
                { step: "02", title: "Secure Connection", desc: "Our certified technician connects to your device through an encrypted remote session. You stay in full control.", icon: "🔐" },
                { step: "03", title: "Issue Resolved", desc: "Your problem is diagnosed and fixed — typically within 30-60 minutes. No follow-up visit needed.", icon: "✅" },
              ].map((item, i) => (
                <div key={i} className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:shadow-lg transition">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE US ==================== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Our Advantage</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Why Choose TechSupport4?
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
                Trusted by thousands of customers across the United States, UK and Canada.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  ),
                  title: "Certified Technicians",
                  desc: "Our team holds industry certifications with years of hands-on remote support experience.",
                  color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  ),
                  title: "Secure & Encrypted",
                  desc: "All remote sessions use 256-bit encryption. You maintain full control throughout.",
                  color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ),
                  title: "Fast Resolution",
                  desc: "Most internet, printer, and Wi-Fi issues are resolved within 30–60 minutes.",
                  color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ),
                  title: "USA, UK & Canada",
                  desc: "Dedicated support teams for all three regions in your local time zone.",
                  color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ),
                  title: "Transparent Pricing",
                  desc: "No hidden fees. You know the full cost before any session begins.",
                  color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ),
                  title: "24/7 Availability",
                  desc: "Support available around the clock including weekends and holidays.",
                  color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== REVIEWS ==================== */}
        <section id="reviews" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Customer Reviews</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                What Our Customers Say
              </h2>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" /></svg>
                  ))}
                </div>
                <span className="text-slate-600 dark:text-slate-300 font-semibold">4.9 out of 5</span>
                <span className="text-slate-400 text-sm">(1,247 reviews)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "James T.", location: "New York, USA", rating: 5, review: "My internet was completely down for 2 days. The technician fixed it remotely in under 40 minutes. Incredible service!", avatar: "JT" },
                { name: "Sarah M.", location: "London, UK", rating: 5, review: "Printer was showing offline for a week. TechSupport4 sorted it out quickly. Very professional and the session felt completely secure.", avatar: "SM" },
                { name: "David K.", location: "Toronto, Canada", rating: 5, review: "Wi-Fi dropping constantly in my home office. They diagnosed the router issue immediately and walked me through everything. 100% recommend.", avatar: "DK" },
                { name: "Lisa R.", location: "California, USA", rating: 5, review: "Smart TV wasn't connecting to Netflix. Fixed in 20 minutes. The support agent was patient and knowledgeable.", avatar: "LR" },
                { name: "Michael B.", location: "Manchester, UK", rating: 5, review: "Extremely fast response. My internet router needed reconfiguration after a move. All done remotely — no engineer visit needed.", avatar: "MB" },
                { name: "Priya N.", location: "Vancouver, Canada", rating: 5, review: "I was sceptical about remote support but it was seamless. They fixed my printer driver issue and explained everything step by step.", avatar: "PN" },
              ].map((r, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" /></svg>
                    ))}
                  </div>
                  {/* Review text */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                    &ldquo;{r.review}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      {r.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">{r.name}</p>
                      <p className="text-slate-400 text-xs">{r.location}</p>
                    </div>
                    <svg className="ml-auto w-5 h-5 text-blue-500 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-lg"
              >
                Get Your Issue Fixed Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT US ==================== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">About Us</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  A Trusted Name in Remote Tech Support
                </h2>
                <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed">
                  TechSupport4 is a professional independent remote technical support provider serving customers across the United States, United Kingdom, and Canada. Our team of certified technicians is dedicated to resolving your technology issues quickly and securely — all from the comfort of your home.
                </p>
                <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                  We specialize in internet connectivity, printer troubleshooting, Wi-Fi and router configuration, and smart TV support. Every session is encrypted, and you maintain full control of your device throughout the process.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { num: "1,000+", label: "Happy Customers" },
                    { num: "4.9/5", label: "Average Rating" },
                    { num: "30 min", label: "Avg. Fix Time" },
                    { num: "24/7", label: "Support Hours" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
                      <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{stat.num}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  {[
                    "100% encrypted and secure remote sessions",
                    "Certified and experienced technicians only",
                    "Transparent pricing with no hidden costs",
                    "Satisfaction guarantee on every service",
                    "Available 24/7 including weekends & holidays",
                    "No physical visit required — fully remote",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-blue-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FAQ PREVIEW ==================== */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Is remote support safe and secure?", a: "Yes. All remote sessions are fully encrypted with 256-bit SSL. You must grant explicit permission before any connection, and you retain full control throughout the session." },
                { q: "How long does it take to fix my issue?", a: "Most internet, printer, Wi-Fi, and Smart TV issues are resolved within 30 to 60 minutes. Complex issues may require additional time." },
                { q: "Do you support USA, UK and Canada?", a: "Yes. We provide certified remote technical support across the United States, United Kingdom, and Canada with dedicated teams in each region." },
                { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, and PayPal. All payments are processed through PCI-DSS compliant systems." },
              ].map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                  <h3 className="font-bold text-slate-900 dark:text-white">{faq.q}</h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/faq" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1">
                View all FAQs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== LOCATIONS ==================== */}
        <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Serving customers across major cities including{" "}
              <a href="/location/internet-support-new-york" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">New York</a>,{" "}
              <a href="/location/internet-support-california" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">California</a>,{" "}
              <a href="/location/printer-support-london" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">London</a>,{" "}
              <a href="/location/wifi-support-toronto" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Toronto</a>{" "}
              and more.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
