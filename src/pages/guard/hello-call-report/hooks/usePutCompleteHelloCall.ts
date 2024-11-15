import { useNavigate } from 'react-router-dom';

import { getHelloCallHistoryQueryKey } from '../../service-history/apis';
import { putCompleteHelloCall } from '../apis';
import { CompleteHellCallResponse } from '../types/complete-hello-call.response';
import { queryClient } from '@/shared';
import { useMutation } from '@tanstack/react-query';

export const usePutCompleteHelloCall = (callId: number, PATH: string) => {
  const navigate = useNavigate();
  return useMutation<CompleteHellCallResponse, Error, void>({
    mutationFn: () => putCompleteHelloCall(callId),
    onSuccess: async () => {
      alert(`안부전화 서비스를 완료처리 하였습니다.`);

      await queryClient.invalidateQueries({
        queryKey: [getHelloCallHistoryQueryKey],
      });

      navigate(PATH);
    },
    onError: (error) => {
      console.error('안부전화 서비스 완료에 실패했습니다.', error);
      alert('안부전화 서비스 완료에 실패했습니다.');
    },
  });
};
