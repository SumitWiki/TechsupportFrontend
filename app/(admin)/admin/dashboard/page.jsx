"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
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
  plus: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  trash: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  xMark: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  refresh: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>,
};

/* ───────── HELPERS ───────── */
const STATUS_DISPLAY = { open: "Open", in_progress: "In Progress", closed: "Closed", reopened: "Reopened" };

const statusBadge = (s) => {
  const map = {
    open: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
    in_progress: "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20",
    closed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
    reopened: "bg-orange-50 text-orange-700 ring-1 ring-orange-600/20",
  };
  return map[s] || "bg-slate-100 text-slate-700";
};

const roleBadge = (r) => {
  const map = {
    admin: "bg-red-50 text-red-700 ring-1 ring-red-600/20",
    super_admin: "bg-red-50 text-red-700 ring-1 ring-red-600/20",
    agent: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
  };
  return map[r] || "bg-slate-100 text-slate-700";
};

const activityIcon = (action) => {
  const map = {
    status_change: { bg: "bg-blue-100 text-blue-600", icon: I.activity },
    assigned: { bg: "bg-amber-100 text-amber-600", icon: I.users },
    priority_change: { bg: "bg-purple-100 text-purple-600", icon: I.clipboard },
    deleted: { bg: "bg-red-100 text-red-600", icon: I.trash },
    note_added: { bg: "bg-slate-100 text-slate-500", icon: I.clipboard },
  };
  return map[action] || { bg: "bg-slate-100 text-slate-500", icon: I.activity };
};

const categorizeSubject = (subject) => {
  const s = (subject || "").toLowerCase();
  if (s.includes("internet") || s.includes("broadband") || s.includes("connection")) return "Internet";
  if (s.includes("printer") || s.includes("print")) return "Printer";
  if (s.includes("wifi") || s.includes("wi-fi") || s.includes("router") || s.includes("wireless")) return "Wi-Fi";
  if (s.includes("tv") || s.includes("television") || s.includes("smart")) return "Smart TV";
  return "General";
};

const timeAgo = (dateStr) => {
  if (!dateStr) return "";
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const formatDate = (d) => d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "";

/* ═══════════════════════════════════════════════════ */
/*                  DASHBOARD COMPONENT                */
/* ═══════════════════════════════════════════════════ */
export default function Dashboard() {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);

  /* ── Live data from backend ── */
  const [stats, setStats] = useState(null);
  const [chartCases, setChartCases] = useState([]);
  const [chartTotal, setChartTotal] = useState(0);
  const [leads, setLeads] = useState(null);          // null = use chartCases slice
  const [teamUsers, setTeamUsers] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ── Leads tab controls ── */
  const [leadPage, setLeadPage] = useState(1);
  const [leadFilter, setLeadFilter] = useState("");

  /* ── Search tab ── */
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const searchRef = useRef(null);

  /* ── Create User modal ── */
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "agent" });
  const [createError, setCreateError] = useState("");
  const [creating, setCreating] = useState(false);

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const isAdmin = user?.role === "admin" || user?.email?.toLowerCase() === "support@techsupport4.com";

  /* ── Auth check — verify session via HttpOnly cookie ── */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API}/api/auth/me`, { credentials: "include" });
        if (!res.ok) throw new Error("unauthorized");
        const data = await res.json();
        if (!cancelled) setUser(data);
      } catch {
        if (!cancelled) router.push("/");
      }
    })();
    return () => { cancelled = true; };
  }, [router, API]);

  /* ── Load all dashboard data once authenticated ── */
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const admin = user.role === "admin" || user.email?.toLowerCase() === "support@techsupport4.com";
        const promises = [
          fetch(`${API}/api/cases/stats`, { credentials: "include" }),
          fetch(`${API}/api/cases/?page=1&limit=200`, { credentials: "include" }),
        ];
        if (admin) {
          promises.push(fetch(`${API}/api/users/`, { credentials: "include" }));
          promises.push(fetch(`${API}/api/cases/audit?limit=20`, { credentials: "include" }));
        }
        const results = await Promise.allSettled(promises);
        if (cancelled) return;

        // Stats
        if (results[0].status === "fulfilled" && results[0].value.ok) {
          setStats(await results[0].value.json());
        }
        // Cases for charts + initial leads
        if (results[1].status === "fulfilled" && results[1].value.ok) {
          const d = await results[1].value.json();
          setChartCases(d.rows || []);
          setChartTotal(d.total || 0);
        }
        // Users (admin)
        if (admin && results[2]?.status === "fulfilled" && results[2].value.ok) {
          const d = await results[2].value.json();
          setTeamUsers(d.users || []);
        }
        // Audit (admin)
        if (admin && results[3]?.status === "fulfilled" && results[3].value.ok) {
          const d = await results[3].value.json();
          setAuditLogs(d.logs || []);
        }
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [user, API]);

  /* ── Leads tab — refetch on page/filter change ── */
  const fetchLeads = useCallback(async (page, filter) => {
    try {
      const p = new URLSearchParams({ page, limit: 50 });
      if (filter) p.set("status", filter);
      const res = await fetch(`${API}/api/cases/?${p}`, { credentials: "include" });
      if (res.ok) setLeads(await res.json());
    } catch (err) { console.error("Fetch leads:", err); }
  }, [API]);

  useEffect(() => {
    if (!user || activeTab !== "leads") return;
    if (leadPage === 1 && !leadFilter) { setLeads(null); return; }
    fetchLeads(leadPage, leadFilter);
  }, [activeTab, leadPage, leadFilter, user, fetchLeads]);

  // Display leads: custom paginated OR first 50 from chartCases
  const displayLeads = leads || { rows: chartCases.slice(0, 50), total: chartTotal };
  const totalPages = Math.ceil((displayLeads.total || 0) / 50) || 1;

  /* ── Debounced search ── */
  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); setSearching(false); return; }
    setSearching(true);
    clearTimeout(searchRef.current);
    searchRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`${API}/api/cases/?page=1&limit=50&search=${encodeURIComponent(searchQuery)}`, { credentials: "include" });
        if (res.ok) { const d = await res.json(); setSearchResults(d.rows || []); }
      } catch {} finally { setSearching(false); }
    }, 400);
    return () => clearTimeout(searchRef.current);
  }, [searchQuery, API]);

  /* ── Dark mode sync ── */
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);

  /* ── Handlers ── */
  const handleLogout = async () => {
    try { await fetch(`${API}/api/auth/logout`, { method: "POST", credentials: "include" }); } catch {}
    localStorage.removeItem("crm_user");
    router.push("/");
  };

  const exportCSV = () => {
    const headers = ["Case ID", "Name", "Email", "Phone", "Subject", "Status", "Priority", "Agent", "Created"];
    const rows = (displayLeads.rows || []).map((c) => [
      c.case_id, c.name, c.email, c.phone, c.subject,
      STATUS_DISPLAY[c.status] || c.status, c.priority || "medium",
      c.agent_name || "Unassigned",
      c.created_at ? new Date(c.created_at).toISOString().slice(0, 10) : "",
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `cases-export-${new Date().toISOString().split("T")[0]}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateError(""); setCreating(true);
    try {
      const res = await fetch(`${API}/api/users/`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        credentials: "include", body: JSON.stringify(newUser),
      });
      const d = await res.json();
      if (!res.ok) throw new Error(d.error || "Failed to create user");
      setShowCreateUser(false);
      setNewUser({ name: "", email: "", password: "", role: "agent" });
      const r = await fetch(`${API}/api/users/`, { credentials: "include" });
      if (r.ok) { const dd = await r.json(); setTeamUsers(dd.users || []); }
    } catch (err) { setCreateError(err.message); }
    finally { setCreating(false); }
  };

  const toggleUserActive = async (id, isActive) => {
    try {
      const res = await fetch(`${API}/api/users/${id}`, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        credentials: "include", body: JSON.stringify({ is_active: !isActive }),
      });
      if (res.ok) setTeamUsers((prev) => prev.map((u) => u.id === id ? { ...u, is_active: isActive ? 0 : 1 } : u));
    } catch {}
  };

  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user? This cannot be undone.")) return;
    try {
      const res = await fetch(`${API}/api/users/${id}`, { method: "DELETE", credentials: "include" });
      if (res.ok) setTeamUsers((prev) => prev.filter((u) => u.id !== id));
      else { const d = await res.json(); alert(d.error || "Failed to delete user"); }
    } catch {}
  };

  const refreshData = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [sRes, cRes] = await Promise.all([
        fetch(`${API}/api/cases/stats`, { credentials: "include" }),
        fetch(`${API}/api/cases/?page=1&limit=200`, { credentials: "include" }),
      ]);
      if (sRes.ok) setStats(await sRes.json());
      if (cRes.ok) { const d = await cRes.json(); setChartCases(d.rows || []); setChartTotal(d.total || 0); }
      if (isAdmin) {
        const [uRes, aRes] = await Promise.all([
          fetch(`${API}/api/users/`, { credentials: "include" }),
          fetch(`${API}/api/cases/audit?limit=20`, { credentials: "include" }),
        ]);
        if (uRes.ok) { const d = await uRes.json(); setTeamUsers(d.users || []); }
        if (aRes.ok) { const d = await aRes.json(); setAuditLogs(d.logs || []); }
      }
      setLeads(null);
    } catch {}
    finally { setLoading(false); }
  };

  /* ── Computed chart data (derived from real cases) ── */
  const weeklyLeads = useMemo(() => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const now = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now); d.setDate(d.getDate() - (6 - i));
      const ymd = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      return {
        day: days[d.getDay()],
        leads: chartCases.filter((c) => {
          const cd = new Date(c.created_at);
          return `${cd.getFullYear()}-${String(cd.getMonth() + 1).padStart(2, "0")}-${String(cd.getDate()).padStart(2, "0")}` === ymd;
        }).length,
      };
    });
  }, [chartCases]);

  const casesByType = useMemo(() => {
    const types = {};
    chartCases.forEach((c) => { const t = categorizeSubject(c.subject); types[t] = (types[t] || 0) + 1; });
    const total = chartCases.length || 1;
    const colors = { Internet: "#3B82F6", Printer: "#8B5CF6", "Wi-Fi": "#10B981", "Smart TV": "#F59E0B", General: "#6B7280" };
    return Object.entries(types).map(([name, value]) => ({
      name, value: Math.round((value / total) * 100), color: colors[name] || "#6B7280",
    }));
  }, [chartCases]);

  const monthlyCases = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const now = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
      const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      return {
        month: months[d.getMonth()],
        cases: chartCases.filter((c) => {
          const cd = new Date(c.created_at);
          return `${cd.getFullYear()}-${String(cd.getMonth() + 1).padStart(2, "0")}` === ym;
        }).length,
      };
    });
  }, [chartCases]);

  /* ── Nav config ── */
  const NAV = [
    { key: "overview", label: "Overview", icon: I.home },
    { key: "leads", label: "Leads", icon: I.users },
    { key: "search", label: "Search Customer", icon: I.search },
    ...(isAdmin ? [{ key: "team", label: "Team", icon: I.team }] : []),
  ];

  const TITLES = { overview: "Dashboard Overview", leads: "Lead Management", search: "Search Customer", team: "Team Management" };

  const statCards = stats ? [
    { label: "Total Cases", value: (Number(stats.total) || 0).toLocaleString(), sub: `${Number(stats.open) || 0} open`, icon: I.users, color: "bg-blue-600" },
    { label: "Active Cases", value: ((Number(stats.open) || 0) + (Number(stats.in_progress) || 0)).toLocaleString(), sub: `${Number(stats.in_progress) || 0} in progress`, icon: I.clipboard, color: "bg-amber-500" },
    { label: "Resolved", value: (Number(stats.closed) || 0).toLocaleString(), sub: `${Number(stats.reopened) || 0} reopened`, icon: I.check, color: "bg-emerald-600" },
    { label: "High Priority", value: ((Number(stats.urgent) || 0) + (Number(stats.high) || 0)).toLocaleString(), sub: `${Number(stats.urgent) || 0} urgent`, icon: I.bell, color: "bg-red-600" },
  ] : [];

  /* ── Loading screen ── */
  if (!user || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent" />
          <p className="text-sm text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  /* ═══════════ RENDER ═══════════ */
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
                  ${isActive ? "bg-blue-600/15 text-blue-400" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/70"}`}
              >
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-blue-500 rounded-r-full" />}
                <span className={`flex-shrink-0 ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"}`}>{n.icon()}</span>
                {sidebarOpen && <span>{n.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-slate-800/80 space-y-1">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-slate-500 hover:text-slate-300 hover:bg-slate-800/70 transition-all duration-150">
            <span className={`flex-shrink-0 transition-transform duration-300 ${sidebarOpen ? "" : "rotate-180"}`}>{I.collapse()}</span>
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
            {/* Refresh */}
            <button onClick={refreshData} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Refresh data">
              {I.refresh()}
            </button>
            {/* Notification bell */}
            <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Notifications">
              {I.bell()}
              {(Number(stats?.open) || 0) > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-950" />}
            </button>
            {/* Dark toggle */}
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Toggle theme">
              {dark ? I.sun() : I.moon()}
            </button>
            {/* Divider + User */}
            <div className="flex items-center gap-3 ml-1 pl-3 border-l border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-slate-950">
                {user?.name?.[0]?.toUpperCase() || "A"}
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
              {/* Stat Cards */}
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
                    <p className="mt-3 text-xs text-slate-400">{c.sub}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-5">
                {/* Leads Trend */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Cases This Week</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Daily case creation trend</p>
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
                      <YAxis tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} allowDecimals={false} />
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
                  {casesByType.length > 0 ? (
                    <>
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
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[220px] text-slate-400">
                      {I.clipboard("w-8 h-8")}
                      <p className="text-xs mt-2">No case data yet</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Monthly Cases + Recent Activity Row */}
              <div className="grid lg:grid-cols-5 gap-5">
                {/* Monthly Cases Chart */}
                <div className="lg:col-span-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Monthly Cases</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Case volume over 6 months</p>
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">6 months</span>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={monthlyCases} barSize={32}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 12, fill: "#94A3B8" }} axisLine={false} tickLine={false} allowDecimals={false} />
                      <Tooltip contentStyle={{ backgroundColor: "#1E293B", border: "none", borderRadius: 10, color: "#fff", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} formatter={(v) => [v, "Cases"]} />
                      <Bar dataKey="cases" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{isAdmin ? "Latest audit events" : "Recent cases"}</p>
                  </div>
                  <div className="space-y-4">
                    {isAdmin && auditLogs.length > 0 ? (
                      auditLogs.slice(0, 6).map((a, i) => {
                        const ai = activityIcon(a.action);
                        const detail = a.note || (a.old_status && a.new_status ? `${STATUS_DISPLAY[a.old_status] || a.old_status} → ${STATUS_DISPLAY[a.new_status] || a.new_status}` : a.action);
                        return (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className={`w-8 h-8 rounded-lg ${ai.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              {ai.icon("w-4 h-4")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate">
                                {a.action.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())} {a.user_name && `by ${a.user_name}`}
                              </p>
                              <p className="text-xs text-slate-400 truncate">{a.ticket_id} — {detail}</p>
                            </div>
                            <span className="text-[11px] text-slate-400 whitespace-nowrap flex-shrink-0 mt-0.5">{timeAgo(a.created_at)}</span>
                          </div>
                        );
                      })
                    ) : !isAdmin && chartCases.length > 0 ? (
                      chartCases.slice(0, 6).map((c, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {I.users("w-4 h-4")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate">{c.name}</p>
                            <p className="text-xs text-slate-400 truncate">{c.case_id} — {c.subject || "General Enquiry"}</p>
                          </div>
                          <span className="text-[11px] text-slate-400 whitespace-nowrap flex-shrink-0 mt-0.5">{timeAgo(c.created_at)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 text-slate-400">
                        {I.activity("w-8 h-8")}
                        <p className="text-xs mt-2">No recent activity</p>
                      </div>
                    )}
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
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">All Cases</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{displayLeads.total} total cases</p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={leadFilter}
                    onChange={(e) => { setLeadFilter(e.target.value); setLeadPage(1); }}
                    className="text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                    <option value="reopened">Reopened</option>
                  </select>
                  <button onClick={exportCSV} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/25">
                    {I.download()}
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50/80 dark:bg-slate-900/50">
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Case ID</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Phone</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Subject</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {(displayLeads.rows || []).length > 0 ? displayLeads.rows.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100">
                        <td className="px-5 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{c.case_id}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
                              {(c.name || "?").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-white text-[13px]">{c.name}</p>
                              <p className="text-xs text-slate-400">{c.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-500 dark:text-slate-400 text-[13px] hidden md:table-cell">{c.phone}</td>
                        <td className="px-5 py-4">
                          <span className="text-[13px] text-slate-600 dark:text-slate-300">{c.subject || "General Enquiry"}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBadge(c.status)}`}>
                            {STATUS_DISPLAY[c.status] || c.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-slate-400 text-xs hidden lg:table-cell">{formatDate(c.created_at)}</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={6} className="px-5 py-16 text-center">
                          {I.clipboard("w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto")}
                          <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">No cases found</p>
                          <p className="text-xs text-slate-400 mt-1">{leadFilter ? "Try a different status filter" : "Cases from the contact form will appear here"}</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {displayLeads.total > 50 && (
                <div className="p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-xs text-slate-400">
                    Page {leadPage} of {totalPages} &middot; {displayLeads.total} total
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLeadPage((p) => Math.max(1, p - 1))}
                      disabled={leadPage <= 1}
                      className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >Previous</button>
                    <button
                      onClick={() => setLeadPage((p) => Math.min(totalPages, p + 1))}
                      disabled={leadPage >= totalPages}
                      className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >Next</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ══════ SEARCH CUSTOMER TAB ══════ */}
          {activeTab === "search" && (
            <div className="space-y-5">
              {/* Search bar */}
              <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <div className="relative max-w-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {searching ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent" />
                    ) : (
                      I.search("w-5 h-5 text-slate-400")
                    )}
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, email, phone, or case ID..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {searchQuery.trim()
                    ? searching ? "Searching..." : `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} found`
                    : "Enter a search term to find customers and cases"}
                </p>
              </div>

              {/* Results */}
              {searchQuery.trim() && !searching && (
                <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {searchResults.map((c) => (
                        <div key={c.id} className="p-5 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500 dark:text-slate-400">
                                {(c.name || "?").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900 dark:text-white text-[14px]">{c.name}</p>
                                <p className="text-xs text-slate-400">{c.email} &middot; {c.phone}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBadge(c.status)}`}>
                                {STATUS_DISPLAY[c.status] || c.status}
                              </span>
                              <span className="text-xs text-slate-400 hidden sm:inline">{c.subject || "General"}</span>
                              <span className="font-mono text-xs text-slate-400">{c.case_id}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      {I.search("w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto")}
                      <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">No results found</p>
                      <p className="text-xs text-slate-400 mt-1">Try a different search term</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ══════ TEAM TAB ══════ */}
          {activeTab === "team" && isAdmin && (
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Team &amp; Roles</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{teamUsers.length} users &middot; Manage access and roles</p>
                </div>
                <button onClick={() => { setShowCreateUser(true); setCreateError(""); }} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/25">
                  {I.plus("w-4 h-4")}
                  Add User
                </button>
              </div>

              {/* Role Legend */}
              <div className="px-5 pt-5 pb-3 flex flex-wrap gap-3">
                {[
                  { role: "admin", desc: "Full system access" },
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
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Joined</th>
                      <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {teamUsers.map((m) => {
                      const isSelf = m.id === user?.id;
                      const active = m.is_active === 1 || m.is_active === true;
                      return (
                        <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-300">
                                {(m.name || "?").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <p className="font-medium text-slate-900 dark:text-white text-[13px]">
                                  {m.name} {isSelf && <span className="text-[10px] text-blue-500 font-semibold ml-1">(You)</span>}
                                </p>
                                <p className="text-xs text-slate-400">{m.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold capitalize ${roleBadge(m.role)}`}>{m.role}</span>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${active ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}>
                              <span className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-600"}`} />
                              {active ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-slate-400 text-xs hidden md:table-cell">{formatDate(m.created_at)}</td>
                          <td className="px-5 py-4">
                            {!isSelf && (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleUserActive(m.id, active)}
                                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${active ? "bg-amber-50 text-amber-700 hover:bg-amber-100" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}`}
                                >
                                  {active ? "Deactivate" : "Activate"}
                                </button>
                                <button
                                  onClick={() => deleteUser(m.id)}
                                  className="p-1.5 rounded-md text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                                  title="Delete user"
                                >
                                  {I.trash()}
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ═══════════ CREATE USER MODAL ═══════════ */}
      {showCreateUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Create New User</h3>
              <button onClick={() => setShowCreateUser(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                {I.xMark()}
              </button>
            </div>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Full Name</label>
                <input
                  type="text" required value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Email Address</label>
                <input
                  type="email" required value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="john@techsupport4.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Password</label>
                <input
                  type="password" required value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="••••••••"
                />
                <p className="text-[11px] text-slate-400 mt-1">Min 8 chars, 1 uppercase, 1 number, 1 special character</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="agent">Agent</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {createError && (
                <p className="text-sm text-red-600 bg-red-50 dark:bg-red-500/10 px-3 py-2 rounded-lg">{createError}</p>
              )}
              <button
                type="submit" disabled={creating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50 shadow-sm shadow-blue-600/20"
              >
                {creating ? "Creating..." : "Create User"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
