import { usePutCancelHelloCall } from './usePutCancelHelloCall';

export const useCancelHelloCall = (helloCallId: number) => {
  const { mutate: cancelHelloCall } = usePutCancelHelloCall();

  const cancelService = (e: React.MouseEvent) => {
    e.stopPropagation();
    cancelHelloCall(helloCallId);
  };

  return { cancelService };
};
