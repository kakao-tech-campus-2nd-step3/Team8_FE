import StarIconUnfill from '@/pages/assets/main/star-icon-unfill.svg';
import StarIconFill from '@/pages/assets/main/star-icon.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  name: string;
  postDate: string;
  rate: number;
  content: string;
};

const ReviewBox = ({ name, postDate, rate, content }: Props) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <UserName>{name}</UserName>
        <PostDate>{postDate}</PostDate>
        <StarIcons>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIconItem
              key={index}
              src={index < rate ? StarIconFill : StarIconUnfill}
              alt='star-icon'
            />
          ))}
        </StarIcons>
      </InnerWrapper>
      {content}
      <Content></Content>
    </Wrapper>
  );
};

export default ReviewBox;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-white-gray);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 0.5rem;
`;

const StarIcons = styled.div`
  display: flex;
`;

const StarIconItem = styled(Image)`
  width: 1.2rem;
  margin-right: 0.3rem;
`;

const UserName = styled.h3`
  font-size: var(--font-size-lg);
  margin-right: 0.5rem;
`;

const PostDate = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  margin-right: auto;
`;

const Content = styled.div`
  font-size: var(--font-size-md);
  gap: 0.5rem;
`;
