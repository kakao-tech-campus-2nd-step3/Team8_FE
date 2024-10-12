import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { RouterPath } from '@/app/routes/path';
import {
  SignupApiResponse,
  registerUser,
} from '@/shared/api/auth/user-register';
import { authLocalStorage } from '@/shared/utils/storage';
import { useMutation } from '@tanstack/react-query';

const useRegister = () => {
  const navigate = useNavigate();

  const handleSuccess = (data: SignupApiResponse) => {
    if ('status' in data && data.status === 207) {
      alert(data.detail);
    } else {
      console.log(data);
      if ('accessToken' in data) {
        authLocalStorage.set(data.accessToken);
        authLocalStorage.set(data.refreshToken);
        alert('회원가입이 완료되었습니다.');
        navigate(data.isSinitto === 'true' ? RouterPath.ROOT : RouterPath.ROOT);
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
