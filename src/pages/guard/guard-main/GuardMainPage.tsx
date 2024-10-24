import { useState } from 'react';

import { GuideLineList } from './components/guideline-list';
import { Header } from './components/header/Header';
import { HelloCallApply } from './components/hello-call-apply';
import styled from '@emotion/styled';

export const GuardMainPage = () => {
  const [currentSenior, setCurrentSenior] = useState<number | null>(null);
  console.log(currentSenior);
  return (
    <GuardMainPageLayout>
      <Header
        currentSenior={currentSenior}
        setCurrentSenior={setCurrentSenior}
      />
      <GuideLineList seniorId={currentSenior} />
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
