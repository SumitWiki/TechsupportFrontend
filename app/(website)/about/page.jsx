import Script from "next/script";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY, SUPPORT_EMAIL } from "../../lib/constants";

export const metadata = {
  title: "About Us — Certified Remote Tech Support | TechSupport4",
  description:
    "Learn about TechSupport4, a trusted remote technical support company serving customers across USA, UK, and Canada. Certified technicians, 24/7 availability, and transparent service.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TechSupport4 — Certified Remote Tech Support",
    description:
      "Trusted remote technical support company serving USA, UK, and Canada with certified technicians available 24/7.",
    url: "https://techsupport4.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Organization Schema */}
      <Script
        id="about-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TechSupport4",
            url: "https://techsupport4.com",
            logo: "https://techsupport4.com/logo.png",
            description:
              "Certified remote technical support for Internet, Printer, Wi-Fi Router, and Smart TV issues across USA, UK, and Canada.",
            email: "support@techsupport4.com",
            telephone: "+18889501777",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
            ],
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+18889501777",
              contactType: "customer service",
              availableLanguage: "English",
              areaServed: ["US", "GB", "CA"],
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techsupport4.com" },
              { "@type": "ListItem", position: 2, name: "About Us", item: "https://techsupport4.com/about" },
            ],
          }),
        }}
      />

      <main className="bg-white dark:bg-slate-900 min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-blue-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">About Us</span>
            </nav>
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">
              Trusted Since Day One
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              About TechSupport4
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto">
              We are a team of certified technical support professionals dedicated to helping customers resolve technology issues remotely — securely, quickly, and affordably.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Who We Are
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            <p>
              TechSupport4 is an independent remote technical support company that helps individuals and small businesses troubleshoot and resolve common technology problems. Our services cover a wide range of devices and issues including internet connectivity, printer setup and troubleshooting, Wi-Fi router configuration, and smart TV support.
            </p>
            <p>
              Founded with the mission of making professional technical support accessible to everyone, we provide our services remotely — which means customers can get help from the comfort of their home or office without waiting for an on-site visit. Our team operates 24 hours a day, 7 days a week, serving customers across the United States, United Kingdom, and Canada.
            </p>
            <p>
              We are <strong>not affiliated with any hardware or software manufacturers</strong>. TechSupport4 is a fully independent company. All brand names and trademarks mentioned on our website belong to their respective owners and are used only for identification purposes. This transparency is central to our values and ensures customers always know exactly who they are working with.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-slate-50 dark:bg-slate-800/50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Our Mission
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>
                Our mission is to provide reliable, honest, and affordable remote technical support to customers who need help with everyday technology challenges. We understand that technology problems can be frustrating and disruptive, which is why we prioritize fast response times, clear communication, and transparent pricing.
              </p>
              <p>
                We believe that everyone deserves access to professional technical help, regardless of their technical knowledge level. Whether you are a first-time computer user dealing with a Wi-Fi issue or a small business owner troubleshooting a network printer, our technicians are trained to explain solutions in clear, non-technical language and guide you through every step.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Services We Provide
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Internet Support",
                desc: "Troubleshooting slow internet, no connection errors, DNS issues, ISP configuration, and network diagnostics for all major providers.",
                href: "/internet-support-usa",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              },
              {
                title: "Printer Support",
                desc: "Fixing printer offline issues, driver installation, wireless printer setup, print queue errors, and spooler problems for HP, Canon, Epson, Brother, and all major brands.",
                href: "/printer-support-usa",
                icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
              },
              {
                title: "Wi-Fi & Router Support",
                desc: "Router reset and configuration, Wi-Fi signal optimization, firmware updates, port forwarding, parental controls, and network security setup for all router brands.",
                href: "/wifi-router-support-usa",
                icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
              },
              {
                title: "Smart TV Support",
                desc: "App installation and updates, streaming service troubleshooting, network connectivity, screen mirroring, and firmware updates for Samsung, LG, Sony, Roku, and Amazon Fire TV.",
                href: "/smart-tv-support-usa",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
            ].map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {svc.title}
                </h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="bg-slate-50 dark:bg-slate-800/50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Why Customers Trust TechSupport4
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>
                Trust is the foundation of our business. In the tech support industry, we understand that customers need to feel confident that they are working with a legitimate, professional, and transparent service provider. Here is why thousands of customers trust TechSupport4:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Transparent Pricing", desc: "We disclose all service charges before any work begins. There are no hidden fees, surprise charges, or automatic recurring payments." },
                { title: "Certified Technicians", desc: "Our support team consists of trained and experienced technical professionals who follow industry best practices for remote troubleshooting." },
                { title: "Secure Remote Sessions", desc: "All remote support sessions use 256-bit SSL encryption. Customers must explicitly grant permission before any remote access begins." },
                { title: "24/7 Availability", desc: "Our team is available around the clock, every day of the year. Whether it's a weekday morning or a holiday evening, help is always available." },
                { title: "Clear Communication", desc: "We explain every step of the troubleshooting process in plain, non-technical language so you always know what is being done on your device." },
                { title: "Fair Refund Policy", desc: "If we cannot resolve your issue, we offer a fair refund process. Customer satisfaction is our top priority." },
              ].map((item) => (
                <div key={item.title} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            How Our Support Process Works
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out through our contact form, email, or phone. Describe your issue and we will assess whether remote support can help." },
              { step: "2", title: "Diagnosis", desc: "A certified technician will review your issue and explain the likely cause and solution before any work begins. Service charges are disclosed upfront." },
              { step: "3", title: "Secure Remote Session", desc: "With your explicit permission, the technician connects to your device through an encrypted remote session. You can see everything being done in real-time." },
              { step: "4", title: "Resolution & Verification", desc: "The technician resolves the issue and verifies the fix with you. We ensure the problem is fully resolved before ending the session." },
              { step: "5", title: "Follow-Up Support", desc: "After the session, you receive a summary of what was done. If the issue recurs within the support period, we provide additional help at no extra charge." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-slate-50 dark:bg-slate-800/50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Our Core Values
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>
                <strong>Honesty & Transparency:</strong> We believe in complete honesty with our customers. We will never misrepresent our services, create false urgency, or use scare tactics. If an issue cannot be resolved remotely, we will tell you directly and recommend appropriate next steps.
              </p>
              <p>
                <strong>Customer Privacy:</strong> We take data privacy seriously. We only collect information that is necessary to provide our services, and we never sell or share customer data with third parties for marketing purposes. Our full data practices are outlined in our <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
              </p>
              <p>
                <strong>Continuous Improvement:</strong> Technology evolves constantly, and so do we. Our team regularly updates their knowledge and skills to stay current with the latest devices, operating systems, and troubleshooting techniques.
              </p>
              <p>
                <strong>Accessibility:</strong> We are committed to making our services accessible to everyone. Our website follows WCAG 2.1 accessibility guidelines, and our support team is trained to assist customers of all technical skill levels. Read our <Link href="/accessibility" className="text-blue-600 dark:text-blue-400 hover:underline">Accessibility Statement</Link> for details.
              </p>
            </div>
          </div>
        </section>

        {/* Business Details */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Business Details
          </h2>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Company Name</p>
                <p className="text-slate-500 dark:text-slate-400">TechSupport4</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Website</p>
                <p className="text-blue-600 dark:text-blue-400">techsupport4.com</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Email</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 hover:underline">{SUPPORT_EMAIL}</a>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Phone (USA)</p>
                <a href={`tel:${PHONE_USA}`} className="text-blue-600 dark:text-blue-400 hover:underline">{PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Service Areas</p>
                <p className="text-slate-500 dark:text-slate-400">United States, United Kingdom, Canada</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Availability</p>
                <p className="text-slate-500 dark:text-slate-400">24/7, 365 days a year</p>
              </div>
              <div className="sm:col-span-2">
                <p className="font-bold text-slate-900 dark:text-white mb-1">Services Offered</p>
                <p className="text-slate-500 dark:text-slate-400">Internet Support, Printer Support, Wi-Fi & Router Setup, Smart TV Troubleshooting, General Remote Technical Assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Statement */}
        <section className="bg-blue-50 dark:bg-blue-900/20 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Google Search Essentials Compliance
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              TechSupport4 confirms that our website complies with Google Search Essentials (formerly Google Webmaster Guidelines) and does not fall under the spam or deceptive practices category. We do not use cloaking, hidden text, doorway pages, scraped content, or any other manipulative techniques. All content on our website is original, written by our team, and intended to provide genuine value to visitors seeking technical support information.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Need Technical Help Right Now?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Our certified technicians are standing by 24/7 to assist you with any internet, printer, router, or smart TV issue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
              Contact Us
            </Link>
            <a href={`tel:${PHONE_USA}`} className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
              Call {PHONE_DISPLAY}
            </a>
            <Link href="/faq" className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white px-8 py-3.5 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition">
              Read FAQ
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
