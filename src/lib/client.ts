import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosError,
} from "axios";
import { API_BASE_URL } from "@/constants/constdata";

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor – logging only
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor – basic error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error("API Error:", {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

// API helper wrapper
export const apiClient = {
  async request<T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response = await axiosInstance.request<T>({
      url: endpoint,
      ...options,
    });
    return response.data;
  },

  async requestText(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<string> {
    const response = await axiosInstance.request<string>({
      url: endpoint,
      responseType: "text",
      ...options,
    });
    return response.data;
  },

  async upload<T>(endpoint: string, formData: FormData): Promise<T> {
    const response = await axiosInstance.post<T>(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  async uploadPut<T>(endpoint: string, formData: FormData): Promise<T> {
    const response = await axiosInstance.put<T>(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
