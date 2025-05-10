import React, { useEffect, useState } from "react";
import "./adminPage.css";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState("");
  const [toggling, setToggling] = useState("");

  // Fetch all users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const res = await fetch("https://portfolio-zvkt.onrender.com/api/users", {
          headers: { Authorization: "Bearer " + token },
        });
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Could not load users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [deleting, toggling]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setDeleting(id);
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const res = await fetch(`https://portfolio-zvkt.onrender.com/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      if (!res.ok) throw new Error("Delete failed");
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      alert("Failed to delete user.");
    } finally {
      setDeleting("");
    }
  };

  const handleToggleAdmin = async (id, currentIsAdmin) => {
    if (!window.confirm(`Are you sure you want to ${currentIsAdmin ? "remove" : "grant"} admin rights?`)) return;
    setToggling(id);
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const res = await fetch(`https://portfolio-zvkt.onrender.com/api/users/${id}/admin`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ isAdmin: !currentIsAdmin }),
      });
      if (!res.ok) throw new Error("Failed to update admin status");
      const data = await res.json();
      setUsers((prev) => prev.map((u) => (u._id === id ? { ...u, isAdmin: data.user.isAdmin } : u)));
    } catch (err) {
      alert("Failed to update admin status.");
    } finally {
      setToggling("");
    }
  };

  return (
    <div className="modal">
      <h2 style={{ fontSize: "2.2rem" }}>Admin Panel</h2>
      <div className="user-content">
        <h3>User Management</h3>
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p style={{ color: "#ff4444" }}>{error}</p>
        ) : (
          <table style={{ width: "100%", color: "#fff", background: "none", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: 4 }}>Email</th>
                <th style={{ textAlign: "left", padding: 4 }}>Admin</th>
                <th style={{ textAlign: "left", padding: 4 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} style={{ borderBottom: "1px solid #333" }}>
                  <td style={{ padding: 4 }}>{user.email}</td>
                  <td style={{ padding: 4 }}>{user.isAdmin ? "Yes" : "No"}</td>
                  <td style={{ padding: 4, display: "flex", gap: 8 }}>
                    <button
                      style={{ background: "#ffad06", color: "#222", borderRadius: 8, padding: "0.4em 1em", border: "none", cursor: "pointer" }}
                      onClick={() => handleToggleAdmin(user._id, user.isAdmin)}
                      disabled={toggling === user._id}
                    >
                      {toggling === user._id
                        ? "Updating..."
                        : user.isAdmin
                        ? "Remove admin"
                        : "Make admin"}
                    </button>
                    <button
                      style={{ background: "#ff4444", color: "#fff", borderRadius: 8, padding: "0.4em 1em", border: "none", cursor: "pointer" }}
                      onClick={() => handleDelete(user._id)}
                      disabled={deleting === user._id}
                    >
                      {deleting === user._id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
