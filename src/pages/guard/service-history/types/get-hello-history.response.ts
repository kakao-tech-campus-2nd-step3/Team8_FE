export type HelloCallHistory = {
  helloCallId: number;
  seniorName: string;
  days: [string];
  status: string;
};

export type HelloCallHistoryListResponse = HelloCallHistory[];
