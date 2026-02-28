import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Not Working on Mac? Fix Guide (2026)",
  description: "Mac won't connect to WiFi? Fix 'No Hardware Installed' errors, DNS issues, network preferences, and macOS WiFi problems step by step.",
  alternates: { canonical: "/wifi-not-working-on-mac" },
  openGraph: { title: "WiFi Not Working on Mac — Fix Guide", description: "Fix Mac WiFi issues.", type: "article", url: "https://techsupport4.com/wifi-not-working-on-mac" },
  twitter: { card: "summary_large_image", title: "Mac WiFi Fix | TechSupport4", description: "WiFi not working on Mac — fix guide." },
};

const faqs = [
  { q: "Why won't my Mac connect to WiFi?", a: "Common causes: (1) WiFi is turned off (check menu bar), (2) macOS network preferences corrupted, (3) DNS settings incorrect, (4) WiFi password changed but Mac has old one cached, (5) macOS software issue after update, (6) Router not compatible with Mac's WiFi protocol, (7) NVRAM/PRAM corruption." },
  { q: "Mac says 'Wi-Fi: No Hardware Installed' — what does this mean?", a: "This means macOS can't detect the WiFi chip. Try: (1) Restart your Mac, (2) Reset NVRAM: shut down → turn on → immediately hold Option+Command+P+R for 20 seconds, (3) Reset SMC: shut down → hold Shift+Control+Option+Power for 10 seconds (Intel Mac), (4) On Apple Silicon: just restart — NVRAM resets automatically. If it persists, it may be a hardware issue." },
  { q: "How do I reset WiFi on Mac without losing other settings?", a: "Delete WiFi preferences only: (1) Turn off WiFi, (2) Go to Finder → Go → Go to Folder → /Library/Preferences/SystemConfiguration/, (3) Delete these files: com.apple.airport.preferences.plist, com.apple.network.identification.plist, NetworkInterfaces.plist, (4) Restart Mac, (5) Turn WiFi on and reconnect." },
  { q: "WiFi works on other devices but not my Mac — why?", a: "Mac-specific issues: (1) DNS configured differently — try changing to 8.8.8.8, (2) Proxy settings enabled — System Preferences → Network → WiFi → Advanced → Proxies → uncheck all, (3) macOS firewall blocking connections, (4) Date/time incorrect on Mac breaking SSL certificates." },
  { q: "Should I reset the SMC to fix WiFi?", a: "SMC reset can fix WiFi issues related to power management (WiFi not turning on, adapter not detected). On Intel Mac (pre-2020): Shut down → hold Shift+Control+Option+Power for 10 sec → release all → press Power. On Apple Silicon Mac (M1/M2/M3): Simply shut down and wait 30 seconds → turn on. No separate SMC reset needed." },
];

export default function WifiNotWorkingOnMac() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Not Working on Mac — Fix Guide", description: "Fix Mac WiFi connection issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/wifi-not-working" className="hover:text-white transition">WiFi Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Mac</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Mac WiFi Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Not Working on Mac? Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Mac can&apos;t connect to WiFi? Fix &quot;No Hardware Installed&quot; errors, DNS issues, corrupted preferences, and get your Mac online.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Macs are generally reliable with WiFi, but when they stop connecting, the fix is different from Windows. macOS stores network configuration in preference files that can become corrupted, especially after macOS updates. Here&apos;s the complete troubleshooting guide.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Basic Checks</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Click the <strong>WiFi icon</strong> in the menu bar — make sure WiFi is <strong>ON</strong></li>
            <li>Click <strong>Turn Wi-Fi Off</strong> → wait 10 seconds → <strong>Turn Wi-Fi On</strong></li>
            <li>Make sure you&apos;re connecting to the <strong>right network</strong></li>
            <li>Test if other devices connect to the same WiFi — if they don&apos;t, the problem is the router</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Forget and Reconnect</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>System Settings → Wi-Fi</strong> (or System Preferences on older macOS)</li>
            <li>Find your network in the list</li>
            <li>Click the <strong>ⓘ icon</strong> next to it → <strong>Forget This Network</strong></li>
            <li>Click the WiFi icon → select your network → enter password</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Change DNS Servers</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>System Settings → Wi-Fi → Details (on your connected network)</strong></li>
            <li>Click <strong>DNS</strong> tab</li>
            <li>Click <strong>+</strong> to add: <strong>8.8.8.8</strong> and <strong>8.8.4.4</strong></li>
            <li>Remove any existing DNS entries that aren&apos;t working</li>
            <li>Click <strong>OK → Apply</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Renew DHCP Lease</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>System Settings → Wi-Fi → Details (on your network)</strong></li>
            <li>Click <strong>TCP/IP</strong> tab</li>
            <li>Click <strong>Renew DHCP Lease</strong></li>
            <li>This forces your Mac to get a fresh IP address from the router</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Delete Network Preference Files</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Corrupted preference files are a common Mac WiFi culprit:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Turn off WiFi</strong></li>
            <li>Open <strong>Finder → Go menu → Go to Folder</strong></li>
            <li>Type: <strong>/Library/Preferences/SystemConfiguration/</strong></li>
            <li>Move these files to your Desktop (as backup):
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>com.apple.airport.preferences.plist</li>
                <li>com.apple.network.identification.plist</li>
                <li>com.apple.wifi.message-tracer.plist</li>
                <li>NetworkInterfaces.plist</li>
                <li>preferences.plist</li>
              </ul>
            </li>
            <li><strong>Restart</strong> your Mac</li>
            <li>macOS recreates these files fresh → turn WiFi on → reconnect</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Reset NVRAM/PRAM</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">NVRAM stores network settings that can become corrupted:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Intel Mac:</strong> Shut down → turn on → immediately hold <strong>Option + Command + P + R</strong> for 20 seconds</li>
            <li><strong>Apple Silicon (M1/M2/M3/M4):</strong> NVRAM resets automatically on each restart — just <strong>shut down and restart</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Reset SMC (Intel Macs Only)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Shut down your Mac</li>
            <li>Hold <strong>Shift + Control + Option</strong> (left side) + <strong>Power button</strong> for <strong>10 seconds</strong></li>
            <li>Release all keys</li>
            <li>Press Power to turn on</li>
            <li>For Apple Silicon Macs: simply shut down, wait 30 seconds, turn on</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check Proxy and Firewall</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Proxy:</strong> System Settings → Wi-Fi → Details → Proxies → uncheck all protocols</li>
            <li><strong>Firewall:</strong> System Settings → Network → Firewall → make sure it&apos;s not blocking connections</li>
            <li>If you use corporate VPN software, try disconnecting it</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Create New Network Location</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>System Settings → Network</strong></li>
            <li>Click the <strong>Location dropdown</strong> → <strong>Edit Locations</strong></li>
            <li>Click <strong>+</strong> to add a new location (name it &quot;Fresh&quot;)</li>
            <li>Select the new location → reconnect to WiFi</li>
            <li>This gives you a completely fresh network configuration</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Mac WiFi Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can fix macOS network issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "General WiFi fix guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but no internet?" },
                { href: "/wifi-keeps-disconnecting-windows-11", title: "WiFi Drops Win11", desc: "Fix WiFi on Windows 11." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
