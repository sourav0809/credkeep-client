/* eslint-disable react-hooks/exhaustive-deps */
import { getUser } from "@/pages/auth/services/auth.service";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { logout, setUser } from "@/pages/auth/reducers/auth.reducer";
import { useEffect, useState } from "react";
import { getAuthToken } from "../helpers/auth";
import { toast } from "sonner";
import { setAuthTokenOnAxiosInterceptors } from "@/agent/agent";

const useFetchUser = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );

  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    if (!getAuthToken()) {
      dispatch(logout());
      return;
    }
    if (isAuthenticated) {
      return;
    }

    setAuthTokenOnAxiosInterceptors(getAuthToken() || "");

    setIsLoading(true);
    try {
      const response = await getUser();
      const data = {
        ...response?.data,
        authToken: getAuthToken(),
      };

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 5000)
      );

      dispatch(setUser(data));
    } catch (error: any) {
      dispatch(logout());
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { isLoading };
};

export default useFetchUser;
