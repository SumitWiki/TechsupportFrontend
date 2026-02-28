import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "CenturyLink Router Not Working? Complete Fix Guide (2026)",
  description: "CenturyLink (Quantum/Lumen) router or modem not working? Fix DSL sync issues, no internet, slow speeds, and blinking lights step by step.",
  alternates: { canonical: "/centurylink-router-not-working" },
  openGraph: { title: "CenturyLink Router Not Working — Fix Guide", description: "Fix CenturyLink router issues.", type: "article", url: "https://techsupport4.com/centurylink-router-not-working" },
  twitter: { card: "summary_large_image", title: "CenturyLink Fix | TechSupport4", description: "CenturyLink router not working — fix guide." },
};

const faqs = [
  { q: "Why is my CenturyLink internet not working?", a: "Common causes: (1) CenturyLink outage, (2) DSL sync lost (DSL light blinking/off), (3) PPPoE credentials incorrect, (4) Modem/router needs restart, (5) Phone line issue or missing DSL filter, (6) Old wiring causing signal loss, (7) Account suspended." },
  { q: "What do the lights on my CenturyLink modem mean?", a: "Power solid green = on. DSL solid green = synced with exchange. DSL blinking = trying to sync. Internet solid green = authenticated. Internet red = PPPoE auth failed. WiFi solid = broadcasting. If DSL light won't go solid, it's a line issue." },
  { q: "How do I restart my CenturyLink modem?", a: "Unplug power → wait 30-60 seconds → plug back in → wait 5-10 minutes for DSL to resync. The DSL light must go solid green before the Internet light will come on. For fiber customers, also restart the ONT." },
  { q: "What are PPPoE credentials and why do they matter?", a: "PPPoE (Point-to-Point Protocol over Ethernet) is how CenturyLink authenticates your connection. Your modem needs your CenturyLink username (format: username@centurylink.net) and password. After a factory reset, you must re-enter these at 192.168.0.1 or the modem won't connect." },
  { q: "How do I contact CenturyLink support?", a: "Call 1-800-244-1111, visit centurylink.com/support, or use the My CenturyLink app. For outage info, check centurylink.com/outage. Request a technician if the issue hasn't resolved after standard troubleshooting." },
];

export default function CenturyLinkRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "CenturyLink Router Not Working — Fix Guide", description: "Fix CenturyLink modem and router.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">CenturyLink</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">CenturyLink / Lumen Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">CenturyLink Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix CenturyLink DSL/fiber modem and router — sync issues, PPPoE errors, slow speeds, and no internet.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">CenturyLink (now Lumen/Quantum) provides DSL and fiber internet across the US. Their modems use <strong>PPPoE authentication</strong>, which adds a troubleshooting layer. Here&apos;s how to fix every common issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">CenturyLink Modem Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">State</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Powered on</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">DSL</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Synced with exchange — good</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">DSL</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Trying to sync — wait 5 min</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Internet</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">PPPoE authenticated — internet working</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Internet</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Red</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">PPPoE failed — check credentials</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi on and broadcasting</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for CenturyLink Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Visit <strong>centurylink.com/outage</strong></li>
            <li>Check <strong>downdetector.com/status/centurylink</strong></li>
            <li>Call <strong>1-800-244-1111</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Power Cycle Modem</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>power</strong> from modem</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug back in</li>
            <li>Wait <strong>5-10 minutes</strong> for DSL sync</li>
            <li>DSL light must go <strong>solid green</strong> → then Internet light turns green</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check PPPoE Credentials</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"><strong>This is the #1 issue after a factory reset.</strong> CenturyLink DSL requires PPPoE login:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open browser → go to <strong>192.168.0.1</strong></li>
            <li>Login (admin / admin or check modem label)</li>
            <li>Go to <strong>Quick Setup or WAN Settings</strong></li>
            <li>Enter PPPoE username: usually <strong>yourname@centurylink.net</strong></li>
            <li>Enter PPPoE password (from your welcome letter or call CenturyLink)</li>
            <li>Save and restart</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check DSL Filters</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Every phone jack with a phone needs a <strong>DSL filter</strong></li>
            <li>The modem jack should <strong>NOT have a filter</strong></li>
            <li>Missing filters cause <strong>noise on the line</strong> → drops DSL sync</li>
            <li>Replace any <strong>old or cracked</strong> filters</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Try the Test Jack</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the <strong>Network Interface Device (NID)</strong> on outside of house</li>
            <li>Open it and plug modem into the <strong>test jack</strong></li>
            <li>If internet works → problem is with <strong>inside wiring</strong></li>
            <li>If still no internet → problem is <strong>CenturyLink&apos;s line</strong> (call them)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check Signal Levels</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>192.168.0.1 → Modem Status or DSL Status</strong></li>
            <li>Check <strong>downstream/upstream sync rates</strong></li>
            <li>If rates are much lower than your plan → <strong>line quality issue</strong></li>
            <li>Check <strong>SNR margin</strong> — should be above 6 dB</li>
            <li>High <strong>CRC errors</strong> = noisy line → call CenturyLink</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset (Last Resort)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Hold <strong>reset button</strong> for 15-30 seconds</li>
            <li>Wait 5-10 minutes</li>
            <li><strong>IMPORTANT:</strong> You MUST re-enter PPPoE credentials</li>
            <li>Go to 192.168.0.1 and reconfigure</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">CenturyLink Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose CenturyLink DSL and fiber issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/frontier-internet-not-working", title: "Frontier Internet Fix", desc: "Fix Frontier DSL/fiber." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/router-not-connecting-to-modem", title: "Router-Modem Issue", desc: "Fix modem connection." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
