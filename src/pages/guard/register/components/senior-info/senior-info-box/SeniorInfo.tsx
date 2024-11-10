import {
  useDeleteSeniorInfo,
  useEditSeniorInfo,
  useSeniorInfo,
} from '@/pages/guard';
import { formatPhoneNumber } from '@/shared';
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
        <Box display='flex' flexDir='row' w='100%' maxW='300px'>
          <Box w='80%'>
            <Input
              fontSize='0.9rem'
              fontWeight={700}
              mb={2}
              value={seniorName}
              onChange={(e) => setSeniorName(e.target.value)}
              placeholder='이름을 입력하세요'
              size='sm'
              bg='var(--color-white)'
              border='1px solid var(--color-white)'
              borderRadius='10px'
            />
            <Input
              value={seniorPhoneNumber}
              onChange={(e) => setSeniorPhoneNumber(e.target.value)}
              placeholder='010-0000-0000'
              bg='var(--color-white)'
              border='1px solid var(--color-white)'
              borderRadius='10px'
              size='sm'
            />
          </Box>
          <Box
            w='20%'
            display='flex'
            flexDir='column'
            justifyContent='space-between'
          >
            <Box
              h='45%'
              display='flex'
              justifyContent='center'
              alignItems='center'
              ml={1}
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
            </Box>
            <Box
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
            </Box>
          </Box>
        </Box>
      ) : (
        <Box display='flex' flexDir='column' w='100%' maxW='300px'>
          <Box display='flex' w='100%' justifyContent='space-between'>
            <Text fontSize='0.9rem' fontWeight={700} mb={2}>
              {senior.seniorName}
            </Text>
            <Box display='flex'>
              <Image
                src={editIcon}
                w={6}
                h={6}
                cursor='pointer'
                onClick={() => setIsEditing(true)}
              />
              <Image
                src={deleteIcon}
                w={6}
                h={6}
                ml={1}
                cursor='pointer'
                onClick={deleteSenior}
              />
            </Box>
          </Box>
          <InfoBox mb={1}>
            <InfoText>전화번호</InfoText>
            <InfoText>{formatPhoneNumber(senior.seniorPhoneNumber)}</InfoText>
          </InfoBox>
        </Box>
      )}
    </SeniorInfoContainer>
  );
};

const SeniorInfoContainer = styled(Flex)`
  width: 100%;
  max-width: 370px;
  height: 5rem;
  min-height: 5rem;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5rem 0;
`;

const InfoText = styled(Text)`
  font-size: 0.8rem;
  color: var(--color-black);
`;

const InfoBox = styled(Box)`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default SeniorInfo;
