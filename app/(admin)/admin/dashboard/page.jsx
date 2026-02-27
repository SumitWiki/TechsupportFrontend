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
  bell: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
  clipboard: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
  check: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  dollar: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  activity: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  plus: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  trash: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  xMark: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  refresh: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>,
  key: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>,
  eye: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  chevDown: (c = "w-4 h-4") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>,
  shield: (c = "w-5 h-5") => <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
};

/* ───────── HELPERS ───────── */
const STATUS_DISPLAY = { open: "Open", in_progress: "In Progress", closed: "Closed", reopened: "Reopened" };
const PRIORITY_DISPLAY = { low: "Low", medium: "Medium", high: "High", urgent: "Urgent" };

const statusBadge = (s) => {
  const map = {
    open: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/30",
    in_progress: "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/30",
    closed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/30",
    reopened: "bg-orange-50 text-orange-700 ring-1 ring-orange-600/20 dark:bg-orange-500/10 dark:text-orange-400 dark:ring-orange-500/30",
  };
  return map[s] || "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
};

const priorityBadge = (p) => {
  const map = {
    urgent: "bg-red-50 text-red-700 ring-1 ring-red-600/20 dark:bg-red-500/10 dark:text-red-400",
    high: "bg-orange-50 text-orange-700 ring-1 ring-orange-600/20 dark:bg-orange-500/10 dark:text-orange-400",
    medium: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-400",
    low: "bg-slate-50 text-slate-600 ring-1 ring-slate-300/40 dark:bg-slate-800 dark:text-slate-400",
  };
  return map[p] || map.medium;
};

const roleBadge = (r) => {
  const map = {
    super_admin: "bg-red-50 text-red-700 ring-1 ring-red-600/20 dark:bg-red-500/10 dark:text-red-400",
    admin: "bg-purple-50 text-purple-700 ring-1 ring-purple-600/20 dark:bg-purple-500/10 dark:text-purple-400",
    super_user: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-400",
    simple_user: "bg-slate-50 text-slate-600 ring-1 ring-slate-300/40 dark:bg-slate-800 dark:text-slate-400",
  };
  return map[r] || map.simple_user;
};

const ROLE_LABELS = { super_admin: "Super Admin", admin: "Admin", super_user: "Super User", simple_user: "Simple User" };

const activityIcon = (action) => {
  const map = {
    status_change: { bg: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400", icon: I.activity },
    assigned: { bg: "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400", icon: I.users },
    priority_change: { bg: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400", icon: I.clipboard },
    deleted: { bg: "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400", icon: I.trash },
    note_added: { bg: "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400", icon: I.clipboard },
  };
  return map[action] || { bg: "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400", icon: I.activity };
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
const formatDateTime = (d) => d ? new Date(d).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }) : "";

/* ── Permission helpers ── */
const canDo = (user, perm) => {
  if (!user) return false;
  if (user.isSuperAdmin || user.role === "super_admin" || user.role === "admin") return true;
  return user.permissions?.[perm] === true;
};
const isAdminPlus = (u) => u?.role === "admin" || u?.role === "super_admin" || u?.isSuperAdmin;
const isSuperAdminUser = (u) => u?.role === "super_admin" || u?.isSuperAdmin;
const canAssign = (u) => u?.role === "super_admin" || u?.role === "admin" || u?.role === "super_user";

/* ═══════════════════════════════════════════════════ */
/*                  DASHBOARD COMPONENT                */
/* ═══════════════════════════════════════════════════ */
export default function Dashboard() {
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  /* ── Core state ── */
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshCountdown, setRefreshCountdown] = useState(20);

  /* ── Live data from backend ── */
  const [stats, setStats] = useState(null);
  const [chartCases, setChartCases] = useState([]);
  const [chartTotal, setChartTotal] = useState(0);
  const [leads, setLeads] = useState(null);
  const [teamUsers, setTeamUsers] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  /* ── Leads tab controls ── */
  const [leadPage, setLeadPage] = useState(1);
  const [leadFilter, setLeadFilter] = useState("");
  const [leadAssignedFilter, setLeadAssignedFilter] = useState("");
  const [leadDateFrom, setLeadDateFrom] = useState("");
  const [leadDateTo, setLeadDateTo] = useState("");

  /* ── Search tab ── */
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const searchRef = useRef(null);

  /* ── Ticket detail panel ── */
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketDetail, setTicketDetail] = useState(null);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [noteText, setNoteText] = useState("");

  /* ── Ticket selection for bulk actions (super_admin only) ── */
  const [selectedCaseIds, setSelectedCaseIds] = useState(new Set());
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null); // { message, type }

  /* ── Create User modal ── */
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "simple_user" });
  const [createError, setCreateError] = useState("");
  const [creating, setCreating] = useState(false);

  /* ── Change password modals ── */
  const [showChangePwd, setShowChangePwd] = useState(false);
  const [pwdForm, setPwdForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [pwdError, setPwdError] = useState("");
  const [pwdSuccess, setPwdSuccess] = useState("");
  const [changingPwd, setChangingPwd] = useState(false);

  /* ── Admin reset password modal ── */
  const [resetPwdUser, setResetPwdUser] = useState(null);
  const [resetPwdValue, setResetPwdValue] = useState("");
  const [resetPwdError, setResetPwdError] = useState("");

  /* ── Notification bell dropdown ── */
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);

  /* ── Profile dropdown ── */
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  /* ── api helper with automatic token refresh ── */
  const refreshLock = useRef(null);
  const api = useCallback(async (path, opts = {}) => {
    const doFetch = () => fetch(`${API}${path}`, { credentials: "include", ...opts, headers: { "Content-Type": "application/json", ...opts.headers } });
    let res = await doFetch();
    // On any 401, try silent refresh (skip for auth refresh/login to avoid loops)
    if (res.status === 401 && path !== "/api/auth/refresh") {
      // Deduplicate concurrent refresh calls — only one at a time
      if (!refreshLock.current) {
        refreshLock.current = fetch(`${API}/api/auth/refresh`, { method: "POST", credentials: "include" })
          .then(r => r.ok)
          .catch(() => false)
          .finally(() => { refreshLock.current = null; });
      }
      const refreshed = await refreshLock.current;
      if (refreshed) {
        res = await doFetch(); // retry with new access token cookie
      }
    }
    return res;
  }, [API]);

  /* ── Auth check ── */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await api("/api/auth/me");
        if (!res.ok) throw new Error("unauthorized");
        const data = await res.json();
        if (!cancelled) setUser(data);
      } catch {
        if (!cancelled) router.push("/admin/login");
      }
    })();
    return () => { cancelled = true; };
  }, [router, api]);

  /* ── Load all dashboard data ── */
  const loadData = useCallback(async (silent = false) => {
    if (!user) return;
    if (!silent) setLoading(true);
    try {
      const admin = isAdminPlus(user);
      const promises = [
        api("/api/cases/stats"),
        api("/api/cases/?page=1&limit=200"),
        api("/api/notifications/count"),
      ];
      if (admin) {
        promises.push(api("/api/users/"));
        promises.push(api("/api/cases/audit?limit=30"));
      }
      const results = await Promise.allSettled(promises);

      if (results[0].status === "fulfilled" && results[0].value.ok) setStats(await results[0].value.json());
      if (results[1].status === "fulfilled" && results[1].value.ok) {
        const d = await results[1].value.json();
        setChartCases(d.rows || []);
        setChartTotal(d.total || 0);
      }
      if (results[2].status === "fulfilled" && results[2].value.ok) {
        const d = await results[2].value.json();
        setUnreadCount(d.count || 0);
      }
      if (admin && results[3]?.status === "fulfilled" && results[3].value.ok) {
        const d = await results[3].value.json();
        setTeamUsers(d.users || []);
      }
      if (admin && results[4]?.status === "fulfilled" && results[4].value.ok) {
        const d = await results[4].value.json();
        setAuditLogs(d.logs || []);
      }
    } catch (err) {
      console.error("Dashboard load error:", err);
    } finally {
      if (!silent) setLoading(false);
    }
  }, [user, api]);

  useEffect(() => { loadData(); }, [loadData]);

  /* ── 20-second auto-refresh ── */
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      loadData(true);
      setRefreshCountdown(20);
    }, 20000);
    const countdown = setInterval(() => {
      setRefreshCountdown((prev) => (prev <= 1 ? 20 : prev - 1));
    }, 1000);
    return () => { clearInterval(interval); clearInterval(countdown); };
  }, [user, loadData]);

  /* ── Leads tab — refetch on filter change ── */
  const fetchLeads = useCallback(async (page, filter, assignedTo, dateFrom, dateTo) => {
    try {
      const p = new URLSearchParams({ page, limit: 50 });
      if (filter) p.set("status", filter);
      if (assignedTo) p.set("assigned_to", assignedTo);
      if (dateFrom) p.set("date_from", dateFrom);
      if (dateTo) p.set("date_to", dateTo);
      const res = await api(`/api/cases/?${p}`);
      if (res.ok) setLeads(await res.json());
    } catch (err) { console.error("Fetch leads:", err); }
  }, [api]);

  useEffect(() => {
    if (!user || activeTab !== "leads") return;
    if (leadPage === 1 && !leadFilter && !leadAssignedFilter && !leadDateFrom && !leadDateTo) { setLeads(null); return; }
    fetchLeads(leadPage, leadFilter, leadAssignedFilter, leadDateFrom, leadDateTo);
  }, [activeTab, leadPage, leadFilter, leadAssignedFilter, leadDateFrom, leadDateTo, user, fetchLeads]);

  const displayLeads = leads || { rows: chartCases.slice(0, 50), total: chartTotal };
  const totalPages = Math.ceil((displayLeads.total || 0) / 50) || 1;

  /* ── Load ticket detail ── */
  const openTicket = useCallback(async (caseId) => {
    setSelectedTicket(caseId);
    setTicketLoading(true);
    setNoteText("");
    try {
      const res = await api(`/api/cases/${caseId}`);
      if (res.ok) setTicketDetail(await res.json());
    } catch {} finally { setTicketLoading(false); }
  }, [api]);

  /* ── Ticket actions ── */
  const ticketAction = async (caseId, action, body = {}) => {
    try {
      const method = action === "notes" ? "POST" : "PUT";
      const res = await api(`/api/cases/${caseId}/${action}`, { method, body: JSON.stringify(body) });
      if (res.ok) {
        await openTicket(caseId);
        loadData(true);
      } else {
        const d = await res.json();
        alert(d.error || "Action failed");
      }
    } catch { alert("Action failed"); }
  };

  /* ── Debounced search ── */
  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); setSearching(false); return; }
    setSearching(true);
    clearTimeout(searchRef.current);
    searchRef.current = setTimeout(async () => {
      try {
        const res = await api(`/api/cases/?page=1&limit=50&search=${encodeURIComponent(searchQuery)}`);
        if (res.ok) { const d = await res.json(); setSearchResults(d.rows || []); }
      } catch {} finally { setSearching(false); }
    }, 400);
    return () => clearTimeout(searchRef.current);
  }, [searchQuery, api]);

  /* ── Notifications ── */
  const loadNotifications = useCallback(async () => {
    try {
      const res = await api("/api/notifications/?limit=20");
      if (res.ok) {
        const d = await res.json();
        setNotifications(d.notifications || []);
      }
    } catch {}
  }, [api]);

  const markAllRead = async () => {
    try {
      await api("/api/notifications/read-all", { method: "PUT" });
      setUnreadCount(0);
      setNotifications((prev) => prev.map((n) => ({ ...n, is_read: 1 })));
    } catch {}
  };

  /* ── Dark mode sync ── */
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);

  /* ── Click outside close dropdowns ── */
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".notif-dropdown")) setShowNotifDropdown(false);
      if (!e.target.closest(".profile-dropdown")) setShowProfileMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Toast auto-dismiss ── */
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  /* ── Clear selection when data reloads ── */
  useEffect(() => { setSelectedCaseIds(new Set()); }, [chartCases]);

  /* ── Toggle single checkbox ── */
  const toggleSelect = (caseId) => {
    setSelectedCaseIds((prev) => {
      const next = new Set(prev);
      if (next.has(caseId)) next.delete(caseId); else next.add(caseId);
      return next;
    });
  };

  /* ── Select / Deselect all visible ── */
  const toggleSelectAll = () => {
    const visible = (displayLeads.rows || []).map((c) => c.case_id);
    setSelectedCaseIds((prev) => {
      const allSelected = visible.length > 0 && visible.every((id) => prev.has(id));
      if (allSelected) return new Set();
      return new Set(visible);
    });
  };

  /* ── Bulk delete ── */
  const handleBulkDelete = async () => {
    if (selectedCaseIds.size === 0) return;
    if (!confirm(`Delete ${selectedCaseIds.size} ticket(s)? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const res = await api("/api/cases/bulk-delete", { method: "POST", body: JSON.stringify({ caseIds: [...selectedCaseIds] }) });
      const data = await res.json();
      if (res.ok) {
        setToast({ message: `${data.deleted} ticket(s) deleted successfully`, type: "success" });
        setSelectedCaseIds(new Set());
        if (selectedTicket && selectedCaseIds.has(selectedTicket)) { setSelectedTicket(null); setTicketDetail(null); }
        loadData(true);
      } else {
        setToast({ message: data.error || "Delete failed", type: "error" });
      }
    } catch {
      setToast({ message: "Delete failed — network error", type: "error" });
    } finally { setDeleting(false); }
  };

  /* ── Single delete (from detail panel) ── */
  const handleDeleteTicket = async (caseId) => {
    if (!confirm(`Delete ticket ${caseId}? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const res = await api(`/api/cases/${caseId}`, { method: "DELETE" });
      if (res.ok) {
        setToast({ message: "Ticket deleted successfully", type: "success" });
        setSelectedTicket(null);
        setTicketDetail(null);
        setSelectedCaseIds((prev) => { const n = new Set(prev); n.delete(caseId); return n; });
        loadData(true);
      } else {
        const data = await res.json();
        setToast({ message: data.error || "Delete failed", type: "error" });
      }
    } catch {
      setToast({ message: "Delete failed — network error", type: "error" });
    } finally { setDeleting(false); }
  };

  /* ── Handlers ── */
  const handleLogout = async () => {
    try { await api("/api/auth/logout", { method: "POST" }); } catch {}
    router.push("/admin/login");
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
      const res = await api("/api/users/", { method: "POST", body: JSON.stringify(newUser) });
      const d = await res.json();
      if (!res.ok) throw new Error(d.error || "Failed to create user");
      setShowCreateUser(false);
      setNewUser({ name: "", email: "", password: "", role: "simple_user" });
      const r = await api("/api/users/");
      if (r.ok) { const dd = await r.json(); setTeamUsers(dd.users || []); }
    } catch (err) { setCreateError(err.message); }
    finally { setCreating(false); }
  };

  const handleChangeMyPassword = async (e) => {
    e.preventDefault();
    setPwdError(""); setPwdSuccess("");
    if (pwdForm.newPassword !== pwdForm.confirmPassword) { setPwdError("Passwords do not match"); return; }
    setChangingPwd(true);
    try {
      const res = await api("/api/users/me/password", { method: "PUT", body: JSON.stringify({ currentPassword: pwdForm.currentPassword, newPassword: pwdForm.newPassword }) });
      const d = await res.json();
      if (!res.ok) throw new Error(d.error || "Failed");
      setPwdSuccess("Password changed successfully!");
      setPwdForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => { setShowChangePwd(false); setPwdSuccess(""); }, 1500);
    } catch (err) { setPwdError(err.message); }
    finally { setChangingPwd(false); }
  };

  const handleResetUserPassword = async () => {
    setResetPwdError("");
    try {
      const res = await api(`/api/users/${resetPwdUser.id}/password`, { method: "PUT", body: JSON.stringify({ newPassword: resetPwdValue }) });
      const d = await res.json();
      if (!res.ok) throw new Error(d.error || "Failed");
      setResetPwdUser(null); setResetPwdValue("");
    } catch (err) { setResetPwdError(err.message); }
  };

  const toggleUserActive = async (id, isActive) => {
    try {
      const res = await api(`/api/users/${id}`, { method: "PUT", body: JSON.stringify({ is_active: !isActive }) });
      if (res.ok) setTeamUsers((prev) => prev.map((u) => u.id === id ? { ...u, is_active: isActive ? 0 : 1 } : u));
    } catch {}
  };

  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user? This cannot be undone.")) return;
    try {
      const res = await api(`/api/users/${id}`, { method: "DELETE" });
      if (res.ok) setTeamUsers((prev) => prev.filter((u) => u.id !== id));
      else { const d = await res.json(); alert(d.error || "Failed to delete user"); }
    } catch {}
  };

  const forceLogoutUser = async (id) => {
    if (!confirm("Force logout this user?")) return;
    try {
      const res = await api(`/api/users/${id}/force-logout`, { method: "POST" });
      const d = await res.json();
      if (res.ok) alert(d.message || "User logged out");
      else alert(d.error || "Failed");
    } catch {}
  };

  const changeUserRole = async (id, newRole) => {
    try {
      const res = await api(`/api/users/${id}`, { method: "PUT", body: JSON.stringify({ role: newRole }) });
      if (res.ok) {
        setTeamUsers((prev) => prev.map((u) => u.id === id ? { ...u, role: newRole } : u));
      } else {
        const d = await res.json();
        alert(d.error || "Failed to change role");
      }
    } catch {}
  };

  /* ── Computed chart data ── */
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

  /* ── Nav config based on role ── */
  const NAV = [
    { key: "overview", label: "Overview", icon: I.home },
    { key: "leads", label: "Tickets", icon: I.clipboard },
    { key: "search", label: "Search", icon: I.search },
    ...(isAdminPlus(user) ? [
      { key: "team", label: "Team", icon: I.team },
      { key: "activity", label: "Activity Log", icon: I.activity },
    ] : []),
  ];

  const TITLES = { overview: "Dashboard Overview", leads: "Ticket Management", search: "Search Customer", team: "User Management", activity: "Activity Log" };

  const statCards = stats ? [
    { label: "Total Leads", value: (Number(stats.total) || 0).toLocaleString(), sub: `${Number(stats.today) || 0} today`, icon: I.users, color: "bg-blue-600" },
    { label: "Open Tickets", value: ((Number(stats.open) || 0) + (Number(stats.reopened) || 0)).toLocaleString(), sub: `${Number(stats.in_progress) || 0} in progress`, icon: I.clipboard, color: "bg-amber-500" },
    { label: "Closed Tickets", value: (Number(stats.closed) || 0).toLocaleString(), sub: `${Number(stats.reopened) || 0} reopened`, icon: I.check, color: "bg-emerald-600" },
    { label: "Today's Leads", value: (Number(stats.today) || 0).toLocaleString(), sub: "New today", icon: I.bell, color: "bg-violet-600" },
    { label: "Active Users", value: (Number(stats.active_users) || 0).toLocaleString(), sub: "Team members", icon: I.team, color: "bg-cyan-600" },
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
        <div className={`h-16 flex items-center ${sidebarOpen ? "px-5" : "justify-center"} border-b border-slate-800/80`}>
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            {I.cpu("w-5 h-5 text-white")}
          </div>
          {sidebarOpen && <span className="ml-3 font-bold text-[15px] tracking-tight whitespace-nowrap">TechSupport4 CRM</span>}
        </div>

        <nav className="flex-1 py-5 px-3 space-y-1 overflow-y-auto">
          {sidebarOpen && <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Menu</p>}
          {NAV.map((n) => {
            const isActive = activeTab === n.key;
            return (
              <button key={n.key} onClick={() => setActiveTab(n.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 relative group
                  ${isActive ? "bg-blue-600/15 text-blue-400" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/70"}`}>
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-blue-500 rounded-r-full" />}
                <span className={`flex-shrink-0 ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"}`}>{n.icon()}</span>
                {sidebarOpen && <span>{n.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Sidebar bottom */}
        <div className="p-3 border-t border-slate-800/80 space-y-1">
          {/* Auto-refresh indicator */}
          {sidebarOpen && (
            <div className="px-3 py-2 text-[11px] text-slate-500 flex items-center gap-2">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
              Live &middot; refresh in {refreshCountdown}s
            </div>
          )}
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
            <h1 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">{TITLES[activeTab]}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Manual Refresh */}
            <button onClick={() => { loadData(true); setRefreshCountdown(20); }} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Refresh data">
              {I.refresh()}
            </button>

            {/* Notification bell */}
            <div className="relative notif-dropdown">
              <button onClick={() => { setShowNotifDropdown(!showNotifDropdown); if (!showNotifDropdown) loadNotifications(); }}
                className="relative p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Notifications">
                {I.bell()}
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-950 px-1">
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </span>
                )}
              </button>
              {showNotifDropdown && (
                <div className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</p>
                    {unreadCount > 0 && (
                      <button onClick={markAllRead} className="text-xs text-blue-600 hover:text-blue-700 font-medium">Mark all read</button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                    {notifications.length > 0 ? notifications.map((n) => (
                      <div key={n.id} className={`px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition ${!n.is_read ? "bg-blue-50/50 dark:bg-blue-500/5" : ""}`}>
                        <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200">{n.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{n.message}</p>
                        <p className="text-[11px] text-slate-400 mt-1">{timeAgo(n.created_at)}</p>
                      </div>
                    )) : (
                      <div className="px-4 py-8 text-center text-sm text-slate-400">No notifications</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Dark toggle */}
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Toggle theme">
              {dark ? I.sun() : I.moon()}
            </button>

            {/* Profile dropdown */}
            <div className="relative profile-dropdown">
              <button onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 ml-1 pl-3 border-l border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg py-1.5 pr-2 transition">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-slate-950">
                  {user?.name?.[0]?.toUpperCase() || "A"}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">{user?.name || "Admin"}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{ROLE_LABELS[user?.role] || user?.role}</p>
                </div>
                {I.chevDown("w-3.5 h-3.5 text-slate-400")}
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 py-1">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{user?.name}</p>
                    <p className="text-xs text-slate-400">{user?.email}</p>
                    <span className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-semibold mt-1.5 ${roleBadge(user?.role)}`}>{ROLE_LABELS[user?.role] || user?.role}</span>
                  </div>
                  <button onClick={() => { setShowProfileMenu(false); setShowChangePwd(true); setPwdError(""); setPwdSuccess(""); setPwdForm({ currentPassword: "", newPassword: "", confirmPassword: "" }); }}
                    className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-2.5">
                    {I.key()} Change Password
                  </button>
                  <button onClick={handleLogout}
                    className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition flex items-center gap-2.5">
                    {I.logout("w-4 h-4")} Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ─── CONTENT ─── */}
        <main className="flex-1 p-6 space-y-6">

          {/* ══════ OVERVIEW TAB ══════ */}
          {activeTab === "overview" && (
            <>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
                {statCards.map((c, i) => (
                  <div key={i} className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-none transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">{c.label}</p>
                        <p className="text-[26px] font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">{c.value}</p>
                      </div>
                      <div className={`w-10 h-10 ${c.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        {c.icon("w-5 h-5 text-white")}
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">{c.sub}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-5">
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

              {/* Monthly Cases + Recent Activity */}
              <div className="grid lg:grid-cols-5 gap-5">
                <div className="lg:col-span-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Monthly Cases</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Case volume over 6 months</p>
                    </div>
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

                <div className="lg:col-span-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{isAdminPlus(user) ? "Latest audit events" : "Recent cases"}</p>
                  </div>
                  <div className="space-y-4 max-h-[240px] overflow-y-auto">
                    {isAdminPlus(user) && auditLogs.length > 0 ? (
                      auditLogs.slice(0, 8).map((a, i) => {
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
                    ) : !isAdminPlus(user) && chartCases.length > 0 ? (
                      chartCases.slice(0, 6).map((c, i) => (
                        <div key={i} className="flex items-start gap-3 group cursor-pointer" onClick={() => openTicket(c.case_id)}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">{I.users("w-4 h-4")}</div>
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

          {/* ══════ TICKETS TAB ══════ */}
          {activeTab === "leads" && (
            <div className="flex gap-5">
              {/* Ticket List */}
              <div className={`${selectedTicket ? "w-1/2 xl:w-3/5" : "w-full"} bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300`}>
                {/* Header + Filters */}
                <div className="p-5 border-b border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">All Tickets</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{displayLeads.total} total</p>
                    </div>
                    <button onClick={exportCSV} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm">
                      {I.download()} Export CSV
                    </button>
                  </div>

                  {/* Bulk action bar (super_admin only) */}
                  {isSuperAdminUser(user) && selectedCaseIds.size > 0 && (
                    <div className="flex items-center gap-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg px-4 py-2.5">
                      <span className="text-sm font-medium text-red-700 dark:text-red-400">{selectedCaseIds.size} selected</span>
                      <button onClick={handleBulkDelete} disabled={deleting}
                        className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm">
                        {deleting ? <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent" /> : I.trash("w-3.5 h-3.5")}
                        Delete Selected
                      </button>
                      <button onClick={() => setSelectedCaseIds(new Set())}
                        className="text-xs text-red-500 hover:text-red-600 font-medium">Clear Selection</button>
                    </div>
                  )}

                  {/* Filters */}
                  <div className="flex flex-wrap gap-2">
                    <select value={leadFilter} onChange={(e) => { setLeadFilter(e.target.value); setLeadPage(1); }}
                      className="text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">All Statuses</option>
                      <option value="open">Open</option>
                      <option value="in_progress">In Progress</option>
                      <option value="closed">Closed</option>
                      <option value="reopened">Reopened</option>
                    </select>
                    {isAdminPlus(user) && teamUsers.length > 0 && (
                      <select value={leadAssignedFilter} onChange={(e) => { setLeadAssignedFilter(e.target.value); setLeadPage(1); }}
                        className="text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">All Agents</option>
                        {teamUsers.filter(u => u.is_active).map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                      </select>
                    )}
                    <input type="date" value={leadDateFrom} onChange={(e) => { setLeadDateFrom(e.target.value); setLeadPage(1); }}
                      className="text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="date" value={leadDateTo} onChange={(e) => { setLeadDateTo(e.target.value); setLeadPage(1); }}
                      className="text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {(leadFilter || leadAssignedFilter || leadDateFrom || leadDateTo) && (
                      <button onClick={() => { setLeadFilter(""); setLeadAssignedFilter(""); setLeadDateFrom(""); setLeadDateTo(""); setLeadPage(1); }}
                        className="text-xs text-red-500 hover:text-red-600 font-medium px-2">Clear</button>
                    )}
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50/80 dark:bg-slate-900/50">
                        {isSuperAdminUser(user) && (
                          <th className="w-10 px-3 py-3">
                            <input type="checkbox"
                              checked={(displayLeads.rows || []).length > 0 && (displayLeads.rows || []).every((c) => selectedCaseIds.has(c.case_id))}
                              onChange={toggleSelectAll}
                              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                          </th>
                        )}
                        <th className="text-left px-4 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Case ID</th>
                        <th className="text-left px-4 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                        <th className="text-left px-4 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="text-left px-4 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Priority</th>
                        <th className="text-left px-4 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden xl:table-cell">Agent</th>
                        <th className="text-left px-4 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Created</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {(displayLeads.rows || []).length > 0 ? displayLeads.rows.map((c) => (
                        <tr key={c.id} onClick={() => openTicket(c.case_id)}
                          className={`cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-100 ${selectedTicket === c.case_id ? "bg-blue-50/50 dark:bg-blue-500/5" : ""} ${selectedCaseIds.has(c.case_id) ? "bg-red-50/40 dark:bg-red-500/5" : ""}`}>
                          {isSuperAdminUser(user) && (
                            <td className="w-10 px-3 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <input type="checkbox" checked={selectedCaseIds.has(c.case_id)} onChange={() => toggleSelect(c.case_id)}
                                className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                            </td>
                          )}
                          <td className="px-4 py-3.5 font-mono text-xs text-slate-500 dark:text-slate-400">{c.case_id}</td>
                          <td className="px-4 py-3.5">
                            <p className="font-medium text-slate-900 dark:text-white text-[13px]">{c.name}</p>
                            <p className="text-xs text-slate-400 truncate max-w-[180px]">{c.subject || "General"}</p>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold ${statusBadge(c.status)}`}>{STATUS_DISPLAY[c.status] || c.status}</span>
                          </td>
                          <td className="px-4 py-3.5 hidden lg:table-cell">
                            <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold ${priorityBadge(c.priority)}`}>{PRIORITY_DISPLAY[c.priority] || "Medium"}</span>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-slate-500 dark:text-slate-400 hidden xl:table-cell">{c.agent_name || "Unassigned"}</td>
                          <td className="px-4 py-3.5 text-xs text-slate-400 hidden lg:table-cell">{timeAgo(c.created_at)}</td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={isSuperAdminUser(user) ? 7 : 6} className="px-5 py-16 text-center">
                            {I.clipboard("w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto")}
                            <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">No tickets found</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {displayLeads.total > 50 && (
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <p className="text-xs text-slate-400">Page {leadPage} of {totalPages}</p>
                    <div className="flex gap-2">
                      <button onClick={() => setLeadPage((p) => Math.max(1, p - 1))} disabled={leadPage <= 1}
                        className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition">Previous</button>
                      <button onClick={() => setLeadPage((p) => Math.min(totalPages, p + 1))} disabled={leadPage >= totalPages}
                        className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg disabled:opacity-40 hover:bg-slate-200 dark:hover:bg-slate-700 transition">Next</button>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Ticket Detail Panel ── */}
              {selectedTicket && (
                <div className="w-1/2 xl:w-2/5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[calc(100vh-140px)] sticky top-[88px]">
                  {ticketLoading ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent" />
                    </div>
                  ) : ticketDetail ? (
                    <>
                      {/* Detail Header */}
                      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
                        <div>
                          <p className="font-mono text-xs text-slate-400">{ticketDetail.case_id}</p>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{ticketDetail.name}</h3>
                          <p className="text-xs text-slate-400">{ticketDetail.email} &middot; {ticketDetail.phone}</p>
                        </div>
                        <button onClick={() => { setSelectedTicket(null); setTicketDetail(null); }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                          {I.xMark()}
                        </button>
                      </div>

                      {/* Detail Body */}
                      <div className="flex-1 overflow-y-auto p-5 space-y-4">
                        {/* Status + Priority + Agent */}
                        <div className="flex flex-wrap gap-2">
                          <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBadge(ticketDetail.status)}`}>
                            {STATUS_DISPLAY[ticketDetail.status]}
                          </span>
                          <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${priorityBadge(ticketDetail.priority)}`}>
                            {PRIORITY_DISPLAY[ticketDetail.priority] || "Medium"}
                          </span>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                            <p className="text-slate-400">Assigned To</p>
                            <p className="font-medium text-slate-900 dark:text-white mt-0.5">{ticketDetail.agent_name || "Unassigned"}</p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                            <p className="text-slate-400">Created</p>
                            <p className="font-medium text-slate-900 dark:text-white mt-0.5">{formatDateTime(ticketDetail.created_at)}</p>
                          </div>
                          {ticketDetail.closed_at && (
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 col-span-2">
                              <p className="text-slate-400">Closed At</p>
                              <p className="font-medium text-slate-900 dark:text-white mt-0.5">{formatDateTime(ticketDetail.closed_at)}</p>
                            </div>
                          )}
                        </div>

                        {/* Subject & Message */}
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                          <p className="text-xs text-slate-400 font-medium">Subject</p>
                          <p className="text-sm text-slate-800 dark:text-slate-200 mt-1">{ticketDetail.subject || "General Enquiry"}</p>
                          <p className="text-xs text-slate-400 font-medium mt-3">Message</p>
                          <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 whitespace-pre-wrap">{ticketDetail.message}</p>
                        </div>

                        {/* Actions */}
                        {canDo(user, "modify") && (
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</p>
                            <div className="flex flex-wrap gap-2">
                              {ticketDetail.status !== "closed" && (
                                <button onClick={() => ticketAction(ticketDetail.case_id, "close")}
                                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20 transition">Close</button>
                              )}
                              {ticketDetail.status === "closed" && (
                                <button onClick={() => ticketAction(ticketDetail.case_id, "reopen")}
                                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500/20 transition">Reopen</button>
                              )}
                              {ticketDetail.status !== "in_progress" && ticketDetail.status !== "closed" && (
                                <button onClick={() => ticketAction(ticketDetail.case_id, "in-progress")}
                                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20 transition">In Progress</button>
                              )}
                              {ticketDetail.status !== "open" && ticketDetail.status !== "closed" && (
                                <button onClick={() => ticketAction(ticketDetail.case_id, "open")}
                                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 transition">Mark Open</button>
                              )}
                            </div>
                            {/* Priority change */}
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-slate-400">Priority:</span>
                              {["low", "medium", "high", "urgent"].map((p) => (
                                <button key={p} onClick={() => ticketAction(ticketDetail.case_id, "priority", { priority: p })}
                                  className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${ticketDetail.priority === p ? priorityBadge(p) : "bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600"}`}>
                                  {PRIORITY_DISPLAY[p]}
                                </button>
                              ))}
                            </div>
                            {/* Assign */}
                            {canAssign(user) && teamUsers.length > 0 && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-slate-400">Assign:</span>
                                <select onChange={(e) => { if (e.target.value) ticketAction(ticketDetail.case_id, "assign", { userId: parseInt(e.target.value) }); }}
                                  value={ticketDetail.assigned_to || ""}
                                  className="text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                  <option value="">Unassigned</option>
                                  {teamUsers.filter(u => u.is_active).map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                                </select>
                              </div>
                            )}
                            {/* Delete (super_admin only) */}
                            {isSuperAdminUser(user) && (
                              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                                <button onClick={() => handleDeleteTicket(ticketDetail.case_id)} disabled={deleting}
                                  className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm">
                                  {deleting ? <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent" /> : I.trash("w-3.5 h-3.5")}
                                  Delete Ticket
                                </button>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Notes */}
                        <div>
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Internal Notes ({(ticketDetail.notes || []).length})</p>
                          <div className="space-y-2 max-h-48 overflow-y-auto">
                            {(ticketDetail.notes || []).map((n, i) => (
                              <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                                <div className="flex justify-between items-center mb-1">
                                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{n.author}</p>
                                  <span className="text-[10px] text-slate-400">{timeAgo(n.created_at)}</span>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-wrap">{n.note}</p>
                              </div>
                            ))}
                          </div>
                          {canDo(user, "write") && (
                            <div className="mt-3 flex gap-2">
                              <input type="text" value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Add a note..."
                                onKeyDown={(e) => { if (e.key === "Enter" && noteText.trim()) { ticketAction(ticketDetail.case_id, "notes", { note: noteText }); setNoteText(""); } }}
                                className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                              <button onClick={() => { if (noteText.trim()) { ticketAction(ticketDetail.case_id, "notes", { note: noteText }); setNoteText(""); } }}
                                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition">Add</button>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          )}

          {/* ══════ SEARCH TAB ══════ */}
          {activeTab === "search" && (
            <div className="space-y-5">
              <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <div className="relative max-w-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {searching ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent" /> : I.search("w-5 h-5 text-slate-400")}
                  </div>
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, email, phone, or case ID..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {searchQuery.trim() ? (searching ? "Searching..." : `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} found`) : "Enter a search term to find customers and cases"}
                </p>
              </div>
              {searchQuery.trim() && !searching && (
                <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {searchResults.map((c) => (
                        <div key={c.id} onClick={() => { setActiveTab("leads"); setTimeout(() => openTicket(c.case_id), 100); }}
                          className="p-5 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition cursor-pointer">
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
                              <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${statusBadge(c.status)}`}>{STATUS_DISPLAY[c.status] || c.status}</span>
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
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ══════ TEAM / USER MANAGEMENT TAB ══════ */}
          {activeTab === "team" && isAdminPlus(user) && (
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">User Management</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{teamUsers.length} users &middot; Manage access, roles & permissions</p>
                </div>
                {isSuperAdminUser(user) && (
                  <button onClick={() => { setShowCreateUser(true); setCreateError(""); }}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm">
                    {I.plus("w-4 h-4")} Add User
                  </button>
                )}
              </div>

              {/* Role Legend */}
              <div className="px-5 pt-5 pb-3 flex flex-wrap gap-3">
                {[
                  { role: "super_admin", desc: "Full system access" },
                  { role: "admin", desc: "Manage tickets & users" },
                  { role: "super_user", desc: "Assign & close tickets" },
                  { role: "simple_user", desc: "View own tickets only" },
                ].map((r) => (
                  <div key={r.role} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2">
                    <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-semibold ${roleBadge(r.role)}`}>{ROLE_LABELS[r.role]}</span>
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
                      const targetIsSuperAdmin = m.role === "super_admin" || m.email?.toLowerCase() === "support@techsupport4.com";
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
                            {isSuperAdminUser(user) && !isSelf && !targetIsSuperAdmin ? (
                              <select value={m.role} onChange={(e) => changeUserRole(m.id, e.target.value)}
                                className="text-xs font-semibold bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="admin">Admin</option>
                                <option value="super_user">Super User</option>
                                <option value="simple_user">Simple User</option>
                              </select>
                            ) : (
                              <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ${roleBadge(m.role)}`}>{ROLE_LABELS[m.role] || m.role}</span>
                            )}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${active ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}>
                              <span className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-600"}`} />
                              {active ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-slate-400 text-xs hidden md:table-cell">{formatDate(m.created_at)}</td>
                          <td className="px-5 py-4">
                            {!isSelf && !targetIsSuperAdmin && (
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <button onClick={() => toggleUserActive(m.id, active)}
                                  className={`px-2 py-1 rounded-md text-[11px] font-medium transition ${active ? "bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400"}`}>
                                  {active ? "Disable" : "Enable"}
                                </button>
                                {isSuperAdminUser(user) && (
                                  <>
                                    <button onClick={() => { setResetPwdUser(m); setResetPwdValue(""); setResetPwdError(""); }}
                                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 transition" title="Reset password">
                                      {I.key("w-3 h-3")}
                                    </button>
                                    <button onClick={() => forceLogoutUser(m.id)}
                                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 transition" title="Force logout">
                                      {I.logout("w-3 h-3")}
                                    </button>
                                    <button onClick={() => deleteUser(m.id)}
                                      className="px-2 py-1 rounded-md text-[11px] font-medium text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition" title="Delete user">
                                      {I.trash("w-3 h-3")}
                                    </button>
                                  </>
                                )}
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

          {/* ══════ ACTIVITY LOG TAB ══════ */}
          {activeTab === "activity" && isAdminPlus(user) && (
            <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Activity & Audit Log</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Complete history of all ticket actions</p>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {auditLogs.length > 0 ? auditLogs.map((a, i) => {
                  const ai = activityIcon(a.action);
                  const detail = a.note || (a.old_status && a.new_status ? `${STATUS_DISPLAY[a.old_status] || a.old_status} → ${STATUS_DISPLAY[a.new_status] || a.new_status}` : a.action);
                  return (
                    <div key={i} className="px-5 py-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition">
                      <div className={`w-9 h-9 rounded-lg ${ai.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        {ai.icon("w-4 h-4")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200">
                          {a.action.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {a.user_name && <span className="font-medium">{a.user_name}</span>}{a.user_name && " — "}{detail}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{a.ticket_id}</p>
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0 mt-0.5">{formatDateTime(a.created_at)}</span>
                    </div>
                  );
                }) : (
                  <div className="px-5 py-16 text-center">
                    {I.activity("w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto")}
                    <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">No audit activity yet</p>
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ═══════════ MODALS ═══════════ */}

      {/* Create User Modal */}
      {showCreateUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Create New User</h3>
              <button onClick={() => setShowCreateUser(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">{I.xMark()}</button>
            </div>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Full Name</label>
                <input type="text" required value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Email Address</label>
                <input type="email" required value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="john@techsupport4.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Password</label>
                <input type="password" required value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="••••••••" />
                <p className="text-[11px] text-slate-400 mt-1">Min 8 chars, 1 uppercase, 1 number, 1 special character</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Role</label>
                <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="simple_user">Simple User</option>
                  <option value="super_user">Super User</option>
                  <option value="admin">Admin</option>
                  {isSuperAdminUser(user) && <option value="super_admin">Super Admin</option>}
                </select>
              </div>
              {createError && <p className="text-sm text-red-600 bg-red-50 dark:bg-red-500/10 px-3 py-2 rounded-lg">{createError}</p>}
              <button type="submit" disabled={creating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50 shadow-sm">
                {creating ? "Creating..." : "Create User"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Change My Password Modal */}
      {showChangePwd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Change Password</h3>
              <button onClick={() => setShowChangePwd(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">{I.xMark()}</button>
            </div>
            <form onSubmit={handleChangeMyPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Current Password</label>
                <input type="password" required value={pwdForm.currentPassword} onChange={(e) => setPwdForm({ ...pwdForm, currentPassword: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">New Password</label>
                <input type="password" required value={pwdForm.newPassword} onChange={(e) => setPwdForm({ ...pwdForm, newPassword: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Confirm New Password</label>
                <input type="password" required value={pwdForm.confirmPassword} onChange={(e) => setPwdForm({ ...pwdForm, confirmPassword: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
              </div>
              {pwdError && <p className="text-sm text-red-600 bg-red-50 dark:bg-red-500/10 px-3 py-2 rounded-lg">{pwdError}</p>}
              {pwdSuccess && <p className="text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-2 rounded-lg">{pwdSuccess}</p>}
              <button type="submit" disabled={changingPwd}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50 shadow-sm">
                {changingPwd ? "Changing..." : "Change Password"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Reset User Password Modal */}
      {resetPwdUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Reset Password</h3>
              <button onClick={() => setResetPwdUser(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">{I.xMark()}</button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Reset password for <strong>{resetPwdUser.name}</strong> ({resetPwdUser.email})</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">New Password</label>
                <input type="password" value={resetPwdValue} onChange={(e) => setResetPwdValue(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Enter new password" />
              </div>
              {resetPwdError && <p className="text-sm text-red-600 bg-red-50 dark:bg-red-500/10 px-3 py-2 rounded-lg">{resetPwdError}</p>}
              <button onClick={handleResetUserPassword}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition shadow-sm">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast notification ── */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border text-sm font-medium transition-all duration-300 animate-[slideUp_0.3s_ease-out]
          ${toast.type === "success" ? "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30" : "bg-red-50 text-red-800 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30"}`}>
          {toast.type === "success" ? I.check("w-5 h-5") : I.xMark("w-5 h-5")}
          {toast.message}
          <button onClick={() => setToast(null)} className="ml-2 opacity-60 hover:opacity-100 transition">{I.xMark("w-4 h-4")}</button>
        </div>
      )}
    </div>
  );
}
