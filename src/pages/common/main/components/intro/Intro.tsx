import styled from '@emotion/styled';

type Props = {
  title: string;
  content: string[];
};

const Intro = ({ title, content }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {content.map((element) => (
          <p>{element}</p>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding-top: 1.5rem;
  padding-bottom: 5rem;
`;

const Title = styled.h2`
  font-size: var(--font-size-xl);
  color: var(--color-basic);
`;

const Content = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-gray);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
