import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Canon Printer Not Printing Black Ink? Fix Guide (2026)",
  description: "Canon printer not printing black ink? Fix PGBK cartridge issues, clogged printheads, empty ink tanks, and alignment problems with this step-by-step guide.",
  alternates: { canonical: "/canon-printer-not-printing-black-ink" },
  openGraph: { title: "Canon Printer Not Printing Black Ink? Fix Guide", description: "Fix Canon black ink not printing.", type: "article", url: "https://techsupport4.com/canon-printer-not-printing-black-ink" },
  twitter: { card: "summary_large_image", title: "Fix Canon Black Ink | TechSupport4", description: "Canon not printing black — troubleshooting guide." },
};

const faqs = [
  { q: "Why is my Canon printer not printing black even though the ink is full?", a: "Common causes: (1) Clogged printhead nozzles — run deep cleaning from Canon IJ Printer Utility, (2) Wrong cartridge type — Canon uses PGBK (pigment black for text) and BK (dye black for photos), make sure the correct one is installed, (3) Protective tape not fully removed from cartridge, (4) Cartridge not properly seated — reinsert until it clicks, (5) Printhead contacts need cleaning." },
  { q: "How do I unclog a Canon printhead for black ink?", a: "Go to printer Settings → Maintenance → Deep Cleaning → select Black ink group → confirm. Run this 2-3 times max, then wait 12 hours before trying again. If still clogged, remove the printhead and soak it in warm distilled water for 10-15 minutes. Dry thoroughly before reinstalling." },
  { q: "What is the difference between PGBK and BK in Canon printers?", a: "PGBK (Pigment Black) is for text and documents — it prints on standard paper. BK (Dye Black) is for photo printing — it works with glossy photo paper. If PGBK is empty or clogged, text documents will print without black while photos may still work, and vice versa." },
  { q: "Can I print without black ink on Canon?", a: "Partially yes: On some Canon models, go to printer Properties → Maintenance → Ink Cartridge Settings → select 'Color Only' printing. This uses composite black (mixing CMY) for text, which is lower quality but works in a pinch. Not all models support this feature." },
  { q: "How often should I clean Canon printheads?", a: "Run standard cleaning only when you notice print quality issues — typically every 2-4 weeks if printing regularly. Deep cleaning uses significant ink, so use it sparingly. The best prevention is printing at least one page per week to keep nozzles from drying out." },
];

export default function CanonNotPrintingBlackInk() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Canon Printer Not Printing Black Ink — Fix Guide", description: "Fix Canon black ink not printing.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-25", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Canon Black Ink</span>
            </nav>
            <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-purple-500/30">Ink &amp; Cartridge</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Canon Printer Not Printing Black Ink? Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Canon printer producing blank text, faded black, or missing black entirely? Fix PGBK cartridge issues, clogged printheads, and alignment errors.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Your Canon printer outputs color fine but black text is missing, faded, or has horizontal streaks. This is one of the most common Canon printer problems and is almost always caused by clogged PGBK nozzles or cartridge issues — not a broken printer.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Understanding Canon Black Ink Types</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Canon printers use <strong>two types of black ink</strong>, which causes confusion:</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <thead><tr className="bg-slate-100 dark:bg-slate-700"><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">Type</th><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">Name</th><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">Usage</th></tr></thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700"><td className="p-3 text-slate-600 dark:text-slate-300">PGBK</td><td className="p-3 text-slate-600 dark:text-slate-300">Pigment Black</td><td className="p-3 text-slate-600 dark:text-slate-300">Text/documents on plain paper</td></tr>
                <tr className="border-t border-slate-200 dark:border-slate-700"><td className="p-3 text-slate-600 dark:text-slate-300">BK</td><td className="p-3 text-slate-600 dark:text-slate-300">Dye Black</td><td className="p-3 text-slate-600 dark:text-slate-300">Photos on glossy paper</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If your <strong>text documents</strong> have no black, the <strong>PGBK</strong> cartridge is the culprit. If <strong>photos</strong> lack black, it&apos;s the <strong>BK</strong> dye cartridge.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Run Printhead Cleaning</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Open <strong>Canon IJ Printer Utility</strong> (or printer&apos;s touchscreen)</li>
            <li>Go to <strong>Maintenance → Cleaning</strong></li>
            <li>Select <strong>Black</strong> ink group</li>
            <li>Click OK and wait 2-3 minutes</li>
            <li>Print a <strong>Nozzle Check Pattern</strong> to verify</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If the nozzle check still shows gaps, run <strong>Deep Cleaning</strong> (same menu). Deep cleaning uses more ink but is more thorough. Wait <strong>12 hours</strong> after 2 deep cleanings before trying again — this lets ink soak into dried nozzles.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Reseat or Replace PGBK Cartridge</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open the cartridge cover (printer must be ON)</li>
            <li>Press down on the <strong>PGBK cartridge</strong> tab and remove it</li>
            <li>Check for <strong>protective tape</strong> on the bottom — remove if present</li>
            <li>Look at the <strong>ink level</strong> — if empty, replace with a new cartridge</li>
            <li>Reinsert firmly until you hear a <strong>click</strong></li>
            <li>Close the cover and print a test page</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Clean Printhead Manually</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If software cleaning doesn&apos;t work, do a manual clean:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Turn off the printer and open the cartridge door</li>
            <li>Remove all cartridges</li>
            <li>Lift the printhead lock lever and <strong>remove the printhead</strong></li>
            <li>Soak the <strong>bottom of the printhead</strong> in warm distilled water (not hot) for 10-15 minutes</li>
            <li>Gently dab with a lint-free cloth — you should see black ink on the cloth</li>
            <li>Let the printhead dry completely (1-2 hours)</li>
            <li>Reinstall printhead → reinstall cartridges → close door</li>
            <li>Run alignment from printer menu</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Print Settings</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Print dialog → Preferences → Media Type</strong></li>
            <li>Make sure it&apos;s set to <strong>Plain Paper</strong> for documents (not Glossy/Photo)</li>
            <li>Wrong media type can cause the printer to use the wrong black ink tank</li>
            <li>Also check <strong>Color/Grayscale</strong> settings — &quot;Grayscale&quot; should use PGBK for text</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Print in &quot;Color Only&quot; Mode (Temporary)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If you need to print urgently: Printer Properties → <strong>Maintenance → Ink Cartridge Settings → Color Only</strong>. This uses composite black (mixing cyan, magenta, yellow) which gives a brownish-black but works for emergencies. Switch back to normal after fixing the black cartridge.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update or Reinstall Printer Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>canon.com/support</strong> → enter your printer model</li>
            <li>Download the latest <strong>full driver package</strong></li>
            <li>Uninstall current driver: Settings → Apps → Canon printer → Uninstall</li>
            <li>Restart your computer</li>
            <li>Install the new driver</li>
            <li>Print a test page to verify</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Reset the Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Turn off the printer → <strong>unplug the power cord</strong> → wait <strong>2 full minutes</strong> → plug back in → turn on. This clears the printer&apos;s internal memory and forces fresh cartridge detection. After reset, run <strong>printhead alignment</strong> again.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention Tips</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Print at least <strong>one page per week</strong> to prevent nozzle drying</li>
            <li>Use <strong>genuine Canon cartridges</strong> — third-party ink can clog printheads faster</li>
            <li>Store spare cartridges <strong>sealed in original packaging</strong></li>
            <li>Keep printer in a <strong>cool, dry environment</strong> — heat dries ink faster</li>
            <li>Run a nozzle check monthly to catch problems early</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Canon Still Not Printing Black?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose printhead and cartridge issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/canon-printer-offline-fix", title: "Canon Printer Offline Fix", desc: "Fix Canon offline status." },
                { href: "/canon-printer-setup-failed", title: "Canon Printer Setup Failed", desc: "Fix Canon setup issues." },
                { href: "/epson-printer-not-printing", title: "Epson Not Printing?", desc: "Fix Epson print problems." },
                { href: "/printer-not-working", title: "Any Printer Not Working?", desc: "Universal printer fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
