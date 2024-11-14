import { acceptCallback } from '../apis';
import { useMutation } from '@tanstack/react-query';

export const useAcceptCallback = () => {
  return useMutation({
    mutationFn: acceptCallback,
  });
};
