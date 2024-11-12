import { useState } from 'react';

import { CostHelloCallRequest, TimeSlots } from '../types';
import { usePostCostHelloCall } from './usePostCostHelloCall';
import { useSortDays } from './useSortDays';

export const useServiceTotal = (
  serviceTime: number,
  startDate: Date | null,
  endDate: Date | null,
  timeSlotsArray: TimeSlots[],
  setPrice: (price: number) => void
) => {
  const [totalServiceCount, setTotalServiceCount] = useState<number | null>(0);
  const { mutate: postCostHelloCall } = usePostCostHelloCall();

  const sortedTimeSlotsArray = useSortDays(timeSlotsArray);

  const isButtonDisabled = serviceTime === 0;

  const calculatePoint = () => {
    const requestPayload: CostHelloCallRequest = {
      serviceTime,
      startDate: startDate?.toISOString() || '',
      endDate: endDate?.toISOString() || '',
      timeSlots: sortedTimeSlotsArray,
    };

    postCostHelloCall(requestPayload, {
      onSuccess: (data) => {
        setPrice(data.price);
        setTotalServiceCount(data.totalServiceCount);
      },
    });
  };

  return { totalServiceCount, isButtonDisabled, calculatePoint };
};
