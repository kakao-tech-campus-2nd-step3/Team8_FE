import { ReviewRequest } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const reviewPath = './api/reviews';

export const postReview = async (review: ReviewRequest) => {
  const response = await fetchInstance.post(reviewPath, review);
  return response.data;
};
