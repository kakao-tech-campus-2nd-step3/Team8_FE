import {
  getSeniorAllGuidelines,
  getSeniorAllGuidelinesQueryKey,
} from '../api/view-senior-all-guideline.api';
import { SeniorAllGuideLineResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const useGetSeniorAllGuidelines = (
  seniorId: number,
  guidelineType: string
) => {
  return useQuery<SeniorAllGuideLineResponse, Error>({
    queryKey: [getSeniorAllGuidelinesQueryKey(seniorId, guidelineType)],
    queryFn: () => getSeniorAllGuidelines({ seniorId, guidelineType }),
    enabled: !!seniorId && !!guidelineType,
  });
};
