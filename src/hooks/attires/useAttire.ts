import { attireService } from "@/service/attire.service";
import { useQuery } from "@tanstack/react-query";
import {type Attire} from "@/types/attire.type";

export const useGetAllAttire = (tenant?: string) => {
  return useQuery<Attire[]>({
    queryKey: ["attires", tenant],
    queryFn: () => attireService.getAllAttire(tenant!),
    enabled: !!tenant,
  });
};

export const useGetAttireById = (tenant: string, id: number) => {
  return useQuery<Attire>({
    queryKey: ["attire", tenant, id],
    queryFn: async () => {
      return await attireService.getAttireById(id, tenant);
    },
  });
}