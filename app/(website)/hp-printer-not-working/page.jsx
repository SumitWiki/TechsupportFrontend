import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "HP Printer Not Working? Step-by-Step Fix Guide for All Models (2026) | TechSupport4",
  description:
    "HP printer not working? Fix HP DeskJet, OfficeJet, LaserJet, and ENVY printers with our complete guide. Covers offline, not printing, driver errors & WiFi setup.",
  alternates: { canonical: "/hp-printer-not-working" },
  openGraph: {
    title: "HP Printer Not Working? Step-by-Step Fix Guide",
    description: "Fix HP DeskJet, OfficeJet, LaserJet & ENVY printers.",
    type: "article",
    url: "https://techsupport4.com/hp-printer-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix HP Printer Not Working | TechSupport4",
    description: "HP-specific printer troubleshooting for all models.",
  },
};

const faqs = [
  {
    q: "Why does my HP printer say offline?",
    a: "HP printers commonly show offline due to: (1) WiFi connection dropped — printer lost connection to your router, (2) 'Use Printer Offline' accidentally checked in Windows, (3) HP Smart app not detecting the printer, (4) Printer's IP address changed after router restart, (5) Print spooler service crashed. Run HP Print and Scan Doctor — it fixes most offline issues automatically.",
  },
  {
    q: "How do I connect my HP printer to WiFi?",
    a: "On the printer's touchscreen: Settings → Wireless → Wireless Setup Wizard → select your network → enter password. If no touchscreen, use WPS: press the WPS button on your router, then press the Wireless button on the printer within 2 minutes. Alternatively, use the HP Smart app on your phone to guide the setup process.",
  },
  {
    q: "Where do I download HP printer drivers?",
    a: "Visit support.hp.com → enter your exact printer model → select your operating system → download the 'Full Solution' driver (not just the basic driver). Alternatively, install the HP Smart app which automatically downloads correct drivers. Avoid third-party driver sites — they often bundle malware.",
  },
  {
    q: "Why is my HP printer printing blank pages?",
    a: "Blank pages from HP printers: (1) Ink cartridges may be empty — check levels in HP Smart app, (2) New cartridges still have protective tape — remove orange tape/clip, (3) Print heads clogged — run 'Clean Printhead' from printer menu or HP Smart, (4) Cartridges seated incorrectly — open bay, remove and reinsert firmly, (5) Wrong paper type selected in print dialog.",
  },
  {
    q: "HP printer not working after Windows update — how to fix?",
    a: "Windows updates frequently break HP printer drivers. Fix: (1) Uninstall the printer from Settings → Printers, (2) Download the latest driver from support.hp.com, (3) Install the driver and re-add the printer. If the issue persists, run HP Print and Scan Doctor which can patch driver compatibility issues.",
  },
];

export default function HpPrinterNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "HP Printer Not Working? Step-by-Step Fix Guide",
            description: "Fix HP DeskJet, OfficeJet, LaserJet and ENVY printer issues.",
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
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">HP</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Brand-Specific Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              HP Printer Not Working? Step-by-Step Fix Guide
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Troubleshoot and fix HP DeskJet, OfficeJet, LaserJet, and ENVY printers — covers offline status, not printing, driver errors, blank pages, and WiFi connectivity.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            HP is the world&apos;s most popular printer brand, and with that popularity comes a lot of troubleshooting questions. If your HP printer is not working, you&apos;re not alone — HP printers have specific quirks related to their drivers, HP Smart app, and WiFi connectivity that require targeted fixes.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This guide covers all current HP printer lines: DeskJet (home/basic), OfficeJet (all-in-one), LaserJet (laser/business), and ENVY (photo/premium). Each fix is written specifically for HP&apos;s software, tools, and common failure points.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">HP Printer Diagnostic Tool — HP Print and Scan Doctor</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Before trying manual fixes, run HP&apos;s own diagnostic tool — it automatically detects and fixes most issues:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Download <strong>HP Print and Scan Doctor</strong> from support.hp.com (it&apos;s free)</li>
            <li>Run the tool — it scans for printer problems automatically</li>
            <li>It checks: driver status, connectivity, print queue, spooler service, and port configuration</li>
            <li>The tool will offer to fix any issues it finds — click &quot;Fix&quot; for each</li>
            <li>This single tool resolves about 60% of HP printer not working issues</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle Your HP Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            HP printers store temporary data that can cause issues. Turn the printer on, then disconnect the power cable from the <strong>back of the printer</strong> (not just the wall). Wait 60 seconds. Reconnect and power on. This clears the printer&apos;s internal memory and resets error states. HP specifically recommends this as the first troubleshooting step for all their models.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Fix HP Printer Offline Status</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            &quot;Offline&quot; is the #1 HP printer complaint. Here&apos;s the complete fix:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Bluetooth & devices → Printers & scanners</strong></li>
            <li>Click your HP printer → <strong>Open print queue</strong></li>
            <li>Click <strong>Printer</strong> menu → uncheck <strong>&quot;Use Printer Offline&quot;</strong></li>
            <li>If that doesn&apos;t work, also uncheck <strong>&quot;Pause Printing&quot;</strong></li>
            <li>If still offline, restart the Print Spooler: run <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">services.msc</code> → find <strong>Print Spooler</strong> → right-click → Restart</li>
            <li>For persistent offline issues, see our <Link href="/printer-offline-fix" className="text-blue-600 hover:underline">detailed printer offline fix guide</Link></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Reinstall HP Printer Driver</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            HP driver issues are especially common after Windows updates:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>First, remove the current printer: <strong>Settings → Printers → Remove device</strong></li>
            <li>Visit <strong>support.hp.com</strong></li>
            <li>Enter your <strong>exact model number</strong> (printed on front of printer, e.g., &quot;HP DeskJet 4155e&quot;)</li>
            <li>Download the <strong>&quot;HP Smart&quot;</strong> app (recommended) or <strong>&quot;Full Solution&quot;</strong> driver</li>
            <li>Install and follow the setup wizard — it will detect and configure your printer</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Connect HP Printer to WiFi</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If your HP printer lost its WiFi connection:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Touchscreen models:</strong> Printer menu → Settings → Wireless → Wireless Setup Wizard → select your network → enter password</li>
            <li><strong>Non-touchscreen:</strong> Press and hold the <strong>Wireless</strong> button + <strong>WPS</strong> button on router within 2 minutes</li>
            <li><strong>HP Smart app:</strong> Open app → Add Printer → follow on-screen instructions (easiest method)</li>
            <li><strong>Important:</strong> HP printers only connect to <strong>2.4 GHz</strong> WiFi — make sure your router broadcasts this band</li>
            <li>If your router was recently restarted, the printer may need to reconnect — the IP address may have changed</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Reset HP Printer Network Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If WiFi setup keeps failing, reset the printer&apos;s network settings completely: On the printer, go to <strong>Settings → Network → Restore Network Settings</strong>. The printer will restart and forget all WiFi connections. Then set up WiFi from scratch using the Wireless Setup Wizard or HP Smart app.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Fix HP Ink Cartridge Issues</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>&quot;Cartridge Problem&quot; error:</strong> Remove cartridges, clean the gold contacts with a lint-free cloth, reinsert firmly</li>
            <li><strong>&quot;Incompatible Cartridge&quot;:</strong> Make sure you&apos;re using the correct cartridge number for your specific model — check inside the cartridge bay for a label</li>
            <li><strong>Non-HP cartridge warnings:</strong> HP printers may warn about third-party cartridges but should still print — click &quot;OK&quot; to proceed</li>
            <li><strong>New cartridge not working:</strong> Remove the orange protective tape AND the small plastic clip covering the contacts</li>
            <li><strong>Print head cleaning:</strong> HP Smart app → Printer Maintenance → Clean Printhead (run 2-3 times for stubborn clogs)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Clear Print Queue and Spooler</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-8 overflow-x-auto">
            <p className="text-slate-400"># Run as Administrator:</p>
            <p>net stop spooler</p>
            <p>del /Q /F /S &quot;%systemroot%\System32\spool\PRINTERS\*.*&quot;</p>
            <p>net start spooler</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">HP Model-Specific Tips</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">HP DeskJet Series</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Budget inkjet — most issues are ink-related. Keep HP Smart installed for automatic troubleshooting. Use HP Instant Ink to avoid cartridge problems.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">HP OfficeJet Series</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">All-in-one with scanning/faxing. If scan-to-PC doesn&apos;t work, reinstall HP Smart. Fax issues usually require re-entering phone line settings after a power cycle.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">HP LaserJet Series</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Laser printers — rarely have print quality issues. Most problems are driver or network-related. Check toner level in printer menu. Reset to factory if persistent issues occur.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">HP ENVY Series</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Photo printers — print quality issues often mean print heads need cleaning (3+ cycles for photo quality). Use HP photo paper for best results. Keep firmware updated for best color accuracy.</p>
            </div>
          </div>

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
            <h3 className="text-2xl font-heading font-bold">HP Printer Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians specialize in HP printer configuration and can fix driver and connectivity issues remotely.</p>
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
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">General printer troubleshooting for all brands.</p>
              </Link>
              <Link href="/printer-offline-fix" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Printer Offline Fix</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Detailed offline status fix for Windows & Mac.</p>
              </Link>
              <Link href="/epson-printer-not-printing" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Epson Printer Not Printing?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Epson-specific troubleshooting guide.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix WiFi issues affecting wireless printing.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
