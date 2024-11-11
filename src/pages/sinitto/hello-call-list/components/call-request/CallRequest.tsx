import { forwardRef } from 'react';

import { IconArrow } from '@/pages/assets';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  onClick?: () => void;
  seniorName?: string;
  days?: string[];
};

const CallRequest = forwardRef<HTMLDivElement, Props>(
  ({ onClick, seniorName, days }, ref) => {
    return (
      <Box
        display='flex'
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
            {days?.map((day, index) => <DayBox key={index}>{day}</DayBox>)}
          </Box>
          <Box>
            <IconArrow fill='var(--color-gray)' type='solid' height='24' />
          </Box>
        </Box>
      </Box>
    );
  }
);

CallRequest.displayName = 'CallRequest';

export default CallRequest;

const DayBox = styled(Text)`
  padding: 0.125rem 0.3rem;
  border-radius: 0.25rem;
  background-color: var(--color-secondary);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
`;
