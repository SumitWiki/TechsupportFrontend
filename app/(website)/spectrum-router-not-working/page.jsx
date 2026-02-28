import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Spectrum Router Not Working? Complete Fix Guide (2026)",
  description: "Spectrum router or modem not working? Fix red/blue light issues, no internet, slow WiFi, and connection drops on Spectrum (Charter) step by step.",
  alternates: { canonical: "/spectrum-router-not-working" },
  openGraph: { title: "Spectrum Router Not Working — Complete Fix Guide", description: "Fix all Spectrum router issues.", type: "article", url: "https://techsupport4.com/spectrum-router-not-working" },
  twitter: { card: "summary_large_image", title: "Spectrum Router Fix | TechSupport4", description: "Spectrum router not working — complete fix guide." },
};

const faqs = [
  { q: "Why is my Spectrum router not working?", a: "Common causes: (1) Spectrum outage in your area, (2) Modem and router need restarting, (3) Coaxial cable loose or damaged, (4) Modem not syncing with Spectrum network (red Online light), (5) Router overheating, (6) Account issue, (7) Equipment needs replacement." },
  { q: "What do the lights on Spectrum modem and router mean?", a: "Spectrum Modem: Online light solid blue = connected, blinking blue = syncing, red = no signal. Power light solid = on. Spectrum Router: WiFi light solid = broadcasting, off = WiFi disabled. If Online light is red, the modem can't reach Spectrum's network — check cable and call Spectrum." },
  { q: "How do I restart my Spectrum router and modem?", a: "Step 1: Unplug BOTH modem and router. Step 2: Wait 60 seconds. Step 3: Plug in MODEM only → wait 3-5 minutes until Online light is solid blue. Step 4: Plug in ROUTER → wait 2-3 minutes. This order matters — modem must connect first." },
  { q: "Should I use Spectrum's router or buy my own?", a: "Spectrum provides a free modem but charges $5/month for the WiFi router. You can buy your own router and return Spectrum's to save money. Any WiFi 6 router works (TP-Link AX1800, Netgear R6700). Keep Spectrum's modem — it's free and pre-configured." },
  { q: "How do I contact Spectrum for router issues?", a: "Call 1-833-267-6094, use the My Spectrum app (Support → chat), or visit spectrum.net/support. The My Spectrum app can also run diagnostics and restart your equipment remotely." },
];

export default function SpectrumRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Spectrum Router Not Working — Complete Fix Guide", description: "Fix all Spectrum router and modem issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Spectrum</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Spectrum / Charter Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Spectrum Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Complete guide to fix Spectrum modem and router — light issues, no internet, slow WiFi, and connection drops.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>12 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Spectrum (Charter Communications) uses a <strong>separate modem and router</strong> setup — unlike Xfinity&apos;s all-in-one gateway. This means you need to troubleshoot both devices. Here&apos;s how to fix every common Spectrum internet issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Spectrum Modem Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Color / State</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Online</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Blue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Connected to Spectrum — working</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Online</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking Blue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Syncing — wait 5-10 min</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Online</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Red / Off</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No signal — check cable, call Spectrum</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Blue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Powered on</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Send/Receive</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Normal — data transferring</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Spectrum Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>My Spectrum app</strong> or visit <strong>spectrum.net/support</strong></li>
            <li>Check for <strong>service alerts</strong> in your area</li>
            <li>Check <strong>downdetector.com/status/spectrum</strong></li>
            <li>If outage confirmed, wait for Spectrum to resolve it</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Modem and Router (Correct Order)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>both modem AND router</strong></li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in <strong>MODEM only</strong> → wait until Online light is <strong>solid blue</strong> (3-5 minutes)</li>
            <li>Then plug in <strong>ROUTER</strong> → wait <strong>2-3 minutes</strong></li>
            <li>Test internet on a device</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8"><strong>Order matters:</strong> The modem must fully connect to Spectrum&apos;s network before the router tries to get internet from it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check All Cable Connections</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Coaxial cable</strong>: Wall outlet → Modem (finger-tight at both ends)</li>
            <li><strong>Ethernet cable</strong>: Modem → Router WAN port (check for damage)</li>
            <li><strong>Power cables</strong>: Both devices firmly plugged in</li>
            <li>Try a <strong>different Ethernet cable</strong> between modem and router</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Test Modem Directly</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Disconnect the router</li>
            <li>Connect a <strong>computer directly to the modem</strong> with Ethernet</li>
            <li>Restart the modem → wait 3-5 min</li>
            <li>If internet works → <strong>router is the problem</strong></li>
            <li>If no internet → <strong>modem or Spectrum signal issue</strong> — call Spectrum</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update Router Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If using Spectrum&apos;s router, it updates automatically. If using your own:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Access your router admin panel (usually 192.168.1.1)</li>
            <li>Go to <strong>Administration → Firmware Update</strong></li>
            <li>Check for updates and install</li>
            <li>Restart the router after update</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Change WiFi Channel</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In router settings, go to <strong>Wireless Settings</strong></li>
            <li>Change WiFi channel from <strong>Auto to a specific one</strong> (1, 6, or 11 for 2.4 GHz)</li>
            <li>For 5 GHz, try channels <strong>36, 40, 44, or 48</strong></li>
            <li>Use a <strong>WiFi analyzer app</strong> to find the least congested channel</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Request Equipment Replacement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If the modem is old or keeps cycling, call Spectrum at <strong>1-833-267-6094</strong> or visit a Spectrum store. Request a <strong>DOCSIS 3.1 modem</strong> for best performance. The modem is free — they&apos;ll swap it on the spot at the store.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check Splitter Quality</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If your coaxial line has splitters (for TV and internet), each split weakens the signal. Remove unnecessary splitters, or install a <strong>1 GHz MoCA-compatible splitter</strong>. Connect the modem to the <strong>-3.5 dB leg</strong> (strongest signal) of the splitter.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Spectrum Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can troubleshoot Spectrum modem and router issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/spectrum-router-red-light-blinking", title: "Spectrum Red Light", desc: "Fix red light blinking." },
                { href: "/spectrum-router-not-connecting-to-internet", title: "Spectrum No Internet", desc: "Fix Spectrum connection issues." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
