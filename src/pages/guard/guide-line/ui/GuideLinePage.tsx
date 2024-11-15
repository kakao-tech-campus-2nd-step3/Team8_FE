import { lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';

import { useGetSeniorAllGuidelines } from '../hooks';
import { SeniorGuideLineData } from '../types';
import { PageLayout } from '@/shared';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const GuideLineInfo = lazy(
  () => import('../components/guide-info-box/GuideLineInfo')
);

const GuidelineRegisterBox = lazy(
  () => import('../components/guide-register-box/GuidelineRegisterBox')
);

export type GuideLineDetailParams = {
  seniorId: string;
  guidelineType: string;
};

export const GuideLinePage = () => {
  const { seniorId, guidelineType } = useParams<GuideLineDetailParams>();

  const {
    data: guidelineData,
    isLoading,
    refetch,
  } = useGetSeniorAllGuidelines(Number(seniorId), String(guidelineType));

  const renderSkeletons = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <GuideLineInfoContainer key={`skeleton-${index}`}>
          <Flex flexDir='column' w='100%' gap='var(--space-xs)'>
            <Box
              display='flex'
              flexDir='row'
              w='100%'
              justifyContent='space-between'
              alignItems='center'
            >
              <Box flex='1'>
                <Skeleton width={200} height={24} />
              </Box>
              <Flex align='center' gap='var(--space-xxs)'>
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
              </Flex>
            </Box>
          </Flex>
        </GuideLineInfoContainer>
      ));
  };

  return (
    <PageLayout>
      <GuidelineRegisterBox
        refetch={refetch}
        seniorId={Number(seniorId)}
        guidelineType={String(guidelineType)}
      />
      <Flex
        w='100%'
        h='100%'
        flexDir='column'
        alignItems='center'
        gap='var(--space-sm)'
      >
        <Box
          w='full'
          display='flex'
          flexDir='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text
            color='var(--color-black)'
            fontSize='var(--font-size-xxl)'
            fontWeight='700'
          >
            등록한 가이드라인
          </Text>
          <Text
            color='var(--color-gray)'
            fontSize='var(--font-size-xl)'
            fontWeight='500'
          >
            {isLoading ? <Skeleton width={30} /> : `${guidelineData?.length}개`}
          </Text>
        </Box>
        <Flex w='full' flexDir='column' gap='var(--space-sm)'>
          {isLoading
            ? renderSkeletons()
            : guidelineData?.map((guideline: SeniorGuideLineData) => (
                <GuideLineInfo
                  key={guideline.id}
                  refetch={refetch}
                  guideline={guideline}
                  seniorId={Number(seniorId)}
                />
              ))}
        </Flex>
      </Flex>
    </PageLayout>
  );
};

const GuideLineInfoContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  background-color: var(--color-white);
  border: 2px solid var(--color-white-gray);
  border-radius: 10px;
  padding: var(--space-md);
`;
