import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Connection Timeout Fix Guide (2026)",
  description: "Getting 'connection timed out' errors? Fix DNS failures, MTU issues, TCP settings, and restore internet connectivity step by step.",
  alternates: { canonical: "/internet-connection-timeout-fix" },
  openGraph: { title: "Internet Connection Timeout — Fix Guide", description: "Fix connection timeout errors.", type: "article", url: "https://techsupport4.com/internet-connection-timeout-fix" },
  twitter: { card: "summary_large_image", title: "Connection Timeout Fix | TechSupport4", description: "Internet connection timeout — fix guide." },
};

const faqs = [
  { q: "What does 'connection timed out' mean?", a: "It means your computer tried to reach a server but didn't get a response within the time limit. Causes: (1) DNS server not responding, (2) Website/server is down, (3) Your internet is too slow, (4) Firewall blocking the connection, (5) ISP routing issues, (6) MTU mismatch causing packet fragmentation." },
  { q: "Why do only some websites time out?", a: "If most websites work but specific ones don't: (1) That website may be down — check downdetector.com, (2) Your ISP may be blocking it, (3) DNS cache has a stale record — flush DNS, (4) The site's server may be geographically far with routing issues, (5) Your ad blocker or antivirus may be blocking it." },
  { q: "Can a VPN fix connection timeouts?", a: "Sometimes yes: If your ISP is throttling or blocking a site, a VPN routes around it. If the ISP's routing to the server is bad, a VPN uses a different path. However, VPNs add latency which can make timeouts worse for slow connections. Try with and without VPN to compare." },
  { q: "Why do I get timeouts only at certain times?", a: "Network congestion: (1) Peak hours (6-11 PM) — your ISP's network is overloaded, (2) Your bandwidth is shared with others at home, (3) ISP throttling during peak hours, (4) Background downloads/updates consuming bandwidth. Try speed tests at different times to confirm." },
  { q: "Should I change my MTU to fix timeouts?", a: "If you're getting timeouts on large page loads but small pages work, MTU could be the issue. The optimal MTU for most connections is 1500, but PPPoE connections should use 1492. To find your optimal MTU: 'ping -f -l 1472 google.com' — if it fails, reduce the number by 10 until it works, then add 28 to the working number." },
];

export default function InternetConnectionTimeoutFix() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Connection Timeout — Fix Guide", description: "Fix connection timeout errors.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Connection Timeout</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Internet Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Connection Timeout? Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Getting &quot;connection timed out&quot; or &quot;ERR_CONNECTION_TIMED_OUT&quot; errors? Fix DNS, MTU, firewall, and network issues.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Connection timeout errors are frustrating because the internet &quot;kind of works&quot; but pages won&apos;t load, apps say &quot;network error,&quot; and everything feels broken. Unlike a full outage, timeouts are usually caused by DNS issues, slow connections, or network misconfigurations.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Quick Restart</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>modem and router</strong> for 30 seconds</li>
            <li>Plug in modem → wait 3 minutes</li>
            <li>Plug in router → wait 2 minutes</li>
            <li>Test the connection</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Change DNS Servers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">A slow or failing DNS server is the #1 cause of timeout errors:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network & Internet → WiFi/Ethernet → Properties</strong></li>
            <li>Edit <strong>DNS server assignment</strong></li>
            <li>Set to <strong>Manual</strong></li>
            <li>Preferred DNS: <strong>8.8.8.8</strong></li>
            <li>Alternate DNS: <strong>8.8.4.4</strong></li>
            <li>Alternative: Cloudflare DNS → <strong>1.1.1.1</strong> and <strong>1.0.0.1</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Flush DNS Cache</h2>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>ipconfig /flushdns</p>
            <p>ipconfig /registerdns</p>
            <p>netsh winsock reset</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart your computer after running these commands. The Winsock reset fixes corrupted network socket settings.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Disable Firewall and Antivirus Temporarily</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Temporarily <strong>disable your antivirus</strong> (right-click tray icon → disable for 10 minutes)</li>
            <li>Temporarily <strong>disable Windows Firewall</strong>: Settings → Firewall → Turn Off (test, then turn back on)</li>
            <li>If timeouts stop, <strong>add browser/app to firewall exceptions</strong> instead of leaving it disabled</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Proxy Settings</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network & Internet → Proxy</strong></li>
            <li>Turn OFF <strong>&quot;Use a proxy server&quot;</strong></li>
            <li>Turn OFF <strong>&quot;Automatically detect settings&quot;</strong></li>
            <li>In Chrome: Settings → System → &quot;Open your computer&apos;s proxy settings&quot; → disable all</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Fix MTU Size</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Find optimal MTU by running in Command Prompt (as Admin):</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
            <p>ping -f -l 1472 google.com</p>
            <p># If &quot;Packet needs to be fragmented&quot;, reduce by 10:</p>
            <p>ping -f -l 1462 google.com</p>
            <p># Keep reducing until it works. Add 28 to the working number = your MTU</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Set the MTU:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh interface ipv4 set subinterface &quot;Wi-Fi&quot; mtu=1492 store=persistent</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Reset TCP/IP Stack</h2>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh int ip reset</p>
            <p>netsh winsock reset</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>ipconfig /flushdns</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart your computer after running all commands.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check for Background Downloads</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check for <strong>Windows Update</strong> downloading in the background</li>
            <li>Check for <strong>game updates</strong> (Steam, Xbox, PlayStation)</li>
            <li>Check for <strong>cloud sync</strong> (OneDrive, Google Drive, Dropbox)</li>
            <li>Check if other devices are <strong>streaming or downloading</strong></li>
            <li>Open <strong>Task Manager → Network</strong> to see which apps are using bandwidth</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still Getting Timeout Errors?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose network and DNS configuration issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-slow-at-night-fix", title: "Slow at Night", desc: "Fix peak-hour slowdown." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but can't browse." },
                { href: "/google-chrome-not-working", title: "Chrome Not Working?", desc: "Fix browser issues." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
