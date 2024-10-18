import { useRef, useCallback } from 'react';
import { Outlet } from 'react-router-dom';

import { useGetCallbacks } from './api/hooks';
import { RequestRow } from './components';
import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CallBackListPage = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCallbacks(10);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLButtonElement | null) => {
      if (isLoading) return <Spinner size='xl' />;

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

  return (
    <>
      <Wrapper>
        {isLoading && <Spinner size='xl' />}
        {isError && <p>데이터를 불러오는데 오류가 발생했습니다</p>}
        {data &&
          (data.pages.length === 0 ? (
            <p>콜백 요청이 없습니다.</p>
          ) : (
            data?.pages.map((page, pageIndex) =>
              page.content.map((callback, index) => {
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
            )
          ))}
      </Wrapper>
      <Outlet />
    </>
  );
};

export default CallBackListPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;
