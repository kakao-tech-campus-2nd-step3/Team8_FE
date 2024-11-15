import { DAY_SCHEMA } from '../data';

export const useSelectedDays = (isDaySelected: (day: string) => boolean) => {
  const selectedDays = DAY_SCHEMA.map((day) => ({
    day,
    isSelected: isDaySelected(day),
  }));

  return { selectedDays };
};
