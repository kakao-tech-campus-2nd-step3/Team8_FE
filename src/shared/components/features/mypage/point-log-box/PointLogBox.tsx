import PointLogImg from '../../../../assets/point-log-icon.png';
import { useToggleDetailBox } from '../hooks/useToggleDetailBox';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PointLogBox = () => {
  const { data, enabled, toggle } = useToggleDetailBox();

  return (
    <UseDetailBoxLayout>
      <TextBox>포인트 내역</TextBox>
      <DetailBox>
        {data.map((item, index) => (
          <DetailFactor key={index}>
            <Image
              ml='5px'
              mr='5px'
              w='50px'
              h='50px'
              borderRadius='50%'
              src={PointLogImg}
            />
            <DetailTextBox>
              <TextLayout>
                <DetailText>{item.date}</DetailText>
                <DetailText display='flex' justifyContent='flex-end' mr={2}>
                  적립
                </DetailText>
              </TextLayout>
              <TextLayout>
                <DetailText>{item.description}</DetailText>
                <DetailText display='flex' justifyContent='flex-end' mr={2}>
                  {item.points}
                </DetailText>
              </TextLayout>
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

export default PointLogBox;

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
  height: auto;
  max-width: 338px;
`;

const DetailFactor = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 310px;
  min-height: 55px;
  background-color: var(--color-white);
  margin: 0.3rem 0;
  border-radius: 10px;
`;

const DetailTextBox = styled(Box)`
  margin-left: 0.3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

const TextLayout = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const DetailText = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;
