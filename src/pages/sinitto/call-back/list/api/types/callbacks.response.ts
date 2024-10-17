export type CallbacksResponse = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Array<Callback>;
  number: number;
  numberOfElements: number;
  empty: boolean;
};

type Callback = {
  callbackId: number;
  seniorName: string;
  postTime: string;
  status: string;
  seniorId: number;
};
