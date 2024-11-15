import { useFormattedPostTime } from '../../hooks/useFormattedPostTime';
import { useServiceStatus } from '../../hooks/useServiceStatus';
import { CallbackHistory } from '../../types';
import { ServiceStatus } from '../service-status';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type CallbackHistoryDetailProps = {
  historyData: CallbackHistory;
};

const CallbackHistoryDetail = ({ historyData }: CallbackHistoryDetailProps) => {
  const { serviceStatus } = useServiceStatus(historyData);

  const formattedPostTime = useFormattedPostTime(historyData.postTime);

  return (
    <ItemListBox>
      <Text
        fontWeight='700'
        color='var(--color-gray)'
        w='68px'
        mr='var(--space-xs)'
      >
        {formattedPostTime}
      </Text>
      <Flex alignItems='end' gap={1} mr='auto'>
        <Text fontSize='var(--font-size-lg)' fontWeight='700'>
          {historyData.seniorName}
        </Text>
      </Flex>
      <ServiceStatus onClick={serviceStatus} status={historyData.status} />
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
