import { TimeSlots } from '@/shared';

export type ServiceDetailResponse = {
  startDate: string;
  endDate: string;
  timeSlots: TimeSlots[];
  requirement: string;
  seniorName: string;
  seniorPhoneNumber: string;
  serviceTime: number;
  price: number;
};
