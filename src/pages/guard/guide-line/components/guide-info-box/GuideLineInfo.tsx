import { useState } from 'react';

import { useModifyGuideline } from '@/pages/guard';
import { arrowIcon, deleteIcon, editIcon } from '@/shared/assets';
import { Box, Flex, Text, Image, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuidelineInfo = {
  Id: number;
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
  const [isMore, setIsMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [guidelineTitle, setGuidelineTitle] = useState(guideline.title);
  const [guidelineContent, setGuidelineContent] = useState(guideline.content);

  const editMutation = useModifyGuideline(refetch, guideline.Id);

  const toggleContent = () => {
    setIsMore(!isMore);
  };

  const handleEdit = () => {
    editMutation.mutate({
      seniorId: seniorId,
      type: guideline.type,
      title: guidelineTitle,
      content: guidelineContent,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {};

  return (
    <GuideLineInfoContainer>
      {isEditing ? (
        <Box display='flex' flexDir='row' w='100%' maxW='300px'>
          <Box w='80%'>
            <Input
              fontSize='0.9rem'
              fontWeight={700}
              mb={2}
              value={guidelineTitle}
              onChange={(e) => setGuidelineTitle(e.target.value)}
              placeholder='제목을 입력하세요'
              size='sm'
              bg='var(--color-white)'
              border='1px solid var(--color-white)'
              borderRadius='10px'
            />
            <Input
              value={guidelineContent}
              onChange={(e) => setGuidelineContent(e.target.value)}
              placeholder='내용을 입력하세요.'
              bg='var(--color-white)'
              border='1px solid var(--color-white)'
              borderRadius='10px'
              size='sm'
            />
          </Box>
          <Box
            w='20%'
            h='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            ml={1}
            border='1px solid var(--color-primary)'
            borderRadius='5px'
            bg='var(--color-primary)'
            onClick={handleEdit}
            fontSize='0.9rem'
            fontWeight={700}
            cursor='pointer'
            color='var(--color-white)'
          >
            저장
          </Box>
        </Box>
      ) : (
        <>
          <Box
            display='flex'
            flexDir='row'
            w='100%'
            maxW='300px'
            justifyContent='space-between'
            alignItems='center'
            cursor='pointer'
          >
            <Text fontSize='1rem' fontWeight={700}>
              {guideline.title}
            </Text>
            <Box display='flex' flexDir='row' gap={1}>
              <Image src={deleteIcon} onClick={handleDelete} w={4} h={4} />
              <Image
                src={editIcon}
                onClick={() => setIsEditing(true)}
                w={4}
                h={4}
              />
              <ImageWrapper isMore={isMore}>
                <Image src={arrowIcon} onClick={toggleContent} w={4} h={4} />
              </ImageWrapper>
            </Box>
          </Box>
          {isMore && (
            <InfoBox mb={1}>
              <InfoText>{guideline.content}</InfoText>
            </InfoBox>
          )}
        </>
      )}
    </GuideLineInfoContainer>
  );
};

export default GuideLineInfo;

const GuideLineInfoContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 330px;
  height: auto;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5rem 0;
  padding: 1rem;
`;

const InfoText = styled(Text)`
  font-size: 0.8rem;
  color: var(--color-black);
`;

const InfoBox = styled(Box)`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const ImageWrapper = styled.div<{ isMore: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isMore }) => (isMore ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
