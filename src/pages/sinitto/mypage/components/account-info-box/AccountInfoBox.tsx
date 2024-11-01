import { useEffect, useState } from 'react';

import { useModifySinittoBankInfomation } from '@/pages';
import { useSinittoInfo } from '@/shared';
import { Text, Button, Input, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

const AccountInfoBox = ({ isEditing, setIsEditing }: Props) => {
  const { data, refetch } = useSinittoInfo();
  const modifyBankInfoMutation = useModifySinittoBankInfomation();

  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');

  useEffect(() => {
    if (isEditing) {
      setAccountNumber(data?.accountNumber || '');
      setBankName(data?.bankName || '');
    }
  }, [isEditing, data]);

  const handleSaveClick = () => {
    modifyBankInfoMutation.mutate(
      { accountNumber, bankName },
      {
        onSuccess: () => {
          setIsEditing(false);
          refetch();
        },
      }
    );
  };

  return (
    <AccountBoxLayout mb={2}>
      <Flex w='full' justifyContent='space-between' alignItems='center'>
        <Text
          ml='1rem'
          fontSize='md'
          fontWeight={600}
          color='var(--color-gray)'
        >
          계좌번호
        </Text>
        {isEditing ? (
          <Input
            ml='1rem'
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder='계좌번호 입력'
            size='sm'
            width='60%'
            bg='var(--color-white)'
          />
        ) : (
          <Text mr='1rem' fontSize='16px' fontWeight={600}>
            {data?.accountNumber}
          </Text>
        )}
      </Flex>
      <Flex w='full' justifyContent='space-between' mt={2} alignItems='center'>
        <Text
          ml='1rem'
          fontSize='md'
          fontWeight={600}
          color='var(--color-gray)'
        >
          은행 이름
        </Text>
        {isEditing ? (
          <Input
            ml='1rem'
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder='해당 은행 기입'
            size='sm'
            width='40%'
            bg='var(--color-white)'
          />
        ) : (
          <Text mr='1rem' fontSize='md' fontWeight={600}>
            {data?.bankName}
          </Text>
        )}
      </Flex>
      <Flex w='full' justifyContent='space-between' mt={2} alignItems='center'>
        <Text
          ml='1rem'
          fontSize='md'
          fontWeight={600}
          color='var(--color-gray)'
        >
          계좌 인증 여부
        </Text>
        <Text mr='1rem' fontSize='md' fontWeight={600}>
          {data?.accountNumber ? '인증 완료' : '인증 미완료'}
        </Text>
      </Flex>
      <Flex justifyContent='flex-end' mt={2}>
        {isEditing ? (
          <>
            <Button
              w='100px'
              h='40px'
              fontSize='md'
              colorScheme='teal'
              onClick={handleSaveClick}
              mr={2}
            >
              수정 완료
            </Button>
            <Button
              w='100px'
              h='40px'
              fontSize='md'
              colorScheme='red'
              onClick={() => setIsEditing(false)}
            >
              취소
            </Button>
          </>
        ) : null}
      </Flex>
    </AccountBoxLayout>
  );
};

export default AccountInfoBox;

const AccountBoxLayout = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  width: 100%;
  max-width: 338px;
  height: auto;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 1rem;
`;
