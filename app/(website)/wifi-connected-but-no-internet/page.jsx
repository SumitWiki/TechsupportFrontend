import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Connected But No Internet? Fix It in 5 Minutes (2026 Guide) | TechSupport4",
  description:
    "WiFi connected but no internet on Windows, Mac, iPhone, or Android? Follow our step-by-step guide to fix this frustrating issue — covers all devices and operating systems.",
  alternates: { canonical: "/wifi-connected-but-no-internet" },
  openGraph: {
    title: "WiFi Connected But No Internet? Fix It in 5 Minutes",
    description: "Step-by-step fix for connected but no internet on any device.",
    type: "article",
    url: "https://techsupport4.com/wifi-connected-but-no-internet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix WiFi Connected But No Internet | TechSupport4",
    description: "Resolve connected-no-internet issues on Windows, Mac, iPhone & Android.",
  },
};

const faqs = [
  {
    q: "Why does my WiFi say connected but no internet?",
    a: "This means your device successfully connected to the router's Wi-Fi network, but the router itself doesn't have an active internet connection from your ISP, or your device has a DNS/IP configuration issue. The WiFi connection is local (between your device and router), while internet access requires the router to also connect to your ISP.",
  },
  {
    q: "Why does only one device show WiFi connected but no internet?",
    a: "If all other devices work fine, the problem is device-specific: (1) Stale DNS cache — flush it, (2) Wrong IP assignment — release and renew, (3) Outdated network driver on that device, (4) VPN or proxy interfering, (5) Date/time incorrect on the device (causes SSL certificate issues that block HTTPS sites).",
  },
  {
    q: "How do I fix WiFi connected but no internet on iPhone?",
    a: "Go to Settings → Wi-Fi → tap the (i) next to your network → Forget This Network → rejoin. If that doesn't work: Settings → General → Transfer or Reset iPhone → Reset Network Settings. This clears all saved Wi-Fi passwords but resolves most connectivity issues.",
  },
  {
    q: "How do I fix WiFi connected but no internet on Android?",
    a: "Go to Settings → Network & Internet → Wi-Fi → long press your network → Forget → rejoin. If unresolved: Settings → System → Reset options → Reset Wi-Fi, mobile & Bluetooth. Also try: Settings → Wi-Fi → Advanced → change IP settings from DHCP to Static, then back to DHCP.",
  },
  {
    q: "Can a bad Ethernet cable cause WiFi connected but no internet?",
    a: "Yes. The Ethernet cable between your modem and router carries the actual internet connection. If this cable is damaged or loose, your router will still broadcast Wi-Fi (so devices can connect to it), but there's no internet to pass through. This is one of the most common causes. Try replacing the cable.",
  },
];

export default function WifiConnectedButNoInternet() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "WiFi Connected But No Internet? Fix It in 5 Minutes",
            description: "Step-by-step fix for connected but no internet on any device.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-18",
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
              <span className="text-white">WiFi Connected But No Internet</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              WiFi Connected But No Internet? Fix It in 5 Minutes
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Your device shows it&apos;s connected to WiFi, but nothing loads. Here&apos;s exactly how to fix this on Windows, Mac, iPhone, Android, and any other device.
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
            &quot;WiFi connected but no internet&quot; is one of the most common and confusing tech problems. Your phone or laptop shows the WiFi icon is connected with full bars, yet no websites load, apps can&apos;t reach the internet, and everything seems broken. This happens because <strong>WiFi connectivity and internet access are two separate things</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Your device connects to the router via WiFi (that&apos;s the local connection). The router then connects to your ISP for actual internet access. When you see &quot;connected, no internet,&quot; it means step 1 works but step 2 is broken. Here&apos;s how to fix it.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Quick Diagnosis: Is It One Device or All Devices?</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Before troubleshooting, answer this question — it determines your fix path:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">All Devices = Router/ISP Issue</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">If no device on your network has internet, the problem is with your router, modem, or ISP — not your individual devices. Skip to Fix 1.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">One Device = Device Issue</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">If other devices work fine but one doesn&apos;t, it&apos;s a problem with that specific device&apos;s network settings. Skip to Fix 4.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Your Router and Modem</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            When WiFi is connected but no internet works on all devices, a router restart fixes this 70% of the time:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug your router AND modem from power</li>
            <li>Wait 60 seconds (important — allows full memory clear)</li>
            <li>Plug the modem in first → wait 2 minutes for all lights to stabilize</li>
            <li>Plug the router in → wait 2-3 minutes</li>
            <li>Check both modem AND router internet lights — both should be solid green</li>
            <li>Try loading a website on any device</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check the Cable Between Modem and Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The Ethernet cable connecting your modem to your router carries the actual internet signal. If this cable is loose, damaged, or plugged into the wrong port, you&apos;ll get WiFi connected but no internet on every device. Unplug it, inspect for damage, and replug firmly into the <strong>WAN/Internet port</strong> on the router (not a LAN port). Try a different cable if possible.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check for ISP Outage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Use your phone&apos;s mobile data to visit <strong>downdetector.com</strong> and search for your ISP. If there&apos;s a reported outage in your area, you just have to wait. You can also connect a computer directly to your modem via Ethernet — if that doesn&apos;t work either, confirm it&apos;s an ISP issue.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Flush DNS Cache (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            A corrupted DNS cache is one of the top causes of WiFi connected but no internet on a single Windows device:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Open Command Prompt as Administrator and run:</p>
            <p>ipconfig /flushdns</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>netsh winsock reset</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Restart your computer after running these commands. This clears cached DNS entries, releases your current IP, gets a new one from the router, and resets the network socket layer.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Flush DNS Cache (Mac)</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Open Terminal and run:</p>
            <p>sudo dscacheutil -flushcache</p>
            <p>sudo killall -HUP mDNSResponder</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Also go to <strong>System Preferences → Network → Wi-Fi → Advanced → TCP/IP → Renew DHCP Lease</strong> to get a fresh IP address.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Forget and Rejoin the WiFi Network</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Saved network profiles can become corrupted. Forgetting and rejoining forces a fresh connection:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows:</strong> Settings → Network & Internet → Wi-Fi → Manage known networks → select your network → Forget → reconnect</li>
            <li><strong>Mac:</strong> System Preferences → Network → Wi-Fi → Advanced → select network → minus (-) → rejoin</li>
            <li><strong>iPhone:</strong> Settings → Wi-Fi → tap (i) next to network → Forget This Network → rejoin</li>
            <li><strong>Android:</strong> Settings → Network → Wi-Fi → long press network → Forget → rejoin</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Change DNS Server</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If your ISP&apos;s DNS server is down, you&apos;ll get WiFi connected but no internet even though the actual connection is fine. Switch to Google DNS or Cloudflare:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Google DNS:</strong> 8.8.8.8 and 8.8.4.4</li>
            <li><strong>Cloudflare DNS:</strong> 1.1.1.1 and 1.0.0.1</li>
            <li><strong>Windows:</strong> Settings → Network & Internet → your adapter → Edit DNS → Manual → enter above</li>
            <li><strong>Mac:</strong> System Preferences → Network → Advanced → DNS → add above addresses</li>
            <li><strong>iPhone:</strong> Settings → Wi-Fi → tap (i) → Configure DNS → Manual → add servers</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check Date and Time Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This sounds strange, but incorrect date/time on your device causes SSL certificate validation failures, meaning HTTPS websites (nearly all websites now) won&apos;t load — even though you&apos;re technically connected to the internet. Make sure your device&apos;s date, time, and timezone are set correctly. Enable automatic time sync if available.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Disable VPN and Proxy</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            VPNs and proxies route your traffic through external servers. If those servers are down or misconfigured, you&apos;ll be connected to WiFi but nothing loads. Disconnect your VPN and check <strong>Settings → Network → Proxy</strong> to ensure no proxy is configured. If someone installed a proxy (some malware does this), disabling it should immediately restore internet access.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 10: Reset Network Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If nothing above works, a full network reset on your device clears all network configurations:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows:</strong> Settings → Network & Internet → Advanced → Network reset → Reset now</li>
            <li><strong>Mac:</strong> Delete Wi-Fi from Network preferences, re-add it</li>
            <li><strong>iPhone:</strong> Settings → General → Transfer or Reset → Reset Network Settings</li>
            <li><strong>Android:</strong> Settings → System → Reset → Reset Wi-Fi, mobile & Bluetooth</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Note:</strong> This erases all saved Wi-Fi passwords. You&apos;ll need to re-enter passwords for all networks.
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
            <h3 className="text-2xl font-heading font-bold">Still Connected With No Internet?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our remote technicians can securely diagnose network configuration issues on any device.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete internet fix guide for all devices.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">When WiFi won&apos;t even connect.</p>
              </Link>
              <Link href="/router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Router-specific troubleshooting steps.</p>
              </Link>
              <Link href="/computer-running-slow" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Computer Running Slow?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Speed up your slow computer.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
