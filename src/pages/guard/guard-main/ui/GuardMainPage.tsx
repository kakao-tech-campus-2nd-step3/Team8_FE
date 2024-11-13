import { useState } from 'react';

import { GuideLineList, Header, HelloCallApply } from '../components';
import { PageLayout, HEADER_HEIGHT } from '@/shared';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMainPage = () => {
  const [currentSenior, setCurrentSenior] = useState<number | null>(null);

  return (
    <Box pt={HEADER_HEIGHT}>
      <PageLayout>
        <Header
          currentSenior={currentSenior}
          setCurrentSenior={setCurrentSenior}
        />
        <ContectSection>
          <Title>시니어가 사용할 서비스 번호</Title>
          <Content>006 1 256 521 5847</Content>
        </ContectSection>
        <GuideLineList seniorId={currentSenior} />
        <HelloCallApply />
      </PageLayout>
    </Box>
  );
};

const ContectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  padding: 5px var(--space-md);
  border-radius: 5px;
  background-color: #f6e4e4;
  font-size: var(--font-size-md);
  font-weight: 400;
  color: #c69090;
  text-align: center;
`;

const Content = styled.p`
  font-size: var(--font-size-xxl);
  font-weight: 700;
  margin-top: var(--space-xs);
`;
