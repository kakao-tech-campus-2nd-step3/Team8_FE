export type ApplyCallList = {
  helloCallId: number;
  seniorName: string;
  days: string[];
  //   statue: 'WAITING' | 'ACTIVE' | 'COMPLETED';
  statue: string;
};

export type ApplyCallListResponse = ApplyCallList[];
