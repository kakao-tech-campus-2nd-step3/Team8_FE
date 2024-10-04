import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

type Props = {
  name: string;
  time: number;
  id: string;
};

export const RequestRow = ({ name, time, id }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/call-back/${id}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Content>
        <Title>{name}님의 요청</Title>
        <Time>{time}분 전</Time>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #f2f2f2;
  outline: 0;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
`;

const Time = styled.p`
  font-size: 16px;
  font-weight: 350;
  color: #909090;
  margin-left: auto;
`;
