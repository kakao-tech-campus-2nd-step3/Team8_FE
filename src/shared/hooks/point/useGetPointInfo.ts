import {
  getPointInfo,
  getPointInfoQueryKey,
  PointData,
} from '../../api/point/point.api';
import { useQuery } from '@tanstack/react-query';

// 포인트 조회
export const useGetPointInfo = () => {
  return useQuery<PointData, Error>({
    queryKey: getPointInfoQueryKey,
    queryFn: getPointInfo,
  });
};
