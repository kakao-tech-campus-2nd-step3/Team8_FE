import { useNavigate } from 'react-router-dom';

import { CallRequest } from './components';
import { RouterPath } from '@/app/routes/path';
import styled from '@emotion/styled';

const HelloCallListPage = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(RouterPath.HELLO_CALL_SERVICE);
  };

  return (
    <HelloCallListLayout>
      <CallRequest onClick={handlerNavigate} />
      <CallRequest onClick={handlerNavigate} />
      <CallRequest onClick={handlerNavigate} />
      <CallRequest onClick={handlerNavigate} />
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
