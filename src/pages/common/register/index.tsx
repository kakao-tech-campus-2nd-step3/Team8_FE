import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { RegisterFields } from './components/register-fields';
import { RegisterType } from './components/register-type';
import { Tos } from './components/tos';
import { FormValues } from './types';
import { RouterPath } from '@/app/routes/path';
import {
  SignupApiResponse,
  registerUser,
} from '@/shared/api/auth/user-register';
import { BasicButton } from '@/shared/components/common/button';
import { authLocalStorage } from '@/shared/utils/storage';
import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';

const RegisterPage = () => {
  const [userType, setUserType] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  // 회원가입 처리
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data: SignupApiResponse) => {
      // 207 (이미 이메일이 존재하면 Multi-Status)
      if ('status' in data && data.status === 207) {
        alert(data.detail);
      } else {
        // 200 (성공) -> 토큰 저장
        console.log(data);
        // 타입가드
        if ('accessToken' in data) {
          authLocalStorage.set(data.accessToken);
          authLocalStorage.set(data.refreshToken);
          alert('회원가입이 완료되었습니다.');
          // 유저 타입에 따라 네비게이션
          if (data.isSinitto === 'true') {
            navigate(RouterPath.ROOT);
            // navigate(RouterPath.SINITTO_HOME);
          } else {
            navigate(RouterPath.ROOT);
            // navigate(RouterPath.GUARD_HOME);
          }
        }
      }
    },
    onError: (error: AxiosError) => {
      if (error.response && error.response.data) {
        alert('회원가입 중 오류가 발생했습니다.');
      } else {
        alert('회원가입 중 네트워크 오류가 발생했습니다.');
      }
    },
  });

  const handleUserType = (id: string) => {
    setUserType(id);
  };

  const onSubmit = (data: FormValues) => {
    // request 에 맞게 데이터 병합
    const isSinitto = userType === 'sinitto';

    const requestData = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: 'test1@example.com', // 임시 (카카오 로그인 후 넘겨받기)
      isSinitto,
    };
    console.log(requestData);
    // 회원가입 API 호출
    mutation.mutate(requestData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <RegisterType userType={userType} handleClick={handleUserType} />
        <Divider gap={5} />
        {userType != '' && (
          <>
            <RegisterFields register={register} errors={errors} />
            <Tos userType={userType} register={register} errors={errors} />
            <BasicButton type='submit'>가입하기</BasicButton>
          </>
        )}
      </Wrapper>
    </form>
  );
};

export default RegisterPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;
