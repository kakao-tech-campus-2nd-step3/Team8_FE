import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuidelineType = {
  title: string;
  content: string;
};

const GuideLineInfo = ({ guideline }: { guideline: GuidelineType }) => {
  return (
    <GuideLineInfoContainer>
      <Box display='flex' flexDir='column' w='100%' maxW='300px'>
        <Text fontSize='1rem' fontWeight={700} mb={2}>
          {guideline.title}
        </Text>
        <InfoBox mb={1}>
          <InfoText>{guideline.content}</InfoText>
        </InfoBox>
      </Box>
    </GuideLineInfoContainer>
  );
};

export default GuideLineInfo;

const GuideLineInfoContainer = styled(Flex)`
  width: 100%;
  max-width: 330px;
  min-height: 8rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5rem 0;
  padding: 1rem;
`;

const InfoText = styled(Text)`
  font-size: 0.8rem;
  color: var(--color-black);
`;

const InfoBox = styled(Box)`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
