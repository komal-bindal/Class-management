import axios, { AxiosRequestConfig } from "axios";
import { CANCEL } from "redux-saga";

export const BASE_URL = "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN = "login_token";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) {
    return config;
  }
  return {
    ...config,
    headers: { ...config.headers, Authorization: token },
  };
});

axios.interceptors.response.use(undefined, function (error) {
  if (error.response?.data?.code === 9101) {
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

export function get<T>(url: string, config?: AxiosRequestConfig) {
  const { cancel, token } = axios.CancelToken.source();
  const response = axios.get<T>(url, { ...config, cancelToken: token });
  response[CANCEL] = cancel;
  return response;
}
