import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Comcast Router Not Working? 9 Fixes That Actually Work (2026)",
  description: "Comcast router not working? Fix Xfinity xFi gateway issues, blinking lights, no internet, slow speeds, and connection drops with our 2026 step-by-step guide.",
  alternates: { canonical: "/comcast-router-not-working" },
  openGraph: { title: "Comcast Router Not Working — 9 Fixes", description: "Fix Comcast Xfinity router issues fast.", type: "article", url: "https://techsupport4.com/comcast-router-not-working" },
  twitter: { card: "summary_large_image", title: "Comcast Router Fix | TechSupport4", description: "9 fixes for Comcast Xfinity router not working." },
};

const faqs = [
  { q: "Why is my Comcast router not working?", a: "Common causes include: firmware updates in progress (lights blinking), overheating (especially the XB7/XB8 gateways), coaxial cable issues, area outage, billing/account suspension, or the device needs a factory reset. Check the Xfinity app for outage alerts and your account status first." },
  { q: "How do I restart my Comcast Xfinity router?", a: "Unplug the power cord from the back of the gateway, wait 60 seconds, then plug it back in. Wait 5-10 minutes for full reboot—the xFi gateway takes longer than standard routers. You can also restart via the Xfinity app under 'Internet' → 'Restart Gateway'." },
  { q: "What do the lights on my Xfinity gateway mean?", a: "Solid white = connected and working. Blinking white = starting up. Solid red = no internet. Blinking orange = firmware updating (do NOT unplug). Solid blue = WPS mode active. No light = no power. If it stays solid red for over 15 minutes after restart, call Comcast." },
  { q: "Should I use my own router instead of the Comcast gateway?", a: "Yes, you can save $15/month by using your own DOCSIS 3.1 modem (like Arris SB8200) and a separate WiFi router. This eliminates the xFi gateway rental fee and often improves performance. You'll need to activate your own modem by calling Comcast." },
  { q: "Why does my Comcast router keep disconnecting?", a: "Frequent disconnections usually indicate: overheating (ensure ventilation), signal issues (check coaxial connections), too many devices (xFi gateway handles 50-150 devices), or upstream noise on the cable line. Check signal levels at 10.0.0.1 → Connection → XFINITY Network." },
];

export default function ComcastRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Comcast Router Not Working — 9 Fixes", description: "Complete Comcast Xfinity router troubleshooting guide.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Comcast Xfinity</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Comcast Xfinity Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Comcast Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">9 proven fixes for your Comcast Xfinity gateway — xFi problems, blinking lights, no internet, and slow connections. Common in California, Illinois &amp; Texas users.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>13 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Comcast Xfinity provides internet through <strong>xFi gateways</strong> — combination modem/router devices. The current models (XB7, XB8) are DOCSIS 3.1 gateways that handle both your cable modem and WiFi. When they stop working, you lose everything at once.</p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
            <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">⚡ Quick Comcast Fix Checklist</p>
            <ol className="text-blue-700 dark:text-blue-300 text-sm space-y-1 list-decimal pl-5">
              <li>Check Xfinity Status Center for area outages</li>
              <li>Look at gateway light — solid red means no connection</li>
              <li>Unplug gateway for 60 seconds, replug</li>
              <li>Check coaxial cable connection (finger tight)</li>
              <li>Restart via Xfinity app if physical restart doesn&apos;t help</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Xfinity Gateway Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Action</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Solid White</td><td className="p-3">Connected, working normally</td><td className="p-3">No action needed</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Blinking White</td><td className="p-3">Starting up / connecting</td><td className="p-3">Wait 5-10 minutes</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Solid Red</td><td className="p-3">No internet connection</td><td className="p-3">Restart gateway, check coax</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Blinking Orange</td><td className="p-3">Firmware updating</td><td className="p-3">DO NOT unplug — wait 20 min</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Solid Blue</td><td className="p-3">WPS pairing mode</td><td className="p-3">Press WPS button to cancel</td></tr>
                <tr><td className="p-3">No Light</td><td className="p-3">No power</td><td className="p-3">Check power cable and outlet</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Comcast Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open the <strong>Xfinity App</strong> → check outage alerts</li>
            <li>Visit <strong>xfinity.com/support/status</strong></li>
            <li>Check <a href="https://downdetector.com/status/comcast-xfinity/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector for Xfinity</a></li>
            <li>Text &quot;OUTAGE&quot; to <strong>266278</strong> for automated status</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart the Xfinity Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the power cord from the <strong>back of the gateway</strong></li>
            <li>Wait <strong>60 seconds</strong> (this clears the cache)</li>
            <li>Plug back in firmly</li>
            <li>Wait <strong>5-10 minutes</strong> — xFi gateways take longer to boot than standard routers</li>
            <li>Light should go: <strong>blinking white → solid white</strong></li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 Alternative: Open Xfinity app → Internet → Restart Gateway. This does a software restart which is sometimes more thorough.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check &amp; Reseat Coaxial Cable</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The coaxial cable is the <strong>thick cable with a screw-on connector</strong></li>
            <li>Unscrew it from the gateway, inspect for <strong>bent pins or corrosion</strong></li>
            <li>Screw it back on <strong>finger-tight</strong> (don&apos;t use pliers)</li>
            <li>Check the <strong>wall connection</strong> too — both ends matter</li>
            <li>If you have a <strong>splitter</strong>, try connecting directly to the wall without it</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Signal Levels</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open browser and go to <strong>10.0.0.1</strong></li>
            <li>Login (default: admin / password)</li>
            <li>Navigate to <strong>Connection → XFINITY Network</strong></li>
            <li>Check downstream power: should be <strong>-7 to +7 dBmV</strong></li>
            <li>Check upstream power: should be <strong>37 to 55 dBmV</strong></li>
            <li>If outside range, it&apos;s a <strong>signal issue</strong> — Comcast needs to send a tech</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Account Status</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log in at <strong>xfinity.com/billing</strong></li>
            <li>Check for <strong>past-due balance</strong> or service suspension</li>
            <li>Comcast suspends service for balances over <strong>60 days past due</strong></li>
            <li>If suspended, pay the balance and service restores within <strong>30 minutes</strong></li>
            <li>Check if your plan has <strong>data cap overage</strong> (1.2 TB/month)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Address Overheating</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The XB7 and XB8 gateways are known to <strong>run hot</strong></li>
            <li>Ensure <strong>2+ inches of clearance</strong> on all sides</li>
            <li>Don&apos;t place in enclosed cabinets or near heat sources</li>
            <li>Position <strong>vertically</strong> for best ventilation</li>
            <li>If it&apos;s hot to touch and shutting down, let it cool for <strong>30 minutes unplugged</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Flush DNS &amp; Reset Network</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-8 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows — Run as Administrator</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">netsh winsock reset</p>
            <p className="text-slate-800 dark:text-slate-200">netsh int ip reset</p>
            <p className="text-slate-700 dark:text-slate-300 mt-3"><span className="text-green-600 dark:text-green-400"># Mac</span></p>
            <p className="text-slate-800 dark:text-slate-200">sudo dscacheutil -flushcache</p>
            <p className="text-slate-800 dark:text-slate-200">sudo killall -HUP mDNSResponder</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset the Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Find the <strong>reset button</strong> on the back of the gateway (small pinhole)</li>
            <li>Press and hold with a paperclip for <strong>30 seconds</strong></li>
            <li>Release when all lights blink</li>
            <li>Wait <strong>10-15 minutes</strong> for full re-provisioning</li>
            <li>Reconnect all devices with your WiFi password</li>
          </ol>
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-8">⚠️ Factory reset erases all custom settings — WiFi name, password, port forwarding, etc. Use this as a last resort.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Comcast Support</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Call <strong>1-800-XFINITY (1-800-934-6489)</strong></li>
            <li>Use <strong>Xfinity Assistant</strong> in the app for 24/7 chat</li>
            <li>Request a <strong>signal test</strong> from their end</li>
            <li>If signal levels are bad, request a <strong>free technician visit</strong></li>
            <li>Ask about a <strong>gateway replacement</strong> if your device is over 3 years old</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
            <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">🌍 Coverage Note</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">Comcast Xfinity serves <strong>40+ states</strong> including California, Illinois, Texas, Florida, Pennsylvania, and Georgia. Most gateway issues are reported in high-density areas like Chicago, Houston, San Francisco, and Philadelphia.</p>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Comcast Router Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our certified technicians can diagnose and fix your Xfinity gateway remotely in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/comcast-internet-not-working", title: "Comcast Internet Fix", desc: "Fix Xfinity internet issues." },
                { href: "/xfinity-router-not-working", title: "Xfinity Router Fix", desc: "Xfinity-specific router guide." },
                { href: "/xfinity-internet-not-working", title: "Xfinity Internet Fix", desc: "Xfinity internet troubleshooting." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
