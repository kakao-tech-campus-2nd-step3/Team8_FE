import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GuideLineList } from '../components/guideline-list';
import { Header } from '../components/header/Header';
import { HelloCallApply } from '../components/hello-call-apply';
import { PageLayout, HEADER_HEIGHT } from '@/shared';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GuardMainPage = () => {
  const [currentSenior, setCurrentSenior] = useState<number | null>(null);
  const navigate = useNavigate();
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
        <Banner onClick={() => navigate('/guard/mypage/service-manual')}>
          메뉴얼 보기
        </Banner>
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

const Banner = styled.div`
  position: fixed;
  right: 0;
  top: 20%;
  transform: translateY(-50%);
  width: 30px;
  height: 160px;
  background-color: #c69090;
  border-radius: 50px 0px 0px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  writing-mode: vertical-rl;
  font-weight: 600;
  text-orientation: mixed;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  opacity: 80%;

  &:hover {
    width: 50px;
    opacity: 100%;
    font-size: 18px;
    transition: 0.2s ease-out;
    background-color: #b77d7d;
  }
`;
