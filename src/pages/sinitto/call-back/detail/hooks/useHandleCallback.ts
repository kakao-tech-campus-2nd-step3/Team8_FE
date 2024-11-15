import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import {
  useAcceptCallback,
  useCompleteCallback,
  useCancelCallback,
} from '../hooks';

export const useHandleCallback = () => {
  const navigate = useNavigate();

  const {
    mutate: acceptCallback,
    isPending: isAcceptLoading,
    isSuccess: isAcceptSuccess,
    isError: isAcceptError,
    error: acceptError,
  } = useAcceptCallback();
  if (isAcceptSuccess) {
    window.location.reload();
  }
  if (isAcceptError) {
    const axiosError = acceptError as AxiosError<{ detail: string }>;
    alert(
      axiosError?.response?.data?.detail || '신청하는 중 에러가 발생했습니다.'
    );
  }

  const {
    mutate: completeCallback,
    isPending: isCompleteLoading,
    isSuccess: isCompleteSuccess,
    isError: isCompleteError,
  } = useCompleteCallback();
  if (isCompleteSuccess) {
    alert('진행중인 콜백 서비스가 완료되었습니다.');
    navigate('/sinitto');
  }
  if (isCompleteError) {
    alert(`콜백 서비스 완료 중 오류가 발생했습니다`);
  }

  const {
    mutate: cancelCallback,
    isPending: isCancelLoading,
    isSuccess: isCancelSuccess,
    isError: isCancelError,
  } = useCancelCallback();
  if (isCancelSuccess) {
    alert('진행중인 콜백 서비스가 취소되었습니다.');
    navigate('/sinitto');
  }
  if (isCancelError) {
    alert(`콜백 서비스 취소 중 오류가 발생했습니다`);
  }

  const isLoading = isAcceptLoading || isCancelLoading || isCompleteLoading;

  return {
    acceptCallback,
    completeCallback,
    cancelCallback,
    isLoading,
  };
};
