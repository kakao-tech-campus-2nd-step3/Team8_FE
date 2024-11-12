import { ViewSpecificGuidelineResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

const getViewSpecificGuidelinePath = (guidelineId: number) =>
  `/api/guideline/${guidelineId}`;

export const getViewSpecificGuidelineQueryKey = (guidelineId: number) => [
  getViewSpecificGuidelinePath(guidelineId),
];

export const getViewSpecificGuideline = async (
  guidelineId: number
): Promise<ViewSpecificGuidelineResponse> => {
  const response = await fetchInstance.get(
    getViewSpecificGuidelinePath(guidelineId),
    {
      params: {
        guidelineId,
      },
    }
  );
  return response.data;
};
