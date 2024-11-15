export const validatePhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^010-\d{4}-\d{4}$/;
  if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
    return false;
  }
  return true;
};
