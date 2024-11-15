export type AddGuidelineRequest = {
  seniorId: number;
  type: string;
  title: string;
  content: string;
};

export type ModifyGuidelineRequest = {
  seniorId: number;
  type: string;
  title: string;
  content: string;
};

export type SeniorAllGuideLineRequest = {
  seniorId: number;
  guidelineType: string;
};
