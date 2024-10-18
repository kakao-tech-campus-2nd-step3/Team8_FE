import { fetchInstance } from '@/shared/api/instance';
import { useMutation } from '@tanstack/react-query';

const getacceptCallbackPath = (callbackId: number) =>
  `/api/callbacks/accept/${callbackId}`;

const acceptCallback = async (callbackId: number) => {
  const response = await fetchInstance.put(getacceptCallbackPath(callbackId));
  return response.data;
};

export const useAcceptCallback = () => {
  return useMutation({
    mutationFn: acceptCallback,
    onSuccess: () => {
      alert('콜백 요청이 수락되었습니다.');
    },
    onError: (error) => {
      alert(`콜백 요청 수락 신청 중 오류가 발생했습니다: ${error.message}`);
    },
  });
};
