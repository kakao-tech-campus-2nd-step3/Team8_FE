import { CallbackResponse } from '@/shared';

export type CallbackListResponse = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Array<CallbackResponse>;
  number: number;
  numberOfElements: number;
  empty: boolean;
};
