export type RequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface PaginationData<T> {
  records: T[];
  page: number;
  limit: number;
  total: number;
}

export interface FilterParams {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: OrderType;
  [key: string]: string | number | undefined | number[] | string[];
}

export interface ApiResponse<T> {
  status: boolean;
  data: T;
  message?: string;
  errors?: {
    [key: string]: string;
  };
}

export interface RequestError {
  message?: string;
  code?: number;
  errors?: {
    [key: string]: string;
  };
}

export type CreateParams<T> = Omit<T, "id">;

export type UpdateParams<T> = Partial<Omit<T, "id">>;

export type OrderType = "asc" | "desc";

export type LoadingStatus = 'idle' | 'pending' | 'succeeded' | 'failed'