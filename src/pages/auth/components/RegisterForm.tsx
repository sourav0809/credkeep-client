import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import type { RegisterFormData } from "@/pages/auth/schema/auth";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [isSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: RegisterFormData) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600">
            Start your analytics journey today
          </p>
        </div>

        <form className="space-y-6" onSubmit={() => {}}>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <Label className=" text-base font-medium text-gray-700">
                Enter Your Email
              </Label>
              <Input
                name="email"
                type="email"
                autoFocus
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full py-2.5 h-10"
              />
            </div>
            <div className="flex flex-col gap-1 relative">
              <Label className="text-base font-medium text-gray-700">
                Enter Your Password
              </Label>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full py-2.5 h-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-10 text-gray-500 hover:text-gray-700 cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div id="clerk-captcha"></div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 h-10 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Just a Sec ...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>

        <div className="text-sm text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link
            to={"/login"}
            className="font-medium text-blue-600 hover:text-blue-500 underline"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
