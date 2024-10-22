import { useForm } from 'react-hook-form';

import { useAddGuideline } from '../../api/hooks/useAddGuideline';
import GuidelineFormField, { GuidelineValues } from './GuideFormField';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  refetch: () => void;
  seniorId: number;
  guidelineType: string;
};

const GuidelineRegisterBox = ({ refetch, seniorId, guidelineType }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuidelineValues>();

  const { mutate: postGuideline } = useAddGuideline(refetch);

  const onSubmit = (data: GuidelineValues) => {
    const requestGuidelineData = {
      seniorId: seniorId,
      type: guidelineType,
      title: data.title,
      content: data.content,
    };
    console.log(requestGuidelineData);
    postGuideline(requestGuidelineData);
  };
  return (
    <RegisterBox as='form' onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <GuidelineFormField
          label='가이드라인 제목'
          placeholder='가이드라인 제목을 입력해주세요.'
          type='input'
          error={errors.title?.message}
          registerProps={register('title', {
            required: '제목을 입력해주세요.',
          })}
        />
      </InputBox>
      <InputBox>
        <GuidelineFormField
          label='가이드라인 내용'
          placeholder='가이드라인 내용을 입력해주세요.'
          type='textarea'
          error={errors.content?.message}
          registerProps={register('content', {
            required: '내용을 입력해주세요.',
          })}
        />
      </InputBox>
      <StyledButton type='submit'>가이드라인 추가하기</StyledButton>
    </RegisterBox>
  );
};

export default GuidelineRegisterBox;

const RegisterBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 350px;
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
  height: 80px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 1rem;
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
