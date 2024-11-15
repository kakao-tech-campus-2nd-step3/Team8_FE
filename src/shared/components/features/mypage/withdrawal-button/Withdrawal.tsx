import { BasicButton } from '@/shared';
import { useWithdrawal } from '@/shared/api/hooks/useWithdrawal';
import styled from '@emotion/styled';

const Withdrawal = () => {
  const { mutate: withdrawal } = useWithdrawal();

  const Dowithdrawal = () => {
    const isConfirmed = window.confirm('정말 회원 탈퇴하시겠습니까?');
    if (isConfirmed) {
      withdrawal();
    }
  };

  return (
    <WithdrawalButton onClick={Dowithdrawal}>회원 탈퇴하기</WithdrawalButton>
  );
};

export default Withdrawal;

const WithdrawalButton = styled(BasicButton)`
  color: var(--color-white);
  background-color: #ff4d68;
  box-shadow: none;
`;
