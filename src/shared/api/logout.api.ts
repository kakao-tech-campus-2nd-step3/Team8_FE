import { fetchInstance } from '@/shared/api/instance';

const LOGOUT_PATH = '/api/members/logout';

export const userLogout = async () => {
  const response = await fetchInstance.delete(LOGOUT_PATH);
  return response.data;
};
