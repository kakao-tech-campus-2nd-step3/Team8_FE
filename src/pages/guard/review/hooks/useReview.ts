import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReviewRequest } from '../api';
import { UseMutationResult } from '@tanstack/react-query';

type Props = {
  postReview: UseMutationResult<string, Error, ReviewRequest>['mutate'];
};

export const useReview = ({ postReview }: Props) => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState<number[]>([0, 0, 0]);
  const [reviewContent, setReviewContent] = useState<string>('');

  const handleStarClick = (questionIndex: number, starIndex: number) => {
    const newRatings = [...ratings];
    newRatings[questionIndex] = starIndex + 1;
    setRatings(newRatings);
  };

  const handleSubmit = () => {
    if (ratings.some((rating) => rating === 0)) {
      alert('모든 항목에 별점을 남겨주세요.');
      return;
    }

    const reviewRequest: ReviewRequest = {
      starCountForRequest: ratings[0],
      starCountForService: ratings[1],
      starCountForSatisfaction: ratings[2],
      content: reviewContent,
    };

    postReview(reviewRequest, {
      onSuccess: () => {
        navigate('/guard/mypage');
      },
    });
  };

  const reviewQuestions = [
    '요청사항을 잘 수행했나요?',
    '서비스는 어땠나요?',
    '만족도는 어떤가요?',
  ];

  return {
    ratings,
    reviewContent,
    reviewQuestions,
    setReviewContent,
    handleStarClick,
    handleSubmit,
  };
};
