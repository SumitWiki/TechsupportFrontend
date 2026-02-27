import Script from "next/script";

export const metadata = {
  title: "Frequently Asked Questions | TechSupport4",
  description:
    "Find answers to common questions about TechSupport4 remote technical support services for internet, printer, Wi-Fi and Smart TV.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | TechSupport4",
    description: "Find answers to common questions about TechSupport4 remote technical support services.",
    url: "https://techsupport4.com/faq",
  },
  twitter: {
    card: "summary",
    title: "Frequently Asked Questions | TechSupport4",
    description: "Find answers to common questions about TechSupport4 remote technical support services.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      q: "How does remote support work?",
      a: "Our technician securely connects to your device using encrypted remote desktop software. You see everything happening on screen and can end the session at any time. No physical visit required.",
    },
    {
      q: "Is remote support safe and secure?",
      a: "Yes. All remote sessions are fully encrypted. You must grant explicit permission before any connection is made, and you retain full control throughout the session.",
    },
    {
      q: "Do you support USA, UK and Canada?",
      a: "Yes. We provide certified remote technical support across the United States, United Kingdom, and Canada, with remote technicians available in your time zone.",
    },
    {
      q: "How long does it take to fix my issue?",
      a: "Most internet, printer, Wi-Fi, and Smart TV issues are resolved within 30 to 60 minutes. Complex issues may take longer.",
    },
    {
      q: "What devices and brands do you support?",
      a: "We support all major router brands (Netgear, TP-Link, Linksys, Asus, etc.), printer brands (HP, Canon, Epson, Brother, etc.), Smart TVs (Samsung, LG, Sony, etc.), and all major internet service providers.",
    },
    {
      q: "Is there a guarantee?",
      a: "Yes. We offer a satisfaction guarantee. If your issue is not resolved, please refer to our Refund Policy for full details.",
    },
    {
      q: "Do I need to download anything?",
      a: "You may need to download a small, secure remote support tool to allow our technician to connect. This is standard for all remote support services and can be uninstalled after the session.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Visa, Mastercard, and PayPal. All payments are processed through PCI-DSS compliant systems.",
    },
  ];

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <main className="bg-white dark:bg-slate-900 min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-700 text-white py-20 text-center px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">Help Center</span>
            <h1 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h1>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">Everything you need to know about TechSupport4 remote tech support.</p>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{q}</h2>
                <p className="mt-3 text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Still have questions?</h2>
            <p className="mt-2 text-blue-100">Our team is available 24/7 to help.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">Contact Support</a>
              <a href="tel:+18889501777" className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Call Now</a>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Explore Our Services</h3>
            <div className="flex flex-wrap gap-4">
              <a href="/internet-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Internet Support</a>
              <a href="/printer-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Printer Support</a>
              <a href="/wifi-router-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Wi-Fi Router Support</a>
              <a href="/smart-tv-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Smart TV Support</a>
              <a href="/blog" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Blog Guides</a>
              <a href="/about" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">About Us</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
