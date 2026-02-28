import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Epson Printer Not Connecting to WiFi? Fix Guide (2026)",
  description: "Epson printer won't connect to WiFi? Fix WiFi setup failures, connection drops, WPS issues, and network errors with this complete troubleshooting guide.",
  alternates: { canonical: "/epson-printer-not-connecting-to-wifi" },
  openGraph: { title: "Epson Printer Not Connecting to WiFi — Fix Guide", description: "Fix Epson WiFi connection issues.", type: "article", url: "https://techsupport4.com/epson-printer-not-connecting-to-wifi" },
  twitter: { card: "summary_large_image", title: "Fix Epson WiFi Issues | TechSupport4", description: "Epson won't connect to WiFi — fix guide." },
};

const faqs = [
  { q: "Why won't my Epson printer connect to WiFi?", a: "Common causes: (1) Router is on 5 GHz — most Epson printers only support 2.4 GHz WiFi, (2) Wrong WiFi password entered on printer, (3) Router has MAC address filtering enabled, (4) Too many devices connected to the router, (5) Printer is too far from the router, (6) WiFi Direct is enabled instead of infrastructure mode, (7) Printer's network settings need to be reset." },
  { q: "How do I connect my Epson printer to WiFi without WPS?", a: "Use the printer's LCD panel: Settings → WiFi Setup → WiFi Setup Wizard → select your network name from the list → enter your WiFi password. Or use Epson Smart Panel app on your phone — it can guide the printer through WiFi setup without WPS." },
  { q: "Epson printer connected to WiFi but won't print — why?", a: "The printer may be on WiFi but not discoverable by your computer. Check: (1) Both devices on the same network/subnet, (2) Router's AP isolation is disabled, (3) Firewall isn't blocking the printer, (4) Printer IP hasn't changed — reinstall with current IP. Print a network status sheet from the printer to verify its IP address." },
  { q: "How do I reset WiFi settings on my Epson printer?", a: "Go to Settings → General Settings (or Setup) → Network Settings → Restore Default Settings → confirm. This erases all saved WiFi credentials and returns the printer to factory network state. You'll need to set up WiFi again from scratch." },
  { q: "Can I connect Epson printer to WiFi and USB at the same time?", a: "Most Epson printers support simultaneous USB and WiFi connections. You can have one computer connected via USB and others printing over WiFi. On some models, you need to enable this in Settings → Network Settings → Connection modes → USB + WiFi." },
];

export default function EpsonNotConnectingToWifi() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Epson Printer Not Connecting to WiFi — Fix Guide", description: "Fix Epson WiFi connection issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-25", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/printer-not-working" className="hover:text-white transition">Printer Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/epson-printer-not-printing" className="hover:text-white transition">Epson Printer</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">WiFi Connection</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Epson Printer Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Epson Printer Not Connecting to WiFi? Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Epson printer won&apos;t connect to WiFi or keeps disconnecting? Fix 2.4 GHz issues, WPS failures, and network setup errors step by step.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Epson printers are excellent devices, but getting them connected to WiFi can be tricky — especially with dual-band routers, WPS issues, and the variety of Epson WiFi setup methods. Whether you&apos;re setting up for the first time or your printer suddenly lost its WiFi connection, this guide covers every scenario.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Important: The 2.4 GHz Requirement</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Almost all Epson printers <strong>only support 2.4 GHz WiFi</strong>. If your router broadcasts a combined 2.4/5 GHz network, the printer may fail to connect. Check your router settings:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into your router (192.168.1.1 or 192.168.0.1)</li>
            <li>If you have a combined network, <strong>separate them into two networks</strong> (e.g., &quot;HomeWiFi&quot; for 2.4 GHz, &quot;HomeWiFi_5G&quot; for 5 GHz)</li>
            <li>Connect the Epson printer to the <strong>2.4 GHz network only</strong></li>
            <li>Your computer can be on either band — they can still communicate</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: WiFi Setup via Printer Panel</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On the Epson printer, go to <strong>Settings (gear icon) → WiFi Setup</strong></li>
            <li>Select <strong>WiFi Setup Wizard</strong></li>
            <li>The printer will scan for networks — select your <strong>2.4 GHz network</strong></li>
            <li>Enter your WiFi password (use the on-screen keyboard — it&apos;s case-sensitive)</li>
            <li>Wait for <strong>&quot;Connected&quot;</strong> confirmation</li>
            <li>Print a <strong>Network Status Sheet</strong> to verify: Settings → Network Status → Print Status Sheet</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: WPS Push Button Method</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>On the printer: <strong>Settings → WiFi Setup → Push Button Setup (WPS)</strong></li>
            <li>When prompted, press the <strong>WPS button on your router</strong> within 2 minutes</li>
            <li>The printer will automatically connect</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8"><strong>Note:</strong> Many modern routers have WPS disabled by default for security. Check your router&apos;s admin panel to enable it, or use the WiFi Setup Wizard method instead.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Reset Printer Network Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If the printer was connected before but stopped working:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → General Settings → Network Settings → Restore Default Settings</strong></li>
            <li>Confirm the reset</li>
            <li>The printer will restart</li>
            <li>Set up WiFi again using Fix 1 or Fix 2</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Use Epson Smart Panel App</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Download <strong>Epson Smart Panel</strong> app (iOS or Android)</li>
            <li>Open the app → tap <strong>Set Up a New Printer</strong></li>
            <li>Follow the prompts — the app communicates with the printer via Bluetooth or WiFi Direct</li>
            <li>Enter your WiFi credentials when prompted</li>
            <li>The app transfers the WiFi settings to the printer</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Router Settings</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>MAC filtering:</strong> If enabled, add the printer&apos;s MAC address to the allowed list (find MAC on the network status sheet)</li>
            <li><strong>AP isolation:</strong> Must be <strong>disabled</strong> — this feature prevents devices from seeing each other on WiFi</li>
            <li><strong>Max connected devices:</strong> Some routers limit to 10-15 devices — check if you&apos;re at the limit</li>
            <li><strong>Security type:</strong> Use <strong>WPA2-Personal</strong> — some Epson printers don&apos;t support WPA3</li>
            <li><strong>Hidden SSID:</strong> If network is hidden, use manual WiFi setup on the printer and enter the SSID manually</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Assign Static IP to Printer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Prevents the &quot;connected but can&apos;t print&quot; problem caused by IP changes:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Print a Network Status Sheet — note the current IP, subnet, and gateway</li>
            <li>On the printer: <strong>Settings → Network Settings → Advanced → TCP/IP</strong></li>
            <li>Change from <strong>Auto to Manual</strong></li>
            <li>Enter: IP Address (e.g., 192.168.1.200), Subnet (255.255.255.0), Gateway (your router&apos;s IP)</li>
            <li>Save and print a new status sheet to confirm</li>
            <li>On your computer, remove the old printer and <strong>add it using the static IP</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Use WiFi Direct (Temporary Alternative)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you can&apos;t get router-based WiFi working, use WiFi Direct as a workaround:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>On the printer: <strong>Settings → WiFi Setup → WiFi Direct</strong></li>
            <li>Note the <strong>network name</strong> (e.g., DIRECT-xxEpson) and <strong>password</strong></li>
            <li>On your computer/phone, connect to this WiFi Direct network</li>
            <li>Print directly — your device talks directly to the printer without a router</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8"><strong>Limitation:</strong> WiFi Direct disconnects you from your home network, so no internet while printing. Best as a temporary solution.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Power Cycle Network</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Turn off Epson printer → <strong>unplug router</strong> for 60 seconds → plug router back in → wait until all lights are stable → turn on printer → wait 2 minutes for automatic WiFi reconnection. If it doesn&apos;t reconnect, repeat WiFi setup.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Epson Still Won&apos;t Connect?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can fix Epson WiFi and network issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/epson-printer-driver-unavailable-windows-10", title: "Epson Driver Unavailable", desc: "Fix Epson driver on Win10." },
                { href: "/epson-printer-not-printing", title: "Epson Not Printing?", desc: "General Epson printer guide." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "Fix WiFi connection issues." },
                { href: "/printer-not-working", title: "Any Printer Not Working?", desc: "Universal printer fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
