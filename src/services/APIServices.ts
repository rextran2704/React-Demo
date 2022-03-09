import axios, { AxiosRequestHeaders, AxiosResponse, Method } from "axios";
import { ACCESS_TOKEN, API_BASE_URL } from "../constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const request = <T>(
  method: Method,
  url: string,
  params?: any
): Promise<AxiosResponse<T>> => {
  let token = localStorage.getItem(ACCESS_TOKEN);

  let headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  return api.request<T>({
    method,
    url,
    headers,
    params,
  });
};

export default request;
