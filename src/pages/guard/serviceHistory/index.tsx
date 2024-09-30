import CallbackHistoryText from '@/components/features/servicehistory/callbackHistoryText';
import HelloServiceHistoryText from '@/components/features/servicehistory/helloserviceHistoryText';
import { Flex } from '@chakra-ui/react';

const ServiceHistoryPage = () => {
  return (
    <Flex
      border='1px solid black'
      direction='column'
      align='center'
      justify='center'
    >
      <CallbackHistoryText />
      <HelloServiceHistoryText />
    </Flex>
  );
};

export default ServiceHistoryPage;
