import { useState } from 'react';

export const useServiceTime = (setServiceTime: (time: number) => void) => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setServiceTime(time);
  };

  return { selectedTime, handleTimeSelect };
};
