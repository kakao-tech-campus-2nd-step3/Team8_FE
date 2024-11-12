import { useServiceDate } from '../hooks';

export const useFormattedServiceDates = (
  startDate?: string,
  endDate?: string
) => {
  const formattedStartDate = useServiceDate(startDate);
  const formattedEndDate = useServiceDate(endDate);

  return {
    formattedStartDate,
    formattedEndDate,
  };
};
