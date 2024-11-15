import { useAllSeniorInfo } from '@/shared';

export const useSelectSenior = () => {
  const { data: seniors, isLoading, error } = useAllSeniorInfo();

  return { seniors, isLoading, error };
};
