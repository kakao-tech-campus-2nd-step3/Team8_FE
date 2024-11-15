import { useFormattedDate } from '@/shared';

export const useServicePeriod = (startDate?: string, endDate?: string) => {
  const formattedStartDate = useFormattedDate(startDate);
  const formattedEndDate = useFormattedDate(endDate);

  return { formattedStartDate, formattedEndDate };
};
