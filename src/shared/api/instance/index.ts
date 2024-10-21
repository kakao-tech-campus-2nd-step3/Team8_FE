import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

import { BASE_URI } from '@/shared';
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

fetchInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');

      if (!refreshToken) {
        return Promise.reject(error);
      }
      const resp = await fetch(`${BASE_URI}/api/auth/refresh`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Cross-Control-Allow-Origin': '*',
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      if (resp.ok) {
        console.log('토큰 재발급 성공');

        const data = await resp.json();

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return fetchInstance(originalRequest);
      } else {
        console.log('토큰 재발급 실패');

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
