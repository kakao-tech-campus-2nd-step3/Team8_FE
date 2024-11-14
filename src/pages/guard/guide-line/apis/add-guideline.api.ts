import { AddGuidelineRequest } from '../types';
import { fetchInstance } from '@/shared/api/instance';

const addGuidelinePath = () => '/api/guardguidelines';

export const addGuidelineQueryKey = () => [addGuidelinePath()];

export const addGuideline = async (guideline: AddGuidelineRequest) => {
  const response = await fetchInstance.post(addGuidelinePath(), guideline);
  return response.data;
};
