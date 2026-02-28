import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Connected But No Internet on Windows 11? Fix Guide (2026)",
  description: "Windows 11 shows WiFi connected but no internet? Fix 'No Internet, Secured' errors, DNS failures, adapter issues, and network stack problems step by step.",
  alternates: { canonical: "/wifi-connected-but-no-internet-windows-11" },
  openGraph: { title: "WiFi Connected No Internet Windows 11 — Fix Guide", description: "Fix no internet on Windows 11.", type: "article", url: "https://techsupport4.com/wifi-connected-but-no-internet-windows-11" },
  twitter: { card: "summary_large_image", title: "No Internet Win11 Fix | TechSupport4", description: "WiFi connected but no internet on Windows 11 — fix guide." },
};

const faqs = [
  { q: "Why does Windows 11 say 'No Internet, Secured'?", a: "'Secured' means WiFi encryption is working (your connection to the router is secure). 'No Internet' means the router can't reach the internet, or your device can't reach beyond the router. Common causes: ISP outage, DNS failure, IP conflict, corrupted network settings, or VPN/proxy interference." },
  { q: "Is 'No Internet' different from 'No Network Access' in Windows 11?", a: "Yes: 'No Internet' means you're connected to the local network (router) but can't reach the internet. 'No Network Access' or 'Unidentified Network' means your device can't even communicate with the router properly — usually an IP assignment failure (DHCP issue)." },
  { q: "Windows 11 WiFi was working and suddenly stopped — what happened?", a: "Most likely: (1) DHCP lease expired and failed to renew — restarting fixes this, (2) Router rebooted or had a brief outage, (3) IP conflict with another device on the network, (4) Windows background update changed network settings, (5) VPN left residual DNS/proxy settings when it disconnected." },
  { q: "How do I completely reset network settings in Windows 11?", a: "Settings → Network & internet → Advanced network settings → Network reset → Reset now. This removes all network adapters, reinstalls them, and resets all network settings. You'll need to reconnect to WiFi afterward. Your VPN software may also need reinstallation." },
  { q: "WiFi works on Windows 11 after restart but breaks again — why?", a: "This usually indicates: (1) A program is changing your network settings after startup — check VPN, proxy tools, or network management software, (2) Power management is turning off the WiFi adapter — fix: Device Manager → WiFi adapter → Properties → Power Management → uncheck 'Allow the computer to turn off this device.'" },
];

export default function WifiNoInternetWindows11() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Connected But No Internet on Windows 11 — Fix Guide", description: "Fix no internet on Windows 11 WiFi.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-connected-but-no-internet" className="hover:text-white transition">WiFi No Internet</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Windows 11</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">WiFi Troubleshooting</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Connected But No Internet on Windows 11?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Windows 11 says &quot;No Internet, Secured&quot;? Fix DNS failures, network stack issues, adapter problems, and restore connectivity.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Windows 11&apos;s redesigned networking interface looks cleaner but the same old &quot;No Internet, Secured&quot; problem persists. The WiFi icon shows you&apos;re connected but nothing loads. Here&apos;s how to fix it systematically.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Quick Restart Cycle</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug your <strong>router</strong> (and modem if separate) for <strong>60 seconds</strong></li>
            <li>Plug modem back in → wait for all lights stable (2 min)</li>
            <li>Plug router back in → wait for WiFi light</li>
            <li><strong>Restart</strong> your Windows 11 PC (not just sleep/wake)</li>
            <li>Test internet access</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Reset Network Stack</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Open <strong>Terminal as Administrator</strong> (right-click Start → Terminal Admin):</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>ipconfig /flushdns</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart your PC. This resets the entire network stack — Winsock catalog, TCP/IP settings, DNS cache, and forces new IP assignment.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change DNS to Google or Cloudflare</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; internet → WiFi</strong></li>
            <li>Click your <strong>connected network → Hardware properties</strong></li>
            <li>Next to DNS server assignment, click <strong>Edit</strong></li>
            <li>Change to <strong>Manual</strong></li>
            <li>Toggle <strong>IPv4</strong> on</li>
            <li>Preferred DNS: <strong>8.8.8.8</strong> (Google) or <strong>1.1.1.1</strong> (Cloudflare)</li>
            <li>Alternate DNS: <strong>8.8.4.4</strong> or <strong>1.0.0.1</strong></li>
            <li>Save</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Forget and Reconnect to WiFi</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; internet → WiFi → Manage known networks</strong></li>
            <li>Find your network → click <strong>Forget</strong></li>
            <li>Go back to WiFi and <strong>reconnect</strong> with your password</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Disable WiFi Power Management</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Windows 11 can turn off WiFi to save power, causing disconnections:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> (Win + X → Device Manager)</li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your WiFi adapter → <strong>Properties</strong></li>
            <li>Go to <strong>Power Management</strong> tab</li>
            <li>Uncheck <strong>&quot;Allow the computer to turn off this device to save power&quot;</strong></li>
            <li>Click OK</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update WiFi Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager → Network adapters</strong></li>
            <li>Right-click WiFi adapter → <strong>Update driver → Search automatically</strong></li>
            <li>If problem started after update: right-click → Properties → Driver → <strong>Roll Back Driver</strong></li>
            <li>For Intel WiFi: download latest driver from <strong>intel.com/download</strong></li>
            <li>For Realtek WiFi: check your laptop manufacturer&apos;s support page</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Disable VPN and Proxy</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Close all <strong>VPN applications</strong></li>
            <li>Settings → Network &amp; internet → <strong>Proxy</strong> → toggle <strong>everything OFF</strong></li>
            <li>VPNs can leave residual DNS and routing settings even after disconnecting</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Run Windows Troubleshooter</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → System → Troubleshoot → Other troubleshooters</strong></li>
            <li>Run <strong>Internet Connections</strong> troubleshooter</li>
            <li>Also run <strong>Network Adapter</strong> troubleshooter</li>
            <li>Follow any suggested fixes</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Complete Network Reset</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Nuclear option: <strong>Settings → Network &amp; internet → Advanced network settings → Network reset → Reset now</strong>. This removes and reinstalls all network adapters, resets everything. Your PC restarts and you&apos;ll need to reconnect to WiFi. VPN software may need reinstallation.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still No Internet on Windows 11?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can fix Windows 11 network issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-connected-but-no-internet-windows-10", title: "No Internet Win10", desc: "Fix on Windows 10." },
                { href: "/wifi-keeps-disconnecting-windows-11", title: "WiFi Keeps Disconnecting", desc: "Fix WiFi drops on Win11." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet (General)", desc: "Universal WiFi fix." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
