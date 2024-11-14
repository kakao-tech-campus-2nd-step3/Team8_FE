import { acceptCallback } from '../api';
import { useMutation } from '@tanstack/react-query';

export const useAcceptCallback = () => {
  return useMutation({
    mutationFn: acceptCallback,
  });
};
