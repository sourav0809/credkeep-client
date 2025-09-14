import { BarChart2, PieChart, TrendingUp } from "lucide-react";

const RegisterLeftSidePanel = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div className="relative w-full h-full flex items-center justify-center p-12">
        <div className="text-white space-y-8 max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Unlock the Power of Trackify
          </h1>
          <p className="text-xl text-blue-100">
            Join thousands of teams growing smarter with real-time insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <BarChart2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-blue-100">Real-time Analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-blue-100">Visual Reports</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-blue-100">Growth Insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLeftSidePanel;
