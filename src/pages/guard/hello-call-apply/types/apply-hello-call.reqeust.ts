import { TimeSlot } from './time-slots';

export type ApplyHelloCallRequest = {
  seniorId: number;
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[];
  price: number;
  serviceTime: number;
  requirement: string;
};
