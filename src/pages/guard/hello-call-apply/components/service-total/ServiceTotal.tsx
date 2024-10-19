import { useState } from 'react';

import { usePostCostHelloCall } from '../../api/hooks';
import { CostHelloCallRequest } from '../../api/types';
import { TimeSlots, useSortDays } from '@/pages';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  serviceTime: number;
  startDate: Date | null;
  endDate: Date | null;
  timeSlotsArray: TimeSlots[];
  setPrice: (price: number) => void;
};

export const ServiceTotal = ({
  serviceTime,
  startDate,
  endDate,
  timeSlotsArray,
  setPrice,
}: Props) => {
  const [totalServiceCount, setTotalServiceCount] = useState<number | null>(0);

  const { mutate: postCostHelloCall } = usePostCostHelloCall();

  const sortedTimeSlotsArray = useSortDays(timeSlotsArray);

  const isButtonDisabled = serviceTime === 0;

  const handleButtonClick = () => {
    const requestPayload: CostHelloCallRequest = {
      serviceTime,
      startDate: startDate?.toISOString() || '',
      endDate: endDate?.toISOString() || '',
      timeSlots: sortedTimeSlotsArray,
    };

    postCostHelloCall(requestPayload, {
      onSuccess: (data) => {
        setPrice(data.price);
        setTotalServiceCount(data.totalServiceCount);
      },
    });
  };

  return (
    <ContentsBox>
      <TitleText>서비스 총 이용 횟수</TitleText>
      <Flex alignItems='center' justifyContent='center' gap={2} mb={3}>
        <Text as='b'>매주</Text>
        <HighlightText>{serviceTime}분</HighlightText>
        <Text as='b' mx='0.5'>
          씩
        </Text>
        <HighlightText>{totalServiceCount}회</HighlightText>
        <Text as='b'>서비스 이용</Text>
      </Flex>
      <Button
        onClick={handleButtonClick}
        backgroundColor={isButtonDisabled ? '#e2e8e0' : 'var(--color-primary)'}
        color={isButtonDisabled ? '#a0aec0' : 'var(--color-white)'}
        isDisabled={isButtonDisabled}
      >
        포인트 계산하기
      </Button>
    </ContentsBox>
  );
};

const ContentsBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;

const HighlightText = styled(Flex)`
  background-color: var(--color-primary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--color-white);
  font-weight: 700;
  align-items: center;
  font-size: var(--font-size-lg);
`;
