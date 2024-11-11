import {
  useDeleteSeniorInfo,
  useEditSeniorInfo,
  useSeniorInfo,
} from '@/pages/guard';
import { BasicButton, formatPhoneNumber } from '@/shared';
import { deleteIcon, editIcon } from '@/shared/assets';
import { Box, Flex, Text, Image, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

type SeniorInfoType = {
  seniorName: string;
  seniorPhoneNumber: string;
  seniorId: number;
};

const SeniorInfo = ({
  senior,
  refetch,
}: {
  senior: SeniorInfoType;
  refetch: () => void;
}) => {
  const deleteMutation = useDeleteSeniorInfo(refetch);
  const editMutation = useEditSeniorInfo(refetch);

  const {
    isEditing,
    seniorName,
    seniorPhoneNumber,
    setIsEditing,
    setSeniorName,
    setSeniorPhoneNumber,
    deleteSenior,
    editSenior,
  } = useSeniorInfo({
    senior,
    deleteMutation,
    editMutation,
  });

  return (
    <SeniorInfoContainer
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      {isEditing ? (
        <Flex flexDir='column' w='100%' gap='var(--space-xs)'>
          <Flex w='full' gap='var(--space-xxs)'>
            <Input
              value={seniorName}
              onChange={(e) => setSeniorName(e.target.value)}
              placeholder='이름을 입력하세요'
              size='md'
              border='1px solid var(--color-white-gray)'
              borderRadius='10px'
              height='30px'
            />
            <BasicButton height='30px' width='80px' onClick={editSenior}>
              저장
            </BasicButton>
            {/* <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              border='1px solid var(--color-primary)'
              borderRadius='5px'
              bg='var(--color-primary)'
              onClick={editSenior}
              fontSize='0.9rem'
              fontWeight={700}
              cursor='pointer'
              color='var(--color-white)'
            >
              저장
            </Box> */}
          </Flex>

          <Flex w='full' gap='var(--space-xxs)'>
            <Input
              value={seniorPhoneNumber}
              onChange={(e) => setSeniorPhoneNumber(e.target.value)}
              placeholder='010-0000-0000'
              size='md'
              border='1px solid var(--color-white-gray)'
              borderRadius='10px'
              height='30px'
            />
            <BasicButton
              height='30px'
              width='80px'
              themeType='gray'
              onClick={() => setIsEditing(false)}
            >
              취소
            </BasicButton>
            {/* <Box
              h='45%'
              display='flex'
              justifyContent='center'
              alignItems='center'
              ml={1}
              border='1px solid var(--color-white)'
              borderRadius='5px'
              bg='var(--color-white)'
              onClick={() => setIsEditing(false)}
              fontSize='0.9rem'
              fontWeight={700}
              cursor='pointer'
              color='var(--color-primary)'
            >
              취소
            </Box> */}
          </Flex>
        </Flex>
      ) : (
        <Box display='flex' flexDir='column' w='100%' gap='var(--space-xs)'>
          <InfoBox justifyContent='space-between'>
            <Flex>
              <Text fontSize='var(--font-size-lg)' fontWeight={700}>
                {senior.seniorName}
              </Text>
              <Text mt='4px' ml='4px'>
                시니어
              </Text>
            </Flex>
            <Box display='flex'>
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
                onClick={deleteSenior}
                mx='var(--space-xxs)'
              />
            </Box>
          </InfoBox>
          <InfoBox>
            <Text fontSize='var(--font-size-lg)'>
              {formatPhoneNumber(senior.seniorPhoneNumber)}
            </Text>
          </InfoBox>
        </Box>
      )}
    </SeniorInfoContainer>
  );
};

const SeniorInfoContainer = styled(Flex)`
  width: 100%;
  background-color: var(--color-white);
  border: 2px solid var(--color-white-gray);
  border-radius: 5px;
  padding: var(--space-md);
`;

const InfoBox = styled(Box)`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--space-xs);
`;

export default SeniorInfo;
