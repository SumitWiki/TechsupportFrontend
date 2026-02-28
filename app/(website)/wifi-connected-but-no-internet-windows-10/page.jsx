import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Connected But No Internet on Windows 10? Fix Guide (2026)",
  description: "Windows 10 shows WiFi connected but no internet access? Fix DNS issues, IP conflicts, network adapter problems, and restore internet connectivity step by step.",
  alternates: { canonical: "/wifi-connected-but-no-internet-windows-10" },
  openGraph: { title: "WiFi Connected No Internet Windows 10 — Fix Guide", description: "Fix no internet on Windows 10.", type: "article", url: "https://techsupport4.com/wifi-connected-but-no-internet-windows-10" },
  twitter: { card: "summary_large_image", title: "No Internet Win10 Fix | TechSupport4", description: "WiFi connected but no internet on Windows 10 — fix guide." },
};

const faqs = [
  { q: "Why does Windows 10 say 'No Internet Access' when WiFi is connected?", a: "Your device successfully connected to the router (WiFi) but the router can't reach the internet. Causes: (1) ISP outage, (2) Router has internet issue — not your device, (3) DNS server not responding, (4) IP address conflict — two devices have the same IP, (5) Network adapter driver issue, (6) VPN or proxy misconfiguration, (7) Windows network settings corrupted." },
  { q: "How do I know if it's my device or the router?", a: "Simple test: try connecting another device (phone, tablet) to the same WiFi. If the other device also has no internet, the problem is the router or ISP. If only your Windows 10 PC has no internet, the problem is your device's network settings." },
  { q: "What does 'No Internet, Secured' mean in Windows 10?", a: "'Secured' means you're connected to the WiFi with proper encryption (good). 'No Internet' means the connection between your router and ISP is broken, OR your device can't reach the DNS/gateway. The WiFi connection itself is fine — the internet path is broken somewhere." },
  { q: "Will resetting network settings fix the problem?", a: "Often yes. Windows 10 network reset (Settings → Network → Network reset) removes all network adapters and reinstalls them, clears all network settings, removes VPN software, and resets Winsock. It's the nuclear option but very effective for persistent 'no internet' issues." },
  { q: "Why does this happen every time Windows 10 updates?", a: "Windows updates sometimes reset network adapter settings, change DNS configuration, or install incompatible network drivers. After an update: (1) Check if your WiFi driver was replaced — go to Device Manager → Network adapters → update/rollback driver, (2) Re-apply your custom DNS settings, (3) Disable and re-enable the WiFi adapter." },
];

export default function WifiNoInternetWindows10() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Connected But No Internet on Windows 10 — Fix Guide", description: "Fix no internet on Windows 10 WiFi.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-connected-but-no-internet" className="hover:text-white transition">WiFi No Internet</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Windows 10</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">WiFi Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Connected But No Internet on Windows 10?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Windows 10 says &quot;No Internet, Secured&quot;? Fix DNS failures, IP conflicts, adapter issues, and restore your internet connection.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">The yellow triangle with &quot;No Internet Access&quot; or the &quot;No Internet, Secured&quot; message is one of the most common Windows 10 problems. You&apos;re connected to WiFi — the icon shows signal bars — but websites won&apos;t load and apps can&apos;t connect. Here&apos;s the systematic fix.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Router and Device</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug your <strong>router power</strong> (and modem if separate)</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug modem back in → wait for all lights stable</li>
            <li>Plug router back in → wait for WiFi light</li>
            <li>Restart your Windows 10 PC</li>
            <li>Check if internet is back</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Reset TCP/IP and DNS</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Open <strong>Command Prompt as Administrator</strong> (right-click Start → Command Prompt Admin) and run these commands:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>ipconfig /flushdns</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart your PC after running these commands. This resets the network stack and forces a fresh IP assignment.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change DNS Servers</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; Internet → WiFi → your network → Properties</strong></li>
            <li>Scroll to <strong>IP settings → Edit</strong></li>
            <li>Change DNS to <strong>Manual</strong></li>
            <li>Preferred DNS: <strong>8.8.8.8</strong></li>
            <li>Alternate DNS: <strong>8.8.4.4</strong></li>
            <li>Save and test</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Forget and Reconnect to WiFi</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Click the <strong>WiFi icon</strong> in the taskbar</li>
            <li>Right-click your network → <strong>Forget</strong></li>
            <li>Wait 10 seconds</li>
            <li>Click the network again → enter your WiFi <strong>password</strong></li>
            <li>This creates a fresh network profile</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Disable and Re-enable WiFi Adapter</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> (Win + X → Device Manager)</li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your WiFi adapter → <strong>Disable device</strong></li>
            <li>Wait 10 seconds</li>
            <li>Right-click → <strong>Enable device</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update Network Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager → Network adapters</strong></li>
            <li>Right-click WiFi adapter → <strong>Update driver</strong></li>
            <li>Choose <strong>&quot;Search automatically&quot;</strong></li>
            <li>If no update found, go to your laptop manufacturer&apos;s website and download the latest WiFi driver</li>
            <li>If the problem started after a driver update: Right-click → Properties → Driver → <strong>Roll Back Driver</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Disable VPN and Proxy</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Close any <strong>VPN software</strong> (NordVPN, ExpressVPN, etc.)</li>
            <li>Check proxy: <strong>Settings → Network → Proxy</strong> → turn OFF <strong>&quot;Use a proxy server&quot;</strong></li>
            <li>Also turn OFF <strong>&quot;Automatically detect settings&quot;</strong> if proxy was recently used</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Run Network Troubleshooter</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Right-click the WiFi icon in the taskbar → <strong>Troubleshoot problems</strong>. Windows will diagnose and may fix the issue automatically. Common fixes it applies: resetting the WiFi adapter, clearing DNS cache, and fixing default gateway issues.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Full Network Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Last resort: <strong>Settings → Network &amp; Internet → Status → Network reset</strong>. This removes all network adapters and reinstalls them, resets all networking components to default. Your PC will restart and you&apos;ll need to reconnect to WiFi and re-enter the password.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still No Internet on Windows 10?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose and fix network issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-connected-but-no-internet-windows-11", title: "No Internet Win11", desc: "Fix on Windows 11." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet (General)", desc: "Universal WiFi fix guide." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "Fix WiFi connection issues." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
