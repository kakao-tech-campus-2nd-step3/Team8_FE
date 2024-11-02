import { useState } from 'react';

import { useGetHelloHistoryList } from './api';
import { CallbackHistoryText, HistoryDetail } from './components';
import HelloServiceHistory from './components/HelloServiceHistory';
import { HelloServiceHistoryText } from './components/helloserviceHistoryText';
import { CALL_DUMMY_DATA } from './data';
import { Button, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ServiceHistoryPage = () => {
  const [showAll, setShowAll] = useState(false);

  const { data: helloCallHistory, refetch } = useGetHelloHistoryList();

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <ServiceHistoryLayout>
      <CallbackHistoryText />
      <ButtonWrapper>
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
        <Button h='3rem' my={3} fontSize='lg' onClick={toggleShowAll}>
          {showAll ? '숨기기' : '더보기'}
        </Button>
      </ButtonWrapper>
      <HelloServiceHistoryText />
      <ButtonWrapper>
        {helloCallHistory?.map((history, _) => (
          <HelloServiceHistory
            key={history.helloCallId}
            historyData={history}
            refetch={refetch}
          />
        ))}
      </ButtonWrapper>
    </ServiceHistoryLayout>
  );
};

const ServiceHistoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
`;

const ButtonWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
