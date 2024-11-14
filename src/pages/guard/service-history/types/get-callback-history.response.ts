export type CallbackHistoryResponse = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: CallbackHistory[];
  number: number;
  empty: boolean;
};

export type CallbackHistory = {
  callbackId: number;
  seniorName: string;
  postTime: string;
  status: string;
};
