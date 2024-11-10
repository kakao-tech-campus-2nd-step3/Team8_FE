import styled from '@emotion/styled';

type Props = {
  title: string;
  content: string;
};

export const GuideLineContainer = ({ title, content }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {content.split('\\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Content>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #00000040;
  border: 1px solid #fafafa;
`;

const Title = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 700;
`;

const Content = styled.div`
  margin-top: var(--space-xxs);
  font-size: var(--font-size-md);
  white-space: pre-wrap;
  font-weight: 350;
`;
