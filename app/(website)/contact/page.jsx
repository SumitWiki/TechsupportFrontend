/**
 * Server component — exports metadata for SEO.
 * Interactive form is in ContactClient.jsx (client component).
 */
import ContactClient from "./ContactClient";
import Script from "next/script";

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
  return (
    <>
      {/* ContactPage Schema */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact TechSupport4",
            description: "Contact TechSupport4 for fast remote tech support across USA, UK and Canada.",
            url: "https://techsupport4.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "TechSupport4",
              email: "support@techsupport4.com",
              telephone: process.env.NEXT_PUBLIC_PHONE_USA,
              url: "https://techsupport4.com",
            },
          }),
        }}
      />
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techsupport4.com" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://techsupport4.com/contact" },
            ],
          }),
        }}
      />
      <ContactClient />
    </>
  );
}
