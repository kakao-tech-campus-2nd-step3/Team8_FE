export const formatPhoneNumber = (phone: string) => {
  const match = phone.match(/(\d{3})(\d{4})(\d{4})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : phone;
};
