import { NOTICE_DATA } from '@/pages';
import { Notice } from '@/shared';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const NoticeArea = () => {
  return (
    <>
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
    </>
  );
};

const NoticeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;
