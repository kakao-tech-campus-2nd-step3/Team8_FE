import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { registerUser } from '../apis';
import { SignupApiResponse } from '../types';
import { RouterPath } from '@/app/routes/path';
import { authStorage } from '@/shared/utils/storage';
import { useMutation } from '@tanstack/react-query';

const useRegister = () => {
  const navigate = useNavigate();

  const handleSuccess = (data: SignupApiResponse) => {
    if ('status' in data && data.status === 207) {
      alert(data.detail);
    } else {
      console.log(data);
      if ('accessToken' in data) {
        authStorage.accessToken.set(data.accessToken);
        authStorage.refreshToken.set(data.refreshToken);
        alert('회원가입이 완료되었습니다.');
        navigate(data.isSinitto ? RouterPath.SINITTO : RouterPath.GUARD);
      }
    }
  };

  const handleError = (error: AxiosError) => {
    if (error.response && error.response.data) {
      alert('회원가입 중 오류가 발생했습니다.');
    } else {
      alert('회원가입 중 네트워크 오류가 발생했습니다.');
    }
  };

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return mutation;
};

export default useRegister;
