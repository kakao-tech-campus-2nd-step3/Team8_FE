export type ApplyHelloCallList = {
  helloCallId: number;
  seniorName: string;
  days: string[];
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETE' | 'PENDING_COMPLETE';
};

export type ApplyHelloCallListResponse = ApplyHelloCallList[];
