import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "How to Fix Internet Not Working — Step-by-Step Guide | TechSupport4",
  description:
    "Internet not working? Follow our complete step-by-step troubleshooting guide to fix no internet connection, slow internet, and Wi-Fi issues fast.",
  alternates: { canonical: "/blog/how-to-fix-internet-not-working" },
  openGraph: {
    title: "How to Fix Internet Not Working | TechSupport4",
    description: "Step-by-step internet troubleshooting guide for USA, UK and Canada.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Fix Internet Not Working",
            description: "Complete step-by-step troubleshooting guide to fix internet not working issues.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
            datePublished: "2026-01-01",
            dateModified: "2026-02-18",
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Internet Fix</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">How to Fix Internet Not Working</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              A complete troubleshooting guide for USA, UK & Canada customers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400"></span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="article-content max-w-4xl mx-auto px-6 py-14">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <p className="text-amber-800 dark:text-amber-200 text-sm"><strong>Quick fix:</strong> Before trying anything else, restart your router and modem — this resolves over 60% of internet issues.</p>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Internet connection problems are one of the most common tech issues reported across the USA, UK, and Canada. Whether you see "No Internet Access", your Wi-Fi shows connected but pages won't load, or your connection is extremely slow — this guide covers every scenario.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 1: Restart Your Router and Modem</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            This is the single most effective fix. Turn off your router and modem completely (unplug from the wall). Wait a full 60 seconds — not just a few seconds. Then plug the modem back in first, wait 30 seconds, and then plug in the router. Wait 2–3 minutes for the connection to fully re-establish.
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-8">
            <li>Unplug both router and modem from the power outlet</li>
            <li>Wait 60 seconds (this clears cached network data)</li>
            <li>Plug modem in first — wait for all lights to stabilise</li>
            <li>Then plug router in — wait 2–3 minutes</li>
            <li>Test your internet connection</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 2: Check All Physical Cables</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A loose Ethernet or coaxial cable is a very common cause of internet outages. Check the cable running from the wall to your modem, and the cable between your modem and router. Unplug and firmly re-insert each cable.
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-8">
            <li>Check the cable from the wall outlet to modem</li>
            <li>Check the cable from modem to router (if separate)</li>
            <li>If using Ethernet on your computer, check that cable too</li>
            <li>Look for any visible damage (fraying, kinks, bent connectors)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 3: Check for an ISP Outage</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Your internet service provider (ISP) may be experiencing an outage in your area. Visit your ISP&apos;s official website on your phone (using mobile data) or check sites like <strong>Downdetector.com</strong> to see if others in your area are reporting the same issue. If there is an outage, you will need to wait for your ISP to restore service.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 4: Run Windows Network Troubleshooter</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            On Windows 10 and 11, the built-in network troubleshooter can automatically detect and fix many common problems:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Right-click the network icon in the taskbar</li>
            <li>Select <strong>Troubleshoot Problems</strong></li>
            <li>Follow the on-screen steps</li>
            <li>Apply any suggested fixes</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 5: Flush DNS Cache</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A corrupted DNS cache can cause pages to fail to load even when your internet is technically working. To flush it on Windows:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Press <strong>Windows + R</strong>, type <code className="bg-slate-100 px-1 rounded">cmd</code>, press Enter</li>
            <li>Type: <code className="bg-slate-100 px-2 py-0.5 rounded font-mono text-sm">ipconfig /flushdns</code> and press Enter</li>
            <li>Restart your browser and test</li>
          </ol>
          <p className="text-slate-600 mb-8">On Mac: open Terminal and type <code className="bg-slate-100 px-2 py-0.5 rounded font-mono text-sm">sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code></p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 6: Change Your DNS Server</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Your ISP&apos;s default DNS servers can sometimes be slow or experiencing issues. Try switching to Google DNS (<strong>8.8.8.8 / 8.8.4.4</strong>) or Cloudflare DNS (<strong>1.1.1.1 / 1.0.0.1</strong>). This is done in your network adapter settings on Windows, or in System Preferences → Network on Mac.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Step 7: Update or Reinstall Network Drivers</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Outdated or corrupted network adapter drivers can cause intermittent or complete loss of connectivity. On Windows, go to <strong>Device Manager</strong> → <strong>Network Adapters</strong>, right-click your adapter and choose <strong>Update Driver</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Still Not Fixed? Get Expert Help</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            If none of the above steps resolved your internet issue, the problem may be with your ISP line, router firmware, modem configuration, or network settings that require deeper diagnosis. Our certified technicians can connect remotely and resolve most issues within 30–60 minutes.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Need Immediate Internet Support?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Available 24/7 across USA, UK and Canada. Most issues resolved within 30 minutes.</p>
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

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/printer-offline-fix-guide" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">How to Fix Printer Offline</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Step-by-step printer offline fix guide.</p>
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
