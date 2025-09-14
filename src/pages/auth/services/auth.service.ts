import axiosInterceptors from "@/agent/agent";

export const createAccount = (data: any) =>
  axiosInterceptors.post("/v1/auth/register", data);

export const login = (data: any) =>
  axiosInterceptors.post("/v1/auth/login", data);

export const getUser = () => axiosInterceptors.get("/v1/auth/me");
