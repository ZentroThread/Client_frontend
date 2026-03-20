import { useState } from "react";
import { API_BASE_URL } from "@/constants/constdata";
import Swal from "sweetalert2";

export default function Feedback() {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message, rating }),
      });

      //  Not logged in
      if (res.status === 401) {
        Swal.fire({
          icon: "warning",
          title: "Login Required",
          text: "Please login to submit feedback",
          confirmButtonColor: "var(--brand-primary)",
        });

        setTimeout(() => {
          window.location.href = `${API_BASE_URL}/oauth2/authorization/google`;
        }, 1500);

        return;
      }

      if (!res.ok) throw new Error("Failed");

      //  Success alert
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Feedback submitted successfully",
        confirmButtonColor: "var(--brand-primary)",
      });

      setMessage("");
      setRating(5);

    } catch (err) {
      //  Error alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error submitting feedback",
        confirmButtonColor: "var(--error)",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto mt-10 p-6 rounded-2xl glass mb-16"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-soft)",
      }}
    >
      <h2
        className="text-2xl mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Give Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* TEXTAREA */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your feedback..."
          required
          className="w-full p-3 rounded-lg outline-none"
          style={{
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-soft)",
            color: "var(--text-primary)",
          }}
        />

        {/* RATING */}
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-3 rounded-lg outline-none"
          style={{
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-soft)",
            color: "var(--text-primary)",
          }}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star
            </option>
          ))}
        </select>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2
            transition-all duration-200
            bg-(--brand-primary) text-white shadow-sm
            hover:bg-(--brand-secondary)
            disabled:opacity-70 disabled:cursor-not-allowed
          "
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}

          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
}