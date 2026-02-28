import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Cox Internet Not Working? 9 Fixes That Actually Work (2026)",
  description: "Cox internet not working? Fix no connection, slow speeds, Panoramic WiFi gateway issues, and outages with our step-by-step 2026 troubleshooting guide.",
  alternates: { canonical: "/cox-internet-not-working" },
  openGraph: { title: "Cox Internet Not Working — 9 Fixes", description: "Fix Cox internet issues fast.", type: "article", url: "https://techsupport4.com/cox-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Cox Internet Fix | TechSupport4", description: "9 fixes for Cox internet not working." },
};

const faqs = [
  { q: "Why is my Cox internet not working?", a: "Common causes: area outage (check Cox app), Panoramic WiFi gateway needs restart, coaxial cable issues, overheating, account past due, or signal problems from a damaged cable line. Cox uses DOCSIS cable technology, so the coaxial cable connection is critical." },
  { q: "How do I restart my Cox Panoramic WiFi gateway?", a: "Unplug the power cord from the back of the gateway, wait 30-60 seconds, then plug back in. Wait 5-10 minutes for it to fully reboot. You can also restart through the Cox app: My Account → Internet → Restart Equipment." },
  { q: "What do the lights on my Cox Panoramic gateway mean?", a: "Solid white = connected. Blinking white = booting up. Solid orange = limited connectivity. Blinking orange = firmware update (don't unplug). Solid red = offline/no connection. Blinking green = connecting to Cox network. If stuck on any color for 15+ minutes after restart, call Cox." },
  { q: "How fast should my Cox internet be?", a: "Cox offers plans from 100 Mbps (Essential) to 2 Gbps (Gigablast). You should get 80-90% of plan speed on Ethernet. WiFi speeds are typically 40-60% of plan speed. Run a speed test at speedtest.net using an Ethernet connection for accurate results." },
  { q: "Does Cox have a data cap?", a: "Yes, Cox has a 1.28 TB monthly data cap in most markets. If you exceed it, Cox charges $10 per additional 50 GB block (up to $100 max). You can upgrade to Unlimited data for an extra $49.99/month. Check usage in the Cox app under Internet → Data Usage." },
];

export default function CoxInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Cox Internet Not Working — 9 Fixes", description: "Complete Cox internet troubleshooting guide.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-orange-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Cox</span>
            </nav>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-orange-500/30">Cox Communications Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Cox Internet Not Working?</h1>
            <p className="mt-4 text-orange-200 text-lg max-w-2xl">9 proven fixes to restore your Cox internet — Panoramic WiFi gateway issues, outages, slow speeds, and connection drops. Common in Arizona, Virginia &amp; Louisiana users.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-orange-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-orange-400" /><span>12 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Cox Communications is a major cable ISP serving <strong>18 states</strong> across the US. If your Cox internet stops working, the issue is usually with the <strong>Panoramic WiFi gateway</strong> (combination modem/router), the coaxial cable connection, or an area outage.</p>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-5 mb-8">
            <p className="text-orange-800 dark:text-orange-300 font-semibold mb-2">⚡ Quick Cox Fix Checklist</p>
            <ol className="text-orange-700 dark:text-orange-300 text-sm space-y-1 list-decimal pl-5">
              <li>Check Cox app or cox.com for area outage</li>
              <li>Look at gateway light — solid orange or red = problem</li>
              <li>Unplug gateway for 60 seconds, replug</li>
              <li>Check coaxial cable — both ends finger-tight</li>
              <li>Run speed test on Ethernet to isolate WiFi issues</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Cox Gateway Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Action</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Solid White</td><td className="p-3">Connected, working</td><td className="p-3">No action needed</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Blinking White</td><td className="p-3">Booting up</td><td className="p-3">Wait 5-10 minutes</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Solid Orange</td><td className="p-3">Limited connection</td><td className="p-3">Restart gateway, check coax</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Blinking Orange</td><td className="p-3">Firmware updating</td><td className="p-3">DO NOT unplug — wait 20 min</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Solid Red</td><td className="p-3">Offline</td><td className="p-3">Restart, check cables, call Cox</td></tr>
                <tr><td className="p-3">Blinking Green</td><td className="p-3">Connecting to Cox</td><td className="p-3">Wait 5 minutes</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Cox Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open the <strong>Cox App</strong> → check outage notifications</li>
            <li>Visit <strong>cox.com/residential/support/check-for-outage</strong></li>
            <li>Check <a href="https://downdetector.com/status/cox-communications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector for Cox</a></li>
            <li>Call <strong>1-800-234-3993</strong> for automated outage status</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart the Panoramic Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the power cord from the <strong>back of the gateway</strong></li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug back in firmly</li>
            <li>Wait <strong>5-10 minutes</strong> for full boot</li>
            <li>Light should cycle: <strong>blinking green → blinking white → solid white</strong></li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 You can also restart via Cox app: My Account → Internet → Restart Equipment.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Coaxial Cable Connection</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The coaxial cable carries the internet signal from the wall to your gateway</li>
            <li>Unscrew from gateway, check for <strong>bent center pin or corrosion</strong></li>
            <li>Screw back <strong>finger-tight</strong></li>
            <li>Check the <strong>wall end</strong> as well</li>
            <li>Bypass any <strong>splitters</strong> — connect directly to wall outlet</li>
            <li>Try a <strong>new coaxial cable</strong> if available</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check for Overheating</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Panoramic WiFi gateways can <strong>overheat</strong> in enclosed spaces</li>
            <li>Ensure <strong>2+ inches clearance</strong> on all sides</li>
            <li>Don&apos;t stack anything on top of the gateway</li>
            <li>Keep away from <strong>direct sunlight, heaters, and electronics</strong></li>
            <li>If hot to touch, unplug for <strong>30 minutes</strong> to cool down</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Account &amp; Billing Status</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log in at <strong>cox.com/myaccount</strong></li>
            <li>Check for <strong>past-due balance</strong></li>
            <li>Cox may restrict service for overdue accounts</li>
            <li>Check <strong>data usage</strong> — Cox has a 1.28 TB monthly cap</li>
            <li>If over cap, you can still browse but speeds may be throttled</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Run Speed Test via Ethernet</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect a computer <strong>directly to gateway via Ethernet</strong></li>
            <li>Run <strong>speedtest.net</strong> or <strong>fast.com</strong></li>
            <li>Compare to your Cox plan speed</li>
            <li>If Ethernet speed is good but WiFi is slow → <strong>WiFi issue</strong></li>
            <li>If Ethernet speed is also slow → <strong>Cox-side issue</strong></li>
            <li>If under 50% of plan speed on Ethernet, call Cox for a signal check</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Flush DNS &amp; Reset Network</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-8 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows — Run as Administrator</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">netsh winsock reset</p>
            <p className="text-slate-800 dark:text-slate-200">netsh int ip reset</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /release</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /renew</p>
            <p className="text-slate-700 dark:text-slate-300 mt-3"><span className="text-green-600 dark:text-green-400"># Mac</span></p>
            <p className="text-slate-800 dark:text-slate-200">sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset the Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Find the <strong>reset button</strong> (small pinhole on the back)</li>
            <li>Press and hold with a paperclip for <strong>10-15 seconds</strong></li>
            <li>Release when lights start blinking</li>
            <li>Wait <strong>10-15 minutes</strong> for full reset and re-provisioning</li>
          </ol>
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-8">⚠️ Factory reset erases WiFi names, passwords, and all custom settings. Last resort only.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Cox Support</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Call <strong>1-800-234-3993</strong></li>
            <li>Use <strong>Cox App</strong> chat for 24/7 assistance</li>
            <li>Visit a <strong>Cox Solutions Store</strong> for in-person help</li>
            <li>Request a <strong>signal test</strong> or <strong>technician visit</strong></li>
            <li>Ask about a <strong>gateway replacement</strong> if your current one is old or faulty</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
            <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">🌍 Cox Coverage Areas</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">Cox Communications serves <strong>Arizona, Arkansas, California, Connecticut, Florida, Georgia, Idaho, Iowa, Kansas, Louisiana, Massachusetts, Nebraska, Nevada, North Carolina, Ohio, Oklahoma, Rhode Island, and Virginia.</strong> Top outage cities include Phoenix, Las Vegas, Baton Rouge, and Virginia Beach.</p>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-orange-700 to-orange-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Cox Internet Still Not Working?</h3>
            <p className="mt-2 text-orange-200 max-w-lg mx-auto">Our certified technicians can diagnose and fix your Cox connection remotely in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-orange-700 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/cox-router-not-working", title: "Cox Router Fix", desc: "Fix Cox Panoramic WiFi router issues." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "General internet troubleshooting." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "Fix WiFi connectivity issues." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-orange-700 dark:text-orange-400 group-hover:text-orange-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
