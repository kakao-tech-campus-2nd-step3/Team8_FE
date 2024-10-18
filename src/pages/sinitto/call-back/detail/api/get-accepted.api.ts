import { fetchInstance } from '@/shared/api/instance';
import type { CallbackResponse } from '@/shared/types';

const getAcceptedPath = () => `/api/callbacks/sinitto/accepted`;

export const getAccepted = async () => {
  const response = await fetchInstance.get<CallbackResponse>(getAcceptedPath());
  return response.data;
};
