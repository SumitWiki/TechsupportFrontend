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
  ];

  // Location / city pages
  const locationSlugs = [
    "internet-support-new-york",
    "internet-support-california",
    "printer-support-london",
    "wifi-support-toronto",
  ];

  // Blog posts
  const blogSlugs = [
    "how-to-fix-internet-not-working",
    "printer-offline-fix-guide",
    "wifi-router-reset-guide",
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

  return [...serviceUrls, ...locationUrls, blogIndex, ...blogUrls, ...legalUrls];
}