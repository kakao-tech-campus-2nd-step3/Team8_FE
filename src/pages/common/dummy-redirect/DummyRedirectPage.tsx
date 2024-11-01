import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import { Box, Text, Spinner, Heading } from '@chakra-ui/react';

export const DummyRedirectPage = () => {
  const [statusMessage, setStatusMessage] = useState(
    '유저 정보를 기다리고 있습니다...'
  );
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    const isSinitto = params.get('isSinitto');

    if (accessToken && refreshToken && isSinitto) {
      // 로컬 스토리지에 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('isSinitto', isSinitto);

      // isSinitto 상태에 따른 메시지 설정
      setStatusMessage(
        isSinitto === 'true'
          ? '시니또 더미데이터로 로그인 중입니다. 페이지 이동 중...'
          : '보호자 더미데이터로 로그인 중입니다. 페이지 이동 중...'
      );

      setTimeout(() => {
        setIsLoading(false); // 로딩 완료
        navigate(isSinitto === 'true' ? RouterPath.SINITTO : RouterPath.GUARD);
      }, 2000);
    } else {
      console.error('Access or Refresh token not found in query parameters.');
      setStatusMessage('[ERROR] 토큰이 존재하지 않습니다.');

      setIsLoading(false);
    }
  }, [navigate]);

  return (
    <Box textAlign='center' mt='50px'>
      <Heading as='h1' size='lg' mb='1rem'>
        더미데이터 로그인
      </Heading>
      <Text fontSize='lg'>{statusMessage}</Text>
      {(isLoading || statusMessage === '유저 정보를 기다리고 있습니다...') && (
        <Spinner size='lg' mt='1rem' />
      )}
    </Box>
  );
};
