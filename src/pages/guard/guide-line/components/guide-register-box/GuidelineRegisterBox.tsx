import { useForm } from 'react-hook-form';

import GuidelineFormField, { GuidelineValues } from './GuideFormField';
import { useAddGuideline } from '@/pages/guard';
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
    reset,
  } = useForm<GuidelineValues>();

  const { mutate: postGuideline } = useAddGuideline(refetch);

  const onSubmit = (data: GuidelineValues) => {
    const requestGuidelineData = {
      seniorId: seniorId,
      type: guidelineType,
      title: data.title,
      content: data.content,
    };
    postGuideline(requestGuidelineData);
    reset();
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
            maxLength: {
              value: 20,
              message: '제목은 20자 이하로 입력해주세요.',
            },
            validate: {
              notEmpty: (value) =>
                value.trim().length > 0 || '제목은 필수로 작성해야합니다.',
            },
          })}
        />
      </InputBox>
      <InputBox>
        <GuidelineFormField
          label='가이드라인 내용'
          placeholder={
            guidelineType === 'TAXI'
              ? '내용은 구체적으로 명시해주세요. (예: 목적지, 출발지 등)'
              : '내용은 구체적으로 명시해주세요. (예: 음식 맵기 정도, 양, 가격 등)'
          }
          type='textarea'
          error={errors.content?.message}
          registerProps={register('content', {
            required: '내용을 입력해주세요.',
            maxLength: {
              value: 150,
              message: '내용은 150자 이하로 입력해주세요.',
            },
            validate: {
              notEmpty: (value) =>
                value.trim().length > 0 || '내용은 필수로 작성해야합니다',
            },
          })}
        />
      </InputBox>
      <StyledButton type='submit'>가이드라인 추가하기</StyledButton>
    </RegisterBox>
  );
};

export default GuidelineRegisterBox;

const RegisterBox = styled(Box)`
  width: 100%;
  height: auto;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-gray);
  border: 1px solid var(--color-white-gray);
  border-radius: 15px;
  margin-top: 0.25rem;
`;

const InputBox = styled(Box)`
  width: 300px;
  margin: 0.2rem;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: #c69090;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #a67070;
  }

  &:active {
    transform: scale(0.98);
  }
`;
