import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "AT&T Router Not Working? Complete Fix Guide (2026)",
  description: "AT&T router or BGW gateway not working? Fix broadband light issues, no internet, WiFi drops, and connection problems on AT&T Fiber and DSL step by step.",
  alternates: { canonical: "/att-router-not-working" },
  openGraph: { title: "AT&T Router Not Working — Fix Guide", description: "Fix AT&T router and gateway issues.", type: "article", url: "https://techsupport4.com/att-router-not-working" },
  twitter: { card: "summary_large_image", title: "AT&T Router Fix | TechSupport4", description: "AT&T router not working — complete fix guide." },
};

const faqs = [
  { q: "Why is my AT&T router not working?", a: "Common causes: (1) AT&T outage in your area, (2) Gateway needs restart, (3) Broadband light is red (no sync), (4) Fiber ONT issue, (5) PPPoE credentials lost after reset, (6) DSL line quality degradation, (7) Account issue. The Smart Home Manager app can help diagnose." },
  { q: "What do the lights on my AT&T gateway mean?", a: "BGW210/BGW320 gateways: Broadband solid green = connected. Broadband flashing green = trying to connect. Broadband red = no internet. Service solid green = working. WiFi solid green = enabled. Power solid green = on. If Broadband is red, restart the gateway and check fiber/DSL line." },
  { q: "How do I restart my AT&T gateway?", a: "Method 1: Unplug power → wait 30 seconds → replug → wait 10 minutes. Method 2: Smart Home Manager app → Network → Gateway → Restart. Method 3: Press the small reset button briefly (NOT the red reset hole — that's factory reset). Wait for all lights to turn solid green." },
  { q: "AT&T Fiber vs DSL — does troubleshooting differ?", a: "Slightly: AT&T Fiber uses an ONT (Optical Network Terminal — usually a white box on the wall). If fiber internet is down, check ONT lights and power too. DSL uses the phone line — check for DSL filters on ALL phone jacks. But gateway troubleshooting is the same for both." },
  { q: "How do I contact AT&T for internet issues?", a: "Call 1-800-288-2020, use Smart Home Manager app → Support, visit att.com/support, or chat online. The app can run diagnostics and restart equipment remotely. For persistent issues, schedule a technician visit." },
];

export default function AttRouterNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "AT&T Router Not Working — Complete Fix Guide", description: "Fix AT&T gateway and router issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-28", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">AT&amp;T</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">AT&amp;T Internet Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">AT&amp;T Router Not Working?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix your AT&amp;T BGW gateway — broadband light issues, no internet, WiFi drops, and fiber/DSL connection problems.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>12 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">AT&amp;T provides internet through their <strong>BGW210-700</strong> (DSL/older fiber) and <strong>BGW320-500</strong> (newer fiber) gateways. These are all-in-one modem/router units. Here&apos;s how to fix every common issue.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">AT&amp;T Gateway Light Guide</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
              <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">State</th><th className="p-3 border-b border-slate-300 dark:border-slate-600">Meaning</th></tr></thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Broadband</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Internet connected</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Broadband</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Flashing Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Trying to connect — wait</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Broadband</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Red</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No internet — line or account issue</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Service</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Services active</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi enabled and broadcasting</td></tr>
                <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Solid Green</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Gateway powered on</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check for AT&amp;T Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Smart Home Manager app</strong> (on mobile data)</li>
            <li>Check for <strong>outage notifications</strong></li>
            <li>Or visit <strong>att.com/outages</strong></li>
            <li>Or check <strong>downdetector.com/status/att</strong></li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Restart the Gateway</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug</strong> the gateway power cord</li>
            <li>Wait <strong>30-60 seconds</strong></li>
            <li><strong>Plug back in</strong></li>
            <li>Wait <strong>10 minutes</strong> for all lights to turn solid green</li>
            <li>For <strong>AT&amp;T Fiber:</strong> Also restart the ONT (white box on wall) — unplug it for 30 seconds too</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check ONT (Fiber Customers)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you have AT&amp;T Fiber, check the ONT (Optical Network Terminal):</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Located on an <strong>outside wall or in the garage</strong></li>
            <li>Should have a <strong>solid green PON light</strong></li>
            <li>If PON light is off or red → <strong>fiber line issue</strong> (call AT&amp;T)</li>
            <li>Check the <strong>Ethernet cable from ONT to gateway</strong></li>
            <li>Power: If ONT has a <strong>battery backup</strong>, check if battery is dead</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check DSL Filters (DSL Customers)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you have AT&amp;T DSL (not fiber):</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Every phone jack with a phone plugged in needs a <strong>DSL filter</strong></li>
            <li>The gateway jack should <strong>NOT have a filter</strong></li>
            <li>Missing filters cause <strong>line noise that kills internet speed</strong></li>
            <li>Replace old/damaged filters</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Access Gateway Admin Panel</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open browser → go to <strong>192.168.1.254</strong></li>
            <li>Login with <strong>Device Access Code</strong> (on gateway label)</li>
            <li>Go to <strong>Broadband → Status</strong></li>
            <li>Check if <strong>broadband connection type</strong> is correct (PPPoE for DSL, DHCP for Fiber)</li>
            <li>For DSL: verify <strong>PPPoE username/password</strong> are entered</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: IP Passthrough / Bridge Mode</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If you use your own router with AT&amp;T&apos;s gateway:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>AT&amp;T gateways support <strong>IP Passthrough</strong> (similar to bridge mode)</li>
            <li>Go to <strong>192.168.1.254 → Firewall → IP Passthrough</strong></li>
            <li>Set to <strong>DHCPS-fixed</strong> and select your router</li>
            <li>This gives your router the public IP while keeping the gateway functioning</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Factory Reset</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find the <strong>red reset hole</strong> on the gateway</li>
            <li>Hold with paperclip for <strong>15 seconds</strong></li>
            <li>Wait <strong>10-15 minutes</strong> for reactivation</li>
            <li><strong>For DSL users:</strong> You&apos;ll need to re-enter PPPoE credentials</li>
            <li>WiFi name/password will reset to the values on the gateway label</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">AT&amp;T Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose AT&amp;T gateway and fiber issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/verizon-fios-router-not-working", title: "Verizon Fios Fix", desc: "Fix Verizon Fios router." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
                { href: "/wifi-connected-but-no-internet", title: "WiFi No Internet", desc: "Connected but can't browse." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
