import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { API_BASE_URL } from "@/constants/constdata";
import BookingCard from "@/components/molecules/cards/booking-card";

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

  // const formatDate = (date: string) =>
  //   new Date(date).toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });

  // const statusStyles = {
  //   APPROVED: "bg-(--success)/10 text-(--success)",
  //   REJECTED: "bg-(--error)/10 text-(--error)",
  //   PENDING: "bg-(--warning)/10 text-(--warning)",
  // };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-(--border-soft) rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-(--brand-primary) rounded-full animate-spin"></div>
        </div>
        <p className="mt-5 text-sm text-(--text-secondary) tracking-wide">
          Loading Bookings...
        </p>
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
              <BookingCard key={b.id} b={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}