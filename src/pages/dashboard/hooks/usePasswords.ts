import { useState, useMemo } from "react";
import type {
  Password,
  PasswordFilters,
  PaginationState,
} from "../types/password.types";

// Mock data - replace with actual API calls later
const mockPasswords: Password[] = [
  {
    id: "1",
    name: "Gmail",
    username: "john.doe@gmail.com",
    email: "john.doe@gmail.com",
    password: "SecurePass123!",
    url: "https://gmail.com",
    category: "Email",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
    notes: "Primary email account",
  },
  {
    id: "2",
    name: "GitHub",
    username: "johndoe",
    password: "GitHubSecure456!",
    url: "https://github.com",
    category: "Development",
    createdAt: "2024-01-16T14:20:00Z",
    updatedAt: "2024-01-16T14:20:00Z",
  },
  {
    id: "3",
    name: "Netflix",
    username: "john.doe@email.com",
    password: "NetflixWatch789!",
    url: "https://netflix.com",
    category: "Entertainment",
    createdAt: "2024-01-17T09:15:00Z",
    updatedAt: "2024-01-17T09:15:00Z",
    notes: "Family account",
  },
  {
    id: "4",
    name: "Bank of America",
    username: "john.doe",
    password: "BankSecure101!",
    url: "https://bankofamerica.com",
    category: "Finance",
    createdAt: "2024-01-18T16:45:00Z",
    updatedAt: "2024-01-18T16:45:00Z",
    notes: "Checking account",
  },
  {
    id: "5",
    name: "Amazon",
    username: "john.doe@amazon.com",
    email: "john.doe@amazon.com",
    password: "AmazonShop202!",
    url: "https://amazon.com",
    category: "Shopping",
    createdAt: "2024-01-19T11:30:00Z",
    updatedAt: "2024-01-19T11:30:00Z",
  },
  {
    id: "6",
    name: "LinkedIn",
    username: "john.doe",
    password: "LinkedInConnect303!",
    url: "https://linkedin.com",
    category: "Professional",
    createdAt: "2024-01-20T13:20:00Z",
    updatedAt: "2024-01-20T13:20:00Z",
  },
];

export const usePasswords = () => {
  const [passwords] = useState<Password[]>(mockPasswords);
  const [filters, setFilters] = useState<PasswordFilters>({ search: "" });
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: 10,
    total: mockPasswords.length,
  });

  const filteredPasswords = useMemo(() => {
    return passwords.filter((password) => {
      const matchesSearch =
        !filters.search ||
        password.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        password.username
          .toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        (password.email &&
          password.email
            .toLowerCase()
            .includes(filters.search.toLowerCase())) ||
        (password.url &&
          password.url.toLowerCase().includes(filters.search.toLowerCase()));

      const matchesCategory =
        !filters.category || password.category === filters.category;

      return matchesSearch && matchesCategory;
    });
  }, [passwords, filters]);

  const paginatedPasswords = useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return filteredPasswords.slice(startIndex, endIndex);
  }, [filteredPasswords, pagination.page, pagination.pageSize]);

  const totalPages = Math.ceil(filteredPasswords.length / pagination.pageSize);

  const updateFilters = (newFilters: Partial<PasswordFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setPagination((prev) => ({ ...prev, page: 1 })); // Reset to first page when filtering
  };

  const updatePagination = (newPagination: Partial<PaginationState>) => {
    setPagination((prev) => ({ ...prev, ...newPagination }));
  };

  return {
    passwords: paginatedPasswords,
    totalPasswords: filteredPasswords.length,
    filters,
    pagination: { ...pagination, total: filteredPasswords.length },
    totalPages,
    updateFilters,
    updatePagination,
  };
};
