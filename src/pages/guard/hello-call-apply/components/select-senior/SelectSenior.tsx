import { Select, Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SelectSenior = () => {
  return (
    <ContentsBox>
      <TitleText>대상자 선택</TitleText>
      <Select variant='filled' placeholder='시니어를 선택해주세요'>
        <option value='senior-1'>이도훈</option>
        <option value='senior-2'>이지호</option>
      </Select>
    </ContentsBox>
  );
};

const ContentsBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;
