import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Brother Printer Offline? Fix Guide for Windows & Mac (2026)",
  description: "Brother printer showing offline on Windows 11, Windows 10, or Mac? Fix offline status, spooler errors, WiFi disconnection, and driver issues step by step.",
  alternates: { canonical: "/brother-printer-offline-fix" },
  openGraph: { title: "Brother Printer Offline Fix — Windows & Mac Guide", description: "Fix Brother printer offline status.", type: "article", url: "https://techsupport4.com/brother-printer-offline-fix" },
  twitter: { card: "summary_large_image", title: "Brother Offline Fix | TechSupport4", description: "Brother showing offline — fix guide." },
};

const faqs = [
  { q: "Why does my Brother printer keep going offline?", a: "Top causes: (1) WiFi connection dropped — printer and computer must be on the same network, (2) 'Use Printer Offline' is checked in Windows, (3) Print Spooler service crashed, (4) Printer's IP address changed after router reboot, (5) Sleep mode — printer goes to deep sleep and doesn't wake for network requests, (6) Outdated driver incompatible with latest Windows update." },
  { q: "How do I check if my Brother printer is connected to WiFi?", a: "On the printer: Menu → Network → WLAN → TCP/IP → IP Address. If it shows 0.0.0.0, it's not connected. Or print a Network Configuration Report: Menu → Print Reports → Network Configuration. This shows the current IP, connection status, signal strength, and MAC address." },
  { q: "Brother printer offline after changing router/WiFi password", a: "The printer still has the old WiFi credentials. You need to re-enter the new password: Menu → Network → WLAN → Setup Wizard → select your network → enter the new password. On your computer, you may also need to remove the old Brother printer and add it again with the new IP address." },
  { q: "How do I disable sleep mode on Brother printer?", a: "Menu → General Setup → Ecology → Sleep Time → set to a longer value or Off. Note: Some Brother models will always sleep but should wake when a print job is received. If they don't wake, it's usually a network issue — assigning a static IP often fixes this." },
  { q: "Brother printer works via USB but not WiFi — why?", a: "This confirms the printer hardware is fine — the issue is network-based. Check: (1) Both devices on same network, (2) AP isolation disabled on router, (3) Firewall not blocking Brother ports (9100 for printing, 54925-54926 for scanning), (4) Try pinging the printer: open Command Prompt → type 'ping [printer IP]'. If no response, it's a network issue." },
];

export default function BrotherPrinterOfflineFix() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Brother Printer Offline — Fix Guide for Windows & Mac", description: "Fix Brother printer offline status.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-26", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Brother Offline</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Brother Printer Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Brother Printer Offline? Fix Guide for Windows &amp; Mac</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Brother printer shows &quot;Offline&quot; even though it&apos;s powered on? Fix WiFi drops, spooler issues, IP conflicts, and driver problems.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Your Brother printer is on, has paper and ink, but your computer says &quot;Offline.&quot; Print jobs queue up but nothing happens. This is typically a communication issue between your computer and the printer — not a hardware failure. Here&apos;s how to fix it on Windows and Mac.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Uncheck &quot;Use Printer Offline&quot; (Windows)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Bluetooth &amp; Devices → Printers &amp; Scanners</strong></li>
            <li>Select your Brother printer</li>
            <li>Click <strong>Open print queue</strong></li>
            <li>Click <strong>Printer</strong> menu → uncheck <strong>&quot;Use Printer Offline&quot;</strong></li>
            <li>Also click <strong>&quot;Cancel All Documents&quot;</strong> to clear stuck jobs</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Print Spooler</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + R</strong> → type <strong>services.msc</strong> → Enter</li>
            <li>Find <strong>Print Spooler</strong></li>
            <li>Right-click → <strong>Stop</strong></li>
            <li>Navigate to <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">C:\Windows\System32\spool\PRINTERS</code> → delete all files</li>
            <li>Back in Services → right-click Print Spooler → <strong>Start</strong></li>
            <li>Try printing again</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Verify WiFi Connection</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>On the Brother printer: <strong>Menu → Network → WLAN → TCP/IP → IP Address</strong></li>
            <li>If IP shows <strong>0.0.0.0</strong> — printer is not connected to WiFi</li>
            <li>Reconnect: <strong>Menu → Network → WLAN → Setup Wizard</strong></li>
            <li>If connected, note the <strong>IP address</strong> (e.g., 192.168.1.XX)</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">On your computer, verify you can reach the printer:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>ping 192.168.1.XX</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If ping fails, the printer and computer aren&apos;t communicating — check they&apos;re on the same WiFi network.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Set Static IP Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">The #1 cause of recurring &quot;offline&quot; is the printer&apos;s IP changing:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On printer: <strong>Menu → Network → WLAN → TCP/IP → Boot Method → Static</strong></li>
            <li>Set <strong>IP Address:</strong> 192.168.1.200 (unused address on your network)</li>
            <li>Set <strong>Subnet Mask:</strong> 255.255.255.0</li>
            <li>Set <strong>Gateway:</strong> your router IP (usually 192.168.1.1)</li>
            <li>On computer: remove old Brother printer → add new printer by IP address</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update Brother Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>brother.com/support</strong> → enter your model</li>
            <li>Download the <strong>Full Driver &amp; Software Package</strong> for your OS</li>
            <li>Uninstall existing Brother software: Settings → Apps → Brother → Uninstall</li>
            <li>Restart computer</li>
            <li>Install the new driver → select <strong>Wireless Connection</strong> during setup</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Fix on Mac</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>System Settings → Printers &amp; Scanners</strong></li>
            <li>If Brother shows a yellow warning, click <strong>Resume</strong></li>
            <li>If still offline: remove the printer (click <strong>−</strong>)</li>
            <li>Re-add: click <strong>+</strong> → select Brother from list → make sure <strong>Brother driver</strong> is selected (not Generic)</li>
            <li>If Brother doesn&apos;t appear, download driver from <strong>brother.com</strong> first</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Disable Sleep Mode</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If your Brother goes offline after sitting idle: <strong>Menu → General Setup → Ecology → Sleep Time</strong> → set to a longer duration. Some models have a <strong>Deep Sleep</strong> setting — disable it if available. Deep sleep can make the printer unresponsive to network print requests.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Power Cycle Everything</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Turn off Brother printer → turn off computer → <strong>unplug router</strong> for 60 seconds → plug router in → wait for full connection → turn on printer → wait 2 minutes → turn on computer. This forces fresh DHCP assignments and network associations.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Brother Still Offline?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose and fix Brother printer issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/brother-printer-wifi-setup-failed", title: "Brother WiFi Setup Failed", desc: "Fix Brother WiFi setup." },
                { href: "/hp-printer-offline-windows-11-fix", title: "HP Offline Windows 11", desc: "Fix HP offline status." },
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
