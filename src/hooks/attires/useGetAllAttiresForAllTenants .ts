import { useQuery } from "@tanstack/react-query";
import { tenantService } from "@/service/tenant.service";
import {type Attire } from "@/types/attire.type";
import { attireService } from "@/service/attire.service";

export const useGetAllAttiresForAllTenants = () => {
  // Load tenants first
  const { data: tenants = [], isLoading: tenantsLoading } = useQuery({
    queryKey: ["tenants"],
    queryFn: tenantService.getAllTenants,
  });

  // Load attires for each tenant
  const { data: attires = [], isLoading: attiresLoading } = useQuery({
    queryKey: ["attires-for-all-tenants", tenants],
    queryFn: async () => {
      const results: Attire[] = [];
      for (const tenant of tenants as any[]) {
        const tenantAttires = await attireService.getAllAttire(tenant.tenantId);
        results.push(...tenantAttires);
      }
      return results;
    },
    enabled: (tenants as any[]).length > 0,
  });

  return { tenants, attires, tenantsLoading, attiresLoading };
};
