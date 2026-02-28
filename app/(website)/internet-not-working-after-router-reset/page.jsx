import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Not Working After Router Reset? Fix Guide (2026)",
  description: "Internet stopped working after resetting your router? Restore WiFi name, password, ISP settings, and get back online with this step-by-step recovery guide.",
  alternates: { canonical: "/internet-not-working-after-router-reset" },
  openGraph: { title: "Internet Not Working After Router Reset — Fix Guide", description: "Fix internet after router reset.", type: "article", url: "https://techsupport4.com/internet-not-working-after-router-reset" },
  twitter: { card: "summary_large_image", title: "Post-Reset Internet Fix | TechSupport4", description: "Internet not working after reset — fix guide." },
};

const faqs = [
  { q: "Why is my internet not working after I reset my router?", a: "A factory reset erases ALL custom settings: (1) WiFi name and password revert to defaults (printed on router label), (2) ISP-specific settings like PPPoE username/password are deleted, (3) Static IP or DNS settings are erased, (4) Port forwarding and custom configurations are gone. You need to reconfigure the router from scratch." },
  { q: "What's the difference between restart and factory reset?", a: "Restart (unplug/replug) = just reboots the router, keeps all settings. Factory reset (hold reset button 10-30 sec) = erases everything and restores original defaults. If you only restarted, your settings are intact. If you factory reset, you need to set up the router again." },
  { q: "How do I find my ISP's PPPoE credentials after a reset?", a: "Contact your ISP (call their support number on your bill). They'll provide: PPPoE username and password (for DSL/fiber connections), or confirm if your connection uses DHCP (automatic — no credentials needed for cable internet). Some ISPs: AT&T, CenturyLink, Frontier use PPPoE. Comcast/Xfinity, Spectrum, Cox usually use DHCP." },
  { q: "Can I backup router settings to avoid this problem?", a: "Yes! Most routers have a backup option: Go to router admin panel → System/Administration → Backup/Restore → Export Configuration. Save the file to your computer. After any future reset, you can import this file to restore all settings instantly." },
  { q: "My ISP router/gateway reset itself — what happened?", a: "ISP gateways can reset due to: (1) Firmware update pushed by the ISP, (2) Power surge, (3) Overheating, (4) Remote reset by ISP during troubleshooting. If this happened without your input, call your ISP — they may need to re-provision the gateway." },
];

export default function InternetNotWorkingAfterRouterReset() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Not Working After Router Reset — Fix Guide", description: "Fix internet after router reset.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Router Reset</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Post-Reset Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Not Working After Router Reset?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Factory reset your router and now nothing works? Restore WiFi, ISP settings, and get back online step by step.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You pressed that tiny reset button hoping to fix a problem, and now your internet is completely gone. A factory reset wipes every custom setting — WiFi name, password, ISP credentials, everything. Here&apos;s how to systematically restore your connection.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Connect via Ethernet or Default WiFi</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>After reset, your router&apos;s WiFi name changes to the <strong>default SSID</strong> (printed on the router label)</li>
            <li>Look at the <strong>bottom or back of your router</strong> for: default WiFi name, default password, admin URL</li>
            <li>Connect your computer to this default WiFi, or use an <strong>Ethernet cable</strong> (more reliable)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Access Router Admin Panel</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Open a browser and go to your router&apos;s admin address:</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Router Brand</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Admin URL</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Default Login</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Netgear</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">routerlogin.net / 192.168.1.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">admin / password</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">TP-Link</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">tplinkwifi.net / 192.168.0.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">admin / admin</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Linksys</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">192.168.1.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">admin / admin</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Asus</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">router.asus.com / 192.168.1.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">admin / admin</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">D-Link</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">192.168.0.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">admin / (blank)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Run the Setup Wizard</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Most routers show a <strong>setup wizard automatically</strong> after reset</li>
            <li>Set your <strong>time zone</strong></li>
            <li>For <strong>Internet Connection Type</strong>, choose correctly:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>DHCP/Automatic</strong> — for cable internet (Comcast, Spectrum, Cox)</li>
                <li><strong>PPPoE</strong> — for DSL/fiber (AT&amp;T, CenturyLink, Frontier) — requires username/password from ISP</li>
                <li><strong>Static IP</strong> — for business connections</li>
              </ul>
            </li>
            <li>Set a new <strong>WiFi name (SSID)</strong> and <strong>password</strong></li>
            <li>Set a new <strong>admin password</strong> (don&apos;t leave the default)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Reconfigure WiFi Settings</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Set <strong>WPA3 or WPA2</strong> security (never WEP)</li>
            <li>Choose a unique WiFi name that&apos;s easy to identify</li>
            <li>Create a strong password (12+ characters)</li>
            <li>If you have dual-band: set different names for <strong>2.4 GHz and 5 GHz</strong> to easily identify them</li>
            <li>After saving, <strong>reconnect all devices</strong> with the new WiFi password</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Restart Modem (If Separate)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If you have a separate modem and router, unplug the modem for 60 seconds, then plug it back in. The modem needs to re-register the router&apos;s new MAC address. Some ISPs require you to <strong>call them</strong> to register a new device.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Clone MAC Address (If Required)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Some ISPs lock connections to specific MAC addresses. If internet still doesn&apos;t work after setup, go to router admin → <strong>Advanced → MAC Clone → Clone Current PC&apos;s MAC Address</strong>. Or call your ISP and ask them to register the router&apos;s MAC address.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention: Backup Before Resetting</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Export configuration:</strong> Router admin → System → Backup → Save File</li>
            <li><strong>Write down ISP credentials</strong> (PPPoE username/password) and keep them safe</li>
            <li><strong>Screenshot your WiFi settings</strong> before any reset</li>
            <li><strong>Note your internet connection type</strong> (DHCP, PPPoE, Static IP)</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Need Help Reconfiguring Your Router?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can walk you through router setup and ISP configuration.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/netgear-router-not-working-after-reset", title: "Netgear After Reset", desc: "Fix Netgear post-reset." },
                { href: "/router-login-page-not-opening", title: "Router Login Not Opening", desc: "Access router admin panel." },
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
