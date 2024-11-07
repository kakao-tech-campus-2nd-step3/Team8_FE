import { fetchInstance } from '@/shared/api/instance';

const getWithdrawalPath = 'api/members/withdrawal';

export const userWithdrawal = async () => {
  const response = await fetchInstance.delete(getWithdrawalPath);
  return response.data;
};
