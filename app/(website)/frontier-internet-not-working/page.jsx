import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Frontier Internet Not Working? Complete Fix Guide (2026)",
  description: "Frontier internet or router not working? Fix DSL sync issues, fiber ONT problems, slow speeds, and no internet on Frontier step by step.",
  alternates: { canonical: "/frontier-internet-not-working" },
  openGraph: { title: "Frontier Internet Not Working — Fix Guide", description: "Fix Frontier internet issues.", type: "article", url: "https://techsupport4.com/frontier-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Frontier Fix | TechSupport4", description: "Frontier internet not working — fix guide." },
};

const faqs = [
  { q: "Why is my Frontier internet not working?", a: "Common causes: (1) Frontier outage in your area, (2) Router/ONT needs restart, (3) DSL sync lost, (4) Fiber ONT power loss, (5) Account issue, (6) Old equipment. Frontier recently acquired Verizon Fios areas, so equipment may vary." },
  { q: "Does Frontier use DSL or fiber?", a: "Both — it depends on your area. Frontier Fiber (formerly Fios in some regions) uses fiber optic with an ONT. Frontier DSL uses phone lines with a DSL modem. Fiber is faster and more reliable. Check your bill or call Frontier to confirm which type you have." },
  { q: "How do I restart my Frontier router?", a: "Unplug power → wait 30-60 seconds → plug back in → wait 10 minutes. For Frontier Fiber, also restart the ONT by unplugging its power for 30 seconds. If you have a battery backup on the ONT, disconnect the battery too." },
  { q: "My Frontier router shows a red light — what does it mean?", a: "Red light on Frontier routers usually means no internet connection. Try restarting. If the red light returns, check the Ethernet cable from ONT to router (fiber) or the DSL line (DSL). If the issue persists, call Frontier at 1-800-921-8101." },
  { q: "How do I contact Frontier for internet issues?", a: "Call 1-800-921-8101, visit frontier.com/helpcenter, or use the My Frontier app. The app can run diagnostics and schedule technician visits. For new fiber customers, there's also an onboarding support line." },
];

export default function FrontierInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Frontier Internet Not Working — Fix Guide", description: "Fix Frontier internet issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Frontier</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Frontier Communications Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Frontier Internet Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix Frontier DSL or fiber internet — ONT issues, router problems, slow speeds, and connection drops.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Frontier Communications offers both <strong>DSL</strong> and <strong>fiber</strong> internet. They also acquired many former <strong>Verizon Fios</strong> territories. Your setup depends on whether you have DSL (phone line) or fiber (ONT box). Here&apos;s how to fix every common issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Frontier Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Visit <strong>frontier.com/helpcenter</strong> or use My Frontier app</li>
            <li>Check <strong>downdetector.com/status/frontier</strong></li>
            <li>Call <strong>1-800-921-8101</strong></li>
            <li>If outage confirmed, wait for restoration</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Router and ONT</h2>
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">For Frontier Fiber:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
            <li>Unplug <strong>ONT power</strong> (and battery backup if present)</li>
            <li>Unplug <strong>router power</strong></li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in <strong>ONT first</strong> → wait 3-5 minutes → solid green lights</li>
            <li>Plug in <strong>router</strong> → wait 3-5 minutes</li>
          </ol>
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">For Frontier DSL:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>modem power</strong></li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug back in → wait <strong>5-10 minutes</strong> for DSL sync</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check ONT Lights (Fiber)</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">State</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">ONT has power</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">PON/Network</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Connected to Frontier fiber</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">PON/Network</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Off / Red</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No fiber signal — call Frontier</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Internet/Data</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid/Blinking</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Data flowing normally</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Ethernet Cable (ONT to Router)</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The Ethernet cable from <strong>ONT to router WAN port</strong> must be solid</li>
            <li>Try a <strong>different Ethernet cable</strong></li>
            <li>Plug into the correct port — ONT&apos;s <strong>Ethernet port</strong> to router&apos;s <strong>WAN/Internet port</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check DSL Line (DSL Customers)</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Install <strong>DSL filters</strong> on all phone jacks with phones</li>
            <li>Modem jack should <strong>NOT</strong> have a filter</li>
            <li>Try connecting to a <strong>different phone jack</strong></li>
            <li>Test at the <strong>NID test jack</strong> outside the house</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Test Direct Connection</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect computer <strong>directly to ONT or modem via Ethernet</strong></li>
            <li>If internet works → <strong>router issue</strong></li>
            <li>If no internet → <strong>ONT/modem or Frontier line issue</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Request Equipment Replacement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If your Frontier equipment is old (5+ years especially for former Verizon areas), call <strong>1-800-921-8101</strong> to request updated equipment. Frontier Fiber customers can request the latest WiFi 6 router.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Frontier Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose Frontier DSL and fiber issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/centurylink-router-not-working", title: "CenturyLink Fix", desc: "Fix CenturyLink router." },
                { href: "/verizon-fios-router-not-working", title: "Verizon Fios Fix", desc: "Fix Verizon Fios router." },
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
