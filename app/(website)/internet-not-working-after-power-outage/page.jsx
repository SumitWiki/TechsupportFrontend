import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Internet Not Working After Power Outage? Fix Guide (2026)",
  description: "Internet stopped working after a power outage? Fix modem, router, ONT boot sequence, ISP re-provisioning, and restore connectivity step by step.",
  alternates: { canonical: "/internet-not-working-after-power-outage" },
  openGraph: { title: "Internet Not Working After Power Outage — Fix Guide", description: "Fix internet after power outage.", type: "article", url: "https://techsupport4.com/internet-not-working-after-power-outage" },
  twitter: { card: "summary_large_image", title: "Post-Outage Internet Fix | TechSupport4", description: "Internet not working after power outage — fix guide." },
};

const faqs = [
  { q: "Why doesn't my internet work after a power outage?", a: "Power outages cause: (1) Modem/router boot order was wrong — modem must fully boot before router, (2) Power surge damaged equipment, (3) ISP equipment (on their end) is still offline, (4) DHCP lease expired and didn't renew properly, (5) ONT battery died (fiber), (6) Modem lost ISP provisioning and needs to re-register with the ISP." },
  { q: "In what order should I restart my equipment?", a: "Critical order: (1) Unplug everything, (2) Plug in MODEM first → wait 2-3 minutes until all lights are stable, (3) Then plug in ROUTER → wait 1-2 minutes, (4) If you have separate WiFi access points, plug those in last. The modem must establish an ISP connection before the router tries to get an IP address." },
  { q: "My modem lights are different after the outage — what do they mean?", a: "Normal: Power (solid), Online/Internet (solid), WiFi (blinking). Problem indicators: Online light flashing = trying to connect to ISP (wait 5 min, then call ISP). No lights = power supply may be damaged. All lights blinking = modem is rebooting/updating. DS/US lights blinking = establishing connection (normal during boot, give it 3-5 min)." },
  { q: "Should I replace my surge protector after a power outage?", a: "If there was a power surge (evidenced by other electronics being damaged), YES. Surge protectors have a limited number of surges they can absorb. After a large surge, the protection may be used up even if the indicator light is on. Replace surge protectors every 2-3 years or after any major power event." },
  { q: "Can a power outage permanently damage my router?", a: "Yes, power surges during outages (especially when power comes back on) can fry electronics. Signs of damage: router won't turn on, gets very hot, random rebooting, WiFi drops constantly. If your router survived but ISP modem didn't, contact your ISP for a replacement — they usually provide modems at no extra cost." },
];

export default function InternetNotWorkingAfterPowerOutage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Internet Not Working After Power Outage — Fix Guide", description: "Fix internet after power outage.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Power Outage</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Power Outage Recovery</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Internet Not Working After Power Outage?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Power came back but internet didn&apos;t? Fix the boot sequence, ISP reconnection, and equipment issues step by step.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Power outages are a leading cause of internet problems — not because of the outage itself, but because equipment doesn&apos;t boot up properly when power returns. The #1 fix is restarting everything in the right order.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Proper Boot Sequence (Most Important)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug everything</strong> — modem, router, any switches or access points</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in <strong>modem FIRST</strong> → wait until all lights are <strong>solid and stable</strong> (2-3 minutes)</li>
            <li>Then plug in <strong>router</strong> → wait until WiFi light is on (1-2 minutes)</li>
            <li>Plug in any <strong>additional devices</strong> (mesh nodes, switches)</li>
            <li>Test internet on your device</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check for ISP Outage</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Power outage may have affected your <strong>ISP&apos;s local equipment</strong> too</li>
            <li>Check your ISP&apos;s <strong>outage page</strong> (use phone data): Comcast/Xfinity, Spectrum, AT&amp;T, Cox all have outage maps</li>
            <li>Check <strong>Downdetector.com</strong> for your ISP</li>
            <li>Call your ISP&apos;s automated system — they usually announce known outages</li>
            <li>If there&apos;s an ISP outage, <strong>wait for them to fix it</strong> — could be minutes to hours</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Fiber ONT (If Applicable)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you have fiber internet (Verizon Fios, AT&amp;T Fiber, Google Fiber), check the ONT box:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>ONT is usually in a closet, basement, or garage wall</li>
            <li>Check the <strong>power light</strong> on the ONT — if it&apos;s off, the ONT needs power</li>
            <li>If the ONT has a <strong>battery backup</strong>, the battery may have drained during the outage — unplug the battery and plug it back in</li>
            <li>Unplug ONT power for 30 seconds → plug back in → wait 3-5 minutes</li>
            <li>The ONT must boot up <strong>before</strong> you restart the router</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Modem Lights</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Normal</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Problem</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Off = no power / damaged</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">DS (Downstream)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Flashing = searching for signal</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">US (Upstream)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Flashing = can&apos;t send data</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Online/Internet</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Off/blinking = no ISP connection</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Release and Renew IP</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">On your computer, open <strong>Command Prompt as Administrator</strong>:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>ipconfig /release</p>
            <p>ipconfig /renew</p>
            <p>ipconfig /flushdns</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check for Surge Damage</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>If the router <strong>won&apos;t turn on</strong> — power supply may be fried. Try a different outlet or power adapter (if compatible)</li>
            <li>If the router turns on but <strong>gets very hot</strong> or <strong>randomly reboots</strong> — likely surge damage</li>
            <li>If the modem&apos;s Online light <strong>won&apos;t go solid</strong> after 10+ minutes — modem may be damaged, contact ISP for replacement</li>
            <li>Check your <strong>surge protector</strong> — if the protection indicator light is off, the surge protector is used up</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Prevention for Next Time</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Use a quality <strong>surge protector</strong> for all networking equipment</li>
            <li>Consider a <strong>UPS (Uninterruptible Power Supply)</strong> — keeps modem/router running during short outages</li>
            <li>Replace surge protectors <strong>every 2-3 years</strong></li>
            <li><strong>Unplug equipment</strong> if you know a storm is coming</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Internet Still Down After Power Outage?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose modem/router issues and coordinate with your ISP.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working-after-storm", title: "After Storm Fix", desc: "Fix internet after storms." },
                { href: "/verizon-fios-no-internet-after-storm", title: "Fios After Storm", desc: "Fix Verizon Fios outage." },
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
