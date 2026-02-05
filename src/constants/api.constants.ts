export const API_ENDPOINTS = {
  ATTIRE: {
    GET_ALL_PUBLIC: (tenant: string) =>
      `/v1/public/${tenant}/attire`,

    GET_BY_ID_PUBLIC: (tenant: string, id: number) =>
      `/v1/public/${tenant}/attire/${id}`,

    CHECK_AVAILABILITY: (tenant: string, code: string, rentDate: string) =>
      `/v1/public/${tenant}/attire/${code}/availability?rentDate=${rentDate}`,
  },

  TENANT: {
    GET_ALL: () => `/api/v1/tenant/all`,
  },
};
