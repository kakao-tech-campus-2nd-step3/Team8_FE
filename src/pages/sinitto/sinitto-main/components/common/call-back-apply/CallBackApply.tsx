import { Link } from 'react-router-dom';

import dayjs from 'dayjs';

import { RouterPath } from '@/app/routes';
import { IconArrow } from '@/pages/assets';
import IconCall from '@/pages/assets/sinitto-main/call.svg';
import { ResponseBox, useGetCallbacks } from '@/pages/sinitto';
import { Box, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CallBackApply = () => {
  const { data: callBackList, isLoading } = useGetCallbacks(4);

  const timeSince = (postTime: string) => {
    const now = dayjs();
    const postDate = dayjs(postTime);
    const diffInMinutes = now.diff(postDate, 'minute');

    if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
    const diffInHours = now.diff(postDate, 'hour');
    if (diffInHours < 24) return `${diffInHours}시간 전`;

    const diffInDays = now.diff(postDate, 'day');
    return `${diffInDays}일 전`;
  };

  return (
    <Flex flexDirection='column' width='100%' gap='var(--space-sm)'>
      <Flex justifyContent='space-between' alignItems='center'>
        <NoticeTitle>콜백 요청</NoticeTitle>
        <Link to={RouterPath.CALL_BACK_LIST}>
          <MoreButton gap={3}>
            <Text fontWeight='700' color='var(--color-gray)'>
              요청 더보기
            </Text>
            <IconArrow fill='var(--color-gray)' type='solid' />
          </MoreButton>
        </Link>
      </Flex>
      <Flex w='100%' gap={5}>
        <Image w='50px' src={IconCall} alt='call-icon' />
        <NoticeText>
          대기 중인 요청을 잡아 가이드라인을 확인하고 도움을 시작해보세요.
        </NoticeText>
      </Flex>
      {isLoading ? (
        <Flex justifyContent='center'>
          <Spinner size='lg' color='var(--color-primary)' />
        </Flex>
      ) : (
        <GridBox>
          {callBackList?.pages?.[0]?.content.map((callback) => (
            <ResponseBox
              key={callback.callbackId}
              seniorName={callback.seniorName}
              requestTime={timeSince(callback.postTime)}
              status={callback.status}
              targetPath={`/sinitto/call-back/${callback.callbackId}`}
            />
          ))}
        </GridBox>
      )}
    </Flex>
  );
};

const NoticeTitle = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  align-items: center;
`;

const NoticeText = styled(Text)`
  color: var(--color-gray);
  display: flex;
  align-items: center;
`;

const MoreButton = styled(Flex)`
  border: solid 1px var(--color-gray);
  border-radius: 5px;
  padding: 3px 0.5rem;
  align-items: center;
  text-align: center;
  width: fit-content;
  height: 100%;
`;

const GridBox = styled(Box)`
  display: grid;
  width: 100%;
  gap: var(--space-sm);

  grid-template-columns: repeat(2, 1fr);
`;
