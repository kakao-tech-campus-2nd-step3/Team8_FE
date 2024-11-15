import logo_icon from '@/pages/assets/main/logo-icon.png';
import logo_typo from '@/pages/assets/main/logo-typo.png';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const FirstPage = () => {
  return (
    <Wrapper>
      <Image src={logo_icon} w='3rem' mb='var(--space-xs)' />
      <Image src={logo_typo} w='50%' minW='120px' mb='var(--space-md)' />
      <Content>
        <p>시니어가 편리한 일상을</p>
        <p>누릴 수 있도록 돕는</p>
        <p>든든한 도우미</p>
      </Content>
    </Wrapper>
  );
};

export default FirstPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
