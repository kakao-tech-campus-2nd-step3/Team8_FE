import { DAY_SCHEMA } from '../../../data';
import {
  useCancelHelloCall,
  useNavigateToDetail,
  useToggleExpand,
} from '../../../hooks';
import { StatusButton } from '../../features';
import { BasicButton } from '@/shared';
import { Flex, Text } from '@chakra-ui/react';
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
  const { isExpanded, toggleExpand } = useToggleExpand(serviceStatus);
  const { cancelService } = useCancelHelloCall(helloCallId);
  const { goToDetail } = useNavigateToDetail(helloCallId);

  return (
    <Wrapper onClick={toggleExpand}>
      <ItemBox>
        <Flex w='full' justifyContent='space-between'>
          <Flex alignItems='center' gap={1}>
            <Text fontSize='var(--font-size-xl)' fontWeight='700'>
              {name}
            </Text>
            <Text mt='4px'>시니어</Text>
          </Flex>
          <Flex>
            <StatusButton status={serviceStatus} />
          </Flex>
        </Flex>
        {isExpanded && serviceStatus === 'IN_PROGRESS' && (
          <ExpandedContent>
            <Flex w='full' gap='var(--space-xxs)'>
              {DAY_SCHEMA.map((day) => (
                <DayButton key={day} isSelect={days.includes(day)}>
                  {day}
                </DayButton>
              ))}
            </Flex>
            <Flex w='full' mt='var(--space-xs)' gap='var(--space-xs)'>
              <BasicButton
                height='40px'
                themeType='gray'
                onClick={cancelService}
              >
                취소하기
              </BasicButton>
              <BasicButton height='40px' onClick={goToDetail}>
                상세보기
              </BasicButton>
            </Flex>
          </ExpandedContent>
        )}
      </ItemBox>
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

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-white-gray);
  padding: var(--space-sm);
  border-radius: 10px;
  justify-content: space-between;
`;

const ExpandedContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: var(--space-sm);
  flex-direction: column;
  align-items: center;
  transition: background 0.3s ease;
`;

const DayButton = styled.button<{ isSelect: boolean }>`
  width: 100%;
  background-color: ${(props) =>
    props.isSelect ? 'var(--color-secondary)' : '#FAFAFA'};
  color: ${(props) =>
    props.isSelect ? 'var(--color-primary)' : 'var(--color-gray)'};
  padding: 10px;
  margin: 2px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: ${(props) => (props.isSelect ? '700' : '500')};
  outline: 0;
  font-size: var(--font-size-sm);
`;
