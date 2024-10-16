import { ServicePeriod, ServiceTime, ServiceTotal } from './components';
import { NOTICE_DATA } from './data';
import { Notice } from '@/shared';
import { Box, Button, Flex, Select, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HelloCallApplyPage = () => {
  return (
    <HelloCallApplyPageLayout>
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
      <ContentsBox>
        <TitleText>대상자 선택</TitleText>
        <Select variant='filled' placeholder='시니어를 선택해주세요'>
          <option value='senior-1'>이도훈</option>
          <option value='senior-2'>이지호</option>
        </Select>
      </ContentsBox>
      <ServiceTime />
      <ServicePeriod />
      <ServiceTotal />
      <Box
        display='flex'
        flexDir='column'
        w='100%'
        textAlign='start'
        justifyContent='start'
      >
        <TitleText>시니또에게 전할 내용</TitleText>
        <Flex w='100%' my={3}>
          <Textarea placeholder='어르신에 대한 내용을 입력해주세요' />
        </Flex>
      </Box>
      <Button w='90%' backgroundColor='var(--color-primary)'>
        <Text color='var(--color-white)'>2,000 point로 신청하기</Text>
      </Button>
    </HelloCallApplyPageLayout>
  );
};

const HelloCallApplyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.5rem;
`;

const NoticeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

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
