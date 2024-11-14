import { forwardRef } from 'react';

import { IconArrow } from '@/pages/assets';
import { Box, Flex, Text } from '@chakra-ui/react';

type Props = {
  onClick?: () => void;
  seniorName?: string;
  days?: string[];
};

const CallRequest = forwardRef<HTMLDivElement, Props>(
  ({ onClick, seniorName, days }, ref) => {
    return (
      <Flex
        flexDir='row'
        alignItems='center'
        textAlign='center'
        justifyContent='space-between'
        px='var(--space-md)'
        py='var(--space-sm)'
        backgroundColor='var(--color-white-gray)'
        width='100%'
        borderRadius='10px'
        ref={ref}
        onClick={onClick}
      >
        <Box>
          <Text>{seniorName}님의 요청</Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Box
            display='flex'
            flexDir='row'
            alignItems='center'
            marginRight='var(--space-xs)'
            gap='var(--space-xxs)'
          >
            {days?.map((day, index) => (
              <Text
                key={index}
                padding='0.125rem 0.3rem'
                borderRadius='0.25rem'
                backgroundColor='var(--color-secondary)'
                fontSize='var(--font-size-sm)'
                color='var(--color-primary)'
              >
                {day}
              </Text>
            ))}
          </Box>
          <Box>
            <IconArrow fill='var(--color-gray)' type='solid' height='24' />
          </Box>
        </Box>
      </Flex>
    );
  }
);

CallRequest.displayName = 'CallRequest';

export default CallRequest;
