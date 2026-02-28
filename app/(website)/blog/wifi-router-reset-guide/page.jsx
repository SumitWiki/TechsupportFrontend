import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "How to Reset Your Wi-Fi Router — Complete Guide | TechSupport4",
  description:
    "Learn how to safely reset your Wi-Fi router to fix connectivity issues. Step-by-step guide for Netgear, TP-Link, Linksys, Asus, and all major router brands.",
  alternates: { canonical: "/blog/wifi-router-reset-guide" },
  openGraph: {
    title: "How to Reset Your Wi-Fi Router | TechSupport4",
    description: "Step-by-step router reset guide for all major brands.",
    type: "article",
  },
};

export default function WifiResetGuide() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Reset Your Wi-Fi Router",
            description: "Step-by-step guide to safely reset your Wi-Fi router and restore internet connectivity.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-02-18",
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-green-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Router Reset</span>
            </nav>
            <span className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-green-500/30">Router Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">How to Reset Your Wi-Fi Router</h1>
            <p className="mt-4 text-green-200 text-lg max-w-2xl">Works for Netgear, TP-Link, Linksys, Asus, BT, Virgin, and all major router brands.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-green-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        <article className="article-content max-w-4xl mx-auto px-6 py-14">
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            <p className="text-red-800 dark:text-red-200 text-sm"><strong>Important:</strong> A factory reset will erase ALL your router settings — Wi-Fi name (SSID), password, port forwarding, and any custom configurations. You will need to set everything up again afterwards.</p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <p className="text-amber-800 dark:text-amber-200 text-sm"><strong>Try a soft reboot first:</strong> Simply unplug the router power for 30 seconds and plug it back in. This fixes most minor connectivity issues without losing your settings.</p>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            If your Wi-Fi router is unresponsive, constantly dropping connections, has been compromised, or you have forgotten the admin password, a factory reset is often the solution. This guide explains both the soft reboot and full factory reset methods.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Method 1: Soft Reboot (Recommended First)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A soft reboot restarts the router without erasing any settings:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Locate the power adapter at the back of your router</li>
            <li>Unplug it from the wall socket</li>
            <li>Wait 30–60 seconds</li>
            <li>Plug it back in and wait 2–3 minutes for the router to fully restart</li>
            <li>All your Wi-Fi settings (name, password) will remain unchanged</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Method 2: Factory Reset via Reset Button</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            This erases all settings and restores the router to factory defaults:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Make sure the router is powered ON — do not reset a powered-off router</li>
            <li>Locate the small <strong>Reset</strong> button on the back or bottom of the router (usually a pinhole)</li>
            <li>Use a straightened paperclip or pin to press and hold the reset button</li>
            <li>Hold for <strong>10–30 seconds</strong> (varies by model) until the lights flash or change</li>
            <li>Release and wait 3–5 minutes for the router to fully reset and reboot</li>
            <li>The router will broadcast its default factory Wi-Fi network and password (printed on the label under the router)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">After a Factory Reset: What to Do</h2>
          <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-8">
            <li>Connect to the router using the default Wi-Fi credentials (on the label)</li>
            <li>Open a browser and go to the router&apos;s admin page (usually <code className="bg-slate-100 px-1 rounded">192.168.1.1</code> or <code className="bg-slate-100 px-1 rounded">192.168.0.1</code>)</li>
            <li>Log in with the default admin credentials (on the label)</li>
            <li>Set a new Wi-Fi name (SSID) and a strong password</li>
            <li>Change the admin password for the router web interface</li>
            <li>Configure your ISP settings (ask your ISP if you don&apos;t know these)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Router-Specific Reset Instructions</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-slate-600 text-sm">
            {[
              { brand: "Netgear", tip: "Hold reset button for 10 seconds. Admin page: routerlogin.net" },
              { brand: "TP-Link", tip: "Hold reset button for 10 seconds. Admin page: 192.168.0.1 or tplinkwifi.net" },
              { brand: "Linksys", tip: "Hold reset button for 10 seconds. Admin page: 192.168.1.1" },
              { brand: "Asus", tip: "Hold reset button for 10 seconds. Admin page: 192.168.1.1" },
              { brand: "BT Hub (UK)", tip: "Hold reset button for 20 seconds. Admin page: 192.168.1.254" },
              { brand: "Virgin Media (UK)", tip: "Hold reset button for 30 seconds. Admin page: 192.168.100.1" },
            ].map((r) => (
              <div key={r.brand} className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-semibold text-slate-800">{r.brand}</p>
                <p className="text-slate-500 mt-1">{r.tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Still Having Issues? We Can Help Remotely</h2>
          <div className="bg-gradient-to-br from-green-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Router Setup and Configuration Support</h3>
            <p className="mt-2 text-green-200 max-w-lg mx-auto">Our technicians can remotely configure your router after a reset, or diagnose any persistent Wi-Fi issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Start Secure Session
              </Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
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
              <Link href="/blog/printer-offline-fix-guide" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">How to Fix Printer Offline</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Step-by-step printer offline fix guide.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
