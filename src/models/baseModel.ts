import client from "../services/request/client";
import {
  CreateParams,
  FilterParams,
  PaginationData,
  RequestError,
  UpdateParams,
} from "../types/request";

export default abstract class BaseModel<T, F = unknown> {
  protected abstract url: string;

  create = (
    data: CreateParams<T>
  ): Promise<[T | undefined, RequestError | undefined]> => {
    return client.post(this.url, data);
  };

  createForm = (
    data: CreateParams<T>
  ): Promise<[T | undefined, RequestError | undefined]> => {
    return client.post(this.url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  getOne = (
    id?: string,
    params?: FilterParams
  ): Promise<[T | undefined, RequestError | undefined]> => {
    return client.get(`${this.url}${id ? `/${id}` : ""}`, params);
  };

  getAll = (
    params?: F
  ): Promise<[PaginationData<T> | undefined, RequestError | undefined]> => {
    return client.get(this.url, params);
  };

  getAllNoPaginate = (
    params?: F
  ): Promise<[T[] | undefined, RequestError | undefined]> => {
    return client.get(`${this.url}/all`, params);
  };

  update = (
    data: UpdateParams<T>,
    id?: string
  ): Promise<[T | undefined, RequestError | undefined]> => {
    return client.put(`${this.url}${id ? `/${id}` : ""}`, data);
  };

  updateForm = (
    data: UpdateParams<T>,
    id?: string
  ): Promise<[T | undefined, RequestError | undefined]> => {
    return client.post(`${this.url}${id ? `/${id}` : ""}?_method=PUT`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  delete = (id: string): Promise<[undefined, RequestError | undefined]> => {
    return client.delete(`${this.url}/${id}`);
  };

  deleteMany = (
    ids: string[]
  ): Promise<[undefined, RequestError | undefined]> => {
    const query = ids.join(",");
    return client.delete(`${this.url}?ids=${query}`);
  };

  deleteManyRecords = (
    ids: string[]
  ): Promise<[undefined, RequestError | undefined]> => {
    return client.delete(this.url, { params: { ids } });
  };

  exportCSV = (
    params?: FilterParams
  ): Promise<[File | undefined, RequestError | undefined]> => {
    return client.get(`${this.url}/export`, params);
  };

  exportCSVTemplate = (
    params?: FilterParams
  ): Promise<[File | undefined, RequestError | undefined]> => {
    return client.get(`${this.url}/example-import-template`, params);
  };
}
