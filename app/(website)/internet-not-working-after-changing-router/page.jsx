import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Not Working After Changing Router? Quick Fix (2026)",
  description: "Internet not working after replacing or changing your router? Fix WiFi name, password issues, ISP compatibility, and configuration errors step by step.",
  alternates: { canonical: "/internet-not-working-after-changing-router" },
  openGraph: { title: "Internet Not Working After Changing Router — Fix", description: "Fix internet after changing router.", type: "article", url: "https://techsupport4.com/internet-not-working-after-changing-router" },
  twitter: { card: "summary_large_image", title: "After Changing Router Fix | TechSupport4", description: "Internet not working after changing router." },
};

const faqs = [
  { q: "Why doesn't internet work after changing my router?", a: "Most common reasons: (1) The new router isn't getting an IP from the modem (modem remembers old router's MAC address — power cycle modem), (2) WAN/Internet port not connected properly, (3) Router needs initial setup (login to admin panel), (4) PPPoE credentials needed (DSL users), (5) Devices trying to connect to old WiFi name." },
  { q: "Do I need to reset my modem when I change routers?", a: "Yes! This is the #1 fix. Your modem usually locks to the first device (router) it sees via MAC address. When you swap routers, the modem ignores the new one. Unplug the modem for 60 seconds, then plug it back in with the new router connected. This forces the modem to accept the new router." },
  { q: "My new router has WiFi but no internet — why?", a: "Your devices are connecting to the router's WiFi (local network works) but the router isn't getting internet from the modem. Check the router admin panel for WAN/Internet status. If it shows 'No IP' or '0.0.0.0', the modem isn't providing internet to the router — power cycle the modem." },
  { q: "Should I keep the same WiFi name and password on the new router?", a: "Yes, highly recommended. Set the same SSID (WiFi name) and password on the new router. This way, all your devices (phones, smart home devices, cameras) will automatically connect without needing to be reconfigured individually." },
  { q: "I changed from ISP router to my own — do I need to call the ISP?", a: "Usually no for routers (only for modems). If you're replacing the ISP's gateway (combined modem+router) with your own modem+router, then yes — you need to call the ISP to register the new modem's MAC address. If you're just replacing the router and keeping the same modem, no ISP call needed." },
];

export default function InternetNotWorkingAfterChangingRouter() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Not Working After Changing Router", description: "Fix internet after changing router.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-yellow-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Changing Router</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Post-Change Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Not Working After Changing Router?</h1>
            <p className="mt-4 text-yellow-200 text-lg max-w-2xl">Swapped routers and lost internet? Fix modem MAC issues, configuration, and connectivity.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-yellow-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-yellow-400" /><span>9 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You replaced your old router with a new one and now there&apos;s no internet. The <strong>#1 cause: your modem is still locked to the old router&apos;s MAC address</strong>. Here&apos;s how to fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle the Modem (Most Important!)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug the modem</strong> from power</li>
            <li>Disconnect the Ethernet cable from modem&apos;s LAN port</li>
            <li>Wait <strong>60 seconds</strong> (this clears the MAC address lock)</li>
            <li>Connect Ethernet from <strong>modem LAN port → router WAN/Internet port</strong></li>
            <li>Plug modem back in → wait <strong>5 minutes</strong> for full boot</li>
            <li>Plug in (or power on) the <strong>new router</strong></li>
            <li>Wait <strong>3-5 minutes</strong> for router to get IP from modem</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Use the Correct Ports</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
            <p className="font-semibold text-slate-800 dark:text-white mb-3">Correct Cable Setup:</p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
              <li><strong>Wall outlet → Modem</strong> (coaxial for cable / phone line for DSL / fiber cable for fiber)</li>
              <li><strong>Modem LAN port → Router WAN/Internet port</strong> (usually yellow or labeled &quot;Internet&quot;)</li>
              <li><strong>Router LAN ports → Computers</strong> (for wired connections)</li>
            </ul>
            <p className="mt-3 text-red-600 dark:text-red-400 font-semibold">Common mistake: plugging the modem into a LAN port instead of the WAN port!</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Set Up the New Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect a device to the new router (WiFi or Ethernet)</li>
            <li>Open a browser and go to the router&apos;s admin page:
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Most routers:</strong> 192.168.1.1 or 192.168.0.1</li>
                <li><strong>TP-Link:</strong> tplinkwifi.net</li>
                <li><strong>Netgear:</strong> routerlogin.net</li>
                <li><strong>Asus:</strong> router.asus.com</li>
                <li><strong>Linksys:</strong> myrouter.local</li>
              </ul>
            </li>
            <li>Follow the <strong>setup wizard</strong></li>
            <li>Choose <strong>&quot;Automatic/DHCP&quot;</strong> for internet connection type (cable users)</li>
            <li>For DSL users: choose <strong>PPPoE</strong> and enter username/password from ISP</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Match Old WiFi Name &amp; Password</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In router admin → <strong>Wireless Settings</strong></li>
            <li>Set <strong>SSID (WiFi name)</strong> to match your old router&apos;s name</li>
            <li>Set the <strong>same password</strong></li>
            <li>Set <strong>same security type</strong> (WPA2/WPA3)</li>
            <li>This lets all devices auto-connect without reconfiguring each one</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Clone MAC Address (If Modem Won&apos;t Release)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If power cycling the modem didn&apos;t work, some routers can clone the old router&apos;s MAC:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into new router admin panel</li>
            <li>Find <strong>WAN/Internet → MAC Clone</strong> option</li>
            <li>Enter the old router&apos;s MAC address (printed on a sticker on the old router)</li>
            <li>Save and restart the router</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update Router Firmware</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into router admin panel</li>
            <li>Go to <strong>System/Administration → Firmware Update</strong></li>
            <li>Click <strong>&quot;Check for Updates&quot;</strong></li>
            <li>New routers often ship with outdated firmware that has bugs</li>
            <li>Update and restart</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset the New Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>If nothing works, the router may have been misconfigured</li>
            <li>Find the <strong>reset button</strong> (small hole on back/bottom)</li>
            <li>Hold with a pin for <strong>10-15 seconds</strong> until lights flash</li>
            <li>Wait for router to fully restart</li>
            <li>Reconnect and run through setup wizard again</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-yellow-700 to-yellow-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">New Router Still Not Working?</h3>
            <p className="mt-2 text-yellow-200 max-w-lg mx-auto">Our technicians can help configure your new router remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-yellow-700 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working-after-modem-replacement", title: "After Modem Swap", desc: "Fix internet after modem change." },
                { href: "/router-not-connecting-to-modem", title: "Router-Modem Issue", desc: "Fix modem-router connection." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/wifi-router-reset-guide", title: "Router Reset Guide", desc: "How to properly reset a router." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
