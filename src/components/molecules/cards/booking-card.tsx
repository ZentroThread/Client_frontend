import { useGetAllAttiresForAllTenants } from "@/hooks/attires/useGetAllAttiresForAllTenants ";

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

export default function BookingCard({ b }: Props) {
  const { attires, attiresLoading } = useGetAllAttiresForAllTenants();
  const attireData = attires.find(
    (a: typeof attires[number]) => a.id === b.attireId
  );

  const statusStyle =
    b.status === "APPROVED"
      ? "bg-(--success)/10 text-(--success)"
      : b.status === "REJECTED"
      ? "bg-(--error)/10 text-(--error)"
      : "bg-(--warning)/10 text-(--warning)";

  return (
    <div className="glass rounded-2xl p-6 hover:shadow-(--shadow-md) transition-all duration-300">

      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-(--brand-primary)">
            Booking #{b.id}
          </h3>

          <div className="text-sm text-(--text-secondary)">
            <p>
              <span className="font-medium">Start:</span> {b.startDate}
            </p>
            <p>
              <span className="font-medium">End:</span> {b.endDate}
            </p>
          </div>

          {/* Status Badge */}
          <span
            className={`w-fit px-3 py-1 text-xs rounded-full font-medium ${statusStyle}`}
          >
            {b.status}
          </span>

          <p className="text-xs text-(--text-muted)">
            Requested on{" "}
            {b.createdAt
              ? new Date(b.createdAt).toLocaleString()
              : "N/A"}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">

          {/* Attire Info */}
          <div>
            <p className="text-sm text-(--text-secondary)">
              <span className="font-medium text-(--text-primary)">
                Attire:
              </span>{" "}
              {attiresLoading
                ? "Loading..."
                : attireData?.attireName ||
                  attireData?.attireCode ||
                  "N/A"}
            </p>
          </div>

          {/* Image */}
          {attireData?.imageUrl && (
            <div className="flex items-center justify-center rounded-xl border border-(--border-soft) bg-(--bg-muted) p-2">
              <img
                src={
                  typeof attireData.imageUrl === "string"
                    ? attireData.imageUrl
                    : URL.createObjectURL(attireData.imageUrl)
                }
                alt={attireData.attireName || "Attire"}
                className="h-40 object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}