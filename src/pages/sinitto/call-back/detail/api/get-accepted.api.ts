import { fetchInstance } from '@/shared';
import type { CallbackResponse } from '@/shared';

const getAcceptedPath = () => `/api/callbacks/sinitto/accepted`;

export const getAccepted = async () => {
  const response = await fetchInstance.get<CallbackResponse>(getAcceptedPath());
  return response.data;
};
