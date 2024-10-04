import { useNavigate } from 'react-router-dom';

import ArrowImg from '../../assets/arrow.png';
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
        <ArrowIcon src={ArrowImg} />
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
  margin-top: 2px;
`;

const Time = styled.p`
  font-size: 16px;
  font-weight: 350;
  color: #909090;
  margin-left: auto;
`;

const ArrowIcon = styled.img`
  margin-left: 20px;
  height: 20px;
`;
