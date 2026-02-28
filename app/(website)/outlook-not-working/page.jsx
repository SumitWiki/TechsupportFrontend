import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Outlook Not Working? Fix Outlook Desktop & Web Issues (2026) | TechSupport4",
  description:
    "Outlook not working? Fix Outlook desktop, Outlook 365, and Outlook.com — covers not opening, not sending emails, not syncing, search not working, and crashes.",
  alternates: { canonical: "/outlook-not-working" },
  openGraph: {
    title: "Outlook Not Working? Fix Outlook Desktop & Web Issues",
    description: "Fix Outlook crashes, sync failures, and sending issues.",
    type: "article",
    url: "https://techsupport4.com/outlook-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Outlook Not Working | TechSupport4",
    description: "Complete Outlook troubleshooting for desktop and web.",
  },
};

const faqs = [
  {
    q: "Why is Outlook not opening?",
    a: "Outlook failing to open is usually caused by: (1) A corrupted Outlook profile, (2) A faulty add-in, (3) A damaged PST/OST data file, (4) Corrupt Office installation. Try: start Outlook in Safe Mode (hold Ctrl while clicking Outlook icon, or run 'outlook.exe /safe'). If it opens in Safe Mode, an add-in is the problem — disable them one by one.",
  },
  {
    q: "How do I fix Outlook not sending emails?",
    a: "Steps: (1) Check your Outbox for stuck messages — delete them and retry, (2) Verify your account settings — File → Account Settings → verify SMTP server and port, (3) Check if Outlook is in 'Work Offline' mode — click Send/Receive tab and make sure 'Work Offline' is NOT highlighted, (4) Repair your Office installation, (5) Create a new Outlook profile if the issue persists.",
  },
  {
    q: "Why is Outlook not syncing with my email?",
    a: "Sync failures: (1) Check internet connection, (2) Verify account credentials haven't changed, (3) If using Exchange/365, check with your IT admin for server issues, (4) Try removing and re-adding the account, (5) Run Outlook in Safe Mode to rule out add-in interference, (6) Repair the OST file by deleting it (Outlook will rebuild it on next sync).",
  },
  {
    q: "Why is Outlook search not finding emails?",
    a: "Outlook search depends on Windows Search indexing. Fix: (1) Rebuild the search index: File → Options → Search → Indexing Options → Advanced → Rebuild, (2) Make sure 'Microsoft Outlook' is checked as an indexed location, (3) Wait for indexing to complete (may take hours), (4) Alternatively, repair Office installation which also fixes the search index.",
  },
  {
    q: "How do I repair a corrupt Outlook PST file?",
    a: "Use the built-in Inbox Repair Tool (scanpst.exe). Location: C:\\Program Files\\Microsoft Office\\root\\Office16\\SCANPST.EXE (path varies by version). Run it, browse to your PST file, and click 'Start'. It will scan and repair errors. Always back up the PST file before repair. If scanpst can't fix it, try creating a new PST and importing data.",
  },
];

export default function OutlookNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Outlook Not Working? Fix Outlook Desktop & Web Issues",
            description: "Complete Outlook troubleshooting guide.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-29",
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
              <Link href="/email-not-working" className="hover:text-white transition">Email Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Outlook</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Application Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Outlook Not Working? Fix Outlook Desktop &amp; Web Issues
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix Microsoft Outlook problems — not opening, not sending, not syncing, crashing, search failures, and more. Covers Outlook desktop, Outlook 365, and Outlook.com.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Microsoft Outlook is the backbone of business email, and when it stops working, productivity grinds to a halt. Whether Outlook won&apos;t open, won&apos;t send emails, keeps crashing, or won&apos;t sync, this guide has the fix. We cover Outlook desktop (part of Microsoft Office/365), the new Outlook for Windows, and Outlook.com (web version).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Start Outlook in Safe Mode</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Safe Mode disables all add-ins and custom settings. If Outlook works in Safe Mode, an add-in is causing the problem:
          </p>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-4 overflow-x-auto">
            <p className="text-slate-400"># Method 1 — Hold Ctrl while clicking Outlook icon</p>
            <p className="text-slate-400"># Method 2 — Run command:</p>
            <p>outlook.exe /safe</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If Outlook opens in Safe Mode, go to <strong>File → Options → Add-ins → Manage: COM Add-ins → Go</strong> — uncheck all add-ins, restart normally, then re-enable one at a time to find the culprit.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Repair Microsoft Office</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Settings → Apps → Installed apps</strong></li>
            <li>Find <strong>Microsoft Office</strong> or <strong>Microsoft 365</strong></li>
            <li>Click the three dots → <strong>Modify</strong></li>
            <li>Select <strong>&quot;Quick Repair&quot;</strong> first — this fixes most issues in minutes</li>
            <li>If Quick Repair doesn&apos;t work, run <strong>&quot;Online Repair&quot;</strong> (requires internet, takes longer but is more thorough)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Disable Work Offline Mode</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            In Outlook desktop, click the <strong>Send/Receive</strong> tab. If <strong>&quot;Work Offline&quot;</strong> is highlighted/pressed, click it to turn it off. When Work Offline is enabled, Outlook won&apos;t send or receive any emails — this is accidentally activated more often than you&apos;d think.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Create a New Outlook Profile</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            A corrupted Outlook profile causes many issues — not opening, not syncing, or constant crashes:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Control Panel → Mail (Microsoft Outlook)</strong></li>
            <li>Click <strong>Show Profiles</strong></li>
            <li>Click <strong>Add</strong> → name it &quot;New Profile&quot;</li>
            <li>Set up your email account in the new profile</li>
            <li>Set the new profile as default: <strong>&quot;Always use this profile&quot; → select New Profile</strong></li>
            <li>Restart Outlook — it will use the fresh profile</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Repair Outlook Data File (PST/OST)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Outlook stores emails in PST (POP accounts) or OST (IMAP/Exchange) files. If these get corrupted:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>For PST files:</strong> Use <strong>SCANPST.EXE</strong> (Inbox Repair Tool). Find it in: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">C:\Program Files\Microsoft Office\root\Office16\</code></li>
            <li>Run SCANPST → browse to your PST file → Start → Repair</li>
            <li><strong>For OST files:</strong> Close Outlook → navigate to <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">%localappdata%\Microsoft\Outlook\</code> → delete the .ost file → reopen Outlook — it will rebuild the OST from the server</li>
            <li>To find your data file location: Outlook → File → Account Settings → Data Files tab</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Fix Outlook Not Sending Emails</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check your <strong>Outbox</strong> for stuck emails — open each one and try resending or delete and recreate</li>
            <li>Make sure <strong>Work Offline</strong> is disabled (Send/Receive tab)</li>
            <li>Verify SMTP settings: <strong>File → Account Settings → select account → Change → More Settings → Outgoing Server</strong></li>
            <li>Check &quot;My outgoing server requires authentication&quot;</li>
            <li>Use port <strong>587</strong> with <strong>TLS</strong> encryption</li>
            <li>If using Microsoft 365, try sending from <strong>outlook.office.com</strong> (web version) to confirm the account itself works</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Fix Outlook Search</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>File → Options → Search → Indexing Options</strong></li>
            <li>Make sure <strong>Microsoft Outlook</strong> is listed as an indexed location</li>
            <li>Click <strong>Advanced → Rebuild</strong> — this rebuilds the search index from scratch</li>
            <li>Wait for indexing to complete (can take 1-4 hours depending on mailbox size)</li>
            <li>If still broken, repair Office installation (see Fix 2)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Fix Outlook Calendar Not Syncing</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Calendar sync issues often affect Exchange/365 accounts. Fix: (1) Make sure the calendar is selected in the folder pane, (2) Send/Receive tab → Update Folder, (3) Check shared calendar permissions with your IT admin, (4) Remove and re-add the Exchange account, (5) If using Outlook.com, go to calendar.live.com to verify events exist server-side.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Outlook.com (Web) Issues</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Won&apos;t load:</strong> Clear browser cache, try Incognito/Private mode, try a different browser</li>
            <li><strong>Slow:</strong> Disable browser extensions, especially ad blockers which can interfere</li>
            <li><strong>Not receiving:</strong> Check Junk folder, check Focused vs. Other inbox tab, check rules (Settings → Rules)</li>
            <li><strong>Can&apos;t sign in:</strong> Go to account.live.com for password reset and account recovery</li>
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
            <h3 className="text-2xl font-heading font-bold">Outlook Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely fix Outlook profile, data file, and configuration issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/email-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Email Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">General email troubleshooting for all providers.</p>
              </Link>
              <Link href="/gmail-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Gmail Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Google-specific email troubleshooting.</p>
              </Link>
              <Link href="/computer-running-slow" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Computer Running Slow?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Slow PC = slow Outlook. Speed up your system.</p>
              </Link>
              <Link href="/windows-update-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Windows Update Issues?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Updates can break Outlook — fix update issues.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
