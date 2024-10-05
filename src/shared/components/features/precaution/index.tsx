import styled from '@emotion/styled';

type Props = {
  category: string;
  title: string;
  description: string;
};

export const Precaution = ({ category, title, description }: Props) => {
  return (
    <Wrapper>
      <CategoryTag>{category}</CategoryTag>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CategoryTag = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f6e4e4;
  font-size: var(--font-size-sm);
  font-weight: 400;
  color: #c69090;
`;

const Title = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: var(--font-size-md);
  fot-weight: 500;
  color: #909090;
  margin-top: 5px;
`;
