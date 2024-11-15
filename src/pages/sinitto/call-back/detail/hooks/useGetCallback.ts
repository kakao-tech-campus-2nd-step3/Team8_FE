import { getCallback } from '../apis';
import { useQuery } from '@tanstack/react-query';

export const useGetCallback = (callbackId: string) => {
  return useQuery({
    queryKey: ['callback', callbackId],
    queryFn: () => getCallback(callbackId),
    enabled: !!callbackId,
  });
};
