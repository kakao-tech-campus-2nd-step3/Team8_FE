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
        <StyledInput placeholder={placeholder} {...registerProps} />
      ) : (
        <StyledTextarea placeholder={placeholder} {...registerProps} />
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

const StyledTextarea = styled(Textarea)`
  background-color: var(--color-white);
  border: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  min-height: 100px;
  resize: vertical;
`;

const ErrorMessage = styled(Text)`
  color: red;
  font-size: 14px;
`;
