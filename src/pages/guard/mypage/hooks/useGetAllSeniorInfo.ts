import { allSeniorInfoPath, getAllSeniorInfo } from '../apis';
import { AllSeniorInfoResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const allSeniorInfoQueryKey = [allSeniorInfoPath()];

export const useGetAllSeniorInfo = () => {
  return useQuery<AllSeniorInfoResponse, Error>({
    queryKey: allSeniorInfoQueryKey,
    queryFn: () => getAllSeniorInfo(),
  });
};
