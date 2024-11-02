import {
  CallbackHistory,
  ServiceStatus,
  useCompleteCallback,
} from '@/pages/guard';
import { formatPostTime } from '@/shared/utils/date/dateUtils';
import { Box, Text } from '@chakra-ui/react';

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
    <Box
      display='flex'
      w='100%'
      gap={2}
      justifyContent='space-between'
      alignItems='center'
      mb={3}
    >
      <Text fontSize='md' fontWeight={600} mr={1}>
        {formatPostTime(historyData.postTime)}
      </Text>
      <Text fontSize='md' fontWeight={600}>
        {historyData.seniorName}
      </Text>
      <ServiceStatus onClick={handleButtonClick} status={historyData.status} />
    </Box>
  );
};

export default CallbackHistoryDetail;
