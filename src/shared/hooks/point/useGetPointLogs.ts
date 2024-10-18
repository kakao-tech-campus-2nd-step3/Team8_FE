import {
  getPointLogQueryKey,
  getPointLogs,
  PointLogRequestParams,
  PointLogResponse,
} from '../../api/point/point-log.api';
import { useQuery } from '@tanstack/react-query';

// 포인트 로그 조회 훅
export const useGetPointLogs = (page: number, size: number) => {
  const params: PointLogRequestParams = {
    page,
    size,
  };

  return useQuery<PointLogResponse, Error>({
    queryKey: getPointLogQueryKey(page),
    queryFn: () => getPointLogs(params),
  });
};
