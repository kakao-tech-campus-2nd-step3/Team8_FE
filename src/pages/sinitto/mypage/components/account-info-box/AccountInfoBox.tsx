import { useEffect, useState } from 'react';

import {
  useGetSinittoBankInfo,
  useModifySinittoBankInformation,
  useRegisterSinittoBankInformation,
} from '@/pages';
import { BasicButton } from '@/shared';
import { Text, Button, Input, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const AccountInfoBox = () => {
  const { data: sinittoBankInfo, refetch } = useGetSinittoBankInfo();
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const modifyBankInfoMutation = useModifySinittoBankInformation();
  const [accountNumber, setAccountNumber] = useState(
    sinittoBankInfo?.accountNumber || ''
  );
  const [bankName, setBankName] = useState(sinittoBankInfo?.bankName || '');
  const registerBankInfoMutation = useRegisterSinittoBankInformation();

  useEffect(() => {
    if (isEditingAccount) {
      setAccountNumber(sinittoBankInfo?.accountNumber || '');
      setBankName(sinittoBankInfo?.bankName || '');
    }
  }, [isEditingAccount, sinittoBankInfo]);

  const handleSaveClick = () => {
    modifyBankInfoMutation.mutate(
      { accountNumber, bankName },
      {
        onSuccess: () => {
          setIsEditingAccount(false);
          refetch();
        },
      }
    );
  };

  const registerBank = () => {
    registerBankInfoMutation.mutate(
      { accountNumber, bankName },
      {
        onSuccess: () => {
          setIsEditingAccount(false);
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
        {isEditingAccount ? (
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
            {sinittoBankInfo?.accountNumber}
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
        {isEditingAccount ? (
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
            {sinittoBankInfo?.bankName}
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
          {sinittoBankInfo?.accountNumber ? '인증 완료' : '인증 미완료'}
        </Text>
      </Flex>
      <Flex justifyContent='flex-end' mt={2}>
        {isEditingAccount ? (
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
              onClick={() => setIsEditingAccount(false)}
            >
              취소
            </Button>
          </>
        ) : null}
      </Flex>
      {sinittoBankInfo?.accountNumber === null ? (
        <BasicButton
          themeType='default'
          width='338px'
          height='40px'
          onClick={registerBank}
        >
          계좌번호 등록하기
        </BasicButton>
      ) : (
        <BasicButton
          themeType='default'
          width='338px'
          height='40px'
          onClick={() => setIsEditingAccount(true)}
        >
          계좌번호 수정하기
        </BasicButton>
      )}
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
