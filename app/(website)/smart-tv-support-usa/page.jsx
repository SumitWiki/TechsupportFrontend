import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Smart TV Support USA | Remote TV Help",
  description:
    "Remote smart TV support for USA customers. Fix streaming, Wi-Fi and app issues on Smart TVs securely.",
  alternates: { canonical: "/smart-tv-support-usa" },
  openGraph: {
    title: "Smart TV Support USA | Remote TV Help",
    description: "Remote smart TV support for USA customers. Fix streaming, Wi-Fi and app issues.",
    url: "https://techsupport4.com/smart-tv-support-usa",
  },
  twitter: {
    card: "summary",
    title: "Smart TV Support USA | Remote TV Help",
    description: "Remote smart TV support for USA customers.",
  },
};

export default function SmartTVSupportUSA() {
  return (
    <>
      {/* SERVICE SCHEMA */}
      <Script
        id="smart-tv-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Remote Smart TV Support",
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
            areaServed: ["United States", "United Kingdom", "Canada"],
            description: "Remote Smart TV troubleshooting, streaming app fixes, and TV connectivity support.",
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <Script
        id="smart-tv-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is my Smart TV not connecting to Wi-Fi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This can be caused by incorrect Wi-Fi settings, router issues, or firmware updates needed on your TV.",
                },
              },
              {
                "@type": "Question",
                name: "Can you fix my Smart TV remotely?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, most Smart TV issues including streaming, app, and connectivity problems can be resolved remotely.",
                },
              },
            ],
          }),
        }}
      />

    <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-orange-700 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 relative z-10">
          <nav className="text-sm text-orange-200 mb-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Smart TV Support</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">Remote TV Support</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Smart TV Support for USA Customers
              </h1>
              <p className="mt-4 text-lg text-orange-100 max-w-xl">
                Netflix not loading? TV not connecting to Wi-Fi? Get fast remote Smart TV support from certified technicians.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact" className="bg-white text-orange-700 px-8 py-3.5 rounded-xl font-bold hover:bg-orange-50 transition shadow-lg">Get Help Now</Link>
                <a href="tel:+18889501777" className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition">Call Now</a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-4 w-80">
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><div><p className="font-bold text-white text-sm">All Major Brands</p><p className="text-xs text-orange-200">Samsung, LG, Sony, TCL & more</p></div></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><div><p className="font-bold text-white text-sm">Streaming Experts</p><p className="text-xs text-orange-200">Netflix, YouTube, Disney+</p></div></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><p className="font-bold text-white text-sm">Quick Resolution</p><p className="text-xs text-orange-200">Most issues fixed fast</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISSUES WE FIX */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>Smart TV Issues We Fix</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">From streaming problems to Wi-Fi connectivity, we handle it all remotely.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "TV Not Connecting to Wi-Fi", desc: "Fix wireless connectivity issues and network configuration on any Smart TV.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" /></svg> },
              { title: "Streaming Apps Not Working", desc: "Fix Netflix, YouTube, Hulu, Disney+, and other app crashes or errors.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { title: "App Installation & Updates", desc: "Install, update, or troubleshoot built-in and third-party TV applications.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> },
              { title: "Screen Casting Problems", desc: "Fix Chromecast, AirPlay, and Miracast mirroring issues.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
              { title: "Smart TV Setup", desc: "Complete initial setup, account configuration, and channel tuning.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { title: "Picture & Sound Issues", desc: "Resolve display problems, audio sync, and HDMI connectivity.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition group">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Need Smart TV Help?</h2>
          <p className="mt-3 text-orange-100 max-w-xl mx-auto">Enjoy uninterrupted streaming today. Available 24/7.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="bg-white text-orange-700 px-8 py-3.5 rounded-xl font-bold hover:bg-orange-50 transition shadow-lg">Get Smart TV Support</Link>
            <a href="tel:+18889501777" className="bg-red-800 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-900 transition shadow-lg">Call Now</a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Related Services & Resources</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="/internet-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Internet Support</Link>
          <Link href="/printer-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Printer Support</Link>
          <Link href="/wifi-router-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Wi-Fi & Router Support</Link>
          <Link href="/blog/how-to-fix-internet-not-working" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Guide: Fix Internet Issues</Link>
          <Link href="/faq" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">FAQ</Link>
          <Link href="/about" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">About Us</Link>
        </div>
      </section>

    </main>
    </>
  );
}

