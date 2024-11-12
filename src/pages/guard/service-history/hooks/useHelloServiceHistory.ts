import { useState } from 'react';

import { HelloCallHistory } from '../types';
import { useDeleteHelloCall } from './useDeleteHelloCall';
import { useGetServiceDetail } from '@/pages/sinitto/hello-call-service/hooks';

type Props = {
  historyData: HelloCallHistory;
  refetch: () => void;
};

export const useHelloServiceHistory = ({ historyData, refetch }: Props) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(historyData.days);
  const { days } = historyData;

  const { data: helloCallDetail } = useGetServiceDetail(
    historyData.helloCallId
  );
  const deleteHelloCallMutation = useDeleteHelloCall(refetch);

  const isDaySelected = (day: string): boolean => days.includes(day);

  const deleteHelloCall = () => {
    const isConfirmed = window.confirm(
      '정말 안부전화 신청을 삭제하시겠습니까?'
    );
    if (isConfirmed) {
      deleteHelloCallMutation.mutate(historyData.helloCallId);
    }
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return {
    selectedDays,
    helloCallDetail,
    isDaySelected,
    deleteHelloCall,
    toggleDay,
  };
};
