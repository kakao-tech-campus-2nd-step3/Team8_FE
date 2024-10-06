import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { GUARD_DATA } from '../../data/guard';
import { SINIDDO_DATA } from '../../data/siniddo';
import type { FormValues } from '../../types';
import { TosContent } from './content';
import { Checkbox, FormControl, FormErrorMessage } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  userType: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const Tos = ({ userType, register, errors }: Props) => {
  return (
    <Wrapper>
      <Title>서약서</Title>
      <TosContainer>
        {userType == 'siniddo' ? (
          <TosContent data={SINIDDO_DATA} />
        ) : (
          <TosContent data={GUARD_DATA} />
        )}
      </TosContainer>

      <FormControl isInvalid={!!errors.agreeToTerms}>
        <Checkbox
          colorScheme='gray'
          size='lg'
          {...register('agreeToTerms', {
            required: '서약서에 동의해야 합니다.',
          })}
        >
          서약서의 내용에 동의합니다.
        </Checkbox>
        <FormErrorMessage>
          {errors.agreeToTerms && errors.agreeToTerms.message}
        </FormErrorMessage>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const TosContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  height: 300px;
  padding: 10px;
  overflow-y: scroll;
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
