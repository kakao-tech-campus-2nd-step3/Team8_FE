import { TimeLogResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getTimeLogPath = (callId: number) =>
  `/api/hellocalls/guards/log/${callId}`;

export const TimeLogQueryKey = [getTimeLogPath];

export const getTimeLog = async (callId: number): Promise<TimeLogResponse> => {
  const response = await fetchInstance.get<TimeLogResponse>(
    getTimeLogPath(callId)
  );
  return response.data;
};
