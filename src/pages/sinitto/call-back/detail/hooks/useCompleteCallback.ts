import { CompleteCallback } from '../api';
import { useMutation } from '@tanstack/react-query';

export const useCompleteCallback = () => {
  return useMutation({
    mutationFn: CompleteCallback,
  });
};
