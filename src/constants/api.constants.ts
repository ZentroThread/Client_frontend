export const API_ENDPOINTS = {
  
  ATTIRE: {
    ADD: "/v1/attire/add",
    GET_ALL: "/v1/attire/all",
    RESERVE: "/v1/attire/reserve",
    UNRESERVE: "/v1/attire/unreserve",
    DELETE: (id: number) => `/v1/attire/delete/${id}`,
    UPDATE: (id: number) => `/v1/attire/update/${id}`,
  },

};
