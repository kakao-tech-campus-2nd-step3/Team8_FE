import { useGetSinittoInfo } from '../../../api';
import { Flex, Text, Spinner } from '@chakra-ui/react';

export const SinittoName = () => {
  const { data, isLoading } = useGetSinittoInfo();

  return (
    <Flex w='100%' alignItems='center' mt='var(--space-md)'>
      {isLoading ? (
        <Flex w='100%' justifyContent='left'>
          <Spinner color='var(--color-primary)' size='md' />
        </Flex>
      ) : (
        <>
          <Text color='var(--color-primary)' fontSize='24px' fontWeight='700'>
            {data?.name}
          </Text>
          <Text fontSize='lg' fontWeight='700'>
            님 안녕하세요!
          </Text>
        </>
      )}
    </Flex>
  );
};
