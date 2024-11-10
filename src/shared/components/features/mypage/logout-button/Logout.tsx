import { BasicButton, useLogout } from '@/shared';

const Logout = () => {
  const { mutate: logout } = useLogout();

  return (
    <BasicButton
      themeType='outline'
      width='80px'
      height='35px'
      onClick={() => logout()}
    >
      로그아웃
    </BasicButton>
  );
};

export default Logout;
