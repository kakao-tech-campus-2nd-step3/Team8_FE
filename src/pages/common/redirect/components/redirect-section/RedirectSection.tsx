import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetKakaoCallback } from '../../store/hooks';
import { Flex, Spinner, Text } from '@chakra-ui/react';

type Props = {
  code: string;
};

const RedirectSection = ({ code }: Props) => {
  const navigate = useNavigate();

  const { data } = useGetKakaoCallback(code);

  useEffect(() => {
    if (data) {
      const accessToken = data.accessToken;
      const refreshToken = data.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/');
    }
  }, [data, navigate]);

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
