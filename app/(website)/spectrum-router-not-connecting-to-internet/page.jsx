import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Spectrum Router Not Connecting to Internet? Fix Guide (2026)",
  description: "Spectrum router not connecting to internet? Fix Spectrum WiFi issues, modem-router connection, DNS, and activation problems step by step.",
  alternates: { canonical: "/spectrum-router-not-connecting-to-internet" },
  openGraph: { title: "Spectrum Router Not Connecting to Internet? Fix Guide", description: "Fix Spectrum internet connection.", type: "article", url: "https://techsupport4.com/spectrum-router-not-connecting-to-internet" },
  twitter: { card: "summary_large_image", title: "Fix Spectrum Router | TechSupport4", description: "Spectrum not connecting — step-by-step fix." },
};

const faqs = [
  { q: "Why is my Spectrum router not connecting to the internet?", a: "Top causes: (1) Modem isn't online — check modem LEDs first, (2) Ethernet cable between modem and router is loose/damaged, (3) Spectrum outage in your area, (4) Router needs restart, (5) WiFi is working but DNS is down — change to Google DNS 8.8.8.8, (6) Equipment needs reprovisioning by Spectrum." },
  { q: "How do I restart my Spectrum router and modem?", a: "Unplug BOTH modem and router. Wait 60 seconds. Plug in modem first — wait 3-5 minutes for Online LED to be solid. Then plug in router — wait 2-3 minutes for solid blue light. Test internet. This resolves most connectivity issues." },
  { q: "Spectrum WiFi connected but no internet — how to fix?", a: "You're connected to the router but not reaching the internet. Fix: (1) Restart modem and router (modem first), (2) Try a different device — if all devices fail, it's the router/modem, (3) Try Ethernet directly to modem — if that works, router issue, (4) Change DNS to 8.8.8.8 on your device, (5) Call Spectrum." },
  { q: "How do I access Spectrum router settings?", a: "Open a browser → type 192.168.1.1. Default credentials are on the label on the Spectrum router. You can also manage WiFi settings through the My Spectrum app (easier). Note: Spectrum limits some advanced settings on their provided routers." },
  { q: "Can I use my own router with Spectrum?", a: "Yes — you still need Spectrum's modem (or an approved modem from their list), but you can use any router. Plug your router's WAN port into the Spectrum modem via Ethernet. Set connection type to DHCP. Your own router will give better performance and more features." },
];

export default function SpectrumNotConnecting() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Spectrum Router Not Connecting to Internet — Fix Guide", description: "Fix Spectrum internet connection.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-23", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Spectrum Not Connecting</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Spectrum Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Spectrum Router Not Connecting to Internet? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix Spectrum internet when your router has WiFi but no internet — covers modem checks, DNS, cable connections, outage detection, and Spectrum support steps.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Spectrum provides a separate modem and router to most subscribers. When your internet stops working, the problem could be either device. This guide helps you identify which one is at fault and fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Check the Modem First</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">The modem connects to Spectrum&apos;s network. Check its <strong>Online LED</strong>. If it&apos;s solid blue/green, the modem is fine and the problem is the router. If it&apos;s blinking or red, the modem can&apos;t reach Spectrum — fix the modem first before touching the router.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Power Cycle Both</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug both modem and router</li>
            <li>Wait 60 seconds</li>
            <li>Plug in <strong>modem first</strong> — wait 3-5 minutes (Online LED solid)</li>
            <li>Plug in <strong>router</strong> — wait 2-3 minutes (light solid blue)</li>
            <li>Test internet on your device</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Check Spectrum Outage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Use your phone: open <strong>My Spectrum app</strong> → check for outage alerts. Visit downdetector.com/status/spectrum. If there&apos;s an outage, nothing to do but wait.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Check Cables</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Coax cable</strong>: Wall → Modem (tight on both ends)</li>
            <li><strong>Ethernet cable</strong>: Modem → Router WAN port</li>
            <li>Try different cables</li>
            <li>Bypass coax splitter if present</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Test Direct Modem Connection</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Connect a computer directly to the Spectrum modem via Ethernet. If you get internet, the router is the problem. If not, the modem or Spectrum service is the issue. This test is critical for efficient troubleshooting.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Change DNS</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Sometimes you&apos;re &quot;connected&quot; but pages won&apos;t load — DNS failure. On your device: set DNS to <strong>8.8.8.8</strong> and <strong>8.8.4.4</strong>. Windows: Settings → Network → WiFi adapter → Edit DNS → Manual → 8.8.8.8. Mac: System Preferences → Network → DNS → add 8.8.8.8.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 7: Factory Reset Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Hold reset button for 10 seconds. Reconfigure WiFi via My Spectrum app or 192.168.1.1. This fixes corrupted settings.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 8: Contact Spectrum</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Call <strong>1-833-267-6094</strong>. Ask them to: send a refresh signal, check your signal levels, reprovision equipment, or schedule a technician. Have your account number ready.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Spectrum Still Not Connecting?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help troubleshoot your Spectrum connection.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/spectrum-router-red-light-blinking", title: "Spectrum Red Light Fix", desc: "Fix Spectrum LED issues." },
                { href: "/xfinity-router-not-working-after-reset", title: "Xfinity After Reset", desc: "Fix Xfinity gateway issues." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Fix on any ISP router." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete troubleshooting guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
