export default function sitemap() {
  const baseUrl = "https://techsupport4.com";
  const now = new Date();

  // High-priority service pages
  const servicePages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/internet-support-usa", priority: 0.9, changeFrequency: "weekly" },
    { url: "/printer-support-usa", priority: 0.9, changeFrequency: "weekly" },
    { url: "/wifi-router-support-usa", priority: 0.9, changeFrequency: "weekly" },
    { url: "/smart-tv-support-usa", priority: 0.9, changeFrequency: "weekly" },
    { url: "/support-session", priority: 0.8, changeFrequency: "monthly" },
    { url: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
  ];

  // Location / city pages
  const locationSlugs = [
    "internet-support-new-york",
    "internet-support-california",
    "printer-support-london",
    "wifi-support-toronto",
  ];

  // Standalone troubleshooting pages (SEO authority)
  const troubleshootingSlugs = [
    "internet-not-working",
    "router-not-working",
    "netgear-router-not-working",
    "tp-link-router-not-working",
    "wifi-connected-but-no-internet",
    "wifi-not-working",
    "printer-not-working",
    "hp-printer-not-working",
    "epson-printer-not-printing",
    "printer-offline-fix",
    "email-not-working",
    "outlook-not-working",
    "gmail-not-working",
    "computer-running-slow",
    "blue-screen-of-death-fix",
    "windows-update-not-working",
    "google-chrome-not-working",
    "bluetooth-not-working",
    "smart-tv-not-connecting-to-wifi",
    "usb-not-recognized",
  ];

  // Long-tail keyword pages (Phase 5 — 50 pages)
  const longTailSlugs = [
    // Batch 1: Netgear / TP-Link / Linksys routers
    "netgear-router-not-working-after-reset",
    "netgear-router-blinking-orange-light",
    "tp-link-router-connected-but-no-internet",
    "tp-link-router-not-working-after-power-outage",
    "linksys-router-not-working-after-power-outage",
    // Batch 2: Linksys / Asus / D-Link
    "linksys-router-not-connecting-to-internet",
    "asus-router-firmware-update-failed",
    "asus-router-not-connecting-to-internet",
    "d-link-router-not-connecting-to-modem",
    "d-link-router-blinking-orange-light",
    // Batch 3: Arris / Xfinity / Spectrum
    "arris-modem-not-connecting-to-internet",
    "xfinity-router-not-working-after-reset",
    "xfinity-router-blinking-orange-light",
    "spectrum-router-red-light-blinking",
    "spectrum-router-not-connecting-to-internet",
    // Batch 4: Verizon / HP Printer
    "verizon-fios-router-not-working",
    "verizon-fios-no-internet-after-storm",
    "hp-printer-offline-windows-11-fix",
    "hp-printer-driver-error-windows-10",
    "hp-printer-not-printing-after-ink-change",
    // Batch 5: Canon / Epson
    "canon-printer-not-printing-black-ink",
    "canon-printer-offline-fix",
    "canon-printer-setup-failed",
    "epson-printer-driver-unavailable-windows-10",
    "epson-printer-not-connecting-to-wifi",
    // Batch 6: Brother / Outlook / Gmail
    "brother-printer-wifi-setup-failed",
    "brother-printer-offline-fix",
    "outlook-not-sending-emails-windows-11",
    "outlook-password-not-accepted",
    "gmail-not-loading-in-chrome",
    // Batch 7: Gmail / Yahoo / WiFi
    "gmail-login-problem-fix",
    "yahoo-mail-not-working-today",
    "yahoo-mail-login-problem",
    "wifi-connected-but-no-internet-windows-10",
    "wifi-connected-but-no-internet-windows-11",
    // Batch 8: Internet / WiFi situational
    "internet-not-working-after-router-reset",
    "internet-not-working-after-power-outage",
    "internet-slow-at-night-fix",
    "wifi-keeps-disconnecting-windows-11",
    "wifi-not-working-after-changing-password",
    // Batch 9: Storm / Mac / Router Admin / LED / Firmware
    "internet-not-working-after-storm",
    "wifi-not-working-on-mac",
    "router-login-page-not-opening",
    "router-red-light-blinking-fix",
    "router-not-working-after-firmware-update",
    // Batch 10: Modem / Factory Reset / Timeout / Moving / Win10
    "router-not-connecting-to-modem",
    "wifi-not-connecting-after-factory-reset",
    "internet-connection-timeout-fix",
    "slow-internet-after-moving-house",
    "wifi-keeps-disconnecting-windows-10",
  ];

  // ISP-specific pages (Phase 6 — 10 pages)
  const ispSlugs = [
    "xfinity-router-not-working",
    "spectrum-router-not-working",
    "comcast-internet-not-working",
    "cox-router-not-working",
    "att-router-not-working",
    "optimum-router-not-working",
    "centurylink-router-not-working",
    "frontier-internet-not-working",
    "tmobile-home-internet-not-working",
    "windstream-internet-not-working",
  ];

  // "After Situation" pages (Phase 6 — 8 pages)
  const afterSituationSlugs = [
    "printer-offline-after-windows-update",
    "wifi-not-working-after-windows-update",
    "internet-not-working-after-modem-replacement",
    "computer-slow-after-windows-update",
    "bluetooth-not-working-after-update",
    "wifi-not-working-after-sleep-mode",
    "printer-not-printing-after-driver-update",
    "internet-not-working-after-changing-router",
  ];

  // Phase 7 — ISP-specific pages (6 new)
  const ispPhase7Slugs = [
    "xfinity-internet-not-working",
    "spectrum-internet-not-working",
    "spectrum-router-red-light",
    "verizon-fios-internet-not-working",
    "comcast-router-not-working",
    "cox-internet-not-working",
  ];

  // Phase 7 — Situational long-tail pages (8 new)
  const situationalPhase7Slugs = [
    "router-not-working-after-power-outage",
    "wifi-not-working-after-reset",
    "xfinity-modem-red-light-blinking",
    "spectrum-router-blue-light-flashing",
    "printer-offline-after-windows-11-update",
    "hp-printer-not-printing-black-ink-only",
    "outlook-not-sending-emails-after-password-change",
    "laptop-slow-after-windows-update",
  ];

  // Authority / pillar pages (Phase 6 — 1 page)
  const authoritySlugs = [
    "complete-internet-router-troubleshooting-guide",
  ];

  // Blog posts
  const blogSlugs = [
    "how-to-fix-internet-not-working",
    "printer-offline-fix-guide",
    "wifi-router-reset-guide",
    "router-not-working-fixes",
    "hp-printer-offline-windows-11",
    "wifi-connected-no-internet",
    "outlook-not-sending-emails",
    "laptop-running-slow",
    "canon-printer-not-printing",
    "network-adapter-not-working",
    "email-login-problems",
    "remove-virus-from-pc",
    "blue-screen-error-fix",
  ];

  // Blog index
  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "weekly",
  };

  // Legal / info pages (lower priority, still indexed)
  const legalPages = [
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/disclaimer",
    "/cookie-policy",
    "/accessibility",
  ];

  const serviceUrls = servicePages.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    priority,
    changeFrequency,
  }));

  const locationUrls = locationSlugs.map((slug) => ({
    url: `${baseUrl}/location/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const troubleshootingUrls = troubleshootingSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const longTailUrls = longTailSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const ispUrls = ispSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const afterSituationUrls = afterSituationSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const authorityUrls = authoritySlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: "weekly",
  }));

  const ispPhase7Urls = ispPhase7Slugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const situationalPhase7Urls = situationalPhase7Slugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const legalUrls = legalPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: now,
    priority: 0.3,
    changeFrequency: "yearly",
  }));

  return [...serviceUrls, ...troubleshootingUrls, ...longTailUrls, ...ispUrls, ...afterSituationUrls, ...authorityUrls, ...ispPhase7Urls, ...situationalPhase7Urls, ...locationUrls, blogIndex, ...blogUrls, ...legalUrls];
}