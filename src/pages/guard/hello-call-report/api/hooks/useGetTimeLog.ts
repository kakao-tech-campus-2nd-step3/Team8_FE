import { getTimeLog, getTimeLogPath } from '../time-log.api';
import { TimeLogResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

const TimeLogQueryKey = [getTimeLogPath];

export const useGetTimeLog = (callId: number) => {
  return useQuery<TimeLogResponse>({
    queryKey: [TimeLogQueryKey, callId],
    queryFn: () => getTimeLog(callId),
  });
};
