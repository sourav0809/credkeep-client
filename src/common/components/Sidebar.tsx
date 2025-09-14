import {
  Home,
  Settings,
  BookOpen,
  CheckCircle,
  BarChart2,
  FileText,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="group w-20 hover:w-64 z-40 h-screen transition-all duration-300 ease-in-out overflow-hidden bg-white border-r shadow-sm flex flex-col justify-between">
      {/* Top Section */}
      <div className="p-4 py-7">
        {/* Menu Items */}
        <div className="space-y-2 mt-5">
          {/* Dashboard */}
          <div className="flex items-center rounded-xl bg-muted text-primary hover:bg-muted/70 transition-all p-3 cursor-pointer">
            <Home className="h-5 w-5 flex-shrink-0 text-blue-600" />
            <span className="ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all font-medium whitespace-nowrap">
              Dashboard
            </span>
          </div>

          {/* Topics */}
          <div className="flex items-center rounded-xl hover:bg-muted transition-all p-3 cursor-pointer text-muted-foreground">
            <BookOpen className="h-5 w-5 flex-shrink-0" />
            <span className="ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all font-medium whitespace-nowrap">
              Topics
            </span>
          </div>

          {/* Practice */}
          <div className="flex items-center rounded-xl hover:bg-muted transition-all p-3 cursor-pointer text-muted-foreground">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all font-medium whitespace-nowrap">
              Practice
            </span>
          </div>

          {/* Quizzes */}
          <div className="flex items-center rounded-xl hover:bg-muted transition-all p-3 cursor-pointer text-muted-foreground">
            <FileText className="h-5 w-5 flex-shrink-0" />
            <span className="ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all font-medium whitespace-nowrap">
              Quizzes
            </span>
          </div>

          {/* Progress */}
          <div className="flex items-center rounded-xl hover:bg-muted transition-all p-3 cursor-pointer text-muted-foreground">
            <BarChart2 className="h-5 w-5 flex-shrink-0" />
            <span className="ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all font-medium whitespace-nowrap">
              Progress
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Icons (e.g., Settings) */}
      <div className="p-4">
        <div className="flex items-center rounded-xl hover:bg-muted transition-all p-3 cursor-pointer text-muted-foreground">
          <Settings className="h-5 w-5 flex-shrink-0" />
          <span className="ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all font-medium whitespace-nowrap">
            Settings
          </span>
        </div>
      </div>
    </div>
  );
}
