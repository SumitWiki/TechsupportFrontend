import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Asus Router Not Connecting to Internet? Fix Guide (2026)",
  description: "Asus router not connecting to internet? Fix no internet on Asus RT-AX, ROG Rapture, and ZenWiFi models — covers DHCP, DNS, firmware, and ISP issues.",
  alternates: { canonical: "/asus-router-not-connecting-to-internet" },
  openGraph: { title: "Asus Router Not Connecting to Internet? Fix Guide", description: "Fix Asus router internet connection problems.", type: "article", url: "https://techsupport4.com/asus-router-not-connecting-to-internet" },
  twitter: { card: "summary_large_image", title: "Fix Asus No Internet | TechSupport4", description: "Asus router not connecting — step-by-step fix." },
};

const faqs = [
  { q: "Why is my Asus router not connecting to the internet?", a: "Common causes: (1) Modem needs restarting first, (2) Wrong WAN connection type (DHCP vs PPPoE), (3) DNS failure, (4) ISP hasn't registered the router's MAC address, (5) Firmware is outdated, (6) Ethernet cable not in WAN port, (7) ISP outage. Start by power cycling modem first, then router." },
  { q: "How do I access my Asus router admin panel?", a: "Open a browser → type router.asus.com or 192.168.1.1. Default login: admin/admin. If you've changed the password and forgot it, factory reset (hold reset button 10 seconds). The ASUSWRT interface lets you configure all internet and WiFi settings." },
  { q: "My Asus router says 'Disconnected' in the status — what do I do?", a: "In ASUSWRT dashboard, 'Disconnected' under WAN means no internet. Check: (1) WAN → Internet Connection → Connection Type matches ISP, (2) Restart modem, (3) Advanced → WAN → Release/Renew IP, (4) Try MAC Clone, (5) Change DNS to 8.8.8.8. If using PPPoE, re-enter ISP username/password." },
  { q: "Asus ZenWiFi not connecting to internet — how to fix?", a: "For ZenWiFi mesh: (1) Make sure the primary node (with WAN connection) has Ethernet from modem in WAN port, (2) Open Asus Router app → check internet status, (3) Restart modem first, then primary node, (4) If satellite nodes show offline, place them closer to primary during initial setup — move them after sync." },
  { q: "How do I reset my Asus router to factory settings?", a: "Hold the Reset button (pinhole on back) with a paperclip for 10 seconds until the power LED blinks. Release and wait 3 minutes. Router reverts to default settings: WiFi name 'ASUS_XX', login admin/admin, no ISP configuration. You'll need to run the setup wizard at router.asus.com." },
];

export default function AsusRouterNotConnecting() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Asus Router Not Connecting to Internet — Fix Guide", description: "Fix Asus router internet connection problems.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-22", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Asus Not Connecting</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Asus Router Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Asus Router Not Connecting to Internet? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix internet connection issues on Asus RT-AX, ROG Rapture, and ZenWiFi routers — covers DHCP/PPPoE configuration, DNS fixes, MAC cloning, and firmware updates.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Asus makes some of the best home routers — RT-AX86U, ROG Rapture GT-AX6000, ZenWiFi mesh — but even the best hardware won&apos;t help if the internet connection isn&apos;t configured correctly. This guide covers every reason your Asus router might not connect to the internet and how to fix each one.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle Modem and Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug both modem and Asus router</li>
            <li>Wait 60 seconds</li>
            <li>Plug in <strong>modem first</strong> — wait 3 minutes until online LED is solid</li>
            <li>Plug in <strong>Asus router</strong> — wait 2 minutes</li>
            <li>Check: WAN LED on router should be solid (not blinking continuously)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Verify WAN Connection Type</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Log into <strong>router.asus.com</strong> or <strong>192.168.1.1</strong> → WAN → Internet Connection:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Automatic IP (DHCP):</strong> Cable internet — Comcast, Spectrum, Cox, Xfinity</li>
            <li><strong>PPPoE:</strong> DSL/Fiber — AT&amp;T, CenturyLink, Frontier — enter ISP credentials</li>
            <li><strong>Static IP:</strong> Business connections — enter IP, subnet, gateway from ISP</li>
            <li>If your ISP uses PPPoE and the credentials are wrong, you&apos;ll have WiFi but no internet</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change DNS Servers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">In ASUSWRT: <strong>WAN → Internet Connection → DNS Server</strong> → set to: Primary <strong>8.8.8.8</strong>, Secondary <strong>8.8.4.4</strong>. Apply. This bypasses potentially broken ISP DNS. Alternatively, use Cloudflare DNS (1.1.1.1) for faster resolution.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Release and Renew WAN IP</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">In the ASUSWRT dashboard, you can see your WAN IP. If it shows <strong>0.0.0.0</strong> or a 169.x.x.x address, your router didn&apos;t get an IP from the modem/ISP. Go to <strong>WAN → Internet Connection</strong> → click <strong>Release</strong> then <strong>Renew</strong>. If this fails, restart the modem and try again.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Clone MAC Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Some ISPs (especially cable) lock to a specific device MAC. In ASUSWRT: <strong>WAN → Internet Connection → Special Requirement from ISP → MAC Address</strong> → enter the MAC of the device previously connected to modem, or select &quot;Clone&quot;. Apply and reboot router.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check WAN Port and Cables</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Modem Ethernet cable → <strong>WAN port</strong> on Asus (usually labeled/colored blue)</li>
            <li>Try a <strong>different Ethernet cable</strong></li>
            <li>If WAN LED doesn&apos;t light up at all, the port may be damaged</li>
            <li>Some Asus routers allow designating a LAN port as WAN in <strong>LAN → WAN Port</strong> settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Update Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Go to <strong>Administration → Firmware Upgrade → Check</strong>. Install any available updates. Known firmware bugs on older versions can prevent internet connectivity on specific ISPs. If the update fails, see our <Link href="/asus-router-firmware-update-failed" className="text-blue-600 dark:text-blue-400 hover:underline">Asus firmware recovery guide</Link>.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Hold reset button for 10 seconds → router restarts with defaults → set up via <strong>router.asus.com</strong> setup wizard. Enter ISP connection type, WiFi name/password, and admin credentials. This clears any corrupted settings preventing internet access.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Asus Router Still Not Connecting?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely configure your Asus router settings.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/asus-router-firmware-update-failed", title: "Asus Firmware Update Failed", desc: "Recover from failed update." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi Connected No Internet", desc: "Fix on any router brand." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet troubleshooting." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
