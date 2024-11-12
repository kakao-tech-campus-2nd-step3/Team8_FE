import { postReview } from '../api';
import { ReviewRequest } from '../types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const usePostReview = (): UseMutationResult<
  string,
  Error,
  ReviewRequest
> => {
  return useMutation({
    mutationFn: (review: ReviewRequest) => postReview(review),
    onSuccess: () => {
      alert('리뷰를 작성했습니다.');
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
