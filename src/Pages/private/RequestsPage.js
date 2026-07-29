import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import {
  requestIncoming,
  requestOutgoing,
  requestAccept,
  requestReject,
  requestCancel,
  walletBalance,
} from "../../Services.js/WorkerApi";

/**
 * Shared requests dashboard for worker and provider.
 * role: "worker" | "provider"
 */
function RequestsPage({ role }) {
  const tokenKey = role === "provider" ? "providertoken" : "token";
  const token = localStorage.getItem(tokenKey);
  const [tab, setTab] = useState("incoming");
  const [statusFilter, setStatusFilter] = useState("");
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  const headers = { Authorization: `Bearer ${token}` };

  const loadWallet = useCallback(async () => {
    try {
      const res = await axios.get(walletBalance, { headers });
      setBalance(res?.data?.data?.balance ?? 0);
    } catch {
      /* ignore */
    }
  }, [token]);

  const loadLists = useCallback(async () => {
    setLoading(true);
    try {
      const q = statusFilter ? `?status=${encodeURIComponent(statusFilter)}` : "";
      const [inc, out] = await Promise.all([
        axios.get(requestIncoming + q, { headers }),
        axios.get(requestOutgoing + q, { headers }),
      ]);
      setIncoming(inc?.data?.data || []);
      setOutgoing(out?.data?.data || []);
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed to load requests");
    } finally {
      setLoading(false);
    }
  }, [token, statusFilter]);

  useEffect(() => {
    loadWallet();
    loadLists();
  }, [loadWallet, loadLists]);

  const act = async (fn, id, okMsg) => {
    try {
      await axios.post(fn(id), {}, { headers });
      toast.success(okMsg);
      loadLists();
      loadWallet();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Action failed");
    }
  };

  const list = tab === "incoming" ? incoming : outgoing;

  const otherName = (item) => {
    if (tab === "incoming") return item?.sender_id?.name || "User";
    return item?.receiver_id?.name || "User";
  };

  return (
    <div className="min-h-[150vh] min-w-[100vw] bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Requests</h1>
            <p className="text-sm text-gray-600 mt-1">
              Send requests with wallet credits. Contacts unlock only after accept (24h).
            </p>
          </div>
          <div className="px-4 py-2 bg-white border rounded-lg text-sm">
            Wallet: <span className="font-bold">₹{balance ?? "—"}</span>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setTab("incoming")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              tab === "incoming" ? "bg-red-600 text-white" : "bg-white border"
            }`}
          >
            Incoming
          </button>
          <button
            type="button"
            onClick={() => setTab("outgoing")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              tab === "outgoing" ? "bg-red-600 text-white" : "bg-white border"
            }`}
          >
            Outgoing
          </button>
          <select
            className="ml-auto border rounded-lg px-3 py-2 text-sm bg-white"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All statuses</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="cancelled">Cancelled</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        {loading && <p className="text-gray-500 text-sm">Loading…</p>}

        <div className="space-y-3">
          {!loading && list.length === 0 && (
            <p className="text-gray-500 text-sm bg-white border rounded-lg p-6">
              No requests found.
            </p>
          )}

          {list.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-900">{otherName(item)}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.request_type === "job_request"
                      ? "Job application"
                      : "Work request"}
                    {item.job_id?.jobTitle
                      ? ` · ${item.job_id.jobTitle}`
                      : ""}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleString("en-IN")
                      : ""}
                  </p>
                </div>
                <span
                  className={`h-fit text-xs font-semibold px-2 py-1 rounded ${
                    item.status === "accepted"
                      ? "bg-green-100 text-green-800"
                      : item.status === "rejected"
                      ? "bg-red-100 text-red-800"
                      : item.status === "pending"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {tab === "outgoing" && item.contactStatus === "unlocked" && item.contactNo && (
                <div className="mt-3 flex gap-2">
                  <a
                    href={`tel:${item.contactNo}`}
                    className="px-3 py-2 text-sm bg-green-600 text-white rounded-lg"
                  >
                    Call {item.contactNo}
                  </a>
                  <a
                    href={`https://wa.me/${item.contactNo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 text-sm bg-emerald-500 text-white rounded-lg"
                  >
                    WhatsApp
                  </a>
                </div>
              )}

              {tab === "incoming" && item.status === "pending" && (
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      act(requestAccept, item._id, "Request accepted")
                    }
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      act(requestReject, item._id, "Request rejected — ₹10 refunded to sender wallet")
                    }
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm"
                  >
                    Reject
                  </button>
                </div>
              )}

              {tab === "outgoing" && item.status === "pending" && (
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() =>
                      act(requestCancel, item._id, "Cancelled — ₹10 refunded to wallet")
                    }
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    Cancel request
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RequestsPage;
