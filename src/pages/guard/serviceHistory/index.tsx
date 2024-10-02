import { useState } from 'react';

import CallbackHistoryText from '@/components/features/servicehistory/callbackHistoryText';
import HelloServiceHistoryText from '@/components/features/servicehistory/helloserviceHistoryText';
import HistoryDetail from '@/components/features/servicehistory/historydetail';
import { HistoryItem } from '@/types';
import { Button, Flex } from '@chakra-ui/react';

const CallbackDummyData: HistoryItem[] = [
  { date: '24.09.01', name: '택시 호출하기', status: '완료대기' },
  { date: '24.08.30', name: '서류 제출 도와주기', status: '완료대기' },
  { date: '24.08.26', name: '대중교통 이용 도움', status: '완료' },
  { date: '24.08.23', name: '택시 호출하기', status: '완료대기' },
  { date: '24.08.22', name: '택시 호출하기', status: '완료' },
  { date: '24.08.21', name: '서류 제출 도와주기', status: '완료' },
];

const HelloDummyData: HistoryItem[] = [
  { date: '24.08.15~24.09.01', name: '김숙자', status: '완료대기' },
  { date: '24.08.01~24.08.11', name: '박우석', status: '완료' },
];

const ServiceHistoryPage = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Flex direction='column' align='center' justify='center'>
      <CallbackHistoryText />
      <Flex direction='column' mt={3} mb={3}>
        {CallbackDummyData.slice(0, showAll ? CallbackDummyData.length : 5).map(
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
        {HelloDummyData.map((item, index) => (
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
