import {
  CallBackApply,
  Header,
  HelloCallApply,
  ServiceHistoryButton,
  SinittoName,
} from './components';
import styled from '@emotion/styled';

export const SinittoMainPage = () => {
  return (
    <SinittoMainPageLayout>
      <Header />
      <SinittoName />
      <ServiceHistoryButton />
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
