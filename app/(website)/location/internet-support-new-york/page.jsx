import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Support New York | Remote WiFi Help NYC",
  description:
    "Professional remote internet support services in New York. Fix Wi-Fi issues, slow internet & router problems instantly.",
  alternates: {
    canonical: "/location/internet-support-new-york",
  },
  openGraph: {
    title: "Internet Support New York | TechSupport4",
    description:
      "Fast & secure remote internet troubleshooting in New York.",
    url: "https://techsupport4.com/location/internet-support-new-york",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="ny-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Internet Support in New York",
            areaServed: {
              "@type": "City",
              name: "New York",
            },
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">New York</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">USA Service Area</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Internet Support in New York
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Get fast and secure remote internet troubleshooting services across New York City. We fix Wi-Fi, router and speed issues instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                Get Help in New York
              </Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition border border-white/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-8">Common Issues We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Slow internet speed", "No connection issues", "Router configuration", "DNS & IP errors"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
