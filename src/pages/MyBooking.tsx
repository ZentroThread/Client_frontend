import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { API_BASE_URL } from "@/constants/constdata";

interface Booking {
  id: number;
  attireId: number;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
}

export default function MyBooking() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/v1/bookings/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setBookings(data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Unable to load bookings",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const statusStyles = {
    APPROVED: "bg-(--success)/10 text-(--success)",
    REJECTED: "bg-(--error)/10 text-(--error)",
    PENDING: "bg-(--warning)/10 text-(--warning)",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-(--text-secondary)">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-primary) px-6 py-10">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-serif text-(--brand-primary)">
          My Bookings
        </h1>
        <p className="text-(--text-secondary) mt-2">
          View and manage your attire reservations
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {bookings.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-(--border-medium) rounded-lg">
            <p className="text-(--text-secondary)">
              You have no bookings yet.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-(--surface) border border-(--border-soft) rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-(--text-primary)">
                      Booking #{b.id}
                    </h2>
                    <p className="text-xs text-(--text-muted)">
                      Requested on {formatDate(b.createdAt)}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      statusStyles[b.status as keyof typeof statusStyles]
                    }`}
                  >
                    {b.status}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-(--border-soft) my-4" />

                {/* Details Grid */}
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-(--text-muted)">Attire</p>
                    <p className="text-(--text-primary) font-medium">
                      #{b.attireId}
                    </p>
                  </div>

                  <div>
                    <p className="text-(--text-muted)">Start Date</p>
                    <p className="text-(--text-primary) font-medium">
                      {formatDate(b.startDate)}
                    </p>
                  </div>

                  <div>
                    <p className="text-(--text-muted)">End Date</p>
                    <p className="text-(--text-primary) font-medium">
                      {formatDate(b.endDate)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}