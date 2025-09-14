/* eslint-disable no-useless-catch */
import type { AppDispatch } from "@/common/hooks/useAppDispatch";
import { authenticate } from "../reducers/auth.reducer";
import { login } from "../services/auth.service";

export const loginAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await login(formData);
      const { authToken, user } = response.data;
      dispatch(authenticate({ authToken, user }));
    } catch (error) {
      throw error;
    }
  };
};
