import { fetchInstance } from '@/shared/api/instance';
import { BASE_URI } from '@/shared/constants';
import type { CallbackResponse } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

const getAcceptedPath = () => `${BASE_URI}/api/callbacks/sinitto/accepted`;

const getAccepted = async () => {
  const response = await fetchInstance.get<CallbackResponse>(getAcceptedPath());
  return response.data;
};

export const useGetAccepted = () => {
  return useQuery({
    queryKey: ['acceptedCallback'],
    queryFn: getAccepted,
    staleTime: 0,
  });
};
