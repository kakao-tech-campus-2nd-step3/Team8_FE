import { getGuidelines } from '../api';
import { useQuery } from '@tanstack/react-query';

export const useGetGuideline = (callbackId: number, type: string) => {
  return useQuery({
    queryKey: ['Guideline', callbackId, type],
    queryFn: () => getGuidelines(callbackId, type),
    enabled: !!callbackId && !!type,
  });
};
