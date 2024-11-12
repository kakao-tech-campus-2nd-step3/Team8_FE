import { useServiceApply } from '../../hooks';
import { TimeSlots } from '../../types';
import { BasicButton } from '@/shared';

type Props = {
  serviceTime: number;
  startDate: Date | null;
  endDate: Date | null;
  timeSlotsArray: TimeSlots[];
  price: number | null;
  selectedSeniorId: string | null;
  requirement: string;
};

export const ServiceApply = ({
  serviceTime,
  startDate,
  endDate,
  timeSlotsArray,
  price,
  selectedSeniorId,
  requirement,
}: Props) => {
  const { serviceApply } = useServiceApply({
    serviceTime,
    startDate,
    endDate,
    timeSlotsArray,
    price,
    selectedSeniorId,
    requirement,
  });

  return (
    <BasicButton onClick={serviceApply}>{price} point로 신청하기</BasicButton>
  );
};
