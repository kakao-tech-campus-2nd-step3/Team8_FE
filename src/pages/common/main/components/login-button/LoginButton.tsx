import { Link } from 'react-router-dom';

import Logo from '@/pages/assets/main/kakao.svg';
import { BASE_URI } from '@/shared/api';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  originURI: string;
};

const LoginButton = ({ originURI }: Props) => {
  const FRONTEND_REDIRECT_URI =
    'http://sinitto.s3-website.ap-northeast-2.amazonaws.com/redirect';

  const KAKAO_LOGIN = `${BASE_URI}/api/auth/oauth/kakao?redirect_uri=${FRONTEND_REDIRECT_URI}&origin=${originURI}`;

  return (
    <Link to={KAKAO_LOGIN}>
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
