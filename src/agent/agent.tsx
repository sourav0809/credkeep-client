import { envConfig } from "@/config/envConfig";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { cookieKeys } from "@/constant/keyConstants";

const axiosInterceptors = axios.create({
  baseURL: envConfig.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get(cookieKeys.AUTH_TOKEN) || ""}`,
  },
});

export const setAuthTokenOnAxiosInterceptors = (authToken: string) => {
  axiosInterceptors.defaults.headers["Authorization"] = `Bearer ${authToken}`;
  axiosInterceptors.defaults.headers["Content-Type"] = `application/json`;
};

axiosInterceptors.interceptors.request.use((config) => {
  const token = Cookies.get(cookieKeys.AUTH_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInterceptors.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return {
      ...response,
      data: data?.data || data,
    };
  },
  (error: AxiosError) => {
    const { response } = error;
    const data: any = response?.data;
    const message = data?.error || data?.message || error.message;
    toast.error(message);
    return Promise.reject({
      ...error,
      message,
    });
  }
);

export default axiosInterceptors;
