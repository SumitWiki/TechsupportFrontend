import Link from "next/link";

export const metadata = {
  title: "Page Not Found | TechSupport4",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800 px-6 text-center">
      <div className="max-w-lg">
        {/* Big 404 */}
        <p className="text-8xl font-extrabold text-blue-600 leading-none select-none">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>

        <p className="mt-4 text-slate-500 text-lg">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Support
          </Link>
        </div>

        {/* Services */}
        <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
          {[
            { label: "Internet Support", href: "/internet-support-usa" },
            { label: "Printer Support", href: "/printer-support-usa" },
            { label: "Wi-Fi Support", href: "/wifi-router-support-usa" },
            { label: "Smart TV Support", href: "/smart-tv-support-usa" },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white border border-slate-200 rounded-lg p-3 hover:border-blue-400 hover:shadow-sm transition text-blue-700 font-medium"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
