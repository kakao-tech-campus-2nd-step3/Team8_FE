import { useState } from 'react';

import {
  CallbackHistoryText,
  HistoryDetail,
  HelloServiceHistoryText,
} from './components';
import { CALL_DUMMY_DATA, HELLO_DUMMY_DATA } from './data';
import { Button, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ServiceHistoryPage = () => {
  const [showAll, setShowAll] = useState(false);

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
        {HELLO_DUMMY_DATA.map((item, index) => (
          <HistoryDetail
            key={index}
            date={item.date}
            name={item.name}
            status={item.status}
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
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
