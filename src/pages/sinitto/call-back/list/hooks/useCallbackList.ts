import { useGetCallbackList } from './useGetCallbackList';

export const useCallbackList = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCallbackList(10);

  return { data, isLoading, isError, fetchNextPage, hasNextPage };
};
