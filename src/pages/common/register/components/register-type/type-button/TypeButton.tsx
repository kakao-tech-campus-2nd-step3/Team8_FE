import styled from '@emotion/styled';

type Props = {
  id: string;
  isSelected: boolean;
  content: string;
  handleClick: (id: string) => void;
};

export const TypeButton = ({ content, isSelected, id, handleClick }: Props) => {
  return (
    <TypeBtn
      type='button'
      isSelected={isSelected}
      onClick={() => handleClick(id)}
    >
      {content}
    </TypeBtn>
  );
};

type BtnProps = {
  isSelected: boolean;
};

const TypeBtn = styled.button<BtnProps>`
  width: 45%;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSelected ? 'var(--color-primary)' : '#f2f2f2'};

  color: ${(props) => (props.isSelected ? 'var(--color-white)' : '#909090')};
  font-size: 22px;
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};
  outline: 0;
`;
