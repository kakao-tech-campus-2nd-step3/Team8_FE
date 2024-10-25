import { ApplyHelloCallRequest, usePostApplyHelloCall } from '../../api';
import { TimeSlots } from '@/pages';
import { Button } from '@chakra-ui/react';

type Props = {
  serviceTime: number;
  startDate: Date | null;
  endDate: Date | null;
  timeSlotsArray: TimeSlots[];
  price: number | null;
  selectedSeniorId: string | null;
};

export const ServiceApply = ({
  serviceTime,
  startDate,
  endDate,
  timeSlotsArray,
  price,
  selectedSeniorId,
}: Props) => {
  const { mutate: postCostHelloCall } = usePostApplyHelloCall();

  const handleServiceApply = () => {
    const requestPayload: ApplyHelloCallRequest = {
      seniorId: selectedSeniorId ? parseInt(selectedSeniorId, 10) : 0,
      startDate: startDate?.toISOString() || '',
      endDate: endDate?.toISOString() || '',
      timeSlots: timeSlotsArray,
      price: price || 0,
      serviceTime,
      requirement: '테스트',
    };

    postCostHelloCall(requestPayload);
  };

  return (
    <Button
      w='90%'
      mt={5}
      backgroundColor='var(--color-primary)'
      color='var(--color-white)'
      onClick={handleServiceApply}
    >
      {price} point로 신청하기
    </Button>
  );
};
