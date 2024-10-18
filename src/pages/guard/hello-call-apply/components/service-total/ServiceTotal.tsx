import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  time: number;
  count: number;
};

export const ServiceTotal = ({ time, count }: Props) => {
  const isButtonDisabled = time === 0;
  return (
    <ContentsBox>
      <TitleText>서비스 총 이용 횟수</TitleText>
      <Flex alignItems='center' justifyContent='center' gap={2} mb={3}>
        <Text as='b'>매주</Text>
        <HighlightText>{time}분</HighlightText>
        <Text as='b' mx='0.5'>
          씩
        </Text>
        <HighlightText>{count}회</HighlightText>
        <Text as='b'>서비스 이용</Text>
      </Flex>
      <Button
        backgroundColor={isButtonDisabled ? '#e2e8e0' : 'var(--color-primary)'}
        color={isButtonDisabled ? '#a0aec0' : 'var(--color-white)'}
        isDisabled={isButtonDisabled}
      >
        <Text color='var(--color-white)'>포인트 계산하기</Text>
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
