import styled from '@emotion/styled';

const FirstPage = () => {
  return (
    <Wrapper>
      <Title>나만의 작은 시니또</Title>
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

const Title = styled.h1`
  font-size: var(--font-size-xxl);
  font-weight: 700;
  color: var(--color-white);
`;

const Content = styled.div`
  margin-top: 1rem;
  font-size: var(--font-size-md);
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
