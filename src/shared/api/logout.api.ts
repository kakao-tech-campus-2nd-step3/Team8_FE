import { fetchInstance } from '@/shared/api/instance';

const getLogoutPath = '/api/members/logout';

export const userLogout = async () => {
  const response = await fetchInstance.delete(getLogoutPath);
  return response.data;
};
