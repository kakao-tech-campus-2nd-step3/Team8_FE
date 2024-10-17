import { useEffect, useState } from 'react';

import {
  useGetSinittoInformation,
  useModifySinittoInformation,
} from '../../store/hooks';
import { Box, Text, Button, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

const SinittoProfileBox = ({ isEditing, setIsEditing }: Props) => {
  const { data, isLoading, isError, refetch } = useGetSinittoInformation();
  const modifySinittoInfoMutation = useModifySinittoInformation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (isEditing) {
      setName(data?.name || '');
      setPhoneNumber(data?.phoneNumber || '');
    }
  }, [isEditing, data]);

  const handleSaveClick = () => {
    const modifiedSinittoInfo = {
      name: name,
      phoneNumber: phoneNumber,
      email: String(data?.email),
      accountNumber: String(data?.accountNumber),
      bankName: String(data?.bankName),
    };
    modifySinittoInfoMutation.mutate(modifiedSinittoInfo, {
      onSuccess: () => {
        setIsEditing(false);
        refetch();
      },
    });
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 가져오는 데 오류가 발생했습니다.</div>;

  return (
    <SinittoProfileBoxLayout mb={2}>
      <Text ml='1rem' mt={3} fontSize='18px' fontWeight={700}>
        {data?.name} 님 환영합니다.
      </Text>
      <Box display='flex' w='100%' justifyContent='space-between' mt={2}>
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
            ml='1rem'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='이름 입력'
            size='sm'
            width='40%'
            bg='var(--color-white)'
          />
        ) : (
          <Text mr='1rem' fontSize='16px' fontWeight={600}>
            {data?.name}
          </Text>
        )}
      </Box>
      <Box display='flex' w='100%' justifyContent='space-between' mt={2}>
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
            ml='1rem'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='전화번호 입력'
            size='sm'
            width='60%'
            bg='var(--color-white)'
          />
        ) : (
          <Text mr='1rem' fontSize='16px' fontWeight={600}>
            {data?.phoneNumber}
          </Text>
        )}
      </Box>
      <Box display='flex' justifyContent='flex-end' mt={2}>
        {isEditing ? (
          <>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              colorScheme='teal'
              onClick={handleSaveClick}
              mr={2}
            >
              수정 완료
            </Button>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              colorScheme='red'
              onClick={() => setIsEditing(false)}
            >
              취소
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
  background-color: #f2f2f2;
  width: 100%;
  max-width: 338px;
  height: auto;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 1rem;
`;
