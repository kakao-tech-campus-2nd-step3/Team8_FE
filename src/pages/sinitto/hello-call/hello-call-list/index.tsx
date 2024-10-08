import { useNavigate } from 'react-router-dom';

import RequestList from './components/request-list';
import { RouterPath } from '@/app/routes/path';
import styled from '@emotion/styled';

const HelloCallListPage = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(RouterPath.HELLO_CALL_SERVICE);
  };

  return (
    <HelloCallListLayout>
      <RequestList onClick={handlerNavigate} />
      <RequestList onClick={handlerNavigate} />
      <RequestList onClick={handlerNavigate} />
      <RequestList onClick={handlerNavigate} />
    </HelloCallListLayout>
  );
};

export default HelloCallListPage;

const HelloCallListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  margin: 3rem 1.5rem;
`;
