import { useParams } from 'react-router-dom';

import { useGetSeniorAllGuidelines } from './api';
import { GuideLineInfo, GuidelineRegisterBox } from './components';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type GuideLineDetailParams = {
  seniorId: string; // 시니어 id
  guidelineType: string; // 가이드라인 type (TAXI, DELIVERY)
};

export const GuideLinePage = () => {
  const { seniorId, guidelineType } = useParams<GuideLineDetailParams>();

  const {
    data: guidelineData,
    isLoading,
    isError,
    refetch,
  } = useGetSeniorAllGuidelines(Number(seniorId), String(guidelineType));
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <GuidelineRegisterBox
        refetch={refetch}
        seniorId={Number(seniorId)}
        guidelineType={String(guidelineType)}
      />
      <Flex w='100%' h='100%' flexDir='column' alignItems='center'>
        <Box
          mt={2}
          w='370px'
          display='flex'
          flexDir='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text color='var(--color-black)' fontSize='24px' fontWeight='700'>
            등록한 가이드라인
          </Text>
          <Text color='var(--color-black)' fontSize='20px' fontWeight='700'>
            총 {guidelineData?.length}개
          </Text>
        </Box>
        {guidelineData?.map((guideline) => (
          <GuideLineInfo
            key={guideline.id}
            refetch={refetch}
            guideline={guideline}
            seniorId={Number(seniorId)}
          />
        ))}
      </Flex>
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
