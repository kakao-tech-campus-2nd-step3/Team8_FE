import { useMemo } from 'react';

import { DAY_ORDER } from '../data';
import { TimeSlots } from '../types';

export const useSortDays = (timeSlotsArray: TimeSlots[]) => {
  const sortedTimeSlotsArray = useMemo(() => {
    return timeSlotsArray.slice().sort((a, b) => {
      const dayA = DAY_ORDER.indexOf(a.dayName);
      const dayB = DAY_ORDER.indexOf(b.dayName);
      return dayA - dayB;
    });
  }, [timeSlotsArray]);

  return sortedTimeSlotsArray;
};
