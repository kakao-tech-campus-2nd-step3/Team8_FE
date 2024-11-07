import { fetchInstance } from '@/shared/api/instance';

const WITHDRAWAL_PATH = 'api/members/withdrawal';

export const userWithdrawal = async () => {
  const response = await fetchInstance.delete(WITHDRAWAL_PATH);
  return response.data;
};
