import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Computer Running Slow? 12 Easy Fixes to Speed Up Your PC (2026) | TechSupport4",
  description:
    "Computer running slow? Speed up your Windows PC or Mac with our 12-step guide — covers startup programs, disk cleanup, RAM usage, malware, and hardware upgrades.",
  alternates: { canonical: "/computer-running-slow" },
  openGraph: {
    title: "Computer Running Slow? 12 Easy Fixes to Speed Up Your PC",
    description: "Speed up a slow Windows PC or Mac with proven fixes.",
    type: "article",
    url: "https://techsupport4.com/computer-running-slow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Slow Computer | TechSupport4",
    description: "12 proven fixes to speed up your slow PC or Mac.",
  },
};

const faqs = [
  {
    q: "Why is my computer so slow all of a sudden?",
    a: "Sudden slowdowns are usually caused by: (1) A Windows update running in the background, (2) A program using 100% of your CPU or disk — check Task Manager, (3) Malware infection, (4) Hard drive running out of space (below 10% free), (5) Too many browser tabs open consuming RAM, (6) A failing hard drive. Open Task Manager (Ctrl+Shift+Esc) and check the Performance tab for the bottleneck.",
  },
  {
    q: "How much RAM do I need for my computer to run fast?",
    a: "Minimum recommended: 8 GB for basic use (web, email, office). 16 GB for multitasking and heavier workloads. 32 GB+ for video editing, gaming, or running virtual machines. If your computer has 4 GB, upgrading RAM is the single most impactful speed improvement you can make.",
  },
  {
    q: "Will an SSD make my computer faster?",
    a: "Yes — upgrading from a traditional hard drive (HDD) to a Solid State Drive (SSD) is the single biggest speed upgrade for any computer. Boot time drops from 1-3 minutes to 10-20 seconds. Programs open instantly. File transfers are 5-10x faster. If your computer has an HDD, an SSD upgrade makes it feel like a new machine.",
  },
  {
    q: "How do I check what's slowing down my computer?",
    a: "Open Task Manager: press Ctrl + Shift + Esc. Go to the Processes tab and click on CPU, Memory, or Disk columns to sort by usage. The process using the most resources is your bottleneck. Common culprits: antivirus scans, Windows Update (svchost.exe), Chrome with many tabs, or malware processes.",
  },
  {
    q: "How often should I restart my computer?",
    a: "Restart at least once a week. Restarting clears temporary files, resets RAM, closes leaked memory from programs, and installs pending updates. If your computer is slow, a restart should be your first step — many slowdowns are simply programs that have accumulated memory leaks over days of being left on.",
  },
];

export default function ComputerRunningSlow() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Computer Running Slow? 12 Easy Fixes to Speed Up Your PC",
            description: "Speed up your slow Windows PC or Mac with proven techniques.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-02-01",
            dateModified: "2026-02-27",
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
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Computer Running Slow</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Performance Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Computer Running Slow? 12 Easy Fixes to Speed Up Your PC
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Identify exactly what&apos;s slowing down your computer and fix it — covers Windows 11/10 and Mac with step-by-step instructions for every performance issue.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>15 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            A slow computer doesn&apos;t always mean you need a new one. In most cases, a few targeted fixes can dramatically improve performance. This guide helps you identify your specific bottleneck — CPU, RAM, disk, or malware — and fix it with proven techniques.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 0: Identify the Bottleneck</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Before trying random fixes, identify what&apos;s actually slow:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Ctrl + Shift + Esc</strong> to open Task Manager</li>
            <li>Click <strong>Performance</strong> tab — look at CPU, Memory, and Disk</li>
            <li>If <strong>CPU is at 100%</strong>: A process is hogging the processor → see Fix 2</li>
            <li>If <strong>Memory is above 90%</strong>: You need to free RAM or upgrade → see Fixes 3-4</li>
            <li>If <strong>Disk is at 100%</strong>: Your hard drive is the bottleneck → see Fixes 8-9</li>
            <li><strong>Mac:</strong> Open Activity Monitor (Spotlight → &quot;Activity Monitor&quot;) for the same information</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Restart Your Computer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This sounds obvious but genuinely works. Restarting clears temporary files, resets RAM, closes memory-leaking programs, and finishes pending updates. If you haven&apos;t restarted in days, do it now. Use <strong>Restart</strong>, not Shut Down in Windows 11/10 — Shut Down uses &quot;Fast Startup&quot; which doesn&apos;t fully reset the system.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Disable Startup Programs</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Too many startup programs make booting slow and consume resources:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Ctrl + Shift + Esc</strong> → go to <strong>Startup</strong> tab (or <strong>Startup apps</strong> in Windows 11)</li>
            <li>Look at the <strong>Startup impact</strong> column</li>
            <li><strong>Disable</strong> anything you don&apos;t need immediately at boot: Spotify, Discord, Teams, Adobe, OneDrive, Skype, Steam</li>
            <li>Keep enabled: antivirus, graphics drivers, audio services</li>
            <li><strong>Mac:</strong> System Settings → General → Login Items → remove unnecessary entries</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Close Resource-Hungry Programs</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            In Task Manager (Processes tab), click the <strong>Memory</strong> column to sort by RAM usage. Chrome with many tabs is the usual culprit — each tab uses 100-500 MB. Close tabs you&apos;re not using. Other RAM hogs: Slack, Teams, Photoshop, VS Code with many extensions. If a process you don&apos;t recognize is using a lot of resources, search its name online — it might be malware.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Free Up Disk Space</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Windows needs at least 10-15% free disk space to function well:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → System → Storage</strong> — see what&apos;s using space</li>
            <li>Click <strong>Temporary files</strong> → select all → <strong>Remove files</strong></li>
            <li>Empty the <strong>Recycle Bin</strong></li>
            <li>Uninstall programs you no longer use: <strong>Settings → Apps → Installed apps</strong></li>
            <li>Use <strong>Disk Cleanup</strong>: search &quot;Disk Cleanup&quot; → select drive → check all boxes → &quot;Clean up system files&quot; for more space</li>
            <li>Move large files (photos, videos) to an external drive or cloud storage</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Scan for Malware</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Malware running in the background can consume CPU, RAM, and bandwidth. Run a full scan: <strong>Windows:</strong> Open Windows Security → Virus & threat protection → Scan options → Full scan. Also run <strong>Malwarebytes</strong> (free version) for a second opinion — it catches things Windows Defender misses. <strong>Mac:</strong> While Macs rarely get viruses, install Malwarebytes for Mac if you suspect an issue.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Update Windows/macOS</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Outdated operating systems can have performance bugs that are fixed in updates. <strong>Windows:</strong> Settings → Windows Update → Check for updates → install all updates and restart. <strong>Mac:</strong> System Settings → General → Software Update. However, note that <em>in-progress</em> updates can temporarily slow your computer — if Windows Update is downloading in the background, let it finish.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Adjust Visual Effects (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Windows animations and visual effects consume resources. Disable them for a speed boost on older hardware: Search <strong>&quot;Adjust the appearance and performance of Windows&quot;</strong> → select <strong>&quot;Adjust for best performance&quot;</strong> or manually uncheck animations, shadow effects, and transparency. This makes a noticeable difference on computers with older CPUs or integrated graphics.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Fix 100% Disk Usage (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If Task Manager shows Disk at 100%, your hard drive can&apos;t keep up:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Disable <strong>SysMain (Superfetch)</strong>: services.msc → SysMain → Stop → set to Disabled</li>
            <li>Disable <strong>Windows Search indexing</strong>: services.msc → Windows Search → Stop → Disabled</li>
            <li>Check for disk errors: open Command Prompt as admin → <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">chkdsk C: /f /r</code> (requires restart)</li>
            <li>The permanent fix for 100% disk on an HDD: <strong>upgrade to an SSD</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Upgrade to an SSD</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If your computer has a traditional spinning hard drive (HDD), upgrading to a Solid State Drive (SSD) is the single most impactful upgrade. Boot time drops from minutes to seconds. Applications open instantly. Overall system responsiveness improves dramatically. A 500 GB SSD costs around $40-60 and can be installed by any computer repair shop, or you can do it yourself with a cloning tool.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 10: Upgrade RAM</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If Task Manager consistently shows Memory above 85-90%, you need more RAM. Check your current RAM: <strong>Settings → System → About → Installed RAM</strong>. If you have 4 GB, upgrade to at least 8 GB. If 8 GB, consider 16 GB. RAM upgrades are inexpensive ($20-50) and easy to install on most desktop PCs and many laptops.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 11: Reset Windows (Last Resort)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If nothing else works and years of software buildup have made the computer unbearably slow: <strong>Settings → System → Recovery → Reset this PC → Keep my files</strong>. This reinstalls Windows while preserving your personal files but removes all installed applications. It gives you a &quot;clean slate&quot; and often makes an old computer feel new again.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 12: Speed Up Mac</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Reduce <strong>Login Items</strong>: System Settings → General → Login Items</li>
            <li>Free storage: Apple menu → About This Mac → Storage → Manage</li>
            <li>Reduce <strong>transparency and motion</strong>: System Settings → Accessibility → Display → Reduce motion</li>
            <li>Reset <strong>SMC</strong>: Shut down → hold Shift + Control + Option + Power for 10 seconds (Intel Macs)</li>
            <li>For Apple Silicon Macs, simply restart — they don&apos;t have SMC</li>
          </ul>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
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

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Computer Still Running Slow?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely diagnose performance bottlenecks and optimize your system.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blue-screen-of-death-fix" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Blue Screen of Death Fix</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix BSOD crashes and system instability.</p>
              </Link>
              <Link href="/windows-update-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Windows Update Issues?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Updates can slow down or fix performance.</p>
              </Link>
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Slow internet feels like a slow computer.</p>
              </Link>
              <Link href="/google-chrome-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Chrome Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Chrome is often the biggest RAM consumer.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
