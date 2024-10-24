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
      <StyledInput placeholder={placeholder} {...registerProps} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};

export default SeniorFormField;

const FieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled(Input)`
  background-color: var(--color-white);
  border: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled(Text)`
  color: red;
  font-size: 14px;
`;
