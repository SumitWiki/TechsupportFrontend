import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Gmail Not Working? Fix Gmail Issues on Desktop & Mobile (2026) | TechSupport4",
  description:
    "Gmail not working? Fix Gmail not loading, not sending, not receiving, login issues, and sync problems on Chrome, Safari, iPhone, and Android.",
  alternates: { canonical: "/gmail-not-working" },
  openGraph: {
    title: "Gmail Not Working? Fix Gmail Issues on Desktop & Mobile",
    description: "Fix Gmail loading, sending, and sync problems.",
    type: "article",
    url: "https://techsupport4.com/gmail-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Gmail Not Working | TechSupport4",
    description: "Complete Gmail troubleshooting for web and mobile.",
  },
};

const faqs = [
  {
    q: "Why is Gmail not loading?",
    a: "Gmail fails to load due to: (1) Browser cache/cookies are corrupted — clear them, (2) Browser extension conflicts — try Incognito mode, (3) Outdated browser — update Chrome/Firefox/Safari, (4) Gmail is down — check Google Workspace Status Dashboard, (5) Slow internet connection — Gmail needs a stable connection to load. Try mail.google.com/mail/?labs=0 for the basic HTML version.",
  },
  {
    q: "Why am I not receiving emails in Gmail?",
    a: "Check: (1) Spam folder — Gmail's filter catches many legitimate emails, (2) Promotions/Social/Updates tabs — emails may be sorted there instead of Primary, (3) Storage full — Gmail shares 15GB with Google Drive and Photos, (4) Filters deleting or archiving emails — check Settings → Filters and Blocked Addresses, (5) Email forwarding turned on — check Settings → Forwarding, (6) Google is having an outage.",
  },
  {
    q: "Why does Gmail keep asking me to sign in?",
    a: "This happens when: (1) Cookies are being cleared automatically (by browser settings or a cleaner app), (2) You're using a private/incognito window, (3) Browser extension is clearing session data, (4) Google detected unusual activity and is requiring re-authentication, (5) Multiple Google accounts causing session conflicts. Fix: check browser settings to make sure cookies from google.com aren't being auto-deleted.",
  },
  {
    q: "How do I fix Gmail not sending emails?",
    a: "Steps: (1) Check the Outbox/Sent folder — the email may have actually sent, (2) Reduce attachment size below 25MB — use Google Drive for larger files, (3) Check for error messages — 'bounced' means the recipient address is invalid, (4) Try sending from mail.google.com directly (not an email client), (5) Check if your account is temporarily suspended for unusual sending activity.",
  },
  {
    q: "How do I fix Gmail not syncing on my phone?",
    a: "Steps: (1) Check internet connection, (2) Open Gmail app → hamburger menu → Settings → your account → toggle 'Sync Gmail' off and back on, (3) Force stop the Gmail app and reopen, (4) Clear Gmail app cache: Settings → Apps → Gmail → Clear Cache, (5) Remove your Google account from the phone and re-add it, (6) Update the Gmail app from Play Store/App Store.",
  },
];

export default function GmailNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Gmail Not Working? Fix Gmail Issues on Desktop & Mobile",
            description: "Complete Gmail troubleshooting guide.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-01-30",
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
              <span className="text-white">Gmail</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Application Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Gmail Not Working? Fix Gmail Issues on Desktop &amp; Mobile
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix Gmail not loading, not sending, not receiving, login problems, and sync failures — on Chrome, Firefox, Safari, iPhone, and Android.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            Gmail is the world&apos;s most-used email service with over 1.8 billion users, so when it stops working, it affects a lot of people. Whether Gmail won&apos;t load in your browser, isn&apos;t sending or receiving emails, keeps asking you to sign in, or won&apos;t sync on your phone, this guide covers every scenario with clear fixes.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Check Google Service Status</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Before troubleshooting, check if Gmail itself is down. Visit the <strong>Google Workspace Status Dashboard</strong> (workspace.google.com/status) or check <strong>DownDetector.com/status/gmail</strong>. If there&apos;s a widespread outage, the only fix is to wait for Google to resolve it.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Clear Browser Cache and Cookies</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Corrupted cache data is the #1 cause of Gmail not loading properly:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Chrome:</strong> Ctrl + Shift + Delete → select &quot;Cached images and files&quot; and &quot;Cookies and other site data&quot; → Clear data</li>
            <li><strong>Firefox:</strong> Ctrl + Shift + Delete → select cache and cookies → Clear Now</li>
            <li><strong>Safari:</strong> Safari menu → Preferences → Privacy → Manage Website Data → Remove All</li>
            <li><strong>Quick test:</strong> Open Gmail in an <strong>Incognito/Private window</strong> first — if it works there, cache is the problem</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Disable Browser Extensions</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Ad blockers, privacy extensions, and email tracking extensions can break Gmail. Open <strong>chrome://extensions</strong> (or equivalent in your browser), disable all extensions, reload Gmail. If it works, re-enable extensions one by one to identify the culprit. Common troublemakers: uBlock Origin (rarely), Grammarly, Mailtrack, and Boomerang.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Update Your Browser</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Gmail drops support for old browser versions regularly. Update to the latest version: <strong>Chrome:</strong> Menu → Help → About Google Chrome → Update. <strong>Firefox:</strong> Menu → Help → About Firefox. <strong>Safari:</strong> Update macOS (Safari updates come with macOS updates). Gmail officially supports the latest two major versions of each browser.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Free Up Gmail Storage</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Gmail shares 15 GB with Google Drive and Google Photos. If you&apos;re full, you can&apos;t receive new emails:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check usage: <strong>drive.google.com/settings</strong></li>
            <li>In Gmail, search <strong>&quot;has:attachment larger:10M&quot;</strong> to find big emails</li>
            <li>Empty <strong>Trash</strong> and <strong>Spam</strong> folders (they count toward quota)</li>
            <li>Delete old Google Drive files you no longer need</li>
            <li>Clear Google Photos backup if using original quality (consider High Quality setting which doesn&apos;t count toward quota)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Check Gmail Tabs and Filters</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Gmail automatically sorts emails into tabs: Primary, Promotions, Social, Updates. &quot;Missing&quot; emails are often just in a different tab. Click each tab at the top of your inbox. Also go to <strong>Settings → Filters and Blocked Addresses</strong> to check for rules that auto-archive, auto-delete, or forward emails. Go to <strong>Settings → Forwarding and POP/IMAP</strong> to make sure forwarding isn&apos;t redirecting your emails.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Fix Gmail on iPhone/Android</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check internet connection (try loading a website)</li>
            <li>Force close the Gmail app and reopen</li>
            <li>Open Gmail app → Settings → your account → make sure <strong>&quot;Sync Gmail&quot;</strong> is enabled</li>
            <li>Clear app cache: <strong>Settings → Apps → Gmail → Storage → Clear Cache</strong> (Android)</li>
            <li>Update the Gmail app from the App Store / Google Play</li>
            <li>If still not working, remove your Google account from the phone: Settings → Accounts → Google → Remove → re-add</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Gmail Not Working in Outlook/Apple Mail</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Using Gmail in a desktop email client? Make sure:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>IMAP is enabled in Gmail: <strong>Settings → See all settings → Forwarding and POP/IMAP → Enable IMAP</strong></li>
            <li>Use the correct server settings: <strong>imap.gmail.com:993</strong> (IMAP), <strong>smtp.gmail.com:587</strong> (SMTP with TLS)</li>
            <li>If you have 2FA enabled, generate an <strong>App Password</strong>: myaccount.google.com → Security → App Passwords</li>
            <li>Google may block &quot;less secure apps&quot; — App Passwords bypass this restriction</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Try Gmail Basic HTML Version</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If Gmail won&apos;t load at all, try the simplified version: <strong>mail.google.com/mail/?labs=0</strong> or look for the &quot;Load basic HTML&quot; link at the bottom of the loading screen. The basic version works with any browser and slow connections. It lacks some features but lets you read and send emails when the standard version is broken.
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
            <h3 className="text-2xl font-heading font-bold">Gmail Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely fix email configuration and sync issues.</p>
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
              <Link href="/outlook-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Outlook Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Microsoft Outlook-specific fixes.</p>
              </Link>
              <Link href="/google-chrome-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Chrome Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Browser issues directly affect Gmail.</p>
              </Link>
              <Link href="/internet-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Internet Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">No internet = no email. Fix connection first.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
