import { lazy } from 'react';
import { useParams } from 'react-router-dom';

import {
  useGuideLineData,
  useGuideLineErrorHandling,
  useCategoryName,
} from '../hooks';
import { GuideLineResponse } from '../types';
import { PageLayout } from '@/shared';
import { Flex, Skeleton } from '@chakra-ui/react';
import styled from '@emotion/styled';

const GuideLineContainer = lazy(() =>
  import('../components/container/Container').then((module) => ({
    default: module.GuideLineContainer,
  }))
);

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
      <Title>
        <EmphasisSpan>{guideLineInfo}</EmphasisSpan> 가이드라인
      </Title>
      {isGuideLineLoading ? (
        <Flex flexDir='column' width='100%' gap='var(--space-sm)'>
          <Skeleton height='80px' width='100%' />
          <Skeleton height='80px' width='100%' />
          <Skeleton height='80px' width='100%' />
        </Flex>
      ) : (
        <Flex flexDir='column' width='100%' gap='var(--space-sm)'>
          {guideLine &&
            (guideLine.length === 0 ? (
              <p>등록된 가이드라인이 없습니다.</p>
            ) : (
              guideLine.map((data: GuideLineResponse) => (
                <GuideLineContainer
                  key={data.id}
                  title={data.title}
                  content={data.content}
                />
              ))
            ))}
        </Flex>
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
