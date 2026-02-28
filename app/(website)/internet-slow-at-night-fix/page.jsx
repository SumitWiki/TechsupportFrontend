import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Slow at Night? Fix Guide (2026)",
  description: "Internet slows down every evening? Fix network congestion, bandwidth throttling, WiFi channel overlap, and peak-hour slowdowns with proven solutions.",
  alternates: { canonical: "/internet-slow-at-night-fix" },
  openGraph: { title: "Internet Slow at Night — Fix Guide", description: "Fix slow internet at night.", type: "article", url: "https://techsupport4.com/internet-slow-at-night-fix" },
  twitter: { card: "summary_large_image", title: "Slow Internet at Night Fix | TechSupport4", description: "Internet slow at night — fix guide." },
};

const faqs = [
  { q: "Why is my internet always slow between 7-11 PM?", a: "Peak hours: 7-11 PM is when the most people in your neighborhood are online — streaming Netflix, gaming, video calls. Your ISP's local node (shared infrastructure) gets congested, reducing everyone's speed. This is called 'network congestion' and is the #1 cause of slow night internet." },
  { q: "Is my ISP throttling my internet at night?", a: "Possible but hard to prove. Some ISPs throttle (intentionally slow down) specific traffic types like streaming or gaming during peak hours. Test: use a VPN and run a speed test — if speeds are significantly faster with a VPN, your ISP may be throttling specific services. Without a VPN, ISPs can see what type of traffic you're using." },
  { q: "Will changing my WiFi channel help with night slowdowns?", a: "If the slowdown is WiFi-specific (ethernet is fast but WiFi is slow), yes. During evening hours, more neighbors are using WiFi, causing channel congestion — especially on 2.4 GHz. Switch to 5 GHz band and use a less congested channel. Use a WiFi analyzer app to find the least crowded channel." },
  { q: "Should I upgrade my internet plan?", a: "If speed tests show you're getting the speed you pay for (but it's not enough), upgrading helps. But if speed tests show significantly less than your plan's speed during peak hours, the problem is congestion — upgrading may not help. Consider: 100 Mbps is enough for 3-4 simultaneous HD streams. 300+ Mbps is needed for 4K streaming on multiple devices." },
  { q: "Does QoS (Quality of Service) help with slow nights?", a: "Yes! QoS prioritizes important traffic. In your router settings, enable QoS and prioritize: (1) Video conferencing (Zoom, Teams), (2) Streaming (Netflix, YouTube), (3) Gaming. This won't increase total bandwidth but ensures important traffic gets priority over background downloads and updates." },
];

export default function InternetSlowAtNightFix() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Slow at Night — Fix Guide", description: "Fix slow internet at night.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Slow at Night</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Internet Speed Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Slow at Night? Here&apos;s the Fix</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Internet crawls every evening? Fix network congestion, ISP throttling, WiFi channel interference, and optimize for peak hours.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Fast internet during the day but buffering and lag every evening? You&apos;re not imagining it. Peak-hour internet slowdowns affect millions of users, especially on cable internet. Here&apos;s what causes it and how to fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Why Internet Slows Down at Night</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Network congestion:</strong> Cable internet shares bandwidth with your neighborhood. When everyone streams Netflix at 8 PM, everyone&apos;s speed drops</li>
            <li><strong>ISP throttling:</strong> Some ISPs intentionally reduce speeds for specific services (streaming, gaming) during peak hours</li>
            <li><strong>WiFi congestion:</strong> More neighbors using WiFi at night creates wireless interference</li>
            <li><strong>Device competition:</strong> Everyone in your household is online simultaneously — gaming, streaming, video calling</li>
            <li><strong>Background downloads:</strong> Windows updates, app updates, and cloud syncs often schedule during evening hours</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Run Speed Tests at Different Times</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Run <strong>speedtest.net</strong> at 10 AM (off-peak) and 9 PM (peak)</li>
            <li>Use an <strong>Ethernet cable</strong> for accurate results (WiFi adds variables)</li>
            <li>Compare results to your <strong>plan speed</strong></li>
            <li>If peak-hour speeds are <strong>less than 50% of plan speed</strong>, contact your ISP — this is unacceptable</li>
            <li>If speeds match your plan but feel slow, you may need to <strong>upgrade your plan</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Switch to 5 GHz WiFi</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>2.4 GHz</strong> is slower and more congested (shared with neighbors, microwaves, baby monitors)</li>
            <li><strong>5 GHz</strong> is faster and less congested — better for streaming and gaming</li>
            <li>If your router broadcasts both bands under one name, force your device to connect to <strong>5 GHz</strong> (or set separate SSIDs in router settings)</li>
            <li>5 GHz has shorter range — works best when you&apos;re in the same room or one room away from the router</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change WiFi Channel</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Download a <strong>WiFi analyzer app</strong> (WiFi Analyzer for Android, Airport Utility for iOS)</li>
            <li>Scan for nearby networks and see which <strong>channels are crowded</strong></li>
            <li>For 2.4 GHz: use <strong>channel 1, 6, or 11</strong> (non-overlapping channels) — pick the least used</li>
            <li>For 5 GHz: most routers auto-select well, but try <strong>DFS channels</strong> (52-144) if available — they&apos;re rarely used by neighbors</li>
            <li>Change channel in <strong>router admin → Wireless Settings</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Enable QoS (Quality of Service)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>router admin</strong></li>
            <li>Find <strong>QoS settings</strong> (Advanced → QoS or Traffic Management)</li>
            <li>Set priority for important devices or applications</li>
            <li>Prioritize: <strong>Zoom/Teams &gt; Streaming &gt; Gaming &gt; Downloads</strong></li>
            <li>Set bandwidth limits for heavy users if your router supports it</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Test for ISP Throttling</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Run a speed test <strong>without VPN</strong> → note the results</li>
            <li>Connect to a <strong>VPN</strong></li>
            <li>Run the same speed test <strong>with VPN</strong></li>
            <li>If VPN speeds are <strong>significantly faster</strong> (especially for streaming), your ISP is likely throttling</li>
            <li>Solutions: use a VPN while streaming, file an FCC complaint, or switch ISPs</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Control Background Downloads</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows Update:</strong> Settings → Windows Update → Advanced → Set active hours (so updates happen during the day)</li>
            <li><strong>Steam/Gaming:</strong> Set download schedules in Steam → Settings → Downloads → Schedule</li>
            <li><strong>Cloud storage:</strong> Pause Dropbox/OneDrive/Google Drive syncing during peak hours</li>
            <li><strong>Smart home devices:</strong> Security cameras uploading HD video can consume significant bandwidth</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Use Ethernet for Important Devices</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If your TV, gaming console, or work computer is near the router, use an <strong>Ethernet cable</strong>. Wired connections aren&apos;t affected by WiFi congestion and provide consistent speeds. For distant devices, consider <strong>Powerline adapters</strong> or <strong>MoCA adapters</strong> (uses coaxial cable wiring in your home).</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still Slow at Night?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can optimize your network for peak-hour performance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "WiFi connected but no internet." },
                { href: "/wifi-keeps-disconnecting-windows-11", title: "WiFi Keeps Disconnecting", desc: "Fix WiFi drop issues." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
