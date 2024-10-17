type TimeSlot = {
  dayName: string;
  startTime: string;
  endTime: string;
};

export type CostHelloCallRequest = {
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[];
  serviceTime: number;
};
