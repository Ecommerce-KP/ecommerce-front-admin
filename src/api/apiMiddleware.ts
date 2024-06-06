import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getLocalStorage } from "../lib/helpers/localStorageHelper";
import { redirect } from "react-router-dom";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // You can modify the request config before the request is sent
    // For example, add authentication token here
    const token = getLocalStorage("access_token");
    if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      redirect("/login");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
