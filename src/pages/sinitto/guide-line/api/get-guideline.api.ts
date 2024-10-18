import type { GuidelineResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getGuidelinesPath = (seniorId: number, type: string) =>
  `/api/guardguidelines/${seniorId}/${type}`;

export const getGuidelines = async (seniorId: number, type: string) => {
  const response = await fetchInstance.get<GuidelineResponse[]>(
    getGuidelinesPath(seniorId, type)
  );
  return response.data;
};
