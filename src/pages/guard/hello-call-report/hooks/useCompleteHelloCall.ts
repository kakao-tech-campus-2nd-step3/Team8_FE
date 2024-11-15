import { usePutCompleteHelloCall } from '../hooks';
import { RouterPath } from '@/app/routes';

export const useCompleteHelloCall = (helloCallId: number) => {
  const completeHelloCallMutation = usePutCompleteHelloCall(
    helloCallId,
    RouterPath.SINITTO_REVIEW
  );

  const completeHelloCall = () => {
    completeHelloCallMutation.mutate();
  };

  return { completeHelloCall };
};
