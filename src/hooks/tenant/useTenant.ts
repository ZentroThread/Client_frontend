import {type Tenant} from "@/types/tenant.type";
import {tenantService} from "@/service/tenant.service";
import {useQuery} from "@tanstack/react-query";

export const useGetAllTenants = () => {
  return useQuery<Tenant[]>({
    queryKey: ["tenants"],
    queryFn: async () => {
      return await tenantService.getAllTenants();
    },
  });
};