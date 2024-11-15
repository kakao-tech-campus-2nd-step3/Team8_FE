import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import { userWithdrawal } from '@/shared';
import { authStorage } from '@/shared/utils';
import { useMutation } from '@tanstack/react-query';

export const useWithdrawal = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userWithdrawal,
    onSuccess: () => {
      authStorage.accessToken.set(undefined);
      authStorage.refreshToken.set(undefined);
      alert('회원 탈퇴되었습니다.');
      navigate(RouterPath.ROOT);
    },
  });
};
