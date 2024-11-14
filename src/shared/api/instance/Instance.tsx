import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

import { authStorage } from '../../utils/storage/authStorage';
import { ERROR_STATUS } from '@/shared';
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

export const BASE_URI = `https://sinitto.site`;

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
    const accessToken = authStorage.accessToken.get();
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
    if (
      error.response?.status === ERROR_STATUS.ACCESS_TOKEN_EXPIRATION &&
      !originalRequest._retry
    ) {
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
        body: JSON.stringify({ refreshToken }),
      });
      if (resp.ok) {
        console.log('토큰 재발급 성공');

        const data = await resp.json();

        authStorage.accessToken.set(data.accessToken);
        authStorage.refreshToken.set(data.refreshToken);

        return fetchInstance(originalRequest);
      } else if (
        resp.status === ERROR_STATUS.REFRESH_TOKEN_EXPIRATION ||
        resp.status === ERROR_STATUS.INVALID_REFRESH_TOKEN
      ) {
        console.log('토큰 재발급 실패');

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
