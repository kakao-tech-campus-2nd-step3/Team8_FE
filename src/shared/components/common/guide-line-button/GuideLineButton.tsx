import { useNavigate, useLocation } from 'react-router-dom';

import { IconArrow } from '@/pages/assets';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuideLineCategory = {
  title: string;
  id: string | null;
  backgroundColor: string;
};

type Props = {
  marginTop?: number;
  marginBottom?: number;
  seniorId?: number | null;
};

const GUIDE_LINE_CATEGORIES: GuideLineCategory[] = [
  {
    title: '택시 호출하기',
    id: 'TAXI',
    backgroundColor: '#81b6ff',
  },
  {
    title: '음식 배달 주문하기',
    id: 'DELIVERY',
    backgroundColor: '#b28bff',
  },
  {
    title: '서류 제출 도와주기',
    id: null,
    backgroundColor: '#ffa7b5',
  },
  {
    title: '대중교통 이동 도와주기',
    id: null,
    backgroundColor: '#ff4d68',
  },
];

export const GuideLineButton = ({
  marginTop,
  marginBottom,
  seniorId,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id: string | null) => {
    if (id === null) {
      alert('개발 예정입니다.');
    } else {
      {
        seniorId
          ? navigate(`${location.pathname}/${seniorId}/${id}`)
          : navigate(`${location.pathname}/${id}`);
      }
    }
  };

  return (
    <Wrapper mt={marginTop} mb={marginBottom}>
      {GUIDE_LINE_CATEGORIES.map((data) => (
        <ButtonWrapper
          key={data.title}
          backgroundColor={data.backgroundColor}
          onClick={() => handleClick(data.id)}
        >
          <Content>
            <Title>{data.title}</Title>
            <IconArrow fill='white' />
          </Content>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
`;

const ButtonWrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
  color: var(--color-white);
`;
