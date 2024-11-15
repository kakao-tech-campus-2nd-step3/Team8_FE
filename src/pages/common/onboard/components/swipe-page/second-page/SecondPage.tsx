import { Intro } from '../../intro';
import CallIllust from '@/pages/assets/onboard/call-illust.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SecondPage = () => {
  return (
    <Wrapper>
      <Image
        marginTop='auto'
        src={CallIllust}
        height='90%'
        width='90%'
        fetchPriority='high'
      />
      <Intro
        title='도움이 필요한 순간, 쉽고 빠르게'
        content={[
          '시니어에게 디지털 서비스 이용 등 도움이 필요할 때 전화 한 통으로 시니또와 매칭될 수 있습니다.',
        ]}
      />
    </Wrapper>
  );
};

export default SecondPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
