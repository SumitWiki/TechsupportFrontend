import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Epson Printer Not Printing? Complete Fix Guide for All Models (2026) | TechSupport4",
  description:
    "Epson printer not printing? Fix EcoTank, WorkForce, Expression, and all Epson models. Covers blank pages, offline status, driver errors, and print head cleaning.",
  alternates: { canonical: "/epson-printer-not-printing" },
  openGraph: {
    title: "Epson Printer Not Printing? Complete Fix Guide",
    description: "Fix EcoTank, WorkForce, and all Epson printer issues.",
    type: "article",
    url: "https://techsupport4.com/epson-printer-not-printing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Epson Printer Not Printing | TechSupport4",
    description: "Epson-specific troubleshooting for all printer models.",
  },
};

const faqs = [
  {
    q: "Why is my Epson printer not printing even though it has ink?",
    a: "Epson printers are notorious for clogged print heads — the tiny nozzles dry out when not used regularly. Run the 'Head Cleaning' utility from Epson Printer Utility (accessed via printer settings on your computer). You may need to run it 2-3 times. Also print a 'Nozzle Check' pattern to see which colors are clogged.",
  },
  {
    q: "How do I fix Epson printer offline?",
    a: "Steps: (1) Check USB or WiFi connection, (2) Restart both printer and computer, (3) In Windows: Settings → Printers → Open print queue → Printer menu → uncheck 'Use Printer Offline', (4) Restart Print Spooler service, (5) If WiFi, print a network status sheet from the printer and verify the IP matches your computer's printer settings.",
  },
  {
    q: "How do I clean Epson print heads?",
    a: "Through your computer: Open any document to print → select your Epson printer → click Preferences/Properties → go to Maintenance tab → click 'Head Cleaning'. On the printer itself: Settings → Maintenance → Head Cleaning. Always run a 'Nozzle Check' after cleaning to verify. If 3 cleanings don't fix it, leave the printer on overnight and try again — sometimes ink needs time to dissolve dried clogs.",
  },
  {
    q: "Where do I download Epson printer drivers?",
    a: "Visit epson.com/Support → enter your exact printer model → select your operating system → download the driver. For EcoTank models, download the 'Complete Driver' package. Avoid third-party driver sites. You can also use Epson Connect setup wizard for wireless printing setup.",
  },
  {
    q: "Why does my Epson printer print blurry or streaky?",
    a: "Blurry/streaky prints are caused by: (1) Clogged print heads — run Head Cleaning, (2) Misaligned print heads — run 'Print Head Alignment' from Maintenance menu, (3) Wrong paper type selected in print settings, (4) Low-quality paper, (5) Ink running low (even if not showing empty). Run a Nozzle Check to see exactly which nozzles are affected.",
  },
];

export default function EpsonPrinterNotPrinting() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Epson Printer Not Printing? Complete Fix Guide",
            description: "Fix EcoTank, WorkForce, and all Epson printer issues.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-24",
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
              <span className="text-white">Epson</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Brand-Specific Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Epson Printer Not Printing? Complete Fix Guide
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix Epson EcoTank, WorkForce, Expression, and all Epson models — covers print head clogs, blank pages, offline errors, and driver installation.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Epson printers are known for excellent photo quality and the cost-saving EcoTank line, but they have unique issues — particularly around <strong>print head clogging</strong>. If your Epson printer is not printing, the cause is almost always either a clogged print head, a driver issue, or a connectivity problem.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Unlike HP printers where the print head is built into the cartridge (replace cartridge = new head), Epson printers have a <strong>permanent print head</strong> inside the printer. This means clogs must be cleaned, not replaced. Let&apos;s walk through every fix.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Why Epson Printers Stop Printing</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Clogged print heads</strong> — The #1 Epson issue. Ink dries in the nozzles when the printer sits idle</li>
            <li><strong>Driver problems</strong> — Corrupted or outdated Epson drivers</li>
            <li><strong>Printer offline</strong> — Communication lost between computer and printer</li>
            <li><strong>Ink system issue</strong> — EcoTank air bubbles, empty cartridges, or unrecognized ink</li>
            <li><strong>Paper feed problems</strong> — Paper not feeding, misfeeding, or jamming</li>
            <li><strong>Print queue stuck</strong> — Previous print jobs blocking new ones</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Run Nozzle Check and Head Cleaning</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            This is the most important fix for Epson printers not printing or printing with missing colors:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>On your computer: Open <strong>Devices and Printers</strong> (or Printers & scanners)</li>
            <li>Right-click your Epson printer → <strong>Printing Preferences</strong></li>
            <li>Go to the <strong>Maintenance</strong> tab</li>
            <li>Click <strong>Nozzle Check</strong> — print the test pattern to see which nozzles are clogged</li>
            <li>If any colors are missing/broken, click <strong>Head Cleaning</strong></li>
            <li>After cleaning, print another Nozzle Check to verify improvement</li>
            <li>Repeat up to <strong>3 times</strong> — but wait 30 minutes between cleanings to let ink dissolve the clog</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>On the printer:</strong> Use the printer&apos;s control panel → Settings → Maintenance → Nozzle Check / Head Cleaning. The process is the same.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Power Cycle the Epson Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Turn off the printer using the power button (let it park the print heads properly). Then unplug from power. Wait 60 seconds. Plug back in and power on. For EcoTank models, make sure the ink tanks are properly sealed and not ajar — some models won&apos;t print if a tank lid is open.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check and Replace Ink</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Cartridge models:</strong> Check ink levels from the Epson Status Monitor on your computer. Replace any empty cartridges. Remove and reseat cartridges — make sure they click in.</li>
            <li><strong>EcoTank models:</strong> Visually check ink levels in the tanks. Refill any low tanks with the correct color. If you just refilled, there might be air bubbles — run Head Cleaning to push ink through.</li>
            <li><strong>&quot;Ink cartridge not recognized&quot;:</strong> Remove the cartridge, clean the chip contacts with a dry cloth, reinsert. If third-party cartridge, it may not be compatible — try an Epson original.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Update or Reinstall Epson Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Remove the current printer: <strong>Settings → Printers & scanners → Remove device</strong></li>
            <li>Visit <strong>epson.com/Support</strong></li>
            <li>Search for your <strong>exact model</strong> (check the label on the printer)</li>
            <li>Download the <strong>complete driver package</strong> for your OS</li>
            <li>Install and follow the wizard — select USB or WiFi connection during setup</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Fix Epson Printer Offline</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If your Epson shows as offline:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check USB cable or WiFi connection</li>
            <li><strong>Windows:</strong> Open print queue → Printer menu → uncheck &quot;Use Printer Offline&quot;</li>
            <li>Restart Print Spooler service</li>
            <li>For WiFi printers: print a <strong>Network Status Sheet</strong> from the printer&apos;s menu (Settings → Network Status)</li>
            <li>Check that the IP address on the sheet matches what your computer uses for the printer</li>
            <li>If IPs don&apos;t match, remove the printer and re-add it using the correct IP</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Connect Epson Printer to WiFi</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Touchscreen:</strong> Settings → Wi-Fi Setup → Wi-Fi Setup Wizard → select network → enter password</li>
            <li><strong>WPS:</strong> Hold the Wi-Fi button on the printer for 3 seconds until the light flashes → press WPS on router within 2 minutes</li>
            <li><strong>Epson Connect:</strong> Download Epson Connect from epson.com to set up remote printing from anywhere</li>
            <li>Epson printers only connect to <strong>2.4 GHz</strong> networks — ensure your router has this band enabled</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Clear Paper Jams</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Open all access panels (front, back, and underneath on some models). Gently pull out any stuck paper — <strong>always pull in the direction the paper normally travels</strong>, not backward. Check for small torn pieces. Make sure the paper tray isn&apos;t overfilled and the paper guides are snug against the paper edges.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset Your Epson Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            As a last resort: <strong>Settings → Restore Default Settings → All Settings</strong>. This resets network, print preferences, and all config to factory defaults. You&apos;ll need to set up WiFi and preferences again. After reset, install the latest driver from epson.com and reconfigure.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Epson Model-Specific Tips</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">EcoTank (ET Series)</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Print at least once weekly to prevent clogs. Use Epson-branded ink for best results. Air bubbles after refill are normal — run 1-2 cleaning cycles to resolve.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">WorkForce (WF Series)</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Business models with ADF scanners. If ADF jams frequently, clean the feed rollers with a slightly damp cloth. WiFi connectivity is more reliable via 2.4 GHz only.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-white">Expression (XP Series)</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Photo-focused — use Epson photo paper settings for best quality. Print head alignment is crucial for photo printing. Run alignment from Maintenance tab.</p>
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
            <h3 className="text-2xl font-heading font-bold">Epson Printer Still Not Printing?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely diagnose Epson driver and configuration issues.</p>
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
              <Link href="/hp-printer-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">HP Printer Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">HP-specific troubleshooting guide.</p>
              </Link>
              <Link href="/printer-offline-fix" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Printer Offline Fix</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix offline status on any printer.</p>
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
