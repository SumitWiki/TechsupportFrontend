import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Working After Changing Password? Fix Guide (2026)",
  description: "Changed your WiFi password and now devices can't connect? Fix saved credentials, reconnect devices, and resolve authentication errors step by step.",
  alternates: { canonical: "/wifi-not-working-after-changing-password" },
  openGraph: { title: "WiFi Not Working After Password Change — Fix Guide", description: "Fix WiFi after changing password.", type: "article", url: "https://techsupport4.com/wifi-not-working-after-changing-password" },
  twitter: { card: "summary_large_image", title: "WiFi Password Change Fix | TechSupport4", description: "WiFi not working after changing password — fix guide." },
};

const faqs = [
  { q: "Why can't my devices connect after I changed the WiFi password?", a: "Your devices still have the OLD password saved. When they try to auto-connect, they send the old password, which the router rejects. You need to 'forget' the network on each device and reconnect with the new password. Some devices cache the old credentials and keep retrying silently." },
  { q: "I changed the password but one device still connects with the old one — why?", a: "Some devices (especially IoT devices like smart plugs, cameras, and thermostats) cache the WiFi credentials in hardware. They may need a factory reset to clear the old password. Also, if your router has WPS enabled, a device may have connected via WPS (which bypasses the password)." },
  { q: "How do I reconnect smart home devices after a WiFi password change?", a: "Most smart home devices (Alexa, Google Home, smart plugs, cameras) need to be reset and re-added through their companion app: (1) Factory reset the device (usually hold a button for 10-15 sec), (2) Open the device's app, (3) Go through the setup/pairing process again with the new WiFi password." },
  { q: "Can I change the WiFi password without disconnecting everyone?", a: "No — when you change the WiFi password, all devices will eventually disconnect when their authentication expires (usually within minutes). To minimize disruption: (1) Change the password during off-peak hours (late night), (2) Have the new password ready to type on all devices, (3) Start with critical devices first (phones, laptops, then IoT)." },
  { q: "I forgot the new WiFi password I just set — how to find it?", a: "Options: (1) Log into router admin (192.168.1.1 via Ethernet) → Wireless Settings → view password, (2) On Windows: Settings → Network → WiFi → your network → Properties → view password (or: netsh wlan show profile [name] key=clear), (3) On phone: Settings → WiFi → tap connected network → share/view password." },
];

export default function WifiNotWorkingAfterChangingPassword() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Not Working After Changing Password — Fix Guide", description: "Fix WiFi after password change.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Password Change</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">WiFi Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Not Working After Changing Password?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Changed your WiFi password and now nothing connects? Fix saved credentials, reconnect all devices, and resolve authentication errors.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>9 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You changed your WiFi password for security, and now every device in the house is offline. This is normal — every device stored the old password and needs to be manually updated. Here&apos;s the systematic process.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Reconnect Your Primary Device</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Start with the device you changed the password from (usually connected via Ethernet or still authenticated):</p>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">Windows 10/11:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Click <strong>WiFi icon</strong> in taskbar</li>
            <li>Click your network → <strong>Forget</strong> (or right-click → Forget)</li>
            <li>Click the network again → <strong>Connect</strong></li>
            <li>Enter the <strong>new password</strong></li>
          </ol>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">Mac:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Click <strong>WiFi icon</strong> → <strong>Network Preferences</strong></li>
            <li>Select your network → click <strong>minus (-)</strong> to remove it</li>
            <li>Reconnect and enter the <strong>new password</strong></li>
          </ol>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3">iPhone/Android:</h3>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → WiFi</strong></li>
            <li>Tap your network → <strong>Forget this Network</strong></li>
            <li>Tap the network again → enter <strong>new password</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Reconnect Smart Home Devices</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Smart home devices can&apos;t be updated the same way — most need a full re-setup:</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Device</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">How to Reconnect</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Amazon Echo/Alexa</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Alexa app → Devices → Echo → WiFi → Change → enter new password</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Google Home/Nest</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Google Home app → Device → Settings → WiFi → Forget → Re-setup</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Smart TV</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">TV Settings → Network → WiFi → Forget → Reconnect with new password</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Smart Plugs/Bulbs</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Factory reset device (hold button 10s) → re-add in manufacturer app</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Security Cameras</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Reset camera → re-add in camera app with new WiFi credentials</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Printers</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Printer WiFi setup mode → reconnect via printer panel or app</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Fix &quot;Authentication Error&quot; or &quot;Wrong Password&quot;</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Double-check you&apos;re typing the <strong>exact new password</strong> (passwords are case-sensitive)</li>
            <li>Make sure <strong>Caps Lock</strong> is off</li>
            <li>Check if you changed the <strong>WiFi name (SSID)</strong> along with the password — you may be connecting to the wrong network</li>
            <li>On the router, verify the password was actually saved: <strong>Router admin → Wireless → Security → check password</strong></li>
            <li>Some older devices don&apos;t support certain characters in passwords — try a password with only <strong>letters and numbers</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Windows Shows &quot;Can&apos;t Connect to This Network&quot;</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If forgetting and reconnecting doesn&apos;t work:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh wlan delete profile name=&quot;YourNetworkName&quot;</p>
            <p>netsh wlan show profiles</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">This completely removes the network profile. Then reconnect through Settings → WiFi.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: If Router Admin Panel Won&apos;t Open</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If you changed the WiFi password and accidentally locked yourself out of the router admin, connect to the router via <strong>Ethernet cable</strong> (wired connections aren&apos;t affected by WiFi password changes). Then access the admin panel normally at 192.168.1.1 or 192.168.0.1.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Tips for Next Time</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Write down the new password</strong> before applying the change</li>
            <li>Change the password during <strong>off-peak hours</strong></li>
            <li>Keep an <strong>Ethernet cable</strong> handy in case you need router access</li>
            <li>Make a list of all WiFi-connected devices so you know what to update</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still Can&apos;t Connect After Password Change?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help reconnect all your devices and fix WiFi issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but no internet?" },
                { href: "/wifi-not-connecting-after-factory-reset", title: "After Factory Reset", desc: "WiFi won't connect post-reset." },
                { href: "/router-login-page-not-opening", title: "Router Login Not Opening", desc: "Access router admin panel." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
