import { useParams } from 'react-router-dom';

import { useGetSeniorAllGuidelines } from './api';
import { GuideLineInfo, GuidelineRegisterBox } from './components';
import { Box, Flex } from '@chakra-ui/react';
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
      <Flex
        h='100%'
        flexDir='column'
        alignItems='center'
        flexGrow={1}
        overflowY='auto'
      >
        {guidelineData?.map((guideline) => (
          <GuideLineInfo key={guideline.Id} guideline={guideline} />
        ))}
      </Flex>
      <GuidelineRegisterBox
        refetch={refetch}
        seniorId={Number(seniorId)}
        guidelineType={String(guidelineType)}
      />
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  height: 100vh;
`;
