import { useRef, useCallback, useEffect } from 'react';

export const useInfiniteScroll = (
  hasNextPage: boolean,
  fetchNextPage: () => void,
  isLoading: boolean
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLButtonElement | null) => {
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
    return () => observerRef.current?.disconnect();
  }, []);

  return lastElementRef;
};
