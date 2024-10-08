import { SINITTO_DATA } from '../../../data/sinitto';
import styled from '@emotion/styled';

// 시니또 서약서 내용
export const TosSinitto = () => {
  return (
    <Wrapper>
      <Intro>{SINITTO_DATA.intro}</Intro>
      {SINITTO_DATA.sections.map((section, index) => (
        <Paragraph key={index}>
          <Title>{section.title}</Title>
          {section.contents.map((content, i) => (
            <Content key={i}>{content}</Content>
          ))}
        </Paragraph>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Intro = styled.p`
  margin-bottom: 20px;
`;

const Paragraph = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const Content = styled.p`
  padding-left: 15px;
  margin-bottom: 7px;
`;
