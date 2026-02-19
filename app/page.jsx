import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { PHONE_USA, PHONE_DISPLAY } from "./lib/constants";

export const metadata = {
  title: "Premium Remote Tech Support USA, UK & Canada | TechSupport4",
  description:
    "Certified remote technical support for Internet, Printer, Wi-Fi Router & Smart TV issues across USA, UK & Canada.",
};

export default function Home() {
  return (
    <>
      {/* SCHEMA */}
      <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "TechSupport4",
      url: "https://techsupport4.com",
      logo: "https://techsupport4.com/logo.png",
      description:
        "Certified remote technical support for Internet, Printer, Wi-Fi Router and Smart TV issues.",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" }
      ],
      serviceOffered: [
        { "@type": "Service", name: "Internet Support" },
        { "@type": "Service", name: "Printer Support" },
        { "@type": "Service", name: "WiFi Router Support" },
        { "@type": "Service", name: "Smart TV Support" }
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "128"
      }
    })
  }}
/>

<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is remote support secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we use encrypted and secure remote support sessions."
          }
        },
        {
          "@type": "Question",
          name: "Do you support USA, UK and Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide certified remote tech support across USA, UK and Canada."
          }
        },
        {
          "@type": "Question",
          name: "How fast can my issue be resolved?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most issues are resolved within 30 to 60 minutes."
          }
        }
      ]
    })
  }}
/>


      <main className="bg-slate-50 text-slate-800">

        {/* HERO */}

       <section
  className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 relative overflow-hidden"
>

          <div className="absolute top-10 right-10 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg animate-bounce">
         🔥 Limited Time: 20% Off First Session
        </div>

       

          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Secure Remote Tech Support for USA, UK & Canada
            </h1>
            
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Secure & Certified Technical Support for Internet, Printer,
              Wi-Fi Router & Smart TV.
            </p>
            <p className="mt-6 text-lg text-blue-100">
            Internet • Printer • Wi-Fi • Router • Smart TV
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-4 font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              🔐 Start Secure Remote Session
            </a>

            <p className="mt-4 text-sm text-green-200 font-semibold">
              ✔ Encrypted • ✔ Certified Experts • ✔ 24/7 Available
            </p>
          </div>
          

            <div className="mt-10 flex justify-center gap-6">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
              >
                Get Instant Help
              </a>
              

            <a
              href={`tel:${PHONE_USA}`}
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              📞 {PHONE_DISPLAY}
            </a>
            </div>
            
            
          </div>
          
           
          
        </section>
        
        <section className="bg-red-50 border-t border-b border-red-200 py-6 text-center">

        {/* INTERNET NOT WORKING BANNER */}

    <p className="text-red-700 font-semibold text-lg">
    🚨 Internet Down? Work Stopped?  
    Immediate Priority Support Available.
    </p>
</section>

          
        {/* SERVICES */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Our Technical Support Services
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Expert remote troubleshooting — no engineer visit required.
            </p>

            <div className="mt-12 grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: "🌐",
                  title: "Internet Support",
                  desc: "Fix slow broadband, DNS errors, outages & connectivity drops.",
                  link: "/internet-support-usa",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "🖨️",
                  title: "Printer Support",
                  desc: "Resolve offline printer, driver errors, Wi-Fi printing & jams.",
                  link: "/printer-support-usa",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: "📶",
                  title: "Wi-Fi / Router Support",
                  desc: "Strengthen signal, fix dead zones & secure your router.",
                  link: "/wifi-router-support-usa",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: "📺",
                  title: "Smart TV Support",
                  desc: "Fix streaming issues, app errors & network connectivity on any TV.",
                  link: "/smart-tv-support-usa",
                  color: "from-orange-500 to-red-500",
                },
              ].map((service, i) => (
                <a
                  key={i}
                  href={service.link}
                  className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition overflow-hidden"
                >
                  {/* Icon banner */}
                  <div className={`bg-gradient-to-br ${service.color} h-32 flex items-center justify-center`}>
                    <span className="text-6xl drop-shadow-lg">{service.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <span className="inline-block mt-4 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      Learn more →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

 <section className="py-8 text-center bg-white dark:bg-slate-900">
  <p className="text-sm text-slate-600 dark:text-slate-300">
    Serving customers across major cities including{" "}
    <a
      href="/location/internet-support-new-york"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      New York
    </a>,{" "}
    <a
      href="/location/internet-support-california"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      California
    </a>,{" "}
    <a
      href="/location/printer-support-london"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      London
    </a>,{" "}
    <a
      href="/location/wifi-support-toronto"
      className="text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      Toronto
    </a>.
  </p>
</section>



              {/* ================= TRUST SECTION ================= */}
<section className="bg-white dark:bg-slate-900 py-15 border-b border-slate-200 dark:border-slate-700">
  <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-12 text-center">

    <div>
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        24/7 Support Coverage
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
        Available across US Eastern (EST) &amp; Pacific (PST) time zones.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Secure Remote Assistance
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
        Encrypted remote sessions with privacy-first approach.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Independent Service Provider
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
        We are a third-party technical support provider and not affiliated
        with any brand.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Global Support Team
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
        Operated internationally with dedicated USA, UK &amp; Canada customer support.
      </p>
    </div>

  </div>
</section>
         {/* ================= TRUST BADGES ================= */}
<section className="bg-slate-50 dark:bg-slate-800 py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">
              
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
      Secure Payments & Data Protection
    </p>
    

    <div className="flex justify-center items-center gap-3 flex-wrap opacity-85">

      <Image src="/visa.png" alt="Visa accepted" width={80} height={50} className="h-14 w-auto" />
      <Image src="/mastercard.png" alt="Mastercard accepted" width={80} height={50} className="h-14 w-auto" />
      <Image src="/paypal.png" alt="PayPal accepted" width={80} height={50} className="h-14 w-auto" />
      <Image src="/ssl.png" alt="SSL Secure connection" width={80} height={50} className="h-14 w-auto" />

    </div>
   
  </div>
   <div className="flex justify-center items-center gap-3 flex-wrap opacity-100">
 
   </div>
 
</section>

        {/* WHY US */}
        <section className="bg-white dark:bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Why Choose TechSupport4?
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Trusted by thousands of customers across USA, UK and Canada.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧑‍💻",
                  title: "Experienced Technicians",
                  desc: "Certified experts with years of remote support experience across all major devices.",
                },
                {
                  icon: "🔒",
                  title: "Secure Remote Assistance",
                  desc: "All sessions use end-to-end encryption. You stay in control and can end anytime.",
                },
                {
                  icon: "⚡",
                  title: "Fast Resolution",
                  desc: "Most internet, printer, and Wi-Fi issues resolved within 30–60 minutes.",
                },
                {
                  icon: "🌎",
                  title: "USA, UK & Canada Coverage",
                  desc: "Dedicated support teams for all three regions, in your local time zone.",
                },
                {
                  icon: "💸",
                  title: "Transparent Pricing",
                  desc: "No hidden fees. You know the cost before we start any session.",
                },
                {
                  icon: "🕐",
                  title: "24/7 Availability",
                  desc: "Support available around the clock, including weekends and holidays.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        <section id="reviews" className="bg-slate-50 dark:bg-slate-800 py-20 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">Real feedback from real customers.</p>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "James T.",
                  location: "New York, USA",
                  rating: 5,
                  review:
                    "My internet was completely down for 2 days. The technician fixed it remotely in under 40 minutes. Incredible service!",
                },
                {
                  name: "Sarah M.",
                  location: "London, UK",
                  rating: 5,
                  review:
                    "Printer was showing offline for a week. TechSupport4 sorted it out quickly. Very professional and the session felt completely secure.",
                },
                {
                  name: "David K.",
                  location: "Toronto, Canada",
                  rating: 5,
                  review:
                    "Wi-Fi dropping constantly in my home office. They diagnosed the router issue immediately and walked me through everything. 100% recommend.",
                },
                {
                  name: "Lisa R.",
                  location: "California, USA",
                  rating: 5,
                  review:
                    "Smart TV wasn't connecting to Netflix. Fixed in 20 minutes. The support agent was patient and knowledgeable.",
                },
                {
                  name: "Michael B.",
                  location: "Manchester, UK",
                  rating: 5,
                  review:
                    "Extremely fast response. My internet router needed reconfiguration after a move. All done remotely — no engineer visit needed.",
                },
                {
                  name: "Priya N.",
                  location: "Vancouver, Canada",
                  rating: 5,
                  review:
                    "I was sceptical about remote support but it was seamless. They fixed my printer driver issue and explained everything step by step.",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-600 text-left"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed">
                    &ldquo;{r.review}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">{r.name}</p>
                    <p className="text-slate-400 dark:text-slate-300 text-xs">{r.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-block mt-12 bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Get Your Issue Fixed Now
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
