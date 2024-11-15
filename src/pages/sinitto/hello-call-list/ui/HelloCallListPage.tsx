import { lazy } from 'react';

import {
  useInfiniteScroll,
  useErrorHandling,
  useNavigateToDetail,
  useGetServiceList,
} from '../hooks';
import { Text, Skeleton } from '@chakra-ui/react';
import styled from '@emotion/styled';

const CallRequest = lazy(
  () => import('../components/call-request/CallRequest')
);

const HelloCallListPage = () => {
  const { data, isError, isLoading, hasNextPage, fetchNextPage, error } =
    useGetServiceList(10);

  const lastElementRef = useInfiniteScroll(
    isLoading,
    hasNextPage,
    fetchNextPage
  );
  const isLastPageReached = useErrorHandling(isError, error);
  const handlerNavigate = useNavigateToDetail();

  const allContent = data?.pages.flatMap((page) => page.content) ?? [];

  if (isLoading && !data) {
    return (
      <SkeletonPageWrapper>
        <Skeleton height='60px' width='100%' mb='1rem' />
        <Skeleton height='60px' width='100%' mb='1rem' />
        <Skeleton height='60px' width='100%' mb='1rem' />
        <Skeleton height='60px' width='100%' mb='1rem' />
      </SkeletonPageWrapper>
    );
  }

  if (isError && !isLastPageReached) return <Text>에러가 발생했습니다.</Text>;
  if (!data) return null;

  return (
    <HelloCallListLayout>
      {isLoading
        ? Array(10)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} height='70px' width='100%' mb='1rem' />
            ))
        : allContent.map((item, index) => {
            const isLastElement = index === allContent.length - 1;
            return (
              <CallRequest
                key={item.helloCallId}
                seniorName={item.seniorName}
                days={item.days}
                onClick={() => handlerNavigate(item.helloCallId)}
                ref={isLastElement ? lastElementRef : null}
              />
            );
          })}
      {(!hasNextPage || isLastPageReached) && (
        <Text>더 이상 요청이 없어요 🥲</Text>
      )}
      {isLoading && hasNextPage && !isLastPageReached && (
        <Skeleton height='70px' width='100%' mb='1rem' />
      )}
    </HelloCallListLayout>
  );
};

export default HelloCallListPage;

const HelloCallListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  margin: 3rem 1.5rem;
`;

const SkeletonPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  margin: 3rem 1.5rem;
`;
