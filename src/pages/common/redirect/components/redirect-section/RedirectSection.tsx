import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes/path';
import { useGetKakaoCallback } from '@/pages';
import { authStorage, useUserEmail } from '@/shared';
import { Flex, Spinner, Text } from '@chakra-ui/react';

type Props = {
  code: string;
};

const RedirectSection = ({ code }: Props) => {
  const navigate = useNavigate();

  const { setEmail } = useUserEmail();

  const { data } = useGetKakaoCallback(code);

  useEffect(() => {
    if (data) {
      const accessToken = data.accessToken;
      const refreshToken = data.refreshToken;
      const isSinitto = data.isSinitto;

      authStorage.accessToken.set(accessToken);
      authStorage.refreshToken.set(refreshToken);
      authStorage.isSinitto.set(isSinitto);

      setEmail(data.email);

      if (!data.isMember) return navigate(data.redirectUrl);

      if (accessToken) {
        const path = data.isSinitto ? RouterPath.SINITTO : RouterPath.GUARD;
        navigate(path);
      }
    }
  }, [data, navigate, setEmail]);

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      height='100vh'
      gap='2rem'
    >
      <Spinner />
      <Text>로그인 진행중!</Text>
    </Flex>
  );
};

export default RedirectSection;
