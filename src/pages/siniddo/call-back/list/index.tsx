import { RequestRow } from './components/request-row';
import { MOCK_DATA } from './data/mock';
import styled from '@emotion/styled';

const CallBackListPage = () => {
  // TO_DO: 콜백 요청 리스트 불러오기

  return (
    <Wrapper>
      {MOCK_DATA.map((data) => (
        <RequestRow name={data.name} time={data.time} id={data.id} />
      ))}
    </Wrapper>
  );
};

export default CallBackListPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;
