import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Printer Not Working? Complete Troubleshooting Guide for Any Printer (2026) | TechSupport4",
  description:
    "Printer not working on Windows or Mac? Fix printing problems with our step-by-step guide — covers HP, Canon, Epson, Brother and all major brands.",
  alternates: { canonical: "/printer-not-working" },
  openGraph: {
    title: "Printer Not Working? Complete Troubleshooting Guide",
    description: "Fix any printer — HP, Canon, Epson, Brother — with our 10-step guide.",
    type: "article",
    url: "https://techsupport4.com/printer-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Printer Not Working | TechSupport4",
    description: "Universal printer troubleshooting for all brands and operating systems.",
  },
};

const faqs = [
  {
    q: "Why is my printer not printing even though it has ink?",
    a: "Having ink doesn't guarantee printing. Common causes: (1) Print queue is stuck — clear all pending jobs, (2) Printer is set to 'Use Printer Offline' mode in Windows, (3) Print heads are clogged — run the printer's built-in cleaning cycle, (4) Wrong printer selected as default, (5) Driver is corrupted or outdated. Check each of these before assuming a hardware problem.",
  },
  {
    q: "Why does my printer say offline when it's turned on?",
    a: "Windows shows printers as 'offline' when it can't communicate with them. Causes: (1) USB cable is loose, (2) WiFi connection dropped, (3) 'Use Printer Offline' is accidentally checked in printer settings, (4) Printer IP address changed (common with WiFi printers after router restart), (5) Print spooler service crashed. See our printer offline fix guide for detailed solutions.",
  },
  {
    q: "How do I fix a printer that won't connect to WiFi?",
    a: "Steps: (1) Make sure the printer is within range of your router, (2) Restart both printer and router, (3) Re-run WiFi setup on the printer — most printers have this in the Settings or Network menu, (4) Ensure you're connecting to the 2.4 GHz network (most printers don't support 5 GHz), (5) Remove and re-add the printer in your computer's settings.",
  },
  {
    q: "Why is my printer printing blank pages?",
    a: "Blank pages usually mean: (1) Ink cartridges are empty or installed incorrectly, (2) Print heads are severely clogged — run multiple cleaning cycles, (3) Protective tape wasn't removed from new cartridges, (4) Wrong paper type selected in print settings, (5) Driver is sending blank data — reinstall the printer driver.",
  },
  {
    q: "Should I use USB or WiFi to connect my printer?",
    a: "USB is more reliable and faster — use it if your printer is near your computer. WiFi is convenient for multiple devices and printing from phones/tablets, but introduces connectivity variables. If you're having problems with WiFi printing, try USB temporarily to confirm the printer itself works, then troubleshoot the WiFi connection separately.",
  },
];

export default function PrinterNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Printer Not Working? Complete Troubleshooting Guide",
            description: "Fix any printer — HP, Canon, Epson, Brother — with our step-by-step guide.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-22",
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
              <span className="text-white">Printer Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Printer Not Working? Complete Troubleshooting Guide
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix any printer that won&apos;t print, shows offline, prints blank pages, or won&apos;t connect — covers HP, Canon, Epson, Brother, and all major brands on Windows and Mac.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            A printer not working is one of the most frustrating tech problems — you often need to print something urgently, and the printer refuses to cooperate. Whether your printer won&apos;t print at all, shows as offline, prints blank or garbled pages, or won&apos;t connect to your computer, this guide has the fix.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            We cover all major printer brands (HP, Canon, Epson, Brother, Samsung, Xerox) and both Windows and Mac operating systems. Most printer problems are software-related and can be fixed in minutes without replacing any hardware.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Common Reasons Printers Stop Working</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Print queue jammed</strong> — A stuck print job blocks everything behind it</li>
            <li><strong>Driver issues</strong> — Corrupted, outdated, or wrong driver installed</li>
            <li><strong>Connection lost</strong> — USB cable loose, WiFi disconnected, or printer IP changed</li>
            <li><strong>Printer set to offline</strong> — Windows accidentally marks the printer as offline</li>
            <li><strong>Print spooler crashed</strong> — The Windows service that manages printing has stopped</li>
            <li><strong>Ink or toner problems</strong> — Empty cartridges, clogged heads, or unrecognized cartridges</li>
            <li><strong>Paper jam</strong> — Small pieces of paper stuck inside the printer mechanism</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Your Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Turn the printer completely off using the power button. Unplug it from the wall for 60 seconds. Plug it back in and turn it on. This clears the printer&apos;s internal memory, resets any error states, and forces it to re-establish connections. A surprising number of printer not working issues are resolved with this simple step.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Clear the Print Queue</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            A stuck print job can block your entire queue and make your printer appear not working:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li><strong>Windows:</strong> Settings → Bluetooth & devices → Printers & scanners → your printer → Open print queue</li>
            <li>Right-click each stuck job → <strong>Cancel</strong></li>
            <li>If jobs won&apos;t cancel, restart the Print Spooler service (see Fix 3)</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Mac:</strong> System Preferences → Printers & Scanners → your printer → Open Print Queue → select stuck jobs → delete (X).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Restart the Print Spooler Service (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The Print Spooler is a Windows service that manages all print jobs. If it crashes, nothing prints:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Run Command Prompt as Administrator:</p>
            <p>net stop spooler</p>
            <p>del /Q /F /S &quot;%systemroot%\System32\spool\PRINTERS\*.*&quot;</p>
            <p>net start spooler</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This stops the spooler, clears all stuck print jobs, and restarts the service. Try printing again immediately after.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Printer Connection</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>USB printers:</strong> Check that the USB cable is firmly connected at both ends. Try a different USB port. Try a different cable.</li>
            <li><strong>WiFi printers:</strong> Verify the printer is connected to your WiFi (check printer&apos;s network menu). Make sure it&apos;s on the same network as your computer. Restart your router if needed.</li>
            <li><strong>Network printers:</strong> Print a network configuration page from the printer to verify its IP address. Make sure it matches the one configured on your computer.</li>
            <li>Most WiFi printers only support <strong>2.4 GHz</strong> — if your router only broadcasts 5 GHz, the printer can&apos;t connect</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Set as Default Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Windows sometimes changes your default printer automatically. Go to <strong>Settings → Bluetooth & devices → Printers & scanners</strong>, turn OFF &quot;Let Windows manage my default printer,&quot; then select your printer and click &quot;Set as default.&quot; Print jobs go to the default printer unless you manually select one.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Take Printer Out of Offline Mode</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Windows can accidentally set your printer to offline mode. To fix:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Printers & scanners</strong> → select your printer</li>
            <li>Click <strong>Open print queue</strong></li>
            <li>Click <strong>Printer</strong> menu at the top</li>
            <li>Uncheck <strong>&quot;Use Printer Offline&quot;</strong> if it&apos;s checked</li>
            <li>For detailed steps, see our <Link href="/printer-offline-fix" className="text-blue-600 hover:underline">printer offline fix guide</Link></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Update or Reinstall Printer Driver</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            An outdated or corrupted driver is one of the most common causes of a printer not working:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to your printer manufacturer&apos;s website (<Link href="/hp-printer-not-working" className="text-blue-600 hover:underline">HP</Link>, Canon, <Link href="/epson-printer-not-printing" className="text-blue-600 hover:underline">Epson</Link>, Brother)</li>
            <li>Search for your <strong>exact printer model</strong></li>
            <li>Download the latest driver for your operating system</li>
            <li>Before installing, remove the old printer: Settings → Printers & scanners → Remove device</li>
            <li>Install the new driver and follow the setup wizard</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Run Printer Troubleshooter</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Windows 11/10:</strong> Settings → System → Troubleshoot → Other troubleshooters → Printer → Run. This diagnostic checks for common issues including driver problems, spooler status, and connectivity. <strong>Mac:</strong> Go to System Preferences → Printers & Scanners → right-click your printer → Reset printing system (warning: removes all printers — re-add after).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Check Ink, Toner, and Paper</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check ink/toner levels through the printer&apos;s display or software</li>
            <li>Open the printer and check for <strong>paper jams</strong> — look deep inside, small pieces can hide</li>
            <li>Remove and reseat ink cartridges — make sure they click into place</li>
            <li>Clean <strong>print heads</strong>: most printers have this option in their maintenance menu</li>
            <li>Make sure the paper tray has paper loaded correctly (aligned, not overfilled)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 10: Remove and Re-Add the Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            When all else fails, completely remove the printer from your system and add it fresh. <strong>Windows:</strong> Settings → Printers & scanners → your printer → Remove device. Then click &quot;Add device&quot; to rediscover it, or install from the manufacturer&apos;s software. <strong>Mac:</strong> System Preferences → Printers & Scanners → select printer → minus (-) → then plus (+) to re-add.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Brand-Specific Printer Guides</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Each printer brand has unique issues. See our brand-specific guides:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><Link href="/hp-printer-not-working" className="text-blue-600 hover:underline">HP Printer Not Working</Link> — HP-specific driver, offline, and WiFi fixes</li>
            <li><Link href="/epson-printer-not-printing" className="text-blue-600 hover:underline">Epson Printer Not Printing</Link> — Epson driver downloads and print head issues</li>
            <li><Link href="/printer-offline-fix" className="text-blue-600 hover:underline">Printer Offline Fix</Link> — Detailed guide for &quot;offline&quot; status on any brand</li>
          </ul>

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
            <h3 className="text-2xl font-heading font-bold">Printer Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely diagnose printer driver, spooler, and connectivity issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/hp-printer-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">HP Printer Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">HP-specific fixes and driver solutions.</p>
              </Link>
              <Link href="/epson-printer-not-printing" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Epson Printer Not Printing?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Epson-specific troubleshooting guide.</p>
              </Link>
              <Link href="/printer-offline-fix" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Printer Offline Fix</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Get your printer back online.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix WiFi issues that affect wireless printing.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
