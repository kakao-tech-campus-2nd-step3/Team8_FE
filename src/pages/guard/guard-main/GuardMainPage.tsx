import { GuideLineList } from './components/guideline-list';
import { Header } from './components/header/Header';
import { HelloCallApply } from './components/hello-call-apply';
import styled from '@emotion/styled';

export const GuardMainPage = () => {
  return (
    <GuardMainPageLayout>
      <Header />
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
