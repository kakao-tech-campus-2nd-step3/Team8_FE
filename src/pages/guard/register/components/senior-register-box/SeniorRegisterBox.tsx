import { useForm } from 'react-hook-form';

import { useAddSeniorInfo } from '../../hooks';
import { SeniorRegisterRequest as SeniorRegisterValues } from '../../types';
import SeniorFormField from './SeniorFormField';
import { parsePhoneNumber, BasicButton } from '@/shared';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SeniorRegisterBox = ({ refetch }: { refetch: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SeniorRegisterValues>();
  const { mutate: postSeniorInfo } = useAddSeniorInfo(refetch);

  const onSubmit = (data: SeniorRegisterValues) => {
    const requestSeniorData = {
      seniorName: data.seniorName,
      seniorPhoneNumber: parsePhoneNumber(data.seniorPhoneNumber),
    };
    postSeniorInfo(requestSeniorData);
    reset();
  };

  return (
    <RegisterBox as='form' onSubmit={handleSubmit(onSubmit)}>
      <Flex w='full' flexDir='column' gap='var(--space-xs)'>
        <SeniorFormField
          label='시니어의 성함'
          placeholder='홍길동'
          error={errors.seniorName?.message}
          registerProps={register('seniorName', {
            required: '시니어의 성함을 입력해주세요.',
            pattern: {
              value: /^[가-힣a-zA-Z]{1,10}$/,
              message: '성함은 10자 이하 한/영으로 입력하세요.',
            },
          })}
        />
        <SeniorFormField
          label='시니어의 전화번호'
          placeholder='010-0000-0000'
          error={errors.seniorPhoneNumber?.message}
          registerProps={register('seniorPhoneNumber', {
            required: '연락처를 입력해주세요.',
            pattern: {
              value: /^010-\d{4}-\d{4}$/,
              message: '유효한 연락처 형식이 아닙니다.',
            },
          })}
        />
      </Flex>
      <BasicButton height='40px' type='submit'>
        시니어 등록하기
      </BasicButton>
    </RegisterBox>
  );
};

export default SeniorRegisterBox;

const RegisterBox = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 5px;
  padding: var(--space-md);
  gap: var(--space-sm);
`;
