import {
  getViewSpecificGuideline,
  getViewSpecificGuidelineQueryKey,
  ViewSpecificGuidelineResponse,
} from '../api/view-specific-guideline.api';
import { useQuery } from '@tanstack/react-query';

export const useGetViewSpecificGuideline = (guidelineId: number) => {
  return useQuery<ViewSpecificGuidelineResponse, Error>({
    queryKey: [getViewSpecificGuidelineQueryKey(guidelineId)],
    queryFn: () => getViewSpecificGuideline(guidelineId),
  });
};
