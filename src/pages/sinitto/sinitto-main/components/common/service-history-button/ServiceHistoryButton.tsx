import { Link } from 'react-router-dom';

import { Button, Flex } from '@chakra-ui/react';

export const ServiceHistoryButton = () => {
  return (
    <Flex w='full' my={3} justifyContent='end'>
      <Link to={`/sinitto/service-history`}>
        <Button border='none' backgroundColor='var(--color-secondary)'>
          신청한 서비스 보기
        </Button>
      </Link>
    </Flex>
  );
};
