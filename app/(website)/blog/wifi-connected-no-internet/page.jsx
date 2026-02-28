import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "WiFi Connected But No Internet? Quick Solutions That Work | TechSupport4",
  description:
    "WiFi connected but no internet access? Follow our proven troubleshooting guide to fix 'connected, no internet' on Windows 10, Windows 11, Mac, iPhone, and Android.",
  alternates: { canonical: "/blog/wifi-connected-no-internet" },
  openGraph: {
    title: "WiFi Connected But No Internet? Quick Solutions",
    description: "Fix wifi connected but no internet on any device — step-by-step guide.",
    type: "article",
    url: "https://techsupport4.com/blog/wifi-connected-no-internet",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiFi Connected But No Internet Fix | TechSupport4",
    description: "Proven solutions for Wi-Fi connected but no internet access.",
  },
};

const faqs = [
  { q: "Why does my WiFi say connected but no internet?", a: "This usually means your device is connected to the router, but the router cannot reach the internet. Common causes include ISP outages, DNS failures, incorrect network settings, or IP address conflicts." },
  { q: "How do I fix connected no internet on Windows 11?", a: "Open Command Prompt as admin and run: netsh winsock reset, then netsh int ip reset, then ipconfig /flushdns. Restart your computer and router afterward." },
  { q: "Can a VPN cause WiFi connected but no internet?", a: "Yes. A misconfigured VPN can route all traffic through a server that's unreachable. Disconnect your VPN and test. If internet works without VPN, reconfigure your VPN settings or try a different server." },
  { q: "Why does only one device show no internet while others work fine?", a: "This points to a device-specific issue — usually an IP conflict, outdated network driver, or corrupted DNS cache on that particular device. Run network reset on the affected device." },
  { q: "Does restarting the router fix 'connected but no internet'?", a: "In about 60% of cases, yes. A full power cycle (unplug for 60 seconds) forces the router to re-establish its ISP connection and clear any stuck processes." },
];

export default function BlogPost() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "WiFi Connected But No Internet? Quick Solutions That Work", description: "Complete guide to fix WiFi connected but no internet access.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-05", dateModified: "2026-02-27" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-green-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">WiFi No Internet</span>
            </nav>
            <span className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-green-500/30">Network Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">WiFi Connected But No Internet? Quick Solutions That Work</h1>
            <p className="mt-4 text-green-200 text-lg max-w-2xl">Fix the dreaded &quot;connected, no internet&quot; message on any device — Windows, Mac, iPhone, and Android.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-green-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
              <span>9 min read</span>
            </div>
          </div>
        </section>

        <article className="article-content max-w-4xl mx-auto px-6 py-14">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <p className="text-amber-800 dark:text-amber-200 text-sm"><strong>Quick fix:</strong> Restart your router, then open Command Prompt as admin and run <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">ipconfig /flushdns</code>. This fixes the issue 60% of the time.</p>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            You&apos;re connected to Wi-Fi — the icon shows full bars — but websites won&apos;t load and apps say &quot;No internet connection.&quot; This is one of the most common and confusing network problems, affecting millions of users on Windows 10, Windows 11, macOS, iPhones, and Android devices. The issue means your device is talking to the router, but the router isn&apos;t passing traffic to the internet. Here&apos;s how to fix it.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 1: Restart Your Router and Modem</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The simplest and most effective fix. Unplug your router and modem from power, wait 60 seconds, plug the modem back in first (wait 2 minutes for it to fully boot), then plug the router back in. Wait another 2–3 minutes for everything to stabilize. Test your internet on all devices. This forces the router to re-establish its connection with your ISP and clears any stuck routing tables.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 2: Forget and Reconnect to the Network</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Sometimes the stored network profile gets corrupted:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows:</strong> Settings &gt; Network &gt; Wi-Fi &gt; Manage known networks &gt; Click your network &gt; Forget. Then reconnect with your password.</li>
            <li><strong>Mac:</strong> System Settings &gt; Wi-Fi &gt; Click (i) next to your network &gt; Forget This Network.</li>
            <li><strong>iPhone:</strong> Settings &gt; Wi-Fi &gt; Tap (i) next to your network &gt; Forget This Network.</li>
            <li><strong>Android:</strong> Settings &gt; Wi-Fi &gt; Long-press your network &gt; Forget Network.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 3: Flush DNS and Reset Network Stack (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Open Command Prompt as Administrator and run these commands one by one:</p>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 font-mono text-sm mb-8 space-y-1 text-slate-700 dark:text-slate-300">
            <p>ipconfig /flushdns</p>
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>netsh winsock reset</p>
            <p>netsh int ip reset</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Restart your computer after running all commands. This resets the entire network stack and forces Windows to obtain a fresh IP address and DNS configuration from the router.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 4: Change DNS Servers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Your ISP&apos;s DNS servers might be down or slow. Switch to Google DNS (<strong>8.8.8.8</strong> and <strong>8.8.4.4</strong>) or Cloudflare DNS (<strong>1.1.1.1</strong> and <strong>1.0.0.1</strong>). On Windows: Settings &gt; Network &gt; Wi-Fi &gt; Hardware properties &gt; DNS server assignment &gt; Edit &gt; Manual, then enter the DNS addresses. On Mac: System Settings &gt; Wi-Fi &gt; (i) next to network &gt; DNS &gt; add servers.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 5: Disable VPN and Proxy</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            VPNs and proxy servers route your traffic through external servers. If these servers are down or misconfigured, you&apos;ll see &quot;connected but no internet.&quot; Temporarily disable any VPN app and check Settings &gt; Network &gt; Proxy &gt; ensure &quot;Use a proxy server&quot; is off. Test your internet — if it works, the VPN or proxy was the issue.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 6: Check for IP Address Conflicts</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If two devices on your network have the same IP address, both will have connectivity issues. Open Command Prompt and type <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">ipconfig</code> to see your IP. If it starts with <strong>169.254.x.x</strong>, your computer failed to get a valid IP from the router. Try restarting the router to reset DHCP assignments, or set a static IP in your network adapter settings.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 7: Update Network Adapter Drivers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Outdated or corrupted network drivers can cause &quot;connected no internet&quot; issues, especially after a Windows update. Open <strong>Device Manager</strong>, expand <strong>Network Adapters</strong>, right-click your Wi-Fi adapter, and select <strong>Update Driver</strong>. If updating doesn&apos;t help, try <strong>Uninstall Device</strong>, then restart — Windows will reinstall the driver automatically.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 8: Run Windows Network Diagnostics</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Go to <strong>Settings &gt; System &gt; Troubleshoot &gt; Other Troubleshooters</strong> and run the <strong>Internet Connections</strong> and <strong>Network Adapter</strong> troubleshooters. Windows will automatically detect the issue (DHCP failure, DNS resolution problems, gateway issues) and attempt to fix it.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Solution 9: Reset Network Settings Completely</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">As a last resort, perform a full network reset:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows 11:</strong> Settings &gt; Network &amp; Internet &gt; Advanced network settings &gt; Network reset &gt; Reset now</li>
            <li><strong>iPhone:</strong> Settings &gt; General &gt; Transfer or Reset &gt; Reset &gt; Reset Network Settings</li>
            <li><strong>Android:</strong> Settings &gt; General Management &gt; Reset &gt; Reset Network Settings</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8"><strong>Note:</strong> This will erase all saved Wi-Fi passwords on the device. You&apos;ll need to reconnect to your networks manually.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Still No Internet? Get Expert Help</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            If none of these solutions resolved your issue, the problem may be ISP-side (transmission issues, account problems) or require advanced router configuration changes. Our certified network technicians can remotely diagnose and fix the exact cause.
          </p>

          {/* FAQ */}
          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Need Wi-Fi Support Now?</h3>
            <p className="mt-2 text-green-200 max-w-lg mx-auto">Available 24/7 across USA, UK and Canada.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition">Call Now</a>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/router-not-working-fixes" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Router Not Working? 9 Easy Fixes</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete 2026 router troubleshooting guide.</p>
              </Link>
              <Link href="/blog/network-adapter-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Fix Network Adapter Not Working</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Windows 10/11 network adapter guide.</p>
              </Link>
              <Link href="/wifi-router-support-usa" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Wi-Fi Router Support USA</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">24/7 Wi-Fi troubleshooting service.</p>
              </Link>
              <Link href="/blog/how-to-fix-internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Fix Internet Not Working</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete internet troubleshooting guide.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
