import { useState } from 'react';

import { TimeSlots } from '../types';

export const useHelloCallState = () => {
  const [timeSlotsArray, setTimeSlotsArray] = useState<TimeSlots[]>([]);
  const [serviceTime, setServiceTime] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [selectedSeniorId, setSelectedSeniorId] = useState<string | null>(null);

  return {
    timeSlotsArray,
    setTimeSlotsArray,
    serviceTime,
    setServiceTime,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    price,
    setPrice,
    selectedSeniorId,
    setSelectedSeniorId,
  };
};
