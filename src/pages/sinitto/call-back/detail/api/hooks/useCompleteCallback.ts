import { CompleteCallback } from '../complete-call-back.api';
import { useMutation } from '@tanstack/react-query';

export const useCompleteCallback = () => {
  return useMutation({
    mutationFn: CompleteCallback,
    onSuccess: () => {
      alert('진행중인 콜백 서비스가 완료되었습니다.');
    },
    onError: (error) => {
      alert(`콜백 서비스 완료 중 오류가 발생했습니다: ${error.message}`);
    },
  });
};
