import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import { userLogout } from '@/shared';
import { authStorage } from '@/shared/utils';
import { useMutation } from '@tanstack/react-query';

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      authStorage.accessToken.set(undefined);
      authStorage.refreshToken.set(undefined);
      alert('로그아웃 되었습니다.');
      navigate(RouterPath.ROOT);
    },
  });
};
