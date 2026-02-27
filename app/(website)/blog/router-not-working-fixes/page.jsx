import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Router Not Working? 9 Easy Fixes (2026 Complete Guide) | TechSupport4",
  description:
    "Router not working? Follow our 9-step troubleshooting guide to fix router connectivity issues, blinking lights, and no internet problems on any brand.",
  alternates: { canonical: "/blog/router-not-working-fixes" },
  openGraph: {
    title: "Router Not Working? 9 Easy Fixes (2026 Guide)",
    description: "Complete router troubleshooting guide — fix any router brand in minutes.",
    type: "article",
    url: "https://techsupport4.com/blog/router-not-working-fixes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Router Not Working? 9 Easy Fixes | TechSupport4",
    description: "Step-by-step guide to fix router not working issues in 2026.",
  },
};

const faqs = [
  { q: "Why is my router not working even after restarting?", a: "If a restart doesn't help, the issue may be with your ISP, outdated firmware, or a hardware failure. Try a factory reset or contact your ISP to check for outages." },
  { q: "How do I know if my router is broken?", a: "If the power light doesn't turn on, or all lights blink continuously without stabilizing after 5 minutes, the router hardware may be faulty and need replacement." },
  { q: "Can a router stop working due to overheating?", a: "Yes. Routers placed in enclosed spaces or near heat sources can overheat and shut down. Move your router to a well-ventilated area and keep it away from direct sunlight." },
  { q: "How often should I replace my router?", a: "Most routers last 3–5 years. If your router is older than that and you experience frequent disconnections or slow speeds, it's time for an upgrade." },
  { q: "Will resetting my router delete my settings?", a: "A soft restart preserves settings. A factory reset erases all custom settings (Wi-Fi name, password, port forwarding) and restores defaults." },
];

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
            headline: "Router Not Working? 9 Easy Fixes (2026 Complete Guide)",
            description: "Complete troubleshooting guide to fix router not working issues.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-02-01",
            dateModified: "2026-02-27",
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
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
              <span className="text-white">Router Fixes</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Router Not Working? 9 Easy Fixes</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">A complete 2026 guide to fix any router — Netgear, TP-Link, Linksys, ASUS, and more.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400"></span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="article-content max-w-4xl mx-auto px-6 py-14">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <p className="text-amber-800 dark:text-amber-200 text-sm"><strong>Quick fix:</strong> Unplug your router for 60 seconds and plug it back in. This resolves over 50% of router issues instantly.</p>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Is your router not working? You&apos;re not alone — router connectivity issues are the #1 most reported tech problem in the USA. Whether your router lights are blinking but there&apos;s no internet, your Wi-Fi network isn&apos;t showing up, or your connection keeps dropping every few minutes, this comprehensive guide covers every scenario. We&apos;ll walk you through 9 proven fixes that work on all major router brands including Netgear, TP-Link, Linksys, ASUS, D-Link, and ISP-provided routers from Xfinity, AT&T, Spectrum, and more.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Power Cycle Your Router and Modem</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The most effective first step is a complete power cycle. This clears the router&apos;s internal memory, resets temporary configurations, and forces a fresh connection to your ISP. Here&apos;s the proper way to do it:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug your router and modem from the power outlet (don&apos;t just press the power button)</li>
            <li>Wait a full 60 seconds — this ensures all capacitors drain completely</li>
            <li>Plug the <strong>modem</strong> back in first and wait for all indicator lights to stabilize (usually 2 minutes)</li>
            <li>Then plug in the <strong>router</strong> and wait another 2–3 minutes</li>
            <li>Test your internet connection on multiple devices</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check All Cable Connections</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Loose or damaged cables are a surprisingly common cause of router failures. Inspect every connection point:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>WAN/Internet port:</strong> The cable from your modem to the router&apos;s WAN port must be firmly seated</li>
            <li><strong>Ethernet cables:</strong> Check for bent pins, frayed ends, or loose connections</li>
            <li><strong>Coaxial cable:</strong> If you have cable internet, ensure the coax is finger-tight at both the wall and modem</li>
            <li><strong>Power adapter:</strong> Make sure the power cable is securely connected to both the router and outlet</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Router Indicator Lights</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Your router&apos;s LED lights tell you exactly what&apos;s wrong. Here&apos;s what different light patterns mean:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>No lights at all:</strong> Power issue — try a different outlet or check the adapter</li>
            <li><strong>Power light blinking:</strong> Router is booting up or firmware is updating — wait 5 minutes</li>
            <li><strong>Internet/WAN light off:</strong> No signal from ISP — check modem or contact ISP</li>
            <li><strong>Wi-Fi light off:</strong> Wireless is disabled — press the Wi-Fi button on the router or enable it via admin panel</li>
            <li><strong>All lights blinking rapidly:</strong> Router may be overheating or malfunctioning</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Verify Your ISP Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Before spending hours troubleshooting your router, confirm your ISP is actually delivering internet to your home. Connect a computer directly to your modem via Ethernet (bypassing the router). If you get internet, the problem is with the router. If you don&apos;t, the problem is with your ISP or modem. Check <strong>Downdetector.com</strong> for reported outages from Xfinity, AT&T, Spectrum, Verizon, Cox, or your provider. You can also call your ISP&apos;s automated status line.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update Router Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Outdated firmware can cause connectivity drops, security vulnerabilities, and performance issues. To update:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into your router admin panel (usually <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">192.168.0.1</code> or <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">192.168.1.1</code>)</li>
            <li>Navigate to <strong>Administration</strong> or <strong>Advanced &gt; Firmware Update</strong></li>
            <li>Click <strong>Check for Updates</strong> or download the latest firmware from your router manufacturer&apos;s website</li>
            <li>Install the update and let the router reboot — <strong>do not unplug during this process</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Change the Wi-Fi Channel</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If you live in an apartment building or densely populated area, your router&apos;s Wi-Fi channel might be congested with signals from neighboring routers. Log into your router admin panel, go to <strong>Wireless Settings</strong>, and change the channel. For 2.4 GHz, try channels <strong>1, 6, or 11</strong> (they don&apos;t overlap). For 5 GHz, try channels <strong>36, 40, 44, or 48</strong>. You can use free tools like <strong>WiFi Analyzer</strong> (Android) to see which channels are least congested in your area.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Reduce Connected Devices</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Every router has a limit on simultaneous connections. Consumer routers typically handle 20–30 devices before performance degrades. If you have dozens of smart home devices, phones, tablets, laptops, gaming consoles, and smart TVs all connected, some devices may fail to connect. Disconnect devices you&apos;re not using, or consider upgrading to a mesh router system that handles more connections.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset Your Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If nothing else works, a factory reset restores the router to its original settings. <strong>Warning:</strong> This erases your custom Wi-Fi name, password, and all configurations.
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the small <strong>Reset</strong> button (usually recessed) on the back of the router</li>
            <li>Use a paperclip to press and hold it for <strong>10–15 seconds</strong></li>
            <li>Release when the lights flash — the router will reboot</li>
            <li>Wait 3–5 minutes, then set up your router again using the default credentials (printed on a label on the router)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Replace the Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If your router is more than 3–5 years old and none of the above fixes work, it may be time for a replacement. Modern Wi-Fi 6 and Wi-Fi 6E routers offer significantly better speeds, range, and device handling. For most homes, we recommend a dual-band Wi-Fi 6 router, or a mesh system if you have a larger home (over 2,000 sq ft).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Still Not Fixed? Get Expert Help</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            If you&apos;ve tried all 9 fixes and your router still isn&apos;t working properly, the issue may require deeper network diagnostics — such as IP conflicts, DNS configuration problems, or ISP-side provisioning issues. Our certified technicians can connect remotely and diagnose the exact problem within minutes.
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
          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Need Router Support Now?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Available 24/7 across USA, UK and Canada. Most router issues resolved within 30 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition">Call Now</a>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/wifi-connected-no-internet" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Connected But No Internet?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Quick solutions that actually work.</p>
              </Link>
              <Link href="/blog/wifi-router-reset-guide" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">How to Reset Your Wi-Fi Router</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Factory reset any router safely.</p>
              </Link>
              <Link href="/blog/network-adapter-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Fix Network Adapter Not Working</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Windows 10/11 network adapter fixes.</p>
              </Link>
              <Link href="/internet-support-usa" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Support USA</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">24/7 internet troubleshooting service.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
