import { useParams } from 'react-router-dom';

import { GuideLineContainer } from '../components';
import {
  useGuideLineData,
  useGuideLineErrorHandling,
  useCategoryName,
} from '../hooks';
import { GuidelineResponse } from '../types';
import { PageLayout } from '@/shared';
import { Spinner, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuideLineParams = {
  callBackId: string;
  guideLineId: string;
};

export const SinittoGuideLinePage = () => {
  const { callBackId = '', guideLineId = '' } = useParams<GuideLineParams>();
  const guideLineInfo = useCategoryName(guideLineId);
  const { guideLine, isGuideLineLoading, isGuideLineError } = useGuideLineData(
    callBackId,
    guideLineId
  );

  useGuideLineErrorHandling(isGuideLineError);

  return (
    <PageLayout>
      {isGuideLineLoading ? (
        <Spinner size='xl' />
      ) : (
        <>
          <Title>
            <EmphasisSpan>{guideLineInfo}</EmphasisSpan> 가이드라인
          </Title>
          <Flex flexDir='column' width='100%' gap='var(--space-sm)'>
            {isGuideLineError && (
              <p>데이터를 불러오는 중에 오류가 발생했습니다.</p>
            )}
            {guideLine &&
              (guideLine.length === 0 ? (
                <p>등록된 가이드라인이 없습니다.</p>
              ) : (
                guideLine.map((data: GuidelineResponse) => (
                  <GuideLineContainer
                    key={data.id}
                    title={data.title}
                    content={data.content}
                  />
                ))
              ))}
          </Flex>
        </>
      )}
    </PageLayout>
  );
};

const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: var(--font-size-xxl);
  font-weight: 700;
  margin-bottom: var(--space--sm);
`;

const EmphasisSpan = styled.span`
  color: #c69090;
`;
