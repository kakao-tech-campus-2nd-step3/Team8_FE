import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReviewRequest, usePostReview } from './api';
import starIcon from './asset/star-icon.svg';
import { BasicButton, Notice, PageLayout } from '@/shared';
import { Text, Box, Textarea, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SinittoReviewPage = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState<number[]>([0, 0, 0]);
  const [reviewContent, setReviewContent] = useState<string>('');

  const { mutate: postReview } = usePostReview();

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

  return (
    <PageLayout>
      <Box display='flex' flexDir='column' w='100%' maxW='18rem' mt={4}>
        <Notice
          title='서비스에 대한 평가를 남겨주세요!'
          contents='서비스에 만족하셨다면 긍적적인 평가를 남겨주세요!'
          noticeType='리뷰하기'
        />
      </Box>
      <Box display='flex' flexDir='column' w='100%' maxW='18rem'>
        <TitleText>평가하기</TitleText>
        <ReviewBox>
          {[
            '요청사항을 잘 수행했나요?',
            '서비스는 어땠나요?',
            '만족도는 어떤가요?',
          ].map((question, questionIndex) => (
            <Box key={questionIndex} display='flex' flexDir='column' mb={4}>
              <TitleText mb={1}>{question}</TitleText>
              <Box display='flex' justifyContent='center'>
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    onClick={() => handleStarClick(questionIndex, starIndex)}
                    src={starIcon}
                    alt='star-icon'
                    style={{
                      opacity: starIndex < ratings[questionIndex] ? 1 : 0.3,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </ReviewBox>
      </Box>
      <Box display='flex' flexDir='column' w='100%' maxW='18rem' mt={4} mb={4}>
        <TitleText>전체 평가 내용 (선택)</TitleText>
        <ReviewTextBox
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          placeholder='평가 내용을 입력해주세요'
        />
      </Box>
      <BasicButton width='18rem' themeType='default' onClick={handleSubmit}>
        제출하기
      </BasicButton>
    </PageLayout>
  );
};

const TitleText = styled(Text)`
  font-size: 20px;
  font-weight: 700;
`;

const ReviewBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 18rem;
  border: 1px solid var(--color-white-gray);
  border-radius: 10px;
  background-color: var(--color-white-gray);
  margin-top: 0.25rem;
  padding: 1rem;
`;

const ReviewTextBox = styled(Textarea)`
  width: 100%;
  max-width: 18rem;
  height: 110px;
  border: 1px solid var(--color-white-gray);
  border-radius: 10px;
  background-color: var(--color-white-gray);
  margin-top: 0.25rem;
  font-size: 18px;
`;

const Star = styled(Image)`
  cursor: pointer;
  margin-right: 4px;
  transition: opacity 0.2s;
`;
