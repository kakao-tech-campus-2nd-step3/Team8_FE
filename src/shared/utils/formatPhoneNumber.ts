export const formatPhoneNumber = (phone: string): string => {
  if (/[^\d]/.test(phone)) {
    return phone;
  }

  const numbers = phone;

  if (numbers.length === 11) {
    const match = numbers.match(/(\d{3})(\d{4})(\d{4})/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : phone;
  }

  if (numbers.length === 10) {
    const match = numbers.match(/(\d{3})(\d{3})(\d{4})/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : phone;
  }

  if (numbers.length === 9) {
    const match = numbers.match(/(\d{2})(\d{3})(\d{4})/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : phone;
  }

  return phone;
};

export const parsePhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};
