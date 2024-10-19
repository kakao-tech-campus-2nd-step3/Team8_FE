import { useMemo } from 'react';

import { DAY_ORDER } from '../data';

export const useSortDays = (daysArray: string[]) => {
  return useMemo(() => {
    return daysArray
      .filter((day) => day)
      .sort((a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b));
  }, [daysArray]);
};
