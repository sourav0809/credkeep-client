import RegisterForm from "./components/RegisterForm";
import RegisterLeftSidePanel from "./components/RegisterLeftSidePanel";

export default function Register() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <RegisterLeftSidePanel />

      {/* Right Section - Register Form */}
      <RegisterForm />
    </div>
  );
}
