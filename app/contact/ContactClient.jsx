"use client";

import { useState } from "react";
import { PHONE_USA, PHONE_DISPLAY, SUPPORT_EMAIL } from "../lib/constants";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

    // Phone validation before submit
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (formData.phone && (!formData.phone.startsWith("+") || digitsOnly.length < 10)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {

      // Use CRM backend API for ticket creation
      const { CRM_API_URL } = await import("../lib/constants");
      const res = await fetch(`${CRM_API_URL}/api/cases/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT — Info Panel */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-3">Contact Support</h1>
          <p className="text-white/80 text-lg mb-8">
            Our certified technicians are available 24/7. Most issues resolved within 30–60 minutes.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Call Us (USA)</p>
                <a href={`tel:${PHONE_USA}`} className="text-yellow-300 hover:underline font-mono">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold">Email Us</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-yellow-300 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-semibold">Support Hours</p>
                <p className="text-white/70 text-sm">24/7 — USA, UK & Canada</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
              <span className="text-2xl">🔐</span>
              <div>
                <p className="font-semibold">Secure & Encrypted</p>
                <p className="text-white/70 text-sm">All sessions are end-to-end encrypted.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-1">Send a Message</h2>
          <p className="text-white/60 text-sm mb-6">We respond within minutes.</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">

          {/* Honeypot */}
          <input name="_honey" className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />

          <input type="text" name="name" placeholder="Your Full Name"
            value={formData.name} onChange={handleChange} required autoComplete="name"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400" />

          <input type="email" name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange} required autoComplete="email"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400" />

          <input type="tel" name="phone" placeholder="Phone e.g. +12345678901"
            value={formData.phone} onChange={handlePhoneChange} autoComplete="tel"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          {phoneError && <p className="text-red-300 text-xs">{phoneError}</p>}

          <textarea name="message" placeholder="Describe your issue in detail…"
            value={formData.message} onChange={handleChange} required rows="4"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none" />

          <button type="submit" disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 transition disabled:opacity-60 cursor-pointer">
            {loading ? "Sending…" : "Send Secure Message 🔐"}
          </button>

          {status === "success" && (
            <div className="bg-green-500/20 border border-green-400/40 text-green-300 p-4 rounded-lg text-center text-sm font-semibold space-y-1">
              <p>✅ Message sent! We&apos;ll be in touch shortly.</p>
              {caseId && (
                <p className="font-mono text-yellow-300 text-base tracking-wider">
                  Case ID: {caseId}
                </p>
              )}
              <p className="font-normal text-white/70 text-xs">
                A confirmation email has been sent to your inbox. Please quote this case ID in any follow-up.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-500/20 border border-red-400/30 text-red-300 p-4 rounded-lg text-center text-sm">
              ❌ Something went wrong. Please call us directly.
            </div>
          )}
        </form>
      </div>
      </div>
    </main>
  );
}
