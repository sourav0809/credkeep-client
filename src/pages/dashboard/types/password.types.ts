export interface Password {
  id: string;
  name: string;
  username: string;
  email?: string;
  password: string;
  url?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface PasswordFilters {
  search: string;
  category?: string;
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}
