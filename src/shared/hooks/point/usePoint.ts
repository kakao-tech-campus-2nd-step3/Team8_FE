import {
  chargePoint,
  getPointInfo,
  getPointInfoQueryKey,
  PointData, // withdrawPoint,
  ChargePointResponse,
} from '../../api/point/point.api';
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

// 포인트 조회
export const useGetPointInfo = () => {
  return useQuery<PointData, Error>({
    queryKey: getPointInfoQueryKey,
    queryFn: getPointInfo,
  });
};

// 포인트 충전
export const useChargePoint = (): UseMutationResult<
  ChargePointResponse,
  Error,
  number
> => {
  return useMutation({
    mutationFn: (amount: number) => chargePoint({ price: amount }),
    onSuccess: (data: ChargePointResponse) => {
      alert(data.depositMessage);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
