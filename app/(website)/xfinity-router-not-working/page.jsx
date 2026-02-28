import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Xfinity Router Not Working? Complete Fix Guide (2026)",
  description: "Xfinity router or xFi gateway not working? Fix blinking lights, no internet, slow WiFi, and connectivity issues on Comcast Xfinity step by step.",
  alternates: { canonical: "/xfinity-router-not-working" },
  openGraph: { title: "Xfinity Router Not Working — Complete Fix Guide", description: "Fix all Xfinity router issues.", type: "article", url: "https://techsupport4.com/xfinity-router-not-working" },
  twitter: { card: "summary_large_image", title: "Xfinity Router Fix | TechSupport4", description: "Xfinity router not working — complete fix guide." },
};

const faqs = [
  { q: "Why is my Xfinity router not working?", a: "Common causes: (1) ISP outage in your area — check xfinity.com/support/status, (2) Coaxial cable loose or damaged, (3) Gateway overheating, (4) Firmware updating (wait 20 min), (5) Account issue — unpaid bill or service suspended, (6) Hardware failure — older XB6/XB7 gateways may need replacement." },
  { q: "What do the lights on my Xfinity gateway mean?", a: "Solid white = working normally. Blinking white = booting up (wait 10 min). Solid/blinking orange = connecting to network. Solid red = no internet connection (hardware or signal issue). Blinking green = downloading firmware. No light = no power or hardware failure." },
  { q: "How do I restart my Xfinity router?", a: "3 methods: (1) Xfinity app → WiFi → your gateway → Restart, (2) Unplug power cord → wait 60 seconds → plug back in → wait 10 minutes, (3) Log into 10.0.0.1 → Troubleshooting → Restart. Method 2 is most effective as it fully power cycles the device." },
  { q: "Should I use Xfinity's gateway or my own router?", a: "Xfinity charges $14/month for gateway rental. Your own modem + router saves money long-term. Compatible modems: Motorola MB8600, ARRIS SB8200, Netgear CM1000. You need a DOCSIS 3.1 modem for gigabit speeds. Check xfinity.com/support/devices for the approved list." },
  { q: "How do I contact Xfinity support for router issues?", a: "Options: (1) Xfinity app → Support → chat with agent, (2) Call 1-800-XFINITY (1-800-934-6489), (3) Visit xfinity.com/support, (4) Visit a local Xfinity store. Before calling, try the Xfinity app troubleshooter — it can fix many issues automatically by sending reset signals." },
];

export default function XfinityRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Xfinity Router Not Working — Complete Fix Guide", description: "Fix all Xfinity router and gateway issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Xfinity</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Xfinity / Comcast Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Xfinity Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Complete guide to fix your Xfinity xFi gateway — blinking lights, no internet, slow WiFi, and connection drops.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>12 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Xfinity (Comcast) is America&apos;s largest cable internet provider, and their xFi gateways — XB6, XB7, and XB8 — handle both modem and router functions. When they stop working, your entire home loses internet. Here&apos;s every fix you need.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Xfinity Gateway Light Meanings</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Status</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Action</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid White</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Working normally</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No action needed</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking White</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Booting / Starting up</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Wait 10-15 minutes</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Orange</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Connecting to Xfinity network</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Wait 10 minutes</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking Orange</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Downloading firmware / Connecting</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Wait 20 minutes, don&apos;t unplug</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Red</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No internet / Hardware issue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power cycle, check cables, call Xfinity</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">No Light</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Check power outlet, try different outlet</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Xfinity Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open the <strong>Xfinity app</strong> on your phone (using mobile data)</li>
            <li>Go to <strong>Account → Internet → Check for outages</strong></li>
            <li>Or visit <strong>xfinity.com/support/status</strong></li>
            <li>Or check <strong>downdetector.com/status/comcast-xfinity</strong></li>
            <li>If there&apos;s an outage, wait for Xfinity to fix it — no troubleshooting needed</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Power Cycle the Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug</strong> the Xfinity gateway from the power outlet</li>
            <li>Wait <strong>60 seconds</strong> (this clears the memory)</li>
            <li><strong>Plug back in</strong></li>
            <li>Wait <strong>10-15 minutes</strong> for full boot cycle</li>
            <li>The light should go from blinking white → orange → solid white</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Coaxial Cable Connection</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The <strong>coaxial cable</strong> (thick round cable) connects your gateway to the wall outlet</li>
            <li>Make sure it&apos;s <strong>finger-tight</strong> at both ends — the gateway and the wall</li>
            <li>Look for <strong>bends, kinks, or damage</strong> in the cable</li>
            <li>Try a <strong>different coaxial cable</strong> if available</li>
            <li>If the coax outlet has a <strong>splitter</strong>, try connecting directly without it</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Restart via Xfinity App</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Xfinity app</strong> → Internet → Your Gateway</li>
            <li>Tap <strong>&quot;Restart this device&quot;</strong></li>
            <li>Confirm the restart</li>
            <li>Wait <strong>10-15 minutes</strong></li>
            <li>This sends a remote signal to reset configuration — more thorough than just unplugging</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Your Xfinity Account</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>xfinity.com/myaccount</strong></li>
            <li>Check for <strong>past-due balance</strong> — unpaid bills can suspend service</li>
            <li>Check if there&apos;s a <strong>data cap notification</strong></li>
            <li>Verify the <strong>gateway is activated</strong> on your account</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check for Overheating</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Xfinity gateways (especially XB6) can <strong>overheat</strong></li>
            <li>Place gateway in an <strong>open, ventilated area</strong></li>
            <li>Never put it inside a <strong>cabinet, closet, or on carpet</strong></li>
            <li>If hot to the touch, unplug for <strong>30 minutes</strong> to cool down, then restart</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Bridge Mode Issues</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you use your own router with the Xfinity gateway:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>10.0.0.1</strong> (admin / password)</li>
            <li>Go to <strong>Gateway → At a Glance</strong></li>
            <li>Check if <strong>Bridge Mode</strong> is enabled or disabled</li>
            <li>If using your own router: bridge mode should be <strong>ON</strong></li>
            <li>If using gateway as router: bridge mode should be <strong>OFF</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset (Last Resort)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the <strong>reset pinhole</strong> on the back of the gateway</li>
            <li>Hold with a paperclip for <strong>30 seconds</strong></li>
            <li>Release and wait <strong>15-20 minutes</strong></li>
            <li>The gateway will reactivate with Xfinity&apos;s network</li>
            <li><strong>Note:</strong> This erases WiFi name/password — you&apos;ll need to set it up again via the Xfinity app</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Request Gateway Replacement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If nothing works, the gateway hardware may be failing. Call Xfinity at <strong>1-800-934-6489</strong> or visit a local Xfinity store to swap for a new gateway (free if you rent). Request the latest model (<strong>XB8</strong>) for best WiFi 6E performance.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Xfinity Gateway Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose and fix Xfinity connection issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/xfinity-router-not-working-after-reset", title: "Xfinity After Reset", desc: "Fix gateway after factory reset." },
                { href: "/xfinity-router-blinking-orange-light", title: "Xfinity Orange Light", desc: "Fix blinking orange light." },
                { href: "/comcast-internet-not-working", title: "Comcast Internet Fix", desc: "Fix Comcast internet issues." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
