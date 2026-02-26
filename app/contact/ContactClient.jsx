"use client";

import { useState } from "react";
import { PHONE_USA, PHONE_DISPLAY, SUPPORT_EMAIL } from "../lib/constants";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _honey: "", // honeypot — bots fill this, humans don't
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"
  const [caseId, setCaseId] = useState("");
  const [phoneError, setPhoneError] = useState(""); // phone validation error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Allow only digits and optional leading +
    if (value.startsWith("+")) {
      value = "+" + value.slice(1).replace(/\D/g, "");
    } else {
      value = value.replace(/\D/g, "");
    }

    // Limit to 11 digits (excluding +)
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length > 11) {
      if (value.startsWith("+")) {
        value = "+" + digitsOnly.slice(0, 11);
      } else {
        value = digitsOnly.slice(0, 11);
      }
    }

    setFormData({ ...formData, phone: value });
    setPhoneError(""); // clear error while typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — silently reject bot submissions
    if (formData._honey) return;

    // Phone validation before submit
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (formData.phone && (!formData.phone.startsWith("+1") || digitsOnly.length !== 11)) {
      setPhoneError("Phone must start with +1 and contain exactly 10 digits after.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setCaseId(data.caseId || "");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-700 text-white py-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-10 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-4">24/7 Available</span>
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>Contact Support</h1>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">Our certified technicians are available 24/7. Most issues resolved within 30-60 minutes.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT — Info Panel */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Get In Touch</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Call Us (USA)</p>
                <a href={`tel:${PHONE_USA}`} className="text-blue-600 dark:text-blue-400 hover:underline font-mono text-sm">{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Email Us</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">{SUPPORT_EMAIL}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Support Hours</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">24/7 — USA, UK &amp; Canada</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Secure &amp; Encrypted</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">All sessions are end-to-end encrypted.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl p-8">
          <h2 className="text-xl font-extrabold mb-1 text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>Send a Message</h2>
          <p className="text-slate-400 dark:text-slate-500 text-sm mb-6">We respond within minutes.</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">

          <input name="_honey" value={formData._honey} onChange={handleChange}
            className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />

          <input type="text" name="name" placeholder="Your Full Name"
            value={formData.name} onChange={handleChange} required autoComplete="name"
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" />

          <input type="email" name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange} required autoComplete="email"
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" />

          <input type="tel" name="phone" placeholder="Phone e.g. +12345678901"
            value={formData.phone} onChange={handlePhoneChange} autoComplete="tel"
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" />
          {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}

          <textarea name="message" placeholder="Describe your issue in detail..."
            value={formData.message} onChange={handleChange} required rows="4"
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm" />

          <button type="submit" disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-60 cursor-pointer text-sm shadow-lg">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </span>
            ) : "Send Secure Message"}
          </button>

          {status === "success" && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl text-center text-sm space-y-1">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="font-bold text-green-700 dark:text-green-400">Message sent! We&apos;ll be in touch shortly.</p>
              </div>
              {caseId && (
                <p className="font-mono text-blue-600 dark:text-blue-400 text-base tracking-wider">Case ID: {caseId}</p>
              )}
              <p className="text-slate-500 dark:text-slate-400 text-xs">A confirmation email has been sent. Please quote this case ID in any follow-up.</p>
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl text-center text-sm">
              Something went wrong. Please call us directly.
            </div>
          )}
        </form>
      </div>
      </div>
    </main>
  );
}
