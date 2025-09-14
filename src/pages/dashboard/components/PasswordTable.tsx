import { motion } from "framer-motion";
import {
  MoreHorizontal,
  Eye,
  Copy,
  Edit,
  Trash2,
  ExternalLink,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../common/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/common/ui/dropdown-menu";
import { Button } from "../../../common/components/ui/button";
import { Badge } from "../../../common/components/ui/badge";
import type { Password } from "../types/password.types";

interface PasswordTableProps {
  passwords: Password[];
  onView: (password: Password) => void;
  onEdit: () => void;
  onDelete: () => void;
  onCopy: (text: string, type: string) => void;
}

export const PasswordTable = ({
  passwords,
  onView,
  onEdit,
  onDelete,
  onCopy,
}: PasswordTableProps) => {
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
      : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  if (passwords.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No passwords found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
          Get started by adding your first password to keep your accounts
          secure.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-700/50">
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Website</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Created</TableHead>
            <TableHead className="font-semibold w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {passwords.map((password, index) => (
            <motion.tr
              key={password.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
              onClick={() => onView(password)}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {password.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {password.name}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {password.url ? (
                  <a
                    href={password.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3 h-3" />
                    {password.url.replace(/^https?:\/\//, "")}
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">-</span>
                )}
              </TableCell>
              <TableCell>
                {password.category && (
                  <Badge
                    variant="secondary"
                    className={getCategoryColor(password.category)}
                  >
                    {password.category}
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(password.createdAt)}
              </TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      onClick={() => onView(password)}
                      className="cursor-pointer"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() =>
                        onCopy(
                          password.username || password.email || "",
                          "username"
                        )
                      }
                      className="cursor-pointer"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Username
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onCopy(password.password, "password")}
                      className="cursor-pointer"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Password
                    </DropdownMenuItem>
                    {password.url && (
                      <DropdownMenuItem
                        onClick={() => onCopy(password.url!, "url")}
                        className="cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Copy URL
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => onEdit()}
                      className="cursor-pointer"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onDelete()}
                      className="cursor-pointer text-red-600 dark:text-red-400"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
