type Time = {
  hour: number;
  minute: number;
  second: number;
  nano: number;
};

type TimeSlot = {
  dayName: string;
  startTime: Time;
  endTime: Time;
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
