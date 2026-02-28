import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Not Working After Storm? Fix Guide (2026)",
  description: "Internet stopped working after a thunderstorm? Check for line damage, surge damage, ISP outages, and restore connectivity with this recovery guide.",
  alternates: { canonical: "/internet-not-working-after-storm" },
  openGraph: { title: "Internet Not Working After Storm — Fix Guide", description: "Fix internet after a storm.", type: "article", url: "https://techsupport4.com/internet-not-working-after-storm" },
  twitter: { card: "summary_large_image", title: "Post-Storm Internet Fix | TechSupport4", description: "Internet not working after storm — fix guide." },
};

const faqs = [
  { q: "Can a thunderstorm damage my internet equipment?", a: "Yes. Lightning strikes can damage: (1) Modem/router via power surge through the electrical outlet, (2) Modem via surge through the coaxial cable (cable internet), (3) Ethernet ports via surge through phone/cable lines, (4) ONT device (fiber), (5) Outside wiring — the ISP's line from the pole/underground to your house." },
  { q: "How long does it take ISPs to fix storm damage?", a: "Depends on severity: (1) Simple ISP-side reboot: 1-4 hours, (2) Local node equipment damage: 4-24 hours, (3) Cable/line damage to your house: 1-3 days (technician dispatch needed), (4) Major infrastructure damage (widespread): 1-7 days. During widespread storms, ISPs prioritize by number of customers affected." },
  { q: "Should I unplug my modem during a storm?", a: "YES — unplugging is the best protection against lightning damage. Surge protectors help with small surges but can't protect against a direct or nearby lightning strike. Unplug: (1) Modem/router from power, (2) Coaxial cable from modem (lightning can travel through cable lines), (3) Ethernet cables from computers." },
  { q: "My modem/router survived but internet still doesn't work — why?", a: "Even if your equipment is fine, the ISP's infrastructure may be damaged: (1) Neighborhood node/amplifier struck by lightning, (2) Utility pole wires damaged by wind/falling trees, (3) Underground cable flooded with water, (4) ISP's central office equipment affected. Check your ISP's outage page — this is their problem to fix." },
  { q: "Will my ISP replace storm-damaged equipment for free?", a: "If you rent the modem from your ISP (most cable companies), yes — they'll replace it at no charge. If you own your modem, it's your responsibility. Some homeowner's/renter's insurance policies cover storm damage to electronics — check your policy. Keep receipts for any equipment you purchase." },
];

export default function InternetNotWorkingAfterStorm() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Not Working After Storm — Fix Guide", description: "Fix internet after a storm.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Storm</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Storm Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Not Working After Storm?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Thunderstorm knocked out your internet? Check for surge damage, ISP outages, and restore connectivity step by step.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">After a storm passes, power comes back — but the internet doesn&apos;t. This is incredibly common. Storms can damage equipment, knock out ISP infrastructure, and create power surge problems. Here&apos;s how to systematically get back online.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Check for ISP Outage</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Use your <strong>phone&apos;s cellular data</strong> to check your ISP&apos;s outage page</li>
            <li>Check <strong>Downdetector.com</strong> for your ISP</li>
            <li>Call your ISP&apos;s automated outage line — they usually announce known storm-related outages</li>
            <li>Check <strong>social media</strong> — neighbors may have posted about outages</li>
            <li>If there&apos;s a widespread outage, <strong>wait for ISP to fix it</strong> — your home equipment may be fine</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Proper Power Cycle</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug everything:</strong> modem, router, any switches/access points</li>
            <li>Wait <strong>2 full minutes</strong> (longer than usual to let capacitors fully drain)</li>
            <li>Plug in <strong>modem FIRST</strong> → wait until all lights stabilize (3-5 minutes)</li>
            <li>Then plug in <strong>router</strong> → wait until WiFi light is on (2 minutes)</li>
            <li>Test internet connection</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Inspect for Physical Damage</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Modem/router won&apos;t turn on:</strong> Power supply may be fried — try a different outlet, check for burning smell</li>
            <li><strong>Lights are abnormal:</strong> All lights blinking or certain lights not coming on may indicate hardware damage</li>
            <li><strong>Check coaxial cable (cable internet):</strong> Make sure the cable from the wall is securely connected, not damaged</li>
            <li><strong>Check outside line:</strong> Look for downed wires, fallen tree branches on cables (do NOT touch fallen wires — call ISP)</li>
            <li><strong>Check ONT (fiber internet):</strong> ONT box may need power cycle or battery replacement</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Check Surge Protector</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>If your equipment was on a surge protector, check the <strong>protection indicator light</strong></li>
            <li>If the protection light is <strong>off</strong>, the surge protector absorbed a spike and is used up — <strong>replace it</strong></li>
            <li>Try plugging the modem/router directly into the wall outlet to test if the surge protector is the issue</li>
            <li>Note: surge protectors protect against <strong>small surges only</strong> — a nearby lightning strike can overwhelm them</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Contact Your ISP</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If everything on your end looks fine but internet still doesn&apos;t work:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Call your ISP and report the outage</li>
            <li>Ask them to <strong>send a refresh signal</strong> to your modem (remote re-provisioning)</li>
            <li>If that doesn&apos;t work, request a <strong>technician</strong> to check the line to your house</li>
            <li>If your rented modem is damaged, ISP will <strong>replace it for free</strong></li>
            <li>Ask about <strong>service credits</strong> for the downtime — most ISPs provide credits for extended outages</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Damaged Equipment — What to Replace</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Symptom</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Likely Damaged</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Action</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Modem won&apos;t power on</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power supply or modem</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Contact ISP for replacement</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Router turns on but no WiFi</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi radio damaged</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Replace router</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Ethernet ports dead</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Ethernet controller surge</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Replace device or use USB adapter</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">ONT lights off</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">ONT power or battery</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Contact fiber ISP</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention for Future Storms</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug networking equipment</strong> before storms — both from power AND coaxial/phone lines</li>
            <li>Use a <strong>UPS (Uninterruptible Power Supply)</strong> with surge protection</li>
            <li>Install a <strong>whole-home surge protector</strong> at the breaker panel</li>
            <li>Use a <strong>coaxial surge protector</strong> on the cable line entering your house</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Internet Still Down After the Storm?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help diagnose damage and coordinate with your ISP.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working-after-power-outage", title: "After Power Outage", desc: "Fix internet after outage." },
                { href: "/verizon-fios-no-internet-after-storm", title: "Fios After Storm", desc: "Fix Verizon Fios storm damage." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
