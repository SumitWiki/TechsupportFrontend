import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Optimum Router Not Working? Complete Fix Guide (2026)",
  description: "Optimum (Altice) router or gateway not working? Fix no internet, blinking lights, slow WiFi, and connection issues on Optimum step by step.",
  alternates: { canonical: "/optimum-router-not-working" },
  openGraph: { title: "Optimum Router Not Working — Fix Guide", description: "Fix Optimum router issues.", type: "article", url: "https://techsupport4.com/optimum-router-not-working" },
  twitter: { card: "summary_large_image", title: "Optimum Router Fix | TechSupport4", description: "Optimum router not working — fix guide." },
};

const faqs = [
  { q: "Why is my Optimum router not working?", a: "Common causes: (1) Optimum outage in your area, (2) Router/modem needs restart, (3) Coaxial cable loose, (4) Altice One gateway overheating, (5) Account issue, (6) Equipment too old. Check optimum.net/outages or call 866-200-7273." },
  { q: "What is the Altice One gateway?", a: "Altice One is Optimum's all-in-one gateway that combines modem, router, and TV box. It's a white tower-shaped device. If you have the older setup, you'll have a separate Arris or Ubee modem plus a router. Troubleshooting differs slightly — the Altice One is restarted through the Optimum app." },
  { q: "How do I restart my Optimum router?", a: "For Altice One: Use Optimum app → Support → Restart Equipment. Or unplug power → wait 30 sec → replug → wait 10 min. For separate modem/router: Unplug BOTH → wait 60 sec → plug modem first → wait 3 min → plug router → wait 3 min." },
  { q: "Should I buy my own router for Optimum?", a: "Optimum charges $10/month for their router. You can use your own DOCSIS 3.1 modem + WiFi router. Check optimum.net for compatible modems. Popular choices: Motorola MB8600, ARRIS SB8200. You must call Optimum to register your modem's MAC address." },
  { q: "How do I contact Optimum support?", a: "Call 866-200-7273, use the Optimum app, visit optimum.net/support, or chat online. The app can restart equipment remotely and run diagnostics. For persistent issues, schedule a technician visit." },
];

export default function OptimumRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Optimum Router Not Working — Fix Guide", description: "Fix Optimum/Altice router.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Optimum</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Optimum / Altice Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Optimum Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix your Optimum (Altice) router or gateway — no internet, blinking lights, slow WiFi, and connection drops.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Optimum (by Altice USA) provides internet primarily in the Northeast US. They use the <strong>Altice One</strong> all-in-one gateway or separate modem/router setups. Here&apos;s how to fix every common issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Optimum Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Visit <strong>optimum.net/outages</strong> or check the Optimum app</li>
            <li>Check <strong>downdetector.com/status/optimum</strong></li>
            <li>Call <strong>866-200-7273</strong> — automated system reports known outages</li>
            <li>If outage confirmed, wait for restoration</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Equipment</h2>
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">For Altice One Gateway:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
            <li>Use <strong>Optimum app → Support → Restart Equipment</strong></li>
            <li>Or <strong>unplug power</strong> → wait 30 seconds → replug</li>
            <li>Wait <strong>10 minutes</strong> for full boot</li>
          </ol>
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">For Separate Modem + Router:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>both</strong> modem and router</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in <strong>modem first</strong> → wait 3-5 minutes (Online light solid)</li>
            <li>Plug in <strong>router</strong> → wait 2-3 minutes</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Cable Connections</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Coaxial cable:</strong> Tight at wall and device. No damage</li>
            <li><strong>Ethernet cable:</strong> Modem to router (if separate). Check for damage</li>
            <li><strong>Power adapter:</strong> Ensure firmly plugged in. Try different outlet</li>
            <li>Bypass any <strong>splitters</strong> — connect coax directly from wall to modem</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Test with Direct Ethernet Connection</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect computer <strong>directly to modem/gateway via Ethernet</strong></li>
            <li>Restart modem/gateway</li>
            <li>If internet works → <strong>WiFi or router issue</strong></li>
            <li>If no internet → <strong>modem or Optimum line issue</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Account Status</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>optimum.net/myaccount</strong></li>
            <li>Check for <strong>overdue balance</strong></li>
            <li>Verify <strong>equipment is activated</strong></li>
            <li>Check for <strong>service changes</strong> or plan updates</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Factory Reset</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find <strong>reset button/pinhole</strong> on back of device</li>
            <li>Hold for <strong>30 seconds</strong> with paperclip</li>
            <li>Wait <strong>15-20 minutes</strong> for full reactivation</li>
            <li>You&apos;ll need to reconfigure WiFi name and password</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Replace Equipment</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If equipment is old or keeps failing, visit an <strong>Optimum store</strong> or call <strong>866-200-7273</strong> to request a replacement. If eligible, ask for the latest <strong>Altice One gateway</strong> with WiFi 6 support.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Optimum Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose Optimum connection issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/arris-modem-not-connecting-to-internet", title: "Arris Modem Fix", desc: "Fix Arris modem issues." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but can't browse." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
