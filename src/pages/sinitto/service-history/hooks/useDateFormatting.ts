export const useDateFormatting = (date: string) => {
  const serviceDate = date
    ? date
        .split('T')[0]
        .replace(/(\d{4})-(\d{2})-(\d{2})/, '$1.$2.$3')
        .slice(2)
    : '';

  return serviceDate;
};
