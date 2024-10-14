import { RequestList } from './hello-call-list';
import styled from '@emotion/styled';

const HelloCallPage = () => {
  return (
    <HelloCallPageLayout>
      <RequestList />
      <RequestList />
      <RequestList />
      <RequestList />
    </HelloCallPageLayout>
  );
};

export default HelloCallPage;

const HelloCallPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  margin: 3rem 1.5rem;
`;
