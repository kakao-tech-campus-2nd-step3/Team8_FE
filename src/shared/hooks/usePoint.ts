import {
  chargePoint,
  getPointInfo,
  getPointInfoQueryKey,
  PointData, // withdrawPoint,
  ChargePointResponse,
} from '../api/point/point.api';
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

// 경로에 맞게 수정

// 포인트 정보 훅
export const useGetPointInfo = () => {
  return useQuery<PointData, Error>({
    queryKey: getPointInfoQueryKey,
    queryFn: getPointInfo,
  });
};

export const useChargePoint = (): UseMutationResult<
  ChargePointResponse,
  Error,
  PointData
> => {
  return useMutation({
    mutationFn: chargePoint,
    onSuccess: (data: ChargePointResponse) => {
      alert(data.depositMessage);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
