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

export type HelloCallRequest = {
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[];
  price: number;
  serviceTime: number;
  requirement: string;
};

export type HelloCallResponse = {
  message: string;
};
