import type { GuidelineResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getGuidelinesPath = (callbackId: number, type: string) =>
  `/api/guardguidelines/sinitto/${callbackId}/${type}`;

export const getGuidelines = async (callbackId: number, type: string) => {
  const response = await fetchInstance.get<GuidelineResponse[]>(
    getGuidelinesPath(callbackId, type)
  );

  return response.data;
};
