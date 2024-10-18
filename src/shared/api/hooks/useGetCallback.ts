import { getCallback } from '../get-call-back.api';
import { useQuery } from '@tanstack/react-query';

export const useGetCallback = (callbackId: string) => {
  return useQuery({
    queryKey: ['callback', callbackId],
    queryFn: () => getCallback(callbackId),
    enabled: !!callbackId,
  });
};
