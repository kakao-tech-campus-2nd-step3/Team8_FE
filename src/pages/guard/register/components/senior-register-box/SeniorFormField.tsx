import { UseFormRegister } from 'react-hook-form';

import { SeniorRegisterValues } from '../../api';
import { Box, Input, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  label: string;
  placeholder: string;
  error?: string;
  registerProps: ReturnType<UseFormRegister<SeniorRegisterValues>>;
};

const SeniorFormField = ({
  label,
  placeholder,
  error,
  registerProps,
}: Props) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Input
        w='full'
        bg='var(--color-white)'
        size='md'
        borderRadius='10px'
        placeholder={placeholder}
        {...registerProps}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};

export default SeniorFormField;

const FieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--space-xxs);
`;

const Label = styled(Text)`
  font-size: var(--font-size-lg);
  font-weight: 700;
`;

const ErrorMessage = styled(Text)`
  color: red;
  font-size: 14px;
`;
