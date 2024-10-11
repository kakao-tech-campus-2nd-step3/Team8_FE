import { Link } from 'react-router-dom';

import Logo from '../../assets/kakao.svg';
import { KAKAO_AUTH_URL } from '@/shared/constants/URI';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LoginButton = () => {
  return (
    <Link to={KAKAO_AUTH_URL}>
      <KakaoLoginButton>
        <Image src={Logo} alt='kakao-icon' />
        <Text fontWeight='500'>카카오톡 로그인</Text>
      </KakaoLoginButton>
    </Link>
  );
};

export default LoginButton;

const KakaoLoginButton = styled.button`
  background-color: #ffeb00;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 15rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;
