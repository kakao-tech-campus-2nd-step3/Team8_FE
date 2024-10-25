import { fetchInstance } from '@/shared/api/instance';

export type ModifyGuidelineRequest = {
  seniorId: number;
  type: string;
  title: string;
  content: string;
};

export const modifyGuidelinePath = (guidelineId: number) =>
  `/api/guardguidelines/${guidelineId}`;

export const modifyGuidelineQueryKey = (guidelineId: number) => [
  modifyGuidelinePath(guidelineId),
];

export const modifyGuideline = async (
  guidelineId: number,
  guideline: ModifyGuidelineRequest
) => {
  const response = await fetchInstance.put(
    modifyGuidelinePath(guidelineId),
    guideline
  );
  return response.data;
};
