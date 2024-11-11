import { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { FormValues } from '../../types';
import { FormField } from './form-fields';
import { Flex } from '@chakra-ui/react';

type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const RegisterFields = ({ register, errors }: Props) => {
  return (
    <Flex flexDirection='column' width='100%' gap='var(--space-md)'>
      <FormField
        label='이름'
        placeholder='예시: 홍길동'
        error={errors.name?.message}
        registerProps={register('name', { required: '이름을 입력해주세요.' })}
      />
      <FormField
        label='연락처'
        placeholder='예시: 010-0000-0000'
        error={errors.phoneNumber?.message}
        registerProps={register('phoneNumber', {
          required: '연락처를 입력해주세요.',
          pattern: {
            value: /^010-\d{4}-\d{4}$/,
            message: '유효한 연락처 형식이 아닙니다.',
          },
        })}
      />
    </Flex>
  );
};
