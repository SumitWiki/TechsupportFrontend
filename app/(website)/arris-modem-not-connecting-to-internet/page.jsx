import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Arris Modem Not Connecting to Internet? Fix Guide (2026)",
  description: "Arris modem not connecting to internet? Fix blinking lights, no sync, T3/T4 timeouts, and activation issues on Arris SB, TM, and BGW models step by step.",
  alternates: { canonical: "/arris-modem-not-connecting-to-internet" },
  openGraph: { title: "Arris Modem Not Connecting to Internet? Fix Guide", description: "Fix Arris modem connection failures.", type: "article", url: "https://techsupport4.com/arris-modem-not-connecting-to-internet" },
  twitter: { card: "summary_large_image", title: "Fix Arris Modem | TechSupport4", description: "Arris modem not connecting — step-by-step fix." },
};

const faqs = [
  { q: "Why is my Arris modem not connecting to internet?", a: "Common causes: (1) Coaxial cable loose or damaged, (2) ISP outage in your area, (3) Modem not activated with ISP, (4) T3/T4 timeout errors from signal issues, (5) Firmware needs update from ISP side, (6) DNS failure, (7) Modem overheating. Check ISP status page first." },
  { q: "What do Arris modem lights mean?", a: "Power: solid = on. Receive (DS): solid = locked on downstream, blinking = searching. Send (US): solid = locked on upstream, blinking = searching. Online: solid = internet connected, blinking = authenticating. WiFi: solid = WiFi active. If Online light won't go solid, call ISP." },
  { q: "How do I reset my Arris modem?", a: "Soft reset: unplug power for 60 seconds, plug back in. Factory reset: hold the reset button (pinhole on back) for 15 seconds. Note: Factory reset may remove ISP configuration — you may need to call ISP to reactivate. Try soft reset first." },
  { q: "Arris modem DS light blinking — what does it mean?", a: "DS (downstream) light blinking means the modem is trying to lock onto the downstream signal from your ISP. This is normal during boot (takes 2-5 minutes). If it blinks for 10+ minutes: check coax cable, try different coax outlet, check for ISP outage, or call ISP — signal may be too weak." },
  { q: "How do I check Arris modem signal levels?", a: "Open browser → type 192.168.100.1 → Status → Connection. Check: Downstream Power should be -7 to +7 dBmV, SNR should be 33+ dB. Upstream Power should be 38-48 dBmV. If values are out of range, call ISP — they can adjust signal levels remotely or send a technician." },
];

export default function ArrisModemNotConnecting() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Arris Modem Not Connecting to Internet — Fix Guide", description: "Fix Arris modem connection failures.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-23", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Arris Modem</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Modem Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Arris Modem Not Connecting to Internet? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix internet failures on Arris SurfBoard, TM, and BGW gateway modems — covers signal issues, activation, LED troubleshooting, and ISP configuration.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Arris is one of the most common modem brands — used by Xfinity, Spectrum, Cox, and other cable ISPs. When your Arris modem stops connecting to the internet, the LED lights on the front tell you exactly what&apos;s wrong. Here&apos;s how to diagnose and fix the issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Understanding Arris Modem LEDs</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="px-4 py-3 text-left font-semibold">LED</th><th className="px-4 py-3 text-left font-semibold">Solid</th><th className="px-4 py-3 text-left font-semibold">Blinking</th><th className="px-4 py-3 text-left font-semibold">Off</th></tr></thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3 font-medium">Power</td><td className="px-4 py-3">On</td><td className="px-4 py-3">Booting</td><td className="px-4 py-3">No power</td></tr>
                <tr><td className="px-4 py-3 font-medium">DS (Receive)</td><td className="px-4 py-3">Locked ✓</td><td className="px-4 py-3">Scanning</td><td className="px-4 py-3">No signal</td></tr>
                <tr><td className="px-4 py-3 font-medium">US (Send)</td><td className="px-4 py-3">Locked ✓</td><td className="px-4 py-3">Ranging</td><td className="px-4 py-3">No signal</td></tr>
                <tr><td className="px-4 py-3 font-medium">Online</td><td className="px-4 py-3">Connected ✓</td><td className="px-4 py-3">Authenticating</td><td className="px-4 py-3">Not connected</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle the Modem</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the power cable from the Arris modem</li>
            <li>Wait <strong>60 seconds</strong> (this clears the modem&apos;s memory)</li>
            <li>Plug power back in</li>
            <li>Wait <strong>3-5 minutes</strong> for all lights to go solid</li>
            <li>Expected sequence: Power → DS → US → Online (all should become solid)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check Coaxial Cable</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Tighten the coaxial cable connection on both the modem and wall outlet — hand-tight plus a quarter turn. Look for bent center pins, kinks, or damage. Try a different coax cable if available. If you have a <strong>coax splitter</strong>, try connecting the modem directly to the wall (bypassing the splitter) — splitters reduce signal strength.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check for ISP Outage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Before troubleshooting further, check if your ISP has an outage. Use your phone (cellular data) to visit your ISP&apos;s status page or app: Xfinity Status Center, Spectrum Outage Info, Cox Service Updates. Also check downdetector.com. If there&apos;s an outage, wait — nothing you do will fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Signal Levels</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Open browser → <strong>192.168.100.1</strong> → Status. Check downstream power (-7 to +7 dBmV ideal), SNR (33+ dB), and upstream power (38-48 dBmV). If values are out of range, your ISP needs to fix the signal — call their technical support and mention your specific dBmV readings.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Verify Modem Activation</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If you recently got a new Arris modem or replaced an old one, it needs to be <strong>activated with your ISP</strong>. Call your ISP with the modem&apos;s MAC address and serial number (on the label). They&apos;ll provision it on their network. This takes 5-15 minutes. Without activation, the Online light won&apos;t go solid.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check for T3/T4 Timeout Errors</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">In <strong>192.168.100.1 → Logs</strong>, look for T3 or T4 timeout errors. These indicate the modem is losing connection to the ISP repeatedly. Causes: damaged coax, bad splitter, ISP signal issues, or a failing modem. If you see many T3/T4 errors, this is an ISP-side issue — call them with log evidence.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset (Last Resort)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Hold reset button for <strong>15 seconds</strong>. The modem reverts to factory defaults. <strong>Warning:</strong> This may remove ISP provisioning — you might need to call ISP to reactivate. Only do this if soft resets haven&apos;t worked.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Arris Modem Still Offline?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose Arris modem issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/xfinity-router-not-working-after-reset", title: "Xfinity Router After Reset", desc: "Fix Xfinity gateway issues." },
                { href: "/spectrum-router-not-connecting-to-internet", title: "Spectrum Router Fix", desc: "Fix Spectrum connectivity." },
                { href: "/router-not-connecting-to-modem", title: "Router Not Connecting to Modem", desc: "Fix router-modem link." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete troubleshooting guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
