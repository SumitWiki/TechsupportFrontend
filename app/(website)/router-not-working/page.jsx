import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Router Not Working? 10 Easy Fixes That Actually Work (2026 Guide) | TechSupport4",
  description:
    "Router not working or constantly dropping connection? Follow our 10-step troubleshooting guide to fix any router brand — Netgear, TP-Link, ASUS, Linksys & more.",
  alternates: { canonical: "/router-not-working" },
  openGraph: {
    title: "Router Not Working? 10 Easy Fixes That Actually Work",
    description: "Complete router troubleshooting guide for all brands.",
    type: "article",
    url: "https://techsupport4.com/router-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Router Not Working | TechSupport4",
    description: "10-step guide to fix any router — Netgear, TP-Link, ASUS, Linksys.",
  },
};

const faqs = [
  {
    q: "Why does my router keep disconnecting?",
    a: "Frequent disconnections are usually caused by overheating (poor ventilation or dusty vents), outdated firmware, too many connected devices exceeding the router's capacity, interference from nearby electronics, or a failing power adapter. Try placing your router in an open area, updating firmware, and reducing connected devices.",
  },
  {
    q: "How do I know if my router is broken?",
    a: "Signs of a broken router include: lights that won't turn on (power issue), constant rebooting cycles, internet light permanently off even after ISP confirms service is active, devices connect to Wi-Fi but never get internet, or extremely slow speeds on all devices with a wired connection. If your router is more than 5 years old, replacement is often the best solution.",
  },
  {
    q: "Should I restart my router every day?",
    a: "You shouldn't need to restart daily. If you do, something is wrong — likely overheating, a memory leak in older firmware, or too many devices. Update your firmware first. If daily restarts are still needed, consider replacing the router or setting up an automatic scheduled reboot through the router's admin panel.",
  },
  {
    q: "What's the difference between a router and a modem?",
    a: "A modem connects to your ISP (via coaxial cable, phone line, or fiber) and converts their signal to digital data. A router takes that data and distributes it to your devices via Wi-Fi or Ethernet. Many ISPs provide a combo device (gateway) that is both. If your modem works but router doesn't, only Wi-Fi/local networking is affected.",
  },
  {
    q: "How often should I replace my router?",
    a: "Every 3-5 years is recommended. Newer routers support faster Wi-Fi standards (Wi-Fi 6/6E), better security (WPA3), handle more devices simultaneously, and have better range. If your router is over 5 years old and you're experiencing constant issues, replacing it often costs less than continued troubleshooting.",
  },
];

export default function RouterNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Router Not Working? 10 Easy Fixes That Actually Work",
            description: "Complete router troubleshooting guide for all brands.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-15",
            dateModified: "2026-02-27",
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Router Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Router Not Working? 10 Easy Fixes That Actually Work
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Step-by-step fixes for routers that won&apos;t connect, keep dropping, or have no internet light — covers Netgear, TP-Link, ASUS, Linksys, and all major brands.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            A router not working can mean anything from no Wi-Fi signal at all, to intermittent drops, to full connection but no internet access. Each symptom points to a different cause — and this guide covers them all.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Whether you have a Netgear Nighthawk, TP-Link Archer, ASUS RT series, Linksys, or an ISP-provided gateway, these troubleshooting steps work universally. We&apos;ll start with the simplest fixes and progress to more advanced solutions.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Common Reasons Your Router Stops Working</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Overheating</strong> — Routers in enclosed cabinets or near heat sources overheat and crash</li>
            <li><strong>Firmware bugs</strong> — Outdated firmware causes connection drops, memory leaks, and security vulnerabilities</li>
            <li><strong>ISP issues</strong> — Modem loses sync with your ISP, and the router just passes along the problem</li>
            <li><strong>Too many devices</strong> — Budget routers struggle with 15+ simultaneous connections</li>
            <li><strong>Channel congestion</strong> — Neighboring Wi-Fi networks on the same channel cause interference</li>
            <li><strong>Power supply failure</strong> — The router&apos;s power adapter degrades over time</li>
            <li><strong>Settings corruption</strong> — After a power surge or failed update, settings can become corrupted</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle Your Router Properly</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Most router not working problems are resolved with a proper power cycle. This is more than just &quot;turning it off and on&quot;:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Unplug the router from its power source (not just press the power button)</li>
            <li>If you have a separate modem, unplug that too</li>
            <li>Wait <strong>60 full seconds</strong> — this drains residual power and clears memory</li>
            <li>Plug the <strong>modem</strong> in first, wait 2 minutes for all lights to stabilize</li>
            <li>Then plug the <strong>router</strong> in and wait 2-3 minutes</li>
            <li>Test your connection on multiple devices</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Pro tip:</strong> If your router needs frequent restarts, it&apos;s a symptom of a deeper issue — likely overheating or old firmware.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check All Cable Connections</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            A loose cable is one of the most overlooked causes when a router is not working:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>WAN/Internet port:</strong> The Ethernet cable from modem to router should be in the WAN port (usually yellow or labeled &quot;Internet&quot;), NOT a LAN port</li>
            <li><strong>Power cable:</strong> Make sure the power adapter is fully inserted — try a different outlet</li>
            <li><strong>Ethernet cables:</strong> Unplug and replug each cable firmly — you should hear/feel a click</li>
            <li><strong>Try different cables:</strong> Ethernet cables fail more often than you think — swap them if possible</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Verify the Router Lights</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Every router has LED indicators that tell you exactly where the problem lies:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold">
                <tr>
                  <th className="px-4 py-3">Light</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Power</td><td className="px-4 py-3">Off</td><td className="px-4 py-3">No power — check cable and outlet</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Power</td><td className="px-4 py-3">Blinking</td><td className="px-4 py-3">Booting up or updating — wait 3 min</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Internet/WAN</td><td className="px-4 py-3">Off or Red</td><td className="px-4 py-3">No ISP connection — modem or ISP issue</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Internet/WAN</td><td className="px-4 py-3">Amber/Orange</td><td className="px-4 py-3">Limited connection — authentication issue</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Wi-Fi</td><td className="px-4 py-3">Off</td><td className="px-4 py-3">Wi-Fi disabled — press Wi-Fi button on router</td></tr>
                <tr><td className="px-4 py-3">All Lights</td><td className="px-4 py-3">Cycling</td><td className="px-4 py-3">Boot loop — factory reset may be needed</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Update Router Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Outdated firmware is one of the most common causes of a router not working properly:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Open a browser and go to your router&apos;s admin page (usually <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">192.168.0.1</code> or <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">192.168.1.1</code>)</li>
            <li>Log in with your admin credentials (default is often admin/admin or printed on the router label)</li>
            <li>Find <strong>Administration</strong> → <strong>Firmware Update</strong> (location varies by brand)</li>
            <li>Click <strong>Check for Updates</strong> — if available, install it</li>
            <li><strong>Do NOT unplug the router during a firmware update</strong> — this can permanently damage it</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Many modern routers support auto-updates. Enable this in settings to prevent future firmware-related issues.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Change Wi-Fi Channel and Band</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If your router connects but is slow or drops frequently, channel congestion is likely the culprit:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Login to your router admin panel</li>
            <li>Go to <strong>Wireless Settings</strong></li>
            <li>For <strong>2.4 GHz</strong> — try channels <strong>1, 6, or 11</strong> (non-overlapping channels)</li>
            <li>For <strong>5 GHz</strong> — try channel <strong>36, 40, 44, or 48</strong> (DFS channels offer less congestion)</li>
            <li>Use a free tool like <strong>WiFi Analyzer</strong> (Android) to see which channels your neighbors use and pick the least crowded</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Reduce Connected Devices</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Modern homes have 20-30+ connected devices. Budget routers can&apos;t handle this:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check your router&apos;s admin page for a <strong>Connected Devices</strong> list</li>
            <li>Remove/block any devices you don&apos;t recognize (could be unauthorized access)</li>
            <li>Disconnect IoT devices you&apos;re not using (smart bulbs, cameras, etc.)</li>
            <li>Consider a router upgrade if you regularly have 20+ devices</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Check Router Placement and Overheating</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Poor placement causes both signal issues and overheating:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Location:</strong> Place router in a central, elevated position — not in a closet, cabinet, or corner</li>
            <li><strong>Ventilation:</strong> Ensure air vents are not blocked — never stack items on top of your router</li>
            <li><strong>Heat sources:</strong> Keep away from direct sunlight, heaters, and other electronics</li>
            <li><strong>Obstructions:</strong> Thick walls, metal surfaces, and mirrors significantly reduce signal</li>
            <li>If your router is hot to the touch, it&apos;s overheating — improve ventilation immediately</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Reset Router to Factory Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If nothing else works, a factory reset clears all corrupted settings (note: you&apos;ll lose all custom settings):
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the <strong>Reset</strong> button (usually a small pinhole on the back)</li>
            <li>Use a paperclip to press and hold for <strong>10-15 seconds</strong></li>
            <li>Router will reboot — all lights will cycle</li>
            <li>Wait 3-5 minutes for complete restart</li>
            <li>Connect using the <strong>default Wi-Fi name and password</strong> printed on the router label</li>
            <li>Reconfigure your Wi-Fi name, password, and settings through the admin panel</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Check If Your ISP Is the Problem</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Your router might be working fine — the problem could be upstream:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Bypass the router — connect your computer directly to the modem via Ethernet</li>
            <li>If internet works directly through the modem, the router is the issue</li>
            <li>If it doesn&apos;t work even through the modem, the problem is ISP-side</li>
            <li>Check <strong>downdetector.com</strong> for your ISP&apos;s status</li>
            <li>Call your ISP and ask them to run a <strong>line test</strong> from their end</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 10: Consider Router Replacement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If your router is old or continues to have issues after all fixes, replacement may be the most cost-effective solution:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Routers older than <strong>4-5 years</strong> lack modern Wi-Fi standards and security</li>
            <li>Wi-Fi 6 routers handle many more devices and offer better range</li>
            <li>Mesh systems (like Eero, Google Nest WiFi, TP-Link Deco) solve coverage issues in larger homes</li>
            <li>Budget pick: TP-Link Archer AX21 (~$70) — great performance for the price</li>
            <li>Premium pick: ASUS RT-AX86U (~$200) — excellent for gaming and many devices</li>
          </ul>

          {/* Brand-specific guides */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Brand-Specific Router Guides</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Different router brands have unique troubleshooting steps. Check our brand-specific guides for targeted fixes:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><Link href="/netgear-router-not-working" className="text-blue-600 hover:underline">Netgear Router Not Working</Link> — Nighthawk, Orbi, and other Netgear models</li>
            <li><Link href="/tp-link-router-not-working" className="text-blue-600 hover:underline">TP-Link Router Not Working</Link> — Archer, Deco, and other TP-Link models</li>
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
            <h3 className="text-2xl font-heading font-bold">Router Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely diagnose router configuration issues and get you back online.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete internet connection repair guide.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix wireless connectivity issues.</p>
              </Link>
              <Link href="/netgear-router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Netgear Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Model-specific Netgear troubleshooting.</p>
              </Link>
              <Link href="/tp-link-router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">TP-Link Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">TP-Link specific fixes and setup tips.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
