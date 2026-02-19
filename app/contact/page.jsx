/**
 * Server component — exports metadata for SEO.
 * Interactive form is in ContactClient.jsx (client component).
 */
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Remote Tech Support — USA, UK & Canada | TechSupport4",
  description:
    "Contact TechSupport4 for fast remote tech support. Fix internet, printer, Wi-Fi & Smart TV issues — 24/7 availability across USA, UK and Canada.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TechSupport4 — Remote Tech Support",
    description: "Get certified remote tech support 24/7 across USA, UK and Canada.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
