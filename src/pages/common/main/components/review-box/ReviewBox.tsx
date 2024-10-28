import StarIcon from '../../assets/star-icon.svg';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReviewBox = () => {
  return (
    <ReviewBoxLayout>
      <ContentsBox>
        <Box
          display='flex'
          flexDirection='row'
          textAlign='center'
          alignItems='center'
          gap={2}
        >
          <Text fontSize='1.2rem' fontWeight='700'>
            김춘식
          </Text>
          <IconBox flexDirection='row' gap={1}>
            <StarIconItem src={StarIcon} alt='star-icon' />
            <StarIconItem src={StarIcon} alt='star-icon' />
            <StarIconItem src={StarIcon} alt='star-icon' />
            <StarIconItem src={StarIcon} alt='star-icon' />
            <StarIconItem src={StarIcon} alt='star-icon' />
          </IconBox>
          <Text>2024.08.16</Text>
        </Box>
        <Box display='flex' flexDirection='column' gap={2}>
          <Text>
            홀로 계신 어머님에게 대신 여러가지 일을 해주어서 정말 좋은 것
            같아요!
          </Text>
          <Text>어머니께서도 만족 대 만족... ^^</Text>
        </Box>
      </ContentsBox>
    </ReviewBoxLayout>
  );
};

export default ReviewBox;

const ReviewBoxLayout = styled(Box)`
  display: flex;
  /* align-items: center; */
  padding: 1rem;
  width: 18rem;
  height: 10rem;
  background-color: #80c1ff;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const ContentsBox = styled(Box)`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StarIconItem = styled(Image)`
  width: 1rem;
`;

const IconBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
