import { fetchInstance } from '../instance';
import { POINTS_QUERY_KEYS } from '@/shared/constants/point/pointQueryKey';

export type PointLogRequestParams = {
  page: number;
  size: number;
};

export type PointLogResponse = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: PointLogData[];
  number: number;
  numberOfElements: number;
  empty: boolean;
};

export type PointLogData = {
  postTime: string;
  content: string;
  price: number;
  status: string;
};

const getPointLogPath = () => '/api/points/logs';

// 쿼리 키
export const getPointLogQueryKey = (page: number) => [
  ...POINTS_QUERY_KEYS.LOGS,
  page,
];

// 포인트 로그 조회 API
export const getPointLogs = async (
  params: PointLogRequestParams
): Promise<PointLogResponse> => {
  const response = await fetchInstance.get(getPointLogPath(), {
    params,
  });
  return response.data;
};
