import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Outlook Not Sending Emails on Windows 11? Fix Guide (2026)",
  description: "Outlook not sending emails on Windows 11? Fix stuck outbox, SMTP errors, authentication failures, and send/receive issues with this step-by-step guide.",
  alternates: { canonical: "/outlook-not-sending-emails-windows-11" },
  openGraph: { title: "Outlook Not Sending Emails Windows 11 — Fix Guide", description: "Fix Outlook send failures on Windows 11.", type: "article", url: "https://techsupport4.com/outlook-not-sending-emails-windows-11" },
  twitter: { card: "summary_large_image", title: "Outlook Send Fix Win11 | TechSupport4", description: "Outlook not sending emails on Win11 — fix guide." },
};

const faqs = [
  { q: "Why is Outlook not sending emails on Windows 11?", a: "Common causes: (1) Outbox has stuck/corrupted email blocking the queue, (2) SMTP server settings incorrect — check outgoing server port (587 for TLS, 465 for SSL), (3) Antivirus scanning outgoing mail and blocking it, (4) Attachment too large — most email providers cap at 25 MB, (5) Outlook profile corrupted, (6) 'Work Offline' mode accidentally enabled, (7) Authentication credentials expired." },
  { q: "How do I fix stuck emails in Outlook Outbox?", a: "Method 1: Switch to Offline mode (Send/Receive tab → Work Offline) → open Outbox → open the stuck email → edit slightly or move to Drafts → switch back online. Method 2: Close Outlook → navigate to your Outlook data file folder → delete the Outbox folder contents. Method 3: Create a new Outlook profile if Outbox keeps getting stuck." },
  { q: "Outlook sends but recipient never receives — what's wrong?", a: "Check: (1) Look in 'Sent Items' — if it's not there, it didn't actually send, (2) Check recipient's spam/junk folder, (3) Your domain/IP may be blacklisted — common with shared hosting, (4) SPF/DKIM records misconfigured if using custom domain, (5) The attachment may have been stripped by the recipient's server — try sending without attachments." },
  { q: "How do I reset Outlook on Windows 11?", a: "Quick reset: Settings → Apps → Microsoft Outlook → Advanced options → Reset. Or create a new Outlook profile: Control Panel → Mail → Show Profiles → Add → set up your account again and make it default. The new profile gets fresh settings while keeping server-side email intact." },
  { q: "Outlook error 0x8004010F when sending — what does it mean?", a: "This 'data file cannot be accessed' error means Outlook can't find or write to the .ost or .pst file. Fix: (1) Repair the data file: close Outlook → run scanpst.exe (usually in C:\\Program Files\\Microsoft Office\\root\\Office16) → scan and repair, (2) Set the correct delivery location in Account Settings → Data Files, (3) Create a new Outlook profile if repair fails." },
];

export default function OutlookNotSendingWindows11() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Outlook Not Sending Emails on Windows 11 — Fix Guide", description: "Fix Outlook send failures on Windows 11.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-26", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/outlook-not-working" className="hover:text-white transition">Outlook Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Not Sending on Win11</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Outlook Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Outlook Not Sending Emails on Windows 11? Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Emails stuck in Outbox? Outlook won&apos;t send on Windows 11? Fix SMTP configuration, stuck messages, authentication errors, and send/receive failures.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">You click Send, but emails sit in Outbox and never leave — or Outlook throws a send/receive error. This is especially common on Windows 11 due to the new Outlook app changes and Microsoft&apos;s authentication updates. Here&apos;s how to fix every common scenario.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Disable Work Offline Mode</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">The simplest cause: Open Outlook → go to the <strong>Send/Receive</strong> tab → check if <strong>&quot;Work Offline&quot;</strong> is highlighted/active. If yes, click it to disable. The status bar at the bottom should change from &quot;Working Offline&quot; to &quot;Connected.&quot;</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Clear Stuck Emails from Outbox</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Go to <strong>Send/Receive tab → Work Offline</strong> (enable it temporarily)</li>
            <li>Open the <strong>Outbox</strong> folder</li>
            <li>Open each stuck email → either <strong>move it to Drafts</strong> or <strong>delete it</strong></li>
            <li>Go back to Send/Receive → click <strong>Work Offline</strong> to go back online</li>
            <li>Re-send from Drafts if needed</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check SMTP Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Incorrect outgoing server settings cause most send failures:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li>Open <strong>File → Account Settings → Account Settings</strong></li>
            <li>Select your account → click <strong>Change</strong></li>
            <li>Click <strong>More Settings → Outgoing Server</strong></li>
            <li>Ensure <strong>&quot;My outgoing server requires authentication&quot;</strong> is checked</li>
            <li>Go to <strong>Advanced</strong> tab → verify:</li>
          </ol>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <thead><tr className="bg-slate-100 dark:bg-slate-700"><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">Provider</th><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">SMTP Server</th><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">Port</th><th className="text-left p-3 font-semibold text-slate-700 dark:text-slate-200">Encryption</th></tr></thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700"><td className="p-3 text-slate-600 dark:text-slate-300">Microsoft 365</td><td className="p-3 text-slate-600 dark:text-slate-300">smtp.office365.com</td><td className="p-3 text-slate-600 dark:text-slate-300">587</td><td className="p-3 text-slate-600 dark:text-slate-300">STARTTLS</td></tr>
                <tr className="border-t border-slate-200 dark:border-slate-700"><td className="p-3 text-slate-600 dark:text-slate-300">Gmail</td><td className="p-3 text-slate-600 dark:text-slate-300">smtp.gmail.com</td><td className="p-3 text-slate-600 dark:text-slate-300">587</td><td className="p-3 text-slate-600 dark:text-slate-300">STARTTLS</td></tr>
                <tr className="border-t border-slate-200 dark:border-slate-700"><td className="p-3 text-slate-600 dark:text-slate-300">Yahoo</td><td className="p-3 text-slate-600 dark:text-slate-300">smtp.mail.yahoo.com</td><td className="p-3 text-slate-600 dark:text-slate-300">465</td><td className="p-3 text-slate-600 dark:text-slate-300">SSL/TLS</td></tr>
                <tr className="border-t border-slate-200 dark:border-slate-700"><td className="p-3 text-slate-600 dark:text-slate-300">iCloud</td><td className="p-3 text-slate-600 dark:text-slate-300">smtp.mail.me.com</td><td className="p-3 text-slate-600 dark:text-slate-300">587</td><td className="p-3 text-slate-600 dark:text-slate-300">STARTTLS</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Re-authenticate Your Account</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Close Outlook completely</li>
            <li>Open <strong>Control Panel → Credential Manager → Windows Credentials</strong></li>
            <li>Remove any entries related to <strong>Outlook, Office, or MicrosoftOffice</strong></li>
            <li>Open Outlook — it will prompt for your password again</li>
            <li>Enter your current password (or app password if using 2FA)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Disable Antivirus Email Scanning</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Some antivirus programs (Norton, Avast, Kaspersky) scan outgoing emails and can block them. Open your antivirus → find <strong>Email Protection</strong> or <strong>Mail Shield</strong> settings → temporarily disable <strong>outgoing email scanning</strong>. Try sending again. If it works, add Outlook to the antivirus exclusion list.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check Attachment Size</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Microsoft 365/Outlook.com:</strong> 25 MB attachment limit per email</li>
            <li><strong>Gmail (via Outlook):</strong> 25 MB total including email body</li>
            <li><strong>Corporate Exchange:</strong> Often set to 10-20 MB by your IT admin</li>
            <li>For large files, use <strong>OneDrive sharing</strong> instead — Outlook has a built-in &quot;Upload to OneDrive&quot; button</li>
            <li>If a large email is stuck in Outbox, it may be blocking smaller emails behind it</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Repair Outlook Data File</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Close Outlook completely</li>
            <li>Navigate to: <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">C:\Program Files\Microsoft Office\root\Office16</code></li>
            <li>Run <strong>SCANPST.EXE</strong> (Inbox Repair Tool)</li>
            <li>Browse to your Outlook data file (.ost or .pst)</li>
            <li>Click <strong>Start</strong> to scan</li>
            <li>If errors found, click <strong>Repair</strong></li>
            <li>Open Outlook and try sending again</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Create New Outlook Profile</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If nothing else works, the Outlook profile may be corrupted:</p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Close Outlook</li>
            <li>Open <strong>Control Panel → Mail → Show Profiles</strong></li>
            <li>Click <strong>Add</strong> → name it (e.g., &quot;New Profile&quot;)</li>
            <li>Set up your email account</li>
            <li>Set the new profile as <strong>&quot;Always use this profile&quot;</strong></li>
            <li>Open Outlook — it will use the fresh profile with clean settings</li>
          </ol>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Outlook Still Not Sending?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can fix Outlook configuration and send/receive errors remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/outlook-password-not-accepted", title: "Outlook Password Issue", desc: "Fix Outlook password errors." },
                { href: "/outlook-not-working", title: "Outlook Not Working?", desc: "General Outlook fix guide." },
                { href: "/gmail-not-loading-in-chrome", title: "Gmail Not Loading", desc: "Fix Gmail in Chrome." },
                { href: "/email-not-working", title: "Email Not Working?", desc: "Universal email fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
