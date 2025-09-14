import type { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate } from "../reducers/auth.reducer";
import { createAccount } from "../services/auth.service";

export const register = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    const response = await createAccount(formData);
    const { authToken, user } = response.data;
    dispatch(authenticate({ authToken, user }));
  };
};
