export type AcceptCallList = {
  helloCallId: number;
  seniorName: string;
  days: string[];
  //   status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED';
  status: string;
};

export type AcceptCallListResponse = AcceptCallList[];
