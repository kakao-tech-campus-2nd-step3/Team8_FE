import {
  chargePoint,
  getPointInfo,
  getPointInfoQueryKey,
  PointData,
  withdrawPoint,
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
    mutationFn: (price) => chargePoint(price),
    onSuccess: (data: ChargePointResponse) => {
      alert(data.depositMessage);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};

// 포인트 출금
export const useWithdrawPoint = (): UseMutationResult<
  number,
  Error,
  number
> => {
  return useMutation({
    mutationFn: (price) => withdrawPoint(price),
    onSuccess: (price: number) => {
      alert(`${price} 포인트 출금 신청 완료되었습니다.`);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
