import { useState } from 'react';

import {
  HelloCallHistory,
  ModifyHelloCallRequest,
  useDeleteHelloCall,
  useModifyHelloCall,
} from '@/pages/guard';
import {
  ServiceDetailResponse,
  useGetServiceDetail,
} from '@/pages/sinitto/hello-call-service/api';

type UseHelloServiceHistoryProps = {
  historyData: HelloCallHistory;
  refetch: () => void;
};

type UseHelloServiceHistoryReturn = {
  isEditMode: boolean;
  selectedDays: string[];
  helloCallDetail?: ServiceDetailResponse;
  isDaySelected: (day: string) => boolean;
  deleteHelloCall: () => void;
  toggleDay: (day: string) => void;
  handleEditStart: () => void;
  handleEditCancel: () => void;
  editHelloCall: () => void;
};

export const useHelloServiceHistory = ({
  historyData,
  refetch,
}: UseHelloServiceHistoryProps): UseHelloServiceHistoryReturn => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>(historyData.days);
  const { days } = historyData;

  const { data: helloCallDetail } = useGetServiceDetail(
    historyData.helloCallId
  );
  const deleteHelloCallMutation = useDeleteHelloCall(refetch);
  const editHelloCallMutation = useModifyHelloCall(
    historyData.helloCallId,
    refetch
  );

  const isDaySelected = (day: string): boolean =>
    isEditMode ? selectedDays.includes(day) : days.includes(day);

  const deleteHelloCall = () => {
    const isConfirmed = window.confirm(
      '정말 안부전화 신청을 삭제하시겠습니까?'
    );
    if (isConfirmed) {
      deleteHelloCallMutation.mutate(historyData.helloCallId);
    }
  };

  const toggleDay = (day: string) => {
    if (!isEditMode) return;

    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleEditStart = () => {
    setIsEditMode(true);
    setSelectedDays(days);
  };

  const handleEditCancel = () => {
    setIsEditMode(false);
    setSelectedDays(days);
  };

  const editHelloCall = () => {
    if (
      !helloCallDetail ||
      !helloCallDetail.timeSlots ||
      helloCallDetail.timeSlots.length === 0
    ) {
      alert('기존 시간 정보를 불러올 수 없습니다.');
      return;
    }

    const baseTimeSlot = helloCallDetail.timeSlots[0];
    const requestData: ModifyHelloCallRequest = {
      startDate: helloCallDetail.startDate,
      endDate: helloCallDetail.endDate,
      timeSlots: selectedDays.map((day) => ({
        dayName: day,
        startTime: String(baseTimeSlot.startTime),
        endTime: String(baseTimeSlot.endTime),
      })),
      price: helloCallDetail.price,
      serviceTime: helloCallDetail.serviceTime,
      requirement: helloCallDetail.requirement,
    };

    editHelloCallMutation.mutate(requestData, {
      onSuccess: () => {
        setIsEditMode(false);
      },
    });
  };

  return {
    isEditMode,
    selectedDays,
    helloCallDetail,
    isDaySelected,
    deleteHelloCall,
    toggleDay,
    handleEditStart,
    handleEditCancel,
    editHelloCall,
  };
};
