import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  imageSrc?: string;
  title?: string;
  description?: string;
};

const ManualDetail = ({ imageSrc, title, description }: Props) => {
  return (
    <ManualDetailLayout>
      <ImageWrapper>
        <Image
          w='350px'
          h='500px'
          borderRadius={10}
          src={imageSrc}
          alt={title}
        />
      </ImageWrapper>
      <ManualTitle>{title}</ManualTitle>
      <ManualDescription>{description}</ManualDescription>
    </ManualDetailLayout>
  );
};

export default ManualDetail;

const ManualDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ManualTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-primary);
  margin-top: 1.5rem;
  text-align: center;
`;

const ManualDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: var(--color-gray);
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.5;
`;
