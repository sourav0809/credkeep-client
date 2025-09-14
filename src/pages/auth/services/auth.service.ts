import axiosInterceptors from "@/agent/agent";

export const createAccount = (data: any) =>
  axiosInterceptors.post("/auth/register", data);

export const login = (data: any) => axiosInterceptors.post("/auth/login", data);
