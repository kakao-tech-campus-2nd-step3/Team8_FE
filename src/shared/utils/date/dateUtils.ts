type DateType = string | undefined;

export const formatDate = (startDate: DateType, endDate: DateType) => {
  const start = startDate?.split('-').slice(1).join('.');
  const end = endDate?.split('-').slice(1).join('.');
  return `${start}-${end}`;
};

// postTime
//ex) 2024-11-02T21:45:15.679988 -> 24.11.02
export const formatPostTime = (postTime: string) => {
  const date = postTime.split('T')[0];
  return date.slice(2).replace(/-/g, '.');
};
