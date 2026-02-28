import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Yahoo Mail Not Working Today? Fix Guide (2026)",
  description: "Yahoo Mail not working, loading, or sending emails? Fix Yahoo outages, login issues, app errors, and connection problems with this troubleshooting guide.",
  alternates: { canonical: "/yahoo-mail-not-working-today" },
  openGraph: { title: "Yahoo Mail Not Working Today — Fix Guide", description: "Fix Yahoo Mail issues today.", type: "article", url: "https://techsupport4.com/yahoo-mail-not-working-today" },
  twitter: { card: "summary_large_image", title: "Yahoo Mail Fix Today | TechSupport4", description: "Yahoo Mail not working — fix guide." },
};

const faqs = [
  { q: "Is Yahoo Mail down right now?", a: "Check these real-time status pages: (1) Downdetector.com/status/yahoo-mail — shows user-reported outages, (2) Yahoo's official Twitter/X @YahooCare for service updates, (3) Try accessing Yahoo Mail from a different device or network — if it's down everywhere, it's likely a Yahoo server issue and you just need to wait." },
  { q: "Yahoo Mail loads but won't send or receive emails — why?", a: "Possible causes: (1) Yahoo storage full — 1 TB limit, check Settings → More Settings → Mailboxes, (2) Attachment too large (25 MB limit), (3) Recipient's email server rejecting your email, (4) Yahoo's outgoing servers are temporarily delayed, (5) Your account was flagged for spam — try sending without links or attachments as a test." },
  { q: "Yahoo Mail app not working on iPhone/Android — how to fix?", a: "Try: (1) Force close the app and reopen, (2) Check for app updates in App Store/Play Store, (3) Clear app cache: Settings → Apps → Yahoo Mail → Clear Cache, (4) Delete and reinstall the Yahoo Mail app, (5) Check if your phone's date/time is set to automatic, (6) Try the mobile browser version: mail.yahoo.com in Safari/Chrome." },
  { q: "Why are my Yahoo emails going to spam?", a: "Receiving side: Check your Yahoo Filters (Settings → More Settings → Filters) — a filter may be routing emails to spam. Sending side: If YOUR sent emails go to recipients' spam: (1) Avoid spam trigger words, (2) Don't send mass emails, (3) Include an unsubscribe option for newsletters, (4) Your account may be flagged — send normal emails for a while to build reputation." },
  { q: "Can I access Yahoo Mail in Outlook?", a: "Yes: In Outlook → File → Add Account → enter your Yahoo email → Outlook should auto-configure. If it asks for a password, you need a Yahoo App Password: Go to login.yahoo.com → Account Security → Generate App Password → use that in Outlook instead of your regular Yahoo password." },
];

export default function YahooMailNotWorkingToday() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Yahoo Mail Not Working Today — Fix Guide", description: "Fix Yahoo Mail issues.", author: { "@type": "Organization", name: "TechSupport4" }, publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" }, datePublished: "2026-02-27", dateModified: "2026-02-28" }) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/email-not-working" className="hover:text-white transition">Email Not Working</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Yahoo Mail Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Yahoo Mail Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">Yahoo Mail Not Working Today? Fix Guide</h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">Yahoo Mail down, not loading, or stuck? Fix outage issues, login failures, app crashes, and email send/receive errors.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300"><span>Updated: Feb 2026</span><span className="w-1 h-1 rounded-full bg-blue-400" /><span>10 min read</span></div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">Yahoo Mail still has over 225 million users, and when it goes down or stops working, it affects millions of people. Whether you&apos;re seeing a blank screen, can&apos;t send emails, or the app keeps crashing, this guide covers every scenario.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Step 1: Check If Yahoo Is Down</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Visit <strong>Downdetector.com/status/yahoo-mail</strong> for real-time outage reports</li>
            <li>Check <strong>@YahooCare</strong> on X/Twitter for official updates</li>
            <li>Try accessing <strong>mail.yahoo.com</strong> from a different device or network</li>
            <li>If multiple sources confirm an outage, <strong>wait it out</strong> — Yahoo usually fixes server issues within 30-120 minutes</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Clear Browser Cache</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Press <strong>Ctrl + Shift + Delete</strong></li>
            <li>Select <strong>All time</strong></li>
            <li>Check <strong>Cookies</strong> and <strong>Cached files</strong></li>
            <li>Click <strong>Clear data</strong></li>
            <li>Reload Yahoo Mail</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Disable Browser Extensions</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Ad blockers and privacy extensions often break Yahoo Mail&apos;s interface. Try <strong>Incognito/Private mode</strong> (Ctrl + Shift + N) first — if Yahoo works there, an extension is the problem. Disable extensions one by one to find the culprit.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Fix Yahoo Mail App</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Force close</strong> the Yahoo Mail app (swipe up from recent apps)</li>
            <li>Check for <strong>app updates</strong> in App Store/Play Store</li>
            <li>Clear app cache: <strong>Settings → Apps → Yahoo Mail → Storage → Clear Cache</strong></li>
            <li>If still broken: <strong>uninstall and reinstall</strong> the app</li>
            <li>Make sure your phone&apos;s <strong>date and time are automatic</strong> (incorrect time causes SSL errors)</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Yahoo Mail Not Receiving Emails</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check your <strong>Spam folder</strong> — Yahoo&apos;s aggressive spam filter may have caught legitimate emails</li>
            <li>Check <strong>Filters</strong>: Settings → More Settings → Filters — a filter may be redirecting mail</li>
            <li>Check <strong>Blocked addresses</strong>: Settings → More Settings → Security → Blocked addresses</li>
            <li>Check if mailbox is full: Settings → More Settings → Mailboxes — Yahoo provides 1 TB but it can fill up</li>
            <li>Ask the sender to check <strong>their Sent folder</strong> and bounce messages</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Yahoo Mail Not Sending</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Check attachment size — <strong>25 MB maximum</strong> per email</li>
            <li>Remove attachments and try sending plain text first</li>
            <li>Check if you&apos;re hitting the <strong>daily send limit</strong> — Yahoo limits to ~500 emails/day</li>
            <li>Try from <strong>mail.yahoo.com in a browser</strong> instead of the app</li>
            <li>If using a third-party email client, check SMTP settings: <strong>smtp.mail.yahoo.com, port 465, SSL/TLS</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Update Browser</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Yahoo Mail requires a modern browser. Update Chrome, Firefox, Edge, or Safari to the latest version. If you&apos;re on a very old browser, Yahoo Mail may display a blank page or partial content.</p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Check DNS Settings</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">If Yahoo won&apos;t load but other sites work, try switching DNS:</p>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <p>ipconfig /flushdns</p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Then change DNS to Google DNS (8.8.8.8, 8.8.4.4) or Cloudflare DNS (1.1.1.1): <strong>Settings → Network → DNS → Manual</strong>.</p>

          <section className="mt-14 border-t border-slate-200 dark:border-slate-700 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"><h3 className="font-semibold text-slate-800 dark:text-white">{faq.q}</h3><p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          </section>

          <div className="mt-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold">Yahoo Mail Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can fix Yahoo Mail configuration and account issues remotely.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_USA}`} className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/yahoo-mail-login-problem", title: "Yahoo Login Problem", desc: "Fix Yahoo sign-in issues." },
                { href: "/gmail-not-working", title: "Gmail Not Working?", desc: "Fix Gmail issues." },
                { href: "/outlook-not-working", title: "Outlook Not Working?", desc: "Fix Outlook problems." },
                { href: "/email-not-working", title: "Email Not Working?", desc: "Universal email fix guide." },
              ].map((g) => (<Link key={g.href} href={g.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group"><p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">{g.title}</p><p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{g.desc}</p></Link>))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
