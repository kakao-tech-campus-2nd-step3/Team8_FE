import { breakpoints } from '@/shared/styles/variants';
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
        {content.map((element, index) => (
          <p key={index}>{element}</p>
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
  font-size: var(--font-size-lg);
  color: var(--color-basic);
  white-space: nowrap;

  @media only screen and (min-width: ${breakpoints.xs}) {
    font-size: var(--font-size-xl);
  }
`;

const Content = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;

  @media only screen and (min-width: ${breakpoints.xs}) {
    font-size: var(--font-size-md);
  }
`;
