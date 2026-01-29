import {apiClient} from "@/lib/client";
import {type Attire} from "@/types/attire.type";
import {API_ENDPOINTS} from "@/constants/api.constants";

export const attireService = {
  async getAllAttire(): Promise<Attire[]> {
    return await apiClient.request<Attire[]>(API_ENDPOINTS.ATTIRE.GET_ALL);
  },

  async getAttireById(id: number): Promise<Attire> {
    return await apiClient.request<Attire>(API_ENDPOINTS.ATTIRE.GET_BY_ID(id));
  },
};

