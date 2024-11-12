import { useParams } from 'react-router-dom';

import { SeniorGuideLineData } from '../api/view-senior-all-guideline.api';
import { GuideLineInfo, GuidelineRegisterBox } from '../components';
import { useGetSeniorAllGuidelines } from '../hooks';
import { PageLayout } from '@/shared';
import { Box, Flex, Text } from '@chakra-ui/react';

export type GuideLineDetailParams = {
  seniorId: string; // 시니어 id
  guidelineType: string; // 가이드라인 type (TAXI, DELIVERY)
};

export const GuideLinePage = () => {
  const { seniorId, guidelineType } = useParams<GuideLineDetailParams>();

  const { data: guidelineData, refetch } = useGetSeniorAllGuidelines(
    Number(seniorId),
    String(guidelineType)
  );

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
            {guidelineData?.length}개
          </Text>
        </Box>
        <Flex w='full' flexDir='column' gap='var(--space-sm)'>
          {guidelineData?.map((guideline: SeniorGuideLineData) => (
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
