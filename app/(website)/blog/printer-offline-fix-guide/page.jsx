import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "How to Fix Printer Offline Issue — Complete Guide | TechSupport4",
  description:
    "Printer showing offline? Follow our complete step-by-step guide to fix printer offline issues on HP, Canon, Epson, and Brother printers on Windows and Mac.",
  alternates: { canonical: "/blog/printer-offline-fix-guide" },
  openGraph: {
    title: "How to Fix Printer Offline Issue | TechSupport4",
    description: "Complete printer offline fix guide for Windows and Mac.",
    type: "article",
  },
};

export default function PrinterOfflineGuide() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Fix Printer Offline Issue",
            description: "Complete step-by-step guide to fix printer offline issues on Windows and Mac.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-02-18",
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-purple-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Printer Fix</span>
            </nav>
            <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-purple-500/30">Printer Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">How to Fix Printer Offline Issue</h1>
            <p className="mt-4 text-purple-200 text-lg max-w-2xl">Works for HP, Canon, Epson, Brother — Windows & Mac.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-purple-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-purple-400"></span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <article className="article-content max-w-4xl mx-auto px-6 py-14">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <p className="text-amber-800 dark:text-amber-200 text-sm"><strong>Quick fix:</strong> Go to Control Panel → Devices and Printers → right-click your printer → select <strong>See what&apos;s printing</strong> → click Printer menu → uncheck <strong>Use Printer Offline</strong>.</p>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            A printer stuck in &quot;Offline&quot; status is one of the most frustrating issues for home and office users. This guide walks you through every step to get your printer back online, whether you&apos;re using Windows 10, Windows 11, or a Mac.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 1: Restart Printer and Computer</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Turn off your printer completely using the power button. Shut down your computer. Wait 60 seconds. Turn the printer back on first, wait for it to fully initialise, then restart your computer. This clears communication errors between the devices.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 2: Check Printer Connection</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-8">
            <li><strong>USB printers:</strong> Unplug and re-plug the USB cable firmly at both ends</li>
            <li><strong>Wi-Fi printers:</strong> Make sure the printer is connected to the same Wi-Fi network as your computer</li>
            <li><strong>Ethernet printers:</strong> Check the network cable is fully inserted</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 3: Disable &quot;Use Printer Offline&quot; Mode</h2>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Open <strong>Control Panel</strong> → <strong>Devices and Printers</strong></li>
            <li>Right-click your printer and select <strong>See what&apos;s printing</strong></li>
            <li>In the window that opens, click the <strong>Printer</strong> menu at the top</li>
            <li>If <strong>Use Printer Offline</strong> is checked, click it to uncheck it</li>
            <li>Close and try printing again</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 4: Clear the Print Queue</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stuck print jobs can cause the printer to appear offline. Clear the queue:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Open <strong>Devices and Printers</strong></li>
            <li>Right-click your printer → <strong>See what&apos;s printing</strong></li>
            <li>Select all jobs (Ctrl + A) and press Delete</li>
            <li>Restart the printer and try again</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 5: Restart Print Spooler Service</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The Print Spooler is the Windows service that manages printing. Restarting it can fix stubborn offline issues:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Press <strong>Windows + R</strong>, type <code className="bg-slate-100 px-1 rounded">services.msc</code>, press Enter</li>
            <li>Find <strong>Print Spooler</strong> in the list</li>
            <li>Right-click → <strong>Restart</strong></li>
            <li>If it&apos;s stopped, right-click → <strong>Start</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 6: Update or Reinstall Printer Driver</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Outdated or corrupted printer drivers are a very common cause of offline issues. Visit your printer manufacturer&apos;s website (HP Support, Canon Support, Epson, Brother) and download the latest driver for your exact model and Windows version. Uninstall the old driver first via <strong>Apps & features</strong> before installing the new one.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 7: Set as Default Printer</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Sometimes your computer is trying to print to a different (non-existent) printer. Go to <strong>Devices and Printers</strong>, right-click your printer, and select <strong>Set as Default Printer</strong>. Disable &quot;Let Windows manage my default printer&quot; in Settings → Printers & scanners.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Still Offline? Our Experts Can Help</h2>
          <div className="bg-gradient-to-br from-purple-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Get Your Printer Fixed Remotely</h3>
            <p className="mt-2 text-purple-200 max-w-lg mx-auto">Certified printer support across USA, UK and Canada. Most issues resolved in 30 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Start Secure Session
              </Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/how-to-fix-internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">How to Fix Internet Not Working</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete internet troubleshooting guide.</p>
              </Link>
              <Link href="/blog/wifi-router-reset-guide" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">How to Reset Your Wi-Fi Router</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Factory reset your router safely.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
