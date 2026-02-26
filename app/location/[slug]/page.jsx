import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";

const cities = {
  "internet-support-new-york": {
    city: "New York",
    service: "Internet Support",
    country: "USA",
  },
  "internet-support-california": {
    city: "California",
    service: "Internet Support",
    country: "USA",
  },
  "printer-support-london": {
    city: "London",
    service: "Printer Support",
    country: "UK",
  },
  "wifi-support-toronto": {
    city: "Toronto",
    service: "WiFi Support",
    country: "Canada",
  },
};

export function generateStaticParams() {
  return Object.keys(cities).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = cities[slug];

  if (!data) return {};

  return {
    title: `${data.service} in ${data.city} | TechSupport4`,
    description: `Professional ${data.service.toLowerCase()} services in ${data.city}, ${data.country}. Secure remote troubleshooting by certified experts.`,
    alternates: {
      canonical: `/location/${slug}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const data = cities[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* SERVICE SCHEMA */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${data.service} in ${data.city}`,
            areaServed: {
              "@type": "City",
              name: data.city,
            },
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `Do you provide ${data.service} in ${data.city}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, we provide fast and secure remote ${data.service.toLowerCase()} services in ${data.city}.`,
                },
              },
              {
                "@type": "Question",
                name: "Is remote support secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all sessions are encrypted and secure.",
                },
              },
            ],
          }),
        }}
      />

      {/* BREADCRUMB SCHEMA */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://techsupport4.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: data.city,
                item: `https://techsupport4.com/location/${slug}`,
              },
            ],
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{data.city}</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">{data.country} Service Area</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              {data.service} in {data.city}
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Get professional {data.service.toLowerCase()} services in {data.city}, {data.country}.
              Secure, certified & remote assistance available instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Get Help Now
              </Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition border border-white/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Fast Resolution", desc: "Most issues fixed within 30 min" },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Secure Session", desc: "256-bit encrypted connection" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Certified Experts", desc: "Trained & verified technicians" },
              { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "No Home Visit", desc: "100% remote support" },
            ].map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                </div>
                <h3 className="font-heading font-semibold text-slate-800 dark:text-white">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-heading font-bold">Ready to Get {data.service}?</h2>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our certified technicians in {data.city} are available 24/7 for immediate remote assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                Start Secure Session
              </Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
