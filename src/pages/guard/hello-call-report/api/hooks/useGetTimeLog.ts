import { TimeLogQueryKey, getTimeLog } from '../time-log.api';
import { TimeLogResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const useGetTimeLog = (callId: number) => {
  return useQuery<TimeLogResponse>({
    queryKey: [TimeLogQueryKey, callId],
    queryFn: () => getTimeLog(callId),
  });
};
