import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Verizon Fios Internet Not Working? 9 Fixes That Work (2026)",
  description: "Verizon Fios internet not working? Fix no connection, slow fiber speeds, ONT issues, and router problems with our step-by-step 2026 troubleshooting guide.",
  alternates: { canonical: "/verizon-fios-internet-not-working" },
  openGraph: { title: "Verizon Fios Internet Not Working — 9 Fixes", description: "Fix Verizon Fios internet issues fast.", type: "article", url: "https://techsupport4.com/verizon-fios-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Verizon Fios Internet Fix | TechSupport4", description: "9 fixes for Fios internet not working." },
};

const faqs = [
  { q: "Why is my Verizon Fios internet not working?", a: "Common causes: ONT (Optical Network Terminal) needs restart, area fiber outage, Ethernet cable between ONT and router loose, router firmware issue, account suspension, or the ONT battery backup is depleted and there's a power issue. Check the My Fios app for outage alerts first." },
  { q: "What is the ONT and how do I restart it?", a: "The ONT (Optical Network Terminal) is the box usually in your basement or garage where the fiber optic cable enters your home. To restart: unplug the power cord (and battery if present), wait 60 seconds, plug back in. Wait 5 minutes for it to fully boot. The ONT converts fiber optic light signals into Ethernet/coax for your router." },
  { q: "What do the lights on my Fios ONT mean?", a: "Power = solid green is good. Battery = green (charged), red (low). Network = solid green (connected), off (no fiber signal, call Verizon). Internet = solid green (active connection). If Network light is off, there's likely a fiber cut or area outage." },
  { q: "How fast should Verizon Fios actually be?", a: "Fios plans range from 300 Mbps to 2 Gbps. You should get 80-95% of your plan speed on Ethernet. WiFi speeds are typically 50-70% of the plan speed depending on distance and interference. Run a speed test at speedtest.net connected via Ethernet to get accurate results." },
  { q: "Should I use the Verizon Fios router or my own?", a: "The Verizon Fios CR1000A (WiFi 6E) is actually very good. But if you prefer your own, you can connect any router to the ONT's Ethernet port. You'll need to release the DHCP lease first: disconnect the Verizon router, connect yours, and it should get an IP within 2-3 minutes." },
];

export default function VerizonFiosInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Verizon Fios Internet Not Working — 9 Fixes", description: "Complete guide to fix Verizon Fios internet.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-red-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Verizon Fios</span>
            </nav>
            <span className="inline-block bg-red-500/20 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-red-500/30">Verizon Fios Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Verizon Fios Internet Not Working?</h1>
            <p className="mt-4 text-red-200 text-lg max-w-2xl">9 proven fixes to restore your Verizon Fios fiber internet — ONT issues, router problems, slow speeds, and outages. Common in New York, New Jersey &amp; Mid-Atlantic users.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-red-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-red-400" /><span>14 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Verizon Fios uses fiber-optic technology to deliver some of the fastest home internet speeds available (up to 2 Gbps). Unlike cable internet, Fios has two key components — the <strong>ONT</strong> (Optical Network Terminal) and your <strong>router</strong>. When Fios stops working, you need to troubleshoot both.</p>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 mb-8">
            <p className="text-red-800 dark:text-red-300 font-semibold mb-2">⚡ Quick Fios Fix Checklist</p>
            <ol className="text-red-700 dark:text-red-300 text-sm space-y-1 list-decimal pl-5">
              <li>Check My Fios app for outage alerts</li>
              <li>Restart router AND ONT (60 second wait)</li>
              <li>Check Ethernet cable from ONT to router</li>
              <li>Verify ONT lights (Network light should be solid green)</li>
              <li>Run speed test on Ethernet to isolate WiFi vs fiber issues</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Understanding Your Fios Setup</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Fios internet has two critical devices:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>ONT (Optical Network Terminal)</strong> — Usually in your basement, garage, or outside wall. Converts fiber optic signals to Ethernet.</li>
            <li><strong>Router (CR1000A/G3100)</strong> — Connects to ONT via Ethernet and provides WiFi to your home.</li>
            <li>The ONT may have a <strong>battery backup</strong> — if that battery is dead and power goes out, you lose internet.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Fios Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>My Fios app</strong> → check for outage alerts</li>
            <li>Visit <strong>verizon.com/support</strong></li>
            <li>Check <a href="https://downdetector.com/status/verizon-fios/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector for Fios</a></li>
            <li>Call <strong>1-800-VERIZON (1-800-837-4966)</strong> for automated outage status</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Your Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the router power cord</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug back in and wait <strong>5 minutes</strong> for full boot</li>
            <li>Check if the WiFi light turns <strong>solid white</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Restart the ONT</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">This is the most effective Fios fix that most people skip:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Locate your ONT (usually basement, garage, or utility closet)</li>
            <li>Unplug the <strong>power cord</strong> from the ONT</li>
            <li>If there&apos;s a <strong>battery backup</strong>, disconnect that too</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Reconnect battery first, then power cord</li>
            <li>Wait <strong>5 minutes</strong> for ONT to fully reconnect to Verizon&apos;s network</li>
            <li>Check that <strong>Network light</strong> turns solid green</li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 The ONT restart is the single most effective fix for Fios issues — it re-establishes the fiber connection to Verizon&apos;s central office.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Ethernet Cable (ONT to Router)</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The Ethernet cable from <strong>ONT to router</strong> is critical</li>
            <li>Check both ends — ensure solid <strong>click</strong> when inserted</li>
            <li>Try a <strong>different Ethernet cable</strong> (preferably Cat 6)</li>
            <li>Make sure it&apos;s plugged into the <strong>WAN port</strong> on the router</li>
            <li>If using a long cable run, check for <strong>damage or kinks</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check ONT Lights</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Status</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Action</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Power</td><td className="p-3">Green = OK</td><td className="p-3">If off, check power connection</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Battery</td><td className="p-3">Green = charged, Red = low</td><td className="p-3">Replace if red or flashing</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Network</td><td className="p-3">Green = fiber connected</td><td className="p-3">If off = fiber outage, call Verizon</td></tr>
                <tr><td className="p-3">Internet</td><td className="p-3">Green = active</td><td className="p-3">If off, restart ONT</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Replace ONT Battery</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The ONT battery beeps when depleted — this is normal</li>
            <li>A dead battery doesn&apos;t affect internet <strong>unless power goes out</strong></li>
            <li>However, a failing battery can sometimes cause <strong>intermittent disconnects</strong></li>
            <li>To silence beeping: press the <strong>alarm silence button</strong> on the ONT</li>
            <li>Order replacement battery from Verizon or Amazon (model depends on your ONT)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Run Speed Test on Ethernet</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">This isolates whether the issue is WiFi or the actual fiber connection:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect a computer <strong>directly to the router via Ethernet</strong></li>
            <li>Run <strong>speedtest.net</strong> or <strong>fast.com</strong></li>
            <li>Compare results to your Fios plan speed</li>
            <li>If Ethernet speed is good but WiFi is slow → <strong>WiFi issue</strong> (move router, change channel)</li>
            <li>If Ethernet speed is also slow → <strong>fiber/ONT issue</strong> (call Verizon)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Reset Network Settings</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-8 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows — Run as Administrator</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">netsh winsock reset</p>
            <p className="text-slate-800 dark:text-slate-200">netsh int ip reset</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /release</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /renew</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Verizon Fios Support</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Call <strong>1-800-VERIZON (1-800-837-4966)</strong></li>
            <li>Use <strong>My Fios app</strong> chat for faster response</li>
            <li>Ask them to run a <strong>remote diagnostic</strong> on your ONT</li>
            <li>If ONT Network light is off, request a <strong>technician visit</strong> (often free)</li>
            <li>Ask about upgrading to the latest <strong>CR1000A router</strong> for WiFi 6E</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
            <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">🌍 Fios Coverage Areas</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">Verizon Fios is available in <strong>New York, New Jersey, Connecticut, Pennsylvania, Virginia, Maryland, Massachusetts, Rhode Island, and Washington D.C.</strong> Most outage reports come from the NYC metro area and Northern Virginia.</p>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Verizon Fios Still Not Working?</h3>
            <p className="mt-2 text-red-200 max-w-lg mx-auto">Our certified technicians can diagnose and fix your Fios connection remotely in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/verizon-fios-router-not-working", title: "Fios Router Fix", desc: "Fix Verizon Fios router issues." },
                { href: "/verizon-fios-no-internet-after-storm", title: "Fios After Storm", desc: "Fix Fios after storm damage." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "General internet troubleshooting." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-red-700 dark:text-red-400 group-hover:text-red-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
