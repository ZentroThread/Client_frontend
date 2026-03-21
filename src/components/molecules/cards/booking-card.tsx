import {useGetAllAttiresForAllTenants} from "@/hooks/attires/useGetAllAttiresForAllTenants ";

interface Booking {
  id: number;
  attireId: number;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
}

type Props = {
  b: Booking;
};

export default function BookingCard({b}: Props) {

  const {attires,attiresLoading} = useGetAllAttiresForAllTenants();
  const attireData = attires.find((a: typeof attires[number]) => a.id === b.attireId);

  return (
    <div
      className="border rounded-xl p-5 
      bg-(--color-card) 
      border-(--color-border) 
      shadow-[0_2px_6px_var(--color-shadow)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-text-color)">
            <strong>Booking ID:</strong> {b.id}
          </p>

          <p className="text-(--color-text-color)">
            <strong>Start Date:</strong> {b.startDate}
          </p>

          <p className="text-(--color-text-color)">
            <strong>End Date:</strong> {b.endDate}
          </p>

          <p className="text-(--color-text-color)">
            <strong>Status:</strong>{" "}
            <span
                className={
                  b.status === "APPROVED"
                    ? "text-(--color-green) font-semibold"
                    : b.status === "REJECTED"
                    ? "text-(--color-error) font-semibold"
                    : "text-(--color-pie-2) font-semibold"
                }
              >
                {b.status}
              </span>
          </p>

          <p className="text-sm text-(--color-text-color)">
            Requested on:{" "}
            {b.createdAt
              ? new Date(b.createdAt).toLocaleString()
              : "N/A"}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3">
          
          {/* Attire Info */}
          <div>
            <p className="text-(--color-text-color)">
              <strong>Attire:</strong>{" "}
              {attiresLoading
                ? "Loading..."
                : attireData?.attireName || attireData?.attireCode || "N/A"}
            </p>
          </div>

          {/* Image */}
          {attireData?.imageUrl && (
            <img
              src={
                typeof attireData.imageUrl === "string"
                  ? attireData.imageUrl
                  : URL.createObjectURL(attireData.imageUrl)
              }
              alt={attireData.attireName || "Attire Image"}
              className="w-full max-w-50 h-40 object-cover rounded-lg border"
            />
          )}

        </div>
      </div>
    </div>
  );
}