import { setAuthTokenOnAxiosInterceptors } from "@/agent/agent";
import { createSlice } from "@reduxjs/toolkit";
import type { IAuthUser } from "../types/auth.type";
import Cookies from "js-cookie";
import { cookieKeys } from "@/constant/keyConstants";

interface IAuthState {
  isAuthenticated: boolean;
  authToken?: string;
  user: IAuthUser;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      setAuthTokenOnAxiosInterceptors(action.payload.authToken);
      state.authToken = action.payload.authToken;
      Cookies.set(cookieKeys.AUTH_TOKEN, action.payload.authToken);
      return state;
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      return state;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: () => {
      Cookies.remove(cookieKeys.AUTH_TOKEN);
      return initialState;
    },
  },
});

export const { authenticate, logout, setUser, setIsAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
