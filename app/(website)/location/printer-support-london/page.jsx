import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Printer Support London | Remote Printer Help UK",
  description:
    "Professional remote printer troubleshooting services in London, UK.",
  alternates: {
    canonical: "/location/printer-support-london",
  },
  openGraph: {
    title: "Printer Support London | Remote Printer Help UK",
    description: "Professional remote printer troubleshooting services in London, UK.",
    url: "https://techsupport4.com/location/printer-support-london",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="london-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Printer Support in London",
            areaServed: {
              "@type": "City",
              name: "London",
            },
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
            },
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-purple-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">London</span>
            </nav>
            <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-purple-500/30">UK Service Area</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Printer Support in London
            </h1>
            <p className="mt-4 text-purple-200 text-lg max-w-2xl">
              Printer offline or not printing in London? We provide fast & secure remote printer troubleshooting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                Get Printer Help in London
              </Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition border border-white/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z", title: "All Brands", desc: "HP, Canon, Epson, Brother" },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Secure", desc: "Encrypted connection" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Quick Fix", desc: "Under 30 minutes" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "24/7", desc: "Always available" },
            ].map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                </div>
                <h3 className="font-heading font-semibold text-slate-800 dark:text-white">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
