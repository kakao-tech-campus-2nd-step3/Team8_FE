import { CancelCallback } from '../cancel-call-back.api';
import { useMutation } from '@tanstack/react-query';

export const useCancelCallback = () => {
  return useMutation({
    mutationFn: CancelCallback,
    onSuccess: () => {
      alert('진행중인 콜백 서비스가 취소되었습니다.');
    },
    onError: (error) => {
      alert(`콜백 서비스 취소 중 오류가 발생했습니다: ${error.message}`);
    },
  });
};
