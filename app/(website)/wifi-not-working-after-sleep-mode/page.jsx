import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Working After Sleep Mode? Quick Fix (2026)",
  description: "WiFi disconnects after sleep or hibernate on Windows 10/11? Fix WiFi adapter power management, driver issues, and reconnection problems step by step.",
  alternates: { canonical: "/wifi-not-working-after-sleep-mode" },
  openGraph: { title: "WiFi Not Working After Sleep Mode — Fix", description: "Fix WiFi that drops after sleep/hibernate.", type: "article", url: "https://techsupport4.com/wifi-not-working-after-sleep-mode" },
  twitter: { card: "summary_large_image", title: "WiFi After Sleep Fix | TechSupport4", description: "WiFi not connecting after sleep mode — fix guide." },
};

const faqs = [
  { q: "Why does WiFi disconnect after sleep mode?", a: "Windows uses power management to turn off WiFi during sleep to save battery. When waking up, the adapter should re-enable, but often fails due to: (1) Power management settings keeping the adapter off, (2) Driver bugs that don't properly resume, (3) DHCP lease expiration during long sleep, (4) Fast Startup conflicts, (5) Outdated WiFi drivers." },
  { q: "Why does my laptop say 'No Internet' after waking from sleep?", a: "The WiFi adapter reconnected to the router but didn't get a proper IP address. The DHCP lease may have expired during sleep or the adapter didn't request a new one. Fix: open Command Prompt → run 'ipconfig /release' then 'ipconfig /renew'. Or simply toggle WiFi off/on." },
  { q: "Should I disable sleep mode entirely to fix this?", a: "No — that wastes battery and energy. Instead, fix the power management settings for the WiFi adapter: Device Manager → WiFi adapter → Properties → Power Management → uncheck 'Allow the computer to turn off this device.' This keeps WiFi powered during sleep." },
  { q: "WiFi works after sleep but drops after a few minutes — why?", a: "This is usually a driver issue. The adapter resumes but doesn't maintain a stable connection. Update the WiFi driver from the manufacturer's website (not Windows Update). Also check: roaming aggressiveness (set to Medium), preferred band (if dual-band router, try setting to 5 GHz only)." },
  { q: "Does this issue happen with Ethernet too?", a: "Less commonly, but yes. The same power management setting applies to Ethernet adapters. If Ethernet drops after sleep: Device Manager → Ethernet adapter → Properties → Power Management → uncheck 'Allow the computer to turn off this device.'" },
];

export default function WifiNotWorkingAfterSleepMode() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Not Working After Sleep Mode — Fix", description: "Fix WiFi after sleep mode.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Sleep Mode</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Not Working After Sleep Mode?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Laptop WiFi drops every time you close the lid or wake from sleep? Fix it permanently.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>8 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">One of the most annoying Windows issues: <strong>WiFi disconnects every time your laptop goes to sleep or you close the lid</strong>. You wake it up and there&apos;s no internet until you restart or fiddle with settings. Here&apos;s the permanent fix.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Disable WiFi Adapter Power Management (Best Fix)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"><strong>This fixes the problem for 80% of users:</strong></p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Right-click Start → <strong>Device Manager</strong></li>
            <li>Expand <strong>Network adapters</strong></li>
            <li>Right-click your <strong>WiFi adapter</strong> (e.g., Intel AX211, Realtek 8852)</li>
            <li>Click <strong>Properties → Power Management</strong> tab</li>
            <li><strong>Uncheck</strong> &quot;Allow the computer to turn off this device to save power&quot;</li>
            <li>Click <strong>OK</strong></li>
            <li>Test by putting laptop to sleep and waking</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Change WiFi Adapter Advanced Settings</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In Device Manager → WiFi adapter → <strong>Properties → Advanced</strong> tab</li>
            <li>Find <strong>&quot;Wireless Mode&quot;</strong> or <strong>&quot;Roaming Aggressiveness&quot;</strong> → set to <strong>Medium</strong></li>
            <li>Find <strong>&quot;Power Saving Mode&quot;</strong> → set to <strong>Off</strong> or <strong>Maximum Performance</strong></li>
            <li>If you see <strong>&quot;Wake on Magic Packet&quot;</strong> → set to <strong>Enabled</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change Power Plan Settings</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Control Panel → Power Options</strong></li>
            <li>Click <strong>Change plan settings</strong> for your active plan</li>
            <li>Click <strong>Change advanced power settings</strong></li>
            <li>Expand <strong>Wireless Adapter Settings → Power Saving Mode</strong></li>
            <li>Set both On Battery and Plugged In to <strong>&quot;Maximum Performance&quot;</strong></li>
            <li>Click <strong>OK</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Disable Fast Startup</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Fast Startup can cause hardware resume issues:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Control Panel → Power Options</strong></li>
            <li>Click <strong>&quot;Choose what the power buttons do&quot;</strong></li>
            <li>Click <strong>&quot;Change settings that are currently unavailable&quot;</strong></li>
            <li>Uncheck <strong>&quot;Turn on fast startup&quot;</strong></li>
            <li>Click <strong>Save changes</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update WiFi Driver</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check your WiFi adapter name in <strong>Device Manager → Network adapters</strong></li>
            <li>Go to the manufacturer&apos;s website:
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Intel WiFi:</strong> intel.com/content/www/us/en/support/detect.html</li>
                <li><strong>Realtek:</strong> Your laptop manufacturer&apos;s support page</li>
                <li><strong>Qualcomm/Atheros:</strong> Your laptop manufacturer&apos;s support page</li>
              </ul>
            </li>
            <li>Download and install the latest driver</li>
            <li>Restart computer</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Reset TCP/IP After Sleep</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If WiFi connects but shows &quot;No internet&quot; after sleep, run these in <strong>Command Prompt (Admin)</strong>:</p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-5 font-mono text-sm mb-8 overflow-x-auto">
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>ipconfig /flushdns</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart after running all commands.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Create a Wake Script (Advanced)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Create a scheduled task that resets WiFi on wake:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Task Scheduler</strong></li>
            <li>Create a new task triggered by <strong>&quot;On workstation unlock&quot;</strong></li>
            <li>Action: Run <strong>netsh interface set interface &quot;Wi-Fi&quot; disable</strong> then <strong>netsh interface set interface &quot;Wi-Fi&quot; enable</strong></li>
            <li>This forces a clean WiFi restart on every wake</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">WiFi Still Dropping After Sleep?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely configure power management and drivers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-not-working-after-windows-update", title: "WiFi After Update", desc: "WiFi broken after Windows update." },
                { href: "/bluetooth-not-working-after-update", title: "Bluetooth After Update", desc: "Bluetooth not working after update." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "Complete WiFi fix guide." },
                { href: "/laptop-not-connecting-to-wifi", title: "Laptop WiFi Issue", desc: "Laptop can't connect to WiFi." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
