export type TimeSlots = {
  dayName: string;
  startTime: Time;
  endTime: Time;
};

type Time = {
  hour: number;
  minute: number;
  second: number;
  nano: number;
};
