import { UseFormRegister } from 'react-hook-form';

import type { FormValues } from '../../../types';
import { Input, FormControl, FormErrorMessage } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  label: string;
  placeholder: string;
  error?: string;
  registerProps: ReturnType<UseFormRegister<FormValues>>;
};

export const FormField = ({
  label,
  placeholder,
  error,
  registerProps,
}: Props) => (
  <FormControl isInvalid={!!error}>
    <Title>
      <EmphasisSpan>{label}</EmphasisSpan>을 입력해주세요.
    </Title>
    <Input size='lg' placeholder={placeholder} {...registerProps} />
    {error && <FormErrorMessage>{error}</FormErrorMessage>}
  </FormControl>
);

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const EmphasisSpan = styled.span`
  color: #c69090;
`;
