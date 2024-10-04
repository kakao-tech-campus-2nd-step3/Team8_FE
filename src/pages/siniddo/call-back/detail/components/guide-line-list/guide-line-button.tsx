import ArrowImg from '../../assets/arrow-outline.png';
import styled from '@emotion/styled';

type Props = {
  title: string;
  id: string;
  backgroundColor: string;
};

export const GuideLineButton = ({ title, backgroundColor }: Props) => {
  const handleClick = () => {};

  return (
    <Wrapper backgroundColor={backgroundColor} onClick={handleClick}>
      <Content>
        <Title>{title}</Title>
        <ArrowIcon src={ArrowImg} />
      </Content>
    </Wrapper>
  );
};

type WrapperProps = {
  backgroundColor?: string;
};

const Wrapper = styled.button<WrapperProps>`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#81b6ff'};
  outline: 0;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

const ArrowIcon = styled.img`
  margin-left: auto;
`;
