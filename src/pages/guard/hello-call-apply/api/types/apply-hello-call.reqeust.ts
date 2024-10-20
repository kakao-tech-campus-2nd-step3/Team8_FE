export type TimeSlot = {
  dayName: string;
  startTime: string;
  endTime: string;
};

export type ApplyHelloCallRequest = {
  seniorId: number;
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[];
  price: number;
  serviceTime: number;
  requirement: string;
};
