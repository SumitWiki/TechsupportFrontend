import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Windows Update Not Working? Fix Stuck, Failed & Error Updates (2026) | TechSupport4",
  description:
    "Windows Update not working? Fix stuck updates, failed installations, error codes, and update loops on Windows 11 and Windows 10 with our complete guide.",
  alternates: { canonical: "/windows-update-not-working" },
  openGraph: {
    title: "Windows Update Not Working? Fix Stuck & Failed Updates",
    description: "Fix Windows Update errors on Windows 11/10.",
    type: "article",
    url: "https://techsupport4.com/windows-update-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Windows Update | TechSupport4",
    description: "Fix stuck, failed, and errored Windows Updates.",
  },
};

const faqs = [
  {
    q: "Why is Windows Update stuck at a percentage?",
    a: "Updates can appear stuck but are actually processing large files. Wait at least 2 hours before assuming it's stuck. If truly stuck: (1) Restart computer, (2) Run Windows Update Troubleshooter, (3) Clear the update cache: stop Windows Update service, delete files in C:\\Windows\\SoftwareDistribution\\Download, restart service. Don't force shut down during an update — this can corrupt system files.",
  },
  {
    q: "How do I fix Windows Update error codes?",
    a: "Common error codes: 0x80070002 (missing file — run SFC), 0x80073712 (component store corruption — run DISM), 0x800f0922 (not enough disk space — free space), 0x80244019 (server error — try later). For any error code, first try: Windows Update Troubleshooter, then SFC/DISM, then clear the update cache.",
  },
  {
    q: "Can I skip a Windows Update?",
    a: "You can pause updates for up to 5 weeks: Settings → Windows Update → Pause updates. For specific updates causing problems, you can 'hide' them using Microsoft's 'Show or hide updates' tool (wushowhide.diagcab) from Microsoft. However, skipping security updates long-term is not recommended — they patch vulnerabilities.",
  },
  {
    q: "Why does Windows keep restarting to update?",
    a: "Windows forces restarts for updates that modify system files. Fix the restart loop: (1) Settings → Windows Update → Advanced options → set Active hours so updates don't restart during work, (2) If stuck in a restart loop: boot into Safe Mode → uninstall the update via Settings → Update history → Uninstall updates.",
  },
  {
    q: "How long should a Windows Update take?",
    a: "Normal updates: 10-30 minutes. Feature updates (major versions): 30-90 minutes depending on your hardware. If an update takes more than 2 hours, it may be stuck. Check: is the disk activity light still blinking? If yes, it's still working. Don't force restart during the 'Working on updates' screen — this can corrupt Windows.",
  },
];

export default function WindowsUpdateNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Windows Update Not Working? Fix Stuck & Failed Updates",
            description: "Fix Windows Update errors, stuck updates, and failed installations.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-02-05",
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
              <span className="text-white">Windows Update Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">System Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Windows Update Not Working? Fix Stuck &amp; Failed Updates
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix Windows Update errors, stuck downloads, failed installations, and restart loops on Windows 11 and Windows 10 with proven step-by-step solutions.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Windows Update is essential for security patches and feature improvements, but it&apos;s also one of the most error-prone parts of Windows. Updates get stuck, fail with cryptic error codes, or cause boot loops. This guide covers every common Windows Update problem with clear fixes.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Run Windows Update Troubleshooter</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The built-in troubleshooter fixes many update issues automatically: <strong>Settings → System → Troubleshoot → Other troubleshooters → Windows Update → Run</strong>. It resets update components, clears corrupt cache, and fixes service configurations. Run this first before trying manual fixes.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Clear Windows Update Cache</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Run Command Prompt as Administrator:</p>
            <p>net stop wuauserv</p>
            <p>net stop bits</p>
            <p>del /Q /F /S &quot;C:\Windows\SoftwareDistribution\Download\*.*&quot;</p>
            <p>net start wuauserv</p>
            <p>net start bits</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This stops the update services, deletes corrupted/partially downloaded update files, and restarts the services. Windows will re-download updates fresh.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Run SFC and DISM</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Repair system files:</p>
            <p>sfc /scannow</p>
            <p className="mt-2 text-slate-400"># Repair Windows image:</p>
            <p>DISM /Online /Cleanup-Image /RestoreHealth</p>
            <p className="mt-2 text-slate-400"># Run SFC again after DISM:</p>
            <p>sfc /scannow</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Corrupted system files prevent updates from installing. SFC and DISM repair the Windows component store, fixing most update failures.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Free Up Disk Space</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Windows updates need free disk space — sometimes 10 GB or more for feature updates. Check your C: drive space. If low: empty Recycle Bin, run Disk Cleanup (search &quot;Disk Cleanup&quot; → clean up system files), delete temp files via Settings → System → Storage → Temporary files, and uninstall programs you no longer use.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Reset Windows Update Components</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Complete Windows Update reset (Admin CMD):</p>
            <p>net stop wuauserv</p>
            <p>net stop cryptSvc</p>
            <p>net stop bits</p>
            <p>net stop msiserver</p>
            <p>ren C:\Windows\SoftwareDistribution SoftwareDistribution.old</p>
            <p>ren C:\Windows\System32\catroot2 catroot2.old</p>
            <p>net start wuauserv</p>
            <p>net start cryptSvc</p>
            <p>net start bits</p>
            <p>net start msiserver</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            This is the &quot;nuclear option&quot; for update components — it renames the update cache folders, forcing Windows to rebuild everything from scratch.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Manually Download Updates</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If automatic updates keep failing, download them manually from the <strong>Microsoft Update Catalog</strong> (catalog.update.microsoft.com). Search for the update KB number (shown in the error message). Download the correct version for your system (x64 or ARM64) and run the installer. This bypasses the automatic update mechanism entirely.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Fix Update Boot Loop</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If Windows keeps restarting trying to apply an update that fails:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Force power off 3 times during boot to trigger <strong>Automatic Repair</strong></li>
            <li>Go to <strong>Advanced options → Safe Mode</strong></li>
            <li>In Safe Mode: <strong>Settings → Windows Update → Update history → Uninstall updates</strong></li>
            <li>Uninstall the most recent update that caused the loop</li>
            <li>Alternatively, use <strong>System Restore</strong> from the recovery menu to roll back</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check Windows Update Service</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The Windows Update service itself may have stopped: Press <strong>Win + R</strong> → type <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">services.msc</code> → find <strong>Windows Update</strong> → make sure Status is &quot;Running&quot; and Startup type is &quot;Automatic (Delayed Start)&quot;. Also check <strong>Background Intelligent Transfer Service (BITS)</strong> — it needs to be running too.
          </p>

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
            <h3 className="text-2xl font-heading font-bold">Windows Update Still Failing?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely fix update errors, component corruption, and boot loops.</p>
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
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Updates can cause BSODs — fix them here.</p>
              </Link>
              <Link href="/computer-running-slow" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Computer Running Slow?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Background updates may be slowing your PC.</p>
              </Link>
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Updates need internet — fix connection first.</p>
              </Link>
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Complete internet troubleshooting guide.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
