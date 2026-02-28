import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Verizon FiOS No Internet After Storm? Fix Guide (2026)",
  description: "Verizon FiOS no internet after storm? Fix ONT power loss, fiber damage, battery backup, and reconnection issues after severe weather step by step.",
  alternates: { canonical: "/verizon-fios-no-internet-after-storm" },
  openGraph: { title: "Verizon FiOS No Internet After Storm? Fix Guide", description: "Fix FiOS after storm damage.", type: "article", url: "https://techsupport4.com/verizon-fios-no-internet-after-storm" },
  twitter: { card: "summary_large_image", title: "Fix FiOS After Storm | TechSupport4", description: "Verizon FiOS down after storm — recovery guide." },
};

const faqs = [
  { q: "Can a storm damage Verizon FiOS?", a: "Yes — while fiber optic cable is more resilient than copper, storms can: (1) Knock out power to the ONT, (2) Cause fallen trees to damage the fiber line, (3) Flood the ONT box, (4) Cause power surges that damage equipment, (5) Knock out Verizon's local equipment (node/CO). Fiber itself is immune to lightning/electrical interference." },
  { q: "FiOS ONT has no lights after storm — what do I do?", a: "The ONT likely lost power. Check: (1) Is a power outlet nearby working? (2) Is the ONT's power supply plugged in and getting power? (3) If you've had a long outage, the battery backup (if present) may be dead — replace it or bypass it by plugging ONT directly into an outlet. (4) If power is on but no lights, the ONT may be damaged — call Verizon." },
  { q: "How long does FiOS take to come back after a storm?", a: "If just your home's power was out: once power returns, the ONT should reconnect within 5-10 minutes. If Verizon equipment was damaged: varies widely — could be hours to days. Check Verizon outage map and your My Verizon app for estimated restoration times." },
  { q: "Does Verizon FiOS ONT have a battery backup?", a: "Older FiOS installations have a battery backup unit (BBU) for phone service continuity during outages. The BBU does NOT power internet — only voice service. Newer installations may not have a battery at all. For internet during outages, you need your own UPS (Uninterruptible Power Supply)." },
  { q: "Should I use a UPS with my FiOS equipment?", a: "Strongly recommended. A UPS (like APC or CyberPower, $50-100) protects the ONT and router from power surges and keeps them running during short outages. Connect: wall outlet → UPS → ONT + Router. This prevents storm-related equipment damage and keeps internet during brief outages." },
];

export default function VerizonFiosAfterStorm() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Verizon FiOS No Internet After Storm — Fix Guide", description: "Fix FiOS after storm damage.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-24", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">FiOS After Storm</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Storm Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Verizon FiOS No Internet After Storm? Recovery Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Storm knocked out your Verizon FiOS? Here&apos;s how to check the ONT, restore power, and get internet working again after severe weather.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">After a severe storm, Verizon FiOS internet can go down due to power outages, fiber line damage, or Verizon&apos;s local equipment being affected. Here&apos;s a systematic approach to diagnosing and restoring your FiOS connection post-storm.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Check Your Home&apos;s Power</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Verify power is restored to your home. Check the outlet the ONT is plugged into. Check your circuit breaker — a surge may have tripped it. If the power outlet works but the ONT has no lights, the power adapter may be damaged by a surge.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Check the ONT</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the ONT (basement, garage, or outside)</li>
            <li>Check if ONT lights are on — Power, Data, Network</li>
            <li>If no lights → check power adapter and outlet</li>
            <li>If battery backup is present and beeping → replace battery or bypass it</li>
            <li>Unplug ONT power for <strong>30 seconds</strong> → replug → wait 5 minutes</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Check for Verizon Outage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Use phone cellular data: check <strong>My Verizon app</strong> → Support → Network Status. Also check downdetector.com. After major storms, Verizon typically has widespread outages and posts restoration estimates.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Power Cycle Everything</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug ONT and router</li>
            <li>Wait 60 seconds</li>
            <li>Plug in <strong>ONT first</strong> → wait 5 minutes</li>
            <li>Plug in <strong>router</strong> → wait 3 minutes</li>
            <li>Test internet</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Inspect for Physical Damage</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check the fiber line running to your house — is it intact?</li>
            <li>Look for fallen trees or branches on/near the fiber line</li>
            <li>Check the ONT box for water damage (especially outdoor units)</li>
            <li>Check for burn marks on power adapter or outlets (surge damage)</li>
            <li>Do NOT attempt to repair fiber lines yourself — call Verizon</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Handle Battery Backup</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If the ONT battery backup unit (BBU) is beeping, the battery is dead. You can either replace the battery (12V sealed lead acid, available on Amazon) or <strong>bypass it</strong> by disconnecting the battery and connecting the ONT directly to wall power. The BBU only powers phone — internet requires wall power regardless.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 7: Contact Verizon</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Call <strong>1-800-VERIZON</strong>. After storms, wait times are longer — try the My Verizon app chat. Tell them about the storm and describe ONT lights. They can: check fiber signal remotely, reset the ONT remotely, and dispatch a technician for physical damage.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention: Protect Equipment from Storms</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>UPS (Uninterruptible Power Supply):</strong> Protects ONT and router from surges, keeps them running during brief outages ($50-100)</li>
            <li><strong>Surge protector:</strong> At minimum, use a good surge protector — not a basic power strip</li>
            <li><strong>Whole-home surge protection:</strong> Installed at circuit breaker by an electrician</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">FiOS Still Down After Storm?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help troubleshoot FiOS recovery.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/verizon-fios-router-not-working", title: "FiOS Router Not Working", desc: "General FiOS troubleshooting." },
                { href: "/internet-not-working-after-storm", title: "Internet After Storm", desc: "Fix any ISP after storms." },
                { href: "/internet-not-working-after-power-outage", title: "After Power Outage", desc: "Restore internet after outage." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete troubleshooting guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
