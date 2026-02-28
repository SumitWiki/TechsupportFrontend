import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "TP-Link Router Connected But No Internet? Fix Guide (2026)",
  description:
    "TP-Link router connected but no internet? Fix the orange internet light, DNS failures, and ISP issues on TP-Link Archer, Deco, and all models step by step.",
  alternates: { canonical: "/tp-link-router-connected-but-no-internet" },
  openGraph: {
    title: "TP-Link Router Connected But No Internet? Fix Guide",
    description: "Fix TP-Link WiFi connected but no internet access.",
    type: "article",
    url: "https://techsupport4.com/tp-link-router-connected-but-no-internet",
  },
  twitter: {
    card: "summary_large_image",
    title: "TP-Link No Internet Fix | TechSupport4",
    description: "TP-Link connected but no internet — step-by-step fix.",
  },
};

const faqs = [
  {
    q: "Why does my TP-Link say connected but no internet?",
    a: "Your device is connected to the TP-Link router's WiFi, but the router itself can't reach the internet. Causes: (1) ISP is down, (2) Wrong connection type in router settings (should be DHCP for cable, PPPoE for DSL), (3) DNS server issue, (4) Modem needs restarting, (5) Ethernet cable between modem and router is loose/damaged, (6) ISP needs to register the router's MAC address.",
  },
  {
    q: "How do I check my TP-Link internet connection type?",
    a: "Log into tplinkwifi.net or 192.168.0.1 → Network → Internet. Check the connection type: use 'Dynamic IP' for cable internet (Comcast, Spectrum), 'PPPoE' for DSL/fiber (AT&T, CenturyLink) — you'll need your ISP username and password, or 'Static IP' for business connections. If unsure, try Dynamic IP first, then PPPoE.",
  },
  {
    q: "TP-Link internet light is orange — what does it mean?",
    a: "An orange internet LED on a TP-Link router means the router is physically connected to the modem but has no internet access. Green = everything working, Orange = no internet. Fix: restart modem, check connection type settings, change DNS to 8.8.8.8, update firmware, or contact your ISP.",
  },
  {
    q: "How do I fix TP-Link Deco not connecting to internet?",
    a: "For Deco mesh systems: (1) Make sure the main Deco unit is connected to the modem via Ethernet, (2) Open the Deco app → tap the main Deco → Internet Connection → set correctly, (3) Restart the modem first, then restart Deco from the app, (4) Factory reset: flip the Deco upside down and hold the reset button for 10 seconds, (5) Remove and re-add the Deco in the app.",
  },
  {
    q: "TP-Link connected but no internet on one device only — why?",
    a: "If other devices work fine but one doesn't: (1) The device has a DNS issue — change DNS to 8.8.8.8 in that device's WiFi settings, (2) Run 'ipconfig /release' then 'ipconfig /renew' on Windows, (3) Forget the WiFi network and reconnect, (4) Disable VPN or proxy on that device, (5) Network adapter driver needs updating (Windows: Device Manager → Network adapters → Update).",
  },
];

export default function TPLinkConnectedButNoInternet() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: "TP-Link Router Connected But No Internet? Fix Guide",
          description: "Fix TP-Link WiFi connected but no internet access.",
          author: { "@type": "Organization", name: "TechSupport4" },
          publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
          datePublished: "2026-02-20", dateModified: "2026-02-28",
        }),
      }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/tp-link-router-not-working" className="hover:text-white transition">TP-Link</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Connected But No Internet</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">TP-Link Router Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              TP-Link Router Connected But No Internet? Complete Fix Guide
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Your devices connect to TP-Link WiFi but can&apos;t browse the web. The internet light is orange instead of green. This guide fixes it on all TP-Link models including Archer and Deco.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            &quot;Connected but no internet&quot; is the most frustrating WiFi problem — you see the WiFi icon, but nothing loads. On TP-Link routers, this usually means the router is working as a local network but can&apos;t communicate with your ISP. The fix depends on what&apos;s causing the disconnect between your router and the internet.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Quick Check: Is Your ISP Working?</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Before troubleshooting the router, connect a computer <strong>directly to the modem</strong> with an Ethernet cable (bypass the TP-Link router). If you have no internet directly from the modem, the problem is your ISP — call them. If the direct connection works, continue with the TP-Link fixes below.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Modem and Router in Order</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug the <strong>modem</strong> from power — wait 60 seconds</li>
            <li>Unplug the <strong>TP-Link router</strong> from power</li>
            <li>Plug in the <strong>modem first</strong> — wait 2-3 minutes until all lights are solid</li>
            <li>Plug in the <strong>TP-Link router</strong> — wait 2 minutes</li>
            <li>Check: Internet LED should turn <strong>green</strong> (not orange)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Set the Correct Connection Type</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">This is the #1 cause of &quot;connected but no internet&quot; on TP-Link routers:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open a browser → go to <strong>tplinkwifi.net</strong> or <strong>192.168.0.1</strong></li>
            <li>Login (default: admin/admin)</li>
            <li>Go to <strong>Network → Internet</strong> (or Advanced → Network → Internet)</li>
            <li>Set <strong>Internet Connection Type</strong> correctly:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Dynamic IP (DHCP)</strong> — Cable internet (Comcast, Spectrum, Cox, Xfinity)</li>
                <li><strong>PPPoE</strong> — DSL/Fiber (AT&amp;T, CenturyLink, Frontier) — enter ISP username/password</li>
                <li><strong>Static IP</strong> — Business/custom setups — enter IP details from your ISP</li>
              </ul>
            </li>
            <li>Click Save and wait for the router to reconnect</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change DNS Servers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            ISP DNS servers can fail, causing &quot;connected but no internet&quot; even when the connection is fine. In the TP-Link admin panel: <strong>Network → Internet → Advanced Settings</strong> → set Primary DNS to <strong>8.8.8.8</strong> and Secondary DNS to <strong>8.8.4.4</strong> (Google DNS). Alternatively, use Cloudflare DNS: 1.1.1.1 and 1.0.0.1. Save and restart the router.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Clone MAC Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Some ISPs lock internet access to the MAC address of the first device connected. If you replaced a router or connected directly before, the ISP blocks the new router. In TP-Link admin: <strong>Advanced → Network → Internet → MAC Clone</strong> → click <strong>&quot;Clone Current Computer&apos;s MAC Address&quot;</strong> (while connected via Ethernet) and Save. Restart the router.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update TP-Link Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Outdated firmware causes internet connectivity bugs. In admin panel: <strong>Advanced → System → Firmware Update → Check for Updates</strong>. If available, install and wait 3-5 minutes. For Deco mesh systems, update through the <strong>Deco app → More → Update Deco</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check the WAN Port</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Make sure the Ethernet cable from the modem goes into the <strong>WAN port</strong> (usually labeled &quot;Internet&quot; and colored differently — blue on most TP-Link models). Not the LAN ports. Try a different Ethernet cable if the internet LED stays orange. A failed WAN port is rare but possible — if nothing works, try connecting the modem to a LAN port and reconfiguring in bridge mode.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            As a last resort: press and hold the <strong>Reset button</strong> on the back of the TP-Link router for 10 seconds until all LEDs blink. The router resets to factory defaults. Then run through the setup wizard again via tplinkwifi.net. This clears any corrupted configuration that prevents internet access.
          </p>

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
            <h3 className="text-2xl font-heading font-bold">TP-Link Still Not Getting Internet?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely configure your TP-Link router settings.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/tp-link-router-not-working", title: "TP-Link Router Not Working?", desc: "Complete TP-Link troubleshooting guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi Connected But No Internet", desc: "Fix on any router brand." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet troubleshooting." },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                  <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
