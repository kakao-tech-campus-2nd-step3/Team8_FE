import { useCompleteCallback } from '../hooks';
import { CallbackHistory } from '../types';

export const useServiceStatus = (historyData: CallbackHistory) => {
  const completeCallbackMutation = useCompleteCallback();

  const serviceStatus = () => {
    if (historyData.status === 'COMPLETE') {
      alert('이미 완료 확인한 서비스입니다.');
    } else if (historyData.status === 'WAITING') {
      alert('아직 완료되지 않은 대기중인 서비스입니다.');
    } else if (historyData.status === 'PENDING_COMPLETE') {
      completeCallbackMutation.mutate(historyData.callbackId);
    }
  };

  return { serviceStatus };
};
