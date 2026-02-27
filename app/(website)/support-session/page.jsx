import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Start Secure Support Session | TechSupport4",
  description:
    "Start a secure remote support session with certified technical experts. 256-bit SSL encrypted connections, available 24/7 across USA, UK and Canada.",
  alternates: { canonical: "/support-session" },
  openGraph: {
    title: "Start Secure Support Session | TechSupport4",
    description: "Connect with certified tech experts through a safe, encrypted remote session. Available 24/7.",
    url: "https://techsupport4.com/support-session",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Remote Support Session | TechSupport4",
    description: "Start a secure remote support session with certified technical experts.",
  },
};

export default function SupportSessionPage() {
  return (
    <>
      {/* Service Schema */}
      <Script
        id="session-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Secure Remote Support Session",
            description: "Encrypted remote technical support session with certified experts.",
            provider: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
            ],
          }),
        }}
      />
      <Script
        id="session-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techsupport4.com" },
              { "@type": "ListItem", position: 2, name: "Support Session", item: "https://techsupport4.com/support-session" },
            ],
          }),
        }}
      />
    <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-blue-300 text-sm mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Support Session</span>
          </nav>
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
            <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Start Secure Support Session
          </h1>
          <p className="mt-4 text-blue-200 text-lg max-w-xl mx-auto">
            Connect with our certified experts through a safe, encrypted remote session.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-heading font-bold text-slate-800 dark:text-white mb-6">Before You Begin</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
            Please review the session details below before starting your remote support session.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Encrypted Connection", desc: "256-bit SSL encryption protects your data" },
              { icon: "M6 18L18 6M6 6l12 12", title: "End Anytime", desc: "You control the session — disconnect anytime" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Certified Experts", desc: "Trained & verified technical professionals" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "24/7 Available", desc: "Round-the-clock support, every day" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Continue to Secure Session
            </Link>
            <a
              href="tel:+18889501777"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Or Call Us Directly
            </a>
          </div>
        </div>

        <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-6">
          Your privacy is our priority. No data is stored without your consent.
        </p>

        {/* Internal Links */}
        <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link>
            <Link href="/internet-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Internet Support</Link>
            <Link href="/printer-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Printer Support</Link>
            <Link href="/wifi-router-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Wi-Fi Router Support</Link>
            <Link href="/faq" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">FAQ</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
