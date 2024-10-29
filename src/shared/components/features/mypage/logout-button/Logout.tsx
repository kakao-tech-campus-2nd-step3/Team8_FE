import { useLogout } from '@/shared/api/hooks/useLogout';
import { BasicButton } from '@/shared/components/common';

const Logout = () => {
  const { mutate: logout } = useLogout();

  return (
    <BasicButton theme='default' width='330px' onClick={() => logout()}>
      로그아웃
    </BasicButton>
  );
};

export default Logout;
