import authSlice from "@/pages/auth/reducers/auth.reducer";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    authSlice,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
