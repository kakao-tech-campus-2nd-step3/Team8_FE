import { useState } from 'react';

import { HelloCallHistory } from '../api';
import { useDeleteHelloCall } from '../api/hooks/useDeleteHelloCall';
import { useModifyHelloCall } from '../api/hooks/useModifyHelloCall';
import { ModifyHelloCallRequest } from '../api/modify-hello-call.api';
import { useGetServiceDetail } from '@/pages/sinitto/hello-call-service/api';
import { getStatusStyle } from '@/shared/utils/status/statusUtils';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일'];

type HelloServiceHistoryProps = {
  historyData: HelloCallHistory;
  refetch: () => void;
};

type DayProps = {
  isSelected: boolean;
};

type StatusButtonProps = {
  status: string;
};

const HelloServiceHistory = ({
  historyData,
  refetch,
}: HelloServiceHistoryProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>(historyData.days);
  const { days, seniorName, status } = historyData;
  const { data: helloCallDate } = useGetServiceDetail(historyData.helloCallId);

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
      !helloCallDate ||
      !helloCallDate.timeSlots ||
      helloCallDate.timeSlots.length === 0
    ) {
      alert('기존 시간 정보를 불러올 수 없습니다.');
      return;
    }

    const baseTimeSlot = helloCallDate.timeSlots[0];
    const requestData: ModifyHelloCallRequest = {
      startDate: helloCallDate.startDate,
      endDate: helloCallDate.endDate,
      timeSlots: selectedDays.map((day) => ({
        dayName: day,
        startTime: String(baseTimeSlot.startTime), // 서버에서 오는 데이터가 TIME 형식임.
        endTime: String(baseTimeSlot.endTime),
      })),
      price: helloCallDate.price,
      serviceTime: 10, // TODO : serviceTime 추가되면 변경
      requirement: helloCallDate.requirement,
    };

    editHelloCallMutation.mutate(requestData, {
      onSuccess: () => {
        setIsEditMode(false);
      },
    });
  };

  return (
    <HistoryContainer>
      <HistoryInfo>
        <Text fontSize='16px' fontWeight='700'>
          {helloCallDate?.startDate}-{helloCallDate?.endDate}
        </Text>
        <Text fontSize='16px' fontWeight='700'>
          {seniorName}
        </Text>
        <StatusButton status={status}>
          {getStatusStyle(status).text}
        </StatusButton>
      </HistoryInfo>
      {status === 'COMPLETE' ? null : (
        <DayContainer>
          {DAYS.map((day) => (
            <Day
              key={day}
              isSelected={isDaySelected(day)}
              onClick={() => toggleDay(day)}
              style={{ cursor: isEditMode ? 'pointer' : 'default' }}
            >
              {day}
            </Day>
          ))}
        </DayContainer>
      )}
      {status === 'WAITING' ? (
        <InfoEditContainer>
          {isEditMode ? (
            <>
              <EditButton onClick={editHelloCall}>수정 완료</EditButton>
              <DeleteButton onClick={handleEditCancel}>수정 취소</DeleteButton>
            </>
          ) : (
            <>
              <EditButton onClick={handleEditStart}>수정하기</EditButton>
              <DeleteButton onClick={deleteHelloCall}>삭제하기</DeleteButton>
            </>
          )}
        </InfoEditContainer>
      ) : status === 'PENDING_COMPLETE' ? (
        <ReviewButton>리뷰하기</ReviewButton>
      ) : null}
    </HistoryContainer>
  );
};

export default HelloServiceHistory;

const HistoryContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-gray);
  border: 1px solid solid var(--color-white-gray);
  border-radius: 10px;
`;

const HistoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  height: auto;
`;

const Day = styled.button<DayProps>`
  width: 45px;
  height: 45px;
  font-size: 16px;
  border-radius: 5px;
  color: var(--color-white);
  ${({ isSelected }) =>
    isSelected
      ? `background-color: var(--color-primary);`
      : `background-color: var(--color-gray);`}
`;

const InfoEditContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  width: 45%;
  height: 2rem;
  background-color: #81b6ff;
  color: var(--color-white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  width: 45%;
  height: 2rem;
  background-color: #ff4d68;
  color: var(--color-white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const ReviewButton = styled.button`
  width: 95%;
  height: 2rem;
  background-color: #b28bff;
  color: var(--color-white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const StatusButton = styled.button<StatusButtonProps>`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({ status }) => getStatusStyle(status).backgroundColor};
  border: 1px solid ${({ status }) => getStatusStyle(status).backgroundColor};
  border-radius: 10px;
  cursor: pointer;
`;
