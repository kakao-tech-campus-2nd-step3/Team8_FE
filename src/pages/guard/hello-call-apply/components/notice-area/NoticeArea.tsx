import { NOTICE_DATA } from '@/pages';
import { Notice } from '@/shared';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const NoticeArea = () => {
  return (
    <Flex w='full' flexDir='column' gap='var(--space-sm)'>
      <NoticeBox>
        <Notice
          noticeType={NOTICE_DATA.noticeType}
          title={NOTICE_DATA.title_price}
          contents={NOTICE_DATA.contents_price}
        />
      </NoticeBox>
      <NoticeBox>
        <Notice
          noticeType={NOTICE_DATA.noticeType}
          title={NOTICE_DATA.title_info}
          contents={NOTICE_DATA.contents_info}
        />
      </NoticeBox>
    </Flex>
  );
};

const NoticeBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;
