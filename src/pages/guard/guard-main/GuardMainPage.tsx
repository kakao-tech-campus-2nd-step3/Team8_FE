import { useState } from 'react';

import { GuideLineList } from './components/guideline-list';
import { Header } from './components/header/Header';
import { HelloCallApply } from './components/hello-call-apply';
import { PageLayout } from '@/shared';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMainPage = () => {
  const [currentSenior, setCurrentSenior] = useState<number | null>(null);

  return (
    <PageLayout>
      <Header
        currentSenior={currentSenior}
        setCurrentSenior={setCurrentSenior}
      />
      <CallbackNumber>
        <Box
          w='100%'
          display='flex'
          justifyContent='center'
          padding='0.5rem'
          fontSize='20px'
          bg='var(--color-secondary)'
          color='var(--color-black)'
          fontWeight='bold'
          borderRadius='20px'
          marginBottom='10px'
        >
          시니어가 사용할 서비스 번호
        </Box>
        <Text fontSize='24px' fontWeight='bold'>
          010-4163-8098
        </Text>
      </CallbackNumber>
      <GuideLineList seniorId={currentSenior} />
      <HelloCallApply />
    </PageLayout>
  );
};

const CallbackNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  max-width: 338px;
  padding: 0.5rem;
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
  margin-top: 1rem;
`;
