"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _honey: "",
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
      errs.phone = "Phone must start with +1 followed by 10 digits.";
    }
    if (!formData.message.trim()) errs.message = "Please describe your issue.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._honey) return;
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

  const inputBase = "w-full pl-10 pr-4 py-3 rounded-xl border transition text-sm focus:outline-none focus:ring-2";
  const inputLight = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500";

  return (
    <div className="relative w-full max-w-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 md:p-10 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-extrabold text-center mb-2 text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>Get Support Now</h2>
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-6">
        A certified technician will respond within minutes.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <input name="_honey" value={formData._honey} onChange={handleChange}
          className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />

        {/* Name */}
        <div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <input name="name" type="text" required value={formData.name}
              onChange={handleChange} placeholder="Full Name" autoComplete="name"
              className={`${inputBase} ${inputLight} ${errors.name ? "ring-2 ring-red-400 border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`} />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <input type="email" name="email" required value={formData.email}
              onChange={handleChange} placeholder="Email Address" autoComplete="email"
              className={`${inputBase} ${inputLight} ${errors.email ? "ring-2 ring-red-400 border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`} />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <input name="phone" type="tel" required value={formData.phone}
              onChange={handleChange} placeholder="Phone (+1XXXXXXXXXX)" autoComplete="tel" pattern="^\+1\d{10}$"
              className={`${inputBase} ${inputLight} ${errors.phone ? "ring-2 ring-red-400 border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`} />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea name="message" required rows="4" value={formData.message}
            onChange={handleChange} placeholder="Describe your issue in detail..."
            className={`w-full p-3 rounded-xl border transition text-sm focus:outline-none focus:ring-2 resize-none ${inputLight} ${errors.message ? "ring-2 ring-red-400 border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`} />
          {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm shadow-lg">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : "Send Secure Message"}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="font-semibold text-sm text-green-700 dark:text-green-400">Message sent! A technician will contact you shortly.</p>
          </div>
        )}
        {status === "error" && (
          <div className="text-red-600 dark:text-red-400 text-center text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl py-3">
            Something went wrong. Please try again or call us directly.
          </div>
        )}
      </form>
      <p className="mt-5 text-center text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        Your data is encrypted and never shared with third parties.
      </p>
    </div>
  );
}
