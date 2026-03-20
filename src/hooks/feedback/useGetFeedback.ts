import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/constants/constdata";
import type { Feedback } from "@/schema/feedback.schema";

export function useGetFeedback() {
  const [data, setData] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/v1/feedback/approved`);

      if (!response.ok) {
        throw new Error("Failed to fetch feedback");
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchFeedback,
  };
}