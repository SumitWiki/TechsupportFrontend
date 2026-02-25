"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { API_URL } from "../../lib/constants";

export default function Dashboard() {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const socketRef = useRef(null);
  const fetchRef = useRef(null);

  // Fetch tickets using httpOnly cookie for auth (credentials: "include")
  const fetchTickets = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/admin/tickets?page=${page}&limit=10&search=${encodeURIComponent(search)}`,
        {
          /**
           * credentials: "include" sends the httpOnly auth_token cookie.
           * The backend must validate this cookie on every request.
           */
          credentials: "include",
        }
      );

      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await res.json();
      setTickets(data.tickets || []);
      setTotal(data.total || 0);
    } catch {
      // Network error — stay on page, show empty state
    } finally {
      setLoading(false);
    }
  };

  // Keep fetchRef in sync so socket listener always calls latest version
  useEffect(() => {
    fetchRef.current = fetchTickets;
  });

  // Connect socket only once, inside useEffect — never at module level
  useEffect(() => {
    socketRef.current = io(API_URL, {
      withCredentials: true, // send auth cookie with socket handshake
    });

    socketRef.current.on("newTicket", () => fetchRef.current?.());

    return () => {
      socketRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const handleClose = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/admin/tickets/${id}/close`, {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        alert("Failed to close ticket. Please try again.");
        return;
      }
      fetchTickets();
    } catch {
      alert("Network error. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/admin/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // Even if logout API fails, redirect to login
    }
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">TechSupport4 — Support Tickets</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-700 hover:bg-red-600 px-5 py-2 rounded-lg text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Case ID or name…"
        value={search}
        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        className="mb-6 w-full max-w-sm p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Tickets Table */}
      {loading ? (
        <p className="text-slate-400">Loading tickets…</p>
      ) : tickets.length === 0 ? (
        <p className="text-slate-400">No tickets found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full bg-gray-900 text-sm">
            <thead className="bg-gray-800 text-slate-300 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Case ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-t border-gray-800 hover:bg-gray-800/50 transition">
                  <td className="px-4 py-3 font-mono text-yellow-400">{ticket.case_id}</td>
                  <td className="px-4 py-3">{ticket.name}</td>
                  <td className="px-4 py-3 text-slate-400">{ticket.email}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${ticket.status === "OPEN" ? "bg-green-900 text-green-400" : "bg-gray-700 text-slate-400"}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {ticket.status === "OPEN" && (
                      <button
                        onClick={() => handleClose(ticket.id)}
                        className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded-lg text-xs font-semibold transition"
                      >
                        Close
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm disabled:opacity-40 transition"
        >
          ← Prev
        </button>
        <span className="text-slate-400 text-sm">Page {page}</span>
        <button
          disabled={page * 10 >= total}
          onClick={() => setPage(page + 1)}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm disabled:opacity-40 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
