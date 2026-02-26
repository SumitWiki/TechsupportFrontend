import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
});

export const metadata = {
  title: "TechSupport4 CRM — Admin Dashboard",
  description: "Internal CRM dashboard for TechSupport4 support operations. Manage leads, cases, and team performance.",
  metadataBase: new URL("https://crm.techsupport4.com"),
  alternates: { canonical: "/admin/login" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "TechSupport4 CRM",
    description: "Secure admin portal for TechSupport4 operations.",
    siteName: "TechSupport4 CRM",
    locale: "en_US",
    type: "website",
  },
};

export default function AdminLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 antialiased">
        {children}
      </body>
    </html>
  );
}
