import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Linksys Router Not Working After Power Outage? Fix Guide (2026)",
  description:
    "Linksys router not working after a power outage? Fix no internet, blinking LEDs, and connection failures on all Linksys models including Velop mesh systems.",
  alternates: { canonical: "/linksys-router-not-working-after-power-outage" },
  openGraph: {
    title: "Linksys Router Not Working After Power Outage? Fix Guide",
    description: "Restore Linksys router after a power outage.",
    type: "article",
    url: "https://techsupport4.com/linksys-router-not-working-after-power-outage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Linksys After Power Outage | TechSupport4",
    description: "Linksys not working after outage — step-by-step fix.",
  },
};

const faqs = [
  {
    q: "Why won't my Linksys router connect to the internet after a power outage?",
    a: "After a power outage: (1) The modem lost its ISP authentication — it takes 2-5 minutes to reconnect, (2) The router booted before the modem was ready, so it couldn't get an IP address, (3) A power surge may have corrupted the router settings, (4) The ISP is still restoring service in your area. Fix: restart modem first, wait 3 minutes, then restart router.",
  },
  {
    q: "How do I restart my Linksys router properly?",
    a: "Unplug the Linksys from power (don't just use the power button). Wait 30 seconds. Plug it back in. Wait 2-3 minutes for it to fully boot. The Linksys logo LED should be solid (blue for Velop, steady for classic models). If it's blinking continuously, the router may still be starting up or there's a problem.",
  },
  {
    q: "My Linksys Velop shows red light after power outage — how to fix?",
    a: "A red LED on Linksys Velop means no internet connection. Fix: (1) Restart your modem, wait 3 minutes, (2) Restart the primary Velop node from the Linksys app → Restart Node, (3) If still red, check that the Ethernet cable from modem is firmly in the WAN port, (4) Factory reset: hold reset button for 10 seconds, then set up again via the Linksys app.",
  },
  {
    q: "Can a power outage damage my Linksys router?",
    a: "Yes — power surges (the spike when power returns) can damage router electronics. Signs of damage: router won't power on, random reboots, WiFi range dramatically reduced, or ports stop working. Use a surge protector (1000+ Joules) to prevent this. If your router was damaged, the power adapter may also be fried — try a replacement adapter first before buying a new router.",
  },
  {
    q: "Do I need to reconfigure my Linksys after a power outage?",
    a: "No — Linksys routers save settings to flash memory that survives power loss. You should NOT need to reconfigure. Just power cycle properly. However, if settings were corrupted (router shows default 'Linksys' SSID instead of your custom name), you'll need to factory reset and reconfigure using the Linksys app or web interface at 192.168.1.1.",
  },
];

export default function LinksysAfterPowerOutage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: "Linksys Router Not Working After Power Outage — Fix Guide",
          description: "Restore Linksys internet after a power outage.",
          author: { "@type": "Organization", name: "TechSupport4" },
          publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
          datePublished: "2026-02-21", dateModified: "2026-02-28",
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
              <span className="text-white">Linksys After Power Outage</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Power Outage Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Linksys Router Not Working After Power Outage? Fix Guide
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Power&apos;s back but your Linksys router has no internet? Covers classic Linksys routers and Velop mesh systems — proper restart sequence, ISP reconnection, and firmware recovery.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Linksys routers — including the popular Velop mesh system — are reliable, but power outages can leave them unable to connect to the internet even after power returns. The problem is almost always related to boot order (modem vs router), ISP re-authentication, or in rare cases firmware corruption from the power surge. Here&apos;s how to fix it.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Correct Power Cycle Sequence</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug both</strong> the modem and Linksys router from power</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in the <strong>modem FIRST</strong></li>
            <li>Wait <strong>3 minutes</strong> — until the modem&apos;s Online/Internet LED is solid</li>
            <li>Only then plug in the <strong>Linksys router</strong></li>
            <li>Wait <strong>2 minutes</strong> for the router to fully boot</li>
            <li>The internet LED should be solid — test by browsing a website</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check If ISP Is Online</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Power outages affect ISP infrastructure too. Connect a computer directly to the modem with Ethernet (bypass the Linksys). If there&apos;s no internet directly from the modem, the ISP hasn&apos;t restored service yet. Check their outage page on your phone via cellular data, or call them.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Cabling</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Ethernet from modem → <strong>WAN/Internet port</strong> on Linksys (usually labeled or colored differently)</li>
            <li>Power surges can damage Ethernet cables — try a <strong>different cable</strong></li>
            <li>Check the <strong>coax cable</strong> going into the modem from the wall — a storm could have loosened it</li>
            <li>Push all cables firmly until you hear a <strong>click</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Linksys Velop Mesh — Re-sync Nodes</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            For Linksys Velop systems, the satellite nodes may lose sync after an outage. Open the <strong>Linksys app</strong> → check if all nodes show as connected. If any show offline: restart the offline node by unplugging it for 30 seconds, then plugging back in. If that doesn&apos;t work, bring the satellite node near the primary node and restart it — it should re-sync within 2-3 minutes. The LED should turn solid <strong>blue</strong> (connected) or <strong>purple</strong> (setup mode).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Re-enter ISP Credentials</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If your ISP uses PPPoE (DSL/fiber providers like AT&amp;T, CenturyLink): Open <strong>192.168.1.1</strong> in a browser → log in → go to <strong>Internet Settings</strong> → verify the connection type is PPPoE and re-enter your ISP username and password → click Connect. For cable internet (DHCP), try setting it to &quot;Automatic Configuration - DHCP&quot; and save.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Release and Renew IP</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Sometimes the router holds an expired IP address after an outage. In the Linksys admin panel (192.168.1.1): go to <strong>Status → Internet Connection</strong> → look for the IP address. If it shows 0.0.0.0, click <strong>Release</strong> then <strong>Renew</strong> to request a new IP from your ISP. Alternatively, some ISPs require you to call and ask them to &quot;release the lease.&quot;
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset (Last Resort)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If the power outage corrupted the router&apos;s settings: Press and hold the <strong>reset button</strong> on the bottom/back of the Linksys for <strong>10 seconds</strong> with a paperclip. The router will restart with factory defaults. For Velop: hold the reset button for 10 seconds until the LED turns red. Re-setup using the <strong>Linksys app</strong> or 192.168.1.1.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention Tips</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Surge protector:</strong> Use a 1000+ Joule rated surge protector for modem and router</li>
            <li><strong>UPS battery backup:</strong> Keeps router and modem running during short outages ($30-50)</li>
            <li><strong>Note your settings:</strong> Save your WiFi name, password, and ISP credentials somewhere safe</li>
            <li><strong>Keep firmware updated:</strong> Updated firmware handles power recovery better</li>
          </ul>

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
            <h3 className="text-2xl font-heading font-bold">Linksys Still Down After Outage?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely diagnose and fix Linksys connectivity issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/linksys-router-not-connecting-to-internet", title: "Linksys Not Connecting", desc: "Full Linksys internet fix guide." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router troubleshooting." },
                { href: "/internet-not-working-after-power-outage", title: "Internet After Power Outage", desc: "Any router post-outage fix." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
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
