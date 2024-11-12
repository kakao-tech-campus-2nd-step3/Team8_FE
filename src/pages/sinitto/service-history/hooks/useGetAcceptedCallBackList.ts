import { getAcceptedCallBackList } from '../apis';
import { getAcceptedCallBackListPath } from '../apis/accepted-call-back-list.api';
import { AcceptedCallBackListResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

const getAcceptedCallBackListQueryKey = [getAcceptedCallBackListPath];

export const useGetAcceptedCallBackList = () => {
  return useQuery<AcceptedCallBackListResponse>({
    queryKey: getAcceptedCallBackListQueryKey,
    queryFn: () => getAcceptedCallBackList(),
  });
};
