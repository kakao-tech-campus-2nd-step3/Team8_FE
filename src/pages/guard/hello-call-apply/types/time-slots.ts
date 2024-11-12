export type TimeSlot = {
  dayName: string;
  startTime: string;
  endTime: string;
};

export type TimeSlots = {
  selectedTime?: number | null;
} & TimeSlot;
