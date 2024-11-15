import {
  getViewSpecificGuideline,
  getViewSpecificGuidelineQueryKey,
} from '../api/view-specific-guideline.api';
import { ViewSpecificGuidelineResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const useGetViewSpecificGuideline = (guidelineId: number) => {
  return useQuery<ViewSpecificGuidelineResponse, Error>({
    queryKey: [getViewSpecificGuidelineQueryKey(guidelineId)],
    queryFn: () => getViewSpecificGuideline(guidelineId),
  });
};
