import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { API_BASE_URL } from "@/constants/constdata";

interface Booking {
  id: number;
  attireId: number;
  startDate: string;
  endDate: string;
  status: string; // PENDING / APPROVED / REJECTED
  createdAt: string;
}

export default function MyBooking() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_BASE_URL}/v1/bookings/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await response.json();
      setBookings(data);

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load bookings",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading bookings...</p>;
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="border rounded-lg p-5 shadow-sm flex flex-col gap-2"
            >
              <p><strong>Booking ID:</strong> {b.id}</p>
              <p><strong>Attire ID:</strong> {b.attireId}</p>
              <p><strong>Start Date:</strong> {b.startDate}</p>
              <p><strong>End Date:</strong> {b.endDate}</p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    b.status === "APPROVED"
                      ? "text-green-600"
                      : b.status === "REJECTED"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }
                >
                  {b.status}
                </span>
              </p>

              <p className="text-sm text-gray-500">
                Requested on: {new Date(b.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}