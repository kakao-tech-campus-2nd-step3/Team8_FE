import { useState } from 'react';

import { DUMMY_DATA } from '../../data/detail';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

// 컴포넌트는 data를 어떻게 처리하는지에 대한 관심이 없다.
// output만 있으면 되는..
// output을 만들어내는 과정을 분리하면 어떨까?

// 관심사를 분리하기
const useToggleDetailBox = () => {
  // 처음에 5개 보여주고, 더보기를 눌렀을 때 나머지 전부를 보여주기
  const [visibleCount, setVisibleCount] = useState(5); // 기본적으로 5개 보여줌
  const [enabled, setEnabled] = useState(false); // 더보기, 숨기기 상태

  // 더보기, 숨기기 버튼을 눌렀을 때 동작
  // toggleView 라는 이벤트가 발생했을 때 처리하는 이벤트 핸들러가 handleToggleView 인데
  // 이건 toggleView라는 이벤트가 발생했을 때 처리하는게 아니라, toggleView라는 행위를 하는 함수임.
  const toggle = () => {
    if (enabled) {
      // 숨기기 동작
      setVisibleCount(5);
    } else {
      // 더보기 동작
      setVisibleCount(DUMMY_DATA.length);
    }
    setEnabled(!enabled);
  };

  const data = DUMMY_DATA.slice(0, visibleCount);

  return { data, enabled, toggle };
};

// 컴포넌트는 데이터 처리에 대해 관심있는게 아니라, "어떤 데이터"를 가지고 그리는지에 관심 있음
const UseDetailBox = () => {
  const { data, enabled, toggle } = useToggleDetailBox();

  return (
    <UseDetailBoxLayout>
      <TextBox>포인트 이용내역</TextBox>
      <DetailBox>
        {data.map((item, index) => (
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
      <ViewMoreButton onClick={toggle}>
        {enabled ? '숨기기' : '더보기'}
      </ViewMoreButton>
    </UseDetailBoxLayout>
  );
};

export default UseDetailBox;

const UseDetailBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 338px;
  height: auto;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  margin-top: 0.5rem;
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
