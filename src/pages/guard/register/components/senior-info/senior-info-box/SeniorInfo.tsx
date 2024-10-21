import { useState } from 'react';

import { useDeleteSeniorInfo, useEditSeniorInfo } from '../../../api';
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
  const [isEditing, setIsEditing] = useState(false);
  const [seniorName, setSeniorName] = useState(senior.seniorName);
  const [seniorPhoneNumber, setSeniorPhoneNumber] = useState(
    senior.seniorPhoneNumber
  );

  const deleteMutation = useDeleteSeniorInfo(refetch);
  const editMutation = useEditSeniorInfo(refetch);

  const handleDelete = () => {
    deleteMutation.mutate(senior.seniorId);
  };

  const handleEdit = () => {
    editMutation.mutate({
      seniorId: senior.seniorId,
      seniorInfo: { seniorName, seniorPhoneNumber },
    });
    setIsEditing(false);
  };

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
              placeholder='전화번호를 입력하세요'
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
        <Box display='flex' flexDir='column' w='100%' maxW='300px'>
          <Box display='flex' w='100%' justifyContent='space-between'>
            <Text fontSize='0.9rem' fontWeight={700} mb={2}>
              {senior.seniorName}
            </Text>
            <Box display='flex'>
              <Image
                src={editIcon}
                w={4}
                h={4}
                cursor='pointer'
                onClick={() => setIsEditing(true)}
              />
              <Image
                src={deleteIcon}
                w={4}
                h={4}
                ml={1}
                cursor='pointer'
                onClick={handleDelete}
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
  max-width: 330px;
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
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default SeniorInfo;
