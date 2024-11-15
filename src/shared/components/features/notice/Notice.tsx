import { Box, Text, Flex } from '@chakra-ui/react';

type Props = {
  title?: string;
  contents?: string;
  noticeType?: string;
};

const Notice = ({ title, contents, noticeType }: Props) => {
  return (
    <Flex w='full' flexDir='column' gap='var(--space-xs)'>
      {noticeType && (
        <Text
          backgroundColor='var(--color-secondary)'
          color='var(--color-primary)'
          fontSize='var(--font-size-sm)'
          fontWeight='700'
          textAlign='center'
          borderRadius='7px'
          width='fit-content'
          px='var(--space-xs)'
          py='1px'
        >
          {noticeType}
        </Text>
      )}

      <Box display='flex' flexDir='column' gap='var(--space-xxs)'>
        {title && <Text fontWeight='700'>{title}</Text>}
        {contents && <Text color='var(--color-gray)'>{contents}</Text>}
      </Box>
    </Flex>
  );
};

export default Notice;
