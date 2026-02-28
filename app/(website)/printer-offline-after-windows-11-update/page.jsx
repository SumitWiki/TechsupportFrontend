import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Printer Offline After Windows 11 Update? 9 Fixes (2026)",
  description: "Printer showing offline after Windows 11 update? Fix driver issues, print spooler crashes, and connectivity problems with our step-by-step 2026 guide.",
  alternates: { canonical: "/printer-offline-after-windows-11-update" },
  openGraph: { title: "Printer Offline After Windows 11 Update — 9 Fixes", description: "Fix printer offline after Windows 11 update.", type: "article", url: "https://techsupport4.com/printer-offline-after-windows-11-update" },
  twitter: { card: "summary_large_image", title: "Printer Offline Win11 Fix | TechSupport4", description: "9 fixes for printer offline after Windows 11 update." },
};

const faqs = [
  { q: "Why does my printer go offline after Windows 11 updates?", a: "Windows 11 updates can replace printer drivers with generic ones, reset print spooler settings, change network configurations, or introduce compatibility issues with older printers. The most common cause is a driver replacement — Windows Update installs a 'Microsoft IPP Class Driver' that doesn't work well with many printers." },
  { q: "How do I fix the print spooler after a Windows 11 update?", a: "Open Services (Win+R, type services.msc). Find 'Print Spooler', right-click → Stop. Go to C:\\Windows\\System32\\spool\\PRINTERS and delete all files. Go back to Services, right-click Print Spooler → Start. This clears stuck print jobs and resets the spooler." },
  { q: "Should I use the manufacturer's driver or Windows driver?", a: "Always use the manufacturer's latest driver downloaded from their website (HP, Epson, Canon, Brother). Windows generic drivers often have limited functionality and can cause offline/compatibility issues, especially after updates. Visit your printer manufacturer's support page and download the full driver package." },
  { q: "How do I stop Windows 11 from changing my printer driver?", a: "Go to Settings → Windows Update → Advanced Options → Optional Updates. Uncheck printer driver updates. Also: Settings → Bluetooth & devices → Printers → Let Windows manage my default printer → turn OFF. This prevents Windows from overriding your working driver." },
  { q: "My wireless printer went offline after Windows 11 update. How to fix?", a: "Windows 11 updates can reset network settings. (1) Restart your printer and router. (2) On the printer, re-run wireless setup (usually in Network settings menu). (3) In Windows, go to Settings → Bluetooth & devices → Printers → your printer → check IP address matches. (4) Remove and re-add the printer in Windows settings." },
];

export default function PrinterOfflineAfterWindows11Update() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Printer Offline After Windows 11 Update — 9 Fixes", description: "Fix printer offline after Windows 11 update.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-03-01", dateModified: "2026-03-01" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-cyan-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Windows 11 Update</span>
            </nav>
            <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-cyan-500/30">Windows 11 Fix</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Printer Offline After Windows 11 Update?</h1>
            <p className="mt-4 text-cyan-200 text-lg max-w-2xl">9 proven fixes for printers showing offline, not printing, or disappearing after a Windows 11 update — driver rollback, spooler reset, and network reconfiguration.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-cyan-300"><span>Updated: Mar 2026</span><span className="w-1 h-1 rounded-full bg-cyan-400" /><span>12 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Windows 11 updates are notorious for breaking printer connections. The update replaces your printer&apos;s driver with a generic one, resets network settings, or introduces compatibility bugs. This guide covers every fix for <strong>HP, Epson, Canon, Brother, and other brands</strong>.</p>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 mb-8">
            <p className="text-cyan-800 dark:text-cyan-300 font-semibold mb-2">⚡ Quick Fix Checklist</p>
            <ol className="text-cyan-700 dark:text-cyan-300 text-sm space-y-1 list-decimal pl-5">
              <li>Restart printer and computer</li>
              <li>Check printer is set as &quot;Online&quot; (not &quot;Use Printer Offline&quot;)</li>
              <li>Reset print spooler service</li>
              <li>Download latest driver from manufacturer website</li>
              <li>Remove and re-add the printer in Windows</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Everything</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Turn off the <strong>printer</strong> completely (power button, not just sleep)</li>
            <li><strong>Restart</strong> your Windows 11 computer</li>
            <li>If wireless, also restart your <strong>WiFi router</strong></li>
            <li>Once computer is back up, turn on the <strong>printer</strong></li>
            <li>Wait <strong>2 minutes</strong> for Windows to rediscover the printer</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Uncheck &quot;Use Printer Offline&quot;</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Bluetooth &amp; devices → Printers &amp; scanners</strong></li>
            <li>Click on your printer</li>
            <li>Click <strong>&quot;Open print queue&quot;</strong></li>
            <li>In the print queue window, click <strong>Printer</strong> menu</li>
            <li>Uncheck <strong>&quot;Use Printer Offline&quot;</strong> if it&apos;s checked</li>
            <li>Also uncheck <strong>&quot;Pause Printing&quot;</strong> if checked</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Reset Print Spooler</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Run in Command Prompt as Administrator</span></p>
            <p className="text-slate-800 dark:text-slate-200">net stop spooler</p>
            <p className="text-slate-800 dark:text-slate-200">del /Q /F /S &quot;%systemroot%\System32\spool\PRINTERS\*.*&quot;</p>
            <p className="text-slate-800 dark:text-slate-200">net start spooler</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 This stops the spooler, clears stuck print jobs, and restarts fresh. One of the most effective fixes after Windows updates.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Run Windows Printer Troubleshooter</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → System → Troubleshoot</strong></li>
            <li>Click <strong>Other troubleshooters</strong></li>
            <li>Find <strong>&quot;Printer&quot;</strong> and click <strong>Run</strong></li>
            <li>Follow the on-screen instructions</li>
            <li>Windows will attempt to detect and fix printer issues automatically</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update Printer Driver (Manufacturer)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Download the <strong>latest driver</strong> directly from the manufacturer — don&apos;t rely on Windows Update:</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Brand</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Driver Download Page</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-semibold">HP</td><td className="p-3">support.hp.com/drivers</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-semibold">Epson</td><td className="p-3">epson.com/Support</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-semibold">Canon</td><td className="p-3">usa.canon.com/support</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="p-3 font-semibold">Brother</td><td className="p-3">support.brother.com</td></tr>
                <tr><td className="p-3 font-semibold">Samsung</td><td className="p-3">samsung.com/support (now HP)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Roll Back Printer Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + X → Device Manager</strong></li>
            <li>Expand <strong>Print queues</strong></li>
            <li>Right-click your printer → <strong>Properties</strong></li>
            <li>Go to <strong>Driver</strong> tab</li>
            <li>Click <strong>&quot;Roll Back Driver&quot;</strong> if available</li>
            <li>If grayed out, the previous driver was deleted by the update</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Remove &amp; Re-Add Printer</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Bluetooth &amp; devices → Printers &amp; scanners</strong></li>
            <li>Click your printer → <strong>Remove</strong></li>
            <li>Restart your computer</li>
            <li>Go back to <strong>Printers &amp; scanners → Add device</strong></li>
            <li>Let Windows discover and reinstall the printer</li>
            <li>If not found, use <strong>&quot;Add manually&quot;</strong> with the printer&apos;s IP address</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Set Static IP for Wireless Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Windows updates can change network settings, causing wireless printers to lose connection:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On the printer, go to <strong>Network Settings → TCP/IP</strong></li>
            <li>Change from <strong>DHCP (Automatic)</strong> to <strong>Manual/Static</strong></li>
            <li>Set an IP like <strong>192.168.1.200</strong> (outside your router&apos;s DHCP range)</li>
            <li>In Windows, add the printer using this <strong>static IP address</strong></li>
            <li>The printer will keep the same IP even if the router restarts</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Uninstall Problematic Update</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Windows Update → Update history</strong></li>
            <li>Click <strong>&quot;Uninstall updates&quot;</strong></li>
            <li>Find the most recent update and <strong>Uninstall</strong></li>
            <li>Restart and check if the printer works</li>
            <li>If it works, <strong>pause updates temporarily</strong> to prevent re-installation</li>
          </ol>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
            <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">🛡️ Prevent Future Issues</p>
            <ul className="text-amber-700 dark:text-amber-400 text-sm space-y-1 list-disc pl-5">
              <li>Go to <strong>Settings → Windows Update → Advanced → Optional updates</strong> and uncheck printer driver updates</li>
              <li>Turn off <strong>&quot;Let Windows manage my default printer&quot;</strong></li>
              <li>Set a <strong>static IP</strong> for wireless printers</li>
              <li>Keep <strong>manufacturer drivers</strong> updated independently of Windows Update</li>
            </ul>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-cyan-700 to-cyan-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Printer Still Offline After Update?</h3>
            <p className="mt-2 text-cyan-200 max-w-lg mx-auto">Our Windows experts can fix your printer driver issues remotely in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-cyan-700 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/printer-not-working", title: "Printer Not Working?", desc: "General printer troubleshooting." },
                { href: "/hp-printer-not-printing-black-ink-only", title: "HP Black Ink Issue", desc: "Fix HP printers not printing black." },
                { href: "/printer-offline-fix-guide", title: "Printer Offline Guide", desc: "Universal offline printer fix." },
                { href: "/laptop-slow-after-windows-update", title: "Slow After Update", desc: "Fix laptop speed after updates." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-cyan-700 dark:text-cyan-400 group-hover:text-cyan-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
