import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Router Not Working After Power Outage? 9 Fixes (2026)",
  description: "Router not working after power outage? Fix no internet, blinking lights, and connection issues with our step-by-step 2026 recovery guide for any router brand.",
  alternates: { canonical: "/router-not-working-after-power-outage" },
  openGraph: { title: "Router Not Working After Power Outage — 9 Fixes", description: "Fix your router after a power outage.", type: "article", url: "https://techsupport4.com/router-not-working-after-power-outage" },
  twitter: { card: "summary_large_image", title: "Router Fix After Power Outage | TechSupport4", description: "9 fixes to restore internet after a power outage." },
};

const faqs = [
  { q: "Why does my router stop working after a power outage?", a: "Power outages cause routers to lose their running configuration temporarily. When power returns, the router and modem need to re-establish a connection with your ISP. Additionally, power surges from outages can corrupt firmware, damage the power supply, or fry components. The modem also needs to re-authenticate with the ISP, which can take several minutes." },
  { q: "Should I restart my router and modem in a specific order?", a: "Yes! Always restart in this order: (1) Unplug modem first, then router. (2) Wait 60 seconds. (3) Plug in modem first, wait 3 minutes. (4) Then plug in router, wait 3 minutes. This ensures the modem gets a fresh connection from the ISP before the router tries to use it." },
  { q: "Can a power outage damage my router?", a: "Yes. Power surges when electricity returns can damage routers. Signs of damage: won't turn on, burns/melts smell, lights flicker then go off, constant rebooting. A surge protector or UPS (Uninterruptible Power Supply) protects against this. If your router is damaged, you'll need a replacement." },
  { q: "How long should I wait after a power outage before troubleshooting?", a: "Wait at least 15-20 minutes after power is restored. ISP network equipment also needs to recover, and your connection may take time to re-establish. If internet isn't back after 20 minutes, then start troubleshooting with a modem/router restart." },
  { q: "Do I need a surge protector for my router?", a: "Absolutely. A surge protector ($15-30) protects your router from power surges. Even better, a UPS (Uninterruptible Power Supply, $50-100) keeps your router running during brief outages and provides surge protection. Plug both your modem and router into the UPS for continuous internet during short outages." },
];

export default function RouterNotWorkingAfterPowerOutage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Router Not Working After Power Outage — 9 Fixes", description: "Complete guide to fix router after power outage.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-03-01", dateModified: "2026-03-01" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-yellow-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/router-not-working" className="hover:text-white transition">Router Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">After Power Outage</span>
            </nav>
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-500/30">Situational Fix</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Router Not Working After Power Outage?</h1>
            <p className="mt-4 text-yellow-200 text-lg max-w-2xl">9 step-by-step fixes to restore your internet after a power outage — works for any router and modem brand. Common after storms in Texas, Florida &amp; the Midwest.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-yellow-300"><span>Updated: Mar 2026</span><span className="w-1 h-1 rounded-full bg-yellow-400" /><span>11 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">After a power outage, your router and modem need to re-establish a connection with your ISP. This doesn&apos;t always happen automatically — especially if the power came back with a surge, or if your ISP&apos;s equipment is still recovering. Here&apos;s how to get back online fast.</p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-5 mb-8">
            <p className="text-yellow-800 dark:text-yellow-300 font-semibold mb-2">⚡ Quick Recovery Checklist</p>
            <ol className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 list-decimal pl-5">
              <li>Wait 15 minutes after power returns</li>
              <li>Restart modem first, wait 3 min, then router</li>
              <li>Check all cables — power, Ethernet, coax</li>
              <li>Check ISP outage map (ISP may still be down)</li>
              <li>If lights abnormal, check for surge damage</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Wait 15-20 Minutes</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Your ISP&apos;s equipment also lost power and needs to recover</li>
            <li>Neighborhood switching stations need <strong>10-20 minutes</strong> to come online</li>
            <li>Your modem needs to re-authenticate with the ISP</li>
            <li>Don&apos;t start troubleshooting immediately — <strong>patience first</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Power Cycle in Correct Order</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">This is the most important step — the order matters:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Unplug the modem</strong> power cord</li>
            <li><strong>Unplug the router</strong> power cord (if separate device)</li>
            <li>Wait <strong>60 seconds</strong></li>
            <li><strong>Plug in the modem first</strong> — wait until all lights stabilize (2-3 minutes)</li>
            <li><strong>Then plug in the router</strong> — wait until WiFi light is solid (2-3 minutes)</li>
            <li>Test your connection</li>
          </ol>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">💡 If you have a combined modem/router (gateway), just unplug for 60 seconds and replug.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check All Cables</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Power surge can loosen cables or damage connectors</li>
            <li>Check <strong>power cables</strong> — ensure firm connection</li>
            <li>Check <strong>Ethernet cable</strong> from modem to router — reseat both ends</li>
            <li>Check <strong>coaxial cable</strong> (cable internet) — ensure finger-tight</li>
            <li>Check <strong>phone line</strong> (DSL) or <strong>fiber cable</strong> (fiber internet)</li>
            <li>Try different power outlets — some may be on a tripped breaker</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check Your Electrical Panel</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Power outages often <strong>trip circuit breakers</strong></li>
            <li>Check your <strong>electrical panel/fuse box</strong></li>
            <li>Look for any <strong>tripped breakers</strong> (in the middle position)</li>
            <li>Flip the tripped breaker fully OFF, then back ON</li>
            <li>Check the outlet your router is plugged into — is it on a <strong>GFCI outlet?</strong> Press the reset button</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check for ISP Outage</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Your ISP may still be restoring service in your area</li>
            <li>Check your ISP&apos;s app or website on your phone (using mobile data)</li>
            <li>Visit <a href="https://downdetector.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Downdetector.com</a> for your ISP</li>
            <li>Check local social media or community groups for outage reports</li>
            <li>If ISP is down, all you can do is wait for their restoration</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check for Surge Damage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Power surges when electricity returns can damage equipment. Signs of surge damage:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Router <strong>won&apos;t turn on at all</strong></li>
            <li><strong>Burning smell</strong> from the device</li>
            <li>Lights <strong>flicker on then immediately off</strong></li>
            <li>Router keeps <strong>rebooting in a loop</strong></li>
            <li>Some functions work but <strong>WiFi won&apos;t broadcast</strong></li>
            <li>If you suspect surge damage → <strong>try a different power adapter</strong> first, then consider replacement</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Flush DNS &amp; Renew IP</h2>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-8 font-mono text-sm overflow-x-auto">
            <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400"># Windows — Run as Administrator</span></p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /flushdns</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /release</p>
            <p className="text-slate-800 dark:text-slate-200">ipconfig /renew</p>
            <p className="text-slate-800 dark:text-slate-200">netsh winsock reset</p>
            <p className="text-slate-700 dark:text-slate-300 mt-3"><span className="text-green-600 dark:text-green-400"># Mac</span></p>
            <p className="text-slate-800 dark:text-slate-200">sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Factory Reset Router</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Find the <strong>reset pinhole</strong> on the back of your router</li>
            <li>Press and hold with a paperclip for <strong>10-30 seconds</strong></li>
            <li>All lights will blink — release the button</li>
            <li>Wait <strong>5-10 minutes</strong> for the router to rebuild its configuration</li>
            <li>Reconnect with <strong>default WiFi name/password</strong> (on the label)</li>
          </ol>
          <p className="text-red-600 dark:text-red-400 text-sm font-semibold mb-8">⚠️ This erases all custom settings. Only use if power cycling didn&apos;t work.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Contact Your ISP</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>If nothing above works, your ISP may need to <strong>reprovision your modem</strong></li>
            <li>They can send a <strong>refresh signal</strong> to your equipment</li>
            <li>Request a <strong>signal test</strong> to check line quality</li>
            <li>If equipment is damaged, request a <strong>replacement modem/gateway</strong></li>
            <li>Ask about a <strong>technician visit</strong> if the issue is on their end</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-8">
            <p className="text-green-800 dark:text-green-300 font-semibold mb-2">🔌 Prevention: Protect Your Equipment</p>
            <ul className="text-green-700 dark:text-green-400 text-sm space-y-1 list-disc pl-5">
              <li><strong>Surge protector</strong> ($15-30) — protects against power surges</li>
              <li><strong>UPS battery backup</strong> ($50-100) — keeps router running during short outages</li>
              <li>A UPS with 300-600VA is sufficient for a modem and router</li>
            </ul>
          </div>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-yellow-700 to-yellow-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Router Still Down After Power Outage?</h3>
            <p className="mt-2 text-yellow-200 max-w-lg mx-auto">Our certified technicians can diagnose and fix your connection remotely — even if your ISP can&apos;t help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-yellow-700 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/internet-not-working-after-storm", title: "Internet After Storm", desc: "Fix internet after severe weather." },
                { href: "/router-not-working", title: "Router Not Working?", desc: "Universal router fix guide." },
                { href: "/internet-not-working", title: "Internet Not Working?", desc: "General internet troubleshooting." },
                { href: "/wifi-not-working", title: "WiFi Not Working?", desc: "Fix WiFi connectivity issues." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-yellow-700 dark:text-yellow-400 group-hover:text-yellow-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
