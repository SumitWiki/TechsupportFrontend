import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "T-Mobile Home Internet Not Working? Fix Guide (2026)",
  description: "T-Mobile 5G Home Internet not working? Fix gateway issues, no signal, slow speeds, and connection drops on T-Mobile Home Internet step by step.",
  alternates: { canonical: "/tmobile-home-internet-not-working" },
  openGraph: { title: "T-Mobile Home Internet Not Working — Fix Guide", description: "Fix T-Mobile Home Internet.", type: "article", url: "https://techsupport4.com/tmobile-home-internet-not-working" },
  twitter: { card: "summary_large_image", title: "T-Mobile Home Internet Fix | TechSupport4", description: "T-Mobile Home Internet not working — fix guide." },
};

const faqs = [
  { q: "Why is my T-Mobile Home Internet not working?", a: "Common causes: (1) 5G/LTE tower congestion or maintenance, (2) Gateway placed in poor signal location, (3) Gateway overheating, (4) Firmware update in progress, (5) Account issue, (6) Weather affecting signal, (7) SIM card issue. Gateway placement is the #1 factor." },
  { q: "Where should I place my T-Mobile Home Internet gateway?", a: "Near a window facing the nearest T-Mobile tower. Upper floors are better. Away from metal objects, microwaves, and thick walls. The T-Mobile Internet app shows signal strength — move the gateway and check. Even 2-3 feet of movement can make a huge difference." },
  { q: "How do I restart my T-Mobile Home Internet gateway?", a: "Unplug power → wait 30 seconds → plug back in → wait 5 minutes. Or use the T-Mobile Internet app → Network → Restart Gateway. The app method is cleaner as it properly shuts down first." },
  { q: "Is T-Mobile Home Internet slower at night?", a: "Yes, it can be. T-Mobile Home Internet is deprioritized behind phone users on the same tower. During peak hours (6-11 PM), you may see slower speeds. This is normal for fixed wireless. Try using 5G band when possible — it has more capacity." },
  { q: "How do I contact T-Mobile for Home Internet issues?", a: "Call 1-844-275-9310 (Home Internet dedicated line), use the T-Mobile Internet app → Support, visit t-mobile.com/support, or message T-Force on Twitter/X (@TMobileHelp). The Internet app gives real-time signal diagnostics." },
];

export default function TMobileHomeInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "T-Mobile Home Internet Not Working — Fix Guide", description: "Fix T-Mobile 5G Home Internet.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">T-Mobile Home Internet</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">T-Mobile 5G Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">T-Mobile Home Internet Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix T-Mobile 5G Home Internet — gateway signal, placement, slow speeds, and connection drops.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">T-Mobile Home Internet uses <strong>5G/4G LTE cellular towers</strong> instead of cable or fiber. This means your experience depends heavily on <strong>gateway placement and tower proximity</strong>. Here&apos;s how to optimize and fix issues.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">T-Mobile Gateway Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">State</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Front LED</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Teal/Blue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Connected — working</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Front LED</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Blinking</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Booting / searching for signal</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Front LED</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Red/Yellow</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No signal / Poor connection</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Signal Bars</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1-5 bars</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Signal strength indicator</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Optimize Gateway Placement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"><strong>This is the most important fix.</strong> Gateway placement makes or breaks T-Mobile Home Internet:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Place near a <strong>window</strong> facing the nearest T-Mobile tower</li>
            <li><strong>Upper floors</strong> are significantly better than basements</li>
            <li>Away from <strong>metal objects, microwaves, fish tanks</strong></li>
            <li>Use the <strong>T-Mobile Internet app</strong> to check signal strength in real-time</li>
            <li>Try multiple locations — even <strong>2-3 feet difference</strong> can improve signal</li>
            <li>External walls are better than interior rooms</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart the Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>power</strong> from the gateway</li>
            <li>Wait <strong>30 seconds</strong></li>
            <li>Plug back in → wait <strong>5 minutes</strong></li>
            <li>Or use <strong>T-Mobile Internet app → Restart</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check SIM Card</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Power off the gateway</li>
            <li>Remove the <strong>SIM card tray</strong></li>
            <li>Clean the SIM card gently</li>
            <li>Reinsert firmly → restart</li>
            <li>If SIM is damaged, T-Mobile will replace it free</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Band Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Use the T-Mobile Internet app or gateway admin page (192.168.12.1):</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>n41 (2.5 GHz)</strong> — best for speed, mid-range coverage</li>
            <li><strong>n71 (600 MHz)</strong> — better range but slower</li>
            <li><strong>B66/B2 (LTE)</strong> — fallback, slowest</li>
            <li>If stuck on LTE, try moving gateway closer to window</li>
            <li>5G n41 can deliver <strong>200-500 Mbps</strong> in good conditions</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Reduce Peak-Hour Congestion</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>T-Mobile Home Internet is <strong>deprioritized behind mobile users</strong></li>
            <li>Speeds drop during <strong>peak hours (6-11 PM)</strong></li>
            <li>Download large files during <strong>off-peak hours</strong> (late night/early morning)</li>
            <li>Connect fewer devices when speed matters</li>
            <li>Use <strong>5 GHz WiFi band</strong> for local network speed</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check for Tower Maintenance</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>T-Mobile regularly upgrades towers — this causes temporary outages</li>
            <li>Call <strong>1-844-275-9310</strong> or check the app for maintenance alerts</li>
            <li>Tower upgrades usually complete within <strong>24-48 hours</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Hold <strong>reset button</strong> for 12+ seconds</li>
            <li>Wait for gateway to fully restart (5-10 minutes)</li>
            <li>Reconfigure WiFi name/password via <strong>T-Mobile Internet app</strong></li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">T-Mobile Home Internet Still Down?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help optimize T-Mobile 5G Home Internet performance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but can't browse." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/slow-internet-speed-fix", title: "Slow Internet Fix", desc: "Speed up your connection." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
