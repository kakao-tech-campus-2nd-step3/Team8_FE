import { UseFormRegister } from 'react-hook-form';

import { Box, Input, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type GuidelineValues = {
  title: string;
  content: string;
};

type Props = {
  label: string;
  placeholder: string;
  error?: string;
  type: 'input' | 'textarea';
  registerProps: ReturnType<UseFormRegister<GuidelineValues>>;
};

const GuidelineFormField = ({
  label,
  placeholder,
  error,
  type,
  registerProps,
}: Props) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      {type === 'input' ? (
        <Input
          w='full'
          bg='var(--color-white)'
          size='md'
          borderRadius='10px'
          placeholder={placeholder}
          {...registerProps}
        />
      ) : (
        <Textarea
          w='full'
          bg='var(--color-white)'
          size='md'
          borderRadius='10px'
          height='150px'
          placeholder={placeholder}
          {...registerProps}
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};

export default GuidelineFormField;

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
