import { CallBackApply, Header, HelloCallApply } from './components';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SinittoMainPage = () => {
  return (
    <SinittoMainPageLayout>
      <Header />
      <Flex w='100%' alignItems='center'>
        <Text color='var(--color-primary)' fontSize='24px' fontWeight='700'>
          김시니또
        </Text>
        <Text fontSize='lg' fontWeight='700'>
          님 안녕하세요!
        </Text>
      </Flex>
      <CallBackApply />
      <HelloCallApply />
    </SinittoMainPageLayout>
  );
};

const SinittoMainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;
