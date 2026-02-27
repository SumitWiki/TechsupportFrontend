import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tech Support Blog — Troubleshooting Guides | TechSupport4",
  description:
    "Free step-by-step troubleshooting guides for internet not working, printer offline, Wi-Fi router issues and more from TechSupport4.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Tech Support Blog — Troubleshooting Guides | TechSupport4",
    description: "Free step-by-step troubleshooting guides for internet, printer, Wi-Fi router issues and more.",
    url: "https://techsupport4.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Support Blog | TechSupport4",
    description: "Free troubleshooting guides for internet, printer, and router issues.",
  },
};

const posts = [
  {
    slug: "how-to-fix-internet-not-working",
    title: "How to Fix Internet Not Working",
    description:
      "Complete step-by-step troubleshooting guide for no internet connection, slow internet, and Wi-Fi issues. Works for all ISPs.",
    category: "Internet",
    readTime: "8 min read",
  },
  {
    slug: "printer-offline-fix-guide",
    title: "How to Fix Printer Offline Issue",
    description:
      "Printer showing offline? Fix it on Windows and Mac for HP, Canon, Epson, Brother and all major printer brands.",
    category: "Printer",
    readTime: "7 min read",
  },
  {
    slug: "wifi-router-reset-guide",
    title: "How to Reset Your Wi-Fi Router",
    description:
      "Step-by-step guide to safely reset Netgear, TP-Link, Linksys, Asus, BT Hub, Virgin Media and all major router brands.",
    category: "Wi-Fi",
    readTime: "6 min read",
  },
];

const categoryColors = {
  Internet: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Printer: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  "Wi-Fi": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
};

export default function BlogIndex() {
  return (
    <>
      {/* Blog CollectionPage Schema */}
      <Script
        id="blog-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Tech Support Blog",
            description: "Free step-by-step troubleshooting guides for internet, printer, Wi-Fi router issues.",
            url: "https://techsupport4.com/blog",
            publisher: {
              "@type": "Organization",
              name: "TechSupport4",
              url: "https://techsupport4.com",
            },
          }),
        }}
      />
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techsupport4.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://techsupport4.com/blog" },
            ],
          }),
        }}
      />
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-1/3 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div></div>
        <div className="relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-blue-300 text-sm mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">Blog</span>
          </nav>
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Tech Support Blog</h1>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">Free troubleshooting guides for internet, printer, Wi-Fi and more — written by certified technicians.</p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-7 hover:shadow-lg hover:-translate-y-0.5 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {post.title}
              </h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{post.description}</p>
              <p className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-bold">Read Guide &rarr;</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Issue Not Covered in Our Guides?</h2>
          <p className="mt-2 text-blue-100">Our certified technicians are available 24/7 to diagnose and fix any tech issue remotely.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">Get Expert Support</Link>
            <a href="tel:+18889501777" className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Call Now</a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Explore Our Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/internet-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Internet Support USA</Link>
            <Link href="/printer-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Printer Support USA</Link>
            <Link href="/wifi-router-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Wi-Fi Router Support</Link>
            <Link href="/smart-tv-support-usa" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Smart TV Support</Link>
            <Link href="/faq" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">FAQ</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
