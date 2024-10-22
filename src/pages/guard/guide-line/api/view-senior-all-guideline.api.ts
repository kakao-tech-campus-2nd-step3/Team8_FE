import { fetchInstance } from '@/shared/api/instance';

export type SeniorAllGuideLineResponse = {
  type: string;
  title: string;
  content: string;
}[];

export type SeniorAllGuideLineRequest = {
  seniorId: number;
  guidelineType: string;
};

// 특정 시니어의 특정 가이드라인 타입(TAXI, DELIVERY)의 가이드라인 조회
const getSeniorAllGuidelinesPath = (
  seniorId?: number,
  guidelineType?: string
) => `/api/guardguidelines/${seniorId}/${guidelineType}`;

export const getSeniorAllGuidelinesQueryKey = (
  seniorId: number,
  guidelineType: string
) => [getSeniorAllGuidelinesPath(seniorId, guidelineType)];

export const getSeniorAllGuidelines = async ({
  seniorId,
  guidelineType,
}: SeniorAllGuideLineRequest): Promise<SeniorAllGuideLineResponse> => {
  const response = await fetchInstance.get(
    getSeniorAllGuidelinesPath(seniorId, guidelineType)
  );
  console.log(response.data);
  return response.data;
};
