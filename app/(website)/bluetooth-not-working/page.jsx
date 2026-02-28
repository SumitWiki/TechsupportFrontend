import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Bluetooth Not Working? Fix Bluetooth on Windows, Mac, iPhone & Android (2026) | TechSupport4",
  description:
    "Bluetooth not working? Fix pairing failures, audio issues, disconnections, and missing Bluetooth on Windows 11/10, Mac, iPhone, and Android devices.",
  alternates: { canonical: "/bluetooth-not-working" },
  openGraph: {
    title: "Bluetooth Not Working? Fix Bluetooth on Any Device",
    description: "Fix Bluetooth pairing and connectivity on all devices.",
    type: "article",
    url: "https://techsupport4.com/bluetooth-not-working",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Bluetooth Not Working | TechSupport4",
    description: "Complete Bluetooth troubleshooting for all devices.",
  },
};

const faqs = [
  {
    q: "Why can't my Bluetooth find any devices?",
    a: "Bluetooth can't 'see' devices if: (1) The other device isn't in pairing/discovery mode — most devices need you to hold a button to make them discoverable, (2) Bluetooth is turned off on either device, (3) Devices are too far apart (Bluetooth range is typically 30 feet), (4) Bluetooth driver is outdated or disabled (Windows), (5) Too many devices already paired — some adapters have a limit.",
  },
  {
    q: "Why does my Bluetooth keep disconnecting?",
    a: "Frequent disconnections: (1) Devices too far apart or with obstacles between them, (2) Bluetooth interference from WiFi, USB 3.0 devices, or microwaves (they share the 2.4 GHz band), (3) Power management turning off Bluetooth to save battery — disable in Device Manager, (4) Outdated Bluetooth driver, (5) Too many active Bluetooth connections simultaneously.",
  },
  {
    q: "Why is there no sound from my Bluetooth headphones?",
    a: "Connected but no audio: (1) Windows may not have set them as the default audio device — right-click speaker icon → Sound settings → set Bluetooth device as output, (2) Headphones are connected as 'Phone' but not 'Audio' — remove and re-pair, (3) Volume is muted on either device, (4) Headphones are in the wrong mode (ANC mode, transparency mode), (5) Audio profile issue — check Bluetooth device properties for A2DP vs HFP.",
  },
  {
    q: "How do I fix Bluetooth missing from Windows?",
    a: "If Bluetooth has completely disappeared: (1) Check Device Manager for Bluetooth — if missing, the adapter may be disabled or failed, (2) Check if Airplane mode is on, (3) Run Bluetooth troubleshooter: Settings → Troubleshoot → Bluetooth, (4) Check BIOS settings — Bluetooth can be disabled there, (5) If USB Bluetooth adapter, try a different USB port, (6) The Bluetooth adapter hardware may have failed — try a USB Bluetooth dongle.",
  },
  {
    q: "How do I pair Bluetooth devices?",
    a: "General pairing steps: (1) Put the Bluetooth device (headphones, speaker, keyboard) into pairing mode — usually hold the power or Bluetooth button until an LED flashes, (2) On your computer/phone: open Bluetooth settings → scan for devices, (3) Select the device from the list, (4) If prompted for a PIN, enter 0000 or 1234 (common defaults), (5) Wait for 'Connected' status. Keep devices within 3 feet during initial pairing.",
  },
];

export default function BluetoothNotWorking() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bluetooth Not Working? Fix Bluetooth on Any Device",
            description: "Fix Bluetooth pairing, audio, and connectivity on all devices.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-02-10",
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
              <span className="text-white">Bluetooth Not Working</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Connectivity Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Bluetooth Not Working? Fix Bluetooth on Any Device
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix Bluetooth pairing failures, audio issues, disconnections, and missing Bluetooth on Windows, Mac, iPhone, and Android with step-by-step solutions.
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
            Bluetooth connects headphones, speakers, keyboards, mice, game controllers, and more — when it works. When it doesn&apos;t, you face pairing failures, random disconnections, no audio from headphones, or Bluetooth completely missing from your device. This guide covers fixes for all these scenarios on every platform.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Toggle Bluetooth Off and On</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>Windows 11/10:</strong> Settings → Bluetooth & devices → toggle off → wait 10 sec → toggle on</li>
            <li><strong>Mac:</strong> Click Bluetooth in menu bar → Turn Bluetooth Off → wait → Turn On</li>
            <li><strong>iPhone:</strong> Settings → Bluetooth → toggle (NOT from Control Center — that only disconnects, doesn&apos;t fully turn off)</li>
            <li><strong>Android:</strong> Settings → Connected devices → Bluetooth → toggle off/on</li>
            <li>Also try <strong>Airplane Mode</strong> on/off — this resets all wireless connections including Bluetooth</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Remove and Re-Pair the Device</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Saved pairing data can become corrupted. Remove the device: <strong>Windows:</strong> Settings → Bluetooth → your device → Remove device. <strong>iPhone:</strong> Settings → Bluetooth → tap (i) next to device → Forget This Device. <strong>Mac:</strong> System Preferences → Bluetooth → hover over device → X to remove. Then put the Bluetooth device back into pairing mode and connect fresh.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Update Bluetooth Driver (Windows)</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> (Win + X → Device Manager)</li>
            <li>Expand <strong>Bluetooth</strong></li>
            <li>Right-click your Bluetooth adapter → <strong>Update driver → Search automatically</strong></li>
            <li>If no update found, try <strong>Uninstall device</strong> → restart computer (Windows will reinstall)</li>
            <li>Check your laptop manufacturer&apos;s website for the latest Bluetooth driver for your specific model</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Run Bluetooth Troubleshooter (Windows)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            <strong>Settings → System → Troubleshoot → Other troubleshooters → Bluetooth → Run</strong>. This checks for common issues including driver problems, service status, and configuration errors. It can automatically fix many Bluetooth problems.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Disable Bluetooth Power Management</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Windows can turn off Bluetooth to save power, causing disconnections: Open <strong>Device Manager → Bluetooth → right-click adapter → Properties → Power Management</strong> tab → uncheck <strong>&quot;Allow the computer to turn off this device to save power&quot;</strong>. This prevents random Bluetooth drops, especially on laptops.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Restart Bluetooth Service (Windows)</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-8 overflow-x-auto">
            <p className="text-slate-400"># Open Services (Win + R → services.msc):</p>
            <p className="text-slate-400"># Find &quot;Bluetooth Support Service&quot;</p>
            <p className="text-slate-400"># Right-click → Restart</p>
            <p className="text-slate-400"># Set Startup type to &quot;Automatic&quot;</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Fix Bluetooth Audio Issues</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Connected but no sound from Bluetooth headphones:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Right-click the <strong>speaker icon</strong> in taskbar → <strong>Sound settings</strong></li>
            <li>Under Output, make sure your <strong>Bluetooth headphones</strong> are selected (not speakers)</li>
            <li>Check volume on both the computer and the headphones</li>
            <li>If headphones show as connected but under &quot;Other devices&quot; instead of &quot;Audio,&quot; remove and re-pair</li>
            <li>For voice calls: also set the Bluetooth device as the <strong>Input</strong> device in Sound settings</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Fix Bluetooth on iPhone/Android</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li><strong>iPhone:</strong> Settings → General → Reset → Reset Network Settings (this also resets WiFi passwords)</li>
            <li><strong>Android:</strong> Settings → System → Reset → Reset Wi-Fi, mobile & Bluetooth</li>
            <li>Make sure the Bluetooth device is fully charged — low battery causes pairing failures</li>
            <li>Some devices can only be paired with one phone at a time — unpair from the other phone first</li>
            <li>Update your phone&apos;s OS — Bluetooth bugs are frequently patched in updates</li>
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
            <h3 className="text-2xl font-heading font-bold">Bluetooth Still Not Working?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely fix Bluetooth driver and configuration issues.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/wifi-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">WiFi Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">WiFi and Bluetooth share the 2.4 GHz band.</p>
              </Link>
              <Link href="/smart-tv-not-connecting-to-wifi" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Smart TV Not Connecting?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Smart TV connectivity troubleshooting.</p>
              </Link>
              <Link href="/usb-not-recognized" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">USB Not Recognized?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">USB Bluetooth dongle not working? Start here.</p>
              </Link>
              <Link href="/computer-running-slow" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Computer Running Slow?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">System performance affects all connectivity.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
