type DateType = string | undefined;

export const formatDate = (startDate: DateType, endDate: DateType) => {
  const start = startDate?.split('-').slice(1).join('.');
  const end = endDate?.split('-').slice(1).join('.');
  return `${start}-${end}`;
};
