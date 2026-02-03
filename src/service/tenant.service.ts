import {apiClient} from "@/lib/client";
import {type Tenant} from "@/types/tenant.type";
import {API_ENDPOINTS} from "@/constants/api.constants";

export const tenantService = {
  async getAllTenants(): Promise<Tenant[]> {
    return await apiClient.request<Tenant[]>(API_ENDPOINTS.TENANT.GET_ALL());
  },
};