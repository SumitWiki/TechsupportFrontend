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

  return [...serviceUrls, ...troubleshootingUrls, ...locationUrls, blogIndex, ...blogUrls, ...legalUrls];
}