import { AxiosRequestConfig } from "axios";
import baseRequest from "./base";

const client = {
  get: async (
    url: string,
    data: unknown = null,
    configs: AxiosRequestConfig = {}
  ) => {
    return baseRequest(url, "GET", data, configs);
  },
  post: async (
    url: string,
    data: unknown = null,
    configs: AxiosRequestConfig = {}
  ) => {
    return baseRequest(url, "POST", data, configs);
  },
  put: async (
    url: string,
    data: unknown = null,
    configs: AxiosRequestConfig = {}
  ) => {
    return baseRequest(url, "PUT", data, configs);
  },
  patch: async (
    url: string,
    data: unknown = null,
    configs: AxiosRequestConfig = {}
  ) => {
    return baseRequest(url, "PATCH", data, configs);
  },
  delete: async (url: string, configs: AxiosRequestConfig = {}) => {
    return baseRequest(url, "DELETE", null, configs);
  },
};

export default client