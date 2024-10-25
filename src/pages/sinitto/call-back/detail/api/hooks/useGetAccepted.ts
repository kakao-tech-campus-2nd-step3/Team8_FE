import { getAccepted } from '../get-accepted.api';
import { useQuery } from '@tanstack/react-query';

export const useGetAccepted = () => {
  return useQuery({
    queryKey: ['acceptedCallback'],
    queryFn: getAccepted,
    staleTime: 0,
  });
};
