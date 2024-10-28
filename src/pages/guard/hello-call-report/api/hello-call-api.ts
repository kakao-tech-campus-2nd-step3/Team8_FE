import {
  HelloCallRequest,
  HelloCallResponse,
} from './types/hello-call.response';
import { fetchInstance } from '@/shared/api/instance';

const getHelloCallPath = (callId: number) => `/api/hellocalls/guards/${callId}`;

export const HelloCallQueryKey = [getHelloCallPath];

export const putHelloCall = async (
  callId: number,
  data: HelloCallRequest
): Promise<HelloCallRequest> => {
  const response = await fetchInstance.put<HelloCallRequest>(
    getHelloCallPath(callId),
    data
  );

  return response.data;
};

export const deleteHelloCall = async (
  callId: number
): Promise<HelloCallResponse> => {
  const response = await fetchInstance.delete<HelloCallResponse>(
    getHelloCallPath(callId)
  );

  return response.data;
};
