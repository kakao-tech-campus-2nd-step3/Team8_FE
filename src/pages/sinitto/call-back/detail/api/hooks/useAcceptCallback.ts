import { acceptCallback } from '../accept-call-back.api';
import { useMutation } from '@tanstack/react-query';

export const useAcceptCallback = () => {
  return useMutation({
    mutationFn: acceptCallback,
    onError: () => {
      alert(`콜백 요청 수락 신청 중 오류가 발생했습니다`);
    },
  });
};
