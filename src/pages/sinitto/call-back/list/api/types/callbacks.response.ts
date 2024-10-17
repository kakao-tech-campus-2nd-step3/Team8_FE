import { CallbackResponse } from '@/shared/types';

export type CallbacksResponse = {
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
