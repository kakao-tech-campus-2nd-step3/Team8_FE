import { ServiceDetailResponse } from '../types';

export const useServiceDate = (
  serviceDate: ServiceDetailResponse['startDate'] | undefined
) => {
  if (!serviceDate) {
    return '';
  }

  const date = new Date(serviceDate);
  const month = date.getMonth() + 1;
  const day = date.getDate().toString().padStart(2, '0');

  return `${month}월 ${day}일`;
};
