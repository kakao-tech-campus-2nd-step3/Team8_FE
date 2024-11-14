import { useRef, useCallback } from 'react';

import { useGetCallbackList } from './useGetCallbackList';

export const useCallbackList = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCallbackList(10);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLButtonElement | null) => {
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

  return { data, isLoading, isError, lastElementRef, hasNextPage };
};
