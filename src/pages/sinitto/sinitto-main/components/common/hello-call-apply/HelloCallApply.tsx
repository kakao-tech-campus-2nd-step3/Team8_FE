import { lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import { IconArrow } from '@/pages/assets';
import HelloCallImg from '@/pages/assets/shared/hello-call.webp';
import { useGetServiceList } from '@/pages/sinitto/hello-call-list/hooks';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ResponseBox = lazy(() =>
  import('../../features/response-box/ResponseBox').then((module) => ({
    default: module.ResponseBox,
  }))
);

export const HelloCallApply = () => {
  const { data: helloCallList, isLoading } = useGetServiceList(2);

  return (
    <Flex flexDirection='column' width='100%' gap='var(--space-sm)'>
      <Flex justifyContent='space-between' alignItems='center'>
        <NoticeTitle>
          {isLoading ? <Skeleton width={120} /> : '안부전화 요청'}
        </NoticeTitle>
        <Link to={RouterPath.HELLO_CALL}>
          <MoreButton>
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
          </MoreButton>
        </Link>
      </Flex>
      <Flex w='100%' gap={5}>
        {isLoading ? (
          <Skeleton height={100} width={100} />
        ) : (
          <StyledImage
            height='100px'
            src={HelloCallImg}
            alt='call-icon'
            fetchpriority='high'
          />
        )}
        <Flex flexDirection='column' justifyContent='center'>
          {isLoading ? (
            <>
              <Skeleton width='80%' style={{ marginBottom: '0.5rem' }} />
              <Skeleton width='90%' />
            </>
          ) : (
            <>
              <NoticeText>어르신들의 말벗이 되어주세요!</NoticeText>
              <NoticeText>
                어르신들이 전하지 못한 진심을 듣고 보호자들에게 대신 전해주세요.
              </NoticeText>
            </>
          )}
        </Flex>
      </Flex>
      {isLoading ? (
        <GridBox>
          {[...Array(2)].map((_, index) => (
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
          {helloCallList?.pages?.[0]?.content.map((helloCall) => (
            <ResponseBox
              key={helloCall.helloCallId}
              seniorName={helloCall.seniorName}
              requestTime={`${helloCall.days.length}일 수행`}
              targetPath={`/sinitto/hello-call/${helloCall.helloCallId}`}
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

const NoticeText = styled(Text)`
  color: var(--color-gray);
`;

const MoreButton = styled(Flex)`
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const GridBox = styled(Box)`
  display: grid;
  width: 100%;
  gap: var(--space-sm);
  grid-template-columns: repeat(2, 1fr);
`;

const StyledImage = styled(Image)`
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;
