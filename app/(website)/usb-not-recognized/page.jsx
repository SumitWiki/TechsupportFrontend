import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "USB Device Not Recognized? Fix USB Issues on Windows & Mac (2026) | TechSupport4",
  description:
    "USB device not recognized? Fix USB drives, keyboards, mice, printers, and all peripherals on Windows 11/10 and Mac with our step-by-step troubleshooting guide.",
  alternates: { canonical: "/usb-not-recognized" },
  openGraph: {
    title: "USB Device Not Recognized? Fix USB Issues",
    description: "Fix USB recognition problems on Windows & Mac.",
    type: "article",
    url: "https://techsupport4.com/usb-not-recognized",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix USB Not Recognized | TechSupport4",
    description: "Complete USB troubleshooting for all devices.",
  },
};

const faqs = [
  {
    q: "Why does Windows say USB device not recognized?",
    a: "This error means Windows detected a device but can't identify or communicate with it. Causes: (1) USB port power issue — not enough power for the device, (2) Device driver is missing or corrupted, (3) USB cable is damaged, (4) USB port is faulty, (5) Device's USB connector is damaged, (6) USB selective suspend is turning off the port, (7) The device itself is malfunctioning.",
  },
  {
    q: "How do I fix a USB flash drive not showing up?",
    a: "If the drive isn't showing in File Explorer: (1) Check Disk Management (diskmgmt.msc) — it may be there without a drive letter, (2) Right-click the drive in Disk Management → Change Drive Letter and Paths → Add, (3) If shown as 'Unallocated' or 'RAW', the partition table is damaged — data recovery may be needed, (4) Try a different USB port/cable, (5) Try on a different computer to confirm the drive isn't dead.",
  },
  {
    q: "Why does my USB keep disconnecting and reconnecting?",
    a: "Intermittent USB disconnections: (1) USB selective suspend power saving — disable it, (2) Loose USB connection — try a different port, (3) Damaged cable, (4) Overloaded USB hub — remove other devices, (5) USB controller driver issue — update or reinstall, (6) Insufficient power from the USB port — use a powered USB hub.",
  },
  {
    q: "USB 3.0 device not working in USB 3.0 port — why?",
    a: "USB 3.0 issues: (1) USB 3.0 drivers need installing — check Device Manager for errors, (2) Try a USB 2.0 port instead as a test, (3) USB 3.0 can interfere with 2.4 GHz devices (WiFi, Bluetooth) — keep the cable away from wireless receivers, (4) Some older devices have compatibility issues with USB 3.0 — try a USB 2.0 cable or hub.",
  },
  {
    q: "My USB ports stopped working completely — what do I do?",
    a: "All USB ports dead: (1) Restart the computer — this resets the USB controller, (2) Check Device Manager for Universal Serial Bus controllers — any yellow icons? Uninstall and restart, (3) Check BIOS — USB may be disabled (press F2/Del during boot → USB Configuration → enable), (4) Try a different USB device to confirm the ports are the issue, (5) The USB controller chip may have failed — a powered USB hub or PCIe USB card can provide new ports.",
  },
];

export default function UsbNotRecognized() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "USB Device Not Recognized? Fix USB Issues on Windows & Mac",
            description: "Fix USB recognition problems on any operating system.",
            author: { "@type": "Organization", name: "TechSupport4" },
            publisher: { "@type": "Organization", name: "TechSupport4", url: "https://techsupport4.com" },
            datePublished: "2026-02-14",
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
              <span className="text-white">USB Not Recognized</span>
            </nav>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">Hardware Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              USB Device Not Recognized? Fix USB Issues on Windows &amp; Mac
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl">
              Fix &quot;USB device not recognized&quot; errors for flash drives, external hard drives, keyboards, mice, printers, and all USB peripherals on Windows and Mac.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-300">
              <span>Updated: Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>11 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            The &quot;USB device not recognized&quot; error is one of the most common hardware issues on Windows. It appears when you plug in a USB device — flash drive, external hard drive, keyboard, mouse, printer, or any peripheral — and Windows can&apos;t identify it. This guide covers every cause and fix, from simple port changes to driver reinstalls.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 1: Try a Different USB Port</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The simplest fix: unplug the device and try a <strong>different USB port</strong>. Preferably try a port on the <strong>back of the computer</strong> (desktop) — these connect directly to the motherboard and provide more reliable power. Avoid USB hubs for initial testing. If the device works in another port, the original port is faulty or has a power issue.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 2: Try a Different Cable</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            For devices that use a separate USB cable (external drives, printers), try a different cable. USB cables can look fine externally but have broken internal wires. Use a known-working cable from another device. For USB-C devices, make sure the cable supports data transfer — some USB-C cables are charge-only.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 3: Restart Your Computer</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            A restart resets the USB controller and clears any temporary driver issues. Unplug the USB device first, restart the computer, wait for it to fully boot, then plug the device back in. This resolves a surprising number of &quot;not recognized&quot; errors.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 4: Update USB Drivers</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong> (Win + X → Device Manager)</li>
            <li>Expand <strong>Universal Serial Bus controllers</strong></li>
            <li>Look for any devices with yellow warning icons</li>
            <li>Right-click each USB controller → <strong>Update driver → Search automatically</strong></li>
            <li>Also check <strong>Unknown devices</strong> in Device Manager — your USB device may appear there</li>
            <li>Right-click Unknown device → Update driver</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 5: Uninstall and Reinstall USB Controllers</h2>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Device Manager</strong></li>
            <li>Expand <strong>Universal Serial Bus controllers</strong></li>
            <li>Right-click each <strong>USB Root Hub</strong> and <strong>Generic USB Hub</strong> → <strong>Uninstall device</strong></li>
            <li>Restart the computer — Windows will automatically reinstall fresh USB drivers</li>
            <li>Plug in your USB device after restart</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 6: Disable USB Selective Suspend</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Windows can turn off USB ports to save power, causing &quot;not recognized&quot; errors:
          </p>
          <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Open <strong>Control Panel → Power Options</strong></li>
            <li>Click <strong>Change plan settings</strong> → <strong>Change advanced power settings</strong></li>
            <li>Expand <strong>USB settings → USB selective suspend setting</strong></li>
            <li>Set to <strong>Disabled</strong> for both &quot;On battery&quot; and &quot;Plugged in&quot;</li>
            <li>Click OK and restart</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 7: Check Disk Management (Flash Drives)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            If a USB flash drive or external hard drive isn&apos;t showing in File Explorer but you hear the &quot;device connected&quot; sound: Open <strong>Disk Management</strong> (right-click Start → Disk Management). Look for the drive. If it&apos;s there but has no drive letter, right-click → <strong>Change Drive Letter and Paths → Add</strong>. If it shows as &quot;RAW&quot; or &quot;Unallocated,&quot; the file system is corrupted — data recovery may be needed before formatting.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 8: Use a Powered USB Hub</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Some USB devices need more power than your computer&apos;s ports can provide — especially when multiple devices are connected. A <strong>powered USB hub</strong> (one that plugs into a wall outlet) provides dedicated power to each port. This is especially helpful for external hard drives, USB docking stations, and devices connected through long USB cables.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 9: Fix USB on Mac</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-8">
            <li>Try a different port — if using USB-C, try a different adapter/dock</li>
            <li>Reset <strong>SMC</strong> (Intel Macs): Shut down → hold Shift+Control+Option+Power for 10 seconds</li>
            <li>Reset <strong>NVRAM</strong>: Restart → hold Option+Command+P+R for 20 seconds</li>
            <li>For Apple Silicon Macs: simply restart (no SMC/NVRAM reset needed)</li>
            <li>Check <strong>System Information → USB</strong> to see if the device is detected at hardware level</li>
            <li>If external drive, check <strong>Disk Utility</strong> — it may need formatting for macOS compatibility</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-4">Fix 10: Hardware Troubleshooter (Windows)</h2>
          <div className="bg-slate-800 text-green-400 rounded-xl p-4 font-mono text-sm mb-8 overflow-x-auto">
            <p className="text-slate-400"># Run the legacy hardware troubleshooter:</p>
            <p>msdt.exe -id DeviceDiagnostic</p>
          </div>

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
            <h3 className="text-2xl font-heading font-bold">USB Still Not Recognized?</h3>
            <p className="mt-2 text-blue-200 max-w-lg mx-auto">Our technicians can remotely diagnose driver and configuration issues causing USB failures.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">Start Secure Session</Link>
              <a href="tel:+18889501777" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Call 1-888-950-1777</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-white mb-4">Related Troubleshooting Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/printer-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Printer Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">USB printer issues often stem from port problems.</p>
              </Link>
              <Link href="/bluetooth-not-working" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Bluetooth Not Working?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">USB Bluetooth dongle not recognized? Fix here.</p>
              </Link>
              <Link href="/blue-screen-of-death-fix" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Blue Screen of Death Fix</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Bad USB drivers can cause BSODs.</p>
              </Link>
              <Link href="/computer-running-slow" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition group">
                <p className="font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600">Computer Running Slow?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">USB performance depends on system health.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
