import type { CallbackResponse } from '../../types';
import { fetchInstance } from '@/shared/api/instance';
import { useQuery } from '@tanstack/react-query';

const getCallbackPath = (callbackId: string) => `/api/callbacks/${callbackId}`;

const getCallback = async (callbackId: string) => {
  const response = await fetchInstance.get<CallbackResponse>(
    getCallbackPath(callbackId)
  );
  return response.data;
};

export const useGetCallback = (callbackId: string) => {
  return useQuery({
    queryKey: ['callback', callbackId],
    queryFn: () => getCallback(callbackId),
    enabled: !!callbackId,
  });
};
