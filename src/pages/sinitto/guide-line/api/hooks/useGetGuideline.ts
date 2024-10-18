import type { GuidelineResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';
import { useQuery } from '@tanstack/react-query';

const getGuidelinesPath = (seniorId: number, type: string) =>
  `/api/guardguidelines/${seniorId}/${type}`;

const getGuidelines = async (seniorId: number, type: string) => {
  const response = await fetchInstance.get<GuidelineResponse[]>(
    getGuidelinesPath(seniorId, type)
  );
  return response.data;
};

export const useGetGuideline = (seniorId: number, type: string) => {
  return useQuery({
    queryKey: ['Guideline', seniorId, type],
    queryFn: () => getGuidelines(seniorId, type),
    enabled: !!seniorId && !!type,
  });
};
