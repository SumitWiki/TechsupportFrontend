import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Comcast Internet Not Working? Complete Fix Guide (2026)",
  description: "Comcast Xfinity internet not working? Fix modem issues, outages, slow speeds, and connection drops on Comcast step by step.",
  alternates: { canonical: "/comcast-internet-not-working" },
  openGraph: { title: "Comcast Internet Not Working — Fix Guide", description: "Fix Comcast internet issues.", type: "article", url: "https://techsupport4.com/comcast-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Comcast Fix | TechSupport4", description: "Comcast internet not working — fix guide." },
};

const faqs = [
  { q: "Is Comcast the same as Xfinity?", a: "Yes — Xfinity is the consumer brand name for Comcast's internet, TV, and phone services. Comcast is the parent company. When you search 'Comcast internet not working,' you're troubleshooting the same service as 'Xfinity internet not working.' The equipment, support numbers, and troubleshooting steps are identical." },
  { q: "Why is my Comcast internet not working?", a: "Top causes: (1) Service outage — check status.xfinity.com, (2) Gateway/modem needs restart, (3) Coaxial cable issue, (4) Account suspended due to payment, (5) Overloaded gateway during peak hours, (6) Firmware update in progress. The Xfinity app can diagnose most issues automatically." },
  { q: "How do I check if Comcast has an outage?", a: "3 ways: (1) Xfinity app → Account → Internet → Check for outages (use mobile data), (2) Visit status.xfinity.com or downdetector.com/status/comcast-xfinity, (3) Call 1-800-XFINITY — the automated system will tell you if there's a known outage. Outages during storms are common." },
  { q: "How do I get Comcast to fix my internet?", a: "Options: (1) Run diagnostics via Xfinity app first — it can restart equipment remotely, (2) Call 1-800-934-6489, (3) Chat at xfinity.com/support, (4) Schedule a technician visit (free if the issue is on Comcast's end). If you've been having repeated issues, ask about credits on your bill." },
  { q: "My Comcast modem keeps resetting — what do I do?", a: "Frequent modem resets indicate: (1) Overheating — ensure proper ventilation, (2) Signal issues — weak or noisy signal from the cable line, (3) Failing hardware — request a replacement from Comcast, (4) Firmware bug — Comcast pushes firmware updates that sometimes cause issues. Call and ask for a signal level check." },
];

export default function ComcastInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Comcast Internet Not Working — Fix Guide", description: "Fix Comcast/Xfinity internet.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Comcast / Xfinity</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Comcast / Xfinity Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Comcast Internet Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Comcast (Xfinity) internet down? Fix outages, modem issues, slow speeds, and connection problems.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6"><strong>Comcast</strong> and <strong>Xfinity</strong> are the same service — Xfinity is just Comcast&apos;s consumer brand. If your Comcast internet stopped working, this guide covers every fix from quick restarts to signal-level diagnostics.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for Comcast/Xfinity Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Xfinity app</strong> on your phone (using mobile data)</li>
            <li>Go to <strong>Account → Internet → Check for outages</strong></li>
            <li>Or visit <strong>status.xfinity.com</strong> or <strong>downdetector.com/status/comcast-xfinity</strong></li>
            <li>If outage confirmed → wait for Comcast to fix it</li>
            <li>You can sign up for <strong>text notifications</strong> when service is restored</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Your Equipment</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug</strong> the Xfinity gateway (or modem + router)</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li><strong>Plug back in</strong> → wait <strong>10-15 minutes</strong></li>
            <li>Or use the <strong>Xfinity app → Internet → Restart Gateway</strong></li>
            <li>The app method sends a reset signal from Comcast&apos;s servers — more thorough</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Cables</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Coaxial cable:</strong> Tight at wall and gateway. No kinks, bends, or damage</li>
            <li><strong>Ethernet cable:</strong> If using separate router, check modem-to-router cable</li>
            <li><strong>Power cable:</strong> Try different outlet — avoid power strips for the modem</li>
            <li>Replace any <strong>old or damaged cables</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Comcast Account Status</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>xfinity.com/myaccount</strong></li>
            <li>Check for <strong>overdue payments</strong> — service can be suspended for unpaid bills</li>
            <li>Check for <strong>data cap usage</strong> (1.2 TB default)</li>
            <li>Verify gateway is <strong>listed as active</strong> on your account</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Run Xfinity App Diagnostics</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Xfinity app</strong></li>
            <li>Go to <strong>Internet → Troubleshoot</strong></li>
            <li>The app will <strong>automatically check</strong> signal levels, gateway status, and network health</li>
            <li>It can <strong>send a refresh signal</strong> to your modem</li>
            <li>Follow any recommended steps</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Bypass Router — Test Modem Directly</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Connect a computer <strong>directly to the modem/gateway via Ethernet</strong></li>
            <li>Restart the modem</li>
            <li>If internet works → your <strong>router is the issue</strong></li>
            <li>If still no internet → <strong>modem or Comcast signal issue</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Check Signal Levels</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">For Xfinity gateways, log into <strong>10.0.0.1</strong> (admin/password) and check signal levels:</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Signal</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Good Range</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Problem If</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Downstream Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">-7 to +7 dBmV</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Outside this range</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Upstream Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">35 to 49 dBmV</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Above 50 dBmV</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">SNR (Signal-to-Noise)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Above 33 dB</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Below 30 dB</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If signal levels are bad, a Comcast technician needs to check the line. This could be a <strong>bad splitter, damaged cable, or neighborhood node issue</strong>.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Replace Equipment</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">If your Comcast modem/gateway is old (3+ years), request a replacement. Visit a <strong>Comcast/Xfinity store</strong> or call <strong>1-800-934-6489</strong>. Ask for the <strong>XB8 gateway</strong> (latest, WiFi 6E). If you own your modem, make sure it supports <strong>DOCSIS 3.1</strong> for best speeds.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Comcast Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose Comcast connection issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/xfinity-router-not-working", title: "Xfinity Router Fix", desc: "Full Xfinity gateway guide." },
                { href: "/xfinity-router-blinking-orange-light", title: "Xfinity Orange Light", desc: "Fix blinking orange light." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router troubleshooting." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
