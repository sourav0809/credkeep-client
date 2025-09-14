import type { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate } from "../reducers/auth.reducer";
import { createAccount } from "../services/auth.service";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { cookieKeys } from "@/constant/keyConstants";

export const register = (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  return async (dispatch: AppDispatch) => {
    const response = await createAccount(formData);
    const { token, user } = response.data;
    dispatch(authenticate({ authToken: token, user }));
    Cookies.set(cookieKeys.AUTH_TOKEN, token);

    toast.success("Account created successfully");
  };
};
