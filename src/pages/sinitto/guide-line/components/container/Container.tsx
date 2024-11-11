import { useState } from 'react';

import { Flex, Text, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  content: string;
};

export const GuideLineContainer = ({ title, content }: Props) => {
  const [isMore, setIsMore] = useState(false);
  return (
    <GuideLineInfoContainer onClick={() => setIsMore(!isMore)}>
      <Flex flexDir='column' w='100%' gap='var(--space-xs)'>
        <Box
          display='flex'
          flexDir='row'
          w='100%'
          justifyContent='space-between'
          cursor='pointer'
        >
          {isMore ? (
            <Text fontSize='var(--font-size-md)' fontWeight={700} mt={1}>
              {title}
            </Text>
          ) : (
            <Text
              fontSize='var(--font-size-md)'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              fontWeight={700}
              mt={1}
            >
              {title}
            </Text>
          )}
        </Box>
        {isMore && (
          <InfoBox>
            <InfoText>
              {content.split('\\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </InfoText>
          </InfoBox>
        )}
      </Flex>
    </GuideLineInfoContainer>
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

const InfoText = styled(Text)`
  font-size: var(--font-size-sm);
`;

const InfoBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--space-xs);
`;
