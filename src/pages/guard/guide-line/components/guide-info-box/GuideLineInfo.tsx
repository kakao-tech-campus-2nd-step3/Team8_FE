import {
  useDeleteGuideline,
  useGuidelineInfo,
  useModifyGuideline,
} from '@/pages/guard';
import { BasicButton } from '@/shared';
import { deleteIcon, editIcon } from '@/shared/assets';
import { Box, Flex, Text, Image, Input, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuidelineInfo = {
  id: number;
  type: string;
  title: string;
  content: string;
};

type Props = {
  guideline: GuidelineInfo;
  refetch: () => void;
  seniorId: number; // 수정 API 에 필요
};

const GuideLineInfo = ({ guideline, refetch, seniorId }: Props) => {
  const editMutation = useModifyGuideline(refetch, guideline.id);
  const deleteMutation = useDeleteGuideline(refetch, guideline.id);

  const {
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
  } = useGuidelineInfo({
    guideline,
    seniorId,
    editMutation,
    deleteMutation,
  });

  return (
    <GuideLineInfoContainer onClick={toggleContent}>
      {isEditing ? (
        <Box display='flex' flexDir='row' w='100%' gap='var(--space-xxs)'>
          <Flex w='full' flexDir='column' gap='var(--space-xs)'>
            <Input
              value={guidelineTitle}
              onChange={(e) => setGuidelineTitle(e.target.value)}
              placeholder='이름을 입력하세요'
              size='md'
              border='1px solid var(--color-white-gray)'
              borderRadius='10px'
              height='30px'
            />
            <Textarea
              value={guidelineContent}
              onChange={(e) => setGuidelineContent(e.target.value)}
              placeholder='내용을 입력하세요.'
              border='1px solid var(--color-white-gray)'
              borderRadius='10px'
              size='md'
              height='120px'
              w='full'
            />
          </Flex>
          <Flex flexDir='column' gap='var(--space-xs)'>
            <BasicButton height='30px' width='70px' onClick={editGuideline}>
              저장
            </BasicButton>
            <BasicButton
              height='30px'
              width='70px'
              themeType='gray'
              onClick={() => setIsEditing(false)}
            >
              취소
            </BasicButton>
          </Flex>
        </Box>
      ) : (
        <Flex flexDir='column' w='100%' gap='var(--space-xs)'>
          <Box
            display='flex'
            flexDir='row'
            w='100%'
            justifyContent='space-between'
            cursor='pointer'
          >
            {isMore ? (
              <Text fontSize='var(--font-size-md)' fontWeight={700} mt={1}>
                {guideline.title}
              </Text>
            ) : (
              <Text
                fontSize='var(--font-size-md)'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
                fontWeight={700}
                mt={1}
              >
                {guideline.title}
              </Text>
            )}

            <Flex align='flex-start'>
              <Image
                src={editIcon}
                h='30px'
                cursor='pointer'
                onClick={() => setIsEditing(true)}
                mx='var(--space-xxs)'
              />
              <Image
                src={deleteIcon}
                h='30px'
                cursor='pointer'
                onClick={deleteGuideline}
                mx='var(--space-xxs)'
              />
            </Flex>
          </Box>
          {isMore && (
            <InfoBox>
              <InfoText>{guideline.content}</InfoText>
            </InfoBox>
          )}
        </Flex>
      )}
    </GuideLineInfoContainer>
  );
};

export default GuideLineInfo;

const GuideLineInfoContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  background-color: var(--color-white);
  border: 2px solid var(--color-white-gray);
  border-radius: 10px;
  padding: var(--space-md);
`;

const InfoText = styled(Text)`
  font-size: var(--font-size-sm);
`;

const InfoBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--space-xs);
`;
