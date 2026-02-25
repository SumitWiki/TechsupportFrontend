"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { API_URL } from "../../lib/constants";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawFrom = searchParams.get("from") || "/admin/dashboard";
  // Prevent open redirect — only allow internal /admin/ paths
  const from = rawFrom.startsWith("/admin/") || rawFrom === "/admin" ? rawFrom : "/admin/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        /**
         * SECURITY NOTE: When you build the backend, configure it to
         * set an httpOnly, Secure, SameSite=Strict cookie named "auth_token"
         * instead of returning the token in the JSON body.
         * credentials: "include" here ensures the cookie is sent/received.
         */
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(from);
        router.refresh(); // re-run middleware check
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
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">TechSupport4</h1>
          <p className="text-slate-400 text-sm mt-1">Admin Panel Login</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded-2xl text-white space-y-4 shadow-2xl border border-gray-700"
        >
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="support@techsupport4.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-950/40 border border-red-800 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-600 mt-4">
          Unauthorised access is prohibited and logged.
        </p>
      </div>
    </div>
  );
}
