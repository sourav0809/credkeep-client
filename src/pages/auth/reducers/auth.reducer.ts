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
    },
    setUser: (state, action) => {
      const { authToken, ...user } = action.payload;
      setAuthTokenOnAxiosInterceptors(action.payload.authToken);
      state.user = { ...state.user, ...user };
      state.isAuthenticated = true;
      state.authToken = authToken;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        id: "",
        name: "",
        email: "",
      };
      Cookies.remove(cookieKeys.AUTH_TOKEN);
    },
  },
});

export const { authenticate, logout, setUser, setIsAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
