import { useState } from 'react';

import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const UseDetailBox = () => {
  // 10개의 더미 데이터 배열 생성
  const data = Array.from({ length: 10 }, (_) => ({
    date: '24.09.01',
    description: '택시 호출하기',
    points: '500p',
  }));

  // 처음에 5개 보여주고, 더보기를 눌렀을 때 나머지 전부를 보여주기
  const [visibleCount, setVisibleCount] = useState(5); // 기본적으로 5개 보여줌
  const [isExpanded, setIsExpanded] = useState(false); // 더보기, 숨기기 상태

  // 더보기, 숨기기 버튼을 눌렀을 때 동작
  const handleToggleView = () => {
    if (isExpanded) {
      // 숨기기 동작
      setVisibleCount(5);
    } else {
      // 더보기 동작
      setVisibleCount(data.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <UseDetailBoxContainer>
      <TextBox>포인트 이용내역</TextBox>
      <DetailBox>
        {data.slice(0, visibleCount).map((item, index) => (
          <DetailFactor key={index}>
            <DetailTextBox>
              <DetailDate>{item.date}</DetailDate>
              <DetailTextBoxBottom>
                <Text fontSize='18px' fontWeight={700}>
                  {item.description}
                </Text>
                <Text fontSize='18px' fontWeight={700} ml={20}>
                  {item.points}
                </Text>
              </DetailTextBoxBottom>
            </DetailTextBox>
          </DetailFactor>
        ))}
      </DetailBox>
      <ViewMoreButton onClick={handleToggleView}>
        {isExpanded ? '숨기기' : '더보기'}
      </ViewMoreButton>
    </UseDetailBoxContainer>
  );
};

export default UseDetailBox;

const UseDetailBoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 338px;
  height: auto;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
`;

const TextBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 310px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0.5rem 0;
`;

const DetailBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 338px;
`;

const DetailFactor = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 310px;
  height: 2.5rem;
  background-color: #fff;
  margin: 0.3rem 0;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const DetailTextBox = styled(Box)`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

const DetailDate = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;

const DetailTextBoxBottom = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
`;

const ViewMoreButton = styled.button`
  width: 20%;
  max-width: 60px;
  max-height: 30px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0.5rem 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
