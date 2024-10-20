import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

import { BASE_URI } from '@/shared/constants';
import { authLocalStorage } from '@/shared/utils/storage';
import { QueryClient } from '@tanstack/react-query';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cross-Control-Allow-Origin': '*',

      ...config.headers,
    },
  });

  return instance;
};

export const fetchInstance = initInstance({
  baseURL: BASE_URI,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});

fetchInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = authLocalStorage.get();
    if (accessToken !== undefined) {
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
