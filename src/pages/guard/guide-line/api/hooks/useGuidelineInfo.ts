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
    if (guidelineTitle.trim() === '' || guidelineContent.trim() === '') {
      alert('제목과 내용을 입력해주세요');
      return;
    } else if (guidelineTitle.length > 20 || guidelineContent.length > 150) {
      alert('제목은 20자 이하 내용은 150자 이하여야합니다.');
      return;
    } else {
      editMutation.mutate({
        seniorId: seniorId,
        type: guideline.type,
        title: guidelineTitle,
        content: guidelineContent,
      });
      setIsEditing(false);
    }
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
