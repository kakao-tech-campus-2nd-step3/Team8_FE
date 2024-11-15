export type AcceptedCallBackListResponse = {
  callbackId: number;
  seniorName: string;
  postTime: string;
  seniorId: number;
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETE' | 'PENDING_COMPLETE';
};
