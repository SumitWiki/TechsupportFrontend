import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Xfinity Internet Not Working? 9 Fixes That Work (2026 Guide)",
  description: "Xfinity internet not working? Fix no connection, slow speeds, outages, and modem issues on Comcast Xfinity with our step-by-step 2026 guide.",
  alternates: { canonical: "/xfinity-internet-not-working" },
  openGraph: { title: "Xfinity Internet Not Working — 9 Proven Fixes", description: "Fix Xfinity internet issues fast.", type: "article", url: "https://techsupport4.com/xfinity-internet-not-working" },
  twitter: { card: "summary_large_image", title: "Xfinity Internet Fix | TechSupport4", description: "9 fixes for Xfinity internet not working." },
};

const faqs = [
  { q: "Why is my Xfinity internet not working?", a: "Common causes include: ISP outage in your area, modem/gateway needing a restart, loose coaxial cable, overdue bill suspending service, DNS issues, or hardware failure on older XB6/XB7 gateways. Check the Xfinity Status Center first at xfinity.com/support/status." },
  { q: "How do I check if Xfinity has an outage in my area?", a: "Use the Xfinity app → Account → check for outage alerts, visit xfinity.com/support/status, or check downdetector.com/status/xfinity. Xfinity also sends text alerts if you've opted in to notifications." },
  { q: "How long does an Xfinity outage usually last?", a: "Minor outages typically resolve in 30 minutes to 2 hours. Major outages (storm damage, fiber cuts) can last 4-24 hours. Planned maintenance windows are usually late night (2-5 AM) and last 15-30 minutes." },
  { q: "Should I restart my Xfinity modem or call support first?", a: "Always restart first — unplug the gateway for 60 seconds, plug back in, wait 10 minutes. This fixes 70%+ of issues. If it still doesn't work after restart AND there's no outage reported, then call 1-800-XFINITY." },
  { q: "What does it mean when my Xfinity gateway shows solid red light?", a: "A solid red light means no internet connection is detected. This could be an area outage, a signal issue with the coaxial cable, or a hardware problem. Try a restart first, check for outages, then contact Xfinity if it persists." },
];

export default function XfinityInternetNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Xfinity Internet Not Working — 9 Proven Fixes", description: "Complete guide to fix Xfinity internet issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/internet-not-working" className="hover:text-white transition">Internet Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Xfinity</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Xfinity / Comcast Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Xfinity Internet Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">9 proven fixes to restore your Comcast Xfinity internet — outages, slow speeds, no connection, and gateway issues. Common in New York, California &amp; Texas users.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>14 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Xfinity by Comcast serves over 32 million customers across the US, making it the largest cable internet provider. When your Xfinity internet stops working, it can mean anything from a neighborhood outage to a simple cable issue. This guide walks you through every fix — from the quickest checks to advanced troubleshooting.</p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
            <p className="text-blue-800 dark:text-blue-300 font-semibold mb-2">⚡ Quick Fix Checklist</p>
            <ol className="text-blue-700 dark:text-blue-300 text-sm space-y-1 list-decimal pl-5">
              <li>Check Xfinity outage map first</li>
              <li>Restart your gateway (unplug 60 seconds)</li>
              <li>Check coaxial cable connections</li>
              <li>Verify billing status</li>
              <li>Flush DNS and reset network</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Why Xfinity Internet Stops Working</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Xfinity internet can stop working for several reasons. Understanding the cause helps you pick the right fix:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>ISP outage</strong> — Comcast infrastructure issue in your area (most common)</li>
            <li><strong>Gateway crash</strong> — XB6, XB7, or XB8 needs restart</li>
            <li><strong>Coaxial cable issue</strong> — Loose, damaged, or corroded connectors</li>
            <li><strong>Account suspension</strong> — Overdue bill or exceeded data cap</li>
            <li><strong>DNS failure</strong> — Xfinity DNS servers not responding</li>
            <li><strong>Firmware update</strong> — Gateway updating in the background</li>
            <li><strong>Hardware failure</strong> — Aging gateway (3+ years old) failing</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check the Xfinity Outage Map</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Before troubleshooting anything, check if Xfinity has an outage in your area. This saves you hours of unnecessary work.</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Open <strong>Xfinity app</strong> → tap your account icon</li>
            <li>Look for any <strong>outage alerts</strong> at the top</li>
            <li>Or visit <strong>xfinity.com/support/status</strong></li>
            <li>Also check <a href="https://downdetector.com/status/xfinity/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector for Xfinity</a></li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 If there&apos;s an outage, all you can do is wait. Xfinity typically resolves minor outages within 1-2 hours.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart Your Xfinity Gateway</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">A proper restart fixes the majority of Xfinity issues:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li><strong>Unplug</strong> the power cord from the back of the gateway</li>
            <li>Wait <strong>60 full seconds</strong> (don&apos;t rush this)</li>
            <li><strong>Plug back in</strong> the power cord</li>
            <li>Wait <strong>10-15 minutes</strong> for full boot and ISP authentication</li>
            <li>Check if the light turns <strong>solid white</strong> (normal operation)</li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Alternatively, open the <strong>Xfinity app → Internet → Restart Gateway</strong> for a software-level restart.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Coaxial Cable Connection</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>The <strong>coaxial cable</strong> (thick round cable) connects your gateway to the wall outlet</li>
            <li>Ensure it&apos;s <strong>finger-tight</strong> at both ends — the gateway port and wall jack</li>
            <li>Look for <strong>bends, kinks, or damage</strong> on the cable</li>
            <li>Try a <strong>different coaxial cable</strong> if you have one</li>
            <li>If using a <strong>splitter</strong>, try connecting directly to the wall without it</li>
            <li>Check for <strong>corroded connectors</strong> — green oxidation means replace the cable</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Your Billing Status</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Xfinity may suspend your service if your account has issues:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Log into <strong>xfinity.com/myaccount</strong></li>
            <li>Check for <strong>overdue balance</strong> — unpaid bills suspend service after the grace period</li>
            <li>Look for <strong>data usage warnings</strong> — exceeding your data cap may cause throttling</li>
            <li>Verify the <strong>gateway is listed as active</strong> on your account</li>
            <li>If you recently <strong>moved</strong>, confirm your service transfer completed</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Flush DNS Cache</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If specific websites don&apos;t load but internet appears connected, DNS may be the issue:</p>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /release</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /renew</p>
            <p className="text-slate-700 dark:text-slate-300 mt-3"><span className="text-green-600 dark:text-green-400"># Mac</span></p>
            <p className="text-slate-800 dark:text-slate-200">sudo dscacheutil -flushcache</p>
            <p className="text-slate-800 dark:text-slate-200">sudo killall -HUP mDNSResponder</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">You can also switch to <strong>Google DNS (8.8.8.8)</strong> or <strong>Cloudflare DNS (1.1.1.1)</strong> for faster, more reliable name resolution.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Reset Network Settings on Your Device</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows:</strong> Settings → Network &amp; Internet → Advanced → Network Reset</li>
            <li><strong>Mac:</strong> System Preferences → Network → select WiFi → delete, re-add</li>
            <li><strong>iPhone/iPad:</strong> Settings → General → Transfer or Reset → Reset Network Settings</li>
            <li><strong>Android:</strong> Settings → System → Reset → Reset Network Settings</li>
            <li>After reset, <strong>reconnect to your WiFi</strong> with the password from the Xfinity app</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Check for Gateway Overheating</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Xfinity gateways (especially the <strong>XB6</strong>) are known to overheat</li>
            <li>Place your gateway in an <strong>open, well-ventilated area</strong></li>
            <li>Avoid placing it <strong>inside cabinets, closets, or on carpet</strong></li>
            <li>If the gateway feels <strong>hot to the touch</strong>, unplug for 30 minutes to cool down</li>
            <li>Consider placing it <strong>on its side</strong> for better air circulation</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset the Gateway (Last Resort)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Find the <strong>pinhole reset button</strong> on the back of the gateway</li>
            <li>Insert a paperclip and <strong>hold for 30 seconds</strong></li>
            <li>Release and wait <strong>15-20 minutes</strong> for full reactivation</li>
            <li>The gateway will re-authenticate with Xfinity&apos;s network</li>
          </ol>
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-8">⚠️ Warning: This erases your WiFi name and password. You&apos;ll need to reconfigure via the Xfinity app.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Xfinity Support or Replace Gateway</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If none of the above fixes work:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Call <strong>1-800-XFINITY (1-800-934-6489)</strong></li>
            <li>Use <strong>Xfinity app chat</strong> for faster response times</li>
            <li>Visit a <strong>local Xfinity store</strong> to swap your gateway (free with rental)</li>
            <li>Request the latest <strong>XB8 gateway</strong> for WiFi 6E support</li>
          </ul>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Alternatively, you can <strong>buy your own modem</strong> (Motorola MB8600, ARRIS SB8200) to save the $14/month gateway rental fee.</p>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
            <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">🌍 Common Xfinity Outage Areas</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">Xfinity internet issues are most commonly reported in <strong>New York, California, Texas, Florida, Illinois, Pennsylvania, and Georgia</strong>. Peak outage times are typically 6-10 PM during high network traffic.</p>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Xfinity Internet Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our certified technicians can diagnose and fix your Xfinity connection remotely in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/xfinity-router-not-working", title: "Xfinity Router Fix", desc: "Fix xFi gateway and router issues." },
                { href: "/xfinity-router-blinking-orange-light", title: "Xfinity Orange Light", desc: "Fix blinking orange light on gateway." },
                { href: "/xfinity-modem-red-light-blinking", title: "Xfinity Red Light Fix", desc: "Fix red light blinking on modem." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "General internet troubleshooting guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
