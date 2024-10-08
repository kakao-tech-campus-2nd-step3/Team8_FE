import { useState } from 'react';

import starIcon from './asset/star-icon.svg';
import { BasicButton } from '@/shared/components/common/button';
import Notice from '@/shared/components/features/notice';
import { Text, Flex, Box, Textarea, Image, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SiniddoReviewPage = () => {
  const [ratings, setRatings] = useState<number[]>([0, 0, 0]); // 각 질문에 대한 별점
  const [isGood, setIsGood] = useState<boolean | null>(null);

  const handleStarClick = (questionIndex: number, starIndex: number) => {
    const newRatings = [...ratings];
    newRatings[questionIndex] = starIndex + 1; // 별점 설정
    setRatings(newRatings);
  };

  const handleEvalButtonClick = (value: boolean) => {
    setIsGood(value);
  };

  return (
    <Flex w='100%' flexDir='column' alignItems='center'>
      <Box display='flex' flexDir='column' w='100%' maxW='18rem' mt={4}>
        <Notice
          title='시니또에게 평가를 남겨주세요!'
          contents='서비스에 만족하셨다면 시니또에게 긍적적인 평가를 남겨주세요!'
          noticeType='리뷰하기'
        />
      </Box>
      <Box display='flex' flexDir='column' w='100%' maxW='18rem' mb={4} mt={4}>
        <TitleText>시니또 정보</TitleText>
        <Text fontSize='18px'>김춘식 / 22세 / 대학생</Text>
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
                      opacity: starIndex < ratings[questionIndex] ? 1 : 0.3, // 설정된 별점보다 낮은 별들은 채우기
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
          <TitleText>봉사자가 마음에 드나요?</TitleText>
          <Box display='flex' justifyContent='space-between' gap={1} mt={1}>
            <EvalButton
              isGood={isGood === true}
              onClick={() => handleEvalButtonClick(true)}
            >
              최고에요
            </EvalButton>
            <EvalButton
              isGood={isGood === false}
              onClick={() => handleEvalButtonClick(false)}
            >
              별로에요
            </EvalButton>
          </Box>
        </ReviewBox>
      </Box>
      <Box display='flex' flexDir='column' w='100%' maxW='18rem' mt={4} mb={4}>
        <TitleText>전체 평가 내용 (선택)</TitleText>
        <ReviewTextBox />
      </Box>
      <BasicButton width='18rem' themeType='default'>
        제출하기
      </BasicButton>
    </Flex>
  );
};

export default SiniddoReviewPage;

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

const EvalButton = styled(Button)<{ isGood: boolean }>`
  background-color: ${({ isGood }) =>
    isGood ? 'var(--color-primary)' : '#cfcfcf'};
  color: ${({ isGood }) => (isGood ? 'var(--color-white)' : 'black')};
  width: 50px;
  height: 35px;
  font-size: 16px;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
