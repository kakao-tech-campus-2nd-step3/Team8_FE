import { GuideLineButton } from '@/shared';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  seniorId: number | null;
};

export const GuideLineList = ({ seniorId }: Props) => {
  return (
    <Flex w='full' flexDir='column' gap='var(--space-sm)'>
      <Flex w='full' flexDir='column' gap='var(--space-xs)'>
        <NoticeTitle>요청 가이드라인 리스트</NoticeTitle>
        <Flex w='full' flexDir='column' gap='var(--space-xxs)'>
          <NoticeText>요청 가이드라인을 만들어보세요!</NoticeText>
          <NoticeText>시니또들이 더욱 빠르게 도움을 줄 수 있습니다.</NoticeText>
        </Flex>
      </Flex>
      <Flex>
        <GuideLineButton seniorId={seniorId} />
      </Flex>
    </Flex>
  );
};

const NoticeTitle = styled(Text)`
  font-size: var(--font-size-xxl);
  font-weight: 700;
`;

const NoticeText = styled(Text)`
  color: var(--color-gray);
  font-size: var(--font-size-md);
`;
