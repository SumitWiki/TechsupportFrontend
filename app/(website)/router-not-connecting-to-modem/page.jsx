import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Router Not Connecting to Modem? Fix Guide (2026)",
  description: "Router can't connect to modem? Fix Ethernet cable issues, DHCP configuration, ISP provisioning errors, and get internet working step by step.",
  alternates: { canonical: "/router-not-connecting-to-modem" },
  openGraph: { title: "Router Not Connecting to Modem — Fix Guide", description: "Fix router-modem connection.", type: "article", url: "https://techsupport4.com/router-not-connecting-to-modem" },
  twitter: { card: "summary_large_image", title: "Router-Modem Fix | TechSupport4", description: "Router not connecting to modem — fix guide." },
};

const faqs = [
  { q: "Why won't my router connect to my modem?", a: "Common causes: (1) Ethernet cable is in the wrong port (should be WAN/Internet port on router), (2) Modem needs to be restarted to release previous DHCP lease, (3) ISP requires MAC address registration, (4) Ethernet cable is damaged, (5) Modem is in bridge mode but router isn't configured for PPPoE, (6) New router — ISP may need to provision it." },
  { q: "Which port on the router connects to the modem?", a: "Connect the modem to the router's WAN port (also called Internet port). It's usually: a different color (yellow is common), labeled WAN or Internet, physically separated from the LAN ports. The LAN ports (usually 4 of them) are for connecting computers, gaming consoles, etc." },
  { q: "Do I need to restart the modem when connecting a new router?", a: "YES — this is the most overlooked step. The modem remembers the MAC address of the last connected device. When you connect a new router, the modem must be power cycled so it learns the new router's MAC address. Unplug modem for 60 seconds → plug in → wait 3 minutes → then connect router." },
  { q: "My router shows 'No Internet' after connecting to modem — why?", a: "The modem has internet but the router can't access it. Check: (1) WAN connection type in router settings (should be DHCP for most ISPs), (2) Some ISPs use PPPoE — you need to enter a username/password in router settings, (3) ISP may have MAC filtering — clone the old router's MAC address." },
  { q: "Can any router work with any modem?", a: "Generally yes, as long as the modem isn't a gateway (modem + router combo). If you're adding a separate router to a gateway, you'll get double NAT issues. Either: (1) Put the gateway in bridge mode, or (2) Set up the new router as an access point. Check compatibility on your ISP's approved device list." },
];

export default function RouterNotConnectingToModem() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Router Not Connecting to Modem — Fix Guide", description: "Fix router-modem connection issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Not Connecting to Modem</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Router Setup Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Router Not Connecting to Modem?</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Router can&apos;t get internet from the modem? Fix cable issues, DHCP configuration, ISP provisioning, and establish the connection.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Your modem has internet (the Online light is solid), but your router shows no internet connection. This is a very specific problem — the router and modem aren&apos;t communicating properly. Here&apos;s how to fix it.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Verify Modem Has Internet</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Disconnect the router from the modem</li>
            <li>Connect a <strong>computer directly to the modem</strong> with an Ethernet cable</li>
            <li>If you get internet → modem is fine, problem is router configuration</li>
            <li>If no internet → the modem itself has an issue (call ISP)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 2: Check Cable and Ports</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Use an Ethernet cable from <strong>modem</strong> to router&apos;s <strong>WAN/Internet port</strong></li>
            <li>The WAN port is usually a <strong>different color</strong> (yellow) or labeled &quot;Internet/WAN&quot;</li>
            <li>Do NOT plug into a LAN port — that won&apos;t work</li>
            <li>Try a <strong>different Ethernet cable</strong> — cables can be bad</li>
            <li>Make sure the cable clicks firmly into both ports</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 3: Restart Modem (Critical Step)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug modem</strong> (and router)</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li>Plug in <strong>modem only</strong> → wait until Online light is solid (3-5 min)</li>
            <li>Now connect the <strong>Ethernet cable from modem to router WAN port</strong></li>
            <li>Plug in <strong>router</strong> → wait 2-3 minutes</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8"><strong>Why this is critical:</strong> The modem caches the MAC address of the last device connected. If you changed routers or connected a computer directly, the modem needs to be restarted to accept a new device.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 4: Check Router WAN Settings</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Access router admin panel (connect via Ethernet to LAN port → open 192.168.1.1)</li>
            <li>Go to <strong>WAN/Internet Settings</strong></li>
            <li>Check the <strong>Connection Type</strong>:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>DHCP (Dynamic IP)</strong> — most cable ISPs (Xfinity, Spectrum, Cox)</li>
                <li><strong>PPPoE</strong> — DSL providers (AT&amp;T, CenturyLink) — requires username/password from ISP</li>
                <li><strong>Static IP</strong> — business connections</li>
              </ul>
            </li>
            <li>If unsure, try <strong>DHCP first</strong> — it&apos;s the most common</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 5: Clone MAC Address</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Some ISPs bind your internet to a specific device&apos;s MAC address:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>In router admin: <strong>WAN Settings → MAC Clone</strong></li>
            <li>Select <strong>&quot;Clone from Current Computer&quot;</strong> (if it previously worked directly)</li>
            <li>Or enter the <strong>old router&apos;s MAC address</strong> manually</li>
            <li>Save and reboot the router</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 6: Check for Double NAT</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If your modem is a <strong>gateway (modem + router combo)</strong>, you may have double NAT:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Option 1:</strong> Put the gateway in <strong>bridge mode</strong> (disables its router function)</li>
            <li><strong>Option 2:</strong> Set your new router as an <strong>access point</strong> instead of a router</li>
            <li><strong>Option 3:</strong> Connect to a <strong>LAN port</strong> on the gateway instead of WAN port on the new router</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 7: Contact ISP</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>If you have a <strong>new router</strong>, the ISP may need to <strong>register/provision</strong> it</li>
            <li>Some ISPs (Xfinity, AT&amp;T) require the <strong>router&apos;s MAC address</strong> to be on their system</li>
            <li>Ask the ISP to <strong>send a refresh signal</strong> to the modem</li>
            <li>Verify your account is active and in good standing</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Router Still Can&apos;t Connect to Modem?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can help configure your router-modem setup remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/d-link-router-not-connecting-to-modem", title: "D-Link Not Connecting", desc: "D-Link modem connection fix." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "General router fix guide." },
                { href: "/internet-not-working-after-router-reset", title: "After Router Reset", desc: "Fix internet post-reset." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "Complete internet fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
