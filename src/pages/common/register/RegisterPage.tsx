import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { RegisterFields, RegisterType, Tos } from './components';
import { useRegister } from './store/hooks';
import { FormValues } from './types';
import { parsePhoneNumber } from '@/shared';
import { BasicButton } from '@/shared/components';
import { useAuth } from '@/shared/provider/auth/Auth';
import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';

const RegisterPage = () => {
  const [userType, setUserType] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // 회원가입 처리
  const mutation = useRegister();

  const { email } = useAuth();

  const handleUserType = (id: string) => {
    setUserType(id);
  };

  const onSubmit = (data: FormValues) => {
    // request 에 맞게 데이터 병합
    const isSinitto = userType === 'sinitto';

    const requestData = {
      name: data.name,
      phoneNumber: parsePhoneNumber(data.phoneNumber),
      email: email || '',
      isSinitto,
    };
    console.log(requestData);
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
