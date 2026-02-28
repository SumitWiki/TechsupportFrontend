import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Keeps Disconnecting on Windows 11? Fix Guide (2026)",
  description: "WiFi keeps dropping on Windows 11? Fix power management, driver issues, DHCP problems, and constant WiFi disconnections with proven solutions.",
  alternates: { canonical: "/wifi-keeps-disconnecting-windows-11" },
  openGraph: { title: "WiFi Keeps Disconnecting Windows 11 — Fix Guide", description: "Fix WiFi drops on Windows 11.", type: "article", url: "https://techsupport4.com/wifi-keeps-disconnecting-windows-11" },
  twitter: { card: "summary_large_image", title: "WiFi Drops Win11 Fix | TechSupport4", description: "WiFi keeps disconnecting on Windows 11 — fix guide." },
};

const faqs = [
  { q: "Why does my WiFi keep disconnecting on Windows 11?", a: "Top causes: (1) WiFi adapter power management turning off the adapter to save energy, (2) Outdated or buggy WiFi driver (especially Intel AX201/AX211), (3) Router DHCP lease issues, (4) WiFi signal interference or weak signal, (5) Windows 11 bug in certain builds, (6) VPN software conflicting with network adapter." },
  { q: "WiFi disconnects when laptop goes to sleep — how to fix?", a: "Two fixes: (1) Device Manager → WiFi adapter → Properties → Power Management → uncheck 'Allow the computer to turn off this device to save power', (2) Power settings: Control Panel → Power Options → Change plan settings → Change advanced settings → Wireless Adapter Settings → Power Saving Mode → Maximum Performance." },
  { q: "WiFi drops every few minutes even when I'm using it — why?", a: "Likely causes: (1) Driver bug — update or rollback WiFi driver, (2) Router is overloaded — too many devices or firmware bug, (3) WiFi channel is congested — change channel, (4) DHCP lease conflict — set a static IP, (5) 'Auto-connect' is disabled for the network — check WiFi settings." },
  { q: "Should I roll back my WiFi driver after a Windows update?", a: "If WiFi disconnections started right after a Windows update: Yes, try rolling back. Device Manager → Network adapters → WiFi adapter → Properties → Driver → Roll Back Driver. If Roll Back is grayed out, download the previous driver version from your manufacturer's website and install it manually." },
  { q: "Will resetting network settings fix constant disconnections?", a: "Often yes: Settings → Network & internet → Advanced network settings → Network reset. This removes all adapters, reinstalls them, and clears all network settings. However, this also deletes saved WiFi passwords and VPN configurations, so note those down first." },
];

export default function WifiKeepsDisconnectingWindows11() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Keeps Disconnecting on Windows 11 — Fix Guide", description: "Fix WiFi disconnections on Windows 11.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Keeps Disconnecting Win11</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">WiFi Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Keeps Disconnecting on Windows 11?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">WiFi drops every few minutes on Windows 11? Fix power management, driver bugs, DHCP conflicts, and stop disconnections.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Few things are more frustrating than WiFi that connects, works for a few minutes, then drops — over and over. Windows 11 has a known history of WiFi driver compatibility issues, especially with Intel wireless adapters. Here&apos;s the systematic fix.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Disable WiFi Power Management</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">This is the #1 cause. Windows turns off the WiFi adapter to save battery:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> (Win + X → Device Manager)</li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your WiFi adapter → <strong>Properties</strong></li>
            <li>Go to <strong>Power Management</strong> tab</li>
            <li>Uncheck <strong>&quot;Allow the computer to turn off this device to save power&quot;</strong></li>
            <li>Click OK</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Set WiFi to Maximum Performance</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Control Panel → Power Options</strong></li>
            <li>Click <strong>Change plan settings</strong> next to your current plan</li>
            <li>Click <strong>Change advanced power settings</strong></li>
            <li>Expand <strong>Wireless Adapter Settings → Power Saving Mode</strong></li>
            <li>Set both On Battery and Plugged In to <strong>Maximum Performance</strong></li>
            <li>Click Apply → OK</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Update or Rollback WiFi Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager → Network adapters</strong></li>
            <li>Right-click WiFi adapter → <strong>Update driver → Search automatically</strong></li>
            <li>If problem started after a recent update: right-click → Properties → Driver → <strong>Roll Back Driver</strong></li>
            <li>For Intel WiFi (AX201, AX211, AC 9560): download directly from <strong>intel.com/download</strong></li>
            <li>For Realtek/MediaTek: check your laptop manufacturer&apos;s support page</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Forget and Reconnect to WiFi</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; internet → WiFi → Manage known networks</strong></li>
            <li>Find your network → <strong>Forget</strong></li>
            <li>Reconnect and enter your WiFi password</li>
            <li>Make sure <strong>&quot;Connect automatically&quot;</strong> is checked</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Set a Static IP Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">DHCP lease conflicts can cause disconnections:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; internet → WiFi → your network → Hardware properties</strong></li>
            <li>Under IP assignment, click <strong>Edit</strong></li>
            <li>Change to <strong>Manual → IPv4 On</strong></li>
            <li>IP: <strong>192.168.1.XXX</strong> (use a number above 100, like 192.168.1.150)</li>
            <li>Subnet: <strong>255.255.255.0</strong></li>
            <li>Gateway: <strong>192.168.1.1</strong> (your router&apos;s IP)</li>
            <li>DNS: <strong>8.8.8.8</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Reset Network Stack</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Open <strong>Terminal as Administrator</strong>:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p>ipconfig /flushdns</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart your PC after running these commands.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Disable WiFi Sense and Hotspot 2.0</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; internet → WiFi</strong></li>
            <li>Turn off <strong>&quot;Connect to suggested open hotspots&quot;</strong></li>
            <li>Turn off <strong>&quot;Hotspot 2.0 networks&quot;</strong></li>
            <li>Turn off <strong>&quot;Random hardware addresses&quot;</strong> (can cause some routers to treat your device as new each time)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Complete Network Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Last resort: <strong>Settings → Network &amp; internet → Advanced network settings → Network reset → Reset now</strong>. This reinstalls all adapters and resets all networking. You&apos;ll need to reconnect to WiFi and may need to reinstall VPN software.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">WiFi Still Dropping?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose and fix persistent WiFi issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-connected-but-no-internet-windows-11", title: "No Internet Win11", desc: "Fix WiFi with no internet." },
                { href: "/wifi-keeps-disconnecting-windows-10", title: "WiFi Drops Win10", desc: "Fix WiFi drops on Windows 10." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi fix guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Universal WiFi fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
