import { getGuidelines } from '../get-guideline.api';
import { useQuery } from '@tanstack/react-query';

export const useGetGuideline = (seniorId: number, type: string) => {
  return useQuery({
    queryKey: ['Guideline', seniorId, type],
    queryFn: () => getGuidelines(seniorId, type),
    enabled: !!seniorId && !!type,
  });
};
