import { fetchInstance } from '../instance';

export type PointData = {
  price: number;
};

export type ChargePointResponse = {
  depositMessage: string;
};

const pointApiPath = 'api/points';

// 쿼리 키
export const getPointInfoQueryKey = ['points'];
export const withdrawPointQueryKey = ['withdrawPoint'];
export const chargePointQueryKey = ['chargePoint'];

// 포인트 조회 API
export const getPointInfo = async () => {
  const response = await fetchInstance.get(pointApiPath);
  console.log(response.data);
  return response.data as PointData;
};

// 포인트 인출 API
export const withdrawPoint = async (price: number) => {
  const response = await fetchInstance.post(`${pointApiPath}/withdraw`, {
    price: price,
  });
  alert(`${price} 포인트 출금 신청 완료되었습니다.`);
  return response.data;
};

// 포인트 충전 API
export const chargePoint = async (price: number) => {
  const response = await fetchInstance.put(`${pointApiPath}/charge`, {
    price: price,
  });
  return response.data as ChargePointResponse;
};
