import { useGetCallbacks } from '../hooks';

export const useCallbacks = (pageSize: number) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCallbacks(pageSize);

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};
