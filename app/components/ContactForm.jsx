"use client";

import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _honey: "", // honeypot — bots fill this, humans don't
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Enter a valid email.";
    if (!formData.phone.trim()) {
      errs.phone = "Phone is required.";
    } else if (!/^\+1\d{10}$/.test(formData.phone.trim())) {
      errs.phone = "Please add +1 followed by 10 digit US number.";
    }
    if (!formData.message.trim()) errs.message = "Please describe your issue.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._honey) return; // silent bot drop
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setStatus(null);
    try {
      const { _honey, ...payload } = formData;
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", _honey: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl text-white">
      <h2 className="text-3xl font-bold text-center mb-2">Get Support Now</h2>
      <p className="text-center text-sm text-white/70 mb-6">
        A certified technician will respond within minutes.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot — hidden from real users, bots fill it */}
        <input name="_honey" value={formData._honey} onChange={handleChange}
          className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />

        {/* Name */}
        <div>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input name="name" type="text" required value={formData.name}
              onChange={handleChange} placeholder="Full Name" autoComplete="name"
              className={`w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 ${errors.name ? "ring-2 ring-red-400" : "focus:ring-yellow-400"}`} />
          </div>
          {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input type="email" name="email" required value={formData.email}
              onChange={handleChange} placeholder="Email Address" autoComplete="email"
              className={`w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 ${errors.email ? "ring-2 ring-red-400" : "focus:ring-yellow-400"}`} />
          </div>
          {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange}
            placeholder="Phone (Optional)" autoComplete="tel"
            className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>

        {/* Message */}
        <div>
          <textarea name="message" required rows="4" value={formData.message}
            onChange={handleChange} placeholder="Describe your issue in detail…"
            className={`w-full p-3 bg-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 resize-none ${errors.message ? "ring-2 ring-red-400" : "focus:ring-yellow-400"}`} />
          {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Sending…
            </span>
          ) : "Send Secure Message 🔐"}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-3 bg-green-500/20 border border-green-400/40 rounded-lg px-4 py-3 text-green-300">
            <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
            <p className="font-semibold text-sm">Message sent! A technician will contact you shortly.</p>
          </div>
        )}
        {status === "error" && (
          <p className="text-red-300 text-center text-sm bg-red-500/10 border border-red-400/30 rounded-lg py-3">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
      <p className="mt-6 text-center text-xs text-white/50">
        🔒 Your data is encrypted and never shared with third parties.
      </p>
    </div>
  );
}
