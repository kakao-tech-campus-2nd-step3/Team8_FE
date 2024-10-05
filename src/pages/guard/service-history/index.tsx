import { useState } from 'react';

import CallbackHistoryText from './components/callbackHistoryText';
import HelloServiceHistoryText from './components/helloserviceHistoryText';
import HistoryDetail from './components/historydetail';
import { CALL_DUMMY_DATA } from './data/callback';
import { HELLO_DUMMY_DATA } from './data/hello';
import { Button, Flex } from '@chakra-ui/react';

const ServiceHistoryPage = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Flex direction='column' align='center' justify='center'>
      <CallbackHistoryText />
      <Flex direction='column' mt={3} mb={3}>
        {CALL_DUMMY_DATA.slice(0, showAll ? CALL_DUMMY_DATA.length : 5).map(
          (item, index) => (
            <HistoryDetail
              key={index}
              date={item.date}
              name={item.name}
              status={item.status}
            />
          )
        )}
        <Button h='2rem' fontSize='18px' onClick={toggleShowAll}>
          {showAll ? '숨기기' : '더보기'}
        </Button>
      </Flex>
      <HelloServiceHistoryText />
      <Flex direction='column' mt={3}>
        {HELLO_DUMMY_DATA.map((item, index) => (
          <HistoryDetail
            key={index}
            date={item.date}
            name={item.name}
            status={item.status}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ServiceHistoryPage;
