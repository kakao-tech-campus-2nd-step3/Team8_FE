import { useMemo } from 'react';

import { TimeSlots } from '../HelloCallApplyPage';
import { DAY_ORDER } from '../data';

// export const useSortDays = (daysArray: string[]) => {
//   return useMemo(() => {
//     return daysArray
//       .filter((day) => day)
//       .sort((a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b));
//   }, [daysArray]);
// };

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
