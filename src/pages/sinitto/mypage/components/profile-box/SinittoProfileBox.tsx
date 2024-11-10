import { useEffect, useState } from 'react';

import { useModifySinittoInformation } from '@/pages';
import {
  formatPhoneNumber,
  Logout,
  parsePhoneNumber,
  useSinittoInfo,
  validatePhoneNumber,
  validateName,
} from '@/shared';
import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

const SinittoProfileBox = ({ isEditing, setIsEditing }: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { data: seniorInfo, refetch } = useSinittoInfo();
  const modifySinittoInfoMutation = useModifySinittoInformation();

  useEffect(() => {
    if (isEditing) {
      setName(seniorInfo?.name || '');
      setPhoneNumber(seniorInfo?.phoneNumber || '');
    }
  }, [isEditing, seniorInfo]);

  const handleSaveClick = () => {
    if (!validateName(name) || !validatePhoneNumber(phoneNumber)) {
      alert(
        '유효하지 않은 형식입니다.\n예) 이름 : 홍길동\n전화번호 : 010-1234-5678'
      );
      setName('');
      setPhoneNumber('');
      return;
    } else {
      const modifiedSinittoInfo = {
        name: name,
        phoneNumber: parsePhoneNumber(phoneNumber),
      };
      modifySinittoInfoMutation.mutate(modifiedSinittoInfo, {
        onSuccess: () => {
          setIsEditing(false);
          refetch();
        },
      });
    }
  };

  return (
    <SinittoProfileBoxLayout mb={2}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Text ml='1rem' fontSize='18px' fontWeight={700}>
          {seniorInfo?.name} 님 환영합니다.
        </Text>
        <Logout />
      </Flex>
      <Box
        display='flex'
        w='100%'
        height='2rem'
        justifyContent='space-between'
        alignItems='center'
        mt={2}
      >
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          이름
        </Text>
        {isEditing ? (
          <Input
            fontSize='16px'
            fontWeight='bold'
            value={name}
            placeholder='홍길동'
            onChange={(e) => setName(e.target.value)}
            width='5rem'
            height='100%'
            bg='var(--color-white)'
          />
        ) : (
          <Text textAlign='right' w='3rem' fontSize='16px' fontWeight={600}>
            {seniorInfo?.name}
          </Text>
        )}
      </Box>
      <Box
        display='flex'
        w='100%'
        height='2rem'
        justifyContent='space-between'
        alignItems='center'
        mt={2}
      >
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          전화번호
        </Text>
        {isEditing ? (
          <Input
            fontSize='16px'
            fontWeight='bold'
            value={formatPhoneNumber(phoneNumber)}
            placeholder='010-0000-0000'
            onChange={(e) => setPhoneNumber(e.target.value)}
            width='9rem'
            height='100%'
            bg='var(--color-white)'
          />
        ) : (
          <Text w='9rem' textAlign='right' fontSize='16px' fontWeight={600}>
            {formatPhoneNumber(String(seniorInfo?.phoneNumber))}
          </Text>
        )}
      </Box>
      <Box display='flex' w='100%' mt={1.5} justifyContent='center' gap={1}>
        {isEditing ? (
          <>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              bg='var(--color-primary)'
              color='var(--color-white)'
              fontWeight='bold'
              onClick={handleSaveClick}
              mr={2}
            >
              수정 완료
            </Button>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              bg='var(--color-gray)'
              color='var(--color-white)'
              fontWeight='bold'
              onClick={() => setIsEditing(false)}
            >
              수정 취소
            </Button>
          </>
        ) : null}
      </Box>
    </SinittoProfileBoxLayout>
  );
};

export default SinittoProfileBox;

const SinittoProfileBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-gray);
  width: 100%;
  max-width: 338px;
  height: auto;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 1rem;
`;
