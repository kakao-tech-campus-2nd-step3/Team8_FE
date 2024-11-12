import { useNavigate } from 'react-router-dom';

import { ApplyHelloCallRequest, TimeSlots } from '../types';
import { usePostApplyHelloCall } from './usePostApplyHelloCall';

type UseServiceApplyProps = {
  serviceTime: number;
  startDate: Date | null;
  endDate: Date | null;
  timeSlotsArray: TimeSlots[];
  price: number | null;
  selectedSeniorId: string | null;
  requirement: string;
};

export const useServiceApply = ({
  serviceTime,
  startDate,
  endDate,
  timeSlotsArray,
  price,
  selectedSeniorId,
  requirement,
}: UseServiceApplyProps) => {
  const { mutate: postCostHelloCall } = usePostApplyHelloCall();

  const navigate = useNavigate();

  const serviceApply = () => {
    const requestPayload: ApplyHelloCallRequest = {
      seniorId: selectedSeniorId ? parseInt(selectedSeniorId, 10) : 0,
      startDate: startDate?.toISOString() || '',
      endDate: endDate?.toISOString() || '',
      timeSlots: timeSlotsArray,
      price: price || 0,
      serviceTime,
      requirement,
    };

    postCostHelloCall(requestPayload, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return { serviceApply };
};
