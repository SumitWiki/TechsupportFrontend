import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Working? Complete Troubleshooting Guide for Any Device (2026) | TechSupport4",
  description:
    "WiFi not working on your laptop, phone, or smart device? Our step-by-step guide covers all causes — from router issues to driver problems — with easy fixes.",
  alternates: { canonical: "/wifi-not-working" },
  openGraph: {
    title: "WiFi Not Working? Complete Troubleshooting Guide",
    description: "Fix WiFi problems on any device with our 10-step guide.",
    type: "article",
    url: "https://techsupport4.com/wifi-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix WiFi Not Working | TechSupport4",
    description: "Complete WiFi troubleshooting for laptops, phones & smart devices.",
  },
};

const faqs = [
  {
    q: "Why did my WiFi suddenly stop working?",
    a: "Sudden WiFi failure is usually caused by: (1) Router crash — power cycle fixes this, (2) ISP outage in your area, (3) WiFi adapter disabled accidentally (laptop switch or keyboard shortcut), (4) Airplane mode turned on, (5) Recent Windows/Mac update changed network settings, or (6) Power surge disrupted your router.",
  },
  {
    q: "Why is my WiFi not showing any networks?",
    a: "If your device shows no available WiFi networks: (1) WiFi adapter is disabled — check Device Manager, (2) Airplane mode is on, (3) WiFi driver crashed or was uninstalled by an update, (4) Physical WiFi switch on your laptop is off, or (5) The WiFi adapter hardware has failed. Try: press Fn + the WiFi key on your laptop, check airplane mode, and restart.",
  },
  {
    q: "How do I fix WiFi not working after Windows update?",
    a: "Windows updates frequently cause WiFi issues. Fix: (1) Open Device Manager → Network adapters → right-click WiFi adapter → Update driver, (2) If that fails, uninstall the adapter and restart — Windows will reinstall it, (3) Roll back the driver: right-click adapter → Properties → Driver → Roll Back Driver, (4) Run: netsh winsock reset in admin Command Prompt.",
  },
  {
    q: "Why does WiFi work on my phone but not my laptop?",
    a: "This confirms the router and internet are fine — the problem is your laptop specifically. Common causes: outdated/corrupted WiFi driver, WiFi adapter disabled, power management turning off the adapter to save battery, VPN interference, or a recent system update. Check Device Manager for yellow warning icons on network adapters.",
  },
  {
    q: "How do I fix weak WiFi signal?",
    a: "Weak signal fixes: (1) Move closer to the router — walls and floors severely reduce signal, (2) Reposition router to a central, elevated location, (3) Switch from 2.4 GHz to 5 GHz for devices nearby (faster but shorter range), (4) Change WiFi channel to avoid interference, (5) Consider a mesh WiFi system or WiFi extender for large homes, (6) Remove physical obstructions between router and device.",
  },
];

export default function WifiNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "WiFi Not Working? Complete Troubleshooting Guide",
            description: "Fix WiFi problems on any device with our comprehensive guide.",
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
              <span className="text-white">WiFi Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              WiFi Not Working? Complete Troubleshooting Guide
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix WiFi problems on laptops, phones, tablets, and smart devices. Covers all causes — from simple router restarts to driver fixes and advanced network diagnostics.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>11 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            When your WiFi is not working, it can mean different things: your device can&apos;t find any WiFi networks, it sees networks but can&apos;t connect, or it connects but has no internet access. Each scenario has a different fix. This guide covers all of them with clear, step-by-step instructions for Windows, Mac, iPhone, and Android.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            WiFi problems are rarely permanent and almost always fixable without professional help. Let&apos;s identify your specific issue and get your wireless connection working again.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Identify Your WiFi Problem Type</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">No WiFi networks visible</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Your device&apos;s WiFi adapter is off, disabled, or broken. See Fixes 1-3.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">WiFi networks visible but can&apos;t connect</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Authentication or compatibility issue. See Fixes 4-6.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">WiFi connected but no internet</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Connected locally but no internet access. See our <Link href="/wifi-connected-but-no-internet" className="text-blue-600 hover:underline">WiFi connected but no internet guide</Link>.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">WiFi keeps disconnecting</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Intermittent connection drops. See Fixes 7-9.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Toggle WiFi Off and Back On</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">The simplest fix that works surprisingly often:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows:</strong> Click WiFi icon in taskbar → toggle off → wait 10 seconds → toggle on</li>
            <li><strong>Mac:</strong> Click WiFi menu bar icon → Turn Wi-Fi Off → wait 10 seconds → Turn Wi-Fi On</li>
            <li><strong>iPhone/iPad:</strong> Open Control Center → tap WiFi icon off → wait → tap on. Or Settings → Wi-Fi → toggle</li>
            <li><strong>Android:</strong> Pull down notification shade → tap WiFi off → wait → tap on</li>
            <li>Also try <strong>Airplane Mode</strong>: turn it ON, wait 10 seconds, turn OFF — this resets all wireless connections</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Your Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If WiFi is not working on ALL your devices, the router is the problem. Unplug it from power, wait 60 seconds, plug it back in, and wait 2-3 minutes for it to fully restart. This clears the router&apos;s memory and resolves most broadcast issues. See our detailed <Link href="/router-not-working" className="text-blue-600 hover:underline">router not working guide</Link> if the restart doesn&apos;t help.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Physical WiFi Switch and Keyboard Shortcut</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Many laptops have a physical WiFi switch or keyboard shortcut that can accidentally disable WiFi:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Physical switch:</strong> Check the sides/front of your laptop for a small WiFi toggle switch</li>
            <li><strong>Keyboard shortcut:</strong> Usually <strong>Fn + F2</strong>, <strong>Fn + F3</strong>, or <strong>Fn + F12</strong> (look for a WiFi icon on the function keys)</li>
            <li><strong>HP laptops:</strong> Often Fn + F12</li>
            <li><strong>Dell laptops:</strong> Often Fn + F2 or a dedicated WiFi button</li>
            <li><strong>Lenovo laptops:</strong> Often Fn + F5 or F8</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Update or Reinstall WiFi Driver (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Corrupted or outdated WiFi drivers are the #1 cause of WiFi not working on Windows:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + X</strong> → <strong>Device Manager</strong></li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Look for your WiFi adapter (usually has &quot;Wireless&quot; or &quot;Wi-Fi&quot; in the name)</li>
            <li>Right-click → <strong>Update driver</strong> → <strong>Search automatically</strong></li>
            <li>If no update found, try <strong>Uninstall device</strong> → check &quot;Delete the driver software for this device&quot; → restart computer</li>
            <li>Windows will automatically reinstall a fresh driver on restart</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Forget and Reconnect to the Network</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Saved WiFi profiles can become corrupted, especially after a router password change or firmware update. Go to your WiFi settings, select your network, choose &quot;Forget&quot; or &quot;Remove,&quot; then reconnect by entering the password fresh. This often resolves authentication failures and connection rejections.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Disable WiFi Power Management (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Windows can turn off WiFi to save power, causing random disconnections:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> → <strong>Network adapters</strong></li>
            <li>Right-click your WiFi adapter → <strong>Properties</strong></li>
            <li>Go to <strong>Power Management</strong> tab</li>
            <li>Uncheck <strong>&quot;Allow the computer to turn off this device to save power&quot;</strong></li>
            <li>Click OK — WiFi should now stay on consistently</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Change WiFi Channel on Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If WiFi keeps dropping or is slow, channel congestion is likely the issue. Log into your router admin panel (usually 192.168.0.1 or 192.168.1.1) and change the WiFi channel. For 2.4 GHz, use channels 1, 6, or 11 (non-overlapping). For 5 GHz, try channels 36-48. Use a WiFi analyzer app on your phone to find the least crowded channel.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Run Network Troubleshooter</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Built-in troubleshooters can auto-detect and fix common WiFi issues:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows 11:</strong> Settings → System → Troubleshoot → Other troubleshooters → Network Adapter → Run</li>
            <li><strong>Windows 10:</strong> Settings → Update & Security → Troubleshoot → Internet Connections</li>
            <li><strong>Mac:</strong> Hold Option + click WiFi icon → Open Wireless Diagnostics</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Reset Network Stack (Windows)</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Run Command Prompt as Administrator:</p>
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p>ipconfig /flushdns</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Restart after running these commands. This resets all network configuration to default.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 10: Full Network Settings Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            As a last resort, reset all network settings on your device. <strong>Windows:</strong> Settings → Network & Internet → Advanced network settings → Network reset. <strong>iPhone:</strong> Settings → General → Reset → Reset Network Settings. <strong>Android:</strong> Settings → System → Reset → Reset Wi-Fi, mobile & Bluetooth. This erases all saved WiFi passwords and VPN configurations.
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
            <h3 className="text-2xl font-heading font-bold">WiFi Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our remote technicians can diagnose WiFi driver, adapter, and configuration issues securely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/wifi-connected-but-no-internet" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Connected But No Internet?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">When WiFi connects but nothing loads.</p>
              </Link>
              <Link href="/router-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Router Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Router-level troubleshooting guide.</p>
              </Link>
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete internet connection fix guide.</p>
              </Link>
              <Link href="/bluetooth-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Bluetooth Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix Bluetooth pairing and connectivity.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
