import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "HP Printer Offline on Windows 11? Fix Guide (2026)",
  description: "HP printer showing offline on Windows 11? Fix HP printer offline status, driver issues, spooler errors, and USB/WiFi connection problems step by step.",
  alternates: { canonical: "/hp-printer-offline-windows-11-fix" },
  openGraph: { title: "HP Printer Offline on Windows 11? Fix Guide", description: "Fix HP printer offline on Windows 11.", type: "article", url: "https://techsupport4.com/hp-printer-offline-windows-11-fix" },
  twitter: { card: "summary_large_image", title: "Fix HP Printer Offline Win11 | TechSupport4", description: "HP printer offline Windows 11 — fix guide." },
};

const faqs = [
  { q: "Why does my HP printer show offline on Windows 11?", a: "Common causes: (1) Printer is in sleep mode or turned off, (2) WiFi connection lost between printer and computer, (3) Windows 11 has 'Use Printer Offline' enabled, (4) Print spooler service crashed, (5) HP driver incompatible with Windows 11, (6) IP address changed after router restart, (7) Windows 11 installed a generic driver instead of HP's." },
  { q: "How do I set my HP printer back to online in Windows 11?", a: "Open Settings → Bluetooth & devices → Printers & scanners → select your HP printer → Open print queue → click Printer menu → uncheck 'Use Printer Offline.' Also try: right-click the printer → Set as default printer. If greyed out, restart the print spooler service first." },
  { q: "How do I restart the print spooler on Windows 11?", a: "Press Win+R → type services.msc → Enter. Scroll to 'Print Spooler' → right-click → Restart. If it fails to restart, right-click → Properties → set Startup type to Automatic. Click Stop, then Start. This clears stuck print jobs that can cause offline status." },
  { q: "Do HP printers work with Windows 11?", a: "Most HP printers from 2015 onwards work with Windows 11. Check HP's Windows 11 compatibility list at support.hp.com. If your printer isn't officially supported, try HP Universal Print Driver (UPD) — it works with most HP LaserJet and InkJet printers even without model-specific drivers." },
  { q: "HP printer connected via USB but showing offline — help?", a: "Try: (1) Unplug and replug USB cable, (2) Try a different USB port, (3) Try a different USB cable, (4) Go to Device Manager → USB controllers → right-click each USB Root Hub → Properties → Power Management → uncheck 'Allow computer to turn off this device', (5) Reinstall HP driver." },
];

export default function HpPrinterOfflineWindows11() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "HP Printer Offline on Windows 11 — Fix Guide", description: "Fix HP printer offline on Windows 11.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-24", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/hp-printer-not-working" className="hover:text-white transition">HP Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Offline on Windows 11</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">HP Printer Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">HP Printer Offline on Windows 11? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix the &quot;Printer Offline&quot; status for HP printers on Windows 11 — covers spooler fixes, driver updates, WiFi reconnection, and USB troubleshooting.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">&quot;Printer Offline&quot; on Windows 11 is frustrating — your HP printer worked yesterday and now refuses to print. This guide covers every fix from simple (uncheck Use Printer Offline) to advanced (clean driver reinstall).</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Uncheck &quot;Use Printer Offline&quot;</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Bluetooth &amp; devices → Printers &amp; scanners</strong></li>
            <li>Click your HP printer</li>
            <li>Click <strong>Open print queue</strong></li>
            <li>Click <strong>Printer</strong> menu (top)</li>
            <li>Uncheck <strong>&quot;Use Printer Offline&quot;</strong></li>
            <li>Also uncheck <strong>&quot;Pause Printing&quot;</strong> if checked</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Print Spooler</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + R</strong> → type <code className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">services.msc</code> → Enter</li>
            <li>Find <strong>Print Spooler</strong></li>
            <li>Right-click → <strong>Restart</strong></li>
            <li>Close the Services window</li>
            <li>Try printing again</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Power Cycle the Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Turn off the HP printer → unplug power cable → wait <strong>60 seconds</strong> → plug back in → turn on. This clears the printer&apos;s internal memory and forces it to re-establish the network/USB connection.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check WiFi Connection (Wireless Printers)</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Print a <strong>Network Configuration Page</strong> from the printer (usually in Settings → Reports)</li>
            <li>Check if the printer shows a valid IP address on your network</li>
            <li>Make sure printer and computer are on the <strong>same WiFi network</strong></li>
            <li>If IP changed, remove and re-add the printer in Windows 11 Settings</li>
            <li>Try assigning a <strong>static IP</strong> to the printer via your router settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Run Windows Troubleshooter</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Settings → System → Troubleshoot → Other troubleshooters → <strong>Printer</strong> → Run. Windows 11&apos;s built-in troubleshooter can fix spooler issues, driver problems, and port configuration.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update HP Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Visit <strong>support.hp.com</strong> → enter your printer model</li>
            <li>Download the latest Windows 11 driver</li>
            <li>Run the installer</li>
            <li>Alternatively: use <strong>HP Smart app</strong> from Microsoft Store — it auto-detects and installs correct drivers</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Remove and Re-Add Printer</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Settings → Bluetooth &amp; devices → Printers &amp; scanners</li>
            <li>Click your HP printer → <strong>Remove</strong></li>
            <li>Restart computer</li>
            <li>Click <strong>Add device</strong> → Windows 11 should detect the printer</li>
            <li>Install driver when prompted</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">HP Printer Still Offline?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can fix HP printer offline issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/hp-printer-driver-error-windows-10", title: "HP Driver Error Win10", desc: "Fix HP driver issues on Win10." },
                { href: "/hp-printer-not-printing-after-ink-change", title: "HP After Ink Change", desc: "Fix HP not printing after new ink." },
                { href: "/hp-printer-not-working", title: "HP Printer Not Working?", desc: "General HP printer guide." },
                { href: "/printer-offline-fix", title: "Any Printer Offline", desc: "Universal offline fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
