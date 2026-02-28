import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Not Working? 10 Easy Fixes to Get Back Online (2026 Guide) | TechSupport4",
  description:
    "Internet not working on your computer, phone, or all devices? Follow our 10-step troubleshooting guide to diagnose and fix internet connection problems fast.",
  alternates: { canonical: "/internet-not-working" },
  openGraph: {
    title: "Internet Not Working? 10 Easy Fixes to Get Back Online",
    description: "Complete troubleshooting guide for internet connection problems.",
    type: "article",
    url: "https://techsupport4.com/internet-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Internet Not Working | TechSupport4",
    description: "10-step guide to fix no internet connection on any device.",
  },
};

const faqs = [
  {
    q: "Why is my internet not working even though my router is on?",
    a: "A powered-on router doesn't guarantee internet connectivity. The issue could be with your ISP (outage or maintenance), the modem losing sync, a faulty Ethernet cable between your modem and router, incorrect router configuration, or your device's network settings. Start by checking if all lights on both router and modem are solid, then test with a wired connection to isolate the problem.",
  },
  {
    q: "How do I fix internet not working on one device?",
    a: "If internet works on other devices but not one specific device: (1) Toggle airplane mode on/off, (2) Forget the Wi-Fi network and reconnect, (3) Restart the device, (4) Flush DNS with 'ipconfig /flushdns' on Windows or 'sudo dscacheutil -flushcache' on Mac, (5) Reset network settings. The issue is almost always device-specific, not your internet service.",
  },
  {
    q: "Why does my internet keep going in and out?",
    a: "Intermittent internet is usually caused by Wi-Fi signal interference (other networks on the same channel, microwaves, Bluetooth devices), an overheating router, outdated firmware, ISP line issues, or too many connected devices overwhelming your router's capacity. Try changing your Wi-Fi channel, moving your router to a central location, and reducing connected devices.",
  },
  {
    q: "How long should I wait after restarting my router?",
    a: "Wait 30-60 seconds with the router fully powered off before plugging it back in. After powering on, allow 2-3 minutes for the router to fully boot up and establish a connection with your ISP. Do not press any buttons during this time. If lights aren't stable after 5 minutes, there may be a deeper issue.",
  },
  {
    q: "Should I call my ISP or fix it myself?",
    a: "Try the basic fixes first — restart router and modem, check cables, test on multiple devices. If none of your devices can connect even via Ethernet directly to the modem, the issue is likely on the ISP side. Check your ISP's outage map or status page before calling. If only specific devices or Wi-Fi has issues, the problem is on your end.",
  },
];

export default function InternetNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Internet Not Working? 10 Easy Fixes to Get Back Online",
            description: "Complete troubleshooting guide to fix internet connection problems on any device.",
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Internet Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Internet Not Working? 10 Easy Fixes to Get Back Online
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              A complete step-by-step guide to diagnose and fix internet connection problems on your computer, phone, tablet, or any device — works for any ISP.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-6 py-14">
          {/* Intro */}
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Few things are more frustrating than your internet not working — especially when you need it for work, streaming, or staying connected. Whether your internet stopped working suddenly, has been cutting in and out, or specific devices won&apos;t connect, this guide will walk you through every possible fix.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            We&apos;ve helped thousands of customers get their internet working again. The good news is that most internet problems have simple solutions you can try yourself before contacting your ISP or a technician. Follow the steps below in order — each one rules out a specific cause and brings you closer to a fix.
          </p>

          {/* Why Internet Stops Working */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Why Is My Internet Not Working?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            When your internet is not working, the cause falls into one of these categories:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>ISP outage</strong> — Your internet service provider is experiencing a service interruption in your area</li>
            <li><strong>Router or modem issue</strong> — Your networking equipment has crashed, overheated, or needs a firmware update</li>
            <li><strong>Cable or hardware failure</strong> — A loose, damaged, or disconnected cable between your modem, router, or wall socket</li>
            <li><strong>Device-specific problem</strong> — Your computer, phone, or tablet has a network configuration issue, outdated driver, or software conflict</li>
            <li><strong>DNS or IP conflict</strong> — Your device is using the wrong DNS server or has an IP address conflict with another device on your network</li>
            <li><strong>Wi-Fi interference</strong> — Physical obstructions, neighboring networks, or electronic devices interfering with your wireless signal</li>
          </ul>

          {/* Fix 1 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 1: Restart Your Router and Modem (Power Cycle)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            This fixes the majority of internet problems. A power cycle clears the router&apos;s memory, resets temporary glitches, and forces a fresh connection with your ISP:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Unplug both your <strong>router</strong> and <strong>modem</strong> from power (don&apos;t just turn them off — physically unplug)</li>
            <li>Wait <strong>60 seconds</strong> (this allows capacitors to fully discharge)</li>
            <li>Plug the <strong>modem</strong> back in first and wait 2 minutes until all lights are solid</li>
            <li>Then plug the <strong>router</strong> back in and wait another 2 minutes</li>
            <li>Try connecting — your internet not working issue will be resolved in about 70% of cases</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Important:</strong> If you have a combo modem-router unit (gateway), unplug that single device and wait 60 seconds before plugging it back in.
          </p>

          {/* Fix 2 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 2: Check All Physical Cables and Connections
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            A loose or damaged cable is a surprisingly common reason for internet not working:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check the <strong>coaxial cable</strong> (cable internet) or <strong>phone line</strong> (DSL) connecting your modem to the wall socket — make sure it&apos;s firmly screwed in</li>
            <li>Inspect the <strong>Ethernet cable</strong> between your modem and router — try a different cable if you have one</li>
            <li>If you use a <strong>wired connection</strong> to your computer, check that Ethernet cable too</li>
            <li>Look for visible damage — frayed, bent, or chewed cables (pets love Ethernet cables)</li>
            <li>Ensure all connections click firmly into place — a half-inserted Ethernet plug won&apos;t work</li>
          </ul>

          {/* Fix 3 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 3: Check Your Router&apos;s Indicator Lights
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The lights on your router tell you exactly what&apos;s wrong when your internet is not working:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Power light off</strong> — Router isn&apos;t getting power. Check the power cable and outlet.</li>
            <li><strong>Internet/WAN light off or red</strong> — No connection from your ISP. Could be an outage or modem issue.</li>
            <li><strong>Internet light blinking</strong> — Router is trying to establish a connection. Wait a few minutes.</li>
            <li><strong>Wi-Fi light off</strong> — Wireless is disabled. Press the Wi-Fi button on your router or enable it in settings.</li>
            <li><strong>All lights blinking rapidly</strong> — Firmware updating. Do NOT unplug during an update.</li>
          </ul>

          {/* Fix 4 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 4: Verify Your ISP Isn&apos;t Having an Outage
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Before spending time troubleshooting your end, check if the problem is your ISP:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Use your phone&apos;s mobile data to visit <strong>downdetector.com</strong> and search for your ISP name</li>
            <li>Check your ISP&apos;s Twitter/X account for outage announcements</li>
            <li>Call your ISP&apos;s automated status line (usually answers immediately with outage info)</li>
            <li>Ask neighbors if their internet is also down — confirms an area-wide outage</li>
            <li>Common ISPs: Comcast/Xfinity, AT&amp;T, Spectrum, Verizon, CenturyLink, Cox</li>
          </ul>

          {/* Fix 5 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 5: Test With a Wired Connection
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            This tells you whether the problem is your internet connection or your Wi-Fi:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Connect an Ethernet cable directly from your router to your computer</li>
            <li>If the wired connection works — the issue is Wi-Fi related (see our <Link href="/wifi-not-working" className="text-blue-600 hover:underline">Wi-Fi not working guide</Link>)</li>
            <li>If wired also doesn&apos;t work — try connecting directly to the modem (bypassing the router)</li>
            <li>If modem direct works — your router is the problem (see our <Link href="/router-not-working" className="text-blue-600 hover:underline">router not working guide</Link>)</li>
            <li>If nothing works — it&apos;s an ISP or modem issue</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This simple test saves hours of troubleshooting by immediately identifying which part of your connection is broken.
          </p>

          {/* Fix 6 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 6: Flush DNS and Reset Network Settings
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Corrupted DNS cache or network settings can cause internet not working issues even when your connection is fine:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Windows — Run Command Prompt as Administrator</p>
            <p>ipconfig /flushdns</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p className="mt-3 text-slate-400"># Mac — Run in Terminal</p>
            <p>sudo dscacheutil -flushcache</p>
            <p>sudo killall -HUP mDNSResponder</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Restart your computer after running these commands. This clears stale DNS entries and resets your network stack to default settings.
          </p>

          {/* Fix 7 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 7: Change Your DNS Server
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Your ISP&apos;s DNS servers can be slow or unreliable. Switching to a public DNS server often fixes internet not working issues where websites won&apos;t load even though you&apos;re connected:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold">
                <tr>
                  <th className="px-4 py-3">DNS Provider</th>
                  <th className="px-4 py-3">Primary</th>
                  <th className="px-4 py-3">Secondary</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Google DNS</td><td className="px-4 py-3 font-mono">8.8.8.8</td><td className="px-4 py-3 font-mono">8.8.4.4</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3">Cloudflare</td><td className="px-4 py-3 font-mono">1.1.1.1</td><td className="px-4 py-3 font-mono">1.0.0.1</td></tr>
                <tr><td className="px-4 py-3">OpenDNS</td><td className="px-4 py-3 font-mono">208.67.222.222</td><td className="px-4 py-3 font-mono">208.67.220.220</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Windows:</strong> Settings → Network &amp; Internet → your adapter → DNS server assignment → Manual → enter the DNS addresses above. <strong>Mac:</strong> System Preferences → Network → Advanced → DNS → add the addresses.
          </p>

          {/* Fix 8 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 8: Update Your Network Adapter Driver
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Outdated or corrupted network drivers are a common cause of internet not working on Windows:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + X</strong> → <strong>Device Manager</strong></li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your Wi-Fi or Ethernet adapter → <strong>Update driver</strong> → <strong>Search automatically</strong></li>
            <li>If no update is found, try <strong>Uninstall device</strong> (check &quot;delete driver software&quot;) → restart your PC — Windows will reinstall a fresh driver</li>
          </ol>

          {/* Fix 9 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 9: Disable VPN, Proxy, and Firewall Temporarily
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            VPNs, proxies, and overly aggressive firewalls can block or redirect your internet connection:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Disconnect any <strong>VPN</strong> — try connecting without it to see if that&apos;s the issue</li>
            <li>Check for <strong>proxy settings</strong>: Settings → Network &amp; Internet → Proxy → make sure &quot;Use a proxy server&quot; is off</li>
            <li>Temporarily disable your <strong>firewall</strong>: Windows Security → Firewall &amp; network protection → turn off for your current network (re-enable after testing)</li>
            <li>Check if any <strong>antivirus software</strong> is blocking network connections (Norton, McAfee, Kaspersky often have network filtering)</li>
          </ul>

          {/* Fix 10 */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            Fix 10: Run Windows Network Troubleshooter
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Windows has a built-in diagnostic tool that can automatically detect and fix common internet problems:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → System → Troubleshoot → Other troubleshooters</strong></li>
            <li>Click <strong>Run</strong> next to <strong>&quot;Internet Connections&quot;</strong></li>
            <li>Follow the prompts — Windows will test your connection, DNS, adapter, and more</li>
            <li>Also run the <strong>&quot;Network Adapter&quot;</strong> troubleshooter for hardware-related issues</li>
          </ol>

          {/* When to Get Help */}
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">
            When to Contact Your ISP or a Technician
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If you&apos;ve tried all 10 fixes above and your internet is still not working, the issue may require professional help:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Modem won&apos;t sync</strong> — The DSL/cable signal from your ISP isn&apos;t reaching your modem (ISP issue)</li>
            <li><strong>Slow speeds on all devices</strong> — Your ISP may be throttling or there&apos;s a line problem</li>
            <li><strong>Router keeps crashing</strong> — Hardware failure requiring replacement</li>
            <li><strong>Authentication errors</strong> — Your ISP account may need reactivation</li>
            <li><strong>Wiring issues</strong> — Old or damaged in-wall cabling</li>
          </ul>

          {/* FAQ */}
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

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still Having Internet Issues?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our remote technicians can diagnose and fix persistent internet problems securely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          {/* Related Guides */}
          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">10 fixes that actually work.</p>
              </Link>
              <Link href="/wifi-connected-but-no-internet" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Connected But No Internet?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix connected-no-internet problems.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete wireless troubleshooting guide.</p>
              </Link>
              <Link href="/netgear-router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Netgear Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Model-specific Netgear fixes.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
