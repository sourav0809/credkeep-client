import { useAppSelector } from "@/common/hooks/useAppSelector";
import RegisterForm from "./components/RegisterForm";
import RegisterLeftSidePanel from "./components/RegisterLeftSidePanel";
import { Navigate } from "react-router-dom";
import { navigationPaths } from "@/common/constants/url.const";

export default function Register() {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );
  if (isAuthenticated) {
    return <Navigate to={navigationPaths.DASHBOARD} />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <RegisterLeftSidePanel />

      {/* Right Section - Register Form */}
      <RegisterForm />
    </div>
  );
}
