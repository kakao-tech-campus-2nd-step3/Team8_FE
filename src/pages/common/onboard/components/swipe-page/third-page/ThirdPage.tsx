import { Intro } from '../../intro';
import PointIllust from '@/pages/assets/onboard/point-illust.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ThirdPage = () => {
  return (
    <Wrapper>
      <Image
        marginTop='auto'
        src={PointIllust}
        width='80%'
        fetchPriority='high'
      />
      <Intro
        title='따뜻한 마음과 함께하는 보람과 혜택'
        content={[
          '시니또는 시니어에게 도움을 제공하고 현금화 할 수 있는 포인트를 받을 수 있습니다.',
        ]}
      />
    </Wrapper>
  );
};

export default ThirdPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
