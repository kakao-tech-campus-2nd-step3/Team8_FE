import { lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';

import { RouterPath } from '@/app/routes';
import { IconArrow } from '@/pages/assets';
import IconCall from '@/pages/assets/sinitto-main/call.svg';
import { useGetCallbackList } from '@/pages/sinitto/call-back';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ResponseBox = lazy(() =>
  import('../../features/response-box/ResponseBox').then((module) => ({
    default: module.ResponseBox,
  }))
);

export const CallBackApply = () => {
  const { data: callBackList, isLoading } = useGetCallbackList(4);

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
        <NoticeTitle>
          {isLoading ? <Skeleton width={100} /> : '콜백 요청'}
        </NoticeTitle>
        <Link to={RouterPath.CALL_BACK_LIST}>
          <Flex h='full' alignItems='center'>
            {isLoading ? (
              <Skeleton width={80} />
            ) : (
              <>
                <Text
                  fontWeight='700'
                  color='var(--color-gray)'
                  mr='var(--space-xs)'
                  display='block'
                >
                  요청 더보기
                </Text>
                <IconArrow fill='var(--color-gray)' type='solid' />
              </>
            )}
          </Flex>
        </Link>
      </Flex>
      <Flex w='100%' gap={5}>
        {isLoading ? (
          <Skeleton circle width={50} height={50} />
        ) : (
          <Image w='50px' src={IconCall} alt='call-icon' />
        )}
        <Text color='var(--color-gray)' alignItems='center'>
          {isLoading ? (
            <Skeleton width='80%' />
          ) : (
            '대기 중인 요청을 수락해 가이드라인을 확인하고 도움을 시작해보세요.'
          )}
        </Text>
      </Flex>
      {isLoading ? (
        <GridBox>
          {[...Array(4)].map((_, index) => (
            <Box
              p='var(--space-md)'
              borderRadius='md'
              boxShadow='md'
              backgroundColor='var(--color-light-gray)'
              key={index}
            >
              <Skeleton
                height={20}
                width='60%'
                style={{ marginBottom: '0.5rem' }}
              />
              <Skeleton count={2} />
            </Box>
          ))}
        </GridBox>
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
  font-size: var(--font-size-xxl);
  font-weight: 700;
  align-items: center;
`;

const GridBox = styled(Box)`
  display: grid;
  width: 100%;
  gap: var(--space-sm);
  grid-template-columns: repeat(2, 1fr);
`;
