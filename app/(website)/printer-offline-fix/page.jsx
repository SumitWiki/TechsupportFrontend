import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Printer Showing Offline? How to Fix on Windows 11, 10 & Mac (2026) | TechSupport4",
  description:
    "Printer showing offline even though it's on? Fix printer offline status on Windows 11, Windows 10, and Mac with our step-by-step guide — works for HP, Canon, Epson, Brother.",
  alternates: { canonical: "/printer-offline-fix" },
  openGraph: {
    title: "Printer Showing Offline? How to Fix on Windows & Mac",
    description: "Fix printer offline status on any operating system and printer brand.",
    type: "article",
    url: "https://techsupport4.com/printer-offline-fix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Printer Offline | TechSupport4",
    description: "Get your offline printer back online — Windows & Mac guide.",
  },
};

const faqs = [
  {
    q: "Why does my printer keep going offline?",
    a: "Printers repeatedly going offline usually indicate: (1) Unstable WiFi connection — printer loses connection to router periodically, (2) IP address conflicts — printer's IP changes when router restarts, (3) Power saving settings — printer goes to sleep and doesn't wake properly, (4) Print spooler crashing — Windows service fails intermittently. Setting a static IP for your printer often solves recurring offline issues.",
  },
  {
    q: "How do I fix printer offline on Windows 11?",
    a: "Settings → Bluetooth & devices → Printers & scanners → select your printer → Open print queue → Printer menu → uncheck 'Use Printer Offline'. Also restart the Print Spooler service: Win + R → services.msc → find Print Spooler → right-click → Restart. If it keeps happening, remove and re-add the printer.",
  },
  {
    q: "How do I fix printer offline on Mac?",
    a: "System Preferences → Printers & Scanners → select your printer. If it shows a yellow warning icon, try: (1) Click 'Resume' if paused, (2) Remove the printer (minus button) and re-add it (plus button), (3) Reset the printing system: right-click in the printer list area → Reset printing system (this removes ALL printers — re-add after).",
  },
  {
    q: "How do I set a static IP for my printer?",
    a: "Access your printer's network settings (through the printer's control panel or web interface). Set IP to Manual/Static instead of DHCP. Assign an IP outside your router's DHCP range (e.g., if DHCP is 192.168.1.100-200, use 192.168.1.50). This prevents the printer's IP from changing when the router restarts, which is the #1 cause of recurring offline status.",
  },
  {
    q: "My printer is connected via USB but shows offline — why?",
    a: "USB offline issues are usually: (1) Loose cable — unplug and replug firmly at both ends, (2) Faulty USB port — try a different port on your computer, (3) USB cable too long (over 6 feet can cause issues), (4) USB hub interference — connect directly to the computer, not through a hub, (5) Driver needs reinstalling. Try a different cable first — this fixes most USB offline problems.",
  },
];

export default function PrinterOfflineFix() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Printer Showing Offline? How to Fix on Windows & Mac",
            description: "Complete guide to fix printer offline status on any OS and printer brand.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-25",
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
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Printer Offline Fix</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Printer Showing Offline? How to Fix on Windows &amp; Mac
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Your printer is on and ready but your computer says it&apos;s offline? This is one of the most common printer problems — here&apos;s exactly how to fix it on any OS and any printer brand.
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
            Printer offline is a maddening problem — your printer is physically turned on, has paper and ink, but your computer insists it&apos;s &quot;offline&quot; and refuses to send print jobs. This happens because the <strong>communication channel</strong> between your computer and printer is broken, even though the printer hardware is fine.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The good news? This is almost always a software fix, not a hardware problem. Follow the steps below in order — most users resolve their printer offline issue within the first three fixes.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Why Does a Printer Show as Offline?</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows &quot;Use Printer Offline&quot; setting</strong> — This option is accidentally checked, telling Windows to queue jobs instead of sending them</li>
            <li><strong>WiFi connection dropped</strong> — The printer lost its wireless connection to your router</li>
            <li><strong>IP address changed</strong> — Your router assigned a new IP to the printer after restarting</li>
            <li><strong>USB cable issue</strong> — Loose, damaged, or disconnected USB cable</li>
            <li><strong>Print Spooler crashed</strong> — The Windows service managing print jobs stopped working</li>
            <li><strong>Driver issue</strong> — Corrupted or outdated printer driver</li>
            <li><strong>Printer in sleep mode</strong> — Some printers deep-sleep and fail to respond to wake signals</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Uncheck &quot;Use Printer Offline&quot; (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            This is fix #1 because it&apos;s the most common cause — an accidentally checked setting:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Bluetooth & devices → Printers & scanners</strong></li>
            <li>Click your offline printer</li>
            <li>Click <strong>Open print queue</strong></li>
            <li>In the print queue window, click the <strong>Printer</strong> menu at the top</li>
            <li>If <strong>&quot;Use Printer Offline&quot;</strong> has a checkmark, click it to uncheck it</li>
            <li>Also check that <strong>&quot;Pause Printing&quot;</strong> is unchecked</li>
            <li>The printer should immediately switch from &quot;Offline&quot; to &quot;Ready&quot;</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart the Print Spooler Service</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The Print Spooler is the Windows service that sends print jobs to the printer. If it crashes, your printer shows offline:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Method 1 — Command Prompt (Admin):</p>
            <p>net stop spooler</p>
            <p>net start spooler</p>
            <p className="mt-3 text-slate-400"># Method 2 — If jobs are stuck:</p>
            <p>net stop spooler</p>
            <p>del /Q /F /S &quot;%systemroot%\System32\spool\PRINTERS\*.*&quot;</p>
            <p>net start spooler</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>GUI method:</strong> Press Win + R → type <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">services.msc</code> → find <strong>Print Spooler</strong> → right-click → <strong>Restart</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Physical Connections</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>USB printers:</strong> Unplug and firmly replug the USB cable on both ends. Try a different USB port on your computer. Try a different cable.</li>
            <li><strong>WiFi printers:</strong> Check if the printer&apos;s WiFi light/icon is on. Print a network status page from the printer&apos;s menu to verify it&apos;s connected to your WiFi.</li>
            <li><strong>Network printers:</strong> Verify the Ethernet cable is connected. Try pinging the printer&apos;s IP address from Command Prompt: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">ping 192.168.1.xxx</code></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Power Cycle Everything</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Turn off the printer</li>
            <li>Unplug the printer&apos;s power cable from the wall</li>
            <li>Also restart your computer</li>
            <li>If WiFi printer, also restart your router</li>
            <li>Wait 60 seconds for everything to fully power down</li>
            <li>Power on in order: router → printer → computer</li>
            <li>Wait 2-3 minutes for all devices to reconnect</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Set a Static IP (Prevents Recurring Offline)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If your printer keeps going offline every few days, a changing IP address is likely the cause. Fix it permanently:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Print a <strong>Network Configuration Page</strong> from your printer (usually in Settings → Network → Print Network Page)</li>
            <li>Note the current IP address (e.g., 192.168.1.105)</li>
            <li>On the printer&apos;s control panel, go to <strong>Network Settings → TCP/IP → Set IP Address → Manual</strong></li>
            <li>Enter a static IP <strong>outside your router&apos;s DHCP range</strong> (e.g., 192.168.1.50)</li>
            <li>Set Subnet Mask to <strong>255.255.255.0</strong> and Gateway to your router&apos;s IP (usually 192.168.1.1)</li>
            <li>On your computer, remove the old printer and add it using the new static IP address</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Remove and Re-Add the Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If the printer profile is corrupted, removing and re-adding creates a fresh connection: <strong>Windows:</strong> Settings → Printers & scanners → select printer → Remove device → then &quot;Add device&quot; to rediscover. <strong>Mac: </strong> System Preferences → Printers & Scanners → select printer → minus (-) → then plus (+) to re-add. Use the manufacturer&apos;s setup software for the best results.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Reinstall Printer Driver</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Download the latest driver from your printer manufacturer&apos;s website. For <Link href="/hp-printer-not-working" className="text-blue-600 hover:underline">HP printers</Link>, visit support.hp.com. For <Link href="/epson-printer-not-printing" className="text-blue-600 hover:underline">Epson printers</Link>, visit epson.com/support. For Canon, visit usa.canon.com/support. Always download the &quot;full solution&quot; driver package, not the basic driver, for best compatibility.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Fix Printer Offline on Mac</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>System Preferences → Printers & Scanners</strong></li>
            <li>Select your printer — if it shows yellow &quot;idle&quot; or &quot;offline,&quot; click it</li>
            <li>Click <strong>Open Print Queue</strong> → click <strong>Resume</strong> if printing is paused</li>
            <li>If still offline, remove the printer (minus button) and re-add it (plus button)</li>
            <li><strong>Nuclear option:</strong> Right-click in the printer list area → <strong>Reset printing system</strong> → this removes ALL printers — re-add them all after</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Disable SNMP Status (Advanced)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            SNMP (Simple Network Management Protocol) is how Windows monitors printer status. Sometimes it incorrectly reports offline: Go to <strong>Settings → Printers → your printer → Manage → Printer Properties → Ports tab</strong> → click <strong>Configure Port</strong> → uncheck <strong>&quot;SNMP Status Enabled&quot;</strong> → OK. This tells Windows to stop checking printer status via SNMP and just send print jobs regardless.
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
            <h3 className="text-2xl font-heading font-bold">Printer Still Showing Offline?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely fix printer driver, spooler, and connectivity issues on any brand.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/printer-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Printer Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">General troubleshooting for all printer issues.</p>
              </Link>
              <Link href="/hp-printer-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">HP Printer Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">HP-specific printer fixes.</p>
              </Link>
              <Link href="/epson-printer-not-printing" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Epson Printer Not Printing?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Epson-specific troubleshooting guide.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix WiFi issues that cause printer disconnections.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
