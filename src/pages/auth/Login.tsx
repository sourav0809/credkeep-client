import LoginForm from "./components/LoginForm";
import LoginLeftSidePanel from "./components/LoginLeftSidePanel";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <LoginLeftSidePanel />

      {/* Right Section - Login Form */}
      <LoginForm />
    </div>
  );
}
