"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

/* ───────── MOCK DATA ───────── */
const weeklyLeads = [
  { day: "Mon", leads: 12 }, { day: "Tue", leads: 18 }, { day: "Wed", leads: 15 },
  { day: "Thu", leads: 22 }, { day: "Fri", leads: 28 }, { day: "Sat", leads: 14 },
  { day: "Sun", leads: 9 },
];
const monthlyRevenue = [
  { month: "Jan", revenue: 4200 }, { month: "Feb", revenue: 3800 }, { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 4700 }, { month: "May", revenue: 6200 }, { month: "Jun", revenue: 5800 },
];
const casesByType = [
  { name: "Internet", value: 35, color: "#3B82F6" },
  { name: "Printer", value: 25, color: "#8B5CF6" },
  { name: "Wi-Fi", value: 22, color: "#10B981" },
  { name: "Smart TV", value: 18, color: "#F59E0B" },
];
const recentLeads = [
  { id: "LD-1042", name: "John Mitchell", email: "john.m@gmail.com", phone: "+1 (555) 234-5678", type: "Internet", status: "New", date: "2026-02-26", role: "customer" },
  { id: "LD-1041", name: "Sarah Chen", email: "sarah.c@outlook.com", phone: "+1 (555) 345-6789", type: "Printer", status: "In Progress", date: "2026-02-25", role: "customer" },
  { id: "LD-1040", name: "David Brown", email: "david.b@yahoo.com", phone: "+1 (555) 456-7890", type: "Wi-Fi", status: "Resolved", date: "2026-02-25", role: "customer" },
  { id: "LD-1039", name: "Lisa Wang", email: "lisa.w@gmail.com", phone: "+1 (555) 567-8901", type: "Smart TV", status: "New", date: "2026-02-24", role: "customer" },
  { id: "LD-1038", name: "Michael Davis", email: "m.davis@hotmail.com", phone: "+1 (555) 678-9012", type: "Internet", status: "Resolved", date: "2026-02-24", role: "customer" },
  { id: "LD-1037", name: "Emma Wilson", email: "emma.w@gmail.com", phone: "+1 (555) 789-0123", type: "Printer", status: "In Progress", date: "2026-02-23", role: "customer" },
];
const teamMembers = [
  { name: "Admin User", email: "admin@techsupport4.com", role: "admin", status: "Active" },
  { name: "James Thompson", email: "james@techsupport4.com", role: "manager", status: "Active" },
  { name: "Maria Garcia", email: "maria@techsupport4.com", role: "agent", status: "Active" },
  { name: "Alex Johnson", email: "alex@techsupport4.com", role: "agent", status: "Inactive" },
];

/* ───────── HELPERS ───────── */
const statusBadge = (s) => {
  const map = {
    "New": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    "Resolved": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return map[s] || "bg-slate-100 text-slate-700";
};
const roleBadge = (r) => {
  const map = {
    admin: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    manager: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    agent: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };
  return map[r] || "bg-slate-100 text-slate-700";
};

export default function Dashboard() {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);

  /* Auth check */
  useEffect(() => {
    const token = localStorage.getItem("crm_token");
    const stored = localStorage.getItem("crm_user");
    if (!token) { router.push("/admin/login"); return; }
    if (stored) setUser(JSON.parse(stored));
  }, [router]);

  /* Dark mode sync */
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const handleLogout = () => {
    localStorage.removeItem("crm_token");
    localStorage.removeItem("crm_user");
    router.push("/admin/login");
  };

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Type", "Status", "Date"];
    const rows = recentLeads.map((l) => [l.id, l.name, l.email, l.phone, l.type, l.status, l.date]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-export-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const NAV = [
    { key: "overview", label: "Overview", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2" },
    { key: "leads", label: "Leads", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { key: "team", label: "Team", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v-1" },
  ];

  return (
    <div className={`min-h-screen flex ${dark ? "dark" : ""}`}>
      {/* ═══════════ SIDEBAR ═══════════ */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-900 dark:bg-slate-950 text-white flex flex-col transition-all duration-200 flex-shrink-0 border-r border-slate-800`}>
        {/* Logo */}
        <div className="p-5 flex items-center gap-3 border-b border-slate-800">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          {sidebarOpen && <span className="font-bold text-sm tracking-tight whitespace-nowrap">TechSupport4 CRM</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1">
          {NAV.map((n) => (
            <button key={n.key} onClick={() => setActiveTab(n.key)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === n.key ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={n.icon} /></svg>
              {sidebarOpen && n.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-slate-800 space-y-2">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition">
            <svg className={`w-5 h-5 transition-transform ${sidebarOpen ? "" : "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            {sidebarOpen && "Collapse"}
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-slate-800 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            {sidebarOpen && "Log Out"}
          </button>
        </div>
      </aside>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 min-h-screen overflow-x-hidden">

        {/* ─── TOP BAR ─── */}
        <header className="sticky top-0 z-30 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
              {activeTab === "overview" ? "Dashboard" : activeTab === "leads" ? "Lead Management" : "Team Management"}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark toggle */}
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Toggle theme">
              {dark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            {/* User */}
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                {user?.name?.[0] || "A"}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">{user?.name || "Admin"}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{user?.role || "admin"}</p>
              </div>
            </div>
          </div>
        </header>

        {/* ─── CONTENT ─── */}
        <main className="flex-1 p-6 space-y-6">

          {/* ══════ OVERVIEW TAB ══════ */}
          {activeTab === "overview" && (
            <>
              {/* Analytics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {[
                  { label: "Total Leads", value: "1,247", change: "+12%", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400", up: true },
                  { label: "Active Cases", value: "42", change: "+5%", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400", up: true },
                  { label: "Resolved Today", value: "18", change: "+25%", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400", up: true },
                  { label: "Revenue (MTD)", value: "$5,840", change: "-3%", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400", up: false },
                ].map((c, i) => (
                  <div key={i} className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg ${c.color} flex items-center justify-center`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} /></svg>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.up ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {c.change}
                      </span>
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{c.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.label}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-5">
                {/* Leads Trend */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Leads This Week</h3>
                  <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={weeklyLeads}>
                      <defs>
                        <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94A3B8" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#94A3B8" }} />
                      <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }} />
                      <Area type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} fill="url(#leadGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Cases by Type */}
                <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Cases by Type</h3>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie data={casesByType} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
                        {casesByType.map((c, i) => (<Cell key={i} fill={c.color} />))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-3 mt-2 justify-center">
                    {casesByType.map((c, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Monthly Revenue</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94A3B8" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#94A3B8" }} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }} formatter={(v) => [`$${v}`, "Revenue"]} />
                    <Bar dataKey="revenue" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {/* ══════ LEADS TAB ══════ */}
          {activeTab === "leads" && (
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              {/* Header */}
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">All Leads</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{recentLeads.length} total leads</p>
                </div>
                <button onClick={exportCSV} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Export CSV
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">ID</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Phone</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                        <td className="px-5 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{lead.id}</td>
                        <td className="px-5 py-4">
                          <p className="font-medium text-slate-900 dark:text-white">{lead.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{lead.email}</p>
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-300 hidden md:table-cell">{lead.phone}</td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{lead.type}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${statusBadge(lead.status)}`}>{lead.status}</span>
                        </td>
                        <td className="px-5 py-4 text-slate-500 dark:text-slate-400 text-xs hidden lg:table-cell">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ══════ TEAM TAB ══════ */}
          {activeTab === "team" && (
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Team &amp; Roles</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Manage user access and role assignments</p>
              </div>

              {/* Role Legend */}
              <div className="px-5 pt-4 pb-2 flex flex-wrap gap-3">
                {[
                  { role: "admin", desc: "Full system access" },
                  { role: "manager", desc: "Manage agents & cases" },
                  { role: "agent", desc: "Handle leads & support" },
                ].map((r) => (
                  <div key={r.role} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${roleBadge(r.role)}`}>{r.role}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{r.desc}</span>
                  </div>
                ))}
              </div>

              {/* Team Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Member</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {teamMembers.map((m, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-300">
                              {m.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white">{m.name}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{m.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${roleBadge(m.role)}`}>{m.role}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${m.status === "Active" ? "text-green-600 dark:text-green-400" : "text-slate-400"}`}>
                            <span className={`w-2 h-2 rounded-full ${m.status === "Active" ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"}`} />
                            {m.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
