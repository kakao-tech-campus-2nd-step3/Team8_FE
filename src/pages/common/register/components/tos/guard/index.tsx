import { GUARD_DATA } from '../../../data/guard';
import styled from '@emotion/styled';

// 보호자 서약서 내용
export const TosGuard = () => {
  return (
    <Wrapper>
      <Intro>{GUARD_DATA.intro}</Intro>
      {GUARD_DATA.sections.map((section, index) => (
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
