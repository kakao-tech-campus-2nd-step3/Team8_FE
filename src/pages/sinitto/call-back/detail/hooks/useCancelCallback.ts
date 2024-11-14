import { CancelCallback } from '../apis';
import { useMutation } from '@tanstack/react-query';

export const useCancelCallback = () => {
  return useMutation({
    mutationFn: CancelCallback,
  });
};
