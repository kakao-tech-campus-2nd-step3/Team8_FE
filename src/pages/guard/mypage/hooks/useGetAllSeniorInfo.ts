import { AllSeniorInfoResponse } from '../api';
import {
  allSeniorInfoPath,
  getAllSeniorInfo,
} from '../api/all-senior-info.api';
import { useQuery } from '@tanstack/react-query';

export const allSeniorInfoQueryKey = [allSeniorInfoPath()];

export const useGetAllSeniorInfo = () => {
  return useQuery<AllSeniorInfoResponse, Error>({
    queryKey: allSeniorInfoQueryKey,
    queryFn: () => getAllSeniorInfo(),
  });
};
