import { Link } from 'react-router-dom';

import { useDateFormatting } from '../../../hooks';
import { StatusButton } from '../../features';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  date: string | undefined;
  name: string | undefined;
  serviceStatus:
    | 'WAITING'
    | 'IN_PROGRESS'
    | 'COMPLETE'
    | 'PENDING_COMPLETE'
    | undefined;

  callbackId: number | undefined;
};

export const CallBackServiceList = ({
  date,
  name,
  serviceStatus,
  callbackId,
}: Props) => {
  const serviceDate = useDateFormatting(date ?? '');

  return (
    <Wrapper>
      <Link to={`/sinitto/call-back/${callbackId}`}>
        <ItemListBox>
          <Text
            fontWeight='700'
            color='var(--color-gray)'
            w='68px'
            mr='var(--space-xs)'
          >
            {serviceDate}
          </Text>
          <Flex alignItems='end' gap={1} mr='auto'>
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              {name}
            </Text>
            <Text fontWeight='500'>시니어</Text>
          </Flex>
          <StatusButton status={serviceStatus ?? 'WAITING'} />
        </ItemListBox>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const ItemListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--color-white-gray);
  padding: var(--space-sm);
  border-radius: 10px;
  align-items: center;
`;
