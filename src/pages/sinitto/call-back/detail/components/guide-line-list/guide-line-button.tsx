import { useNavigate, useLocation } from 'react-router-dom';

import ArrowImg from '../../assets/arrow-outline.png';
import { Button, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  id: string | null;
  backgroundColor: string;
};

export const GuideLineButton = ({ title, backgroundColor, id }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (id == null) {
      alert('개발 예정입니다.');
    } else {
      navigate(`${location.pathname}/${id}`);
    }
  };

  return (
    <Wrapper backgroundColor={backgroundColor} onClick={handleClick}>
      <Content>
        <Title>{title}</Title>
        <ArrowIcon src={ArrowImg} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#81b6ff'};
  outline: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

const Title = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-white);
`;

const ArrowIcon = styled(Image)`
  margin-left: auto;
`;
