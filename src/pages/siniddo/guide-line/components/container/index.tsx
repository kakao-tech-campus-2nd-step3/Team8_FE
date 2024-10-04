import styled from '@emotion/styled';

type Props = {
  title: string;
  content: string;
};

export const Container = ({ title, content }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {content.split('\\n').map((line) => (
          <>
            {line}
            <br />
          </>
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
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const Content = styled.p`
  margin-top: 10px;
  font-size: 16px;
  white-space: pre-wrap;
  font-weight: 350;
`;
