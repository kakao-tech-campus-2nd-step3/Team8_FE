import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { RegisterFields, RegisterType, Tos } from '../components';
import { useRegister } from '../hooks';
import { FormValues } from '../types';
import {
  BasicButton,
  parsePhoneNumber,
  useUserEmail,
  PageLayout,
  authStorage,
} from '@/shared';
import { Divider } from '@chakra-ui/react';

const RegisterPage = () => {
  const [userType, setUserType] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // 회원가입 처리
  const mutation = useRegister();
  const { email } = useUserEmail();

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

    authStorage.isSinitto.set(requestData.isSinitto);

    mutation.mutate(requestData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PageLayout>
        <RegisterType userType={userType} handleClick={handleUserType} />
        <Divider />
        {userType != '' && (
          <>
            <RegisterFields register={register} errors={errors} />
            <Tos userType={userType} register={register} errors={errors} />
            <BasicButton type='submit'>가입하기</BasicButton>
          </>
        )}
      </PageLayout>
    </form>
  );
};

export default RegisterPage;
