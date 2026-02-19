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

      <main className="bg-slate-50 min-h-screen">
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-200 text-sm mb-2">
              <Link href="/" className="hover:underline">Home</Link> &rsaquo; Blog
            </p>
            <h1 className="text-4xl font-bold">How to Reset Your Wi-Fi Router</h1>
            <p className="mt-3 text-blue-100 text-lg">Works for Netgear, TP-Link, Linksys, Asus, BT, Virgin, and all major router brands.</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-10 text-red-800 text-sm">
            ⚠️ <strong>Important:</strong> A factory reset will erase ALL your router settings — Wi-Fi name (SSID), password, port forwarding, and any custom configurations. You will need to set everything up again afterwards.
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-10 text-yellow-800 text-sm">
            💡 <strong>Try a soft reboot first:</strong> Simply unplug the router power for 30 seconds and plug it back in. This fixes most minor connectivity issues without losing your settings.
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
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold">Router Setup and Configuration Support</h3>
            <p className="mt-2 text-blue-100">Our technicians can remotely configure your router after a reset, or diagnose any persistent Wi-Fi issues.</p>
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
              <Link href="/blog/printer-offline-fix-guide" className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition">
                <p className="font-semibold text-blue-700">How to Fix Printer Offline</p>
                <p className="text-slate-500 text-sm mt-1">Step-by-step printer offline fix guide.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
