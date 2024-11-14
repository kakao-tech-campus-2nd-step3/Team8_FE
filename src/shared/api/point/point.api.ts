import { fetchInstance } from '../instance';
import { POINTS_QUERY_KEYS } from '@/shared/constants/point/pointQueryKey';

export type PointData = {
  price: number;
};

export type ChargePointResponse = {
  depositMessage: string;
};

const POINT_PATH = {
  INFO: '/api/points',
  WITHDRAW: '/api/points/withdraw',
  CHARGE: '/api/points/charge',
};

// 쿼리 키
export const getPointInfoQueryKey = [...POINTS_QUERY_KEYS.INFO];
export const withdrawPointQueryKey = [...POINTS_QUERY_KEYS.WITHDRAW];
export const chargePointQueryKey = [...POINTS_QUERY_KEYS.CHARGE];

// 포인트 조회 API
export const getPointInfo = async (): Promise<PointData> => {
  const response = await fetchInstance.get(POINT_PATH.INFO);
  return response.data;
};

// 포인트 인출 API
export const withdrawPoint = async (price: number) => {
  const response = await fetchInstance.post(POINT_PATH.WITHDRAW, {
    price,
  });
  return response.data;
};

// 포인트 충전 API
export const chargePoint = async (
  price: number
): Promise<ChargePointResponse> => {
  const response = await fetchInstance.put(POINT_PATH.CHARGE, {
    price,
  });
  return response.data;
};
