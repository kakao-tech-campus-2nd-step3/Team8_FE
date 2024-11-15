import { RequestRow } from '../components';
import { useInfiniteScroll, useCallbackList } from '../hooks';
import { PageLayout } from '@/shared';
import type { CallbackResponse } from '@/shared';
import { Flex, Spinner, Text } from '@chakra-ui/react';

export const CallBackListPage = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useCallbackList();

  const lastElementRef = useInfiniteScroll(
    hasNextPage,
    fetchNextPage,
    isLoading
  );

  return (
    <PageLayout>
      <Flex flexDirection='column' width='100%' gap='var(--space-xs)'>
        {isError && <p>데이터를 불러오는데 오류가 발생했습니다</p>}
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
      {isLoading ? (
        <Spinner size='xl' />
      ) : (
        !isError && !hasNextPage && <Text>더 이상 요청이 없어요 🥲</Text>
      )}
    </PageLayout>
  );
};

export default CallBackListPage;
