import { CheckCircle, Clock, Calendar, Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";

const stats = [
  {
    title: "Solved",
    value: "42",
    icon: CheckCircle,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Due Today",
    value: "5",
    icon: Clock,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Upcoming",
    value: "8",
    icon: Calendar,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Streak",
    value: "7",
    icon: Trophy,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.title}
            className="group border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div
                className={`p-2 rounded-lg flex items-center justify-center ${stat.bgColor} transition-transform duration-300 group-hover:rotate-[8deg]`}
              >
                <Icon className={`size-8 ${stat.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-semibold text-card-foreground">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
