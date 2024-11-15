export const useFormatPhoneNumber = (phoneNumber: string | undefined) => {
  return phoneNumber?.replace(/^(010)(\d{4})(\d{4})$/, '$1 - $2 - $3');
};
