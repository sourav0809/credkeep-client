import { motion } from "framer-motion";
import {
  Eye,
  Copy,
  Edit,
  Trash2,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../common/components/ui/card";
import { Button } from "../../../common/components/ui/button";
import { Badge } from "../../../common/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/common/ui/dropdown-menu";
import type { Password } from "../types/password.types";

interface PasswordCardProps {
  password: Password;
  index: number;
  onView: (password: Password) => void;
  onEdit: () => void;
  onDelete: () => void;
  onCopy: (text: string, type: string) => void;
}

export const PasswordCard = ({
  password,
  index,
  onView,
  onEdit,
  onDelete,
  onCopy,
}: PasswordCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCategoryColor = (category?: string) => {
    const colors = {
      Email: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      Development:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Finance: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      Entertainment:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      Shopping:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      Professional:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    };
    return category
      ? colors[category as keyof typeof colors] ||
          "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      : "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer h-full"
        onClick={() => onView(password)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {password.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {password.name}
                </h3>
                {password.category && (
                  <Badge
                    variant="secondary"
                    className={`mt-1 ${getCategoryColor(password.category)}`}
                  >
                    {password.category}
                  </Badge>
                )}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onView(password);
                  }}
                  className="cursor-pointer"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onCopy(
                      password.username || password.email || "",
                      "username"
                    );
                  }}
                  className="cursor-pointer"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Username
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onCopy(password.password, "password");
                  }}
                  className="cursor-pointer"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Password
                </DropdownMenuItem>
                {password.url && (
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      onCopy(password.url!, "url");
                    }}
                    className="cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Copy URL
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit();
                  }}
                  className="cursor-pointer"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="cursor-pointer text-red-600 dark:text-red-400"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex-1">
          <div className="space-y-3 h-full flex flex-col">
            {password.url && (
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Website
                </label>
                <a
                  href={password.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3" />
                  {password.url.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}

            <div className="mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Created {formatDate(password.createdAt)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
