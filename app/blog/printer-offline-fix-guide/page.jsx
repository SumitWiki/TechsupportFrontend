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

      <main className="bg-slate-50 min-h-screen">
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-200 text-sm mb-2">
              <Link href="/" className="hover:underline">Home</Link> &rsaquo; Blog
            </p>
            <h1 className="text-4xl font-bold">How to Fix Printer Offline Issue</h1>
            <p className="mt-3 text-blue-100 text-lg">Works for HP, Canon, Epson, Brother — Windows & Mac.</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-10 text-yellow-800 text-sm">
            💡 <strong>Quick fix:</strong> Go to Control Panel → Devices and Printers → right-click your printer → select <strong>See what&apos;s printing</strong> → click Printer menu → uncheck <strong>Use Printer Offline</strong>.
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
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold">Get Your Printer Fixed Remotely</h3>
            <p className="mt-2 text-blue-100">Certified printer support across USA, UK and Canada. Most issues resolved in 30 minutes.</p>
            <Link href="/contact" className="inline-block mt-6 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              🔐 Start Secure Session
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/how-to-fix-internet-not-working" className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition">
                <p className="font-semibold text-blue-700">How to Fix Internet Not Working</p>
                <p className="text-slate-500 text-sm mt-1">Complete internet troubleshooting guide.</p>
              </Link>
              <Link href="/blog/wifi-router-reset-guide" className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition">
                <p className="font-semibold text-blue-700">How to Reset Your Wi-Fi Router</p>
                <p className="text-slate-500 text-sm mt-1">Factory reset your router safely.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
