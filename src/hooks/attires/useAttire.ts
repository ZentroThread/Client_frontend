import { attireService } from "@/service/attire.service";
import { useQuery } from "@tanstack/react-query";
import {type Attire} from "@/types/attire.type";
import type { AttireAvailability } from "@/types/attire-availability.type";

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
};

export const useCheckAttireAvailability = (tenant: string, code: string, rentDate: string) => {
  return useQuery<AttireAvailability>({
    queryKey: ["attire-availability", tenant, code, rentDate],
    queryFn: async () => {
      return await attireService.checkAttireAvailability(code, rentDate, tenant);
    },
  });
};