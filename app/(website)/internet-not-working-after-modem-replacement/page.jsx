import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Not Working After Modem Replacement? Fix (2026)",
  description: "Internet not working after replacing your modem? Fix activation issues, MAC address problems, provisioning delays, and configuration errors step by step.",
  alternates: { canonical: "/internet-not-working-after-modem-replacement" },
  openGraph: { title: "Internet Not Working After Modem Replacement — Fix", description: "Fix internet after modem replacement.", type: "article", url: "https://techsupport4.com/internet-not-working-after-modem-replacement" },
  twitter: { card: "summary_large_image", title: "After Modem Replacement Fix | TechSupport4", description: "Internet not working after modem replacement — fix guide." },
};

const faqs = [
  { q: "Why doesn't internet work after replacing modem?", a: "The #1 reason: your ISP needs to register the new modem's MAC address. Every modem has a unique MAC address and your ISP's system only recognizes the old modem. You must call your ISP to activate/provision the new modem on your account. Other causes: wrong cables, firmware downloading, or incompatible modem." },
  { q: "How long does it take for a new modem to activate?", a: "Self-activation: 10-30 minutes. ISP-activated: instant to 4 hours depending on the ISP. If it takes longer than 4 hours, call your ISP. Some ISPs require the modem MAC address to be added manually, which takes a phone call." },
  { q: "Do I need to call my ISP after replacing my modem?", a: "Usually yes. Most ISPs (Xfinity, Spectrum, Cox, AT&T) require you to register the new modem's MAC address. Some ISPs offer self-activation online or through their app. Xfinity: xfinity.com/activate. Spectrum: spectrum.net/selfinstall. Cox: cox.com/activate." },
  { q: "My ISP activated the modem but still no internet — what now?", a: "After activation: (1) Power cycle the modem — unplug 60 sec, replug, (2) Wait 15 minutes for firmware to download, (3) Check if Online/Internet light goes solid, (4) Try direct Ethernet connection to computer, (5) If using your own router, check router's WAN IP, (6) Call ISP for signal level check." },
  { q: "Can I use any modem with my ISP?", a: "No — you must use a modem compatible with your ISP. Check your ISP's approved devices list: Xfinity (xfinity.com/support/devices), Spectrum (spectrum.net/support/devices), Cox (cox.com/residential/support/devices). Most cable ISPs require DOCSIS 3.0 minimum (3.1 recommended for gigabit). For DSL, you need a DSL modem compatible with your line type." },
];

export default function InternetNotWorkingAfterModemReplacement() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Not Working After Modem Replacement", description: "Fix internet after modem replacement.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-yellow-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Modem Replacement</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Post-Replacement Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Not Working After Modem Replacement?</h1>
            <p className="mt-4 text-yellow-200 text-lg max-w-2xl">New modem installed but no internet? Fix activation, provisioning, and configuration issues.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-yellow-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-yellow-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You replaced your modem and now there&apos;s no internet. This is <strong>extremely common</strong> and almost always caused by the ISP not recognizing the new modem. Here&apos;s how to get it working.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Activate the New Modem with Your ISP</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"><strong>This is the #1 reason new modems don&apos;t work.</strong> Your ISP must register the new modem:</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">ISP</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Self-Activate</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Phone</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Xfinity</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">xfinity.com/activate</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1-800-934-6489</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Spectrum</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">spectrum.net/selfinstall</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1-833-267-6094</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Cox</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">cox.com/activate</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1-800-234-3993</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">AT&amp;T</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">att.com/internet/setup</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1-800-288-2020</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">CenturyLink</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">centurylink.com/activate</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1-800-244-1111</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">You&apos;ll need: the modem&apos;s <strong>MAC address</strong> (on a sticker on the modem) and your <strong>account number</strong>.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Wait for Firmware Download</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>After activation, the modem downloads <strong>firmware from your ISP</strong></li>
            <li>This can take <strong>15-30 minutes</strong></li>
            <li>The modem may restart several times — <strong>don&apos;t unplug it</strong></li>
            <li>Wait until all lights stabilize</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Power Cycle After Activation</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>After ISP confirms activation, <strong>unplug modem</strong></li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug back in → wait <strong>10-15 minutes</strong></li>
            <li>Check for solid Online/Internet light</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Cables</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Coaxial cable:</strong> Finger-tight at wall and modem (cable ISPs)</li>
            <li><strong>Ethernet cable:</strong> From modem to router WAN port</li>
            <li><strong>Power cable:</strong> Firmly connected</li>
            <li>Use the <strong>same cables</strong> that worked with the old modem</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Verify Modem Compatibility</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check your ISP&apos;s <strong>approved modem list</strong></li>
            <li>For cable: must be <strong>DOCSIS 3.0 minimum</strong> (3.1 for gigabit plans)</li>
            <li>For DSL: must match your <strong>DSL line type</strong> (ADSL2+ or VDSL)</li>
            <li>If the modem isn&apos;t compatible, it <strong>won&apos;t sync</strong> with your ISP</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Release/Renew IP on Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you have a separate router:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into your <strong>router admin panel</strong></li>
            <li>Go to <strong>WAN/Internet settings</strong></li>
            <li>Click <strong>Release</strong> then <strong>Renew</strong> IP address</li>
            <li>Or restart the router after the modem is fully online</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Connect Computer Directly</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect computer <strong>directly to modem via Ethernet</strong> (bypass router)</li>
            <li>Restart modem</li>
            <li>If internet works → <strong>router needs restart/reconfiguration</strong></li>
            <li>If no internet → <strong>modem activation or compatibility issue</strong></li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-yellow-700 to-yellow-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">New Modem Still Not Working?</h3>
            <p className="mt-2 text-yellow-200 max-w-lg mx-auto">Our technicians can help configure your new modem remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-yellow-700 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working-after-changing-router", title: "After Changing Router", desc: "Fix internet after router swap." },
                { href: "/router-not-connecting-to-modem", title: "Router-Modem Issue", desc: "Fix modem-router connection." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/arris-modem-not-connecting-to-internet", title: "Arris Modem Fix", desc: "Fix Arris modem issues." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
