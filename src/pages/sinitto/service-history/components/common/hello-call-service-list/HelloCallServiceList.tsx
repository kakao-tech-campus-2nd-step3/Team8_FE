import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePutCancelHelloCall } from '../../../api';
import { DAY_SCHEMA } from '../../../data';
import { StatusButton } from '../../features';
import { Flex, Text, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  name: string;
  serviceStatus: string;
  helloCallId: number;
  days: string[];
};

export const HelloCallServiceList = ({
  name,
  serviceStatus,
  helloCallId,
  days,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { mutate: cancelHelloCall } = usePutCancelHelloCall();

  const navigate = useNavigate();

  const cancelService = (e: React.MouseEvent) => {
    e.stopPropagation();
    cancelHelloCall(helloCallId);
  };

  const toggleExpand = () => {
    if (serviceStatus === 'IN_PROGRESS') {
      setIsExpanded((prev) => !prev);
    }
  };

  const goToReport = (helloCallId: number) => {
    navigate(`/sinitto/hello-call/report/${helloCallId}`);
  };

  return (
    <Wrapper onClick={toggleExpand}>
      <ItemListBox>
        <Flex w='full' justifyContent='space-between'>
          <Flex alignItems='center' gap={1}>
            <Text fontSize='var(--font-size-xl)' fontWeight='700'>
              {name}
            </Text>
            <Text>시니어</Text>
          </Flex>
          <Flex>
            <StatusButton status={serviceStatus} />
          </Flex>
        </Flex>
        {isExpanded && serviceStatus === 'IN_PROGRESS' && (
          <ExpandedContent>
            <Flex w='full' justifyContent='space-between' mb='1rem'>
              {DAY_SCHEMA.map((day) => (
                <DayButton
                  key={day}
                  backgroundColor={
                    days.includes(day) ? 'var(--color-primary)' : '#DADADA'
                  }
                >
                  {day}
                </DayButton>
              ))}
            </Flex>
            <Flex w='full' mt={2} gap={3} justifyContent='space-between'>
              <Button
                w='full'
                color='var(--color-white)'
                backgroundColor='#FF4D68'
                onClick={cancelService}
              >
                취소하기
              </Button>
              <Button
                w='full'
                color='var(--color-white)'
                backgroundColor='#B28BFF'
                onClick={() => goToReport(helloCallId)}
              >
                보고서 작성
              </Button>
            </Flex>
          </ExpandedContent>
        )}
      </ItemListBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ItemListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-white-gray);
  margin: 10px 0;
  padding: 14px;
  border-radius: 10px;
  justify-content: space-between;
`;

const ExpandedContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  transition: background 0.3s ease;
`;

const DayButton = styled.button<{ backgroundColor: string }>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  margin: 2px;
  border: none;
  border-radius: 5px;
  text-align: center;
  color: var(--color-white);
  font-weight: 700;
`;
