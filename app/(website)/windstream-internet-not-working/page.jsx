import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Windstream Internet Not Working? Complete Fix Guide (2026)",
  description: "Windstream Kinetic internet or router not working? Fix DSL/fiber issues, modem problems, slow speeds, and no internet on Windstream step by step.",
  alternates: { canonical: "/windstream-internet-not-working" },
  openGraph: { title: "Windstream Internet Not Working — Fix Guide", description: "Fix Windstream internet issues.", type: "article", url: "https://techsupport4.com/windstream-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Windstream Fix | TechSupport4", description: "Windstream internet not working — fix guide." },
};

const faqs = [
  { q: "Why is my Windstream internet not working?", a: "Common causes: (1) Windstream outage, (2) DSL modem lost sync, (3) PPPoE credentials issue after reset, (4) Old wiring/splitters, (5) Missing DSL filters, (6) Account issue. Windstream's rural coverage means longer line distances, which can affect stability." },
  { q: "What is Windstream Kinetic?", a: "Kinetic is Windstream's internet brand. They offer DSL and fiber (Kinetic Gig) depending on your area. Fiber uses an ONT like Verizon/AT&T. DSL uses a modem connected to the phone line. Fiber is faster and more reliable. Check your bill or call 1-800-347-1991 to find out." },
  { q: "How do I restart my Windstream modem?", a: "Unplug power → wait 60 seconds → plug back in → wait 5-10 minutes for DSL to resync. The DSL light must go solid before internet works. For fiber, also restart the ONT by unplugging it for 30 seconds." },
  { q: "My Windstream DSL is very slow — why?", a: "DSL speed depends on distance from the exchange. If you're far from Windstream's DSLAM, speeds will be slower. Check line stats at 192.168.0.1 or 192.168.1.1 — look at sync rate and SNR margin. If SNR is below 6 dB, there's line noise. Request a line check from Windstream." },
  { q: "How do I contact Windstream support?", a: "Call 1-800-347-1991, visit windstream.com/support, or use the Kinetic app. For outage info, check windstream.com/outages. Request a technician for persistent line issues." },
];

export default function WindstreamInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Windstream Internet Not Working — Fix Guide", description: "Fix Windstream Kinetic internet.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Windstream</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Windstream Kinetic Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Windstream Internet Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix Windstream Kinetic DSL or fiber — modem sync, slow speeds, no internet, and connection problems.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Windstream (branded as <strong>Kinetic</strong>) provides internet primarily in <strong>rural and suburban areas</strong>. They offer DSL and fiber depending on your location. DSL connections are distance-sensitive. Here&apos;s how to fix every common issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Windstream Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Visit <strong>windstream.com/outages</strong></li>
            <li>Check <strong>downdetector.com/status/windstream</strong></li>
            <li>Call <strong>1-800-347-1991</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Your Modem/Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Unplug <strong>power</strong> from modem and router</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in <strong>modem first</strong> → wait until DSL light is solid (3-10 minutes)</li>
            <li>Plug in <strong>router</strong> → wait 2-3 minutes</li>
            <li>Test internet on a device</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check DSL Filters</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Every phone jack with a phone needs a <strong>DSL filter</strong></li>
            <li>The modem jack should <strong>NOT have a filter</strong></li>
            <li>Alarm systems and fax machines also need filters</li>
            <li>Missing or bad filters → <strong>line noise → lost DSL sync → no internet</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check PPPoE Credentials (After Reset)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you recently factory reset your Windstream modem:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>192.168.0.1</strong> or <strong>192.168.1.1</strong></li>
            <li>Login (check modem label for default credentials)</li>
            <li>Navigate to <strong>WAN/Internet Settings</strong></li>
            <li>Enter <strong>PPPoE username and password</strong> from your welcome letter</li>
            <li>If you don&apos;t have them, call <strong>1-800-347-1991</strong> — they can reset them</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Connection Cables</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Phone cable</strong> (DSL): from wall to modem. Check for damage</li>
            <li><strong>Ethernet cable</strong>: from modem to router (if separate)</li>
            <li>Try <strong>different cables</strong></li>
            <li>Try <strong>different phone jack</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Test at NID</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the <strong>Network Interface Device</strong> on outside of house</li>
            <li>Plug modem into <strong>test jack</strong></li>
            <li>If internet works → <strong>inside wiring issue</strong></li>
            <li>If no internet → <strong>Windstream&apos;s line issue</strong> — request technician</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Check DSL Line Stats</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>modem admin page</strong> (192.168.0.1 or 192.168.1.1)</li>
            <li>Check <strong>downstream sync rate</strong> — should be close to your plan speed</li>
            <li>Check <strong>SNR margin</strong> — at least 6 dB (10+ is better)</li>
            <li>Check <strong>attenuation</strong> — lower is better (high = long line distance)</li>
            <li>High CRC errors = <strong>noisy line — call Windstream</strong></li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Windstream Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose Windstream DSL and fiber issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/centurylink-router-not-working", title: "CenturyLink Fix", desc: "Fix CenturyLink router." },
                { href: "/frontier-internet-not-working", title: "Frontier Fix", desc: "Fix Frontier internet." },
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
