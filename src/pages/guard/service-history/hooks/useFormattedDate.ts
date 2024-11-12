import { formatDate } from '@/shared';

export const useFormattedDate = (
  startDate: string | undefined,
  endDate: string | undefined
) => {
  return formatDate(startDate, endDate);
};
