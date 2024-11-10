import { Link } from 'react-router-dom';

import ServiceStatus from '../service-status/ServiceStatus';
import { RouterPath } from '@/app/routes';
import { HelloCallHistory, useHelloServiceHistory } from '@/pages/guard';
import { formatDate } from '@/shared/utils/date/dateUtils';
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

const HelloServiceHistory = ({
  historyData,
  refetch,
}: HelloServiceHistoryProps) => {
  const { seniorName, status } = historyData;

  const { helloCallDetail, toggleDay, deleteHelloCall, isDaySelected } =
    useHelloServiceHistory({ historyData, refetch });

  return (
    <HistoryContainer>
      <HistoryInfo>
        <Text fontSize='16px' fontWeight='700'>
          {formatDate(helloCallDetail?.startDate, helloCallDetail?.endDate)}
        </Text>
        <Text fontSize='16px' fontWeight='700'>
          {seniorName}
        </Text>
        <ServiceStatus status={status} />
      </HistoryInfo>
      {status === 'COMPLETE' ? null : (
        <DayContainer>
          {DAYS.map((day) => (
            <Day
              key={day}
              isSelected={isDaySelected(day)}
              onClick={() => toggleDay(day)}
            >
              {day}
            </Day>
          ))}
        </DayContainer>
      )}
      {status === 'WAITING' ? (
        <InfoEditContainer>
          <DeleteButton onClick={deleteHelloCall}>삭제하기</DeleteButton>
        </InfoEditContainer>
      ) : status === 'PENDING_COMPLETE' ? (
        <Link to={RouterPath.SINITTO_REVIEW}>
          <ReviewButton>리뷰 작성하기</ReviewButton>
        </Link>
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

const Day = styled.div<DayProps>`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 5px;
  color: var(--color-white);
  ${({ isSelected }) =>
    isSelected
      ? `background-color: var(--color-primary); font-weight: bold`
      : `background-color: var(--color-gray);`}
`;

const InfoEditContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const DeleteButton = styled.button`
  width: 95%;
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
