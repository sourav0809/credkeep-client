import { Eye, EyeOff, Copy, Edit, Trash2, ExternalLink, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../../../components/common/ui/drawer";
import { Button } from "../../../components/common/ui/button";
import { Badge } from "../../../common/components/ui/badge";
import { Separator } from "../../../components/common/ui/separator";
import { useState } from "react";
import type { Password } from "../types/password.types";

interface PasswordDrawerProps {
  password: Password | null;
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCopy: (text: string, type: string) => void;
}

export const PasswordDrawer = ({
  password,
  open,
  onClose,
  onEdit,
  onDelete,
  onCopy,
}: PasswordDrawerProps) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!password) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
      : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent
        data-vaul-drawer-direction="right"
        className="h-full w-full max-w-md overflow-y-auto"
      >
        <DrawerHeader className="px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {password.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <DrawerTitle className="text-xl font-semibold text-left">
                  {password.name}
                </DrawerTitle>
                <DrawerDescription className="text-left">
                  Password details and credentials
                </DrawerDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DrawerHeader>

        <div className="px-6 pb-6 space-y-6">
          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() =>
                onCopy(password.username || password.email || "", "username")
              }
              variant="outline"
              className="flex-1"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Username
            </Button>
            <Button
              onClick={() => onCopy(password.password, "password")}
              variant="outline"
              className="flex-1"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Password
            </Button>
            <Button onClick={onEdit} variant="outline">
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              onClick={onDelete}
              variant="outline"
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <Separator />

          {/* Password Details */}
          <div className="space-y-4">
            {/* Category */}
            {password.category && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Category
                </label>
                <div className="mt-2">
                  <Badge
                    variant="secondary"
                    className={getCategoryColor(password.category)}
                  >
                    {password.category}
                  </Badge>
                </div>
              </div>
            )}

            {/* Username */}
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Username / Email
              </label>
              <div className="mt-2 flex items-center gap-2">
                <code className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded flex-1">
                  {password.username || password.email}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    onCopy(
                      password.username || password.email || "",
                      "username"
                    )
                  }
                  className="shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Password
              </label>
              <div className="mt-2 flex items-center gap-2">
                <code className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded flex-1">
                  {showPassword
                    ? password.password
                    : "•".repeat(password.password.length)}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="shrink-0"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy(password.password, "password")}
                  className="shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Website */}
            {password.url && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Website
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href={password.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 flex-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {password.url.replace(/^https?:\/\//, "")}
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopy(password.url!, "url")}
                    className="shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Notes */}
            {password.notes && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Notes
                </label>
                <div className="mt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    {password.notes}
                  </p>
                </div>
              </div>
            )}

            <Separator />

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-500 dark:text-gray-400">
                  Created:
                </span>
                <p className="text-gray-900 dark:text-gray-100 mt-1">
                  {formatDate(password.createdAt)}
                </p>
              </div>
              <div>
                <span className="font-medium text-gray-500 dark:text-gray-400">
                  Last Updated:
                </span>
                <p className="text-gray-900 dark:text-gray-100 mt-1">
                  {formatDate(password.updatedAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
