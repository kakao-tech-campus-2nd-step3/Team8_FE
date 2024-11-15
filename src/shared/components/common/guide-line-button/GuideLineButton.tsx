import { useNavigate, useLocation } from 'react-router-dom';

import { IconArrow } from '@/pages/assets';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  seniorId?: number | null;
  userType: string;
};

export const GUIDE_LINE_CATEGORIES = [
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
    title: '병원 예약 대행',
    id: 'HOSPITAL',
    backgroundColor: '#ffa7b5',
  },
  {
    title: '여행 및 문화 생활 예약 대행',
    id: 'CULTURE_LIFE',
    backgroundColor: '#ff4d68',
  },
] as const;

type GuideLineCategory = (typeof GUIDE_LINE_CATEGORIES)[number];

export const GuideLineButton = ({ seniorId, userType }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToGuardGuideLine = (id: string | null) => {
    if (seniorId === null) {
      // seniorId가 null인 경우 (시니어가 선택되지 않은 경우)
      alert('시니어를 선택한 후 다시 선택해주세요');
      return;
    }

    if (seniorId === undefined) {
      // seniorId prop이 전달되지 않은 경우 (시니또의 콜백 요청 상세보기 페이지에서 기본적으로 사용하는 경우)
      navigate(`${location.pathname}/${id}`);
    } else {
      // seniorId prop이 전달된 경우 (보호자 홈 페이지에서 시니어를 선택한 후 그 시니어의 가이드라인 페이지에 접근하려는 경우)
      navigate(`${location.pathname}/${seniorId}/${id}`);
    }
  };

  const goToSinittoGuideLine = (id: string | null) => {
    navigate(`${location.pathname}/${id}`);
  };

  return (
    <Flex w='full' flexDir='column' gap='var(--space-xs)'>
      {GUIDE_LINE_CATEGORIES.map((data: GuideLineCategory) => (
        <ButtonWrapper
          key={data.title}
          backgroundColor={data.backgroundColor}
          onClick={() =>
            userType === 'guard'
              ? goToGuardGuideLine(data.id)
              : goToSinittoGuideLine(data.id)
          }
        >
          <Content>
            <Title>{data.title}</Title>
            <IconArrow fill='white' />
          </Content>
        </ButtonWrapper>
      ))}
    </Flex>
  );
};

const ButtonWrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
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
