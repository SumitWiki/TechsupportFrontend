import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Working After Reset? 9 Fixes (2026)",
  description: "WiFi not working after factory reset? Fix no internet, missing network name, wrong password, and connection issues with our step-by-step 2026 recovery guide.",
  alternates: { canonical: "/wifi-not-working-after-reset" },
  openGraph: { title: "WiFi Not Working After Reset — 9 Fixes", description: "Fix your WiFi after a factory reset.", type: "article", url: "https://techsupport4.com/wifi-not-working-after-reset" },
  twitter: { card: "summary_large_image", title: "WiFi Fix After Reset | TechSupport4", description: "9 fixes for WiFi not working after factory reset." },
};

const faqs = [
  { q: "Why is my WiFi not working after a factory reset?", a: "A factory reset erases all custom settings — your WiFi name (SSID), password, ISP login credentials, DNS settings, and port forwarding rules. If you had ISP-specific settings (like PPPoE credentials), the router can't connect to the internet until those are re-entered. Your devices also need to reconnect with the new default WiFi credentials." },
  { q: "Where do I find my default WiFi name and password after reset?", a: "Check the label on the bottom or back of your router. It shows the default SSID (WiFi name) and password/key. If the label is missing, check the router's manual or the manufacturer's website. For ISP-provided routers, call your ISP for default credentials." },
  { q: "Do I need to set up my router again after factory reset?", a: "Yes. After a factory reset, you need to: (1) Connect via default WiFi or Ethernet, (2) Access the admin panel (usually 192.168.0.1 or 192.168.1.1), (3) Run the setup wizard, (4) Enter ISP credentials if needed, (5) Set a new WiFi name and password. Some ISP gateways auto-configure after a few minutes." },
  { q: "Why can't my devices connect to WiFi after reset?", a: "After reset, the WiFi name and password revert to defaults. Your devices still have the old credentials saved. You need to: (1) Forget the old network on each device, (2) Scan for networks and find the default name, (3) Connect using the default password from the router label, (4) Once you set a new name/password, update all devices again." },
  { q: "My router has internet (lights normal) but WiFi doesn't work after reset. Why?", a: "The internet connection and WiFi broadcast are separate functions. After reset, WiFi may be disabled, set to a different channel your device doesn't support, or broadcasting on a different SSID. Try connecting via Ethernet first, then check WiFi settings in the admin panel at 192.168.0.1 or 192.168.1.1." },
];

export default function WiFiNotWorkingAfterReset() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Not Working After Reset — 9 Fixes", description: "Complete guide to fix WiFi after factory reset.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-03-01", dateModified: "2026-03-01" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-violet-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-violet-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Reset</span>
            </nav>
            <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-violet-500/30">Situational Fix</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Not Working After Reset?</h1>
            <p className="mt-4 text-violet-200 text-lg max-w-2xl">9 step-by-step fixes to restore your WiFi after a factory reset — reconnect devices, re-enter ISP credentials, and reconfigure your network.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-violet-300"><span>Updated: Mar 2026</span><span className="w-1 h-1 rounded-full bg-violet-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">A factory reset wipes <strong>everything</strong> — your WiFi name, password, ISP credentials, and all custom settings. Don&apos;t panic. In most cases, you can get back online in 10-15 minutes by following these steps.</p>

          <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-5 mb-8">
            <p className="text-violet-800 dark:text-violet-300 font-semibold mb-2">⚡ Quick Recovery Checklist</p>
            <ol className="text-violet-700 dark:text-violet-300 text-sm space-y-1 list-decimal pl-5">
              <li>Find default WiFi name &amp; password on router label</li>
              <li>Connect a device using default credentials</li>
              <li>Access admin panel (192.168.0.1 or 192.168.1.1)</li>
              <li>Run setup wizard &amp; enter ISP credentials if needed</li>
              <li>Set new WiFi name &amp; password, reconnect all devices</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Find Default WiFi Credentials</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>After reset, router uses <strong>default WiFi name (SSID) and password</strong></li>
            <li>Check the <strong>label on the bottom/back</strong> of your router</li>
            <li>Look for: <strong>SSID, Network Key, WiFi Password, WPA Key</strong></li>
            <li>The default name is often the router brand + random characters (e.g., &quot;NETGEAR-5G-2A3B&quot;)</li>
            <li>If no label, check the <strong>manual or manufacturer website</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Connect to Default Network</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On your device, go to <strong>WiFi settings</strong></li>
            <li><strong>Forget</strong> your old network name (it won&apos;t work anymore)</li>
            <li>Scan for available networks</li>
            <li>Find the <strong>default SSID</strong> from the router label</li>
            <li>Connect using the <strong>default password</strong> from the label</li>
            <li>If WiFi doesn&apos;t appear, try connecting via <strong>Ethernet cable</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Access Router Admin Panel</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Open a browser and type the router&apos;s default gateway:</li>
          </ol>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Brand</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Default Admin URL</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Default Login</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Netgear</td><td className="p-3">192.168.1.1 or routerlogin.net</td><td className="p-3">admin / password</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">TP-Link</td><td className="p-3">192.168.0.1 or tplinkwifi.net</td><td className="p-3">admin / admin</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">Linksys</td><td className="p-3">192.168.1.1</td><td className="p-3">admin / admin</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3">ASUS</td><td className="p-3">192.168.1.1 or router.asus.com</td><td className="p-3">admin / admin</td></tr>
                <tr><td className="p-3">Xfinity/Comcast</td><td className="p-3">10.0.0.1</td><td className="p-3">admin / password</td></tr>
              </tbody>
            </table>
          </div>
          <ol start={2} className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log in with <strong>default admin credentials</strong></li>
            <li>Run the <strong>setup wizard</strong> if prompted</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Re-Enter ISP Credentials</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If your ISP requires PPPoE login (common with DSL and some fiber providers):</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In the admin panel, go to <strong>WAN / Internet settings</strong></li>
            <li>Select connection type: <strong>PPPoE</strong></li>
            <li>Enter your ISP <strong>username and password</strong></li>
            <li>If you don&apos;t have these, <strong>call your ISP</strong></li>
            <li>Save and reboot the router</li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 Most cable internet (Comcast, Spectrum, Cox) uses DHCP and doesn&apos;t need credentials. DSL (AT&amp;T, CenturyLink) and some fiber providers do.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Set New WiFi Name &amp; Password</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In admin panel, go to <strong>Wireless / WiFi settings</strong></li>
            <li>Set a new <strong>WiFi name (SSID)</strong></li>
            <li>Choose <strong>WPA3 or WPA2</strong> security</li>
            <li>Set a strong <strong>password</strong> (12+ characters)</li>
            <li>Set up both <strong>2.4GHz and 5GHz bands</strong> if available</li>
            <li>Save and wait for the router to restart WiFi</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Reconnect All Devices</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On each device, <strong>forget the old network</strong></li>
            <li>Scan for your <strong>new WiFi name</strong></li>
            <li>Connect with the <strong>new password</strong></li>
            <li>Smart home devices (cameras, thermostats) often need <strong>reconfiguration via their app</strong></li>
            <li>For printers, re-run the <strong>wireless setup</strong> on the printer itself</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Flush DNS on Your Devices</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-8 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /release</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /renew</p>
            <p className="text-slate-700 dark:text-slate-300 mt-3"><span className="text-green-600 dark:text-green-400"># Mac</span></p>
            <p className="text-slate-800 dark:text-slate-200">sudo dscacheutil -flushcache</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Update Router Firmware</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>After re-setup, check for <strong>firmware updates</strong> in the admin panel</li>
            <li>Usually under <strong>Administration → Firmware Update</strong></li>
            <li>Update if available — often fixes bugs that caused the original issue</li>
            <li>Router will reboot after update — <strong>don&apos;t unplug during update</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Support</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>If router won&apos;t get an internet connection after re-setup</li>
            <li>Call your <strong>ISP</strong> — they may need to reprovision your modem</li>
            <li>Call the <strong>router manufacturer</strong> for hardware issues</li>
            <li>Consider if the reset was caused by a deeper hardware failure</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-violet-700 to-violet-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">WiFi Still Down After Reset?</h3>
            <p className="mt-2 text-violet-200 max-w-lg mx-auto">Our experts can reconfigure your router remotely and get all your devices connected again.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-violet-700 px-8 py-3 rounded-xl font-semibold hover:bg-violet-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi troubleshooting." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
                { href: "/router-not-working-after-power-outage", title: "After Power Outage", desc: "Fix router after power outage." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "General internet troubleshooting." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-violet-700 dark:text-violet-400 group-hover:text-violet-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
