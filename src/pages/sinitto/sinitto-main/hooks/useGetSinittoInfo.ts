import { getSinittoInfo, sinittoInfoPath } from '../api';
import { SinittoInfoResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

const SinittoInfoQueryKey = [sinittoInfoPath()];

export const useGetSinittoInfo = () => {
  return useQuery<SinittoInfoResponse>({
    queryKey: SinittoInfoQueryKey,
    queryFn: () => getSinittoInfo(),
  });
};
