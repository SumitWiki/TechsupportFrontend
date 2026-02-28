import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Cox Router Not Working? Complete Fix Guide (2026)",
  description: "Cox router or Panoramic WiFi gateway not working? Fix blinking lights, no internet, slow speeds, and connection issues on Cox Communications step by step.",
  alternates: { canonical: "/cox-router-not-working" },
  openGraph: { title: "Cox Router Not Working — Fix Guide", description: "Fix Cox router and gateway issues.", type: "article", url: "https://techsupport4.com/cox-router-not-working" },
  twitter: { card: "summary_large_image", title: "Cox Router Fix | TechSupport4", description: "Cox router not working — complete fix guide." },
};

const faqs = [
  { q: "Why is my Cox router not working?", a: "Common causes: (1) Cox outage in your area, (2) Panoramic WiFi gateway needs restart, (3) Coaxial cable issue, (4) Gateway overheating, (5) Account issue (unpaid bill), (6) Old equipment needing replacement. Check the Cox app first for outages." },
  { q: "What do the lights on my Cox Panoramic WiFi gateway mean?", a: "Solid white = working. Blinking white = starting up. Blinking green = connecting to Cox network. Solid orange = limited connectivity. Blinking orange = firmware updating. Red = no internet / hardware issue. No light = no power." },
  { q: "How do I restart my Cox Panoramic WiFi?", a: "3 methods: (1) Cox app → My WiFi → Restart Equipment, (2) Unplug power → wait 30 seconds → replug → wait 10 min, (3) Press reset button briefly (quick press = restart, 30-sec hold = factory reset). The app method is recommended." },
  { q: "Should I use Cox Panoramic WiFi or my own router?", a: "Cox charges $13/month for the Panoramic WiFi gateway. You can use your own DOCSIS 3.1 modem + WiFi 6 router to save money. Compatible modems: Motorola MB8600, ARRIS SB8200, Netgear CM1000. You must return Cox's gateway to avoid rental charges." },
  { q: "How do I contact Cox for internet issues?", a: "Call 1-800-234-3993, use Cox app → Support, visit cox.com/support, or chat online. The Cox app can run diagnostics and send reset signals to your gateway. For persistent issues, request a technician visit." },
];

export default function CoxRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Cox Router Not Working — Complete Fix Guide", description: "Fix Cox router and Panoramic WiFi issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Cox</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Cox Communications Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Cox Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix your Cox Panoramic WiFi gateway — blinking lights, no internet, slow speeds, and connection drops.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Cox Communications provides internet through their <strong>Panoramic WiFi gateway</strong> — an all-in-one modem and router. When it stops working, here&apos;s how to get it back online.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Cox Gateway Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Action</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid White</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Working normally</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No action</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking White</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Booting up</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Wait 10 minutes</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Connecting to Cox</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Wait 10 minutes</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Orange</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Limited connectivity</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Restart gateway</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking Orange</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Firmware update</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Wait — don&apos;t unplug</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Red</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No internet / Error</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power cycle, check cable</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Cox Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Cox app</strong> (using mobile data)</li>
            <li>Check for <strong>service alerts</strong></li>
            <li>Or visit <strong>cox.com/residential/support</strong></li>
            <li>Or check <strong>downdetector.com/status/cox</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Panoramic WiFi Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the <strong>power cable</strong> from the gateway</li>
            <li>Wait <strong>30-60 seconds</strong></li>
            <li>Plug back in</li>
            <li>Wait <strong>10-15 minutes</strong> for full restart</li>
            <li>Light should settle to <strong>solid white</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Coaxial Cable</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Coax cable should be <strong>finger-tight</strong> at wall and gateway</li>
            <li>No kinks, bends, or damage</li>
            <li>Try <strong>different coax outlet</strong> if available</li>
            <li>Remove any <strong>unnecessary splitters</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Use Cox App Troubleshooter</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Cox app → My WiFi → Troubleshoot</strong></li>
            <li>The app can <strong>restart equipment remotely</strong></li>
            <li>It checks <strong>signal levels</strong> and <strong>firmware status</strong></li>
            <li>Follow recommended steps</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check for Overheating</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Place gateway in an <strong>open, ventilated area</strong></li>
            <li>Not inside a <strong>cabinet or closet</strong></li>
            <li>If hot to touch, unplug for <strong>30 minutes</strong>, then restart</li>
            <li>Keep away from <strong>heat sources</strong> and direct sunlight</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Factory Reset (Last Resort)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Hold the <strong>reset button</strong> for <strong>30 seconds</strong></li>
            <li>Wait <strong>15-20 minutes</strong> for reactivation</li>
            <li>The gateway will re-download configuration from Cox</li>
            <li><strong>Warning:</strong> This erases WiFi name and password</li>
            <li>Reconfigure via <strong>Cox app</strong> or <strong>192.168.0.1</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Request Equipment Replacement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If gateway is 3+ years old or keeps failing, contact Cox at <strong>1-800-234-3993</strong> or visit a Cox store. Request the latest <strong>Panoramic WiFi 6 or 6E gateway</strong> for improved performance and range.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Cox Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose Cox internet issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but can't browse." },
                { href: "/router-not-connecting-to-modem", title: "Router-Modem Issue", desc: "Fix modem connection." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
