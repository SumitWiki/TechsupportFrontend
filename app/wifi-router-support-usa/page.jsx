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

    <main className="bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold">Wi-Fi & Router Support for USA Customers</h1>
            <p className="mt-4 text-lg text-blue-100">Slow Wi-Fi, router disconnecting, or setup issues? Get secure remote network support.</p>
            <Link href="/contact" className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Get Wi-Fi Support Now
            </Link>
          </div>
          <img src="/wifi.jpg" alt="Wi-Fi Router Support USA" className="rounded-xl shadow-lg" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">📶 Wi-Fi & Router Issues We Fix</h2>
          <ul className="space-y-3 text-slate-600">
            <li>🐢 Slow Wi-Fi speed</li>
            <li>📡 Router setup & configuration</li>
            <li>🔐 Wi-Fi security issues</li>
            <li>📱 Devices not connecting</li>
            <li>⚠️ Frequent disconnections</li>
            <li>🔄 Router firmware updates</li>
            <li>📍 Wi-Fi dead zones</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">🔒 Why Our Wi-Fi Support Works</h2>
          <ul className="space-y-3 text-slate-600">
            <li>🌎 USA-based remote help</li>
            <li>🔐 Privacy-first approach</li>
            <li>⚡ Fast diagnosis</li>
            <li>🧑‍💻 Network specialists</li>
            <li>📶 All router brands supported</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Fix My Wi-Fi Now</h2>
          <p className="mt-3 text-blue-100">Get stable & secure internet today. Available 24/7.</p>
          <Link href="/contact" className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Wi-Fi Support
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}

