import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetServiceList } from './api';
import { CallRequest } from './components';
import { RouterPath } from '@/app/routes/path';
import { LoadingView } from '@/shared/components';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloCallListPage = () => {
  const [isLastPageReached, setIsLastPageReached] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { data, isError, isLoading, hasNextPage, fetchNextPage, error } =
    useGetServiceList(10);

  const navigate = useNavigate();

  const allContent = data?.pages.flatMap((page) => page.content) ?? [];

  const handlerNavigate = (helloCallId: number) => {
    navigate(`${RouterPath.HELLO_CALL_SERVICE}/${helloCallId}`);
  };

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    if (isError && error instanceof Error && error.message.includes('500')) {
      setIsLastPageReached(true);
    }
  }, [isError, error]);

  if (isLoading && !data) return <LoadingView />;
  if (isError && !isLastPageReached) return <Text>에러가 발생했습니다.</Text>;
  if (!data) return null;

  return (
    <HelloCallListLayout>
      <Flex w='100%' justifyContent='end'>
        <Text>새로고침</Text>
      </Flex>
      {allContent.map((item, index) => {
        const isLastElement = index === allContent.length - 1; // 마지막 요소인지 확인
        return (
          <CallRequest
            key={item.helloCallId}
            seniorName={item.seniorName}
            days={item.days}
            onClick={() => handlerNavigate(item.helloCallId)}
            ref={isLastElement ? lastElementRef : null} // 마지막 요소에 ref 할당
          />
        );
      })}
      {(!hasNextPage || isLastPageReached) && (
        <Text>더 이상 요청이 없어요 🥲</Text>
      )}
      {isLoading && hasNextPage && !isLastPageReached && <LoadingView />}
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
