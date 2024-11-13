import { RouterPath } from '@/app/routes';

export const useUserNavigation = () => {
  const navigateToMyPage = () => RouterPath.MYPAGE;

  return { navigateToMyPage };
};
