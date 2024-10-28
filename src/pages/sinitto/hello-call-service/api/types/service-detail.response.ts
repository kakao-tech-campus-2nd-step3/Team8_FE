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

export type ServiceDetailResponse = {
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[];
  requirement: string;
  seniorName: string;
  seniorPhoneNumber: string;
  price: number;
};
