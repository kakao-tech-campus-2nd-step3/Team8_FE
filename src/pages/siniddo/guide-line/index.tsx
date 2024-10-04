import { useParams } from 'react-router-dom';

import { Container } from './components/container';
import { CATEGORIES } from './data/categories.ts';
import { MOCK_DATA } from './data/mock';
import styled from '@emotion/styled';

type GuideLineParams = {
  callBackId: string;
  guideLineId: string;
};

const SiniddoGuideLinePage = () => {
  const { callBackId = '', guideLineId = '' } = useParams<GuideLineParams>();
  console.log(callBackId, guideLineId);

  const guideLineInfo =
    CATEGORIES.find((item) => item.id === guideLineId)?.name || null;

  return (
    <Wrapper>
      <Title>{guideLineInfo}</Title>
      {MOCK_DATA.map((data, index) => (
        <Container key={index} title={data.title} content={data.content} />
      ))}
    </Wrapper>
  );
};

export default SiniddoGuideLinePage;

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
  font-size: 20px;
  font-weight: 700;
  color: #c69090;
`;
