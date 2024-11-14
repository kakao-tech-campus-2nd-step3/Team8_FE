import { TimeSlots } from '@/shared';

export const useServiceTimes = (
  timeSlots?: TimeSlots[],
  serviceTime?: number
) => {
  return { timeSlots, serviceTime };
};
