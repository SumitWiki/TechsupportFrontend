import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Canon Printer Offline? Fix Guide for Windows & Mac (2026)",
  description: "Canon printer showing offline on Windows 11, Windows 10, or Mac? Fix offline status, spooler errors, WiFi disconnection, and driver issues step by step.",
  alternates: { canonical: "/canon-printer-offline-fix" },
  openGraph: { title: "Canon Printer Offline Fix — Windows & Mac Guide", description: "Fix Canon printer offline status.", type: "article", url: "https://techsupport4.com/canon-printer-offline-fix" },
  twitter: { card: "summary_large_image", title: "Canon Offline Fix | TechSupport4", description: "Canon showing offline — fix guide." },
};

const faqs = [
  { q: "Why does my Canon printer keep going offline?", a: "Common causes: (1) WiFi connection dropped — printer and computer must be on the same network, (2) 'Use Printer Offline' checkbox accidentally enabled in Windows, (3) Print spooler service stopped or stuck, (4) Outdated or corrupted printer driver, (5) IP address conflict — printer's IP changed after router reboot, (6) Power saving mode puts printer to sleep and it doesn't wake properly." },
  { q: "How do I get my Canon printer back online in Windows 11?", a: "Quick fix: Settings → Bluetooth & Devices → Printers → select Canon printer → Open print queue → Printer menu → UNCHECK 'Use Printer Offline.' If already unchecked, restart the Print Spooler service: Win+R → services.msc → find Print Spooler → right-click → Restart." },
  { q: "Canon printer offline on Mac — how to fix?", a: "Go to System Settings → Printers & Scanners → select Canon printer → if it shows a yellow warning, click 'Resume' or remove and re-add the printer. Also try: reset the printing system (right-click printer list → Reset printing system), then add the printer again." },
  { q: "Should I use USB or WiFi for Canon printer?", a: "USB is more reliable — no network issues, no offline problems. WiFi is more convenient for multiple devices. If your Canon keeps going offline on WiFi, try: (1) Assign a static IP to the printer, (2) Place printer closer to the router, (3) Use 2.4 GHz band (not 5 GHz), (4) Consider USB for the primary computer and WiFi for others." },
  { q: "How do I assign a static IP to my Canon printer?", a: "On the printer: Settings → LAN Settings → WiFi → Advanced → TCP/IP Settings → set to Manual → enter IP address (e.g., 192.168.1.200), subnet 255.255.255.0, gateway (your router IP). This prevents the IP from changing after router restarts, which is a major cause of 'offline' status." },
];

export default function CanonPrinterOfflineFix() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Canon Printer Offline — Fix Guide for Windows & Mac", description: "Fix Canon printer offline status.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-25", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Canon Offline</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Canon Printer Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Canon Printer Offline? Fix Guide for Windows &amp; Mac</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Canon printer shows &quot;Offline&quot; even though it&apos;s on? Fix WiFi disconnection, spooler issues, driver problems, and get your Canon printing again.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Your Canon printer is powered on, connected to WiFi, and has ink — but Windows or Mac says it&apos;s &quot;Offline.&quot; This is the most common Canon printer issue and usually means your computer has lost communication with the printer. Here&apos;s how to get it back online.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Uncheck &quot;Use Printer Offline&quot; (Windows)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Bluetooth &amp; Devices → Printers &amp; Scanners</strong></li>
            <li>Select your Canon printer</li>
            <li>Click <strong>Open print queue</strong></li>
            <li>Click <strong>Printer</strong> in the menu bar</li>
            <li>Uncheck <strong>&quot;Use Printer Offline&quot;</strong> if it&apos;s checked</li>
            <li>Also click <strong>&quot;Cancel All Documents&quot;</strong> to clear stuck print jobs</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Print Spooler Service</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Press <strong>Win + R</strong> → type <strong>services.msc</strong> → Enter</li>
            <li>Find <strong>Print Spooler</strong> in the list</li>
            <li>Right-click → <strong>Stop</strong></li>
            <li>Wait 10 seconds</li>
            <li>Right-click → <strong>Start</strong></li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Also clear stuck files: Navigate to <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">C:\Windows\System32\spool\PRINTERS</code> and delete all files in that folder (while spooler is stopped), then restart the spooler.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check WiFi Connection</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On the Canon printer, go to <strong>Settings → LAN Settings → WiFi</strong> — check if it&apos;s connected</li>
            <li>Make sure the printer and your computer are on the <strong>same WiFi network</strong></li>
            <li>If printer shows &quot;Not connected,&quot; reconnect: <strong>WiFi Setup → Easy wireless connect</strong></li>
            <li>Use <strong>2.4 GHz</strong> band — most Canon printers don&apos;t support 5 GHz WiFi</li>
            <li>Try printing the <strong>Network Configuration Page</strong> from the printer to see current IP and connection status</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Set Canon as Default Printer</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Settings → Bluetooth &amp; Devices → Printers &amp; Scanners</li>
            <li>Turn OFF <strong>&quot;Let Windows manage my default printer&quot;</strong></li>
            <li>Select your Canon printer → click <strong>Set as default</strong></li>
            <li>This prevents Windows from switching to &quot;Microsoft Print to PDF&quot; or another printer</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Assign a Static IP Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If your Canon goes offline every time the router restarts, the IP address is changing. Fix this permanently:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On the Canon printer: <strong>Settings → LAN Settings → WiFi → Advanced → TCP/IP Settings</strong></li>
            <li>Change from <strong>Auto (DHCP) to Manual</strong></li>
            <li>Set IP: <strong>192.168.1.200</strong> (or any unused IP on your network)</li>
            <li>Subnet: <strong>255.255.255.0</strong></li>
            <li>Gateway: Your router&apos;s IP (usually 192.168.1.1)</li>
            <li>On your computer: remove old Canon printer → add printer using the new static IP</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update or Reinstall Canon Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>canon.com/support</strong> → enter your model number</li>
            <li>Download the latest <strong>full driver + MP Drivers package</strong></li>
            <li>Uninstall current driver: Settings → Apps → Canon → Uninstall</li>
            <li>Restart computer</li>
            <li>Install the downloaded driver</li>
            <li>During setup, select <strong>Wireless LAN Connection</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Fix on Mac</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>System Settings → Printers &amp; Scanners</strong></li>
            <li>If Canon shows yellow warning icon, click <strong>Resume</strong></li>
            <li>If that doesn&apos;t work: right-click the printer list → <strong>Reset printing system</strong></li>
            <li>Re-add the Canon printer: click <strong>+</strong> → select your Canon from the list</li>
            <li>Make sure Canon driver (not &quot;Generic PostScript&quot;) is selected</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Power Cycle Everything</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Turn off Canon printer → turn off computer → <strong>unplug the router</strong> for 30 seconds → plug router back in → wait for full connection → turn on printer → turn on computer. This forces fresh network associations and often resolves persistent offline issues.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Canon Still Offline?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose and fix Canon connection issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/canon-printer-not-printing-black-ink", title: "Canon Not Printing Black", desc: "Fix Canon black ink issues." },
                { href: "/canon-printer-setup-failed", title: "Canon Setup Failed", desc: "Fix Canon printer setup." },
                { href: "/printer-offline-fix", title: "Any Printer Offline Fix", desc: "Universal offline guide." },
                { href: "/printer-not-working", title: "Printer Not Working?", desc: "General printer fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
