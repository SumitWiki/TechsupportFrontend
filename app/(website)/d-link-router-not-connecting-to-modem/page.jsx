import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "D-Link Router Not Connecting to Modem? Fix Guide (2026)",
  description: "D-Link router not connecting to modem? Fix WAN port issues, PPPoE configuration, LED errors, and firmware problems on all D-Link models step by step.",
  alternates: { canonical: "/d-link-router-not-connecting-to-modem" },
  openGraph: { title: "D-Link Router Not Connecting to Modem? Fix Guide", description: "Fix D-Link router-to-modem connection.", type: "article", url: "https://techsupport4.com/d-link-router-not-connecting-to-modem" },
  twitter: { card: "summary_large_image", title: "Fix D-Link Router | TechSupport4", description: "D-Link not connecting to modem — fix guide." },
};

const faqs = [
  { q: "Why won't my D-Link router connect to the modem?", a: "Common causes: (1) Ethernet cable plugged into LAN port instead of WAN/Internet port, (2) Modem not fully booted — restart modem first, wait 3 min, (3) Wrong connection type settings (DHCP vs PPPoE), (4) Damaged Ethernet cable, (5) ISP requires MAC address registration, (6) D-Link firmware is outdated, (7) WAN port on router is faulty." },
  { q: "Where is the WAN port on a D-Link router?", a: "The WAN port (also labeled 'Internet') is usually on the back of the router, separate from the numbered LAN ports. On most D-Link models it's colored differently — often yellow or marked with a globe icon. The modem's Ethernet cable must go into this port, NOT the LAN ports." },
  { q: "How do I access D-Link router settings?", a: "Open a browser → type 192.168.0.1 or dlinkrouter.local. Default login: admin with no password (leave password blank) on older models, or admin/admin on newer models. The default credentials are on the label on the bottom of the router." },
  { q: "D-Link router Internet LED is red/orange — what does it mean?", a: "Orange/amber Internet LED: cable connected but no internet connection. Red LED (some models): connection error. No LED: no cable detected in WAN port. Green/white solid LED: internet working. Fix orange/red: check modem, verify connection type, restart both devices." },
  { q: "Can I use a D-Link router as an access point instead?", a: "Yes — if you have another router handling internet, set D-Link to Access Point (AP) mode: Settings → Network → Internet → change to 'Bridge Mode' or 'Access Point.' Connect via LAN port (not WAN). This lets the D-Link extend WiFi without needing to handle internet routing. Disable DHCP on the D-Link to avoid IP conflicts." },
];

export default function DLinkNotConnectingToModem() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "D-Link Router Not Connecting to Modem — Fix Guide", description: "Fix D-Link router-to-modem connection.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-23", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">D-Link Not Connecting to Modem</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">D-Link Router Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">D-Link Router Not Connecting to Modem? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix D-Link router failing to connect to your cable or DSL modem — covers WAN port issues, connection type settings, DNS, and firmware fixes for all models.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">D-Link routers are affordable and popular, but &quot;not connecting to modem&quot; is a common complaint — typically caused by a wrong cable port, misconfigured connection type, or the modem needing a restart. This guide walks through every fix in order of likelihood.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check WAN Port Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">The #1 mistake: plugging the modem cable into a LAN port instead of the WAN port. On D-Link routers, the <strong>WAN port</strong> is labeled &quot;Internet&quot; with a globe icon and is colored differently (usually yellow). Move the Ethernet cable from the modem into this port. Use a known-good cable and push until you hear a click.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Modem First, Then Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug both modem and D-Link router</li>
            <li>Wait 60 seconds</li>
            <li>Plug in <strong>modem first</strong> — wait 3 minutes until all LEDs are solid</li>
            <li>Plug in <strong>D-Link router</strong> — wait 2 minutes</li>
            <li>Internet LED should turn green/white — test by loading a website</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Set Correct Internet Connection Type</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open browser → go to <strong>192.168.0.1</strong> or <strong>dlinkrouter.local</strong></li>
            <li>Login (default: admin / blank password or admin / admin)</li>
            <li>Go to <strong>Settings → Internet</strong> (or Setup → Internet Connection)</li>
            <li>Set connection type:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>DHCP (Dynamic IP):</strong> Cable internet — Comcast, Spectrum, Cox</li>
                <li><strong>PPPoE:</strong> DSL/Fiber — AT&amp;T, CenturyLink — enter ISP username/password</li>
                <li><strong>Static IP:</strong> Business connections</li>
              </ul>
            </li>
            <li>Save and wait for router to reconnect</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Test Direct Modem Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Connect computer directly to modem via Ethernet (bypass the D-Link). If you have internet directly, the D-Link router is the issue. If not, the problem is your modem or ISP. This test takes 2 minutes and saves hours of troubleshooting the wrong device.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Clone MAC Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If internet works when connected directly to modem but not through D-Link, your ISP may be blocking the router&apos;s MAC address. In D-Link admin: <strong>Settings → Internet → MAC Address Clone</strong> → clone your computer&apos;s MAC. Save and restart. Alternatively, call your ISP and ask them to register the router&apos;s MAC.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Change DNS Servers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">In D-Link admin: <strong>Settings → Internet → Primary DNS: 8.8.8.8, Secondary DNS: 8.8.4.4</strong>. Save. This resolves DNS-related &quot;connected but nothing loads&quot; issues. D-Link&apos;s default is to use ISP DNS which can fail during outages.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Update D-Link Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Go to <strong>Management → Firmware</strong> (or System → Firmware Update) → Check online. If automatic update isn&apos;t available, download firmware from <strong>support.dlink.com</strong> for your exact model → upload manually. Outdated D-Link firmware has known connectivity bugs on certain ISPs.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Hold reset button (pinhole) for <strong>10 seconds</strong> with a paperclip. Router restarts with factory defaults. Reconfigure via 192.168.0.1 setup wizard. This clears any corrupted settings preventing modem communication.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">D-Link Still Not Connecting?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely configure your D-Link router.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/d-link-router-blinking-orange-light", title: "D-Link Blinking Orange Light", desc: "Fix D-Link LED issues." },
                { href: "/router-not-connecting-to-modem", title: "Router Not Connecting to Modem", desc: "Universal modem fix guide." },
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
