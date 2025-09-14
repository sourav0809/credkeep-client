import { Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginLeftSidePanel from "./components/LoginLeftSidePanel";
import { navigationPaths } from "@/common/constants/url.const";
import { useAppSelector } from "@/common/hooks/useAppSelector";

export default function Login() {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );
  if (isAuthenticated) {
    return <Navigate to={navigationPaths.DASHBOARD} />;
  }
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <LoginLeftSidePanel />

      {/* Right Section - Login Form */}
      <LoginForm />
    </div>
  );
}
