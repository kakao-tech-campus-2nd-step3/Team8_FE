export const validateName = (name: string) => {
  const nameRegex = /^[가-힣a-zA-Z]{1,10}$/;
  if (!name.trim() || !nameRegex.test(name)) {
    return false;
  }
  return true;
};
