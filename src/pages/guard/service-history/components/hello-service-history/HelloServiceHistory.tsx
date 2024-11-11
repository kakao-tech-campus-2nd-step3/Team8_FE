import { useNavigate } from 'react-router-dom';

import ServiceStatus from '../service-status/ServiceStatus';
import { HelloCallHistory, useHelloServiceHistory } from '@/pages/guard';
import { formatDate, BasicButton } from '@/shared';
import { Text, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일'];

type HelloServiceHistoryProps = {
  historyData: HelloCallHistory;
  refetch: () => void;
};

const HelloServiceHistory = ({
  historyData,
  refetch,
}: HelloServiceHistoryProps) => {
  const { seniorName, status } = historyData;
  const { helloCallDetail, toggleDay, deleteHelloCall, isDaySelected } =
    useHelloServiceHistory({ historyData, refetch });

  const navigate = useNavigate();

  return (
    <HistoryContainer>
      <HistoryInfo>
        <Text fontWeight='700' color='var(--color-gray)'>
          {formatDate(helloCallDetail?.startDate, helloCallDetail?.endDate)}
        </Text>
        <Text fontSize='var(--font-size-lg)' fontWeight='700'>
          {seniorName}
        </Text>
        <ServiceStatus status={status} />
      </HistoryInfo>

      {status === 'COMPLETE' ? null : (
        <Flex w='full' gap='var(--space-xxs)'>
          {DAYS.map((day) => (
            <DayButton key={day} isSelect={isDaySelected(day)}>
              {day}
            </DayButton>
          ))}
        </Flex>
      )}
      <InfoEditContainer>
        {status === 'WAITING' ? (
          <BasicButton themeType='gray' height='40px' onClick={deleteHelloCall}>
            삭제하기
          </BasicButton>
        ) : status === 'PENDING_COMPLETE' ? (
          <>
            <BasicButton
              height='40px'
              onClick={() => navigate(`report/${historyData.helloCallId}`)}
            >
              보고서 확인 및 완료처리
            </BasicButton>
          </>
        ) : null}
      </InfoEditContainer>
    </HistoryContainer>
  );
};

export default HelloServiceHistory;

const HistoryContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  background-color: var(--color-white-gray);
  padding: var(--space-sm);
  border-radius: 10px;
  justify-content: space-between;
  gap: var(--space-xs);
`;

const HistoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DayButton = styled.button<{ isSelect: boolean }>`
  width: 100%;
  background-color: ${(props) =>
    props.isSelect ? 'var(--color-secondary)' : '#FAFAFA'};
  color: ${(props) =>
    props.isSelect ? 'var(--color-primary)' : 'var(--color-gray)'};
  padding: 10px;
  margin: 2px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: ${(props) => (props.isSelect ? '700' : '500')};
  outline: 0;
  font-size: var(--font-size-sm);
`;

const InfoEditContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
