import { TimeSlot } from './time-slots';

export type CostHelloCallRequest = {
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[];
  serviceTime: number;
};
