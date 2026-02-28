import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Spectrum Internet Not Working? 9 Fixes That Work (2026 Guide)",
  description: "Spectrum internet not working? Fix no connection, slow speeds, red light, and outage issues on Charter Spectrum with our step-by-step troubleshooting guide.",
  alternates: { canonical: "/spectrum-internet-not-working" },
  openGraph: { title: "Spectrum Internet Not Working — 9 Proven Fixes", description: "Fix Spectrum internet issues fast.", type: "article", url: "https://techsupport4.com/spectrum-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Spectrum Internet Fix | TechSupport4", description: "9 fixes for Spectrum internet not working." },
};

const faqs = [
  { q: "Why is my Spectrum internet not working?", a: "Common causes: area outage (check spectrum.net/support/status), modem needs restart, coaxial cable loose or damaged, overdue account balance, DNS issues, or modem hardware failure. Spectrum uses DOCSIS 3.1 modems — if yours is older, it may need replacement." },
  { q: "How do I check if Spectrum has an outage?", a: "Log into your Spectrum account at spectrum.net → check for outage alerts, use the My Spectrum app, or check downdetector.com/status/spectrum. You can also text OUTAGE to 97000 from your registered mobile number." },
  { q: "How do I restart my Spectrum modem properly?", a: "Unplug the power cord from the modem AND router (if separate). Wait 60 seconds. Plug in the modem first, wait until all lights stabilize (2-3 min). Then plug in the router and wait another 2-3 minutes. Don't press the reset button — that's a factory reset." },
  { q: "What do Spectrum router lights mean?", a: "Solid blue = working normally. Blinking blue = booting or connecting. Red = no internet signal (outage or cable issue). Blue/red alternating = firmware updating (wait 20 min). No lights = no power. Blinking = data transferring (normal)." },
  { q: "Can I use my own modem with Spectrum?", a: "Yes! Spectrum doesn't charge a modem rental fee, but their provided modem may be outdated. Approved modems: Motorola MB8600, ARRIS SB8200, Netgear CM1000. Check spectrum.net/support/internet/compliant-modems-702702 for the full approved list." },
];

export default function SpectrumInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Spectrum Internet Not Working — 9 Proven Fixes", description: "Complete guide to fix Spectrum internet issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-indigo-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Spectrum</span>
            </nav>
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-indigo-500/30">Charter Spectrum Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Spectrum Internet Not Working?</h1>
            <p className="mt-4 text-indigo-200 text-lg max-w-2xl">9 proven fixes to restore your Charter Spectrum internet — outages, modem issues, slow speeds, and red light problems. Common in New York, California &amp; Texas users.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-indigo-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-indigo-400" /><span>13 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Spectrum (formerly Charter Communications) serves over 30 million customers across 41 states. When your Spectrum internet goes down, here&apos;s a systematic approach to get it back — from the simplest checks to advanced fixes.</p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-8">
            <p className="text-indigo-800 dark:text-indigo-300 font-semibold mb-2">⚡ Quick Fix Checklist</p>
            <ol className="text-indigo-700 dark:text-indigo-300 text-sm space-y-1 list-decimal pl-5">
              <li>Check Spectrum outage map</li>
              <li>Restart modem and router (unplug 60 sec)</li>
              <li>Inspect coaxial cable connections</li>
              <li>Verify account is in good standing</li>
              <li>Flush DNS and reset network adapter</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Why Spectrum Internet Stops Working</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Area outage</strong> — Spectrum infrastructure issue affecting your neighborhood</li>
            <li><strong>Modem needs restart</strong> — Memory overload or firmware glitch</li>
            <li><strong>Coaxial cable loose</strong> — Most common physical cause</li>
            <li><strong>Account issue</strong> — Unpaid bill or service change pending</li>
            <li><strong>DNS failure</strong> — Spectrum DNS servers unresponsive</li>
            <li><strong>Signal degradation</strong> — Splitters, long cable runs, or damaged cables</li>
            <li><strong>Modem end of life</strong> — Spectrum replaces modems every 3-5 years</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check the Spectrum Outage Map</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Open <strong>My Spectrum app</strong> → check for outage banner</li>
            <li>Visit <strong>spectrum.net/support/status</strong></li>
            <li>Check <a href="https://downdetector.com/status/spectrum/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector for Spectrum</a></li>
            <li>Text <strong>OUTAGE to 97000</strong> from your registered phone</li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 Spectrum typically resolves local outages within 1-4 hours. Wider outages from fiber cuts or storms may take longer.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Your Modem &amp; Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Spectrum provides a separate modem and router (or a combined gateway). Restart both properly:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug</strong> the router first, then the modem</li>
            <li>Wait <strong>60 seconds</strong> with both unplugged</li>
            <li>Plug in the <strong>modem first</strong> — wait until Online light is solid</li>
            <li>Then plug in the <strong>router</strong> — wait for WiFi light</li>
            <li>Total wait: <strong>5-7 minutes</strong> for everything to stabilize</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Inspect Coaxial Cable</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check the coaxial cable from <strong>wall outlet to modem</strong></li>
            <li>Ensure both connectors are <strong>finger-tight</strong></li>
            <li>Look for <strong>bent center pins</strong> in the connector</li>
            <li>Replace any <strong>corroded or damaged cables</strong></li>
            <li>Remove <strong>unnecessary splitters</strong> — each splitter weakens signal by 3.5dB</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Spectrum Account Status</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>spectrum.net</strong> or use the <strong>My Spectrum app</strong></li>
            <li>Verify no <strong>past-due balance</strong></li>
            <li>Check if there&apos;s a <strong>pending service change</strong> or upgrade</li>
            <li>Confirm your <strong>modem MAC address</strong> is registered</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Flush DNS Cache</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows (Run as Admin)</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /release</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /renew</p>
            <p className="text-slate-800 dark:text-slate-200">netsh winsock reset</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Switch DNS to <strong>Google (8.8.8.8)</strong> or <strong>Cloudflare (1.1.1.1)</strong> for more reliable resolution than Spectrum&apos;s default DNS.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check Modem Signal Levels</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open a browser and go to <strong>192.168.100.1</strong></li>
            <li>Check <strong>Downstream Power</strong>: should be between -7 and +7 dBmV</li>
            <li>Check <strong>Upstream Power</strong>: should be between 38 and 48 dBmV</li>
            <li>Check <strong>SNR (Signal-to-Noise)</strong>: should be above 33 dB</li>
            <li>If values are out of range, you likely have a <strong>cable or splitter issue</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Update Network Adapter Drivers</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + X → Device Manager</strong></li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your WiFi adapter → <strong>Update driver</strong></li>
            <li>Choose <strong>&quot;Search automatically&quot;</strong></li>
            <li>Restart your computer after updating</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset Modem (Last Resort)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Find the <strong>reset pinhole</strong> on the back of the Spectrum modem</li>
            <li>Press and hold with a paperclip for <strong>15 seconds</strong></li>
            <li>Wait <strong>10-15 minutes</strong> for modem to reactivate</li>
            <li>The modem will automatically register with Spectrum&apos;s network</li>
          </ol>
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-8">⚠️ A factory reset erases custom settings. Your WiFi name and password will revert to defaults printed on the router label.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Spectrum or Replace Equipment</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Call <strong>1-833-267-6094</strong> (Spectrum Internet Support)</li>
            <li>Use <strong>spectrum.net/contact-us</strong> live chat</li>
            <li>Visit a <strong>Spectrum store</strong> for equipment swap (free)</li>
            <li>Ask for a <strong>technician visit</strong> if the issue is on the outside line</li>
          </ul>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Spectrum provides free equipment — no rental fees. If your modem is 3+ years old, request a newer DOCSIS 3.1 model.</p>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
            <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">🌍 Spectrum Coverage Areas</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">Spectrum internet issues are most commonly reported in <strong>New York, California, Texas, Ohio, Florida, Wisconsin, and North Carolina</strong>. Peak outage times are typically 6-10 PM during heavy usage periods.</p>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-indigo-700 to-indigo-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Spectrum Internet Still Not Working?</h3>
            <p className="mt-2 text-indigo-200 max-w-lg mx-auto">Our certified technicians can diagnose and fix your Spectrum connection remotely in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/spectrum-router-not-working", title: "Spectrum Router Fix", desc: "Fix Spectrum router issues." },
                { href: "/spectrum-router-red-light", title: "Spectrum Red Light", desc: "Fix red light on Spectrum router." },
                { href: "/spectrum-router-not-connecting-to-internet", title: "Spectrum No Connection", desc: "Fix connection drops." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "General internet troubleshooting." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
