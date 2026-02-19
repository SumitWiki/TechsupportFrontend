import Script from "next/script";

export const metadata = {
  title: "Frequently Asked Questions | TechSupport4",
  description:
    "Find answers to common questions about TechSupport4 remote technical support services for internet, printer, Wi-Fi and Smart TV.",
  alternates: { canonical: "/faq" },
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
      a: "Yes. We provide certified remote technical support across the United States, United Kingdom, and Canada, with dedicated teams in each region.",
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

      <main className="bg-slate-50 min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 text-center px-6">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">
            Everything you need to know about TechSupport4 remote tech support.
          </p>
        </section>

        {/* FAQ Grid */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-semibold text-slate-800">{q}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold">Still have questions?</h2>
            <p className="mt-2 text-blue-100">Our team is available 24/7 to help.</p>
            <a
              href="/contact"
              className="inline-block mt-6 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
