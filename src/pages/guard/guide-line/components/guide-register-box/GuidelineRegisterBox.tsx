import { useForm } from 'react-hook-form';

import { useAddGuideline } from '../../hooks';
import GuidelineFormField, { GuidelineValues } from './GuideFormField';
import { BasicButton } from '@/shared';
import { Box, Flex } from '@chakra-ui/react';
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
      <BasicButton height='40px' type='submit'>
        가이드라인 추가하기
      </BasicButton>
    </RegisterBox>
  );
};

export default GuidelineRegisterBox;

const RegisterBox = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 5px;
  padding: var(--space-md);
  gap: var(--space-sm);
`;

const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--space-xxs);
`;
