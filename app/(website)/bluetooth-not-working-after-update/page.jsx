import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Bluetooth Not Working After Update? Quick Fix (2026)",
  description: "Bluetooth stopped working after Windows 10/11 update? Fix missing Bluetooth, pairing failures, driver issues, and audio problems caused by Windows updates.",
  alternates: { canonical: "/bluetooth-not-working-after-update" },
  openGraph: { title: "Bluetooth Not Working After Update — Fix", description: "Fix Bluetooth after Windows update.", type: "article", url: "https://techsupport4.com/bluetooth-not-working-after-update" },
  twitter: { card: "summary_large_image", title: "Bluetooth After Update Fix | TechSupport4", description: "Fix Bluetooth after update." },
};

const faqs = [
  { q: "Why did Bluetooth stop working after Windows update?", a: "Windows updates can: (1) Replace the Bluetooth driver with an incompatible generic version, (2) Disable the Bluetooth adapter, (3) Remove paired devices, (4) Change Bluetooth service settings, (5) Introduce bugs in the Bluetooth stack. Intel and Realtek Bluetooth adapters are most commonly affected." },
  { q: "Bluetooth option disappeared from Settings — how to fix?", a: "Open Device Manager → View → Show hidden devices. Look for Bluetooth adapters. If present but disabled, right-click → Enable. If missing, the driver was removed by the update — restart first, then download the Bluetooth driver from your laptop manufacturer's website." },
  { q: "Bluetooth headphones connect but no audio after update?", a: "This is a common audio routing issue: (1) Right-click speaker icon → Sound settings, (2) Set output to your Bluetooth headphones, (3) If listed as 'Hands-Free' instead of 'Stereo,' remove the device and re-pair it, (4) Check that Bluetooth Audio Gateway service is running in services.msc." },
  { q: "How do I roll back the Bluetooth driver?", a: "Device Manager → Bluetooth → right-click your adapter → Properties → Driver tab → Roll Back Driver. If grayed out, Windows doesn't have a previous driver. In that case, download the previous driver version from your manufacturer's support page." },
  { q: "Can I get Bluetooth working without rolling back the update?", a: "Yes, in most cases. Try: (1) Restart the Bluetooth Support Service (services.msc), (2) Remove and re-pair all devices, (3) Reinstall the Bluetooth driver, (4) Run the Bluetooth troubleshooter, (5) Reset Bluetooth via Settings → Bluetooth → Remove all devices → restart. Rolling back the update is a last resort." },
];

export default function BluetoothNotWorkingAfterUpdate() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bluetooth Not Working After Update — Fix", description: "Fix Bluetooth after update.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-red-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Bluetooth After Update</span>
            </nav>
            <span className="inline-block bg-red-500/20 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-red-500/30">Driver / Update Issue</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Bluetooth Not Working After Update?</h1>
            <p className="mt-4 text-red-200 text-lg max-w-2xl">Windows update broke Bluetooth? Fix missing adapter, pairing failures, and audio issues.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-red-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-red-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">After a Windows 10 or 11 update, Bluetooth may <strong>disappear from Settings, devices won&apos;t pair, or audio stops routing to Bluetooth headphones</strong>. Here are the proven fixes.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Toggle Bluetooth Off and On</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Bluetooth &amp; devices</strong></li>
            <li>Turn Bluetooth <strong>Off</strong></li>
            <li>Wait <strong>10 seconds</strong></li>
            <li>Turn Bluetooth <strong>On</strong></li>
            <li>If Bluetooth toggle is missing, proceed to Fix 2</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Bluetooth Support Service</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + R</strong> → type <strong>services.msc</strong> → Enter</li>
            <li>Find <strong>Bluetooth Support Service</strong></li>
            <li>Right-click → <strong>Restart</strong></li>
            <li>Set Startup type to <strong>Automatic</strong></li>
            <li>Also check <strong>Bluetooth Audio Gateway Service</strong> is running</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Device Manager</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> (Win + X → Device Manager)</li>
            <li>Click <strong>View → Show hidden devices</strong></li>
            <li>Look for <strong>Bluetooth</strong> section</li>
            <li>If adapter is grayed out → right-click → <strong>Enable device</strong></li>
            <li>If there&apos;s a <strong>yellow warning icon</strong> → driver issue (proceed to Fix 4)</li>
            <li>If Bluetooth section is missing entirely → restart computer first</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Roll Back Bluetooth Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In Device Manager → <strong>Bluetooth</strong> → right-click adapter</li>
            <li>Select <strong>Properties → Driver tab</strong></li>
            <li>Click <strong>&quot;Roll Back Driver&quot;</strong></li>
            <li>Select reason → click <strong>Yes</strong></li>
            <li>If &quot;Roll Back&quot; is grayed out → proceed to Fix 5</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Reinstall Bluetooth Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In Device Manager → Bluetooth → right-click adapter</li>
            <li><strong>Uninstall device</strong> → check &quot;Delete the driver software&quot;</li>
            <li><strong>Restart</strong> computer</li>
            <li>Windows will reinstall a basic Bluetooth driver</li>
            <li>For best results, download the driver from your laptop manufacturer:
              <ul className="list-disc pl-6 mt-2">
                <li>Dell: <strong>dell.com/support/drivers</strong></li>
                <li>HP: <strong>support.hp.com/drivers</strong></li>
                <li>Lenovo: <strong>support.lenovo.com/downloads</strong></li>
                <li>Intel (most common): <strong>intel.com/bluetooth</strong></li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Run Bluetooth Troubleshooter</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → System → Troubleshoot → Other troubleshooters</strong></li>
            <li>Click <strong>Run</strong> next to &quot;Bluetooth&quot;</li>
            <li>Follow prompts — it can detect missing services and driver issues</li>
            <li>Restart after troubleshooter completes</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Remove and Re-Pair Devices</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Bluetooth &amp; devices</strong></li>
            <li><strong>Remove</strong> all paired Bluetooth devices</li>
            <li>Put your device in <strong>pairing mode</strong> (check device manual)</li>
            <li>Click <strong>Add device → Bluetooth</strong></li>
            <li>Select your device and pair</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check Airplane Mode &amp; Physical Switch</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Make sure <strong>Airplane Mode is OFF</strong></li>
            <li>Some laptops have a <strong>physical wireless switch or Fn key combo</strong> (e.g., Fn + F5)</li>
            <li>Windows updates can sometimes toggle airplane mode</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Bluetooth Still Not Working?</h3>
            <p className="mt-2 text-red-200 max-w-lg mx-auto">Our technicians can remotely fix Bluetooth driver and pairing issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-not-working-after-windows-update", title: "WiFi After Update", desc: "Fix WiFi after Windows update." },
                { href: "/computer-slow-after-windows-update", title: "Slow After Update", desc: "Computer slow after update." },
                { href: "/printer-offline-after-windows-update", title: "Printer After Update", desc: "Printer offline after update." },
                { href: "/wifi-not-working-after-sleep-mode", title: "WiFi After Sleep", desc: "Fix WiFi after sleep mode." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
