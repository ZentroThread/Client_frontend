import {apiClient} from "@/lib/client";
import {type Attire} from "@/types/attire.type";
import {type AttireAvailability} from "@/types/attire-availability.type";
import {API_ENDPOINTS} from "@/constants/api.constants";

export const attireService = {
  async getAllAttire(tenant: string): Promise<Attire[]> {
    return await apiClient.request<Attire[]>(API_ENDPOINTS.ATTIRE.GET_ALL_PUBLIC(tenant));
  },

  async getAttireById(id: number, tenant: string): Promise<Attire> {
    return await apiClient.request<Attire>(API_ENDPOINTS.ATTIRE.GET_BY_ID_PUBLIC(tenant, id));
  },

  async checkAttireAvailability(code: string, rentDate: string, tenant: string) {
    return await apiClient.request<AttireAvailability>(API_ENDPOINTS.ATTIRE.CHECK_AVAILABILITY(tenant, code, rentDate));
  },
  
};

