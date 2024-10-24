import { GuideLineButton } from '@/shared';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  seniorId: number | null;
};

export const GuideLineList = ({ seniorId }: Props) => {
  return (
    <Wrapper>
      <NoticeBox>
        <NoticeTitle>요청 가이드라인 리스트</NoticeTitle>
        <NoticeText>요청 가이드라인을 만들어보세요!</NoticeText>
        <NoticeText>시니또들이 더욱 빠르게 도움을 줄 수 있습니다.</NoticeText>
      </NoticeBox>
      <Flex>
        <GuideLineButton marginTop={5} seniorId={seniorId} />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const NoticeBox = styled(Wrapper)`
  margin-top: 1.5rem;
`;

const NoticeTitle = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const NoticeText = styled(Text)`
  color: var(--color-gray);
`;
