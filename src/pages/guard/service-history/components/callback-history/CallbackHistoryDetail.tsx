import {
  CallbackHistory,
  ServiceStatus,
  useCompleteCallback,
} from '@/pages/guard';
import { formatPostTime } from '@/shared/utils/dateUtils';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type CallbackHistoryDetailProps = {
  historyData: CallbackHistory;
};

const CallbackHistoryDetail = ({ historyData }: CallbackHistoryDetailProps) => {
  const completeCallbackMutation = useCompleteCallback();

  const handleButtonClick = () => {
    if (historyData.status === 'COMPLETE') {
      alert('이미 완료 확인한 서비스입니다.');
    } else if (historyData.status === 'WAITING') {
      alert('아직 완료되지 않은 대기중인 서비스입니다.');
    } else if (historyData.status === 'PENDING_COMPLETE') {
      completeCallbackMutation.mutate(historyData.callbackId);
    }
  };

  return (
    <ItemListBox>
      <Text
        fontWeight='700'
        color='var(--color-gray)'
        w='68px'
        mr='var(--space-xs)'
      >
        {formatPostTime(historyData.postTime)}
      </Text>
      <Flex alignItems='end' gap={1} mr='auto'>
        <Text fontSize='var(--font-size-lg)' fontWeight='700'>
          {historyData.seniorName}
        </Text>
      </Flex>
      <ServiceStatus onClick={handleButtonClick} status={historyData.status} />
    </ItemListBox>
  );
};

export default CallbackHistoryDetail;

const ItemListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--color-white-gray);
  padding: var(--space-sm);
  border-radius: 10px;
  align-items: center;
`;
