import axios, { AxiosError, AxiosResponse, Method } from "axios";
import { serverData } from "../constants/serverData";
import { errorResponseHandler } from "./helper";

interface ApiRequestConfig {
  url: string;
  method?: Method;
  data?: unknown;
  params?: Record<string, unknown>;
  pathParams?: Record<string, string | number>;
}

interface ApiResponse<T = unknown> {
  status: "success" | "fail" | "error" | "unauthorized";
  statusCode: number;
  data?: T;
  message?: string;
  errors?: unknown[];
}

interface QueryParamsConfig {
  pageNum?: number;
  pageSize?: number;
  ids?: Record<string, string | number>;
  filters?: Record<string, unknown>;
  [key: string]: unknown;
}

// Helper functions
const replacePathParams = (url: string, pathParams?: Record<string, string | number>): string => {
  if (!pathParams) return url;
  return Object.entries(pathParams).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, String(value)),
    url
  );
};

const buildURL = (url: string, params?: Record<string, unknown>): string => {
  const queryString = params ? `?${new URLSearchParams(params as Record<string, string>)}` : "";
  return `${serverData.baseURL}${url}${queryString}`;
};

const getAuthHeader = (): { Authorization: string; "request-from": string } => ({
  // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "request-from": "WEB",
});

// Unified API request handler
const apiRequest = async <T = unknown>(config: ApiRequestConfig): Promise<ApiResponse<T>> => {
  let fullUrl: string;
  
  try {
    const { method = "GET", url, data, params, pathParams } = config;
    const processedUrl = replacePathParams(url, pathParams);
    fullUrl = buildURL(processedUrl, params);

    // Request logging
    console.log(`API Request: ${method?.toUpperCase()} ${fullUrl}`);
    console.log("Endpoint:", fullUrl);
    console.log("Method:", method);
    console.log("Parameters:", params);
    console.log("Request Body:", data);
    console.log();

    const response = await axios({
      method,
      url: fullUrl,
      headers: getAuthHeader(),
      data,
      params,
    });

    // Response logging
    console.log(`API Response: ${method?.toUpperCase()} ${fullUrl}`);
    console.log("Status:", response.status);
    console.log("Response Data:", response.data);
    console.log();

    return handleResponse<T>(response);
  } catch (error) {
    const axiosError = error as AxiosError;

    // Error logging
    console.log(`API Error: ${config.method?.toUpperCase() || 'GET'} ${fullUrl || config.url}`);
    console.log("Error Message:", axiosError.message);
    if (axiosError.response) {
      console.log("Error Status:", axiosError.response.status);
      console.log("Error Response:", axiosError.response.data);
    }
    console.log("Error Config:", axiosError.config);
    console.log();

    const errorResponse = axiosError.response || {
      status: 500,
      data: { message: axiosError.message || "Network Error" },
    };
    errorResponseHandler(errorResponse.data);
    return handleResponse<T>(errorResponse as AxiosResponse);
  }
};

// HTTP method shortcuts
export const http = {
  get: <T = unknown>(config: Omit<ApiRequestConfig, "method" | "data">) =>
    apiRequest<T>({ ...config, method: "GET" }),
  post: <T = unknown>(config: Omit<ApiRequestConfig, "method">) =>
    apiRequest<T>({ ...config, method: "POST" }),
  put: <T = unknown>(config: Omit<ApiRequestConfig, "method">) =>
    apiRequest<T>({ ...config, method: "PUT" }),
  patch: <T = unknown>(config: Omit<ApiRequestConfig, "method">) =>
    apiRequest<T>({ ...config, method: "PATCH" }),
  delete: <T = unknown>(config: Omit<ApiRequestConfig, "method">) =>
    apiRequest<T>({ ...config, method: "DELETE" }),
};

// Optimized query params creator
export const createQueryParams = (config: QueryParamsConfig = {}): Record<string, unknown> => {
  const { pageNum = 1, pageSize = 10, ids = {}, filters = {}, ...rest } = config;


  const params: Record<string, unknown> = {

    pageNum,
    pageSize,
    ...ids,
    ...filters,
    ...rest,
  };

  // Clean null/undefined values
  Object.keys(params).forEach((key) => params[key] == null && delete params[key]);
  return params;
};

// Response handler
const handleResponse = <T = unknown>(response: AxiosResponse): ApiResponse<T> => {
  const { status, data } = response;
  const result: ApiResponse<T> = {
    statusCode: status,
    status: "success"
  };

  if (status >= 200 && status < 300) {
    result.status = "success";
    result.data = data?.response ?? data;
  } else {
    result.status = status === 401 ? "unauthorized" : status >= 400 && status < 500 ? "fail" : "error";
    result.message = data?.message || "An error occurred";
    result.errors = data?.errors;
  }

  return result;
};

// LocalStorage helper with error handling
export const getLocalStorageData = <T = unknown>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error("LocalStorage parse error:", error);
    return null;
  }
};

