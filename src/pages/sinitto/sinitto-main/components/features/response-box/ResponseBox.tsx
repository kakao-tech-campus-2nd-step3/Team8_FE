import { Link } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  seniorName: string;
  requestTime: string;
  targetPath: string;
  status?: string;
};

export const ResponseBox = ({
  seniorName,
  requestTime,
  targetPath,
  status,
}: Props) => {
  const displayStatus = status === 'WAITING' ? '대기' : '대기';

  return (
    <Link to={targetPath}>
      <Wrapper>
        <Text fontSize='lg'>{seniorName}님</Text>
        <Flex justify='space-between' alignItems='center'>
          <Text color='var(--color-gray)' fontSize='sm'>
            {requestTime}
          </Text>
          <StateBox>{displayStatus}</StateBox>
        </Flex>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  gap: var(--space-xs);
  padding: var(--space-sm);
  box-shadow: 0 0 4px 1px var(--color-shadow);
  border-radius: 1rem;
  width: 100%;
  cursor: pointer;
`;

const StateBox = styled(Flex)`
  background-color: #ffda76;
  padding: 2.5px 10px;
  border-radius: 5px;
  font-size: var(--font-size-sm);
`;
