import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Spectrum Router Red Light? 7 Fixes to Restore Internet (2026)",
  description: "Spectrum router showing red light? Fix solid red, blinking red, and red/blue alternating lights on your Spectrum router or modem with this complete guide.",
  alternates: { canonical: "/spectrum-router-red-light" },
  openGraph: { title: "Spectrum Router Red Light — 7 Fixes", description: "Fix red light on Spectrum router.", type: "article", url: "https://techsupport4.com/spectrum-router-red-light" },
  twitter: { card: "summary_large_image", title: "Spectrum Router Red Light Fix | TechSupport4", description: "Fix red light blinking on Spectrum router." },
};

const faqs = [
  { q: "What does a red light on my Spectrum router mean?", a: "A solid red light means the router has lost its internet connection — this could be an ISP outage, coaxial cable issue, or modem failure. Blinking red means the device is trying to establish a connection but failing. Red/blue alternating means firmware is updating — wait 20 minutes before troubleshooting." },
  { q: "How long should I wait before troubleshooting a red light?", a: "Wait 5 minutes first — the router may be rebooting or updating firmware. If the red light persists after 5 minutes, begin troubleshooting. If it appeared suddenly, check downdetector.com for Spectrum outages before doing anything else." },
  { q: "Will restarting my Spectrum router fix the red light?", a: "In most cases, yes. A proper restart (unplug 60 seconds, then plug back in) fixes about 70% of red light issues. The key is waiting the full 60 seconds — anything less may not fully clear the router's memory." },
  { q: "Can a bad coaxial cable cause the red light?", a: "Absolutely. A loose, damaged, or corroded coaxial cable is one of the most common causes of the red light. Check both ends — the wall jack and the modem port. Replace the cable if you see any damage or green corrosion on the connectors." },
  { q: "Should I press the reset button to fix the red light?", a: "No — not as a first step. The reset pinhole performs a factory reset, erasing your WiFi name and password. Try a regular restart first (unplug/replug). Only use the reset button as a last resort after all other fixes fail." },
];

export default function SpectrumRouterRedLight() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Spectrum Router Red Light — 7 Fixes", description: "Fix red light on Spectrum router.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-red-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/spectrum-router-not-working" className="hover:text-white transition">Spectrum Router</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Red Light</span>
            </nav>
            <span className="inline-block bg-red-500/20 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-red-500/30">Spectrum Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Spectrum Router Red Light?</h1>
            <p className="mt-4 text-red-200 text-lg max-w-2xl">7 tested fixes to resolve the red light on your Spectrum router — solid red, blinking red, and alternating red/blue lights explained.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-red-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-red-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">A red light on your Spectrum router or modem means the device can&apos;t connect to the internet. This is one of the most common Spectrum issues reported across New York, California, Texas, and Ohio. Here&apos;s what each red light pattern means and how to fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Spectrum Router Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light Pattern</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">What to Do</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-medium text-red-600">Solid Red</td><td className="p-3">No internet connection detected</td><td className="p-3">Check for outage, restart modem</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-medium text-red-600">Blinking Red</td><td className="p-3">Trying to connect but failing</td><td className="p-3">Check coaxial cable, restart</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-medium text-purple-600">Red/Blue Alternating</td><td className="p-3">Firmware updating</td><td className="p-3">Wait 20 minutes, don&apos;t unplug</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-medium text-blue-600">Solid Blue</td><td className="p-3">Working normally</td><td className="p-3">No action needed</td></tr>
                <tr><td className="p-3 font-medium text-blue-600">Blinking Blue</td><td className="p-3">Booting up or connecting</td><td className="p-3">Wait 5 minutes</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Spectrum Outage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">A red light during an outage is normal — no troubleshooting needed until the outage ends.</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>My Spectrum app</strong> → check for outage notification</li>
            <li>Visit <strong>spectrum.net/support/status</strong></li>
            <li>Check <a href="https://downdetector.com/status/spectrum/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector for Spectrum</a></li>
            <li>If outage confirmed, wait for Spectrum to resolve it (usually 1-4 hours)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Modem and Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the <strong>router</strong> power cord</li>
            <li>Unplug the <strong>modem</strong> power cord</li>
            <li>Wait <strong>60 seconds</strong> with both unplugged</li>
            <li>Plug <strong>modem back in first</strong> — wait for Online light to go solid</li>
            <li>Then plug in the <strong>router</strong> — wait for blue light</li>
            <li>Total wait: <strong>5-7 minutes</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Inspect and Reseat Coaxial Cable</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Disconnect the coaxial cable from the <strong>modem and wall jack</strong></li>
            <li>Check for <strong>bent center pin</strong> — this prevents proper signal</li>
            <li>Look for <strong>green corrosion</strong> on connectors — replace if corroded</li>
            <li>Reconnect and ensure <strong>finger-tight</strong> on both ends</li>
            <li><strong>Remove splitters</strong> temporarily — connect directly to wall</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Ethernet Cable (Separate Modem/Router)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you have a separate Spectrum modem and router:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check the <strong>Ethernet cable</strong> connecting modem to router</li>
            <li>Try a <strong>different Ethernet cable</strong></li>
            <li>Ensure it&apos;s plugged into the <strong>WAN/Internet port</strong> on the router</li>
            <li>If modem&apos;s Online light is solid but router is red — the issue is the router or cable between them</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Modem Signal Levels</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect a computer to modem via <strong>Ethernet</strong></li>
            <li>Open browser → go to <strong>192.168.100.1</strong></li>
            <li>Check <strong>Downstream Power</strong>: should be -7 to +7 dBmV</li>
            <li>Check <strong>Upstream Power</strong>: should be 38-48 dBmV</li>
            <li>If out of range, the issue is the <strong>cable signal</strong> — contact Spectrum for a tech visit</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Factory Reset (Last Resort)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Find the <strong>reset pinhole</strong> on the back of the router</li>
            <li>Press with a paperclip for <strong>15 seconds</strong></li>
            <li>Wait <strong>10-15 minutes</strong> for full restart and re-registration</li>
          </ol>
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-8">⚠️ This erases your WiFi name and password. Check the sticker on the device for default credentials after reset.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Contact Spectrum for Equipment Replacement</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Call <strong>1-833-267-6094</strong> and describe the red light issue</li>
            <li>Ask them to <strong>send a refresh signal</strong> from their end</li>
            <li>If the modem is 3+ years old, request a <strong>free replacement</strong></li>
            <li>Ask for the latest <strong>DOCSIS 3.1 modem</strong> model</li>
            <li>If they suspect an outside line issue, schedule a <strong>free technician visit</strong></li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Spectrum Router Still Showing Red Light?</h3>
            <p className="mt-2 text-red-200 max-w-lg mx-auto">Our certified technicians can diagnose your Spectrum connection remotely and fix the issue.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/spectrum-internet-not-working", title: "Spectrum Internet Fix", desc: "Full Spectrum internet troubleshooting." },
                { href: "/spectrum-router-not-working", title: "Spectrum Router Fix", desc: "Fix all Spectrum router issues." },
                { href: "/spectrum-router-red-light-blinking", title: "Spectrum Red Light Blinking", desc: "Fix blinking red light pattern." },
                { href: "/router-red-light-blinking-fix", title: "Router Red Light Fix", desc: "General router red light guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-red-700 dark:text-red-400 group-hover:text-red-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
