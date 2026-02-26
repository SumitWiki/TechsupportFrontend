"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

/* ─── SVG Icon Components (Heroicons Outline 24) ─── */
const I = {
  home: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  users: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  team: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  search: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  cpu: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 5.25v12a2.25 2.25 0 002.25 2.25zm0 0V19.5" /></svg>,
  sun: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
  moon: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>,
  logout: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>,
  collapse: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>,
  download: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>,
  arrowUp: (c = "w-3.5 h-3.5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>,
  arrowDown: (c = "w-3.5 h-3.5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" /></svg>,
  bell: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
  clipboard: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
  check: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  dollar: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  activity: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

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
  { id: "LD-1042", name: "John Mitchell", email: "john.m@gmail.com", phone: "+1 (555) 234-5678", type: "Internet", status: "New", date: "2026-02-26" },
  { id: "LD-1041", name: "Sarah Chen", email: "sarah.c@outlook.com", phone: "+1 (555) 345-6789", type: "Printer", status: "In Progress", date: "2026-02-25" },
  { id: "LD-1040", name: "David Brown", email: "david.b@yahoo.com", phone: "+1 (555) 456-7890", type: "Wi-Fi", status: "Resolved", date: "2026-02-25" },
  { id: "LD-1039", name: "Lisa Wang", email: "lisa.w@gmail.com", phone: "+1 (555) 567-8901", type: "Smart TV", status: "New", date: "2026-02-24" },
  { id: "LD-1038", name: "Michael Davis", email: "m.davis@hotmail.com", phone: "+1 (555) 678-9012", type: "Internet", status: "Resolved", date: "2026-02-24" },
  { id: "LD-1037", name: "Emma Wilson", email: "emma.w@gmail.com", phone: "+1 (555) 789-0123", type: "Printer", status: "In Progress", date: "2026-02-23" },
];
const teamMembers = [
  { name: "Admin User", email: "admin@techsupport4.com", role: "admin", status: "Active" },
  { name: "James Thompson", email: "james@techsupport4.com", role: "manager", status: "Active" },
  { name: "Maria Garcia", email: "maria@techsupport4.com", role: "agent", status: "Active" },
  { name: "Alex Johnson", email: "alex@techsupport4.com", role: "agent", status: "Inactive" },
];
const recentActivity = [
  { action: "New lead assigned", detail: "John Mitchell — Internet support", time: "2 min ago", type: "lead" },
  { action: "Case resolved", detail: "David Brown — Wi-Fi router issue", time: "15 min ago", type: "resolved" },
  { action: "Customer callback scheduled", detail: "Lisa Wang — Smart TV setup", time: "32 min ago", type: "callback" },
  { action: "Team member logged in", detail: "Maria Garcia (Agent)", time: "1 hr ago", type: "login" },
  { action: "CSV export completed", detail: "45 leads exported by Admin", time: "2 hr ago", type: "export" },
  { action: "New lead assigned", detail: "Emma Wilson — Printer offline", time: "3 hr ago", type: "lead" },
];

/* ───────── HELPERS ───────── */
const statusBadge = (s) => {
  const map = {
    "New": "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
    "In Progress": "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20",
    "Resolved": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
  };
  return map[s] || "bg-slate-100 text-slate-700";
};
const roleBadge = (r) => {
  const map = {
    admin: "bg-red-50 text-red-700 ring-1 ring-red-600/20",
    manager: "bg-purple-50 text-purple-700 ring-1 ring-purple-600/20",
    agent: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
  };
  return map[r] || "bg-slate-100 text-slate-700";
};
const activityIcon = (type) => {
  const map = {
    lead: { bg: "bg-blue-100 text-blue-600", icon: I.users },
    resolved: { bg: "bg-emerald-100 text-emerald-600", icon: I.check },
    callback: { bg: "bg-amber-100 text-amber-600", icon: I.activity },
    login: { bg: "bg-slate-100 text-slate-500", icon: I.home },
    export: { bg: "bg-purple-100 text-purple-600", icon: I.download },
  };
  return map[type] || map.lead;
};

export default function Dashboard() {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [customerSearch, setCustomerSearch] = useState("");

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  /**
   * Fetch with automatic token refresh.
   * If a request returns 401 with TOKEN_EXPIRED, try /api/auth/refresh once
   * then retry the original request. If refresh fails → redirect to login.
   */
  const secureFetch = async (url, options = {}) => {
    const opts = { ...options, credentials: "include" };
    let res = await fetch(url, opts);

    if (res.status === 401) {
      const body = await res.clone().json().catch(() => ({}));
      if (body.code === "TOKEN_EXPIRED") {
        // Try to refresh
        const refreshRes = await fetch(`${API}/api/auth/refresh`, {
          method: "POST",
          credentials: "include",
        });
        if (refreshRes.ok) {
          // Retry original request with new access token cookie
          res = await fetch(url, opts);
        } else {
          router.push("/admin/login");
          return res;
        }
      } else {
        router.push("/admin/login");
        return res;
      }
    }
    return res;
  };

  /* Auth check — fetch user from /me endpoint (no localStorage) */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await secureFetch(`${API}/api/auth/me`);
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        setUser(data);
      } catch {
        router.push("/admin/login");
      }
    };
    checkAuth();
  }, [router]);

  /* Dark mode sync */
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const handleLogout = async () => {
    try {
      await fetch(`${API}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch { /* ignore */ }
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

  /* Filtered leads for search */
  const filteredLeads = customerSearch.trim()
    ? recentLeads.filter((l) =>
        l.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
        l.email.toLowerCase().includes(customerSearch.toLowerCase()) ||
        l.phone.includes(customerSearch) ||
        l.id.toLowerCase().includes(customerSearch.toLowerCase())
      )
    : recentLeads;

  const NAV = [
    { key: "overview", label: "Overview", icon: I.home },
    { key: "leads", label: "Leads", icon: I.users },
    { key: "search", label: "Search Customer", icon: I.search },
    { key: "team", label: "Team", icon: I.team },
  ];

  const TITLES = {
    overview: "Dashboard Overview",
    leads: "Lead Management",
    search: "Search Customer",
    team: "Team Management",
  };

  const statCards = [
    { label: "Total Leads", value: "1,247", change: "+12.5%", up: true, icon: I.users, color: "bg-blue-600", lightBg: "bg-blue-50" },
    { label: "Active Cases", value: "42", change: "+5.2%", up: true, icon: I.clipboard, color: "bg-amber-500", lightBg: "bg-amber-50" },
    { label: "Resolved Today", value: "18", change: "+25.0%", up: true, icon: I.check, color: "bg-emerald-600", lightBg: "bg-emerald-50" },
    { label: "Revenue (MTD)", value: "$5,840", change: "-3.1%", up: false, icon: I.dollar, color: "bg-violet-600", lightBg: "bg-violet-50" },
  ];

  return (
    <div className={`min-h-screen flex ${dark ? "dark" : ""}`}>
      {/* ═══════════ SIDEBAR ═══════════ */}
      <aside className={`${sidebarOpen ? "w-[260px]" : "w-[72px]"} bg-slate-900 text-white flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 relative`}>
        {/* Logo */}
        <div className={`h-16 flex items-center ${sidebarOpen ? "px-5" : "justify-center"} border-b border-slate-800/80`}>
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            {I.cpu("w-5 h-5 text-white")}
          </div>
          {sidebarOpen && <span className="ml-3 font-bold text-[15px] tracking-tight whitespace-nowrap">TechSupport4 CRM</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-5 px-3 space-y-1">
          {sidebarOpen && <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Menu</p>}
          {NAV.map((n) => {
            const isActive = activeTab === n.key;
            return (
              <button
                key={n.key}
                onClick={() => setActiveTab(n.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 relative group
                  ${isActive
                    ? "bg-blue-600/15 text-blue-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/70"
                  }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-blue-500 rounded-r-full" />
                )}
                <span className={`flex-shrink-0 ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                  {n.icon()}
                </span>
                {sidebarOpen && <span>{n.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-slate-800/80 space-y-1">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-slate-500 hover:text-slate-300 hover:bg-slate-800/70 transition-all duration-150">
            <span className={`flex-shrink-0 transition-transform duration-300 ${sidebarOpen ? "" : "rotate-180"}`}>
              {I.collapse()}
            </span>
            {sidebarOpen && "Collapse"}
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150">
            {I.logout()}
            {sidebarOpen && "Log Out"}
          </button>
        </div>
      </aside>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 min-h-screen overflow-x-hidden">

        {/* ─── TOP BAR ─── */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              {TITLES[activeTab]}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Notification bell */}
            <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Notifications">
              {I.bell()}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-950" />
            </button>

            {/* Dark toggle */}
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Toggle theme">
              {dark ? I.sun() : I.moon()}
            </button>

            {/* Divider + User */}
            <div className="flex items-center gap-3 ml-1 pl-3 border-l border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-slate-950">
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
              {/* Stat Cards — upgraded design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {statCards.map((c, i) => (
                  <div key={i} className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-none transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">{c.label}</p>
                        <p className="text-[28px] font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">{c.value}</p>
                      </div>
                      <div className={`w-11 h-11 ${c.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        {c.icon("w-5 h-5 text-white")}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${c.up ? "text-emerald-600" : "text-red-500"}`}>
                        {c.up ? I.arrowUp() : I.arrowDown()}
                        {c.change}
                      </span>
                      <span className="text-xs text-slate-400">vs last month</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-5">
                {/* Leads Trend */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Leads This Week</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Daily lead acquisition trend</p>
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Last 7 days</span>
                  </div>
                  <ResponsiveContainer width="100%" height={260}>
                    <AreaChart data={weeklyLeads}>
                      <defs>
                        <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                      <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 10, color: "#fff", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
                      <Area type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2.5} fill="url(#leadGrad)" dot={{ r: 4, fill: "#3B82F6", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Cases by Type */}
                <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Cases by Type</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Distribution breakdown</p>
                  </div>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie data={casesByType} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value" strokeWidth={0}>
                        {casesByType.map((c, i) => (<Cell key={i} fill={c.color} />))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 10, color: "#fff", fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {casesByType.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: c.color }} />
                        <span>{c.name}</span>
                        <span className="ml-auto font-semibold text-slate-900 dark:text-white">{c.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Revenue + Recent Activity Row */}
              <div className="grid lg:grid-cols-5 gap-5">
                {/* Revenue Chart */}
                <div className="lg:col-span-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Monthly Revenue</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Revenue performance over 6 months</p>
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">6 months</span>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={monthlyRevenue} barSize={32}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 10, color: "#fff", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} formatter={(v) => [`$${v.toLocaleString()}`, "Revenue"]} />
                      <Bar dataKey="revenue" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Latest system events</p>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((a, i) => {
                      const ai = activityIcon(a.type);
                      return (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className={`w-8 h-8 rounded-lg ${ai.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            {ai.icon("w-4 h-4")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate">{a.action}</p>
                            <p className="text-xs text-slate-400 truncate">{a.detail}</p>
                          </div>
                          <span className="text-[11px] text-slate-400 whitespace-nowrap flex-shrink-0 mt-0.5">{a.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
                <button onClick={exportCSV} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/25">
                  {I.download()}
                  Export CSV
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50/80 dark:bg-slate-900/50">
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">ID</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Phone</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100">
                        <td className="px-5 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{lead.id}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
                              {lead.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white text-[13px]">{lead.name}</p>
                              <p className="text-xs text-slate-400">{lead.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-500 dark:text-slate-400 text-[13px] hidden md:table-cell">{lead.phone}</td>
                        <td className="px-5 py-4">
                          <span className="text-[13px] text-slate-600 dark:text-slate-300">{lead.type}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBadge(lead.status)}`}>{lead.status}</span>
                        </td>
                        <td className="px-5 py-4 text-slate-400 text-xs hidden lg:table-cell">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ══════ SEARCH CUSTOMER TAB ══════ */}
          {activeTab === "search" && (
            <div className="space-y-5">
              {/* Search bar */}
              <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <div className="relative max-w-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {I.search("w-5 h-5 text-slate-400")}
                  </div>
                  <input
                    type="text"
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    placeholder="Search by name, email, phone, or lead ID..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {customerSearch.trim() ? `${filteredLeads.length} result${filteredLeads.length !== 1 ? "s" : ""} found` : "Enter a search term to find customers"}
                </p>
              </div>

              {/* Results */}
              {customerSearch.trim() && (
                <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  {filteredLeads.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {filteredLeads.map((lead) => (
                        <div key={lead.id} className="p-5 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500 dark:text-slate-400">
                                {lead.name.split(" ").map((n) => n[0]).join("")}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900 dark:text-white text-[14px]">{lead.name}</p>
                                <p className="text-xs text-slate-400">{lead.email} &middot; {lead.phone}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBadge(lead.status)}`}>{lead.status}</span>
                              <span className="text-xs text-slate-400 hidden sm:inline">{lead.type}</span>
                              <span className="font-mono text-xs text-slate-400">{lead.id}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      {I.search("w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto")}
                      <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">No customers found</p>
                      <p className="text-xs text-slate-400 mt-1">Try a different search term</p>
                    </div>
                  )}
                </div>
              )}
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
              <div className="px-5 pt-5 pb-3 flex flex-wrap gap-3">
                {[
                  { role: "admin", desc: "Full system access" },
                  { role: "manager", desc: "Manage agents & cases" },
                  { role: "agent", desc: "Handle leads & support" },
                ].map((r) => (
                  <div key={r.role} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2">
                    <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-semibold capitalize ${roleBadge(r.role)}`}>{r.role}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{r.desc}</span>
                  </div>
                ))}
              </div>

              {/* Team Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50/80 dark:bg-slate-900/50">
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Member</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {teamMembers.map((m, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-300">
                              {m.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white text-[13px]">{m.name}</p>
                              <p className="text-xs text-slate-400">{m.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold capitalize ${roleBadge(m.role)}`}>{m.role}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${m.status === "Active" ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}>
                            <span className={`w-2 h-2 rounded-full ${m.status === "Active" ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-600"}`} />
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
