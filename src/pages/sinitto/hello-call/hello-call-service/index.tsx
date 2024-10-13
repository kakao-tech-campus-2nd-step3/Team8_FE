import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TitleImg from './asserts/title-icon.png';
import ServiceDetail from './components/service-detail';
import { SERVICE_NOTICE } from './data/notice';
import { RouterPath } from '@/app/routes/path';
import { Notice } from '@/shared/components';
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloCallServicePage = () => {
  const [accepted, setAccepted] = useState(false);

  const handlerAccept = () => {
    setAccepted(true);
  };

  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(`${RouterPath.HELLO_CALL}/${RouterPath.HELLO_CALL_REPORT}`);
  };

  return (
    <HelloCallServicePageLayout>
      {!accepted ? (
        <Box
          display='flex'
          w='full'
          py={3}
          justifyContent='center'
          backgroundColor='#E6DFD1'
          borderRadius='0.5rem'
        >
          <Image src={TitleImg} alt='title-img' />
        </Box>
      ) : (
        <Box display='flex' flexDir='column' alignItems='center'>
          <Box
            display='flex'
            w='10rem'
            justifyContent='center'
            backgroundColor='var(--color-secondary)'
            borderRadius='5px'
          >
            <Text color='var(--color-primary)'>시니어 전화번호</Text>
          </Box>
          <Text fontSize='var(--font-size-xl)' fontWeight='700'>
            010 - 1234 - 1234
          </Text>
        </Box>
      )}
      <ServiceDetail />
      <Box display='flex' flexDir='column' gap={2}>
        <Notice
          title={SERVICE_NOTICE.service_title}
          contents={SERVICE_NOTICE.service_contents}
          noticeType='안부전화'
        />
        {accepted && (
          <>
            <Notice
              title={SERVICE_NOTICE.finish_title}
              contents={SERVICE_NOTICE.finish_contents}
              noticeType='안부전화'
            />
            <Divider />
          </>
        )}
      </Box>
      {!accepted ? (
        <AcceptButton onClick={handlerAccept}>
          서비스 수락하기 (3,000P)
        </AcceptButton>
      ) : (
        <AcceptButton onClick={handlerNavigate}>
          서비스 완료 및 보고서 제출
        </AcceptButton>
      )}
    </HelloCallServicePageLayout>
  );
};

export default HelloCallServicePage;

const HelloCallServicePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin: 1rem 1.5rem;
`;

const AcceptButton = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    background-color: var(--color-primary);
  }
`;
