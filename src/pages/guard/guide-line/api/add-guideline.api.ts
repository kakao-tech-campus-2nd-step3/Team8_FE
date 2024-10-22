import { fetchInstance } from '@/shared/api/instance';

export type AddGuidelineRequest = {
  seniorId: number;
  type: string;
  title: string;
  content: string;
};

const addGuidelinePath = () => '/api/guardguidelines';

export const addGuidelineQueryKey = () => [addGuidelinePath()];

export const addGuideline = async (guideline: AddGuidelineRequest) => {
  const response = await fetchInstance.post(addGuidelinePath(), guideline);
  return response.data;
};
