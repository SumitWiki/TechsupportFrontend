"use client";
import { useState } from "react";

export default function RefundClient() {
  const [answer, setAnswer] = useState(null);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-6 bg-white dark:bg-slate-800 p-10 rounded-xl shadow border border-slate-200 dark:border-slate-700">

        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Refund Policy
        </h1>

        <p className="text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
          Customer satisfaction is our priority. Refunds may be granted
          if the issue was not resolved and no partial service was delivered.
        </p>

        {/* Refund conditions */}
        <div className="space-y-4 mb-8">
          {[
            { icon: "✅", title: "Full Refund", desc: "Issued if no remote session was initiated and the service was not delivered." },
            { icon: "⚠️", title: "Partial Refund", desc: "May be issued if a session was started but the issue was not resolved due to our error." },
            { icon: "❌", title: "No Refund", desc: "If the issue was resolved and confirmed by the customer. Change of mind after service delivery is not eligible." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">{item.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-600 pt-8 mt-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Was this information helpful?
          </h3>

          {!submitted && (
            <>
              <div className="flex gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-900 dark:text-white">
                  <input
                    type="radio"
                    name="helpful"
                    value="yes"
                    onChange={() => setAnswer("yes")}
                    className="accent-blue-600 w-4 h-4"
                  />
                  Yes
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-900 dark:text-white">
                  <input
                    type="radio"
                    name="helpful"
                    value="no"
                    onChange={() => setAnswer("no")}
                    className="accent-blue-600 w-4 h-4"
                  />
                  No
                </label>
              </div>

              {answer === "yes" && (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 p-4 rounded-lg font-medium">
                  ✅ Thank you for your feedback!
                </div>
              )}

              {answer === "no" && (
                <div style={{ border: "1px solid #94a3b8", borderRadius: "8px", padding: "24px" }} className="bg-slate-100 dark:bg-slate-700 dark:border-slate-500">
                  <p style={{ marginBottom: "16px", fontWeight: "700", fontSize: "15px", color: "#0f172a" }} className="dark:!text-white">
                    Please select what best describes the issue:
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                      { value: "confusing",  label: "This information is confusing or wrong" },
                      { value: "notlooking", label: "This is not the information I was looking for" },
                      { value: "dontlike",   label: "I do not like the policy" },
                    ].map((opt) => (
                      <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                        <input
                          type="radio"
                          name="reason"
                          value={opt.value}
                          onChange={(e) => setReason(e.target.value)}
                          style={{ accentColor: "#2563eb", width: "16px", height: "16px", flexShrink: 0 }}
                        />
                        <span style={{ color: "#0f172a", fontWeight: "500", fontSize: "15px" }} className="dark:!text-white">{opt.label}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!reason}
                    className="cursor-pointer mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    Submit Feedback
                  </button>
                </div>
              )}
            </>
          )}

          {submitted && (
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 p-6 rounded-lg mt-4">
              <p className="font-semibold text-blue-800 dark:text-blue-200">Thank you!</p>
              <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                While we are unable to respond directly to your feedback,
                we will use this information to improve our online Help.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
