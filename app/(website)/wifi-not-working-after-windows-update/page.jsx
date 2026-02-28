import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Working After Windows Update? Quick Fix (2026)",
  description: "WiFi stopped working after Windows 10/11 update? Fix WiFi driver issues, missing adapter, limited connectivity, and connection drops caused by Windows updates.",
  alternates: { canonical: "/wifi-not-working-after-windows-update" },
  openGraph: { title: "WiFi Not Working After Windows Update — Fix", description: "Fix WiFi broken by Windows update.", type: "article", url: "https://techsupport4.com/wifi-not-working-after-windows-update" },
  twitter: { card: "summary_large_image", title: "WiFi After Update Fix | TechSupport4", description: "WiFi not working after Windows update — fix guide." },
};

const faqs = [
  { q: "Why did WiFi stop working after Windows update?", a: "Windows updates can: (1) Replace your WiFi driver with an incompatible one, (2) Disable the WiFi adapter in Device Manager, (3) Reset network settings, (4) Corrupt the TCP/IP stack, (5) Change power management settings that put the adapter to sleep. Driver incompatibility is the #1 cause." },
  { q: "How do I fix WiFi after Windows 11 update?", a: "Try in order: (1) Toggle Airplane Mode on then off, (2) Run network troubleshooter (Settings → Troubleshoot), (3) Roll back WiFi driver (Device Manager → Network adapters → WiFi → Properties → Driver → Roll Back), (4) Reset network (Settings → Network → Advanced → Network reset)." },
  { q: "WiFi adapter disappeared after update — what do I do?", a: "Open Device Manager → View → Show hidden devices. If the WiFi adapter appears grayed out, right-click → Enable. If missing entirely, restart the computer. If still missing, the update removed the driver — download the latest WiFi driver from your laptop manufacturer's website using Ethernet or another device." },
  { q: "Should I use Windows driver or manufacturer driver?", a: "Always use the manufacturer's driver (from Dell, HP, Lenovo, etc. support site). Windows generic drivers often lack features and can be buggy. After installing the manufacturer's driver, prevent Windows from overwriting it: Device Manager → WiFi → Properties → Driver → Update Driver → 'Browse my computer' → select the downloaded driver." },
  { q: "How do I prevent Windows updates from breaking WiFi again?", a: "You can't fully prevent it, but: (1) Keep a wired Ethernet adapter as backup, (2) Download your WiFi driver to a USB drive, (3) In Device Manager, right-click WiFi → Driver → set 'Do not search Windows Update for drivers', (4) Pause major Windows updates until others confirm stability." },
];

export default function WifiNotWorkingAfterWindowsUpdate() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Not Working After Windows Update — Fix", description: "Fix WiFi after Windows update.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-red-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Windows Update</span>
            </nav>
            <span className="inline-block bg-red-500/20 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-red-500/30">Driver / Update Issue</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Not Working After Windows Update?</h1>
            <p className="mt-4 text-red-200 text-lg max-w-2xl">Windows 10/11 update killed your WiFi? Fix driver issues, missing adapter, and connectivity problems.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-red-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-red-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6"><strong>WiFi breaking after a Windows update</strong> is one of the most common complaints. The update replaces your working WiFi driver with a generic or incompatible one, or resets network settings. Here&apos;s how to fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Toggle Airplane Mode</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Click the <strong>WiFi/Network icon</strong> in the taskbar</li>
            <li>Turn <strong>Airplane Mode ON</strong></li>
            <li>Wait <strong>10 seconds</strong></li>
            <li>Turn <strong>Airplane Mode OFF</strong></li>
            <li>This forces the WiFi adapter to reinitialize</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Roll Back WiFi Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Right-click <strong>Start → Device Manager</strong></li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your <strong>WiFi adapter</strong> (e.g., Intel AX211, Realtek RTL8852)</li>
            <li>Select <strong>Properties → Driver tab</strong></li>
            <li>Click <strong>&quot;Roll Back Driver&quot;</strong></li>
            <li>If grayed out, the driver can&apos;t be rolled back — proceed to Fix 3</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Reinstall WiFi Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In <strong>Device Manager → Network adapters</strong></li>
            <li>Right-click WiFi adapter → <strong>Uninstall device</strong> → check &quot;Delete driver software&quot;</li>
            <li><strong>Restart</strong> the computer — Windows will reinstall a basic driver</li>
            <li>If WiFi works → download the manufacturer&apos;s latest driver for a permanent fix</li>
            <li>If WiFi still doesn&apos;t work → download driver on another device via USB</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Run Network Troubleshooter</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → System → Troubleshoot → Other troubleshooters</strong></li>
            <li>Click <strong>Run</strong> next to &quot;Network and Internet&quot;</li>
            <li>Follow the prompts</li>
            <li>Restart after troubleshooter completes</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Reset TCP/IP and DNS</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Open <strong>Command Prompt as Administrator</strong> (right-click Start → Terminal (Admin)) and run:</p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-5 font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p>ipconfig /flushdns</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8"><strong>Restart</strong> the computer after running all commands.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check WiFi Adapter Power Settings</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager → Network adapters</strong></li>
            <li>Right-click WiFi adapter → <strong>Properties</strong></li>
            <li>Go to <strong>Power Management</strong> tab</li>
            <li>Uncheck <strong>&quot;Allow the computer to turn off this device to save power&quot;</strong></li>
            <li>Click OK</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Network Reset (Nuclear Option)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Network &amp; Internet → Advanced network settings</strong></li>
            <li>Click <strong>Network reset</strong></li>
            <li>Click <strong>Reset now</strong></li>
            <li>Computer will restart and <strong>remove/reinstall all network adapters</strong></li>
            <li>You&apos;ll need to reconnect to WiFi (re-enter password)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Uninstall the Windows Update</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Windows Update → Update history</strong></li>
            <li>Click <strong>Uninstall updates</strong></li>
            <li>Find the most recent update → <strong>Uninstall</strong></li>
            <li>Restart and test WiFi</li>
            <li>If WiFi works, <strong>pause updates</strong> until a fix is available</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">WiFi Still Down After Update?</h3>
            <p className="mt-2 text-red-200 max-w-lg mx-auto">Our technicians can remotely fix WiFi driver issues and network settings.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/printer-offline-after-windows-update", title: "Printer After Update", desc: "Fix printer broken by update." },
                { href: "/computer-slow-after-windows-update", title: "Slow After Update", desc: "Computer slow after update." },
                { href: "/bluetooth-not-working-after-update", title: "Bluetooth After Update", desc: "Fix Bluetooth after update." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
