import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Linksys Router Not Connecting to Internet? Fix Guide (2026)",
  description:
    "Linksys router not connecting to internet? Fix no internet, orange light, DNS issues, and ISP problems on all Linksys and Velop models step by step.",
  alternates: { canonical: "/linksys-router-not-connecting-to-internet" },
  openGraph: {
    title: "Linksys Router Not Connecting to Internet? Fix Guide",
    description: "Fix Linksys internet connection failures.",
    type: "article",
    url: "https://techsupport4.com/linksys-router-not-connecting-to-internet",
  },
  twitter: { card: "summary_large_image", title: "Fix Linksys No Internet | TechSupport4", description: "Linksys router not connecting — step-by-step fix." },
};

const faqs = [
  { q: "Why won't my Linksys router connect to the internet?", a: "Common causes: (1) Modem needs restarting, (2) Ethernet cable not in WAN port or damaged, (3) Wrong connection type in router settings (DHCP vs PPPoE), (4) ISP outage in your area, (5) DNS failure, (6) ISP needs to register router's MAC address, (7) Firmware is outdated or corrupted." },
  { q: "How do I access my Linksys router settings?", a: "Open a browser → type 192.168.1.1 or myrouter.local → login with admin password. Default password is 'admin' on older models. For Velop, use the Linksys app instead." },
  { q: "My Linksys Velop won't connect to internet — what do I do?", a: "In the Linksys app: (1) Check Internet Connection settings — make sure connection type matches ISP, (2) Restart the primary node, (3) Check that Ethernet goes to WAN port, (4) Try static DNS (8.8.8.8), (5) Factory reset primary node and set up again via app." },
  { q: "Linksys router lights are on but no internet — why?", a: "The router is powered and broadcasting WiFi, but has no upstream internet. Check: (1) Is the WAN/Internet LED lit? If not, cable issue. (2) Is it orange? Connection type misconfigured. (3) Is it green/white? DNS issue — try 8.8.8.8 in router or device settings." },
  { q: "How do I factory reset a Linksys router?", a: "Hold the reset button (pinhole on bottom/back) with a paperclip for 10-15 seconds until all lights blink. Release and wait 2-3 minutes. Router will revert to default settings. You'll need to reconfigure WiFi name, password, and internet settings via 192.168.1.1 or the Linksys app." },
];

export default function LinksysNotConnecting() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Linksys Router Not Connecting to Internet — Fix Guide", description: "Fix Linksys internet connection failures.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-22", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Linksys Not Connecting</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Linksys Router Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Linksys Router Not Connecting to Internet? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix your Linksys router when it broadcasts WiFi but has no internet — covers classic Linksys routers and Velop mesh systems with 8 proven fixes.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Your Linksys router is on and broadcasting WiFi, but devices can&apos;t access the internet. The most common causes are boot order issues between modem and router, misconfigured internet connection type, or DNS failures. This guide covers all Linksys models including Velop mesh.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle Modem and Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug both modem and Linksys from power</li>
            <li>Wait 60 seconds</li>
            <li>Plug in <strong>modem first</strong> — wait 3 minutes until all lights are solid</li>
            <li>Plug in <strong>Linksys router</strong> — wait 2 minutes</li>
            <li>Check if internet LED is now solid (green or white depending on model)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check WAN Port Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">The Ethernet cable from your modem <strong>must</strong> go into the WAN/Internet port on the Linksys — not a LAN port. On most Linksys routers, the WAN port is labeled &quot;Internet&quot; and colored differently (often blue or yellow). Try a different Ethernet cable to rule out cable damage.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Verify ISP Connection Type</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Log into 192.168.1.1 → Connectivity → Internet Settings:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Automatic/DHCP:</strong> For cable internet (Comcast, Spectrum, Cox)</li>
            <li><strong>PPPoE:</strong> For DSL/fiber — enter ISP username and password</li>
            <li><strong>Static IP:</strong> For business connections — enter IP details from ISP</li>
            <li>If unsure, start with Automatic/DHCP — most common for home internet</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Change DNS Servers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">ISP DNS can fail silently — you&apos;re &quot;connected&quot; but nothing loads. In router settings: <strong>Connectivity → Internet Settings → DNS</strong> → set to Google (<strong>8.8.8.8</strong>, <strong>8.8.4.4</strong>) or Cloudflare (<strong>1.1.1.1</strong>, <strong>1.0.0.1</strong>). Save and restart. Alternatively, change DNS on each device: Windows → Network settings → IPv4 → DNS.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Clone MAC Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Some ISPs lock to a MAC address. In Linksys admin: <strong>Connectivity → Internet Settings → MAC Address Clone</strong> → clone your computer&apos;s MAC address (must be connected via Ethernet). Save and restart router. If this fixes it, your ISP was blocking the router&apos;s native MAC address.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Go to <strong>192.168.1.1 → Connectivity → Firmware Update</strong> → Check for Updates. For Velop: open the Linksys app → Firmware Update. Install any available updates and wait 5 minutes for the router to restart. Outdated firmware can cause persistent &quot;no internet&quot; issues.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Test Direct Modem Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Bypass the router entirely: connect your computer directly to the modem via Ethernet. If you have internet, the problem is the Linksys router. If you don&apos;t, the problem is your ISP or modem — call your ISP. This simple test saves hours of troubleshooting.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Last resort — press the reset button (pinhole) with a paperclip for <strong>10-15 seconds</strong>. Then set up from scratch via 192.168.1.1 or the Linksys app. You&apos;ll need your ISP credentials and desired WiFi settings.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Linksys Still Not Connecting?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely configure your Linksys router and restore internet.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/linksys-router-not-working-after-power-outage", title: "Linksys After Power Outage", desc: "Fix Linksys after outage." },
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
