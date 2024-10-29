import { useSinittoInfo } from '@/shared';
import { Flex, Text } from '@chakra-ui/react';

export const SinittoName = () => {
  const { data } = useSinittoInfo();

  return (
    <Flex w='100%' alignItems='center' my={10}>
      <Text color='var(--color-primary)' fontSize='24px' fontWeight='700'>
        {data?.name}
      </Text>
      <Text fontSize='lg' fontWeight='700'>
        님 안녕하세요!
      </Text>
    </Flex>
  );
};
