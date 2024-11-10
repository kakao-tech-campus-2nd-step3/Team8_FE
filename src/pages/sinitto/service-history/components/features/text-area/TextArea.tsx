import { useArrayFormatting } from '../../../hooks';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  status: string | string[];
  description: string | string[];
  textDirection?: 'start' | 'end';
};

export const TextArea = ({
  title,
  status,
  description,
  textDirection = 'start',
}: Props) => {
  const statuses = useArrayFormatting(status);
  const descriptions = useArrayFormatting(description);

  return (
    <Flex
      w='full'
      flexDir='column'
      textAlign={textDirection}
      gap='var(--space-xs)'
    >
      <Flex w='full' justifyContent={textDirection}>
        <Text fontSize='xl' fontWeight='700'>
          {title}
        </Text>
      </Flex>
      {statuses.map((stat, index) => (
        <Flex w='full' justifyContent={textDirection} key={index}>
          <Text fontSize='sm' fontWeight='700' color='#6D6D6D'>
            <Highlight>{stat}</Highlight> {descriptions[index] || ''}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

const Highlight = styled.span`
  color: #990e0e;
`;
