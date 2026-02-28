import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "The Complete Internet & Router Troubleshooting Guide (2026) — 50+ Fixes",
  description:
    "The ultimate internet and router troubleshooting guide. 50+ fixes for WiFi not working, slow internet, router issues, printer problems, modem errors, and more. Updated for 2026.",
  alternates: { canonical: "/complete-internet-router-troubleshooting-guide" },
  openGraph: {
    title: "Complete Internet & Router Troubleshooting Guide — 50+ Fixes",
    description: "The ultimate guide to fix every internet, WiFi, router, modem, and printer problem.",
    type: "article",
    url: "https://techsupport4.com/complete-internet-router-troubleshooting-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Troubleshooting Guide | TechSupport4",
    description: "50+ fixes for internet, WiFi, router, and printer issues.",
  },
};

const faqs = [
  {
    q: "What is the first thing I should do when my internet stops working?",
    a: "Start with the universal power cycle: unplug your modem and router from power, wait 60 seconds, plug the modem back in first and wait 3-5 minutes for it to fully boot (all lights stable), then plug in the router and wait another 2-3 minutes. This resolves about 70% of internet issues by clearing cached errors and renewing your IP address.",
  },
  {
    q: "How do I know if the problem is my modem, router, or ISP?",
    a: "Test by elimination: (1) Connect a computer directly to the modem via Ethernet — bypass the router. (2) If internet works direct to modem → router is the problem. (3) If no internet direct to modem → modem or ISP issue. (4) Check your ISP's outage page or call them. (5) If neighbors on the same ISP also have no internet → ISP outage.",
  },
  {
    q: "Why does my internet slow down at night?",
    a: "Network congestion — too many people in your area using the internet at the same time (typically 7-11 PM). Cable internet is most affected because bandwidth is shared at the neighborhood level. Fixes: switch to 5 GHz WiFi band, use Ethernet for important devices, consider upgrading your speed tier, or switch to fiber (if available) which isn't affected by congestion.",
  },
  {
    q: "How often should I restart my router?",
    a: "For best performance, restart your router once every 1-2 weeks. This clears the RAM, refreshes the DHCP lease table, and resolves minor firmware glitches. Many modern routers have an auto-reboot schedule option in the admin panel — set it for 3-4 AM once a week.",
  },
  {
    q: "Is it worth buying my own modem and router instead of renting from the ISP?",
    a: "Almost always yes. ISP equipment rental costs $10-15/month — that's $120-180/year. A good modem costs $80-120 and a good router costs $100-200. You break even in under 2 years and often get better performance. Make sure to check your ISP's approved device list before buying.",
  },
  {
    q: "What internet speed do I actually need?",
    a: "For 1-2 people: 50-100 Mbps. For 3-5 people/devices: 200-300 Mbps. For 6+ people or heavy streaming/gaming: 500+ Mbps. For work-from-home video calls: at least 25 Mbps upload. Most people overpay for speed they don't use — check your actual usage in your router's admin panel.",
  },
  {
    q: "WiFi vs Ethernet — when should I use a wired connection?",
    a: "Use Ethernet for: gaming (lower latency), work-from-home computers (reliable connection), streaming devices (4K), smart TVs, and desktop computers. Use WiFi for: phones, tablets, laptops (portability), smart home devices. If stability matters more than convenience, always choose Ethernet.",
  },
  {
    q: "How do I fix WiFi dead zones in my house?",
    a: "Options from best to worst: (1) WiFi mesh system (Eero, Google WiFi, Orbi) — best for large homes, (2) WiFi extender — cheaper but creates a separate network, (3) Powerline adapter with WiFi — uses electrical wiring, (4) Move router to central location, (5) Upgrade to a WiFi 6/6E router with better range. Avoid placing the router in a closet, basement, or behind a TV.",
  },
];

export default function CompleteInternetRouterTroubleshootingGuide() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Complete Internet & Router Troubleshooting Guide (2026)",
            description:
              "The ultimate guide covering 50+ fixes for internet, WiFi, router, modem, and printer issues.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
            datePublished: "2026-02-28",
            dateModified: "2026-02-28",
            wordCount: 5200,
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-indigo-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">Complete Troubleshooting Guide</span>
            </nav>
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-indigo-500/30">
              Authority Guide — 5000+ Words
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              The Complete Internet &amp; Router Troubleshooting Guide
            </h1>
            <p className="mt-6 text-indigo-200 text-lg md:text-xl max-w-3xl mx-auto">
              Every fix you&apos;ll ever need for WiFi, internet, routers, modems, printers, and more — organized, step-by-step, and updated for 2026.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-indigo-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-indigo-400" />
              <span>25 min read</span>
              <span className="w-1 h-1 rounded-full bg-indigo-400" />
              <span>50+ Fixes</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          {/* Table of Contents */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 mb-12">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Table of Contents</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                { href: "#universal", label: "1. Universal First Steps" },
                { href: "#diagnose", label: "2. How to Diagnose the Problem" },
                { href: "#internet", label: "3. Internet Not Working — Complete Fix" },
                { href: "#wifi", label: "4. WiFi Issues — Every Scenario" },
                { href: "#router", label: "5. Router Problems — All Brands" },
                { href: "#modem", label: "6. Modem & ISP Issues" },
                { href: "#speed", label: "7. Slow Internet — Speed Fixes" },
                { href: "#printer", label: "8. Printer & Peripheral Issues" },
                { href: "#after", label: '9. "After" Situations — Post-Event Fixes' },
                { href: "#advanced", label: "10. Advanced Troubleshooting" },
                { href: "#isp", label: "11. ISP-Specific Guides" },
                { href: "#prevention", label: "12. Prevention & Best Practices" },
                { href: "#faq", label: "13. FAQ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-blue-700 dark:text-blue-400 hover:text-blue-500 transition py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Whether your internet completely died, your WiFi keeps dropping, your router lights are blinking strange colors, or your printer went offline after an update — this guide has you covered. We&apos;ve compiled <strong>every troubleshooting technique</strong> we use when helping thousands of customers, organized from simple to advanced so you can fix the problem yourself.
          </p>

          {/* ===== SECTION 1: Universal First Steps ===== */}
          <section id="universal">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              1. Universal First Steps (Do These Before Anything Else)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Before diving into specific troubleshooting, these steps resolve <strong>70% of all internet and network issues</strong>. Don&apos;t skip them — even tech professionals start here.
            </p>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Step 1: The Proper Power Cycle</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              This isn&apos;t just &quot;turning it off and on again.&quot; There&apos;s a specific order that matters:
            </p>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Unplug the modem</strong> from power (not just restart — physically unplug)</li>
              <li><strong>Unplug the router</strong> from power</li>
              <li>Wait <strong>60 full seconds</strong> (this drains residual charge and clears cached errors)</li>
              <li><strong>Plug in the modem FIRST</strong> — wait 3-5 minutes until all lights stabilize</li>
              <li><strong>Then plug in the router</strong> — wait 2-3 minutes</li>
              <li>Test your internet connection</li>
            </ol>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              <strong>Why the order matters:</strong> The modem establishes the connection to your ISP first. The router then requests an IP address from the modem. If you turn both on simultaneously, the router may try to get an IP before the modem is ready, causing a failure.
            </p>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Step 2: Check for ISP Outages</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Visit <strong>downdetector.com</strong> and search for your ISP</li>
              <li>Check your ISP&apos;s social media (Twitter/X) for outage announcements</li>
              <li>Ask neighbors on the same ISP if they have internet</li>
              <li>Call your ISP&apos;s automated outage line (available 24/7)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Step 3: Test Wired vs. Wireless</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Connect a computer <strong>directly to the modem via Ethernet cable</strong> (bypass the router completely). If internet works through Ethernet, the problem is your router or WiFi. If it doesn&apos;t work even wired, the problem is the modem or ISP. This single test narrows down 50% of possibilities instantly.
            </p>
          </section>

          {/* ===== SECTION 2: Diagnose ===== */}
          <section id="diagnose">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              2. How to Diagnose the Problem
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Before applying fixes, identify <strong>what type of problem</strong> you&apos;re dealing with. This prevents wasting time on irrelevant solutions.
            </p>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Diagnostic Decision Tree</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Symptom</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Likely Cause</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Jump To</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">No internet at all (all devices)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Modem/ISP issue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#modem" className="text-blue-600">Section 6</a></td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">No internet (one device only)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Device WiFi/network settings</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#wifi" className="text-blue-600">Section 4</a></td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi connected but no internet</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Router-to-modem connection</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#router" className="text-blue-600">Section 5</a></td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Internet slow</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Congestion, WiFi interference, plan limits</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#speed" className="text-blue-600">Section 7</a></td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Intermittent drops</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Overheating, loose cable, interference</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#advanced" className="text-blue-600">Section 10</a></td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Problem started after update/change</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Driver/configuration issue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#after" className="text-blue-600">Section 9</a></td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Printer offline</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Driver, spooler, or network issue</td><td className="p-3 border-b border-slate-200 dark:border-slate-700"><a href="#printer" className="text-blue-600">Section 8</a></td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Reading Router &amp; Modem Lights</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Your modem and router lights tell you exactly what&apos;s wrong — if you know how to read them:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Light</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Solid Green/White</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Blinking</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Off</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Red/Orange</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold">Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Normal</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Booting up</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Hardware error</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold">Online/Internet</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Connected to ISP</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Trying to connect</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No ISP connection</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Auth failure</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold">WiFi</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi broadcasting</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Data transfer (normal)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">WiFi disabled</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Error</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold">Ethernet</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Device connected</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Data transfer (normal)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">No device connected</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">—</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== SECTION 3: Internet Not Working ===== */}
          <section id="internet">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              3. Internet Not Working — Complete Fix
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              When your internet is completely down on all devices, work through these steps in order. Each step builds on the previous one.
            </p>

            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-3 mb-6">
              <li><strong>Power cycle modem and router</strong> (see Section 1)</li>
              <li><strong>Check modem lights</strong> — Online light should be solid green/white</li>
              <li><strong>Test direct Ethernet to modem</strong> — bypass router</li>
              <li><strong>Check for ISP outage</strong> — downdetector.com</li>
              <li><strong>Check all cables</strong> — coax, Ethernet, power</li>
              <li><strong>Call your ISP</strong> — they can run a remote diagnostic on your line</li>
            </ol>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">For detailed guides based on your connection type:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/internet-not-working", title: "Internet Not Working — Complete Guide" },
                { href: "/how-to-fix-internet-not-working", title: "How to Fix Internet Not Working" },
                { href: "/no-internet-connection-troubleshooting", title: "No Internet Connection Troubleshooting" },
                { href: "/internet-not-working-on-phone", title: "Internet Not Working on Phone" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 4: WiFi Issues ===== */}
          <section id="wifi">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              4. WiFi Issues — Every Scenario
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">WiFi Not Showing Up</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Check if WiFi is <strong>disabled</strong> on the router (WiFi button, admin panel)</li>
              <li>Check for a <strong>physical WiFi switch</strong> on your laptop (or Fn + F5/F12 key combo)</li>
              <li>Make sure <strong>Airplane Mode</strong> is off on your device</li>
              <li>In Device Manager, check if the <strong>WiFi adapter is enabled</strong></li>
              <li>If hidden network: manually add the network name in WiFi settings</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">WiFi Connected but No Internet</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              This means your device talks to the router, but the router can&apos;t reach the internet:
            </p>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Power cycle modem and router</li>
              <li>Open Command Prompt → <strong>ipconfig</strong> → check if you have a valid IP (not 169.254.x.x)</li>
              <li>Try <strong>ipconfig /release</strong> then <strong>ipconfig /renew</strong></li>
              <li>Flush DNS: <strong>ipconfig /flushdns</strong></li>
              <li>Try changing DNS to <strong>8.8.8.8 / 8.8.4.4</strong> (Google) or <strong>1.1.1.1</strong> (Cloudflare)</li>
              <li>Check router admin panel — does the WAN/Internet status show an IP address?</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">WiFi Keeps Disconnecting</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Interference:</strong> Move router away from microwaves, cordless phones, baby monitors</li>
              <li><strong>Channel congestion:</strong> Use 5 GHz band or change WiFi channel (1, 6, or 11 for 2.4 GHz)</li>
              <li><strong>Distance:</strong> Move closer to router or add a mesh extender</li>
              <li><strong>Driver issue:</strong> Update WiFi adapter driver from manufacturer</li>
              <li><strong>Power management:</strong> Disable &quot;Allow computer to turn off this device&quot; in Device Manager</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Detailed WiFi guides:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/wifi-not-working", title: "WiFi Not Working — Full Guide" },
                { href: "/wifi-connected-but-no-internet", title: "WiFi Connected, No Internet" },
                { href: "/wifi-keeps-disconnecting", title: "WiFi Keeps Disconnecting" },
                { href: "/laptop-not-connecting-to-wifi", title: "Laptop Not Connecting to WiFi" },
                { href: "/wifi-not-working-after-windows-update", title: "WiFi After Windows Update" },
                { href: "/wifi-not-working-after-sleep-mode", title: "WiFi After Sleep Mode" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 5: Router Problems ===== */}
          <section id="router">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              5. Router Problems — All Brands
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Router Not Connecting to Internet</h3>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Verify Ethernet cable from modem → <strong>WAN/Internet port</strong> (not LAN)</li>
              <li>Power cycle: modem first, then router</li>
              <li>Log into router admin (192.168.1.1 or 192.168.0.1) and check WAN status</li>
              <li>Make sure connection type is correct: <strong>DHCP</strong> for cable, <strong>PPPoE</strong> for DSL</li>
              <li>Update router firmware</li>
              <li>Factory reset as last resort</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Router Keeps Restarting / Crashing</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Overheating:</strong> Move to a ventilated area, don&apos;t stack on other electronics</li>
              <li><strong>Power supply:</strong> Use the original adapter — wrong voltage can cause restarts</li>
              <li><strong>Firmware bug:</strong> Update to latest firmware</li>
              <li><strong>Too many devices:</strong> Consumer routers handle 15-30 devices — consider a mesh system</li>
              <li><strong>Hardware failure:</strong> If restarting persists after firmware update and factory reset, the router may need replacement</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">How to Properly Reset a Router</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Soft reset:</strong> Unplug power for 30 seconds, replug</li>
              <li><strong>Factory reset:</strong> Hold the reset button (tiny hole) with a pin for 10-15 seconds until lights flash</li>
              <li>After factory reset: router returns to default settings — you&apos;ll need to reconfigure WiFi name, password, and any custom settings</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Router-specific guides:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/router-not-working", title: "Router Not Working — Full Guide" },
                { href: "/router-not-connecting-to-modem", title: "Router Not Connecting to Modem" },
                { href: "/netgear-router-not-working", title: "Netgear Router Fix" },
                { href: "/tp-link-router-not-working", title: "TP-Link Router Fix" },
                { href: "/wifi-router-reset-guide", title: "Router Reset Guide" },
                { href: "/internet-not-working-after-changing-router", title: "After Changing Router" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 6: Modem & ISP ===== */}
          <section id="modem">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              6. Modem &amp; ISP Issues
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Modem Won&apos;t Sync / Online Light Off</h3>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Power cycle modem (unplug 60 seconds)</li>
              <li>Check coaxial/phone cable connection at both ends</li>
              <li>Try a different coaxial cable</li>
              <li>Remove any <strong>cable splitters</strong> between the wall and modem</li>
              <li>Call ISP — they can check signal levels remotely and send a refresh signal</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Understanding Signal Levels (Cable Internet)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Metric</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Good Range</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Problem</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Downstream Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">−7 to +7 dBmV</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Outside range = weak signal</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Upstream Power</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">35-50 dBmV</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">&gt;55 = modem struggling</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">SNR (Signal-to-Noise)</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">&gt;33 dB</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">&lt;30 = errors likely</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Modem and ISP-specific guides:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/arris-modem-not-connecting-to-internet", title: "Arris Modem Fix" },
                { href: "/internet-not-working-after-modem-replacement", title: "After Modem Replacement" },
                { href: "/internet-not-working-after-power-outage", title: "After Power Outage" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 7: Slow Internet ===== */}
          <section id="speed">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              7. Slow Internet — Speed Fixes
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Test Your Actual Speed</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Before troubleshooting, know your baseline. Go to <strong>speedtest.net</strong> or <strong>fast.com</strong> and run a test. For accurate results: use <strong>Ethernet</strong> (not WiFi), close all other tabs/apps, and run the test 3 times at different times of day.
            </p>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Quick Speed Fixes</h3>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Switch to 5 GHz WiFi</strong> — 2.4 GHz is slower and more congested</li>
              <li><strong>Move closer to router</strong> or remove obstacles (walls, floors, mirrors reflect WiFi)</li>
              <li><strong>Change WiFi channel</strong> — use a WiFi analyzer app to find the least congested channel</li>
              <li><strong>Change DNS</strong> to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google) — faster DNS resolution</li>
              <li><strong>Check for bandwidth hogs</strong> — streaming, downloads, backups, other devices</li>
              <li><strong>Enable QoS</strong> on router — prioritize important traffic (video calls, gaming)</li>
              <li><strong>Update router firmware</strong> — performance improvements and bug fixes</li>
              <li><strong>Upgrade your router</strong> — WiFi 6 (802.11ax) handles more devices and is significantly faster</li>
            </ol>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Detailed speed guides:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/slow-internet-speed-fix", title: "Slow Internet Speed Fix" },
                { href: "/wifi-slow-on-laptop-but-not-on-phone", title: "WiFi Slow on Laptop Only" },
                { href: "/internet-slow-at-night", title: "Internet Slow at Night" },
                { href: "/buffering-on-smart-tv", title: "Buffering on Smart TV" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 8: Printer Issues ===== */}
          <section id="printer">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              8. Printer &amp; Peripheral Issues
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Universal Printer Fix Steps</h3>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Restart the printer</strong> — turn off, wait 30 seconds, turn on</li>
              <li><strong>Restart Print Spooler</strong> — services.msc → Print Spooler → Stop → Start</li>
              <li><strong>Clear print queue</strong> — delete files in C:\Windows\System32\spool\PRINTERS</li>
              <li><strong>Check connection</strong> — USB cable firm? WiFi connected? IP address correct?</li>
              <li><strong>Reinstall driver</strong> — from manufacturer website, not Windows Update</li>
              <li><strong>Set as default printer</strong> — Settings → Printers → Set as default</li>
            </ol>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Printer-specific guides:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/printer-offline-fix-guide", title: "Printer Offline Fix Guide" },
                { href: "/printer-not-connecting-to-wifi", title: "Printer Not Connecting to WiFi" },
                { href: "/hp-printer-not-printing", title: "HP Printer Not Printing" },
                { href: "/printer-offline-after-windows-update", title: "Printer After Windows Update" },
                { href: "/printer-not-printing-after-driver-update", title: "After Driver Update" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 9: After Situations ===== */}
          <section id="after">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              9. &quot;After&quot; Situations — Post-Event Fixes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Things often break <strong>after a specific event</strong> — a Windows update, replacing equipment, a power outage, or changing settings. These guides address the exact scenario:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/wifi-not-working-after-windows-update", title: "WiFi After Windows Update" },
                { href: "/printer-offline-after-windows-update", title: "Printer After Windows Update" },
                { href: "/computer-slow-after-windows-update", title: "Computer Slow After Update" },
                { href: "/bluetooth-not-working-after-update", title: "Bluetooth After Update" },
                { href: "/wifi-not-working-after-sleep-mode", title: "WiFi After Sleep Mode" },
                { href: "/printer-not-printing-after-driver-update", title: "Printer After Driver Update" },
                { href: "/internet-not-working-after-modem-replacement", title: "After Modem Replacement" },
                { href: "/internet-not-working-after-changing-router", title: "After Changing Router" },
                { href: "/internet-not-working-after-power-outage", title: "After Power Outage" },
                { href: "/xfinity-router-not-working-after-reset", title: "Xfinity After Reset" },
                { href: "/internet-not-working-after-resetting-router", title: "After Router Reset" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 10: Advanced ===== */}
          <section id="advanced">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              10. Advanced Troubleshooting
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Network Commands Every User Should Know</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Open <strong>Command Prompt (Admin)</strong> or <strong>Terminal (Admin)</strong> and use these:
            </p>
            <div className="bg-slate-800 text-green-400 rounded-xl p-5 font-mono text-sm mb-6 overflow-x-auto space-y-2">
              <p><span className="text-slate-500">// Check your IP configuration</span></p>
              <p>ipconfig /all</p>
              <p><span className="text-slate-500">// Release and renew IP address</span></p>
              <p>ipconfig /release &amp;&amp; ipconfig /renew</p>
              <p><span className="text-slate-500">// Flush DNS cache</span></p>
              <p>ipconfig /flushdns</p>
              <p><span className="text-slate-500">// Test connectivity to a server</span></p>
              <p>ping 8.8.8.8</p>
              <p><span className="text-slate-500">// Test DNS resolution</span></p>
              <p>nslookup google.com</p>
              <p><span className="text-slate-500">// Trace network path</span></p>
              <p>tracert google.com</p>
              <p><span className="text-slate-500">// Reset entire TCP/IP stack</span></p>
              <p>netsh winsock reset</p>
              <p>netsh int ip reset</p>
            </div>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Changing DNS Servers</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Your ISP&apos;s default DNS servers are often slow. Switching to a faster DNS can speed up website loading:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left border border-slate-300 dark:border-slate-600">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Provider</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Primary</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Secondary</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-600">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Cloudflare</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1.1.1.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">1.0.0.1</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Speed + Privacy</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">Google</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">8.8.8.8</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">8.8.4.4</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Reliability</td></tr>
                  <tr><td className="p-3 border-b border-slate-200 dark:border-slate-700">OpenDNS</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">208.67.222.222</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">208.67.220.220</td><td className="p-3 border-b border-slate-200 dark:border-slate-700">Family filtering</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Checking Router Admin Panel</h3>
            <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Connect to your router&apos;s network (WiFi or Ethernet)</li>
              <li>Open browser → type your router&apos;s IP (usually <strong>192.168.1.1</strong> or <strong>192.168.0.1</strong>)</li>
              <li>Default login is usually <strong>admin/admin</strong> or printed on the router&apos;s sticker</li>
              <li>Check: <strong>WAN/Internet Status</strong> → should show a valid public IP</li>
              <li>Check: <strong>Connected Devices</strong> → see what&apos;s using bandwidth</li>
              <li>Check: <strong>Firmware Update</strong> → always keep firmware current</li>
            </ol>
          </section>

          {/* ===== SECTION 11: ISP-Specific ===== */}
          <section id="isp">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              11. ISP-Specific Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Every ISP has specific equipment, procedures, and common issues. Find your ISP below for a targeted guide:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: "/xfinity-router-not-working", title: "Xfinity Router Not Working" },
                { href: "/spectrum-router-not-working", title: "Spectrum Router Not Working" },
                { href: "/comcast-internet-not-working", title: "Comcast Internet Not Working" },
                { href: "/att-router-not-working", title: "AT&T Router Not Working" },
                { href: "/cox-router-not-working", title: "Cox Router Not Working" },
                { href: "/verizon-fios-router-not-working", title: "Verizon Fios Router Not Working" },
                { href: "/centurylink-router-not-working", title: "CenturyLink Router Not Working" },
                { href: "/frontier-internet-not-working", title: "Frontier Internet Not Working" },
                { href: "/tmobile-home-internet-not-working", title: "T-Mobile Home Internet" },
                { href: "/optimum-router-not-working", title: "Optimum Router Not Working" },
                { href: "/windstream-internet-not-working", title: "Windstream Internet Not Working" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition text-sm font-medium text-blue-700 dark:text-blue-400">
                  → {g.title}
                </Link>
              ))}
            </div>
          </section>

          {/* ===== SECTION 12: Prevention ===== */}
          <section id="prevention">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-14 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
              12. Prevention &amp; Best Practices
            </h2>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Router Placement</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Place <strong>centrally</strong> in your home — not in a corner, closet, or basement</li>
              <li><strong>Elevate it</strong> — on a shelf or wall-mounted, not on the floor</li>
              <li>Keep away from <strong>microwaves, cordless phones, baby monitors, fish tanks, mirrors</strong></li>
              <li>Don&apos;t put it <strong>behind a TV</strong> — the metal in the TV blocks WiFi signal</li>
              <li>For multi-story homes, place on the <strong>middle floor</strong></li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Regular Maintenance</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li><strong>Restart router weekly</strong> — set an auto-reboot schedule if available</li>
              <li><strong>Update firmware quarterly</strong> — check router admin panel</li>
              <li><strong>Change WiFi password annually</strong> — and after any visitors</li>
              <li><strong>Check connected devices</strong> — remove any unknown devices</li>
              <li><strong>Replace router every 3-5 years</strong> — technology improves significantly</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Security Essentials</h3>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
              <li>Use <strong>WPA3</strong> encryption (or WPA2 if WPA3 not available)</li>
              <li><strong>Change the default admin password</strong> on your router</li>
              <li>Disable <strong>WPS</strong> (WiFi Protected Setup) — it&apos;s a known security weakness</li>
              <li>Enable <strong>automatic firmware updates</strong> if available</li>
              <li>Create a <strong>guest network</strong> for visitors instead of sharing your main password</li>
              <li>Disable <strong>remote management</strong> unless you specifically need it</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-3">Surge Protection</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Power surges from lightning or power grid fluctuations are the <strong>#1 hardware killer</strong> for modems and routers. Use a <strong>quality surge protector</strong> (not just a power strip) for your modem, router, and computer. Replace surge protectors every 3-5 years — their protection degrades over time. After any power outage, always power cycle your modem and router.
            </p>
          </section>

          {/* ===== SECTION 13: FAQ ===== */}
          <section id="faq" className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-indigo-700 to-indigo-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still Can&apos;t Fix It?</h3>
            <p className="mt-2 text-indigo-200 max-w-lg mx-auto">
              Our certified technicians can diagnose and fix your internet, WiFi, router, or printer issue remotely in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
              >
                Start Secure Session
              </Link>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* All Guides Hub */}
          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Browse All Guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/internet-support-usa", title: "Internet Support", desc: "All internet fixes." },
                { href: "/wifi-router-support-usa", title: "WiFi & Router", desc: "All WiFi/router fixes." },
                { href: "/printer-support-usa", title: "Printer Support", desc: "All printer fixes." },
                { href: "/smart-tv-support-usa", title: "Smart TV Support", desc: "Streaming & TV fixes." },
                { href: "/faq", title: "FAQ", desc: "Common questions." },
                { href: "/contact", title: "Get Help", desc: "Remote tech support." },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"
                >
                  <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">
                    {g.title}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
