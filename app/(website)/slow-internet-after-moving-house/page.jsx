import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Slow Internet After Moving House? Fix Guide (2026)",
  description: "Internet slow after moving to a new house? Fix ISP setup issues, wiring problems, router placement, and optimize speed at your new address.",
  alternates: { canonical: "/slow-internet-after-moving-house" },
  openGraph: { title: "Slow Internet After Moving — Fix Guide", description: "Fix slow internet in new house.", type: "article", url: "https://techsupport4.com/slow-internet-after-moving-house" },
  twitter: { card: "summary_large_image", title: "New House Internet Fix | TechSupport4", description: "Slow internet after moving house — fix guide." },
};

const faqs = [
  { q: "Why is internet slower in my new house?", a: "Many possible reasons: (1) Your new area may have slower ISP infrastructure, (2) Old/damaged wiring inside the house, (3) Router placement is poor (far from where you use devices, hidden in closet), (4) New plan may be different speed tier, (5) ISP hasn't fully provisioned the service yet, (6) WiFi interference from neighbors' networks in dense areas." },
  { q: "How do I check what internet speed I should be getting?", a: "Check your ISP account or contract for the subscribed speed. Then test: (1) Run a speed test at speedtest.net using Ethernet (wired), (2) Compare the result to your plan. If wired speed matches your plan but WiFi is slow, it's a WiFi issue, not an ISP issue. If wired speed is also slow, contact your ISP." },
  { q: "Could old house wiring cause slow internet?", a: "Yes, especially: (1) Old coaxial cable (cable internet) — corroded connectors, damaged cable, too many splitters, (2) Old phone wiring (DSL) — deteriorated copper wiring reduces bandwidth, (3) Damaged Ethernet ports/wiring in walls. Ask your ISP for a technician to check the line quality to your house." },
  { q: "Where should I put my router in a new house?", a: "Optimal placement: (1) Central location on the main floor, (2) Elevated (on a shelf, not on the floor), (3) Away from walls and metal objects, (4) Away from microwave, baby monitors, cordless phones, (5) Not in a closet or cabinet, (6) For multi-story homes, position between floors or use a mesh system." },
  { q: "Should I use the same ISP or switch after moving?", a: "Check what's available at your new address — you may have better options. Compare: (1) Speed available at your address (not just advertised speeds), (2) Check if fiber is available (faster than cable/DSL), (3) Read neighborhood reviews on speed/reliability, (4) Consider bundling options. Many ISPs offer promotions for new customers." },
];

export default function SlowInternetAfterMovingHouse() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Slow Internet After Moving House — Fix Guide", description: "Fix internet speed at new house.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Slow After Moving</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Internet Speed Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Slow Internet After Moving House?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Moved to a new house and internet is slow? Fix ISP setup, optimize router placement, check wiring, and maximize speed.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You moved into a new house, set up internet, and it&apos;s noticeably slower than your old place. This is extremely common. The issue could be the ISP&apos;s infrastructure in your new area, old house wiring, poor router placement, or WiFi interference. Here&apos;s how to diagnose and fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Run a Speed Test (Wired)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect your computer <strong>directly to the modem/router with Ethernet</strong></li>
            <li>Go to <strong>speedtest.net</strong></li>
            <li>Run test and compare to your <strong>subscribed plan speed</strong></li>
            <li>If wired speed matches your plan → the issue is <strong>WiFi</strong>, not your ISP</li>
            <li>If wired speed is also slow → the issue is <strong>ISP or wiring</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Check Your ISP Plan</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into your ISP account and verify the <strong>speed tier</strong> at your new address</li>
            <li>Some plans have <strong>lower maximum speeds</strong> depending on location</li>
            <li>Check if your new address supports the same technology (fiber vs cable vs DSL)</li>
            <li>If you had <strong>fiber at your old house</strong> but only <strong>DSL at the new one</strong>, slower speeds are expected</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Optimize Router Placement</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Place router in a <strong>central location</strong> in your home</li>
            <li>Keep it <strong>elevated</strong> (on a shelf, not on the floor)</li>
            <li><strong>Don&apos;t hide it</strong> in a closet, cabinet, or behind the TV</li>
            <li>Keep away from <strong>thick walls, metal objects, microwaves, baby monitors</strong></li>
            <li>For <strong>multi-story homes</strong>: between floors if possible, or use a <strong>mesh WiFi system</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Check WiFi Interference</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In an <strong>apartment/close neighbors</strong>, there&apos;s more WiFi channel congestion</li>
            <li>Download a WiFi analyzer app (WiFi Analyzer on Android)</li>
            <li>Check which <strong>channels are least crowded</strong></li>
            <li>In router settings, <strong>manually set the channel</strong> to the least used one</li>
            <li>Use <strong>5 GHz band</strong> for devices close to the router (less interference, faster speeds)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Check House Wiring</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Coaxial cable (cable internet):</strong> Old/corroded connectors, too many splitters, or damaged cable can reduce signal</li>
            <li><strong>Phone wiring (DSL):</strong> Old copper wiring degrades over time</li>
            <li>Check the <strong>cable entry point</strong> to the house — look for damage</li>
            <li>Ask ISP to <strong>check line signal levels</strong> at your new address</li>
            <li>Request a <strong>technician visit</strong> — they can replace bad connectors and test signal quality</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Consider Mesh WiFi or Extenders</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If your new house is larger or has a different layout:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Mesh WiFi system</strong> (Google Nest WiFi, eero, Orbi): Best option for large homes — seamless coverage everywhere</li>
            <li><strong>WiFi extender:</strong> Budget option, but halves bandwidth per hop</li>
            <li><strong>MoCA adapter:</strong> Uses existing coaxial wiring for wired backhaul — great for houses with coax in every room</li>
            <li><strong>Powerline adapter:</strong> Uses electrical wiring — works in some houses, depends on wiring quality</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 7: Upgrade Your Plan or ISP</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check if <strong>fiber internet</strong> is available at your new address — it&apos;s the fastest and most reliable</li>
            <li>Compare ISPs: use <strong>broadbandnow.com</strong> or <strong>allconnect.com</strong> to see all options at your address</li>
            <li>Look for <strong>new customer promotions</strong> — often cheaper than transferring service</li>
            <li>If you work from home, consider a <strong>higher speed tier</strong> or a <strong>business plan</strong> (often more consistent)</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Need Help Optimizing?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can analyze your setup and maximize internet speed in your new home.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-slow-at-night-fix", title: "Slow at Night", desc: "Fix peak-hour slowdown." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but can't browse." },
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
