import { Link } from 'react-router-dom';

import { BasicButton } from '@/shared';
import { Flex } from '@chakra-ui/react';

export const ServiceHistoryButton = () => {
  return (
    <Flex w='full' justifyContent='end'>
      <Link to={`/sinitto/service-history`}>
        <BasicButton width='150px' themeType='outline'>
          신청한 서비스 보기
        </BasicButton>
      </Link>
    </Flex>
  );
};
