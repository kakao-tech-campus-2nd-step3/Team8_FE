import { useState } from 'react';

import { arrowIcon } from '@/shared/assets';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuidelineInfo = {
  title: string;
  content: string;
};

const GuideLineInfo = ({ guideline }: { guideline: GuidelineInfo }) => {
  const [isMore, setIsMore] = useState(false);

  const toggleContent = () => {
    setIsMore(!isMore);
  };

  return (
    <GuideLineInfoContainer>
      <Box
        display='flex'
        flexDir='row'
        w='100%'
        maxW='300px'
        justifyContent='space-between'
        alignItems='center'
        cursor='pointer'
        onClick={toggleContent}
      >
        <Text fontSize='1rem' fontWeight={700}>
          {guideline.title}
        </Text>
        <ImageWrapper $isMore={isMore}>
          <Image src={arrowIcon} w={4} h={4} />
        </ImageWrapper>
      </Box>
      {isMore && (
        <InfoBox mb={1}>
          <InfoText>{guideline.content}</InfoText>
        </InfoBox>
      )}
    </GuideLineInfoContainer>
  );
};

export default GuideLineInfo;

const GuideLineInfoContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 330px;
  height: auto;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
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
  margin-top: 0.5rem;
`;

const ImageWrapper = styled.div<{ $isMore: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ $isMore }) => ($isMore ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
