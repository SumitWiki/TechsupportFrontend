import Link from "next/link";

export const metadata = {
  title: "Tech Support Blog — Troubleshooting Guides | TechSupport4",
  description:
    "Free step-by-step troubleshooting guides for internet not working, printer offline, Wi-Fi router issues and more from TechSupport4.",
  alternates: { canonical: "/blog" },
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
  Internet: "bg-blue-100 text-blue-700",
  Printer: "bg-purple-100 text-purple-700",
  "Wi-Fi": "bg-green-100 text-green-700",
};

export default function BlogIndex() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16 text-center px-6">
        <h1 className="text-4xl font-bold">Tech Support Blog</h1>
        <p className="mt-3 text-slate-300 max-w-xl mx-auto">
          Free troubleshooting guides for internet, printer, Wi-Fi and more — written by certified technicians.
        </p>
      </section>

      {/* Posts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7 hover:shadow-md hover:-translate-y-0.5 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition">
                {post.title}
              </h2>
              <p className="mt-2 text-slate-500 leading-relaxed">{post.description}</p>
              <p className="mt-4 text-blue-600 text-sm font-semibold">Read Guide →</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold">Issue Not Covered in Our Guides?</h2>
          <p className="mt-2 text-blue-100">
            Our certified technicians are available 24/7 to diagnose and fix any tech issue remotely.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            🔐 Get Expert Support
          </Link>
        </div>
      </section>
    </main>
  );
}
