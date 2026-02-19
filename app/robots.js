export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block admin panel and any API routes from being indexed
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://techsupport4.com/sitemap.xml",
  };
}
