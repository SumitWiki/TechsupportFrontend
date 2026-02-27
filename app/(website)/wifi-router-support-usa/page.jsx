import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Wi-Fi & Router Support USA | Remote Network Help | TechSupport4",
  description:
    "Remote Wi-Fi and router support for USA customers. Fix slow Wi-Fi, router setup, connectivity issues, and network configuration securely.",
  alternates: { canonical: "/wifi-router-support-usa" },
  openGraph: {
    title: "Wi-Fi & Router Support USA | Remote Network Help",
    description: "Remote Wi-Fi and router support for USA customers.",
    url: "https://techsupport4.com/wifi-router-support-usa",
  },
  twitter: {
    card: "summary",
    title: "Wi-Fi & Router Support USA | Remote Network Help",
    description: "Remote Wi-Fi and router support for USA customers.",
  },
};

export default function WifiRouterSupportUSA() {
  return (
    <>
      <Script id="wifi-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          serviceType: "Remote Wi-Fi and Router Support",
          provider: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
          areaServed: ["United States", "United Kingdom", "Canada"],
          description: "Remote Wi-Fi troubleshooting, router setup, and network configuration.",
        }) }}
      />
      <Script id="wifi-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Why is my Wi-Fi slow?",
              acceptedAnswer: { "@type": "Answer", text: "Slow Wi-Fi can be caused by router placement, interference, outdated firmware, or too many connected devices." } },
            { "@type": "Question", name: "Can you fix my router remotely?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, most router configuration and Wi-Fi issues can be fixed remotely." } },
          ],
        }) }}
      />

    <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 relative z-10">
          <nav className="text-sm text-green-200 mb-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Wi-Fi &amp; Router Support</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">Remote Network Support</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Wi-Fi &amp; Router Support for USA Customers</h1>
              <p className="mt-4 text-lg text-green-100 max-w-xl">Slow Wi-Fi, router disconnecting, or setup issues? Get secure remote network support from certified specialists.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact" className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Get Wi-Fi Support Now</Link>
                <a href="tel:+18889501777" className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition">Call Now</a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-4 w-80">
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" /></svg></div><div><p className="font-bold text-white text-sm">All Router Brands</p><p className="text-xs text-green-200">Netgear, TP-Link, Linksys & more</p></div></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><div><p className="font-bold text-white text-sm">Privacy-First</p><p className="text-xs text-green-200">Secure encrypted sessions</p></div></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><div><p className="font-bold text-white text-sm">Fast Diagnosis</p><p className="text-xs text-green-200">Network issues identified quickly</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISSUES WE FIX */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>Wi-Fi &amp; Router Issues We Fix</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">From slow speeds to dead zones, our network specialists handle it all.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Slow Wi-Fi Speed", desc: "Optimize channel selection, bandwidth, and eliminate interference.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
              { title: "Router Setup & Config", desc: "Complete router configuration, SSID, password, and security setup.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { title: "Wi-Fi Security Issues", desc: "Secure your network with WPA3, firewall, and parental controls.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
              { title: "Devices Not Connecting", desc: "Fix connection failures for phones, laptops, and smart devices.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
              { title: "Frequent Disconnections", desc: "Stabilize your connection by fixing interference and firmware bugs.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728" /></svg> },
              { title: "Wi-Fi Dead Zones", desc: "Extend coverage with mesh networking and range extender setup.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition group">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Fix My Wi-Fi Now</h2>
          <p className="mt-3 text-green-100 max-w-xl mx-auto">Get stable &amp; secure internet today. Available 24/7, 365 days.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-3.5 rounded-xl font-bold hover:bg-green-50 transition shadow-lg">Get Wi-Fi Support</Link>
            <a href="tel:+18889501777" className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Call Now</a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Related Services & Resources</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="/internet-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Internet Support</Link>
          <Link href="/printer-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Printer Support</Link>
          <Link href="/smart-tv-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Smart TV Support</Link>
          <Link href="/blog/wifi-router-reset-guide" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Guide: Reset Your Router</Link>
          <Link href="/faq" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">FAQ</Link>
          <Link href="/about" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">About Us</Link>
        </div>
      </section>
    </main>
    </>
  );
}

