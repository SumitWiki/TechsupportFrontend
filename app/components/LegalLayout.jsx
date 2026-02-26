"use client";
import { useState, useEffect } from "react";

export default function LegalLayout({
  title,
  sections,
  version = "v1.0.0",
  lastUpdated: lastUpdatedProp,
}) {
  const [openSection, setOpenSection] = useState(null);
  const [active, setActive] = useState(null);

  const lastUpdated = lastUpdatedProp || "February 2026";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          if (
            scrollPosition >= el.offsetTop &&
            scrollPosition < el.offsetTop + el.offsetHeight
          ) {
            setActive(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <section className="bg-white dark:bg-slate-900 py-20 print:bg-white">
      <div className="max-w-7xl mx-auto px-6 flex gap-10">

        {/* SIDEBAR */}
        <aside className="hidden lg:block w-1/4 sticky top-32 h-fit print:hidden">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold mb-4 text-blue-700 dark:text-blue-400">
              On This Page
            </h3>
            <ul className="space-y-3 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block transition ${
                      active === section.id
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => window.print()}
              className="cursor-pointer mt-6 w-full text-sm bg-slate-200 dark:bg-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            >
              Print Page
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow border border-slate-200 dark:border-slate-700 print:shadow-none print:border-none">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {title}
              </h1>
              <div className="flex items-center gap-3 mt-4 md:mt-0 text-sm">
                <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                  {version}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  Last Updated: {lastUpdated}
                </span>
              </div>
            </div>

            {/* Accordion Sections */}
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-6 border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden scroll-mt-32"
              >
                <button
                  onClick={() =>
                    setOpenSection(
                      openSection === section.id ? null : section.id
                    )
                  }
                  className="cursor-pointer w-full text-left p-5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition font-semibold text-slate-800 dark:text-white flex justify-between items-center"
                >
                  {section.title}
                  <span className="text-slate-500 dark:text-slate-300 text-xl leading-none ml-4 flex-shrink-0">
                    {openSection === section.id ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openSection === section.id
                      ? "max-h-[500px] p-6 bg-white dark:bg-slate-800"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
