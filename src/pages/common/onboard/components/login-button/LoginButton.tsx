import { Link } from 'react-router-dom';

import Logo from '@/pages/assets/main/kakao.svg';
import { BASE_URI } from '@/shared/api';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LoginButton = () => {
  const KAKAO_LOGIN = `${BASE_URI}/api/auth/oauth/kakao`;

  return (
    <StyledLink to={KAKAO_LOGIN}>
      <KakaoLoginButton>
        <Image src={Logo} alt='kakao-icon' />
        <Text fontWeight='500'>카카오톡 로그인</Text>
      </KakaoLoginButton>
    </StyledLink>
  );
};

export default LoginButton;

const StyledLink = styled(Link)`
  width: 80%;
  max-width: 28.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoLoginButton = styled.button`
  background-color: #ffeb00;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  outline: none;
`;
