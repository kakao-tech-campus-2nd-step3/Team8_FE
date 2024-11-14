import { useGetApplyHelloCallList } from './useGetApplyHelloCallList';

export const useApplyHelloCallData = () => {
  const { data: applyHelloCallList, isLoading: isApplyHelloLoading } =
    useGetApplyHelloCallList();

  return {
    applyHelloCallList,
    isApplyHelloLoading,
  };
};
