import { useToggleDetailBox } from '../hooks/useToggleDetailBox';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

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
  // TODO: 높이 지정해주세요.
  /* height :  */
  max-width: 338px;
`;

const DetailFactor = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 310px;
  min-height: 55px;
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
