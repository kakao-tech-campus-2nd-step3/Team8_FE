import { NOTICE_DATA } from '../../data';
import { Notice } from '@/shared';
import { Flex } from '@chakra-ui/react';

export const NoticeArea = () => {
  return (
    <Flex w='full' flexDir='column' gap='var(--space-sm)'>
      <Flex flexDir='column'>
        <Notice
          noticeType={NOTICE_DATA.noticeType}
          title={NOTICE_DATA.title_price}
          contents={NOTICE_DATA.contents_price}
        />
      </Flex>
      <Flex flexDir='column'>
        <Notice
          noticeType={NOTICE_DATA.noticeType}
          title={NOTICE_DATA.title_info}
          contents={NOTICE_DATA.contents_info}
        />
      </Flex>
    </Flex>
  );
};
