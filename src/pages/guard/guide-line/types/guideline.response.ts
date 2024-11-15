import { SeniorGuideLineData } from './guidelineData';

export type SeniorAllGuideLineResponse = SeniorGuideLineData[];

export type ViewSpecificGuidelineResponse = {
  title: string;
  content: string;
}[];
