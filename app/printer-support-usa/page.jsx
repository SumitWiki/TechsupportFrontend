import Script from "next/script";
export const metadata = {
  title: "Printer Support USA | Remote Printer Help",
  description:
    "Remote printer support for USA customers. Fix printer offline, driver errors, Wi-Fi printer issues securely.",
alternates: {
    canonical: "https://techsupport4.com/printer-support-usa",
  },
  openGraph: {
    title: "Printer Support USA | TechSupport4",
    description:
      "Remote printer troubleshooting & setup support across USA, UK & Canada.",
    url: "https://techsupport4.com/printer-support-usa",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Printer Support USA | TechSupport4",
  description: "Remote printer troubleshooting & setup support across USA, UK & Canada.",
},

};


export default function PrinterSupportUSA() {
  return (
    
    <>
    {/* ✅ SERVICE SCHEMA */}
      <Script
        id="printer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Remote Printer Support",
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
            areaServed: ["United States", "United Kingdom", "Canada"],
            description:
              "Remote troubleshooting for printer offline, driver errors, setup & network issues.",
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA */}
      <Script
        id="printer-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is my printer offline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Printer offline errors occur due to network or driver issues. Our remote experts fix it instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support wireless printer setup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide complete Wi-Fi printer setup and troubleshooting remotely.",
                },
              },
            ],
          }),
        }}
      />
    
    <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 relative z-10">
          <nav className="text-sm text-purple-200 mb-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Printer Support</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">Remote Printer Support</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Printer Support for USA Customers
              </h1>
              <p className="mt-4 text-lg text-purple-100 max-w-xl">
                Printer offline, not printing, or driver issues? Get fast &amp; secure remote printer support from certified technicians.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/contact" className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Get Help Now</a>
                <a href="tel:+18001234567" className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition">Call Now</a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-4 w-80">
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><div><p className="font-bold text-white text-sm">All Brands Supported</p><p className="text-xs text-purple-200">HP, Canon, Epson, Brother & more</p></div></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div><div><p className="font-bold text-white text-sm">Secure Connection</p><p className="text-xs text-purple-200">256-bit SSL encrypted</p></div></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center"><svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><p className="font-bold text-white text-sm">Quick Resolution</p><p className="text-xs text-purple-200">Most issues fixed in &lt;30 min</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISSUES WE FIX */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>Printer Issues We Fix</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">From offline errors to wireless setup, we handle it all remotely.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Printer Offline Error", desc: "Fix printer showing offline status on Windows, macOS, and Linux.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg> },
              { title: "Not Printing / Stuck Queue", desc: "Clear print queue jams and resolve spooler service issues.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
              { title: "Driver Install & Update", desc: "Install correct drivers and update outdated printer software.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> },
              { title: "Wi-Fi Printer Connection", desc: "Connect your printer to wireless network for cable-free printing.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" /></svg> },
              { title: "Printer Not Detected", desc: "Fix USB/network detection issues across all operating systems.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
              { title: "Multi-Printer Setup", desc: "Configure multiple printers for home or office environments.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" /></svg> },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition group">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Need Printer Help Now?</h2>
          <p className="mt-3 text-purple-100 max-w-xl mx-auto">Talk to a printer expert instantly. Available 24/7.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/contact" className="bg-white text-purple-700 px-8 py-3.5 rounded-xl font-bold hover:bg-purple-50 transition shadow-lg">Get Printer Support</a>
            <a href="tel:+18001234567" className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Call Now</a>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}

