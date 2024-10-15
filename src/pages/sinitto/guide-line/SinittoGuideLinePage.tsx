import { useParams } from 'react-router-dom';

import { CATEGORIES, GUIDE_LINE_MOCK_DATA } from './data';
import { Category, MockData } from './types';
import { Container } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuideLineParams = {
  callBackId: string;
  guideLineId: string;
};

export const SinittoGuideLinePage = () => {
  const { callBackId = '', guideLineId = '' } = useParams<GuideLineParams>();
  console.log(callBackId, guideLineId);

  const guideLineInfo =
    CATEGORIES.find((item: Category) => item.id === guideLineId)?.name || null;

  return (
    <Wrapper>
      <Title>{guideLineInfo}</Title>
      {GUIDE_LINE_MOCK_DATA.map((data: MockData, index: number) => (
        <Container key={index} title={data.title} content={data.content} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  font-size: var(--font-size-xxl);
  font-weight: 700;
  color: #c69090;
`;
