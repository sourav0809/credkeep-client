import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );

  return !isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthGuard;
