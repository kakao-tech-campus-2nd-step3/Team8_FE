import { getAcceptCallList, acceptCallListPath } from '../accept-call-list.api';
import { AcceptCallListResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

const AcceptCallListQueryKey = [acceptCallListPath()];

export const useGetAcceptCallList = () => {
  return useQuery<AcceptCallListResponse>({
    queryKey: AcceptCallListQueryKey,
    queryFn: () => getAcceptCallList(),
  });
};
