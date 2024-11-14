import { fetchInstance } from '@/shared/api/instance';

export const deleteGuidelinePath = () => '/api/guardguidelines/delete';

export const deleteGuidelineQueryKey = () => [deleteGuidelinePath()];

export const deleteGuideline = async (guidelineId: number) => {
  const response = await fetchInstance.delete(deleteGuidelinePath(), {
    params: { guidelineId },
  });
  return response.data;
};
