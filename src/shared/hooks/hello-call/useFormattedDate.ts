export const useFormattedDate = (dateString?: string) => {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${month}월 ${day}일`;
};
