import { applyCallListPath, getApplyCallList } from '../apply-call-list.api';
import { ApplyCallListResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

const ApplyCallListQueryKey = [applyCallListPath()];

export const useGetApplyCallList = () => {
  return useQuery<ApplyCallListResponse>({
    queryKey: ApplyCallListQueryKey,
    queryFn: () => getApplyCallList(),
  });
};
