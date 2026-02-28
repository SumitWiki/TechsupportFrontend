import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Email Not Working? Fix Email Problems on Any Provider (2026) | TechSupport4",
  description:
    "Email not working? Fix email sending, receiving, login, and sync issues on Gmail, Outlook, Yahoo, and Apple Mail with our complete troubleshooting guide.",
  alternates: { canonical: "/email-not-working" },
  openGraph: {
    title: "Email Not Working? Fix Email Problems on Any Provider",
    description: "Fix email issues on Gmail, Outlook, Yahoo & Apple Mail.",
    type: "article",
    url: "https://techsupport4.com/email-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Email Not Working | TechSupport4",
    description: "Complete email troubleshooting for all providers and devices.",
  },
};

const faqs = [
  {
    q: "Why am I not receiving emails?",
    a: "Common reasons: (1) Mailbox is full — delete old messages or empty trash, (2) Emails are going to Spam/Junk folder, (3) Email filters are auto-deleting or archiving messages, (4) Sender's email is getting bounced — ask them to check their Sent folder, (5) Server issue on your provider's end — check their status page, (6) Incorrect email forwarding rules redirecting messages elsewhere.",
  },
  {
    q: "Why can I receive but not send emails?",
    a: "Sending failures are usually caused by: (1) Your outgoing mail server (SMTP) settings are wrong, (2) Your ISP is blocking port 25 — switch to port 587 with TLS, (3) Authentication issue — re-enter your password in account settings, (4) Attachment too large — most providers limit to 25MB, (5) Your email was flagged for suspected spam — happens with mass emails or certain content.",
  },
  {
    q: "Why does my email keep asking for password?",
    a: "This means your email client lost its authentication: (1) Password was recently changed — update it in the email app, (2) Two-factor authentication was enabled and the app needs an App Password instead, (3) Less secure apps access was turned off (Gmail), (4) OAuth token expired — remove and re-add the account. For Gmail and Outlook, you may need to generate an 'App Password' from your account security settings.",
  },
  {
    q: "How do I fix email not syncing on my phone?",
    a: "Steps: (1) Check internet connection — WiFi or mobile data, (2) Force close the email app and reopen, (3) Check sync settings — make sure email sync is turned on, (4) Remove the account from the phone and re-add it, (5) Update the email app from your app store, (6) Check if the email provider is having an outage.",
  },
  {
    q: "Why are my emails going to spam?",
    a: "Your sent emails may land in spam if: (1) Your email address is on a blacklist, (2) Email content triggers spam filters (too many links, certain keywords), (3) SPF/DKIM/DMARC records are not set up for your domain, (4) You're sending to many recipients at once, (5) Recipients previously marked your emails as spam. For business email, ensure proper DNS records (SPF, DKIM, DMARC) are configured.",
  },
];

export default function EmailNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Email Not Working? Fix Email Problems on Any Provider",
            description: "Complete troubleshooting guide for email issues.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-28",
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
              <span className="text-white">Email Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Troubleshooting Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Email Not Working? Fix Email Problems on Any Provider
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Resolve email sending, receiving, login, and sync issues on Gmail, Outlook, Yahoo Mail, Apple Mail, and business email — with step-by-step fixes for every scenario.
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
            When email stops working, it disrupts your entire workflow — missed messages, bounced replies, login errors, and sync failures can all have different causes. This guide covers the most common email problems and their fixes for all major providers: Gmail, Outlook/Microsoft 365, Yahoo Mail, Apple Mail/iCloud, and business email (IMAP/POP3).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Identify Your Email Problem</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">Can&apos;t log in to email</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Password issues, account locked, or 2FA problems. See Fixes 1-2.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">Not receiving emails</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">Check spam, filters, mailbox quota, and server settings. See Fixes 3-5.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">Can&apos;t send emails</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">SMTP settings, authentication, or ISP blocks. See Fixes 6-7.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white">Email not syncing</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">App sync, IMAP settings, or account configuration. See Fixes 8-9.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Reset Your Email Password</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If you can&apos;t log in, use your provider&apos;s password reset:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Gmail:</strong> accounts.google.com → &quot;Forgot password&quot; → verify via phone or recovery email</li>
            <li><strong>Outlook/Hotmail:</strong> account.live.com → &quot;Forgot my password&quot; → verify identity</li>
            <li><strong>Yahoo:</strong> login.yahoo.com → &quot;Forgot password&quot; → verify via phone</li>
            <li><strong>Business email:</strong> Contact your IT department or hosting provider to reset</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: App Passwords for Two-Factor Authentication</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If you use 2FA (two-factor authentication) and your email app keeps asking for a password, you need an <strong>App Password</strong>. Regular passwords don&apos;t work with 2FA in email clients. <strong>Gmail:</strong> Go to myaccount.google.com → Security → App passwords → generate one for your email app. <strong>Outlook:</strong> account.microsoft.com → Security → App passwords. Use this app password instead of your regular password in email client settings.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Check Spam/Junk Folder</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Missing emails are often in your Spam or Junk folder. Check it first. If you find legitimate emails there, mark them as &quot;Not Spam&quot; to train the filter. Also check if you have any email rules/filters that auto-move or auto-delete messages — in Gmail, go to Settings → Filters and Blocked Addresses; in Outlook, Settings → Rules.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Free Up Mailbox Space</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If your mailbox is full, new emails bounce back to senders. <strong>Gmail:</strong> 15 GB shared with Google Drive and Photos. <strong>Outlook.com:</strong> 15 GB. <strong>Yahoo:</strong> 1 TB. Empty your Trash and Spam folders first — they count toward your quota. Delete emails with large attachments (search for &quot;has:attachment larger:10M&quot; in Gmail). Download important attachments to your computer, then delete the emails.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Check Email Server Status</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Before troubleshooting further, check if your provider is having an outage: Visit <strong>DownDetector.com</strong> and search for your email provider. Google, Microsoft, and Yahoo all have occasional outages. You can also check: Google Status Dashboard (for Gmail), Microsoft 365 Status (for Outlook), or your hosting provider&apos;s status page for business email.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Correct SMTP/IMAP/POP3 Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            If using an email client (Outlook desktop, Thunderbird, Apple Mail), incorrect server settings cause sending/receiving failures:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-slate-700 dark:text-white">Provider</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-slate-700 dark:text-white">IMAP Server</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-slate-700 dark:text-white">SMTP Server</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-slate-700 dark:text-white">Ports</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Gmail</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">imap.gmail.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">smtp.gmail.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">IMAP: 993 / SMTP: 587 (TLS)</td></tr>
                <tr><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Outlook</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">outlook.office365.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">smtp.office365.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">IMAP: 993 / SMTP: 587 (TLS)</td></tr>
                <tr><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Yahoo</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">imap.mail.yahoo.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">smtp.mail.yahoo.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">IMAP: 993 / SMTP: 465 (SSL)</td></tr>
                <tr><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">iCloud</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">imap.mail.me.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">smtp.mail.me.com</td><td className="border border-slate-200 dark:border-slate-700 px-4 py-2">IMAP: 993 / SMTP: 587 (TLS)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Fix Email Not Sending</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check that SMTP authentication is enabled in your email client settings</li>
            <li>Use <strong>port 587 with STARTTLS</strong> instead of port 25 (many ISPs block port 25)</li>
            <li>Reduce attachment size — most providers limit to 25 MB. Use cloud sharing for large files</li>
            <li>Check your Outbox — emails may be stuck there. Delete stuck messages and try again</li>
            <li>For <Link href="/outlook-not-working" className="text-blue-600 hover:underline">Outlook-specific sending issues</Link>, check our dedicated guide</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Fix Email Not Syncing on Phone</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Verify you have a working internet connection (try loading a website)</li>
            <li>Force close the email app and reopen it</li>
            <li>Check that <strong>email sync</strong> is turned on: Settings → Accounts → your email → enable Sync</li>
            <li>Set sync frequency to <strong>as items arrive</strong> or <strong>every 15 minutes</strong></li>
            <li>Remove the account and re-add it (this creates a fresh connection)</li>
            <li>Update the Gmail/Outlook/Yahoo app from the App Store or Google Play</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Remove and Re-Add Email Account</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            When nothing else works, removing and re-adding the email account forces a completely fresh setup. <strong>Outlook:</strong> File → Account Settings → select account → Remove → Add Account. <strong>iPhone:</strong> Settings → Mail → Accounts → select account → Delete → add again. <strong>Android:</strong> Settings → Accounts → select email → Remove → re-add.
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
            <h3 className="text-2xl font-heading font-bold">Email Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely configure email accounts, fix SMTP settings, and resolve sync issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/outlook-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Outlook Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Microsoft Outlook-specific fixes.</p>
              </Link>
              <Link href="/gmail-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Gmail Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Google-specific email troubleshooting.</p>
              </Link>
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">No internet = no email. Fix connectivity first.</p>
              </Link>
              <Link href="/google-chrome-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Chrome Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Browser issues affect webmail access.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
