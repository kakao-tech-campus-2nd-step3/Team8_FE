import { useServiceTotal } from '../../hooks';
import { TimeSlots } from '../../types';
import { BasicButton } from '@/shared';
import { Box, Flex, Text } from '@chakra-ui/react';
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
  const { totalServiceCount, isButtonDisabled, calculatePoint } =
    useServiceTotal(serviceTime, startDate, endDate, timeSlotsArray, setPrice);

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
      <BasicButton onClick={calculatePoint} isDisabled={isButtonDisabled}>
        포인트 계산하기
      </BasicButton>
    </ContentsBox>
  );
};

const ContentsBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
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
