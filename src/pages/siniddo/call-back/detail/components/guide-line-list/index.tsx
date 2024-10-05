import { GUIDE_LINE_CATEGORIES } from '../../data/guide-line';
import { GuideLineButton } from './guide-line-button';
import styled from '@emotion/styled';

export const GuideLineList = () => {
  return (
    <Wrapper>
      {GUIDE_LINE_CATEGORIES.map((data) => (
        <GuideLineButton
          key={data.id}
          title={data.title}
          id={data.id}
          backgroundColor={data.backgroundColor}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
`;
