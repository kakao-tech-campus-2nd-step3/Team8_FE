import { useForm } from 'react-hook-form';

import { GuidelineValues } from '../components/guide-register-box/GuideFormField';
import { useAddGuideline } from './useAddGuideline';

export const useGuidelineForm = (
  refetch: () => void,
  seniorId: number,
  guidelineType: string
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GuidelineValues>();
  const { mutate: postGuideline } = useAddGuideline(refetch);

  const onSubmit = (data: GuidelineValues) => {
    const requestGuidelineData = {
      seniorId,
      type: guidelineType,
      title: data.title,
      content: data.content,
    };
    postGuideline(requestGuidelineData);
    reset();
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
