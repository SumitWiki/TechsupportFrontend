import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Smart TV Not Connecting to WiFi? Fix Any Smart TV (2026) | TechSupport4",
  description:
    "Smart TV not connecting to WiFi? Fix Samsung, LG, Sony, TCL, Roku, and Fire TV WiFi issues with our step-by-step guide — covers connection failures, buffering, and DNS errors.",
  alternates: { canonical: "/smart-tv-not-connecting-to-wifi" },
  openGraph: {
    title: "Smart TV Not Connecting to WiFi? Fix Any Smart TV",
    description: "Fix WiFi issues on Samsung, LG, Sony, Roku & Fire TV.",
    type: "article",
    url: "https://techsupport4.com/smart-tv-not-connecting-to-wifi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Smart TV WiFi | TechSupport4",
    description: "Complete Smart TV WiFi troubleshooting guide.",
  },
};

const faqs = [
  {
    q: "Why won't my smart TV connect to WiFi?",
    a: "Common causes: (1) Wrong WiFi password entered, (2) TV is too far from the router — walls severely weaken WiFi signal, (3) Router broadcasting only 5 GHz — some older smart TVs only support 2.4 GHz, (4) TV firmware is outdated, (5) Router's MAC filtering is blocking the TV, (6) Too many devices connected to the router (typical home routers support 20-30), (7) TV's WiFi module has failed (rare).",
  },
  {
    q: "How do I connect my smart TV to WiFi?",
    a: "General steps (varies by brand): Settings → Network/Internet → WiFi/Wireless → select your network → enter password → Connect. For Samsung: Settings → General → Network → Open Network Settings → Wireless. For LG: Settings → Connection → Wi-Fi Connection. For Sony: Settings → Network & Internet → WiFi.",
  },
  {
    q: "Why does my smart TV keep losing WiFi?",
    a: "Intermittent WiFi drops: (1) Weak signal — move router closer or use a WiFi extender, (2) IP conflict — set a static IP for the TV, (3) Router firmware needs updating, (4) ECO/sleep mode disconnecting WiFi — disable auto-off in TV's power settings, (5) DNS issues — set DNS manually to 8.8.8.8. Also check if other devices lose WiFi at the same time — if yes, the problem is the router, not the TV.",
  },
  {
    q: "My smart TV connects to WiFi but apps won't load — why?",
    a: "Connected WiFi but no app loading means: (1) DNS issue — change DNS to 8.8.8.8 in TV's network settings, (2) Date/time is wrong on the TV — this blocks HTTPS connections that apps need, (3) App cache is corrupted — clear cache in TV app settings, (4) ISP blocking or throttling streaming services, (5) TV firmware needs updating — check Settings → Support → Software Update.",
  },
  {
    q: "Should I use WiFi or Ethernet for my smart TV?",
    a: "Ethernet is better for streaming — it's faster, more stable, and has no interference issues. Use Ethernet if your TV is near the router. WiFi is fine for casual streaming if signal is strong (same room as router). For 4K streaming, Ethernet is strongly recommended to avoid buffering. If WiFi is your only option, use the 5 GHz band for faster speeds (if your TV supports it).",
  },
];

export default function SmartTvNotConnecting() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Smart TV Not Connecting to WiFi? Fix Any Smart TV",
            description: "Fix WiFi issues on any smart TV brand.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-02-12",
            dateModified: "2026-02-27",
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Smart TV Not Connecting to WiFi</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Connectivity Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Smart TV Not Connecting to WiFi? Fix Any Smart TV
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix WiFi connectivity on Samsung, LG, Sony, TCL, Hisense, Roku TV, and Amazon Fire TV — covers connection failures, buffering, DNS errors, and app loading issues.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            A smart TV that won&apos;t connect to WiFi can&apos;t stream anything — no Netflix, YouTube, Disney+, or app updates. WiFi issues on smart TVs are surprisingly common because TVs have weaker WiFi antennas than phones or laptops, and they&apos;re often placed far from the router. This guide covers fixes for all major smart TV brands.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Everything</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Turn off the TV using the <strong>remote</strong> (not just standby)</li>
            <li><strong>Unplug the TV</strong> from the wall for 60 seconds (this clears the TV&apos;s cache)</li>
            <li>Also <strong>restart your router</strong>: unplug for 60 seconds, plug back in</li>
            <li>Wait 2-3 minutes for the router to fully boot</li>
            <li>Plug in and turn on the TV</li>
            <li>Try connecting to WiFi again — this fixes the majority of smart TV WiFi issues</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Forget and Reconnect to WiFi</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Go to your TV&apos;s <strong>Network Settings → WiFi</strong> → select your network → choose <strong>Forget</strong> or <strong>Disconnect</strong>. Then reconnect by selecting the network and entering the password fresh. This clears any corrupted connection data. Double-check the password — WiFi passwords are case-sensitive.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check WiFi Band (2.4 GHz vs 5 GHz)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Many older smart TVs <strong>only support 2.4 GHz WiFi</strong> — they can&apos;t connect to 5 GHz networks. Check your TV&apos;s specs. If your router only broadcasts a single combined network, try separating 2.4 GHz and 5 GHz into different network names in router settings. Connect the TV to the 2.4 GHz network. Newer TVs (2020+) usually support both bands.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Set DNS Manually</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            DNS issues prevent apps from loading even when WiFi is connected. Set DNS manually on your TV:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to TV&apos;s <strong>Network Settings → WiFi → your network → Advanced</strong> (or IP Settings → Manual)</li>
            <li>Set <strong>DNS Server</strong> to <strong>8.8.8.8</strong> (Google DNS) or <strong>1.1.1.1</strong> (Cloudflare DNS)</li>
            <li>Save and restart the TV</li>
            <li>This bypasses your ISP&apos;s potentially slow or broken DNS server</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update TV Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Outdated firmware can cause WiFi connectivity issues. If your TV has any connection (even unstable), try updating: <strong>Samsung:</strong> Settings → Support → Software Update. <strong>LG:</strong> Settings → All Settings → Support → Software Update. <strong>Sony:</strong> Settings → Device Preferences → About → System update. If WiFi is completely broken, some TVs support firmware updates via USB drive — download from the manufacturers website.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Move the Router Closer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Smart TVs have weaker WiFi antennas than phones or laptops. Every wall between the TV and router weakens the signal significantly. If possible, move the router closer to the TV or vice versa. Consider a <strong>WiFi extender</strong> or <strong>mesh WiFi system</strong> for large homes. As a quick test, temporarily place the router right next to the TV — if it connects, weak signal is confirmed as the issue.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Set a Static IP Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If your TV keeps losing connection after every router restart, the IP address is changing. Go to the TV&apos;s Network Settings → IP Settings → Manual → Assign a static IP (e.g., 192.168.1.200) with subnet mask 255.255.255.0 and gateway as your router&apos;s IP (usually 192.168.1.1). Set DNS to 8.8.8.8. This prevents IP conflicts and reconnects faster.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Use Ethernet Instead</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If WiFi won&apos;t work reliably, use an Ethernet cable. Most smart TVs have an Ethernet port on the back. An Ethernet connection is faster, more stable, and eliminates WiFi problems entirely. Use a <strong>powerline adapter</strong> if the router is far from the TV — it sends internet through your electrical wiring.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Factory Reset the TV</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            As a last resort, factory reset the TV to clear all settings: <strong>Samsung:</strong> Settings → General → Reset. <strong>LG:</strong> Settings → General → Reset to Initial Settings. <strong>Sony:</strong> Settings → Device Preferences → Reset. This erases all apps, accounts, and settings — you&apos;ll need to set everything up again.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Brand-Specific WiFi Tips</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">Samsung Smart TV</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Settings → General → Network → Reset Network. Also try: unplug TV for 5 min (Samsung-specific cache clear). Check Smart Hub for app-specific errors.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">LG Smart TV (webOS)</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Settings → Connection → Wi-Fi → Advanced Settings → Edit. LG TVs sometimes need the Quick Start+ feature disabled to fix WiFi reconnection after sleep.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">Roku TV / Fire TV</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Roku: Settings → Network → Set up connection → Wireless. Fire TV: Settings → Network → select network. Both support WiFi band selection. Restart device from Settings if WiFi drops.</p>
            </div>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Smart TV Still Not Connecting?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help configure your network for optimal smart TV connectivity.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete WiFi troubleshooting guide.</p>
              </Link>
              <Link href="/router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Router issues affect all devices including TVs.</p>
              </Link>
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix internet connectivity for streaming.</p>
              </Link>
              <Link href="/bluetooth-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Bluetooth Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix Bluetooth audio for TV soundbars.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
