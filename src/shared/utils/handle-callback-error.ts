import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

export const handleCallbackError = (isError: boolean, error: unknown) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      let errorMessage = '';

      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 409:
            errorMessage = '이미 진행 중인 콜백 요청이 있습니다.';
            break;
          default:
            errorMessage = '데이터를 불러오는 중 오류가 발생했습니다.';
        }
      } else {
        errorMessage = '데이터를 불러오는 중 오류가 발생했습니다.';
      }

      alert(errorMessage);
      navigate('/call-back');
    }
  }, [isError, error, navigate]);
};
