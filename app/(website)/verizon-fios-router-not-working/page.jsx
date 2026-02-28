import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Verizon FiOS Router Not Working? Fix Guide (2026)",
  description: "Verizon FiOS router not working? Fix Verizon G3100, G1100, and ONT connection issues, blinking lights, no internet, and WiFi problems step by step.",
  alternates: { canonical: "/verizon-fios-router-not-working" },
  openGraph: { title: "Verizon FiOS Router Not Working? Fix Guide", description: "Fix Verizon FiOS internet issues.", type: "article", url: "https://techsupport4.com/verizon-fios-router-not-working" },
  twitter: { card: "summary_large_image", title: "Fix Verizon FiOS | TechSupport4", description: "Verizon FiOS router not working — fix guide." },
};

const faqs = [
  { q: "Why is my Verizon FiOS router not working?", a: "Top causes: (1) ONT (Optical Network Terminal) needs restarting, (2) Ethernet cable from ONT to router loose, (3) Router firmware needs update, (4) Verizon outage, (5) Router overheating, (6) DNS issue. Always restart the ONT first before troubleshooting the router." },
  { q: "How do I restart my Verizon FiOS ONT?", a: "Find the ONT box (usually in basement, garage, or outside). Unplug the power cord from the ONT. Wait 30 seconds. Plug it back in. Wait 3-5 minutes for all lights to come on. Then restart your router. The ONT is the device that converts fiber optic to Ethernet." },
  { q: "What do the lights on Verizon G3100 router mean?", a: "Solid White: connected and working. Blinking White: booting up. Solid Blue: WPS pairing mode. Solid Yellow: no internet. Blinking Yellow: starting up / connecting. Solid Red: hardware error. If stuck on yellow, restart ONT first, then router." },
  { q: "Verizon FiOS internet but no WiFi — how to fix?", a: "If Ethernet works but WiFi doesn't: (1) Check if WiFi is enabled in My Verizon app or router admin, (2) Restart the router, (3) Check if WiFi bands are disabled (separate 2.4GHz and 5GHz may be individually off), (4) Factory reset router and set up WiFi again, (5) Check for interference." },
  { q: "How do I use my own router with Verizon FiOS?", a: "Connect your router's WAN port directly to the ONT via Ethernet. Set DHCP/Automatic IP. Release and renew IP from your router's WAN settings. You may need to call Verizon to switch the ONT from coax to Ethernet output if it was configured for the old setup. Your own router bypasses the G3100." },
];

export default function VerizonFiosNotWorking() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Verizon FiOS Router Not Working — Fix Guide", description: "Fix Verizon FiOS internet issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-24", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Verizon FiOS</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Verizon FiOS Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Verizon FiOS Router Not Working? Complete Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Fix Verizon FiOS internet issues — covers ONT restart, G3100/G1100 router troubleshooting, LED meanings, and WiFi problems.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Verizon FiOS uses <strong>fiber optic</strong> internet, which means your setup has two key devices: the <strong>ONT</strong> (Optical Network Terminal — converts fiber to Ethernet) and the <strong>router</strong> (G3100, G1100, or your own). When FiOS stops working, you need to check both.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart the ONT First</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Find your ONT box (basement, garage, or outside on the wall)</li>
            <li>Unplug ONT power cord</li>
            <li>Wait <strong>30 seconds</strong></li>
            <li>Plug back in — wait <strong>3-5 minutes</strong></li>
            <li>Then restart router — wait 2 minutes</li>
            <li>Test internet</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Check ONT-to-Router Cable</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Make sure the Ethernet cable from ONT → router&apos;s <strong>WAN port</strong> is secure on both ends. FiOS typically uses a Cat5e or Cat6 Ethernet cable. Try a different cable if available. If the ONT uses coax instead of Ethernet, your setup may be older — call Verizon to switch to Ethernet output.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check for Verizon Outage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Check the <strong>My Verizon app</strong> or visit <strong>verizon.com/support</strong> on your phone. Also check downdetector.com/status/verizon-fios. If there&apos;s an outage in your area, wait for Verizon to fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Reset the Router</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Factory reset: hold the red reset button on the back of the G3100 for <strong>10 seconds</strong>. Reconfigure via <strong>My Verizon app</strong> or log into <strong>192.168.1.1</strong> (admin / password on label). This clears corrupted settings.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Update Firmware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Verizon pushes firmware updates automatically, but sometimes they get stuck. In router admin (192.168.1.1), check for firmware updates. You can also force a firmware check via the My Verizon app → Manage Router.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Change DNS</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">On your device, set DNS to <strong>8.8.8.8</strong> and <strong>8.8.4.4</strong> to bypass Verizon&apos;s DNS. This fixes &quot;connected but nothing loads&quot; issues.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Contact Verizon Support</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Call <strong>1-800-VERIZON (1-800-837-4966)</strong>. They can: reset your ONT remotely, check fiber signal levels, reprovision your router, and schedule a technician if needed.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">FiOS Still Down?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help troubleshoot Verizon FiOS remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/verizon-fios-no-internet-after-storm", title: "FiOS After Storm", desc: "Fix FiOS after weather damage." },
                { href: "/xfinity-router-not-working-after-reset", title: "Xfinity After Reset", desc: "Fix Xfinity gateway." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete troubleshooting guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
