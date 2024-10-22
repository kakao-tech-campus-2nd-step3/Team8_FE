import { GuideLineList } from './components/guideline-list';
import { HelloCallApply } from './components/hello-call-apply';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMainPage = () => {
  return (
    <GuardMainPageLayout>
      <Flex>header</Flex>
      <GuideLineList />
      <HelloCallApply />
    </GuardMainPageLayout>
  );
};

const GuardMainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;
