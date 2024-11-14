import { getAccepted } from '../apis';
import { useQuery } from '@tanstack/react-query';

export const useGetAccepted = () => {
  return useQuery({
    queryKey: ['acceptedCallback'],
    queryFn: getAccepted,
    staleTime: 0,
  });
};
