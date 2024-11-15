import { lazy } from 'react';

import { useInfiniteScroll, useCallbackList } from '../hooks';
import { PageLayout } from '@/shared';
import type { CallbackResponse } from '@/shared';
import { Flex, Text, Skeleton } from '@chakra-ui/react';

const RequestRow = lazy(() =>
  import('../components/request-row/RequestRow').then((module) => ({
    default: module.RequestRow,
  }))
);

export const CallBackListPage = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useCallbackList();

  const lastElementRef = useInfiniteScroll(
    hasNextPage,
    fetchNextPage,
    isLoading
  );

  if (isLoading && !data) {
    return (
      <PageLayout>
        <Flex w='full' flexDir='column' gap='var(--space-xs)'>
          <Skeleton height='60px' width='100%' />
          <Skeleton height='60px' width='100%' />
          <Skeleton height='60px' width='100%' />
          <Skeleton height='60px' width='100%' />
        </Flex>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {isError && <Text>데이터를 불러오는데 오류가 발생했습니다</Text>}
      <Flex flexDirection='column' width='100%' gap='var(--space-xs)'>
        {data &&
          data.pages.map((page, pageIndex) =>
            page.content.map((callback: CallbackResponse, index: number) => {
              const isLastElement =
                pageIndex === data.pages.length - 1 &&
                index === page.content.length - 1;
              return (
                <RequestRow
                  key={callback.callbackId}
                  name={callback.seniorName}
                  time={callback.postTime}
                  id={callback.callbackId.toString()}
                  ref={isLastElement ? lastElementRef : null}
                />
              );
            })
          )}
      </Flex>
      {!isError && !hasNextPage && <Text>더 이상 요청이 없어요 🥲</Text>}
    </PageLayout>
  );
};

export default CallBackListPage;
