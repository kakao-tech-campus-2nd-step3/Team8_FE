import { useHelloServiceHistory } from '../../hooks';
import { useFormattedDate } from '../../hooks/useFormattedDate';
import { useSelectedDays } from '../../hooks/useSelectedDays';
import { useServiceStatusActions } from '../../hooks/useServiceStatusActions';
import { HelloCallHistory } from '../../types';
import { ServiceStatus } from '../service-status';
import { BasicButton } from '@/shared';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type HelloServiceHistoryProps = {
  historyData: HelloCallHistory;
  refetch: () => void;
};

const HelloServiceHistory = ({
  historyData,
  refetch,
}: HelloServiceHistoryProps) => {
  const { seniorName, status, helloCallId } = historyData;
  const { helloCallDetail, deleteHelloCall, isDaySelected } =
    useHelloServiceHistory({
      historyData,
      refetch,
    });

  // Hook을 사용하여 상태와 로직 분리
  const formattedDate = useFormattedDate(
    helloCallDetail?.startDate,
    helloCallDetail?.endDate
  );
  const { selectedDays } = useSelectedDays(isDaySelected);
  const { serviceDelete, goToReport } = useServiceStatusActions(
    status,
    helloCallId,
    deleteHelloCall
  );

  return (
    <HistoryContainer>
      <HistoryInfo>
        <Text fontWeight='700' color='var(--color-gray)'>
          {formattedDate}
        </Text>
        <Text fontSize='var(--font-size-lg)' fontWeight='700'>
          {seniorName}
        </Text>
        <ServiceStatus status={status} />
      </HistoryInfo>

      {status === 'COMPLETE' ? null : (
        <Flex w='full' gap='var(--space-xxs)'>
          {selectedDays.map(({ day, isSelected }) => (
            <DayButton key={day} isSelect={isSelected}>
              {day}
            </DayButton>
          ))}
        </Flex>
      )}

      <InfoEditContainer>
        {status === 'WAITING' ? (
          <BasicButton themeType='gray' height='40px' onClick={serviceDelete}>
            삭제하기
          </BasicButton>
        ) : status === 'PENDING_COMPLETE' ? (
          <BasicButton height='40px' onClick={goToReport}>
            보고서 확인 및 완료처리
          </BasicButton>
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
