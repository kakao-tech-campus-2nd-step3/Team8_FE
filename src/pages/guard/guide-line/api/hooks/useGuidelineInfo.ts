import { useState } from 'react';

import { ModifyGuidelineRequest } from '../modify-guideline.api';
import { UseMutationResult } from '@tanstack/react-query';

type GuidelineInfo = {
  id: number;
  type: string;
  title: string;
  content: string;
};

type Props = {
  guideline: GuidelineInfo;
  seniorId: number;
  editMutation: UseMutationResult<string, Error, ModifyGuidelineRequest>;
  deleteMutation: UseMutationResult<string, Error, number>;
};

export const useGuidelineInfo = ({
  guideline,
  seniorId,
  editMutation,
  deleteMutation,
}: Props) => {
  const [isMore, setIsMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [guidelineTitle, setGuidelineTitle] = useState(guideline.title);
  const [guidelineContent, setGuidelineContent] = useState(guideline.content);

  const toggleContent = () => {
    setIsMore(!isMore);
  };

  const editGuideline = () => {
    editMutation.mutate({
      seniorId: seniorId,
      type: guideline.type,
      title: guidelineTitle,
      content: guidelineContent,
    });
    setIsEditing(false);
  };

  const deleteGuideline = () => {
    const isConfirmed = window.confirm('정말 가이드라인을 삭제하시겠습니까?');

    if (isConfirmed) {
      deleteMutation.mutate(guideline.id);
    }
  };

  return {
    isMore,
    isEditing,
    guidelineTitle,
    guidelineContent,
    toggleContent,
    setIsEditing,
    setGuidelineTitle,
    setGuidelineContent,
    editGuideline,
    deleteGuideline,
  };
};
