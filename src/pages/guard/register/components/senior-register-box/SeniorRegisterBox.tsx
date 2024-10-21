import { useForm } from 'react-hook-form';

import { SeniorRegisterValues, useAddSeniorInfo } from '../../api';
import SeniorFormField from './SeniorFormField';
import { parsePhoneNumber } from '@/shared';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SeniorRegisterBox = ({ refetch }: { refetch: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SeniorRegisterValues>();
  const { mutate: postSeniorInfo } = useAddSeniorInfo(refetch);

  const onSubmit = (data: SeniorRegisterValues) => {
    const requestSeniorData = {
      seniorName: data.seniorName,
      seniorPhoneNumber: parsePhoneNumber(data.seniorPhoneNumber),
    };
    postSeniorInfo(requestSeniorData);
  };

  return (
    <RegisterBox as='form' onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <SeniorFormField
          label='시니어의 성함'
          placeholder='예시: 김노인'
          error={errors.seniorName?.message}
          registerProps={register('seniorName', {
            required: '시니어의 성함을 입력해주세요.',
          })}
        />
      </InputBox>
      <InputBox>
        <SeniorFormField
          label='시니어의 전화번호'
          placeholder='예시: 010-0000-0000'
          error={errors.seniorPhoneNumber?.message}
          registerProps={register('seniorPhoneNumber', {
            required: '연락처를 입력해주세요.',
            pattern: {
              value: /^010-\d{4}-\d{4}$/,
              message: '유효한 연락처 형식이 아닙니다.',
            },
          })}
        />
      </InputBox>
      <StyledButton type='submit'>시니어 등록</StyledButton>
    </RegisterBox>
  );
};

export default SeniorRegisterBox;

const RegisterBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 360px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-gray);
  border: 1px solid var(--color-white-gray);
  border-radius: 15px;
`;

const InputBox = styled(Box)`
  width: 300px;
  margin: 0.5rem;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: #c69090;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a67070;
  }

  &:active {
    transform: scale(0.98);
  }
`;
