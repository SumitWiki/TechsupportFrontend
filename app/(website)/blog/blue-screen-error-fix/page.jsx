import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "How to Fix Blue Screen Error in Windows (BSOD Guide 2026) | TechSupport4",
  description:
    "Fix the Blue Screen of Death (BSOD) on Windows 10 and 11. Step-by-step guide covering common stop codes, driver fixes, memory diagnostics, and SFC/DISM commands.",
  alternates: { canonical: "/blog/blue-screen-error-fix" },
  openGraph: { title: "How to Fix Blue Screen Error in Windows (BSOD Guide)", description: "Complete BSOD troubleshooting guide for Windows 10/11.", type: "article", url: "https://techsupport4.com/blog/blue-screen-error-fix" },
  twitter: { card: "summary_large_image", title: "Fix Blue Screen Error (BSOD) | TechSupport4", description: "Stop codes, driver fixes, and system repair for Windows blue screens." },
};

const faqs = [
  { q: "What causes a Blue Screen of Death (BSOD)?", a: "BSODs are caused by critical system errors that Windows cannot recover from. Common causes include faulty drivers, corrupted system files, failing hardware (especially RAM and hard drives), overheating, incompatible software, and Windows update problems." },
  { q: "Is a blue screen error always a hardware problem?", a: "No. While hardware failures can cause BSODs, the majority are caused by software issues — especially outdated or incompatible drivers, corrupted Windows system files, or recently installed software. Start with software troubleshooting before assuming hardware failure." },
  { q: "How do I find the BSOD stop code?", a: "The stop code is displayed on the blue screen itself (e.g., DRIVER_IRQL_NOT_LESS_OR_EQUAL). If you missed it, open Event Viewer (eventvwr.msc), go to Windows Logs > System, and look for Critical errors around the time of the crash." },
  { q: "Can I fix a BSOD without losing data?", a: "Yes, in most cases. The troubleshooting steps in this guide (driver updates, SFC/DISM, memory diagnostics) do not delete your files. However, if a BSOD is caused by a failing hard drive, back up your data immediately before the drive fails completely." },
  { q: "Why does my PC blue screen only during gaming?", a: "Gaming BSODs are usually caused by overheating (check GPU/CPU temperatures with HWMonitor), outdated or unstable GPU drivers, insufficient power supply, or faulty RAM. Try updating your graphics driver, improving airflow, and running a memory diagnostic." },
];

export default function BlogPost() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Fix Blue Screen Error in Windows (BSOD Guide)", description: "Complete BSOD troubleshooting guide.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-22", dateModified: "2026-03-01" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Blue Screen Fix</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Windows Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">How to Fix Blue Screen Error in Windows (BSOD Guide)</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Diagnose and fix the Blue Screen of Death on Windows 10 and 11 with our step-by-step troubleshooting guide.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Mar 2026</span><span className="w-1 h-1 rounded-full bg-blue-400"></span><span>10 min read</span>
            </div>
          </div>
        </section>

        <article className="article-content max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            The Blue Screen of Death (BSOD) — a full-screen blue error with a sad face and a stop code — is one of the most feared errors on Windows. It means your system encountered a critical error and had to restart. While it looks alarming, most BSODs can be fixed with systematic troubleshooting. This guide covers the most common stop codes and walks you through every fix, from simple driver updates to advanced system repair.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Common BSOD Stop Codes and What They Mean</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Stop Code</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Common Cause</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">DRIVER_IRQL_NOT_LESS_OR_EQUAL</td><td className="px-4 py-3">Faulty or incompatible driver</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">CRITICAL_PROCESS_DIED</td><td className="px-4 py-3">Corrupted system file or driver</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">PAGE_FAULT_IN_NONPAGED_AREA</td><td className="px-4 py-3">Failing RAM or corrupted driver</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">SYSTEM_SERVICE_EXCEPTION</td><td className="px-4 py-3">Driver conflict or system file corruption</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">IRQL_NOT_LESS_OR_EQUAL</td><td className="px-4 py-3">Hardware driver accessing invalid memory</td></tr>
                <tr className="border-b border-slate-200 dark:border-slate-700"><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">KERNEL_DATA_INPAGE_ERROR</td><td className="px-4 py-3">Hard drive or SSD failure</td></tr>
                <tr><td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">WHEA_UNCORRECTABLE_ERROR</td><td className="px-4 py-3">Hardware failure (CPU, RAM, or motherboard)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Update or Roll Back Drivers</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The most common cause of BSODs is a faulty driver — especially graphics, network, and chipset drivers:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + X</strong> → <strong>Device Manager</strong></li>
            <li>Look for devices with a yellow warning triangle</li>
            <li>Right-click the device → <strong>Update driver</strong> → <strong>Search automatically</strong></li>
            <li>If the BSOD started after a driver update, right-click → <strong>Properties</strong> → <strong>Driver tab</strong> → <strong>Roll Back Driver</strong></li>
            <li>For GPU drivers, download the latest version directly from <strong>NVIDIA</strong>, <strong>AMD</strong>, or <strong>Intel</strong>&apos;s website</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Run SFC and DISM (Repair System Files)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Corrupted system files can cause many BSOD stop codes. Run these commands in an elevated Command Prompt:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Step 1: Repair Windows image</p>
            <p>DISM /Online /Cleanup-Image /RestoreHealth</p>
            <p className="mt-3 text-slate-400"># Step 2: Scan and fix system files</p>
            <p>sfc /scannow</p>
            <p className="mt-3 text-slate-400"># Step 3: Restart</p>
            <p>shutdown /r /t 0</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            DISM downloads fresh copies of damaged system files from Windows Update. SFC then verifies and replaces any corrupted files. Always run DISM first, then SFC.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Run Windows Memory Diagnostic</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Faulty RAM is a common cause of BSODs, especially <strong>PAGE_FAULT_IN_NONPAGED_AREA</strong> and <strong>KERNEL_DATA_INPAGE_ERROR</strong>:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Win + R</strong>, type <strong>mdsched.exe</strong>, press Enter</li>
            <li>Click <strong>&quot;Restart now and check for problems&quot;</strong></li>
            <li>Windows will reboot and test your RAM (takes 10-20 minutes)</li>
            <li>After restart, check results in <strong>Event Viewer → Windows Logs → System</strong> — look for &quot;MemoryDiagnostics-Results&quot;</li>
            <li>If errors are found, you&apos;ll need to reseat or replace the faulty RAM stick</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Check for Disk Errors</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            A failing hard drive or SSD can cause BSODs. Run a disk check:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Run CHKDSK (repairs file system errors)</p>
            <p>chkdsk C: /f /r</p>
            <p className="mt-3 text-slate-400"># Will schedule for next restart — type Y and restart</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The <strong>/f</strong> flag fixes errors; <strong>/r</strong> locates bad sectors and recovers readable data. If CHKDSK finds many bad sectors, your drive may be failing — back up your data immediately.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Uninstall Recent Updates or Software</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If BSODs started after a Windows update or new software install:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → Windows Update → Update history → Uninstall updates</strong></li>
            <li>Find the most recent update and click <strong>Uninstall</strong></li>
            <li>For recently installed software: <strong>Settings → Apps → Installed apps</strong>, sort by date, and uninstall the suspect</li>
            <li>If you can&apos;t boot normally, boot into Safe Mode (hold Shift + click Restart), then uninstall from there</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Use System Restore</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            System Restore reverts Windows to a previous state without affecting your personal files:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Search for <strong>&quot;Create a restore point&quot;</strong> in the Start menu</li>
            <li>Click <strong>System Restore</strong></li>
            <li>Select a restore point from <em>before</em> the BSODs started</li>
            <li>Click <strong>Next → Finish</strong> and let Windows restore</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Check for Overheating</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Overheating CPUs and GPUs can cause BSODs, especially during gaming or heavy workloads:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Download <strong>HWMonitor</strong> or <strong>Core Temp</strong> to check temperatures</li>
            <li>CPU should stay below 85°C under load; GPU below 90°C</li>
            <li>If overheating: clean dust from fans and vents with compressed air, ensure proper airflow around your PC, and check that thermal paste isn&apos;t dried out (reapply every 3-5 years)</li>
            <li>For laptops: use a cooling pad and make sure vents aren&apos;t blocked</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Reset Windows (Last Resort)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If nothing else works, reset Windows while keeping your files:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Settings → System → Recovery</strong></li>
            <li>Click <strong>Reset this PC</strong></li>
            <li>Choose <strong>&quot;Keep my files&quot;</strong> (reinstalls Windows but preserves personal data)</li>
            <li>Select <strong>&quot;Cloud download&quot;</strong> for a fresh copy of Windows</li>
            <li>Follow the prompts to complete the reset</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Note:</strong> This will remove all installed programs and settings, but your documents, photos, and personal files in the Users folder are preserved.
          </p>

          {/* FAQ */}
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

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Still Getting Blue Screens?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can diagnose and fix persistent BSOD issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center bg-yellow-500 text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/laptop-running-slow" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Laptop Running Slow?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">10 proven speed boost tips.</p>
              </Link>
              <Link href="/blog/remove-virus-from-pc" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Remove Virus From PC</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Beginner-friendly malware removal guide.</p>
              </Link>
              <Link href="/blog/network-adapter-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Network Adapter Not Working</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fix network driver and adapter issues.</p>
              </Link>
              <Link href="/blog/wifi-connected-no-internet" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Connected But No Internet</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Quick solutions that actually work.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
