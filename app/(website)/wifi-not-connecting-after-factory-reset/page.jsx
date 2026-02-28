import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Connecting After Factory Reset? Fix Guide (2026)",
  description: "WiFi stopped working after factory reset? Reconfigure your router, find default credentials, set up ISP connection, and restore WiFi step by step.",
  alternates: { canonical: "/wifi-not-connecting-after-factory-reset" },
  openGraph: { title: "WiFi Not Connecting After Factory Reset — Fix Guide", description: "Fix WiFi after factory reset.", type: "article", url: "https://techsupport4.com/wifi-not-connecting-after-factory-reset" },
  twitter: { card: "summary_large_image", title: "Post-Reset WiFi Fix | TechSupport4", description: "WiFi not connecting after factory reset — fix guide." },
};

const faqs = [
  { q: "Why did my WiFi stop working after factory reset?", a: "A factory reset erases ALL settings: WiFi name (SSID), WiFi password, ISP configuration, and security settings. Your devices are still looking for your old WiFi network name/password, which no longer exists. You need to either reconfigure the router with the same settings or update all devices." },
  { q: "How do I find my router's default WiFi after factory reset?", a: "After factory reset, the router broadcasts a default WiFi network. Check: (1) The sticker on the bottom/back of the router — it shows the default SSID (WiFi name) and password, (2) Common default format: 'NETGEAR##', 'TP-LINK_####', 'ASUS_####', (3) The password is usually a randomly generated string on the label." },
  { q: "Do I need to reconfigure my ISP settings after factory reset?", a: "It depends: Cable ISP (Xfinity, Spectrum, Cox): Usually no — DHCP works automatically. Just restart the modem. DSL ISP (AT&T, CenturyLink): YES — you need to re-enter PPPoE username and password. Fiber ISP (Verizon Fios, Google Fiber): Usually auto-detects, but may need modem restart." },
  { q: "How do I reconnect all my smart home devices after factory reset?", a: "This is the biggest pain point. Each device needs to be reconnected individually: (1) Set up the router with the SAME WiFi name and password as before — all devices will reconnect automatically, (2) If that's not possible, you'll need to go through setup on each device: smart speakers, cameras, plugs, TVs, etc." },
  { q: "Can I restore my previous settings after factory reset?", a: "Only if you backed them up: Some routers (Netgear, Asus, TP-Link) have a 'Backup Settings' option in admin panel. You can restore from a backup file. If you didn't back up, all settings are permanently lost and you must reconfigure from scratch." },
];

export default function WifiNotConnectingAfterFactoryReset() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Not Connecting After Factory Reset — Fix Guide", description: "Fix WiFi after factory reset.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Factory Reset</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Post-Reset Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Not Connecting After Factory Reset?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Factory reset wiped your WiFi settings? Reconfigure the router, set up ISP connection, and reconnect all your devices.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You factory reset your router to fix a problem, and now nothing connects to WiFi — phones, laptops, smart home devices. That&apos;s because the reset wiped everything: your WiFi name, password, and ISP configuration. Here&apos;s how to set everything up again.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Connect to Default WiFi</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check the <strong>sticker on the bottom/back of your router</strong></li>
            <li>Find the <strong>default SSID</strong> (WiFi name) and <strong>default password</strong></li>
            <li>On your phone/laptop, look for this network name in available WiFi networks</li>
            <li>Connect using the default password</li>
            <li><strong>Alternative:</strong> Connect a computer to the router using an <strong>Ethernet cable</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Access Router Admin Panel</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open a browser and go to <strong>192.168.1.1</strong> or <strong>192.168.0.1</strong></li>
            <li>Login with <strong>default admin credentials</strong> (check router label or try admin/admin)</li>
            <li>The setup wizard should start automatically</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Configure Internet (ISP) Settings</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">ISP Type</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Connection Type</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">What You Need</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Cable (Xfinity, Spectrum, Cox)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">DHCP / Dynamic IP</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Nothing — auto detects</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">DSL (AT&amp;T, CenturyLink)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">PPPoE</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Username &amp; password from ISP</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Fiber (Verizon Fios)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">DHCP (usually)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Restart ONT if needed</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Business / Static</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Static IP</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">IP, Subnet, Gateway, DNS from ISP</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Set Up WiFi Name and Password</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"><strong>Pro tip:</strong> Use the <strong>SAME WiFi name and password</strong> as before the reset. This way, all your devices (phones, smart speakers, cameras, etc.) will automatically reconnect without needing to be reconfigured.</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In router admin, go to <strong>Wireless Settings</strong></li>
            <li>Set <strong>SSID</strong> (WiFi name) — use the old name if possible</li>
            <li>Set <strong>Security</strong> to <strong>WPA2/WPA3</strong></li>
            <li>Enter your <strong>WiFi password</strong> — use the old one if possible</li>
            <li>Set up <strong>both 2.4 GHz and 5 GHz</strong> bands if your router is dual-band</li>
            <li>Save and apply</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Restart Modem</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the <strong>modem</strong> for 60 seconds</li>
            <li>Plug it back in → wait until the Online light is solid (3-5 min)</li>
            <li>The router should now get internet from the modem</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Reconnect Devices</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>If you used the same WiFi name/password:</strong> Most devices reconnect automatically — give them 5 minutes</li>
            <li><strong>If you changed the WiFi name/password:</strong> Each device needs manual reconnection:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Phones/laptops:</strong> Forget old network → connect to new one</li>
                <li><strong>Smart speakers:</strong> Use Alexa/Google Home app to update WiFi</li>
                <li><strong>Smart TVs:</strong> Settings → Network → WiFi → select new network</li>
                <li><strong>Cameras:</strong> Most need setup from scratch in their app</li>
                <li><strong>Printers:</strong> Run WiFi setup wizard using printer&apos;s panel or app</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention Tip: Back Up Router Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Before any future reset or firmware update: Router Admin → System/Administration → <strong>Backup Configuration</strong> → save the file. You can restore this file after a reset to instantly recover all settings.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Need Help Reconfiguring?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can set up your router and reconnect all devices.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working-after-router-reset", title: "After Router Reset", desc: "Fix internet post-reset." },
                { href: "/wifi-not-working-after-changing-password", title: "After Password Change", desc: "Fix WiFi after new password." },
                { href: "/router-login-page-not-opening", title: "Router Login Issue", desc: "Access router admin panel." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
