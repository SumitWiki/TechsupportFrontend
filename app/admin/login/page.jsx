"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { API_URL } from "../../lib/constants";
import Image from "next/image";


export default function AdminLogin() {
  // Force light mode for this page only
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {};
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push(from);
        router.refresh();
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("Unable to reach server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100">
      <div className="w-full max-w-4xl flex rounded-2xl shadow-2xl overflow-hidden border border-blue-100" style={{borderRadius:16}}>
        {/* Left: Login Form */}
        <div className="flex-1 bg-white p-10 flex flex-col justify-center" style={{minWidth:320}}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-1">TechSupport4 CRM</h1>
            <p className="text-slate-500 text-sm">Admin Panel Login</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm text-blue-900 mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="support@techsupport4.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full p-3 rounded-lg border border-blue-200 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-300 text-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-900 mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full p-3 rounded-lg border border-blue-200 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-300 text-blue-900"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm bg-red-100 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60 shadow-sm"
            >
              {loading ? "Logging in…" : "Login"}
            </button>
            <p className="text-xs text-slate-500 text-center mt-2">Secured with 2FA authentication</p>
          </form>
        </div>
        {/* Right: Welcome Panel */}
        <div className="hidden md:flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-blue-100 to-blue-200 p-10" style={{minWidth:320}}>
          <div className="flex flex-col items-center">
            <Image src="/logo.png" alt="TechSupport4 Logo" width={64} height={64} className="mb-4 rounded-xl shadow" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Welcome Back</h2>
            <p className="text-blue-800 text-center text-base max-w-xs">Authorized personnel only. All access is logged and monitored.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
