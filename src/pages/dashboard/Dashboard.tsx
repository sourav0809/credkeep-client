import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid3X3, List, Shield, Key } from "lucide-react";
import { Input } from "../../common/components/ui/input";
import { Button } from "../../common/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../common/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../components/common/ui/pagination";
import { Separator } from "../../components/common/ui/separator";
import { usePasswords } from "./hooks/usePasswords";
import { PasswordTable } from "./components/PasswordTable";
import { PasswordCard } from "./components/PasswordCard";
import { AddPasswordDialog } from "./components/AddPasswordDialog";
import { PasswordDrawer } from "./components/PasswordDrawer";
import { toast } from "sonner";
import type { Password } from "./types/password.types";

const Dashboard = () => {
  const {
    passwords,
    totalPasswords,
    filters,
    pagination,
    totalPages,
    updateFilters,
    updatePagination,
  } = usePasswords();

  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPassword, setSelectedPassword] = useState<Password | null>(
    null
  );

  const categories = [
    "All",
    "Email",
    "Development",
    "Finance",
    "Entertainment",
    "Shopping",
    "Professional",
    "Social",
    "Other",
  ];

  const handleSearch = (value: string) => {
    updateFilters({ search: value });
  };

  const handleCategoryFilter = (category: string) => {
    updateFilters({ category: category === "All" ? undefined : category });
  };

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard!`
      );
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleAddPassword = () => {
    // In a real app, this would make an API call
    toast.success("Password added successfully!");
    // For now, we'll just show a success message
    // The hook would need to be updated to handle adding passwords
  };

  const handleViewPassword = (password: Password) => {
    setSelectedPassword(password);
    setDrawerOpen(true);
  };

  const handleEditPassword = () => {
    // In a real app, this would open an edit dialog
    toast.info("Edit functionality coming soon!");
  };

  const handleDeletePassword = () => {
    // In a real app, this would show a confirmation dialog
    toast.info("Delete functionality coming soon!");
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedPassword(null);
  };

  const handlePageChange = (page: number) => {
    updatePagination({ page });
  };

  return (
    <motion.div
      className="flex-1 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              Password Vault
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Securely manage all your passwords in one place
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <AddPasswordDialog onAdd={handleAddPassword} />
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Total Passwords
                </p>
                <p className="text-2xl font-bold">{totalPasswords}</p>
              </div>
              <Key className="w-8 h-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Categories</p>
                <p className="text-2xl font-bold">{categories.length - 1}</p>
              </div>
              <Filter className="w-8 h-8 text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">
                  This Month
                </p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Shield className="w-8 h-8 text-purple-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Security Score
                </p>
                <p className="text-2xl font-bold">95%</p>
              </div>
              <Shield className="w-8 h-8 text-orange-200" />
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search passwords..."
                  value={filters.search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={filters.category || "All"}
                onValueChange={handleCategoryFilter}
              >
                <SelectTrigger className="w-full sm:w-[140px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              {/* Pagination in top right */}
              {totalPages > 1 && (
                <Pagination className="hidden sm:block">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          pagination.page > 1 &&
                          handlePageChange(pagination.page - 1)
                        }
                        className={
                          pagination.page <= 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <span className="text-sm text-gray-600 dark:text-gray-400 px-2">
                        Page {pagination.page} of {totalPages}
                      </span>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          pagination.page < totalPages &&
                          handlePageChange(pagination.page + 1)
                        }
                        className={
                          pagination.page >= totalPages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}

              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="hidden sm:flex"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="hidden sm:flex"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        <Separator />

        {/* Password Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {viewMode === "table" ? (
            <PasswordTable
              passwords={passwords}
              onView={handleViewPassword}
              onEdit={handleEditPassword}
              onDelete={handleDeletePassword}
              onCopy={handleCopy}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {passwords.map((password, index) => (
                <PasswordCard
                  key={password.id}
                  password={password}
                  index={index}
                  onView={handleViewPassword}
                  onEdit={handleEditPassword}
                  onDelete={handleDeletePassword}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          )}

          {passwords.length === 0 && totalPasswords > 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                No passwords match your search criteria.
              </p>
            </div>
          )}
        </motion.div>

        {/* Password Drawer */}
        <PasswordDrawer
          password={selectedPassword}
          open={drawerOpen}
          onClose={handleCloseDrawer}
          onEdit={handleEditPassword}
          onDelete={handleDeletePassword}
          onCopy={handleCopy}
        />
      </div>
    </motion.div>
  );
};

export default Dashboard;
