import { applyHelloCallListPath, getApplyHelloCallList } from '../apis';
import { ApplyHelloCallListResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const ApplyCallListQueryKey = [applyHelloCallListPath];

export const useGetApplyHelloCallList = () => {
  return useQuery<ApplyHelloCallListResponse>({
    queryKey: ApplyCallListQueryKey,
    queryFn: () => getApplyHelloCallList(),
  });
};
