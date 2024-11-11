import styled from '@emotion/styled';

type Props = {
  status: string;
};

export const StatusButton = ({ status }: Props) => {
  if (status === 'COMPLETE') {
    return <ButtonWrapper backgroundColor='#B4D6CD'>완료</ButtonWrapper>;
  } else if (status === 'PENDING_COMPLETE') {
    return <ButtonWrapper backgroundColor='#D6E9DB'>완료대기</ButtonWrapper>;
  } else if (status === 'WAITING') {
    return <ButtonWrapper backgroundColor='#FFDA76'>대기중</ButtonWrapper>;
  } else if (status === 'IN_PROGRESS') {
    return <ButtonWrapper backgroundColor='#FFA7B5'>진행중</ButtonWrapper>;
  }
};

const ButtonWrapper = styled.button<{ backgroundColor: string }>`
  width: 70px;
  padding: 0 var(--space-xs);
  height: 40px;
  border-radius: 5px;
  font-size: var(--font-size-md);
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor};
  outline: 0;
`;
