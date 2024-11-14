import { getPointInfo, PointData } from '../../api/point/point.api';
import { POINTS_QUERY_KEYS } from '@/shared/constants';
import { useQuery } from '@tanstack/react-query';

// 포인트 조회
export const useGetPointInfo = () => {
  return useQuery<PointData, Error>({
    queryKey: POINTS_QUERY_KEYS.INFO,
    queryFn: getPointInfo,
  });
};
